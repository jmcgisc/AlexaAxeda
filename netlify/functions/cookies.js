// Importar el cliente de Supabase
const { createClient } = require('@supabase/supabase-js')

exports.handler = async (event) => {
  // Configuración de CORS
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  }

  try {
    // Solo aceptar POST
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Método no permitido' })
      }
    }

    // Parsear y validar datos
    const { accepted, user_agent, ip_address, timestamp } = JSON.parse(event.body)
    
    if (typeof accepted !== 'boolean') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Datos inválidos: accepted debe ser boolean' })
      }
    }

    // Inicializar cliente Supabase
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insertar en la tabla de Supabase
    const { data, error } = await supabase
      .from('cookie_consents')
      .insert([
        {
          accepted,
          user_agent: user_agent || 'unknown',
          ip_address: ip_address || 'unknown',
          created_at: timestamp || new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      throw error
    }

    console.log('Registro insertado en Supabase:', data)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        record: data[0]
      })
    }

  } catch (error) {
    console.error('Error en la función:', error)
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Error al guardar en Supabase',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    }
  }
}