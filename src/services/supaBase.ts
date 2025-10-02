import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const sercetKey = process.env.SUPABASE_SECRET_KEY;

if (!url || !sercetKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(url, sercetKey);
