import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut, Megaphone, FileText, Image, Quote, HelpCircle, Stethoscope, Layers, Grid3x3, HeartPulse, GalleryHorizontal } from 'lucide-react';
import { useAuth } from '../lib/auth';

const nav = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/leads', label: 'Leads', icon: Users },
  { to: '/admin/offers', label: 'Offers', icon: Megaphone },
  { to: '/admin/content', label: 'Content', icon: FileText },
  { to: '/admin/hero', label: 'Hero Slides', icon: GalleryHorizontal },
  { to: '/admin/doctors', label: 'Doctors', icon: Stethoscope },
  { to: '/admin/specialities', label: 'Specialities', icon: HeartPulse },
  { to: '/admin/services', label: 'Services', icon: Layers },
  { to: '/admin/testimonials', label: 'Testimonials', icon: Quote },
  { to: '/admin/faqs', label: 'FAQs', icon: HelpCircle },
  { to: '/admin/gallery', label: 'Gallery', icon: Grid3x3 },
  { to: '/admin/media', label: 'Media', icon: Image },
];

export default function AdminLayout() {
  const { user, role, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => { await signOut(); navigate('/admin/login'); };

  // Security: auto-logout after 15 minutes of inactivity in the admin panel.
  useEffect(() => {
    const IDLE_MS = 15 * 60 * 1000;
    let timer;
    const logout = async () => { await signOut(); navigate('/admin/login', { replace: true }); };
    const reset = () => { clearTimeout(timer); timer = setTimeout(logout, IDLE_MS); };
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    reset();
    return () => { clearTimeout(timer); events.forEach((e) => window.removeEventListener(e, reset)); };
  }, [signOut, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-brand-dark text-white flex flex-col fixed inset-y-0 left-0">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <span className="font-serif font-bold text-lg">Umang <span className="text-primary-400">Admin</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {nav.map(({ to, label, icon: Icon, end, disabled }) => (
            disabled ? (
              <span key={label} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-white/30 cursor-not-allowed">
                <Icon className="w-4 h-4" /> {label}<span className="ml-auto text-[10px] uppercase tracking-wide">soon</span>
              </span>
            ) : (
              <NavLink key={label} to={to} end={end}
                className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-primary-600 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
                <Icon className="w-4 h-4" /> {label}
              </NavLink>
            )
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="text-xs text-white/50 mb-2 truncate">{user?.email} · {role}</div>
          <button onClick={handleSignOut} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
