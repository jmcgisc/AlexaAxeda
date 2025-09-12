const OpenAI = require("openai");

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Método no permitido" }),
      };
    }

    const { message } = JSON.parse(event.body);

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
          Eres el Coordinador de Desarrollos Diamante.
          Detecta la intención del cliente y redirígelo a Ventas, Marketing, Legal, Finanzas, Postventa o Inversiones.
          Responde de manera cálida, profesional y breve.
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
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "⚠️ Error procesando el mensaje." }),
    };
  }
};
