import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, CheckCircle2, PhoneCall, ArrowRight, Megaphone, FileText, Image, Plus } from 'lucide-react';
import { supabase } from '../lib/supabase';

const fmt = (d) => new Date(d).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

export default function AdminDashboard() {
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, converted: 0 });
  const [offersLive, setOffersLive] = useState(0);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!supabase) { setLoading(false); return; }
      const count = async (filter) => {
        let q = supabase.from('leads').select('id', { count: 'exact', head: true });
        if (filter) q = q.eq('status', filter);
        const { count } = await q;
        return count || 0;
      };
      const liveOffers = async () => {
        const { count } = await supabase.from('offers').select('id', { count: 'exact', head: true }).eq('is_enabled', true);
        return count || 0;
      };
      const [total, nw, contacted, converted, offers] = await Promise.all([
        count(null), count('new'), count('contacted'), count('converted'), liveOffers(),
      ]);
      if (active) setOffersLive(offers);
      const { data } = await supabase.from('leads')
        .select('id,type,name,phone,status,source_page,created_at')
        .order('created_at', { ascending: false }).limit(6);
      if (!active) return;
      setStats({ total, new: nw, contacted, converted });
      setRecent(data || []);
      setLoading(false);
    })();
    return () => { active = false; };
  }, []);

  const cards = [
    { label: 'Total leads', value: stats.total, icon: Users, color: 'bg-primary-50 text-primary-600' },
    { label: 'New', value: stats.new, icon: Clock, color: 'bg-amber-50 text-amber-600' },
    { label: 'Contacted', value: stats.contacted, icon: PhoneCall, color: 'bg-blue-50 text-blue-600' },
    { label: 'Converted', value: stats.converted, icon: CheckCircle2, color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-dark mb-1">Dashboard</h1>
      <p className="text-gray-500 mb-8">Overview of website enquiries.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className={`w-10 h-10 rounded-xl grid place-items-center mb-4 ${c.color}`}><c.icon className="w-5 h-5" /></div>
            <div className="text-3xl font-serif font-bold text-brand-dark">{loading ? '—' : c.value}</div>
            <div className="text-sm text-gray-500 mt-1">{c.label}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[
          { to: '/admin/offers', label: 'New offer', sub: `${offersLive} live`, icon: Plus, accent: 'text-primary-600' },
          { to: '/admin/leads', label: 'View leads', sub: 'Manage enquiries', icon: Users, accent: 'text-blue-600' },
          { to: '/admin/content', label: 'Edit content', sub: 'Contact, social, SEO', icon: FileText, accent: 'text-amber-600' },
          { to: '/admin/media', label: 'Media library', sub: 'Images', icon: Image, accent: 'text-emerald-600' },
        ].map((a) => (
          <Link key={a.label} to={a.to} className="bg-white rounded-2xl border border-gray-100 p-4 hover:border-primary-200 hover:shadow-sm transition-all">
            <a.icon className={`w-5 h-5 mb-3 ${a.accent}`} />
            <div className="font-bold text-brand-dark text-sm">{a.label}</div>
            <div className="text-xs text-gray-400">{a.sub}</div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-serif font-bold text-brand-dark text-lg">Recent enquiries</h2>
          <Link to="/admin/leads" className="text-sm font-bold text-primary-600 flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {loading ? (
          <div className="p-6 text-gray-400">Loading…</div>
        ) : recent.length === 0 ? (
          <div className="p-6 text-gray-400">No enquiries yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-left text-gray-400 uppercase text-[11px] tracking-wider">
              <tr><th className="px-6 py-3">Name</th><th className="px-6 py-3">Type</th><th className="px-6 py-3">Phone</th><th className="px-6 py-3">Status</th><th className="px-6 py-3">When</th></tr>
            </thead>
            <tbody>
              {recent.map((l) => (
                <tr key={l.id} className="border-t border-gray-50">
                  <td className="px-6 py-3 font-medium text-brand-dark">{l.name}</td>
                  <td className="px-6 py-3 capitalize text-gray-600">{l.type}</td>
                  <td className="px-6 py-3 text-gray-600">{l.phone}</td>
                  <td className="px-6 py-3 capitalize text-gray-600">{l.status}</td>
                  <td className="px-6 py-3 text-gray-400">{fmt(l.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
