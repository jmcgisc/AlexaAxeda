import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

    // Preflight CORS
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Solo POST permitido
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método no permitido",
        });
    }

    try {
        const body = req.body;

        console.log("Body recibido:", body);

        if (typeof body.accepted !== "boolean") {
            return res.status(400).json({
                error: '"accepted" es requerido y debe ser booleano',
            });
        }

        // Cliente Supabase
        const supabase = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_KEY
        );

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

        console.log("Payload enviado a Supabase:", payload);

        const { data, error } = await supabase
            .from("cookie_consents")
            .insert([payload])
            .select();

        if (error) {
            console.error("Supabase error:", error);

            return res.status(500).json({
                error: "Error al guardar en Supabase",
                details: error.message || error,
            });
        }

        return res.status(200).json({
            success: true,
            inserted: data,
        });

    } catch (err) {
        console.error("Function error:", err);

        return res.status(500).json({
            error: "Error al procesar datos",
            message: err.message,
        });
    }
}