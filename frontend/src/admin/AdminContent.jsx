import React, { useEffect, useState } from 'react';
import { Loader2, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Editable sections → the fields shown for each key.
const SECTIONS = [
  { key: 'contact', title: 'Contact details', fields: [
    { name: 'emergency', label: 'Emergency phone' },
    { name: 'whatsapp', label: 'WhatsApp number' },
    { name: 'email', label: 'Email' },
    { name: 'address', label: 'Address', area: true },
  ] },
  { key: 'social', title: 'Social links', fields: [
    { name: 'facebook', label: 'Facebook URL' },
    { name: 'instagram', label: 'Instagram URL' },
    { name: 'linkedin', label: 'LinkedIn URL' },
    { name: 'twitter', label: 'X / Twitter URL' },
    { name: 'youtube', label: 'YouTube URL' },
  ] },
  { key: 'footer', title: 'Footer', fields: [
    { name: 'about_text', label: 'Footer intro paragraph', area: true },
  ] },
  { key: 'seo', title: 'Default SEO', fields: [
    { name: 'title', label: 'Default meta title' },
    { name: 'description', label: 'Default meta description', area: true },
  ] },
];

export default function AdminContent() {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [savingKey, setSavingKey] = useState('');
  const [savedKey, setSavedKey] = useState('');

  useEffect(() => {
    (async () => {
      if (!supabase) { setLoading(false); return; }
      const { data } = await supabase.from('site_content').select('key,value');
      const map = {};
      (data || []).forEach((r) => { map[r.key] = r.value || {}; });
      setValues(map);
      setLoading(false);
    })();
  }, []);

  const setField = (key, name, v) =>
    setValues((s) => ({ ...s, [key]: { ...(s[key] || {}), [name]: v } }));

  const save = async (key) => {
    setSavingKey(key); setSavedKey('');
    const { error } = await supabase.from('site_content')
      .upsert({ key, value: values[key] || {} }, { onConflict: 'key' });
    setSavingKey('');
    if (!error) { setSavedKey(key); setTimeout(() => setSavedKey(''), 2000); }
  };

  if (loading) return <div className="text-gray-400"><Loader2 className="w-5 h-5 animate-spin inline" /></div>;

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-dark mb-1">Content</h1>
      <p className="text-gray-500 mb-8">Edit site-wide content. Changes go live immediately — no redeploy.</p>

      <div className="grid gap-6 max-w-2xl">
        {SECTIONS.map((sec) => (
          <div key={sec.key} className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-serif font-bold text-lg text-brand-dark mb-4">{sec.title}</h2>
            <div className="space-y-4">
              {sec.fields.map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{f.label}</label>
                  {f.area ? (
                    <textarea rows={2} value={values[sec.key]?.[f.name] || ''} onChange={(e) => setField(sec.key, f.name, e.target.value)}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500 resize-none" />
                  ) : (
                    <input value={values[sec.key]?.[f.name] || ''} onChange={(e) => setField(sec.key, f.name, e.target.value)}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary-500" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button onClick={() => save(sec.key)} disabled={savingKey === sec.key}
                className="px-5 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 disabled:opacity-60 flex items-center gap-2">
                {savingKey === sec.key ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Save'}
              </button>
              {savedKey === sec.key && <span className="text-sm text-emerald-600 flex items-center gap-1"><Check className="w-4 h-4" /> Saved</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
