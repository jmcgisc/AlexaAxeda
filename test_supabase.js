import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log("URL:", supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

async function testInsert() {
  const payload = {
    accepted: true,
    type: "test",
    purpose: "test",
    services: [],
    user_agent: "test script",
    ip_address: "127.0.0.1",
    created_at: new Date().toISOString(),
    user_id: null,
    utm_campaign: "direct",
    utm_source: "direct",
    utm_medium: "none",
    referrer: "direct",
    path: "/",
  };

  const { data, error } = await supabase
    .from("cookie_consents")
    .insert([payload])
    .select();

  if (error) {
    console.error("Error al insertar:", error);
  } else {
    console.log("Inserción exitosa:", data);
  }
}

testInsert();
