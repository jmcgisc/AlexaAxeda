const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    // Verificar método HTTP
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Método no permitido' })
      };
    }

    // Parsear y validar datos
    const data = JSON.parse(event.body);
    
    if (!data.type || !['full', 'necessary', 'none'].includes(data.type)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Tipo de consentimiento no válido' })
      };
    }

    if (typeof data.accepted !== 'boolean') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Valor de aceptación no válido' })
      };
    }

    // Conexión a Supabase
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    // Insertar datos
    const { error } = await supabase
      .from('cookie_consents')
      .insert([{
        type: data.type,
        accepted: data.accepted,
        user_agent: data.user_agent,
        ip_address: data.ip_address || null,
        created_at: data.created_at
      }]);

    if (error) throw error;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error('Error en la función:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Error interno del servidor',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    };
  }
};