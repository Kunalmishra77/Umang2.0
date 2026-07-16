import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from './supabase';

// Fetch published rows from a content table, ordered by sort_order. Falls back
// to the provided static data when Supabase isn't configured or the table is
// empty — so the public site always renders something sensible.
export function usePublished(table, fallback = []) {
  const [rows, setRows] = useState(fallback);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    let active = true;
    supabase.from(table).select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (active && data && data.length) setRows(data);
      });
    return () => { active = false; };
  }, [table]);

  return rows;
}
