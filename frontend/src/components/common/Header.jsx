import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar, Activity, Mail, ArrowRight, ShieldCheck, MapPin, Clock, Plus, Minus, Heart, Star, Award, Stethoscope } from 'lucide-react';
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
      width: 'md:w-[750px]',
      content: (
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden">
          {/* Featured Section */}
          <div className="w-full md:w-[35%] bg-primary-50/50 p-8 border-r border-gray-100 flex flex-col justify-between">
             <div>
                <div className="flex items-center gap-2 text-primary-600 font-black uppercase tracking-[0.3em] text-[9px] mb-6">
                   <Star className="w-3 h-3 animate-pulse" /> Top Rated Dept
                </div>
                <Link to="/specialities/cardiac" className="block group">
                   <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative shadow-xl">
                      <img src="/assets/Home/cardiac-sciences.png" alt="Cardiac" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                         <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Center of Excellence</p>
                         <h4 className="font-bold text-lg">Cardiac Sciences</h4>
                      </div>
                   </div>
                   <p className="text-xs text-gray-500 leading-relaxed mb-4">Advanced Cath Labs & Heart Surgery facilities with 24/7 critical care support.</p>
                </Link>
             </div>
             <Link to="/specialities" className="flex items-center text-[10px] font-black text-primary-600 uppercase tracking-widest gap-2 hover:gap-3 transition-all">
                All Departments <ArrowRight className="w-3.5 h-3.5" />
             </Link>
          </div>
          {/* Links Grid */}
          <div className="w-full md:w-[65%] p-8 bg-white">
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Major Specialities
             </div>
             <div className="grid grid-cols-2 gap-x-8 gap-y-2">
               {[
                 { name: "Cardiac Sciences", id: 'cardiac', icon: Heart }, 
                 { name: "Neuro Sciences", id: 'neuro', icon: Activity }, 
                 { name: "Orthopaedics", id: 'ortho', icon: Award }, 
                 { name: "Gastroenterology", id: 'gastro', icon: Activity }, 
                 { name: "Pulmonology", id: 'pulmonology', icon: Activity }, 
                 { name: "Urology", id: 'urology', icon: Activity },
                 { name: "General Surgery", id: 'surgery', icon: Stethoscope },
                 { name: "Oncology", id: 'oncology', icon: ShieldCheck }
               ].map((item, i) => (
                 <Link key={i} to={`/specialities/${item.id}`} className="flex items-center gap-3 py-2.5 text-[13px] font-bold text-gray-600 hover:text-primary-600 transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-primary-50 flex items-center justify-center text-gray-400 group-hover:text-primary-500 transition-colors">
                       <item.icon className="w-4 h-4" />
                    </div>
                    {item.name}
                 </Link>
               ))}
             </div>
          </div>
        </div>
      ),
      links: [
        { name: "Cardiac Sciences", id: 'cardiac' }, 
        { name: "Neuro Sciences", id: 'neuro' }, 
        { name: "Orthopaedics", id: 'ortho' }, 
        { name: "Gastroenterology", id: 'gastro' }, 
        { name: "Pulmonology", id: 'pulmonology' }, 
        { name: "Urology", id: 'urology' },
        { name: "General Surgery", id: 'surgery' },
        { name: "Oncology", id: 'oncology' }
      ]
    },
    {
      name: 'Services',
      path: '/services',
      type: 'dropdown',
      width: 'w-[300px]',
      content: (
         <div className="p-4 bg-white overflow-hidden">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 ml-4">Hospital Services</div>
            <div className="space-y-1">
               {[
                  { name: "Diagnostics & Labs", slug: "lab-test-diagnostic", color: "bg-blue-50 text-blue-600" },
                  { name: "24/7 Pharmacy", slug: "buy-medicines", color: "bg-purple-50 text-purple-600" },
                  { name: "Emergency & Trauma", slug: "emergency", color: "bg-red-50 text-red-600" },
                  { name: "Health Checkups", slug: "health-checkup", color: "bg-emerald-50 text-emerald-600" },
                  { name: "ICU Infrastructure", path: "/infrastructure/icu", color: "bg-cyan-50 text-cyan-600" },
                  { name: "Cashless Insurance", path: "/cashless-insurance", color: "bg-amber-50 text-amber-600" }
               ].map((item, i) => (
                  <Link key={i} to={item.path || `/services/${item.slug}`} className="flex items-center justify-between px-4 py-3 text-[13px] font-bold text-gray-600 hover:bg-gray-50 hover:text-primary-600 rounded-xl transition-all group">
                     <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color.split(' ')[0]}`} />
                        {item.name}
                     </div>
                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
               ))}
            </div>
         </div>
      ),
      links: [
        { name: "Diagnostics & Labs", slug: "lab-test-diagnostic" },
        { name: "24/7 Pharmacy", slug: "buy-medicines" },
        { name: "Emergency & Trauma", slug: "emergency" },
        { name: "Health Checkups", slug: "health-checkup" },
        { name: "ICU Infrastructure", path: "/infrastructure/icu" },
        { name: "Cashless Insurance", path: "/cashless-insurance" }
      ]
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
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'shadow-xl' : ''}`}>
        {/* TOP BAR */}
        <div className={`bg-[#0f172a] text-white transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-12 lg:max-h-10'}`}>
           <div className="container-custom h-12 lg:h-10 flex items-center justify-between text-[10px] lg:text-[11px] font-semibold tracking-wide px-4">
              <a href="tel:+918929733550" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                 <Phone className="w-3.5 h-3.5" /> <span className="hidden xs:inline">Emergency:</span> +91 89297 33550
              </a>
              <div className="flex items-center gap-4">
                 <div className="hidden md:flex items-center gap-2 text-emerald-400 font-bold"><ShieldCheck className="w-3.5 h-3.5" /> NABH ACCREDITED</div>
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
                 <span className="text-lg lg:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors">Umang<span className="text-primary-600">Hospital</span></span>
                 <span className="text-[7px] lg:text-[8px] uppercase tracking-[0.25em] font-bold text-gray-400">Superspeciality</span>
               </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group h-full flex items-center" onMouseEnter={() => link.type === 'dropdown' && setActiveDropdown(link.name)} onMouseLeave={() => link.type === 'dropdown' && setActiveDropdown(null)}>
                  <NavLink to={link.path} className={({ isActive }) => `px-3 lg:px-4 py-2 text-[14px] font-bold rounded-xl transition-all ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'}`}>
                    <span className="flex items-center gap-1">
                       {link.name} {link.type === 'dropdown' && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : 'opacity-40'}`} />}
                    </span>
                  </NavLink>
                  <AnimatePresence>
                    {activeDropdown === link.name && link.type === 'dropdown' && (
                      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className={`absolute top-[80%] left-1/2 -translate-x-1/2 pt-5 z-[110] ${link.width}`}>
                         <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
                            {link.content ? link.content : (
                               <div className="p-4">
                                  <div className="grid grid-cols-1 gap-1">
                                     {link.links.map((sub) => (
                                       <Link key={sub.name} to={sub.path || (link.path === '/specialities' ? `/specialities/${sub.id}` : `${link.path}/${sub.slug}`)} state={sub.id ? { category: sub.id } : undefined} className="flex items-center justify-between px-4 py-3 text-[13px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all group/sub">
                                          {sub.name}
                                          <ArrowRight className="w-4 h-4 opacity-0 group-hover/sub:opacity-100 transition-all -translate-x-2 group-hover/sub:translate-x-0" />
                                       </Link>
                                     ))}
                                  </div>
                               </div>
                            )}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
               <Link to="/doctors" className={`h-9 lg:h-11 px-4 lg:px-6 rounded-lg lg:rounded-xl flex items-center gap-2 text-[11px] lg:text-[13px] font-black uppercase tracking-widest transition-all ${isScrolled ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-900 text-white'}`}>
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
                                    <Link key={sub.name} to={sub.path || (link.path === '/specialities' ? `/specialities/${sub.id}` : `${link.path}/${sub.slug}`)} state={sub.id ? { category: sub.id } : undefined} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[13px] font-semibold text-gray-600 hover:text-primary-600 flex items-center gap-3">
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
