import OpenAI from "openai";
import express from "express";

const app = express();
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // o el que uses
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

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "⚠️ Error procesando el mensaje." });
  }
});

app.listen(3001, () => console.log("API escuchando en puerto 3001"));
