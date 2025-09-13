// netlify/functions/chat.js
const OpenAI = require("openai");
const { createClient } = require("@supabase/supabase-js");
const fetch = require("node-fetch");

// ---- CLIENTES
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL_IA, process.env.SUPABASE_KEY_IA);

// ---- HEURÍSTICAS DE PALABRAS CLAVE
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

// ---- BÚSQUEDA POR EMBEDDINGS
async function searchByEmbeddings(queryEmbedding, { threshold = 0.15, k = 8 } = {}) {
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
}

// ---- BÚSQUEDA POR TEXTO
async function searchByText(query, limit = 5) {
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
  return Array.isArray(data) ? data.map((d) => ({ id: d.id, content: d.content, similarity: 0.25 })) : [];
}

// ---- CONSTRUCCIÓN DE CONTEXTO
function buildContext(matches, maxChars = 3500) {
  const sorted = [...matches].sort((a, b) => (b.similarity || 0) - (a.similarity || 0));
  let total = 0;
  const used = [];
  for (const m of sorted) {
    const c = (m.content || "").trim();
    if (!c) continue;
    if (total + c.length > maxChars) break;
    used.push(c);
    total += c.length;
  }
  return used.join("\n\n---\n\n");
}

// ---- BÚSQUEDA EN INTERNET
async function searchInternet(query) {
  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;
    const res = await fetch(url);
    const json = await res.json();

    const text = [
      json.AbstractText,
      ...(json.RelatedTopics || []).map((t) => t.Text).slice(0, 3),
    ]
      .filter(Boolean)
      .join("\n\n");

    console.log("🌐 Texto recuperado de internet:", text.slice(0, 200));
    return text || "";
  } catch (err) {
    console.error("🌐 Error en búsqueda web:", err);
    return "";
  }
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

    // 1) Embedding de la consulta
    const embRes = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });
    const queryEmbedding = embRes.data?.[0]?.embedding;

    // 2) Recuperación
    let matches = [];
    if (queryEmbedding?.length) {
      matches = await searchByEmbeddings(queryEmbedding, { threshold: 0.15, k: 8 });
    }
    if (!matches || matches.length === 0) {
      matches = await searchByText(message, 6);
    }

    // 3) Contexto inicial
    let contextText = matches && matches.length > 0 ? buildContext(matches) : "";

    // 4) Preguntas de precio
    const lowerMsg = message.toLowerCase();
    const isPriceQuestion = /precio|costo|cuánto|vale|cuestan|mensualidad/.test(lowerMsg);
    if (isPriceQuestion && !/[0-9]/.test(contextText)) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          reply:
            "No encontré información en los documentos sobre precios. Para más información contacta con nuestro asesor **Alexa Delgado** al 📲 +52 55 7013 7764.",
        }),
      };
    }

    // 5) Si no hay nada, intentamos internet
    if (!contextText) {
      console.log("🌐 Intentando búsqueda en internet...");
      const internetText = await searchInternet(`Isla Diamante Cancún ${message}`);
      contextText = internetText || "No encontré información en los documentos ni en fuentes externas.";
    }

    // 6) Prompt
    const systemPrompt = `
Eres el Coordinador de Desarrollos Diamante. 
Usa EXCLUSIVAMENTE la información del CONTEXTO si responde la pregunta.
Si el contexto no contiene la respuesta, di: "No encontré información en los documentos sobre eso."
Si se usó información de internet, indícalo al usuario.
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
    console.log("🤖 Respuesta:", reply.slice(0, 200));

    return { statusCode: 200, body: JSON.stringify({ reply }) };
  } catch (err) {
    console.error("🔥 Error chat.js:", err);
    return { statusCode: 500, body: "Error procesando mensaje" };
  }
};
