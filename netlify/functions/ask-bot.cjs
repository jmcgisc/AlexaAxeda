const { OpenAI } = require("openai");
const { createClient } = require("@supabase/supabase-js");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const faqs = [
  {
  question: "¿Quién es la desarrolladora de Isla Diamante?",
  answer: "LAOC Urbanizadora y Desarrolladora S.A. de C.V."
  },
  {
  question: "¿Quien es la desarrolladora?",
  answer: "LAOC Urbanizadora y Desarrolladora S.A. de C.V."
  },
  {
    question: "¿Qué es Isla Diamante Cancún?",
    answer: "Es un desarrollo residencial en condominio con 3,284 terrenos distribuidos en 19 privadas exclusivas y una zona comercial."
  },
  {
    question: "¿Dónde está ubicado el desarrollo?",
    answer: "Dentro del programa municipal de desarrollo urbano de Benito Juárez 2018-2033, conectado a Av. López Portillo y carretera a Mérida."
  },
  {
    question: "¿Cuáles son las distancias clave?",
    answer: "2.5 km de Av. López Portillo, 24.4 km del aeropuerto, 31.9 km de la zona hotelera, 18.9 km de la terminal ADO."
  },
  {
    question: "¿Qué tipo de propiedad se adquiere?",
    answer: "Terreno bajo régimen de condominio con reglamento de construcción y reglamento de condóminos."
  },
  {
    question: "¿Cuáles son las dimensiones de los terrenos?",
    answer: "Terreno tipo: 120 m² (6x20m); esquinas: hasta 12m x 20m."
  },
  {
    question: "¿Cuántas privadas tiene el desarrollo?",
    answer: "19 privadas, cada una con casa club y parque temático."
  },
  {
    question: "¿Qué infraestructura ofrece?",
    answer: "Calles de concreto hidráulico, electricidad y agua potable, seguridad 24/7, barda perimetral."
  },
  {
    question: "¿Qué amenidades exclusivas ofrece Isla Diamante?",
    answer: "Lago artificial, Master Family House, club de playa en Isla Mujeres, casas club con parques temáticos."
  },
  {
    question: "¿Cuál es el plan de financiamiento?",
    answer: "15% de enganche y hasta 120 meses sin intereses."
  },
  {
    question: "¿Es a través de banco?",
    answer: "No, es directo con la desarrolladora, sin buró."
  },
  {
    question: "¿Se pueden adelantar pagos?",
    answer: "Sí, sin penalizaciones."
  },
  {
    question: "¿Qué plusvalía ofrece?",
    answer: "Hasta 50% anual en etapas tempranas."
  },
  {
    question: "¿Por qué invertir?",
    answer: "Precios iniciales, ubicación estratégica, infraestructura premium, sin intereses."
  },
  {
    question: "¿Cómo reservar un terreno?",
    answer: "Con $5,000 MXN de anticipo."
  },
  {
    question: "¿Proceso de compra?",
    answer: "Reserva, elección, contrato digital, pago del enganche."
  },
  {
    question: "¿Documentación necesaria?",
    answer: "ID, CURP, constancia fiscal, comprobante de domicilio, acta de nacimiento/matrimonio."
  },
  {
    question: "¿Formas de pago?",
    answer: "Transferencia nacional, internacional o por Wise."
  },
  {
    question: "¿Qué es un fideicomiso inmobiliario?",
    answer: "Contrato que garantiza seguridad jurídica a través de una institución financiera."
  },
  {
    question: "Beneficios?",
    answer: "Protección bancaria, cumplimiento de plazos, transparencia."
  },
  {
    question: "Documentos que respaldan el proyecto?",
    answer: "Constancia fiscal, cédula catastral, fideicomiso, oferta de compra, actas, uso de suelo."
  },
  {
    question: "¿Cuándo comienzan las cuotas de mantenimiento?",
    answer: "En 2029 para Azores, 2033 para los demás."
  },
  {
    question: "¿Costo estimado?",
    answer: "$20/m² mensual aprox., ajustable."
  },
  {
    question: "¿Cómo obtener más información?",
    answer: "Consulta con tu asesor Alexa Delgado +(52) 55 7013 7764."
  }
];

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

    const normalize = (text) =>
      text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // quitar acentos
        .replace(/[^a-z0-9\s]/gi, "");   // quitar signos

    const normalizedQuestion = normalize(question);

    const found = faqs.find((f) => {
      const normalizedFaq = normalize(f.question);
      return normalizedQuestion.includes(normalizedFaq.slice(0, 30)); // comparar primeras palabras
    });
    
    let answer = null;
    if (found) {
      answer = found.answer;
    } else {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
              Eres un asistente experto en inversiones inmobiliarias, especializado en el desarrollo Isla Diamante en Cancún.
              Responde con precisión, brevedad y solo con información proporcionada sobre el proyecto. Si no sabes algo, di que no está disponible.
              `
          },
          { role: "user", content: question }
        ]
      });

      answer = response.choices?.[0]?.message?.content;
    }

    if (!answer) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "No se recibió respuesta del modelo" }),
      };
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
