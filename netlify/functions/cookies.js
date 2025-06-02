const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.handler = async function (event) {
  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);

    const { ip, city, region, country, countryCode, isp, userAgent, consented, timestamp } = body;

    const { error } = await supabase.from("cookies").insert([
      {
        ip,
        city,
        region,
        country,
        country_code: countryCode,
        isp,
        user_agent: userAgent,
        consented,
        timestamp,
      },
    ]);

    if (error) {
      console.error("Error guardando en Supabase:", error);
      return { statusCode: 500, body: JSON.stringify({ error: "Error al guardar" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};
