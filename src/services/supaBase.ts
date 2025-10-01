import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qrtjbpqqzytcrotsvlyo.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydGpicHFxenl0Y3JvdHN2bHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMTMwNDcsImV4cCI6MjA3NDg4OTA0N30.u8IkfO-Pr6Uy6nfXd6YaD7s0wLqDeAz-YhrUQym1g04";
export const supabase = createClient(supabaseUrl, supabaseKey);
