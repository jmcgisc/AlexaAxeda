const { createClient } = require('@supabase/supabase-js');

exports.handler = async () => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  try {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    const { data, error } = await supabase
      .from('cookie_consents')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200); // Ajusta según lo que quieras mostrar

    if (error) {
      console.error("Error al obtener datos:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Error al obtener datos de Supabase' })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (err) {
    console.error("Error general:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error inesperado', message: err.message })
    };
  }
};
