import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://lilitcsisxvxtqgtixhq.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpbGl0Y3Npc3h2eHRxZ3RpeGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ2NTEsImV4cCI6MjA0MTQ4MDY1MX0.FXVwA2xoyDji83g1dO_LkNAppJoYgJe5fpRhDDjLF5Q"
);
