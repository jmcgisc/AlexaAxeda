// netlify/functions/chat.js
const OpenAI = require("openai");
const { createClient } = require("@supabase/supabase-js");

// ---- CLIENTES
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL_IA,
  process.env.SUPABASE_KEY_IA
);

// ---- RESPUESTA POR DEFECTO
const fallbackReply =
  "Para más información contacta con nuestro asesor Alexa Delgado Línea Asesor: +(52) 55 7013 7764";

// ---- HEURÍSTICAS DE PALABRAS CLAVE
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
  try {
    const { data, error } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_threshold: threshold,
      match_count: k,
    });
    if (error) {
      console.error("❌ RPC match_documents error:", error);
      return [];
    }
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("🔥 Error en searchByEmbeddings:", err);
    return [];
  }
}

// ---- BÚSQUEDA POR TEXTO (FALLBACK)
async function searchByText(query, limit = 5) {
  try {
    const kw = keywordsHeuristic(query);
    const likes = [];
    for (const k of kw) likes.push(`content.ilike.%${k}%`);
    if (!likes.length) likes.push(`content.ilike.%${query.split(/\s+/)[0]}%`);

    const { data, error } = await supabase
      .from("documents")
      .select("id, content")
      .or(likes.join(","))
      .limit(limit);

    if (error) {
      console.error("❌ Text search error:", error);
      return [];
    }
    return Array.isArray(data)
      ? data.map((d) => ({ id: d.id, content: d.content, similarity: 0.25 }))
      : [];
  } catch (err) {
    console.error("🔥 Error en searchByText:", err);
    return [];
  }
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
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Método no permitido" };
    }

    const { message } = JSON.parse(event.body || "{}");
    if (!message || !message.trim()) {
      return { statusCode: 400, body: "Mensaje vacío" };
    }

    console.log("💬 Mensaje:", message);

    // 1) Intentar embeddings
    let queryEmbedding = null;
    try {
      const embRes = await client.embeddings.create({
        model: "text-embedding-3-small",
        input: message,
      });
      queryEmbedding = embRes.data?.[0]?.embedding;
      console.log("📐 Embedding len:", queryEmbedding?.length);
    } catch (err) {
      console.error("⚠️ Error generando embeddings:", err);
    }

    // 2) Recuperar contexto
    let matches = [];
    if (queryEmbedding?.length) {
      matches = await searchByEmbeddings(queryEmbedding, { threshold: 0.2, k: 8 });
    }
    if (!matches || matches.length === 0) {
      const textHits = await searchByText(message, 6);
      matches = textHits;
    }

    const contextText =
      matches && matches.length > 0
        ? buildContext(matches)
        : "";

    // 3) Prompt
    const systemPrompt = `
Eres el Coordinador de Desarrollos Diamante.
Debes responder **usando exclusivamente el CONTEXTO** si contiene la información.
Si el contexto no responde a la pregunta, no inventes y responde exactamente: 
"${fallbackReply}"
Al final de toda respuesta válida, también sugiere visitar desarrollosdiamante.com.

CONTEXTO:
---
${contextText}
---
    `.trim();

    // 4) Generar respuesta
    let reply = fallbackReply;
    try {
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.2,
      });
      reply = completion.choices?.[0]?.message?.content || fallbackReply;
    } catch (err) {
      console.error("⚠️ Error en completions:", err);
      reply = fallbackReply;
    }

    console.log("🤖 Respuesta:", reply.slice(0, 200));

    return { statusCode: 200, body: JSON.stringify({ reply }) };
  } catch (err) {
    console.error("🔥 Error chat.js (global):", err);
    return { statusCode: 500, body: JSON.stringify({ reply: fallbackReply }) };
  }
};
