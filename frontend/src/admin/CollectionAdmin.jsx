import React, { useEffect, useState, useCallback } from 'react';
import { Plus, Trash2, Loader2, Upload, X, Pencil, GripVertical } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { compressImage } from '../lib/compressImage';

// Generic CRUD screen for a Supabase table. Drives every simple content module
// (testimonials, faqs, doctors, specialities, services, gallery, hero…).
//
// config: {
//   table, title, subtitle,
//   fields: [{ name, label, type: 'text'|'textarea'|'number'|'image'|'checkbox'|'select', options? }],
//   primaryField,          // shown as the row's main label
//   secondaryField,        // shown as the row's sub label
//   imageField,            // optional: field name that holds a thumbnail url
//   defaults,              // default values for a new row
// }
export default function CollectionAdmin({ config }) {
  const { table, title, subtitle, fields, primaryField, secondaryField, imageField, defaults = {} } = config;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(defaults);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState('');
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    setLoading(true);
    const { data } = await supabase.from(table).select('*').order('sort_order').order('created_at', { ascending: false });
    setRows(data || []); setLoading(false);
  }, [table]);
  useEffect(() => { load(); }, [load]);

  // Convert stored values → editable form strings for list/json fields.
  const toForm = (obj) => {
    const f = { ...obj };
    fields.forEach((fl) => {
      if (fl.type === 'lines') f[fl.name] = Array.isArray(obj[fl.name]) ? obj[fl.name].join('\n') : (obj[fl.name] || '');
      if (fl.type === 'json') f[fl.name] = (obj[fl.name] != null && typeof obj[fl.name] !== 'string') ? JSON.stringify(obj[fl.name], null, 2) : (obj[fl.name] || '');
    });
    return f;
  };

  const openNew = () => { setForm(toForm({ ...defaults })); setEditing('new'); setError(''); };
  const openEdit = (r) => { setForm(toForm({ ...defaults, ...r })); setEditing(r.id); setError(''); };
  const close = () => { setEditing(null); setForm(defaults); setError(''); };

  const upload = async (fieldName, file) => {
    if (!file || !supabase) return;
    setUploading(fieldName); setError('');
    const compressed = await compressImage(file);
    const path = `${table}/${Date.now()}-${compressed.name.replace(/[^\w.-]/g, '_')}`;
    const { error: upErr } = await supabase.storage.from('media').upload(path, compressed);
    if (upErr) { setError(upErr.message); setUploading(''); return; }
    const { data } = supabase.storage.from('media').getPublicUrl(path);
    setForm((f) => ({ ...f, [fieldName]: data.publicUrl }));
    setUploading('');
  };

  const save = async () => {
    setSaving(true); setError('');
    const payload = {};
    try {
      fields.forEach((f) => {
        let v = form[f.name];
        if (f.type === 'number') v = v === '' || v == null ? null : Number(v);
        else if (f.type === 'checkbox') v = !!v;
        else if (f.type === 'lines') v = (v || '').split('\n').map((s) => s.trim()).filter(Boolean);
        else if (f.type === 'json') v = v && String(v).trim() ? JSON.parse(v) : [];
        payload[f.name] = v ?? (f.type === 'checkbox' ? false : null);
      });
    } catch (e) {
      setSaving(false);
      setError('Invalid JSON in one of the fields: ' + e.message);
      return;
    }
    const res = editing === 'new'
      ? await supabase.from(table).insert(payload)
      : await supabase.from(table).update(payload).eq('id', editing);
    setSaving(false);
    if (res.error) { setError(res.error.message); return; }
    close(); load();
  };

  const remove = async (r) => {
    if (!confirm('Delete this item?')) return;
    await supabase.from(table).delete().eq('id', r.id);
    load();
  };

  const togglePublish = async (r) => {
    await supabase.from(table).update({ is_published: !r.is_published }).eq('id', r.id);
    setRows((list) => list.map((x) => (x.id === r.id ? { ...x, is_published: !x.is_published } : x)));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark">{title}</h1>
          {subtitle && <p className="text-gray-500">{subtitle}</p>}
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700">
          <Plus className="w-4 h-4" /> New
        </button>
      </div>

      {loading ? (
        <div className="p-8 text-gray-400"><Loader2 className="w-5 h-5 animate-spin inline" /></div>
      ) : rows.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center text-gray-400">Nothing here yet.</div>
      ) : (
        <div className="grid gap-2">
          {rows.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl border border-gray-100 p-3 flex items-center gap-3">
              <GripVertical className="w-4 h-4 text-gray-300 shrink-0" />
              {imageField && (
                <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                  {r[imageField] && <img src={r[imageField]} alt="" className="w-full h-full object-cover" />}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-bold text-brand-dark truncate">{r[primaryField] || '—'}</div>
                {secondaryField && <div className="text-sm text-gray-500 truncate">{r[secondaryField]}</div>}
              </div>
              <button onClick={() => togglePublish(r)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase border shrink-0 ${r.is_published ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-gray-100 text-gray-400 border-gray-200'}`}>
                {r.is_published ? 'Live' : 'Hidden'}
              </button>
              <button onClick={() => openEdit(r)} className="w-9 h-9 grid place-items-center rounded-lg text-gray-400 hover:bg-gray-100 shrink-0"><Pencil className="w-4 h-4" /></button>
              <button onClick={() => remove(r)} className="w-9 h-9 grid place-items-center rounded-lg text-red-400 hover:bg-red-50 shrink-0"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" onClick={close} />
          <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-bold text-brand-dark">{editing === 'new' ? `New ${title}` : `Edit ${title}`}</h2>
              <button onClick={close} className="w-9 h-9 rounded-full bg-gray-50 grid place-items-center text-gray-400 hover:bg-gray-100"><X className="w-4 h-4" /></button>
            </div>
            <div className="space-y-4">
              {fields.map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{f.label}</label>
                  {f.type === 'textarea' ? (
                    <textarea rows={3} value={form[f.name] ?? ''} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500 resize-none" />
                  ) : f.type === 'checkbox' ? (
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={!!form[f.name]} onChange={(e) => setForm({ ...form, [f.name]: e.target.checked })} className="w-4 h-4 accent-primary-600" />
                      <span className="text-sm text-gray-600">{f.hint || 'Enabled'}</span>
                    </label>
                  ) : f.type === 'select' ? (
                    <select value={form[f.name] ?? ''} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm">
                      <option value="">—</option>
                      {(f.options || []).map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : f.type === 'lines' ? (
                    <textarea rows={4} value={form[f.name] ?? ''} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      placeholder="One item per line"
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500 resize-none" />
                  ) : f.type === 'json' ? (
                    <textarea rows={6} value={form[f.name] ?? ''} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      spellCheck={false}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono outline-none focus:border-primary-500 resize-y" />
                  ) : f.type === 'image' ? (
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-20 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                        {form[f.name] && <img src={form[f.name]} alt="" className="w-full h-full object-cover" />}
                      </div>
                      <label className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-50">
                        {uploading === f.name ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />} Upload
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => upload(f.name, e.target.files?.[0])} />
                      </label>
                    </div>
                  ) : (
                    <input type={f.type === 'number' ? 'number' : 'text'} value={form[f.name] ?? ''} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500" />
                  )}
                </div>
              ))}
              {error && <p className="text-sm text-red-600">{error}</p>}
              <div className="flex gap-3 pt-2">
                <button onClick={save} disabled={saving} className="flex-1 h-12 bg-primary-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary-700 disabled:opacity-60 flex items-center justify-center gap-2">
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
