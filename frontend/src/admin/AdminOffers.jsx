import React, { useEffect, useState, useCallback } from 'react';
import { Plus, Trash2, Loader2, Upload, X, Pencil } from 'lucide-react';
import { supabase } from '../lib/supabase';

const CTA_TYPES = [
  { value: 'page', label: 'Site page (e.g. /contact)' },
  { value: 'url', label: 'External URL' },
  { value: 'whatsapp', label: 'WhatsApp (phone number)' },
  { value: 'popup', label: 'Open as popup only' },
  { value: 'none', label: 'No button' },
];

const empty = {
  title: '', description: '', image_url: '', cta_text: '', cta_type: 'page',
  cta_value: '', display: 'banner', is_enabled: false, sort_order: 0,
  starts_at: '', ends_at: '',
};

export default function AdminOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // offer object or null
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    setLoading(true);
    const { data } = await supabase.from('offers').select('*').order('sort_order').order('created_at', { ascending: false });
    setOffers(data || []);
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  const openNew = () => { setForm(empty); setEditing('new'); setError(''); };
  const openEdit = (o) => {
    setForm({ ...empty, ...o, starts_at: o.starts_at?.slice(0, 16) || '', ends_at: o.ends_at?.slice(0, 16) || '' });
    setEditing(o.id); setError('');
  };
  const close = () => { setEditing(null); setForm(empty); };

  const upload = async (file) => {
    if (!file || !supabase) return;
    setUploading(true); setError('');
    const path = `offers/${Date.now()}-${file.name.replace(/[^\w.-]/g, '_')}`;
    const { error: upErr } = await supabase.storage.from('media').upload(path, file, { upsert: false });
    if (upErr) { setError(upErr.message); setUploading(false); return; }
    const { data } = supabase.storage.from('media').getPublicUrl(path);
    setForm((f) => ({ ...f, image_url: data.publicUrl }));
    setUploading(false);
  };

  const save = async () => {
    if (!form.title.trim()) { setError('Title is required.'); return; }
    setSaving(true); setError('');
    const payload = {
      title: form.title.trim(),
      description: form.description || null,
      image_url: form.image_url || null,
      cta_text: form.cta_text || null,
      cta_type: form.cta_type,
      cta_value: form.cta_value || null,
      display: form.display,
      is_enabled: form.is_enabled,
      sort_order: Number(form.sort_order) || 0,
      starts_at: form.starts_at ? new Date(form.starts_at).toISOString() : null,
      ends_at: form.ends_at ? new Date(form.ends_at).toISOString() : null,
    };
    const res = editing === 'new'
      ? await supabase.from('offers').insert(payload)
      : await supabase.from('offers').update(payload).eq('id', editing);
    setSaving(false);
    if (res.error) { setError(res.error.message); return; }
    close(); load();
  };

  const toggle = async (o) => {
    await supabase.from('offers').update({ is_enabled: !o.is_enabled }).eq('id', o.id);
    setOffers((list) => list.map((x) => (x.id === o.id ? { ...x, is_enabled: !x.is_enabled } : x)));
  };

  const remove = async (o) => {
    if (!confirm(`Delete offer “${o.title}”?`)) return;
    await supabase.from('offers').delete().eq('id', o.id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark">Offers</h1>
          <p className="text-gray-500">Promo banners — nothing shows on the site unless enabled.</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 transition-all">
          <Plus className="w-4 h-4" /> New offer
        </button>
      </div>

      {loading ? (
        <div className="p-8 text-gray-400"><Loader2 className="w-5 h-5 animate-spin inline" /></div>
      ) : offers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center text-gray-400">No offers yet. Create one — it stays hidden until you enable it.</div>
      ) : (
        <div className="grid gap-3">
          {offers.map((o) => (
            <div key={o.id} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4">
              <div className="w-20 h-14 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                {o.image_url && <img src={o.image_url} alt="" className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-brand-dark truncate">{o.title}</div>
                <div className="text-sm text-gray-500 truncate">{o.description || '—'}</div>
                <div className="text-[11px] text-gray-400 mt-0.5 capitalize">{o.display} · CTA: {o.cta_type}{o.cta_value ? ` → ${o.cta_value}` : ''}</div>
              </div>
              <button onClick={() => toggle(o)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase border ${o.is_enabled ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-gray-100 text-gray-400 border-gray-200'}`}>
                {o.is_enabled ? 'Live' : 'Off'}
              </button>
              <button onClick={() => openEdit(o)} className="w-9 h-9 grid place-items-center rounded-lg text-gray-400 hover:bg-gray-100"><Pencil className="w-4 h-4" /></button>
              <button onClick={() => remove(o)} className="w-9 h-9 grid place-items-center rounded-lg text-red-400 hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
      )}

      {/* Editor */}
      {editing && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" onClick={close} />
          <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-bold text-brand-dark">{editing === 'new' ? 'New offer' : 'Edit offer'}</h2>
              <button onClick={close} className="w-9 h-9 rounded-full bg-gray-50 grid place-items-center text-gray-400 hover:bg-gray-100"><X className="w-4 h-4" /></button>
            </div>

            <div className="space-y-4">
              <Text label="Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
              <Area label="Description" value={form.description} onChange={(v) => setForm({ ...form, description: v })} />

              <div>
                <Label>Image</Label>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-16 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                    {form.image_url && <img src={form.image_url} alt="" className="w-full h-full object-cover" />}
                  </div>
                  <label className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-50">
                    {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />} Upload
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => upload(e.target.files?.[0])} />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Text label="Button text" value={form.cta_text} onChange={(v) => setForm({ ...form, cta_text: v })} />
                <div>
                  <Label>Button action</Label>
                  <select value={form.cta_type} onChange={(e) => setForm({ ...form, cta_type: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm">
                    {CTA_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
              </div>
              {form.cta_type !== 'none' && form.cta_type !== 'popup' && (
                <Text
                  label={form.cta_type === 'whatsapp' ? 'WhatsApp number (with country code)' : form.cta_type === 'url' ? 'Destination URL' : 'Site path (e.g. /contact)'}
                  value={form.cta_value} onChange={(v) => setForm({ ...form, cta_value: v })} />
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Display as</Label>
                  <select value={form.display} onChange={(e) => setForm({ ...form, display: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm">
                    <option value="banner">Banner</option>
                    <option value="popup">Popup</option>
                  </select>
                </div>
                <Text label="Priority (0 = top)" type="number" value={form.sort_order} onChange={(v) => setForm({ ...form, sort_order: v })} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Text label="Start (optional)" type="datetime-local" value={form.starts_at} onChange={(v) => setForm({ ...form, starts_at: v })} />
                <Text label="End (optional)" type="datetime-local" value={form.ends_at} onChange={(v) => setForm({ ...form, ends_at: v })} />
              </div>

              <label className="flex items-center gap-3 py-2 cursor-pointer">
                <input type="checkbox" checked={form.is_enabled} onChange={(e) => setForm({ ...form, is_enabled: e.target.checked })} className="w-4 h-4 accent-primary-600" />
                <span className="text-sm font-medium text-brand-dark">Enabled (visible on the website)</span>
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex gap-3 pt-2">
                <button onClick={save} disabled={saving}
                  className="flex-1 h-12 bg-primary-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary-700 disabled:opacity-60 flex items-center justify-center gap-2">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Save'}
                </button>
                <button onClick={close} className="px-6 h-12 border border-gray-200 rounded-xl font-bold text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const Label = ({ children }) => <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{children}</label>;
const Text = ({ label, value, onChange, type = 'text' }) => (
  <div><Label>{label}</Label>
    <input type={type} value={value ?? ''} onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500" />
  </div>
);
const Area = ({ label, value, onChange }) => (
  <div><Label>{label}</Label>
    <textarea rows={2} value={value ?? ''} onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500 resize-none" />
  </div>
);
