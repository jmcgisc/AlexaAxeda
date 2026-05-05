import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL_IA;
const supabaseKey = process.env.SUPABASE_KEY_IA;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testRPC() {
  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: Array(1536).fill(0.01), // dummy embedding
    match_threshold: 0.0,
    match_count: 2,
  });

  if (error) {
    console.error("Error al consultar RPC:", error);
  } else {
    console.log("RPC Data:", data);
  }
}

testRPC();
