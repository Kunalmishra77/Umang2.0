import React, { useEffect, useState, useCallback } from 'react';
import { Upload, Trash2, Loader2, Copy, Check, FolderPlus, Folder, ChevronRight, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { compressImage } from '../lib/compressImage';

const BUCKET = 'media';

export default function AdminMedia() {
  const [path, setPath] = useState(''); // current folder prefix, '' = root
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState('');
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    setLoading(true); setError('');
    const { data, error } = await supabase.storage.from(BUCKET).list(path, { limit: 200, sortBy: { column: 'created_at', order: 'desc' } });
    if (error) setError(error.message);
    setItems(data || []);
    setLoading(false);
  }, [path]);
  useEffect(() => { load(); }, [load]);

  const publicUrl = (name) => supabase.storage.from(BUCKET).getPublicUrl(`${path ? path + '/' : ''}${name}`).data.publicUrl;
  const isFolder = (it) => it.id === null; // Supabase marks folders with null id

  const onUpload = async (files) => {
    if (!files?.length || !supabase) return;
    setUploading(true); setError('');
    for (const f of files) {
      const file = await compressImage(f);
      const key = `${path ? path + '/' : ''}${Date.now()}-${file.name.replace(/[^\w.-]/g, '_')}`;
      const { error } = await supabase.storage.from(BUCKET).upload(key, file, { upsert: false });
      if (error) { setError(error.message); break; }
    }
    setUploading(false); load();
  };

  const newFolder = async () => {
    const name = prompt('Folder name');
    if (!name) return;
    // Storage folders exist only via a contained object — drop a hidden placeholder.
    const key = `${path ? path + '/' : ''}${name.replace(/[^\w-]/g, '_')}/.keep`;
    await supabase.storage.from(BUCKET).upload(key, new Blob(['']), { upsert: true });
    load();
  };

  const remove = async (it) => {
    const key = `${path ? path + '/' : ''}${it.name}`;
    if (isFolder(it)) { alert('Open the folder and delete its files first.'); return; }
    if (!confirm(`Delete ${it.name}?`)) return;
    await supabase.storage.from(BUCKET).remove([key]);
    load();
  };

  const copy = async (name) => {
    await navigator.clipboard.writeText(publicUrl(name));
    setCopied(name); setTimeout(() => setCopied(''), 1500);
  };

  const crumbs = path ? path.split('/') : [];
  const visible = items.filter((it) => it.name !== '.keep' && it.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark">Media Library</h1>
          <p className="text-gray-500">Upload, organise and reuse images. Uploads are auto-compressed.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={newFolder} className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50">
            <FolderPlus className="w-4 h-4" /> Folder
          </button>
          <label className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 cursor-pointer">
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />} Upload
            <input type="file" multiple accept="image/*" className="hidden" onChange={(e) => onUpload([...e.target.files])} />
          </label>
        </div>
      </div>

      {/* Breadcrumb + search */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <button onClick={() => setPath('')} className="hover:text-primary-600 font-medium">media</button>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5" />
              <button onClick={() => setPath(crumbs.slice(0, i + 1).join('/'))} className="hover:text-primary-600 font-medium">{c}</button>
            </span>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search files"
            className="pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500" />
        </div>
      </div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      {loading ? (
        <div className="p-8 text-gray-400"><Loader2 className="w-5 h-5 animate-spin inline" /></div>
      ) : visible.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center text-gray-400">Nothing here. Upload some images.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {visible.map((it) => (
            isFolder(it) ? (
              <button key={it.name} onClick={() => setPath(`${path ? path + '/' : ''}${it.name}`)}
                className="aspect-square rounded-2xl border border-gray-100 bg-white grid place-items-center hover:border-primary-300 hover:bg-primary-50/30 transition-all">
                <Folder className="w-10 h-10 text-primary-400" />
                <span className="text-xs font-medium text-gray-600 mt-2 px-2 truncate max-w-full">{it.name}</span>
              </button>
            ) : (
              <div key={it.name} className="group relative rounded-2xl border border-gray-100 bg-white overflow-hidden">
                <div className="aspect-square bg-gray-50">
                  <img src={publicUrl(it.name)} alt={it.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-2">
                  <p className="text-[11px] text-gray-500 truncate">{it.name}</p>
                </div>
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => copy(it.name)} title="Copy URL" className="w-8 h-8 rounded-lg bg-white/95 shadow grid place-items-center text-gray-600 hover:text-primary-600">
                    {copied === it.name ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button onClick={() => remove(it)} title="Delete" className="w-8 h-8 rounded-lg bg-white/95 shadow grid place-items-center text-red-500 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}
