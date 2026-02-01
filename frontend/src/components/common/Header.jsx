import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar, Heart, Bone, Activity, Clock, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
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
          <div className="w-full md:w-[32%] bg-gray-50/90 p-6 border-b md:border-b-0 md:border-r border-gray-100">
             <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">Featured</div>
             <Link to="/services/health-checkup" className="block bg-white p-4 rounded-2xl border border-gray-100 shadow-sm group hover:border-primary-300 transition-all">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                      <Activity className="w-5 h-5" />
                   </div>
                   <span className="font-bold text-brand-dark text-xs group-hover:text-primary-700">Checkup</span>
                </div>
                <p className="text-[10px] text-gray-500 mb-3 leading-relaxed">Full body packages @ ₹999.</p>
                <div className="flex items-center text-[9px] font-black text-primary-600 gap-1 uppercase tracking-widest">
                   Book <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                </div>
             </Link>
          </div>
          <div className="w-full md:w-[68%] p-6 bg-white">
             <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Heart className="w-3 h-3" /> Popular
             </div>
             <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
               {[
                 { name: "Cardiac Sciences", id: 'cardiac' }, 
                 { name: "Neuro Sciences", id: 'neuro' }, 
                 { name: "Orthopaedics", id: 'ortho' }, 
                 { name: "Gastroenterology", id: 'gastro' }, 
                 { name: "Pulmonology", id: 'pulmonology' }, 
                 { name: "Urology", id: 'urology' },
                 { name: "Nephrology", id: 'nephrology' },
                 { name: "Oncology", id: 'oncology' },
                 { name: "Gynecology", id: 'gynecology' },
                 { name: "Pediatrics", id: 'pediatrics' }
               ].map((item, i) => (
                 <Link key={i} to="/specialities" state={{ category: item.id }} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-primary-50/50 text-xs font-bold text-gray-600 hover:text-primary-700 transition-all group">
                    <span className="w-1 h-1 rounded-full bg-primary-200 group-hover:bg-primary-500 transition-colors" />
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
      width: 'w-[220px]',
      content: (
         <div className="p-1.5 bg-white rounded-2xl shadow-xl w-[260px]">
            {[
               { name: "Second Opinion", slug: "second-opinion" },
               { name: "Diagnostics & Labs", slug: "lab-test-diagnostic" },
               { name: "Home Care Services", slug: "home-care" },
               { name: "24/7 Pharmacy", slug: "buy-medicines" },
               { name: "Telemedicine Consult", slug: "telemedicine" },
               { name: "Emergency & Trauma", slug: "emergency" },
               { name: "Health Checkups", slug: "health-checkup" },
               { name: "Elder Care", slug: "elder-care" }
            ].map((item, i) => (
               <Link key={i} to={`/services/${item.slug}`} className="flex items-center justify-between px-3.5 py-2 text-[11px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-xl transition-all">
                  {item.name}
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all text-primary-400" />
               </Link>
            ))}
         </div>
      )
    },
    {
      name: 'Library',
      path: '/health-library',
      type: 'dropdown',
      width: 'w-[220px]',
      content: (
         <div className="p-1.5 bg-white rounded-2xl shadow-xl">
            {[
               { name: "Treatments", path: "/health-library/treatments" },
               { name: "Technologies", path: "/health-library/technologies" },
               { name: "Ailments", path: "/health-library/ailments" },
               { name: "Knowledge Center", path: "/health-library/knowledge-center" },
               { name: "Events", path: "/health-library/events" }
            ].map((item, i) => (
               <Link key={i} to={item.path} className="flex items-center justify-between px-3.5 py-2 text-[11px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-xl transition-all group">
                  {item.name}
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all text-primary-400" />
               </Link>
            ))}
         </div>
      )
    },
    {
      name: 'Team',
      path: '/team',
      type: 'dropdown',
      width: 'w-[220px]',
      content: (
         <div className="p-1.5 bg-white rounded-2xl shadow-xl">
            {[
               { name: "Our Doctors", path: "/doctors" },
               { name: "Leadership", path: "/team" },
               { name: "Careers", path: "/careers" }
            ].map((item, i) => (
               <Link key={i} to={item.path} className="flex items-center justify-between px-3.5 py-2 text-[11px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-xl transition-all group">
                  {item.name}
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all text-primary-400" />
               </Link>
            ))}
         </div>
      )
    },
    {
       name: 'Patients',
       path: '/patient-corner',
       type: 'dropdown',
       width: 'w-[220px]',
       content: (
          <div className="p-1.5 bg-white rounded-2xl shadow-xl">
             {[
                { name: "Stories", slug: "patient-stories" },
                { name: "Blogs", slug: "blogs" },
                { name: "Podcasts", slug: "podcasts" },
                { name: "Information", slug: "patient-information-literature" }
             ].map((item, i) => (
                <Link key={i} to={`/patient-corner/${item.slug}`} className="flex items-center justify-between px-3.5 py-2 text-[11px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-xl transition-all group">
                   {item.name}
                   <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all text-primary-400" />
                </Link>
             ))}
          </div>
       )
    },
    {
      name: 'Contact',
      path: '/contact',
      type: 'dropdown',
      width: 'w-[220px]',
      content: (
         <div className="p-1.5 bg-white rounded-2xl shadow-xl">
            {[
               { name: "Get in Touch", path: "/contact" },
               { name: "Inquiry Hub", path: "/contact/inquiry-hub" },
               { name: "Media Center", path: "/media-center" }
            ].map((item, i) => (
               <Link key={i} to={item.path} className="flex items-center justify-between px-3.5 py-2 text-[11px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-xl transition-all group">
                  {item.name}
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all text-primary-400" />
               </Link>
            ))}
         </div>
      )
    },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${isScrolled ? 'shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]' : ''}`}>
        <div className={`bg-brand-dark text-white transition-all duration-500 hidden sm:block overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
           <div className="container-custom h-10 flex items-center justify-between text-[10px] font-bold tracking-wider">
              <div className="flex items-center gap-4">
                 <a href="tel:+918929733551" className="flex items-center gap-1.5 hover:text-primary-300 transition-colors"><Phone className="w-3 h-3" /> Emergency: +91 89297 33551</a>
                 <a href="mailto:info@umanghospitals.in" className="hidden lg:flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"><Mail className="w-3 h-3" /> info@umanghospitals.in</a>
              </div>
              <div className="flex items-center gap-4">
                 <Link to="/doctors" className="hover:text-primary-300 transition-colors uppercase tracking-tighter">Find a Doctor</Link>
                 <span className="opacity-20">|</span>
                 <Link to="/careers" className="hover:text-primary-300 transition-colors uppercase tracking-tighter">Careers</Link>
                 <span className="opacity-20">|</span>
                 <Link to="/patients/lab-reports" className="flex items-center gap-1.5 hover:text-primary-300 transition-colors uppercase tracking-tighter"><Activity className="w-3 h-3" /> Lab Reports</Link>
              </div>
           </div>
        </div>

        <div className={`transition-all duration-500 border-b border-white/5 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-1' : 'bg-white border-gray-100 py-2 lg:py-2.5'}`}>
          <div className="container-custom flex items-center justify-between gap-2 md:gap-4">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
               <div className="p-1 bg-white rounded-lg shadow-sm border border-gray-100 h-8 md:h-10 flex items-center">
                 <img src="/umang.jpg" alt="Umang" className="h-full w-auto object-contain" />
               </div>
               <div className="flex flex-col leading-none justify-center">
                 <span className="text-base md:text-lg font-serif font-bold tracking-tight text-brand-dark group-hover:text-primary-600 transition-colors whitespace-nowrap">
                   Umang<span className="text-primary-600">Hospital</span>
                 </span>
                 <span className="hidden sm:block text-[7px] uppercase tracking-[0.2em] font-bold text-gray-400 mt-0.5 whitespace-nowrap">Superspeciality</span>
               </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group h-10 flex items-center justify-center" onMouseEnter={() => link.type === 'dropdown' && setActiveDropdown(link.name)} onMouseLeave={() => link.type === 'dropdown' && setActiveDropdown(null)}>
                  <NavLink to={link.path} className={({ isActive }) => `relative px-3.5 py-2 text-[14px] font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1 whitespace-nowrap ${isActive ? 'text-white bg-brand-dark shadow-md' : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50/80'}`}>
                    <span className="relative z-10 flex items-center gap-1">
                      {link.name}
                      {link.type === 'dropdown' && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : 'opacity-40'}`} />}
                    </span>
                  </NavLink>
                  <AnimatePresence>
                    {activeDropdown === link.name && link.type === 'dropdown' && (
                      <motion.div initial={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(10px)" }} transition={{ duration: 0.2 }} className={`absolute top-[85%] left-1/2 -translate-x-1/2 pt-4 z-[110] ${link.width}`}>
                         <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
                         <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden relative z-50 p-1">
                            {link.content}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
               <Link to="/doctors" className="hidden sm:flex h-9 px-4 rounded-full items-center gap-1.5 text-[11px] font-bold bg-brand-dark text-white hover:bg-primary-600 hover:shadow-lg transition-all group whitespace-nowrap uppercase tracking-wider">
                 <Calendar className="w-3 h-3" />
                 <span>Appointment</span>
               </Link>
               <button className="xl:hidden p-1.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200" onClick={() => setIsMobileMenuOpen(true)}>
                 <Menu className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-[150]" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed inset-y-0 right-0 w-[80%] sm:w-[350px] bg-white z-[160] shadow-2xl p-6 flex flex-col pointer-events-auto">
               <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                     <span className="font-serif font-bold text-brand-dark text-lg">Umang<span className="text-primary-600">Hospital</span></span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 border border-gray-100"><X className="w-4 h-4" /></button>
               </div>
               <div className="flex-1 space-y-1.5 overflow-y-auto no-scrollbar">
                  {navLinks.map((link) => (
                    <NavLink key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `block px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive ? 'bg-brand-dark text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}>{link.name}</NavLink>
                  ))}
               </div>
               <div className="pt-6 border-t border-gray-100 space-y-3 mt-4">
                  <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary-600 text-white font-bold text-sm shadow-lg shadow-primary-600/20">Book Appointment</Link>
                  <a href="tel:+918929733551" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-brand-dark text-brand-dark font-bold text-sm">Emergency Call</a>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
