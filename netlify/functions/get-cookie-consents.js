const { createClient } = require('@supabase/supabase-js');

exports.handler = async () => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    const { data, error } = await supabase
      .from('cookie_consents')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200); // Puedes ajustar el límite según necesidad

    if (error) {
      console.error("Error de Supabase:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Error al obtener los datos', details: error.message })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Error general en la función:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor', details: err.message }),
    };
  }
};
