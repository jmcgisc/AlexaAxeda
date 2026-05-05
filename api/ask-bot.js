import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import faqData from "./faq_embeddings.js"; // Importa los embeddings

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabaseUrl = process.env.SUPABASE_URL_IA || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY_IA || process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const cosineSimilarity = (vecA, vecB) => {
  const dot = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dot / (normA * normB);
};

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const { question, user_id = null, metadata = {} } = body;

    if (!question) {
      return res.status(400).json({ error: "No question provided" });
    }

    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: question,
    });

    if (!embeddingRes.data || embeddingRes.data.length === 0) {
      throw new Error("No se generó embedding para la pregunta.");
    }

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

    return res.status(200).json({ answer });
  } catch (err) {
    console.error("ask-bot error:", err);
    return res.status(500).json({ error: err.message });
  }
}
