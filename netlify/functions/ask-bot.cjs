const { OpenAI } = require("openai");
const faqData = require("./faq_embeddings.js"); // Cargamos FAQ ya embebido

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
}; 

const cosineSimilarity = (vecA, vecB) => {
  const dot = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dot / (normA * normB);
};

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    const body = JSON.parse(event.body);
    const { question, user_id = null, metadata = {} } = body;

    if (!question) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "No question provided" }) };
    }

    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: question,
    });

    const questionEmbedding = embeddingRes.data[0].embedding;

    let bestMatch = null;
    let bestScore = 0;

    for (const faq of faqData) {
      const score = cosineSimilarity(questionEmbedding, faq.embedding);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    }

    let answer;

    if (bestMatch && bestScore >= 0.85) {
      answer = bestMatch.answer;
    } else {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Eres un experto en Isla Diamante. Responde solo lo que sabes." },
          { role: "user", content: question },
        ],
      });
      answer = response.choices?.[0]?.message?.content;
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
    console.error("ask-bot error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
