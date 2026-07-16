import { createClient } from '@supabase/supabase-js';

// Public anon key + URL are safe in the browser ONLY because Row Level Security
// denies everything by default and allows exactly what we permit (anon can
// INSERT leads, and SELECT published content). Never put the service_role key here.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

// Guarded: if env is missing (e.g. keys not set yet), export null instead of
// throwing at import time so the app still loads and forms fail gracefully.
export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, { auth: { persistSession: true, autoRefreshToken: true } })
  : null;
