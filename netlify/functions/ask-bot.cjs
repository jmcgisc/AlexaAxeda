const { OpenAI } = require("openai");
const { createClient } = require("@supabase/supabase-js");

// Configuración de APIs
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); 
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

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

    // Obtener respuesta del modelo
    const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
            Eres un asistente experto en inversiones inmobiliarias, especializado en el desarrollo Isla Diamante en Cancún.
            Responde solo con base en esta información:
            - Tiene 3,284 terrenos en 19 privadas.
            - Ubicación estratégica con acceso a Av. López Portillo.
            - Financiación directa, sin buró de crédito.
            - Plusvalía estimada del 50% anual en etapas tempranas.
            - Tipo de propiedad, Terreno bajo régimen de condominio con reglamento de construcción y reglamento de condóminos.
            - 15% de enganche y hasta 120 meses sin intereses.
            - Adelantar pagos sin penalizaciones
            - Entrega Azores diciembre 2029, el resto en 2033
            - Etc.
          `
        },
        { role: "user", content: question }
      ]
    });

    const answer = response.choices?.[0]?.message?.content;

    if (!answer) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "No se recibió respuesta del modelo" }),
      };
    }

    // Guardar en Supabase
    const { error: insertError } = await supabase
      .from("chatbot_interactions")
      .insert([
        {
          question,
          answer,
          user_id,
          metadata, // puede incluir IP, path, etc.
          created_at: new Date().toISOString(),
        },
      ]);

    if (insertError) {
      console.error("Error al insertar en Supabase:", insertError);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ answer }),
    };
  } catch (err) {
    console.error("Error general en ask-bot:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || "Error interno del servidor" }),
    };
  }
};
