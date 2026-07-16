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
  const row = {
    type,
    name: (name || '').trim(),
    phone: (phone || '').trim(),
    email: email?.trim() || null,
    message: message?.trim() || null,
    speciality: speciality || null,
    source_page: source_page || null,
    extra, // department, preferred_date, preferred_time, inquiry_type, etc.
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
