const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);

    const { error } = await supabase.from('cookies_consent').insert([
      {
        consent: body.consent,
        user_agent: body.user_agent,
        ip_address: body.ip_address,
        timestamp: body.timestamp
      }
    ]);

    if (error) throw error;

    return { statusCode: 200, body: JSON.stringify({ message: 'Consent saved' }) };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
