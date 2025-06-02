exports.handler = async (event) => {
  // Configuración básica de CORS
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  try {
    // Solo aceptar POST
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Método no permitido' })
      };
    }

    // Parsear datos
    const data = JSON.parse(event.body);
    
    // Validación básica
    if (typeof data.accepted !== 'boolean') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Datos inválidos' })
      };
    }

    // Aquí puedes:
    // 1. Guardar en una base de datos
    // 2. Registrar en un servicio externo
    // 3. Procesar como necesites
    
    console.log('Consentimiento recibido:', {
      accepted: data.accepted,
      userAgent: data.user_agent,
      ip: data.ip_address || 'unknown',
      timestamp: data.timestamp
    });

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