import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://dnkzqbcvonlvdosokffc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRua3pxYmN2b25sdmRvc29rZmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NTY3MjYsImV4cCI6MjA0MDQzMjcyNn0.fKyYQhjkIMioNfbZvtCjbqZjL3KHrSJ1XgJCSJKo4rw';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
