import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add a request interceptor to include auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

import { supabase, isSupabaseConfigured } from '../lib/supabase';

// ---------------------------------------------------------------------------
// Lead capture → Supabase `leads` table (RLS: anon can INSERT only).
// Every public form maps to one row with a `type` + a flexible `extra` bag.
// Returns { data } on success; throws Error(message) on failure so the
// existing useLeadForm try/catch keeps working unchanged.
// ---------------------------------------------------------------------------
const insertLead = async (type, { name, phone, email, message, speciality, source_page, _hp, honeypot, ...extra }) => {
  // Honeypot: bots fill hidden fields humans can't see. Pretend success, drop it.
  if (_hp || honeypot) return { data: null };

  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Form service is not configured yet. Please try again later.');
  }
  // Capture ad-campaign attribution (utm params / gclid) from the URL, so the
  // admin can see exactly which campaign a lead came from.
  const utm = {};
  try {
    const p = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'].forEach((k) => {
      const v = p.get(k); if (v) utm[k] = v;
    });
  } catch { /* no-op */ }

  const row = {
    type,
    name: (name || '').trim(),
    phone: (phone || '').trim(),
    email: email?.trim() || null,
    message: message?.trim() || null,
    speciality: speciality || null,
    source_page: source_page || null,
    extra: { ...extra, ...utm }, // department, preferred_date, utm_campaign, etc.
  };
  // Do NOT use .select() here: anon has INSERT-only rights on leads (no SELECT),
  // so a RETURNING clause would fail RLS. Insert without returning the row.
  const { error } = await supabase.from('leads').insert(row);
  if (error) {
    if (String(error.message).includes('rate_limited')) {
      throw new Error('Too many requests. Please try again in a little while.');
    }
    throw new Error(error.message || 'Could not submit. Please try again.');
  }

  // Conversion tracking: fire a GTM dataLayer event on every successful lead
  // so Google Ads / GA4 can count it as a conversion (trigger on 'lead_submit').
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead_submit',
      lead_type: type,
      source_page: row.source_page || '(unknown)',
    });
  }

  return { data: null };
};

export const leadApi = {
  submitCallback: (data) => insertLead('callback', data),
  submitAppointment: (data) => insertLead('appointment', data),
  submitContact: (data) => insertLead('contact', data),
  submitInsuranceInquiry: (data) => insertLead('insurance', data),
};

export const cmsApi = {
  getStats: () => api.get('/stats'),
  getPages: (slug) => api.get(`/pages/${slug}`),
  getDoctors: () => api.get('/doctors'),
  getIcuUnits: () => api.get('/icu'),
};

export default api;
