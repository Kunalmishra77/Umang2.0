import React, { useEffect, useState, useCallback } from 'react';
import { Download, Search, Loader2, X, AlertTriangle, Trash2 } from 'lucide-react';
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
  const [source, setSource] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [sources, setSources] = useState([]);
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(null); // lead open in the side drawer
  const [savingNote, setSavingNote] = useState(false);

  // Distinct sources for the filter dropdown (from the latest 1000 leads).
  useEffect(() => {
    if (!supabase) return;
    supabase.from('leads').select('source_page').order('created_at', { ascending: false }).limit(1000)
      .then(({ data }) => setSources([...new Set((data || []).map((r) => r.source_page).filter(Boolean))].sort()));
  }, []);

  const load = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    setLoading(true);
    let q = supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(1000);
    if (status) q = q.eq('status', status);
    if (type) q = q.eq('type', type);
    if (source) q = q.eq('source_page', source);
    if (dateFrom) q = q.gte('created_at', new Date(dateFrom + 'T00:00:00').toISOString());
    if (dateTo) q = q.lte('created_at', new Date(dateTo + 'T23:59:59').toISOString());
    const { data } = await q;
    let list = data || [];
    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter((l) => `${l.name} ${l.phone} ${l.email || ''}`.toLowerCase().includes(s));
    }
    setRows(list);
    setLoading(false);
  }, [status, type, source, dateFrom, dateTo, search]);

  useEffect(() => { load(); }, [load]);

  // Quick date presets
  const preset = (days) => {
    if (days === null) { setDateFrom(''); setDateTo(''); return; }
    const to = new Date(); const from = new Date();
    from.setDate(to.getDate() - days);
    const iso = (d) => d.toISOString().slice(0, 10);
    setDateFrom(iso(from)); setDateTo(iso(to));
  };

  // Per-source counts for the summary chips (top 5 of current result set)
  const sourceCounts = rows.reduce((m, r) => { const k = r.source_page || '(unknown)'; m[k] = (m[k] || 0) + 1; return m; }, {});
  const topSources = Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // ── Retention: leads older than 3 months need an admin decision ──────────
  const [oldCount, setOldCount] = useState(0);
  const retentionCutoff = () => { const d = new Date(); d.setMonth(d.getMonth() - 3); return d.toISOString(); };
  useEffect(() => {
    if (!supabase) return;
    supabase.from('leads').select('id', { count: 'exact', head: true }).lt('created_at', retentionCutoff())
      .then(({ count }) => setOldCount(count || 0));
  }, []);

  const csvFromRows = (list, filename) => {
    const cols = ['created_at', 'type', 'name', 'phone', 'email', 'speciality', 'message', 'source_page', 'status', 'notes', 'extra'];
    const esc = (v) => `"${String(typeof v === 'object' && v !== null ? JSON.stringify(v) : v ?? '').replace(/"/g, '""')}"`;
    const csv = [cols.join(','), ...list.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAndDeleteOld = async () => {
    const { data } = await supabase.from('leads').select('*').lt('created_at', retentionCutoff()).order('created_at');
    if (!data || !data.length) { setOldCount(0); return; }
    csvFromRows(data, `umang-leads-archive-${new Date().toISOString().slice(0, 10)}.csv`);
    if (!confirm(`CSV downloaded (${data.length} leads). Now DELETE these ${data.length} old leads from the database?`)) return;
    await supabase.from('leads').delete().lt('created_at', retentionCutoff());
    setOldCount(0); load();
  };

  const deleteOldOnly = async () => {
    if (!confirm(`Delete ${oldCount} leads older than 3 months WITHOUT downloading? This cannot be undone.`)) return;
    await supabase.from('leads').delete().lt('created_at', retentionCutoff());
    setOldCount(0); load();
  };

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

      {/* Retention notice: leads older than 3 months need a decision */}
      {oldCount > 0 && (
        <div className="mb-5 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-wrap items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <div className="flex-1 min-w-[240px]">
            <p className="font-bold text-amber-800 text-sm">{oldCount} lead{oldCount > 1 ? 's are' : ' is'} older than 3 months</p>
            <p className="text-amber-700 text-xs mt-0.5">To keep the database small, download an archive and delete them — or delete directly without downloading.</p>
          </div>
          <button onClick={downloadAndDeleteOld}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-bold hover:bg-amber-700">
            <Download className="w-3.5 h-3.5" /> Download &amp; Delete
          </button>
          <button onClick={deleteOldOnly}
            className="flex items-center gap-2 px-4 py-2 border border-amber-300 text-amber-800 rounded-xl text-xs font-bold hover:bg-amber-100">
            <Trash2 className="w-3.5 h-3.5" /> Delete Only
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, phone, email"
            className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500" />
        </div>
        <select value={source} onChange={(e) => setSource(e.target.value)} className="px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm max-w-[220px]">
          <option value="">All sources</option>
          {sources.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} className="px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm capitalize">
          <option value="">All types</option>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm capitalize">
          <option value="">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Date range + presets */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Date:</span>
        {[['Today', 0], ['7 days', 7], ['30 days', 30], ['All', null]].map(([label, d]) => (
          <button key={label} onClick={() => preset(d)}
            className="px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 bg-white text-gray-600 hover:border-primary-400 hover:text-primary-600 transition-colors">
            {label}
          </button>
        ))}
        <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}
          className="px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs" />
        <span className="text-gray-400 text-xs">to</span>
        <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)}
          className="px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs" />
      </div>

      {/* Source summary chips */}
      {!loading && topSources.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {topSources.map(([s, n]) => (
            <button key={s} onClick={() => setSource(source === s ? '' : s)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${source === s ? 'bg-primary-600 text-white border-primary-600' : 'bg-primary-50 text-primary-700 border-primary-100 hover:border-primary-300'}`}>
              {s}: {n}
            </button>
          ))}
        </div>
      )}

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
