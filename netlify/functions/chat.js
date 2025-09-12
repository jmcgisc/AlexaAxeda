const OpenAI = require("openai");
const { createClient } = require("@supabase/supabase-js");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Método no permitido" };
    }

    const { message } = JSON.parse(event.body);

    // 1. Crear embedding de la consulta del usuario
    const embeddingRes = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });
    const queryEmbedding = embeddingRes.data[0].embedding;

    // 2. Buscar fragmentos relevantes en Supabase
    const { data: matches } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_threshold: 0.6, // ajusta sensibilidad
      match_count: 3,        // cuantos fragmentos quieres
    });

    const contextText = matches.map((m) => m.content).join("\n---\n");

    // 3. Pasar contexto al modelo de chat
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
          Eres el Coordinador de Desarrollos Diamante.
          Usa el siguiente contexto (si es relevante) para responder de manera precisa:
          ---
          ${contextText}
          ---
          Si el contexto no es útil, responde de forma general.
          Siempre invita a visitar desarrollosdiamante.com.
          `,
        },
        { role: "user", content: message },
      ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: completion.choices[0].message.content }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Error procesando mensaje" };
  }
};
