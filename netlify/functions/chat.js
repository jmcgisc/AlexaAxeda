const OpenAI = require("openai");
const { createClient } = require("@supabase/supabase-js");

// 🔑 Inicializa clientes
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY_IA });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY_IA);

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Método no permitido" };
    }

    const { message } = JSON.parse(event.body);

    console.log("💬 Mensaje recibido:", message);
    console.log("🔑 SUPABASE_URL:", process.env.SUPABASE_URL);
    console.log("🔑 SUPABASE_KEY cargada:", !!process.env.SUPABASE_KEY);

    // 1. Crear embedding de la consulta
    const embeddingRes = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });
    const queryEmbedding = embeddingRes.data[0].embedding;
    console.log("📐 Embedding generado, longitud:", queryEmbedding.length);

    // 2. Buscar fragmentos relevantes en Supabase
    const { data: matches, error } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_threshold: 0.3, // prueba con 0.5 (más flexible)
      match_count: 3,
    });

    if (error) {
      console.error("❌ Error en match_documents:", error);
    }

    if (!matches || matches.length === 0) {
      console.warn("⚠️ No se encontraron matches en Supabase");
    } else {
      console.log("📄 Matches recibidos:", matches.length);
    }

    // fallback para evitar crash
    const safeMatches = Array.isArray(matches) ? matches : [];
    const contextText =
      safeMatches.length > 0
        ? safeMatches.map((m) => m.content).join("\n---\n")
        : "No se encontró contexto relevante en documentos.";

    // 3. Pasar contexto al modelo
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            Eres el Coordinador de Desarrollos Diamante.
            Debes responder **usando exclusivamente la información del contexto** cuando esté disponible.
            Si el contexto no responde a la pregunta, di claramente: "No encontré información en los documentos".
            No inventes ni des respuestas genéricas.
            Siempre invita a visitar desarrollosdiamante.com.
            ---
            Contexto:
            ${contextText}
          `,
        },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    console.log("🤖 Respuesta generada:", reply);

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.error("🔥 Error general en chat.js:", err);
    return { statusCode: 500, body: "Error procesando mensaje" };
  }
};
