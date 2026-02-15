import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar, Activity, Mail, ArrowRight, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Specialties', 
      path: '/specialities', 
      type: 'dropdown',
      width: 'w-[90vw] md:w-[700px]',
      content: (
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden rounded-3xl">
          <div className="hidden md:block w-[32%] bg-gray-50/50 p-6 border-r border-gray-100">
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Featured</div>
             <Link to="/services/health-checkup" className="block bg-white p-4 rounded-2xl border border-gray-100 shadow-sm group hover:border-primary-400 transition-all">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                      <Activity className="w-4 h-4" />
                   </div>
                   <span className="font-bold text-gray-800 text-xs">Checkup</span>
                </div>
                <p className="text-[10px] text-gray-500 mb-3 leading-relaxed">Full body packages @ ₹999/-</p>
                <div className="flex items-center text-[9px] font-bold text-primary-600 gap-1 uppercase tracking-widest">
                   Book Now <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                </div>
             </Link>
          </div>
          <div className="w-full md:w-[68%] p-6 lg:p-8 bg-white">
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Popular Specialties</div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
               {[
                 { name: "Cardiac Sciences", id: 'cardiac' }, 
                 { name: "Neuro Sciences", id: 'neuro' }, 
                 { name: "Orthopaedics", id: 'ortho' }, 
                 { name: "Gastroenterology", id: 'gastro' }, 
                 { name: "Pulmonology", id: 'pulmonology' }, 
                 { name: "Urology", id: 'urology' },
                 { name: "Nephrology", id: 'nephrology' },
                 { name: "Oncology", id: 'oncology' }
               ].map((item, i) => (
                 <Link key={i} to="/specialities" state={{ category: item.id }} className="flex items-center gap-2.5 py-2 text-[13px] font-semibold text-gray-600 hover:text-primary-600 transition-all group">
                    <span className="w-1 h-1 rounded-full bg-gray-200 group-hover:bg-primary-500 group-hover:w-2 transition-all" />
                    {item.name}
                 </Link>
               ))}
             </div>
          </div>
        </div>
      )
    },
    {
      name: 'Services',
      path: '/services',
      type: 'dropdown',
      width: 'w-[240px]',
      content: (
         <div className="p-2 bg-white">
            {[
               { name: "Diagnostics & Labs", slug: "lab-test-diagnostic" },
               { name: "24/7 Pharmacy", slug: "buy-medicines" },
               { name: "Emergency & Trauma", slug: "emergency" },
               { name: "Health Checkups", slug: "health-checkup" },
               { name: "ICU Infrastructure", path: "/infrastructure/icu" },
               { name: "Cashless Insurance", path: "/cashless-insurance" }
            ].map((item, i) => (
               <Link key={i} to={item.path || `/services/${item.slug}`} className="flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all group">
                  {item.name}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary-400" />
               </Link>
            ))}
         </div>
      )
    },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Library', path: '/health-library' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]' : ''}`}>
        {/* 1. TOP BAR (Clean & Compact) */}
        <div className={`bg-[#0f172a] text-white transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-12 lg:max-h-10'}`}>
           <div className="container-custom h-12 lg:h-10 flex items-center justify-between text-[10px] lg:text-[11px] font-semibold tracking-wide">
              <div className="flex items-center gap-4 lg:gap-6">
                 <a href="tel:+918929733550" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                    <Phone className="w-3 lg:w-3.5 h-3 lg:h-3.5" /> 
                    <span className="hidden xs:inline">Emergency:</span> +91 89297 33550
                 </a>
                 <div className="hidden md:flex items-center gap-2 opacity-70"><Clock className="w-3.5 h-3.5" /> 24/7 Available</div>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                 <Link to="/doctors" className="hover:text-primary-400 transition-colors hidden sm:inline">Find a Doctor</Link>
                 <span className="opacity-20 text-gray-400 hidden sm:inline">|</span>
                 <a href="mailto:Umanghospitalgurugram@gmail.com" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                    <Mail className="w-3 lg:w-3.5 h-3 lg:h-3.5" />
                    <span className="hidden lg:inline">Email Us</span>
                 </a>
              </div>
           </div>
        </div>

        {/* 2. MAIN NAV */}
        <div className={`bg-white transition-all duration-500 border-b border-gray-100 ${isScrolled ? 'py-2 lg:py-3' : 'py-3 lg:py-5'}`}>
          <div className="container-custom flex items-center justify-between gap-4">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 lg:gap-3 shrink-0 group">
               <div className={`transition-all duration-500 ${isScrolled ? 'h-8 lg:h-9' : 'h-10 lg:h-11'}`}>
                 <img src="/umang.svg" alt="Umang" className="h-full w-auto object-contain" />
               </div>
               <div className="flex flex-col leading-none">
                 <span className="text-lg lg:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors">
                   Umang<span className="text-primary-600">Hospital</span>
                 </span>
                 <span className="text-[7px] lg:text-[8px] uppercase tracking-[0.2em] lg:tracking-[0.25em] font-bold text-gray-400 mt-0.5">Superspeciality</span>
               </div>
            </Link>

            {/* NAV LINKS (Desktop) */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group h-full flex items-center" 
                  onMouseEnter={() => link.type === 'dropdown' && setActiveDropdown(link.name)} 
                  onMouseLeave={() => link.type === 'dropdown' && setActiveDropdown(null)}
                >
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => `
                      px-3 lg:px-4 py-2 text-[14px] lg:text-[15px] font-bold rounded-xl transition-all duration-300 flex items-center gap-1 whitespace-nowrap
                      ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'}
                    `}
                  >
                    {link.name}
                    {link.type === 'dropdown' && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : 'opacity-40'}`} />}
                  </NavLink>

                  <AnimatePresence>
                    {activeDropdown === link.name && link.type === 'dropdown' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className={`absolute top-[80%] left-1/2 -translate-x-1/2 pt-5 z-[110] ${link.width}`}
                      >
                         <div className="bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-1.5">
                            {link.content}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA BUTTON & MOBILE TOGGLE */}
            <div className="flex items-center gap-2 lg:gap-3 shrink-0">
               <Link 
                 to="/doctors" 
                 className={`h-9 lg:h-11 px-4 lg:px-6 rounded-lg lg:rounded-xl flex items-center gap-2 text-[11px] lg:text-[13px] font-bold transition-all duration-300 ${
                   isScrolled 
                   ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:bg-primary-700' 
                   : 'bg-gray-900 text-white shadow-xl hover:bg-gray-800'
                 }`}
               >
                 <Calendar className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
                 <span className="hidden sm:inline">Book Appointment</span>
                 <span className="sm:hidden">Book</span>
               </Link>
               <button 
                 className="xl:hidden w-9 lg:w-11 h-9 lg:h-11 flex items-center justify-center rounded-lg lg:rounded-xl bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100 transition-colors" 
                 onClick={() => setIsMobileMenuOpen(true)}
               >
                 <Menu className="w-5 lg:w-6 h-5 lg:h-6" />
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[150]" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} 
              transition={{ type: "spring", damping: 30, stiffness: 300 }} 
              className="fixed inset-y-0 right-0 w-[85%] max-w-[400px] bg-white z-[160] shadow-2xl p-6 flex flex-col"
            >
               <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                  <span className="text-xl font-bold text-gray-900">Umang<span className="text-primary-600">Hospital</span></span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><X className="w-5 h-5" /></button>
               </div>
               <div className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
                  {navLinks.map((link) => (
                    <NavLink key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `block px-5 py-3.5 rounded-xl text-sm font-bold transition-all ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}`}>{link.name}</NavLink>
                  ))}
               </div>
               <div className="pt-6 border-t border-gray-100 space-y-3 mt-4">
                  <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary-600 text-white font-bold text-sm shadow-lg">Book Appointment</Link>
                  <a href="tel:+918929733550" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 border-gray-900 text-gray-900 font-bold text-sm">Emergency Call</a>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
