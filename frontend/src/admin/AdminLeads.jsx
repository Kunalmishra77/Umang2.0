import React, { useEffect, useState, useCallback } from 'react';
import { Download, Search, Loader2, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

const STATUSES = ['new', 'contacted', 'converted', 'closed'];
const TYPES = ['callback', 'appointment', 'contact', 'insurance'];
const fmt = (d) => new Date(d).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

const statusStyle = {
  new: 'bg-amber-50 text-amber-700 border-amber-200',
  contacted: 'bg-blue-50 text-blue-700 border-blue-200',
  converted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  closed: 'bg-gray-100 text-gray-500 border-gray-200',
};

export default function AdminLeads() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(null); // lead open in the side drawer
  const [savingNote, setSavingNote] = useState(false);

  const load = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    setLoading(true);
    let q = supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(500);
    if (status) q = q.eq('status', status);
    if (type) q = q.eq('type', type);
    const { data } = await q;
    let list = data || [];
    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter((l) => `${l.name} ${l.phone} ${l.email || ''}`.toLowerCase().includes(s));
    }
    setRows(list);
    setLoading(false);
  }, [status, type, search]);

  useEffect(() => { load(); }, [load]);

  const updateStatus = async (lead, newStatus) => {
    const { error } = await supabase.from('leads').update({ status: newStatus }).eq('id', lead.id);
    if (!error) {
      setRows((r) => r.map((x) => (x.id === lead.id ? { ...x, status: newStatus } : x)));
      setActive((a) => (a && a.id === lead.id ? { ...a, status: newStatus } : a));
    }
  };

  const saveNote = async (lead, notes) => {
    setSavingNote(true);
    const { error } = await supabase.from('leads').update({ notes }).eq('id', lead.id);
    if (!error) setRows((r) => r.map((x) => (x.id === lead.id ? { ...x, notes } : x)));
    setSavingNote(false);
  };

  const exportCsv = () => {
    const cols = ['created_at', 'type', 'name', 'phone', 'email', 'speciality', 'message', 'source_page', 'status', 'notes'];
    const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const a = document.createElement('a');
    a.href = url; a.download = `umang-leads-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark">Leads</h1>
          <p className="text-gray-500">{loading ? 'Loading…' : `${rows.length} enquiries`}</p>
        </div>
        <button onClick={exportCsv} disabled={!rows.length}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-dark text-white rounded-xl text-sm font-bold hover:bg-primary-600 transition-all disabled:opacity-50">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, phone, email"
            className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500" />
        </div>
        <select value={type} onChange={(e) => setType(e.target.value)} className="px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm capitalize">
          <option value="">All types</option>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm capitalize">
          <option value="">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-x-auto">
        {loading ? (
          <div className="p-8 text-center text-gray-400"><Loader2 className="w-5 h-5 animate-spin inline" /></div>
        ) : rows.length === 0 ? (
          <div className="p-8 text-center text-gray-400">No leads match.</div>
        ) : (
          <table className="w-full text-sm min-w-[760px]">
            <thead className="text-left text-gray-400 uppercase text-[11px] tracking-wider border-b border-gray-100">
              <tr>
                <th className="px-5 py-3">Name</th><th className="px-5 py-3">Type</th><th className="px-5 py-3">Phone</th>
                <th className="px-5 py-3">Source</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">When</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((l) => (
                <tr key={l.id} onClick={() => setActive(l)} className="border-t border-gray-50 hover:bg-gray-50 cursor-pointer">
                  <td className="px-5 py-3 font-medium text-brand-dark">{l.name}</td>
                  <td className="px-5 py-3 capitalize text-gray-600">{l.type}</td>
                  <td className="px-5 py-3 text-gray-600">{l.phone}</td>
                  <td className="px-5 py-3 text-gray-500 truncate max-w-[160px]">{l.source_page || '—'}</td>
                  <td className="px-5 py-3">
                    <span className={`text-[11px] font-bold uppercase px-2 py-1 rounded-full border ${statusStyle[l.status] || ''}`}>{l.status}</span>
                  </td>
                  <td className="px-5 py-3 text-gray-400 whitespace-nowrap">{fmt(l.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Detail drawer */}
      {active && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setActive(null)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-serif font-bold text-brand-dark">{active.name}</h2>
                <p className="text-gray-500 text-sm capitalize">{active.type} · {fmt(active.created_at)}</p>
              </div>
              <button onClick={() => setActive(null)} className="w-9 h-9 rounded-full bg-gray-50 grid place-items-center text-gray-400 hover:bg-gray-100"><X className="w-4 h-4" /></button>
            </div>

            <dl className="space-y-3 text-sm mb-6">
              <Field label="Phone" value={active.phone} />
              <Field label="Email" value={active.email} />
              <Field label="Speciality" value={active.speciality} />
              <Field label="Message" value={active.message} />
              <Field label="Source page" value={active.source_page} />
              {active.extra && Object.keys(active.extra).length > 0 && (
                <Field label="Details" value={Object.entries(active.extra).map(([k, v]) => `${k}: ${v}`).join(' · ')} />
              )}
            </dl>

            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Status</label>
              <div className="flex flex-wrap gap-2">
                {STATUSES.map((s) => (
                  <button key={s} onClick={() => updateStatus(active, s)}
                    className={`text-xs font-bold uppercase px-3 py-1.5 rounded-full border transition-all ${active.status === s ? statusStyle[s] : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Internal notes</label>
              <textarea defaultValue={active.notes || ''} rows={4}
                onBlur={(e) => saveNote(active, e.target.value)}
                placeholder="Add a note (saved on blur)…"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500 resize-none" />
              {savingNote && <p className="text-xs text-gray-400 mt-1">Saving…</p>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Field({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{label}</dt>
      <dd className="text-brand-dark mt-0.5 break-words">{value}</dd>
    </div>
  );
}
