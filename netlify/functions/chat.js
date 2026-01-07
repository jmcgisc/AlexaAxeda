// netlify/functions/chat.js
const OpenAI = require("openai");
const { createClient } = require("@supabase/supabase-js");

// ---- CLIENTES
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL_IA, process.env.SUPABASE_KEY_IA);

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
async function searchByEmbeddings(queryEmbedding, { threshold = 0.05, k = 12 } = {}) { // 🔥 más flexible
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
async function searchByText(query, limit = 8) {
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

exports.handler = async (event) => {
  try {

    // --- 🔴 INICIO: PRUEBA DE CONEXIÓN RÁPIDA ---
    const { error: testError } = await supabase
      .from('documents') // Intenta leer tu tabla
      .select('id')      // Solo 1 columna
      .limit(1);         // Solo 1 fila

    if (testError) {
      // Si hay un error aquí, es un fallo de conexión
      console.error("🔥🔥🔥 FALLO DE CONEXIÓN A SUPABASE:", testError.message);
      
      // Devuelve un error claro al usuario
      return { 
        statusCode: 500, 
        body: JSON.stringify({ reply: "Error crítico: No se pudo conectar a la base de datos." }) 
      };
    }
    console.log("✅ Conexión a Supabase exitosa.");
    // --- 🔴 FIN: PRUEBA DE CONEXIÓN RÁPIDA ---

    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Método no permitido" };
    }

    const { message } = JSON.parse(event.body || "{}");
    if (!message || !message.trim()) {
      return { statusCode: 400, body: "Mensaje vacío" };
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
      matches = await searchByEmbeddings(queryEmbedding, { threshold: 0.05, k: 12 });
      console.log("📄 Matches por embeddings:", matches?.length || 0);
    }

    // 3) Fallback a búsqueda por texto si no hay matches
    if (!matches || matches.length === 0) {
      const textHits = await searchByText(message, 8);
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

    return { statusCode: 200, body: JSON.stringify({ reply }) };
  } catch (err) {
    console.error("🔥 Error chat.js:", err);
    return { statusCode: 500, body: "Error procesando mensaje" };
  }
};
