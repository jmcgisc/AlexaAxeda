const { createClient } = require("@supabase/supabase-js");

exports.handler = async () => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { data, error } = await supabase
      .from("cookie_consents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error al obtener datos:", error.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Error al obtener consentimientos" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Error inesperado:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error inesperado en el servidor" }),
    };
  }
};
