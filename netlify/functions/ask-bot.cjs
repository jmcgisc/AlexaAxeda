const { OpenAI } = require("openai");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

const SIMILARITY_THRESHOLD = 0.85;

// Cargar FAQ embebido localmente
const faqs = JSON.parse(
  fs.readFileSync(path.join(__dirname, "faqs_isla_diamante.json"), "utf8")
);

// Función para calcular similitud coseno entre dos vectores
const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce((acc, val, i) => acc + val * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
};

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }

    const body = JSON.parse(event.body);
    const { question, user_id = null, metadata = {} } = body;

    if (!question) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "No question provided" }),
      };
    }

    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: question,
    });
    const [{ embedding }] = embeddingRes.data;

    // Buscar coincidencia en Supabase
    let answer;
    let matches;
    try {
      const supabaseRes = await supabase.rpc("match_faq_embeddings", {
        query_embedding: embedding,
        match_threshold: SIMILARITY_THRESHOLD,
        match_count: 1,
      });
      matches = supabaseRes.data;
    } catch (err) {
      console.warn("Supabase fallback por error:", err.message);
    }

    if (matches && matches.length > 0) {
      answer = matches[0].answer;
    } else {
      // Fallback: buscar en JSON local
      let bestMatch = null;
      let bestScore = 0;
      for (const item of faqs) {
        const emb = await openai.embeddings.create({
          model: "text-embedding-ada-002",
          input: item.question,
        });
        const similarity = cosineSimilarity(embedding, emb.data[0].embedding);
        if (similarity > bestScore) {
          bestScore = similarity;
          bestMatch = item;
        }
      }

      if (bestMatch && bestScore >= SIMILARITY_THRESHOLD) {
        answer = bestMatch.answer;
      } else {
        // Consultar directamente al modelo
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "Eres un asistente experto en inversiones inmobiliarias, especializado en Isla Diamante Cancún. Responde de forma útil y clara con base en información del proyecto.",
            },
            { role: "user", content: question },
          ],
        });
        answer = response.choices?.[0]?.message?.content;
      }
    }

    await supabase.from("chatbot_interactions").insert([
      {
        question,
        answer,
        user_id,
        metadata,
        created_at: new Date().toISOString(),
      },
    ]);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ answer }),
    };
  } catch (err) {
    console.error("Error en ask-bot:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || "Error interno del servidor" }),
    };
  }
};
