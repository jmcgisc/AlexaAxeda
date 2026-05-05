import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
// ---- HEURÍSTICAS DE PALABRAS CLAVE PARA BÚSQUEDA DE TEXTO
function keywordsHeuristic(q) {
  const s = q.toLowerCase();
  const kws = [];
  if (/(ubic|dónde|direccion|dirección|localiz)/.test(s)) kws.push("ubic");
  if (/(amenidad|servici|amenities)/.test(s)) kws.push("amen");
  if (/(escritur|notar|legal|contrato)/.test(s)) kws.push("escritur");
  if (/(pago|mensual|financia|anticipo|plan)/.test(s)) kws.push("pago");
  if (/(plusval|roi|rendimien|invers)/.test(s)) kws.push("plusval");
  if (/(precio|costo|cuánto|vale|cuestan|mensualidad)/.test(s)) kws.push("precio");   
  return [...new Set(kws)];
}

// ---- BÚSQUEDA POR EMBEDDINGS (RPC)
async function searchByEmbeddings(supabase, queryEmbedding, { threshold = 0.05, k = 12 } = {}) {
  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: queryEmbedding,
    match_threshold: threshold,
    match_count: k,
  });
  if (error) {
    console.error("❌ RPC match_documents error:", error);
    return [];
  }
  if (!Array.isArray(data)) return [];
  return data;
}

// ---- BÚSQUEDA POR TEXTO (FALLBACK)
async function searchByText(supabase, query, limit = 8) {
  const kw = keywordsHeuristic(query);
  let q = query;
  const likes = [];
  for (const k of kw) likes.push(`content.ilike.%${k}%`);
  if (!likes.length) likes.push(`content.ilike.%${q.split(/\s+/)[0]}%`);

  const { data, error } = await supabase
    .from("documents")
    .select("id, content")
    .or(likes.join(","))
    .limit(limit);

  if (error) {
    console.error("❌ Text search error:", error);
    return [];
  }
  return Array.isArray(data) ? data.map((d) => ({ id: d.id, content: d.content, similarity: 0.25 })) : [];
}

// ---- CONSTRUCCIÓN DE CONTEXTO
function buildContext(matches, maxChars = 3500) {
  const sorted = [...matches].sort((a, b) => (b.similarity || 0) - (a.similarity || 0));
  const used = [];
  let total = 0;
  for (const m of sorted) {
    const c = (m.content || "").trim();
    if (!c) continue;
    if (total + c.length > maxChars) break;
    used.push(`(sim: ${Number(m.similarity || 0).toFixed(2)} | id: ${m.id || "s/n"})\n${c}`);
    total += c.length;
  }
  return used.join("\n\n---\n\n");
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL_IA || process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY_IA || process.env.SUPABASE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error("Faltan credenciales de Supabase");
      return res.status(500).json({ error: "Faltan credenciales de base de datos" });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error("Falta API Key de OpenAI");
      return res.status(500).json({ error: "Falta API Key de OpenAI" });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // --- 🔴 INICIO: PRUEBA DE CONEXIÓN RÁPIDA ---
    const { error: testError } = await supabase
      .from('documents')
      .select('id')
      .limit(1);

    if (testError) {
      console.error("🔥🔥🔥 FALLO DE CONEXIÓN A SUPABASE:", testError.message);
      return res.status(500).json({ reply: "Error crítico: No se pudo conectar a la base de datos." });
    }
    console.log("✅ Conexión a Supabase exitosa.");
    // --- 🔴 FIN: PRUEBA DE CONEXIÓN RÁPIDA ---

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método no permitido" });
    }

    // Vercel parses the body automatically if Content-Type is application/json
    const body = typeof req.body === 'string' ? JSON.parse(req.body || "{}") : (req.body || {});
    const { message } = body;
    
    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Mensaje vacío" });
    }

    console.log("💬 Mensaje:", message);

    // 1) Embedding de la consulta
    const embRes = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });
    const queryEmbedding = embRes.data?.[0]?.embedding;

    // 2) Recuperación por embeddings
    let matches = [];
    if (queryEmbedding?.length) {
      matches = await searchByEmbeddings(supabase, queryEmbedding, { threshold: 0.05, k: 12 });
      console.log("📄 Matches por embeddings:", matches?.length || 0);
    }

    // 3) Fallback a búsqueda por texto si no hay matches
    if (!matches || matches.length === 0) {
      const textHits = await searchByText(supabase, message, 8);
      console.log("📝 Matches por texto (fallback):", textHits?.length || 0);
      matches = textHits;
    }

    // 3.1) Fuerza búsqueda de precios si es pregunta de precio
    const isPriceQuestion = /precio|costo|cuánto|vale|cuestan|mensualidad/.test(message.toLowerCase());
    if (isPriceQuestion && (!matches || matches.length === 0)) {
      console.log("💰 Fuerza búsqueda por precio...");
      const { data, error } = await supabase
        .from("documents")
        .select("id, content")
        .or("content.ilike.%precio%,content.ilike.%mensual%,content.ilike.%\\$%,content.ilike.%[0-9]%")
        .limit(5);

      if (!error && data?.length) {
        matches = data.map((d) => ({ id: d.id, content: d.content, similarity: 0.3 }));
      }
    }

    // 4) Contexto
    const contextText =
      matches && matches.length > 0
        ? buildContext(matches)
        : "No encontré información en los documentos sobre eso. Para conocer precios y planes actualizados de Isla Diamante, contacta con nuestra asesora Alexa Delgado 📲 +52 55 7013 7764.";

    console.log("📌 Contexto (primeros 400 chars):", contextText.slice(0, 400));

    // 5) Prompt
    const systemPrompt = `
Eres el Coordinador de Desarrollos Diamante. 
Usa EXCLUSIVAMENTE la información del CONTEXTO si responde la pregunta.
Si el contexto no contiene la respuesta, di explícitamente lo que hay en CONTEXTO.
No inventes ni respondas genérico si hay contexto relevante. 
Al final, sugiere visitar desarrollosdiamante.com.

CONTEXTO:
---
${contextText}
---
    `.trim();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      temperature: 0.2,
    });

    const reply = completion.choices?.[0]?.message?.content || "No se pudo generar respuesta.";
    console.log("🤖 Respuesta:", reply.slice(0, 300));

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("🔥 Error chat.js:", err);
    return res.status(500).json({ error: "Error procesando mensaje" });
  }
}
