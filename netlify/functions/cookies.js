const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Método no permitido' }),
      };
    }

    const body = JSON.parse(event.body);

    // Validar que accepted está presente
    if (typeof body.accepted !== 'boolean') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: '"accepted" es requerido' }),
      };
    }

    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    const payload = {
      accepted: body.accepted,
      type: body.type || (body.accepted ? "full" : "necessary"),
      purpose: body.purpose || null,
      services: body.services || null,
      user_agent: body.user_agent || body.userAgent || null,
      ip_address: body.ip_address || body.ipAddress || null,
      created_at: body.timestamp || new Date().toISOString(),
      user_id: body.user_id || null,
    };

    console.log("Payload recibido en cookies.js:", payload);

    const { data, error } = await supabase
      .from("cookie_consents")
      .insert([payload])
      .select();

    if (error) {
    console.error("Supabase insert error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: "Error al guardar en Supabase", 
        details: error.message || error 
        }),
      };
    }
    console.log("Body recibido:", body);

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Error al procesar datos" }),
    };
    console.log("Body recibido:", body);
  }
};
