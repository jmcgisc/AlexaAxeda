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
  return [...new Set(kws)];
}

// ---- BÚSQUEDA POR EMBEDDINGS (RPC)
async function searchByEmbeddings(queryEmbedding, { threshold = 0.2, k = 8 } = {}) {
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
async function searchByText(query, limit = 5) {
  const kw = keywordsHeuristic(query);
  let q = query;
  // Si detectamos intención, buscamos por ILIKE con ese “stem”
  const likes = [];
  for (const k of kw) likes.push(`content.ilike.%${k}%`);
  // Si no hay heurística, intentamos con palabra clave más fuerte de la pregunta
  if (!likes.length) likes.push(`content.ilike.%${q.split(/\s+/)[0]}%`);

  // Construimos OR manual
  // Nota: con supabase-js v2 no hay "or" simple en JS, usamos .or() en la query string
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
  // Ordena por similitud (desc) si existe
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
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Método no permitido" };
    }

    const { message } = JSON.parse(event.body || "{}");
    if (!message || !message.trim()) {
      return { statusCode: 400, body: "Mensaje vacío" };
    }

    console.log("💬 Mensaje:", message);
    console.log("🔑 SUPABASE_URL:", process.env.SUPABASE_URL);
    console.log("🔑 SUPABASE_KEY cargada:", !!process.env.SUPABASE_KEY);

    // 1) Embedding de la consulta
    const embRes = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });
    const queryEmbedding = embRes.data?.[0]?.embedding;
    console.log("📐 Embedding len:", queryEmbedding?.length);

    // 2) Recuperación por embeddings (top-k + threshold bajo)
    let matches = [];
    if (queryEmbedding?.length) {
      matches = await searchByEmbeddings(queryEmbedding, { threshold: 0.2, k: 8 });
      console.log("📄 Matches por embeddings:", matches?.length || 0);
    }

    // 3) Fallback a búsqueda por texto si no hay matches
    if (!matches || matches.length === 0) {
      const textHits = await searchByText(message, 6);
      console.log("📝 Matches por texto (fallback):", textHits?.length || 0);
      matches = textHits;
    }

    // 4) Contexto
    const contextText =
      matches && matches.length > 0
        ? buildContext(matches)
        : "Sin contexto. Si el usuario pregunta por ubicación, amenidades, pagos, escrituración o plusvalía, solicita permiso para brindar una respuesta general y siempre invita a visitarnos.";

    console.log("📌 Contexto (primeros 400 chars):", contextText.slice(0, 400));

    // 5) Prompt que obliga a usar el contexto
    const systemPrompt = `
Eres el Coordinador de Desarrollos Diamante. 
DEBES responder usando EXCLUSIVAMENTE la información del CONTEXTO si ésta responde a la pregunta.
Si el contexto no contiene la respuesta, di explícitamente: "No encontré información en los documentos sobre eso."
No inventes, no respondas genérico si hay contexto relevante. 
Al final, sugiere visitar desarrollosdiamante.com.

CONTEXTO (fragmentos con similitud e id):
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
