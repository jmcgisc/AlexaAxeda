const { createClient } = require("@supabase/supabase-js");

exports.handler = async () => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

  const { data, error } = await supabase.from("cookie_consents").select("*");

  if (error) {
    console.error("Error al obtener datos:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al obtener datos de consentimientos" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
