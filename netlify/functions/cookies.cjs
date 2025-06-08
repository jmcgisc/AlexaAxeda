const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    // Solo POST permitido
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Método no permitido' }),
      };
    }

    // Parsear el body
    const body = JSON.parse(event.body);
    console.log("Body crudo recibido:", body);

    if (typeof body.accepted !== 'boolean') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: '"accepted" es requerido y debe ser booleano' }),
      };
    }

    // Configurar Supabase
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    // Preparar payload
    const payload = {
      accepted: body.accepted,
      type: typeof body.type === 'string' ? body.type : (body.accepted ? 'full' : 'necessary'),
      purpose: typeof body.purpose === 'string' ? body.purpose : null,
      services: Array.isArray(body.services) ? body.services : null, 
      user_agent: typeof body.user_agent === 'string' ? body.user_agent : (
        typeof body.userAgent === 'string' ? body.userAgent : null
      ),
      ip_address: typeof body.ip_address === 'string' ? body.ip_address : (
        typeof body.ipAddress === 'string' ? body.ipAddress : null
      ),
      created_at: typeof body.timestamp === 'string' ? body.timestamp : new Date().toISOString(),
      user_id: body.user_id || null,
    };

    console.log("Datos que se intentan guardar en Supabase:", payload);

    // Insertar en la tabla
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
          details: error.message || error,
        }),
      };
    }

    // Éxito
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, inserted: data }),
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Error al procesar datos", message: err.message }),
    };
  }
};
