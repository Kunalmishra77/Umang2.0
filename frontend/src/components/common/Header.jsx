import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar, Activity, Mail, ArrowRight, ShieldCheck, MapPin, Clock, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
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
    setMobileAccordion(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Specialties', 
      path: '/specialities', 
      type: 'dropdown',
      links: [
        { name: "Cardiac Sciences", id: 'cardiac' }, 
        { name: "Neuro Sciences", id: 'neuro' }, 
        { name: "Orthopaedics", id: 'ortho' }, 
        { name: "Gastroenterology", id: 'gastro' }, 
        { name: "Pulmonology", id: 'pulmonology' }, 
        { name: "Urology", id: 'urology' },
        { name: "General Surgery", id: 'surgery' },
        { name: "Oncology", id: 'oncology' }
      ],
      width: 'md:w-[700px]'
    },
    {
      name: 'Services',
      path: '/services',
      type: 'dropdown',
      links: [
        { name: "Diagnostics & Labs", slug: "lab-test-diagnostic" },
        { name: "24/7 Pharmacy", slug: "buy-medicines" },
        { name: "Emergency & Trauma", slug: "emergency" },
        { name: "Health Checkups", slug: "health-checkup" },
        { name: "ICU Infrastructure", path: "/infrastructure/icu" },
        { name: "Cashless Insurance", path: "/cashless-insurance" }
      ],
      width: 'w-[240px]'
    },
    {
      name: 'Library',
      path: '/health-library',
      type: 'dropdown',
      links: [
        { name: "Treatments", path: "/health-library/treatments" },
        { name: "Technologies", path: "/health-library/technologies" },
        { name: "Ailments", path: "/health-library/ailments" },
        { name: "Knowledge Center", path: "/health-library/knowledge-center" },
        { name: "Events", path: "/health-library/events" }
      ],
      width: 'w-[240px]'
    },
    {
      name: 'Team',
      path: '/team',
      type: 'dropdown',
      links: [
        { name: "Our Doctors", path: "/doctors" },
        { name: "Leadership", path: "/team" },
        { name: "Careers", path: "/careers" }
      ],
      width: 'w-[240px]'
    },
    {
       name: 'Patients',
       path: '/patient-corner',
       type: 'dropdown',
       links: [
          { name: "Patient Experience", path: "/patient-experience" },
          { name: "Patient Stories", path: "/patient-corner/patient-stories" },
          { name: "Health Blogs", path: "/patient-corner/blogs" },
          { name: "Patient Literatur", path: "/patient-corner/patient-information-literature" }
       ],
       width: 'w-[240px]'
    },
    {
      name: 'Contact',
      path: '/contact',
      type: 'dropdown',
      links: [
         { name: "Get in Touch", path: "/contact" },
         { name: "Inquiry Hub", path: "/contact/inquiry-hub" },
         { name: "Media Center", path: "/media-center" }
      ],
      width: 'w-[240px]'
    },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''}`}>
        {/* TOP BAR */}
        <div className={`bg-[#0f172a] text-white transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-12 lg:max-h-10'}`}>
           <div className="container-custom h-12 lg:h-10 flex items-center justify-between text-[10px] lg:text-[11px] font-semibold tracking-wide px-4">
              <a href="tel:+918929733550" className="flex items-center gap-2 hover:text-primary-400">
                 <Phone className="w-3.5 h-3.5" /> <span className="hidden xs:inline">Emergency:</span> +91 89297 33550
              </a>
              <div className="flex items-center gap-4">
                 <div className="hidden md:flex items-center gap-2 text-emerald-400 font-bold"><ShieldCheck className="w-3.5 h-3.5" /> NABH</div>
                 <Link to="/doctors" className="hover:text-primary-400 transition-colors">Find Doctor</Link>
              </div>
           </div>
        </div>

        {/* MAIN NAV */}
        <div className={`bg-white transition-all duration-500 border-b border-gray-100 ${isScrolled ? 'py-2 lg:py-3' : 'py-3 lg:py-5'}`}>
          <div className="container-custom flex items-center justify-between gap-4 px-4">
            <Link to="/" className="flex items-center gap-2 shrink-0 group">
               <div className={`transition-all duration-500 ${isScrolled ? 'h-8 lg:h-9' : 'h-10 lg:h-11'}`}>
                 <img src="/umang.svg" alt="Umang" className="h-full w-auto object-contain" />
               </div>
               <div className="flex flex-col leading-none">
                 <span className="text-lg lg:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary-600">Umang<span className="text-primary-600">Hospital</span></span>
                 <span className="text-[7px] lg:text-[8px] uppercase tracking-[0.25em] font-bold text-gray-400">Superspeciality</span>
               </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group h-full flex items-center" onMouseEnter={() => link.type === 'dropdown' && setActiveDropdown(link.name)} onMouseLeave={() => link.type === 'dropdown' && setActiveDropdown(null)}>
                  <NavLink to={link.path} className={({ isActive }) => `px-3 lg:px-4 py-2 text-[14px] font-bold rounded-xl transition-all ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:bg-gray-50'}`}>
                    {link.name} {link.type === 'dropdown' && <ChevronDown className={`inline w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : 'opacity-40'}`} />}
                  </NavLink>
                  <AnimatePresence>
                    {activeDropdown === link.name && link.type === 'dropdown' && (
                      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className={`absolute top-[80%] left-1/2 -translate-x-1/2 pt-5 z-[110] ${link.width}`}>
                         <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden p-4">
                            <div className={`grid ${link.name === 'Specialties' ? 'grid-cols-2 gap-4' : 'grid-cols-1 gap-1'}`}>
                               {link.links.map((sub) => (
                                 <Link key={sub.name} to={sub.path || (link.path === '/specialities' ? '/specialities' : `${link.path}/${sub.slug}`)} state={sub.id ? { category: sub.id } : undefined} className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all">
                                    <span className="w-1 h-1 rounded-full bg-gray-300" /> {sub.name}
                                 </Link>
                               ))}
                            </div>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
               <Link to="/doctors" className={`h-9 lg:h-11 px-4 lg:px-6 rounded-lg lg:rounded-xl flex items-center gap-2 text-[11px] lg:text-[13px] font-bold transition-all ${isScrolled ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-900 text-white'}`}>
                 <Calendar className="w-4 h-4" /> <span className="hidden sm:inline">Appointment</span><span className="sm:hidden text-[9px]">BOOK</span>
               </Link>
               <button className="xl:hidden w-9 lg:w-11 h-9 lg:h-11 flex items-center justify-center rounded-lg bg-gray-50 text-gray-700 border border-gray-100" onClick={() => setIsMobileMenuOpen(true)}>
                 <Menu className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU WITH ACCORDIONS */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[150]" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed inset-y-0 right-0 w-[85%] max-w-[400px] bg-white z-[160] p-6 flex flex-col shadow-2xl overflow-y-auto">
               <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100 shrink-0">
                  <span className="text-xl font-bold text-gray-900">Umang<span className="text-primary-600">Hospital</span></span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><X className="w-5 h-5" /></button>
               </div>
               <div className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-gray-50 last:border-0 pb-1">
                      {link.type === 'dropdown' ? (
                        <>
                          <button onClick={() => setMobileAccordion(mobileAccordion === link.name ? null : link.name)} className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50">
                            {link.name} {mobileAccordion === link.name ? <Minus className="w-4 h-4 text-primary-500" /> : <Plus className="w-4 h-4 text-gray-400" />}
                          </button>
                          <AnimatePresence>
                            {mobileAccordion === link.name && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-gray-50 rounded-2xl mx-2 mb-2">
                                <div className="py-2 px-2 grid grid-cols-1 gap-1">
                                  {link.links.map((sub) => (
                                    <Link key={sub.name} to={sub.path || (link.path === '/specialities' ? '/specialities' : `${link.path}/${sub.slug}`)} state={sub.id ? { category: sub.id } : undefined} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[13px] font-semibold text-gray-600 hover:text-primary-600 flex items-center gap-3">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary-300" /> {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <NavLink to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `block px-4 py-4 rounded-xl text-sm font-bold transition-all ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'}`}>{link.name}</NavLink>
                      )}
                    </div>
                  ))}
               </div>
               <div className="pt-6 border-t border-gray-100 space-y-3 mt-4 shrink-0">
                  <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary-600 text-white font-bold text-sm shadow-lg shadow-primary-600/20">Book Appointment</Link>
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
