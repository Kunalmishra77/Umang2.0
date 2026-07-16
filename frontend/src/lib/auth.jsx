import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from './supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRole = useCallback(async (userId) => {
    if (!userId || !supabase) { setRole(null); return; }
    const { data } = await supabase.from('profiles').select('role').eq('id', userId).single();
    setRole(data?.role ?? 'viewer');
  }, []);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) { setLoading(false); return; }
    let active = true;

    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return;
      setSession(data.session);
      await loadRole(data.session?.user?.id);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange(async (_evt, sess) => {
      setSession(sess);
      await loadRole(sess?.user?.id);
    });
    return () => { active = false; sub?.subscription?.unsubscribe(); };
  }, [loadRole]);

  const signIn = useCallback(async (email, password) => {
    if (!supabase) throw new Error('Auth is not configured.');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
  }, []);

  const signOut = useCallback(async () => {
    if (supabase) await supabase.auth.signOut();
    setSession(null); setRole(null);
  }, []);

  const value = {
    session,
    user: session?.user ?? null,
    role,
    loading,
    isStaff: role === 'admin' || role === 'editor',
    isAdmin: role === 'admin',
    configured: isSupabaseConfigured,
    signIn,
    signOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
