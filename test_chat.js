import { createClient } from "@supabase/supabase-js";

try {
  createClient("https://zzrytjexmycnzbkhqpcf.supabase.co ", "dummy");
  console.log("No throw");
} catch (err) {
  console.log("🔥 Threw:", err.message);
}
