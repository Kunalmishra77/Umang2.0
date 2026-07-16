import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';

const sessionId = () => {
  let s = sessionStorage.getItem('umang-sid');
  if (!s) { s = Math.random().toString(36).slice(2) + Date.now().toString(36); sessionStorage.setItem('umang-sid', s); }
  return s;
};

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/iPad|Tablet/i.test(ua)) return 'tablet';
  if (/Mobi|Android|iPhone/i.test(ua)) return 'mobile';
  return 'desktop';
};

// Records a page view on every route change (except the admin panel).
export default function PageTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    if (pathname.startsWith('/admin')) return;
    supabase.from('page_views').insert({
      path: pathname,
      referrer: document.referrer || null,
      session_id: sessionId(),
      device: deviceType(),
    });
  }, [pathname]);
  return null;
}
