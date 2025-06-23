const { OpenAI } = require("openai");
const { createClient } = require("@supabase/supabase-js");
const faqs = require("./faqs_isla_diamante");

// Inicializar OpenAI y Supabase
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

// Umbral de similitud
const SIMILARITY_THRESHOLD = 0.85;

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

    // Crear embedding para la pregunta
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: question,
    });

    const [{ embedding }] = embeddingRes.data;

    // Buscar en Supabase (si ya tienes embebidas las FAQs allí)
    const { data: matches, error } = await supabase.rpc("match_faq_embeddings", {
      query_embedding: embedding,
      match_threshold: SIMILARITY_THRESHOLD,
      match_count: 1,
    });

    let answer;

    if (error) console.error("Error buscando en Supabase:", error);

    if (matches && matches.length > 0) {
      answer = matches[0].answer;
    } else {
      // Si no hay match, buscar manualmente entre las FAQs locales
      for (const faq of faqs) {
        const similarity = await openai.embeddings.create({
          model: "text-embedding-ada-002",
          input: [faq.question, question],
        });

        const [faqVector, userVector] = similarity.data.map((e) => e.embedding);
        const dotProduct = faqVector.reduce((sum, v, i) => sum + v * userVector[i], 0);
        const normFaq = Math.sqrt(faqVector.reduce((sum, v) => sum + v * v, 0));
        const normUser = Math.sqrt(userVector.reduce((sum, v) => sum + v * v, 0));
        const cosineSim = dotProduct / (normFaq * normUser);

        if (cosineSim >= SIMILARITY_THRESHOLD) {
          answer = faq.answer;
          break;
        }
      }
    }

    // Si sigue sin respuesta, pregunta al modelo
    if (!answer) {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
Eres un asistente especializado en el desarrollo Isla Diamante en Cancún. 
Responde con precisión, brevedad y basándote únicamente en la información proporcionada.
Si no sabes algo, di que no tienes información disponible.
          `,
          },
          { role: "user", content: question },
        ],
      });

      answer = response.choices?.[0]?.message?.content || "Lo siento, no tengo información para esa pregunta.";
    }

    // Guardar la interacción
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
