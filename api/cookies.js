import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // Solo POST permitido
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método no permitido' });
    }

    // Parsear el body (Vercel lo hace por defecto si es application/json)
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    console.log("Body recibido:", body);

    if (typeof body.accepted !== 'boolean') {
      return res.status(400).json({ error: '"accepted" es requerido y debe ser booleano' });
    }

    // Configurar Supabase
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error("Faltan credenciales de Supabase");
      return res.status(500).json({ error: "Faltan credenciales de base de datos" });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Preparar payload
    const payload = {
      accepted: body.accepted,
      type: body.type || (body.accepted ? "full" : "necessary"),
      purpose: body.purpose || null,
      services: Array.isArray(body.services) ? body.services : [],
      user_agent: body.user_agent || null,
      ip_address: body.ip_address || null,
      created_at: body.timestamp || new Date().toISOString(),
      user_id: body.user_id || null,
      utm_campaign: body.utm_campaign || "direct",
      utm_source: body.utm_source || "direct",
      utm_medium: body.utm_medium || "none",
      referrer: body.referrer || "direct",
      path: body.path || "/",
    };

    console.log("Datos que se intentan guardar en Supabase:", payload);

    // Insertar en la tabla
    const { data, error } = await supabase
      .from("cookie_consents")
      .insert([payload])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({
        error: "Error al guardar en Supabase",
        details: error.message || error,
      });
    }

    // Éxito
    return res.status(200).json({ success: true, inserted: data });

  } catch (err) {
    console.error("Function error:", err);
    return res.status(500).json({ error: "Error al procesar datos", message: err.message });
  }
}
