import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, User, ShieldCheck, 
  LogOut, MapPin, Bell, Search, Settings, 
  ChevronRight, CreditCard, ClipboardList
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../utils/imageAssets';

const PatientLayout = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/patients', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/patients/appointments', icon: Calendar, label: 'Appointments' },
    { path: '/patients/lab-reports', icon: ClipboardList, label: 'Lab Reports' },
    { path: '/patients/profile', icon: User, label: 'Profile Settings' },
    { path: '/patients/billing', icon: CreditCard, label: 'Billing & Invoices' },
    { path: '/logout', icon: LogOut, label: 'Sign Out' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      {/* 1. Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/patients" className="flex items-center gap-2 group">
              <img src="/umang.svg" alt="Umang" className="h-10 transition-transform group-hover:scale-110" />
              <div className="hidden md:block">
                <span className="text-xl font-serif font-bold text-[#0f172a] block leading-none">UMANG</span>
                <span className="text-[10px] font-bold text-red-600 tracking-[0.3em] uppercase">Portal</span>
              </div>
            </Link>
            
            <div className="hidden lg:flex relative w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search appointments, reports, doctors..." 
                className="w-full h-11 pl-11 pr-4 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#0f172a]">Richard Wilson</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Patient ID: UH-2026-9821</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Profile" 
                className="w-11 h-11 rounded-xl object-cover ring-2 ring-slate-100 ring-offset-2"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 2. Sidebar Navigation */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-28 space-y-2">
              <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-6 bg-slate-50 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Medical Record</p>
                      <p className="font-bold text-[#0f172a]">Secured Access</p>
                    </div>
                  </div>
                </div>
                
                <nav className="p-4 space-y-1">
                  {menuItems.map((item, idx) => (
                    <Link 
                      key={idx}
                      to={item.path}
                      className={`
                        flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all
                        ${location.pathname === item.path 
                          ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/10 scale-[1.02]' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                        }
                      `}
                    >
                      <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`} />
                      {item.label}
                      {location.pathname === item.path && <ChevronRight className="ml-auto w-4 h-4 opacity-50" />}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Emergency Banner */}
              <div className="bg-red-600 rounded-[2rem] p-6 text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-125" />
                <h4 className="font-bold mb-2 relative z-10">Emergency?</h4>
                <p className="text-xs text-red-100 mb-4 relative z-10 leading-relaxed">Instantly request an ambulance from your location.</p>
                <a href="tel:+918929733551" className="block w-full bg-white text-red-600 font-black text-center py-3 rounded-xl text-xs uppercase tracking-widest shadow-lg hover:bg-red-50 transition-colors relative z-10">
                  Call: 89297 33551
                </a>
              </div>
            </div>
          </aside>

          {/* 3. Main Content Area */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PatientLayout;
