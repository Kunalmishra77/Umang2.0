import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar, Heart, Brain, Bone, Activity, Clock, Mail, ArrowRight } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Specialties', 
      path: '/specialities', 
      type: 'dropdown',
      width: 'w-[90vw] md:w-[800px]',
      content: (
        <div className="flex flex-col md:flex-row gap-0 relative overflow-hidden rounded-xl">
          <div className="w-full md:w-1/3 bg-gray-50/80 p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-100">
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Featured Service</div>
             <Link to="/specialities" className="block bg-white p-4 rounded-xl border border-gray-100 shadow-sm group hover:border-primary-400 transition-all">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Activity className="w-4 h-4" />
                   </div>
                   <span className="font-bold text-brand-dark text-sm group-hover:text-primary-600 transition-colors">Health Checkup</span>
                </div>
                <p className="text-[10px] text-gray-500 mb-2">Full body analysis starting @ ₹999</p>
                <div className="flex items-center text-[10px] font-bold text-primary-600 gap-1">
                   Book Now <ArrowRight className="w-2 h-2" />
                </div>
             </Link>
          </div>
          
          <div className="w-full md:w-2/3 p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 bg-white">
             <div>
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Heart className="w-3 h-3" /> Departments
               </div>
               <div className="space-y-1">
                 {[{ name: "Cardiac Sciences", id: 'cardiac' }, { name: "Neuro Sciences", id: 'neuro' }, { name: "Orthopaedics", id: 'ortho' }].map((item, i) => (
                   <Link key={i} to="/specialities" state={{ category: item.id }} className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 text-sm text-gray-600 hover:text-[#005580] transition-colors font-medium">
                      {item.name}
                   </Link>
                 ))}
               </div>
             </div>
             <div>
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Clock className="w-3 h-3" /> Support
               </div>
               <div className="space-y-1">
                 {[{ name: "Infrastructure", path: "/infrastructure" }, { name: "Careers", path: "/careers" }, { name: "Contact", path: "/contact" }].map((item, i) => (
                   <Link key={i} to={item.path} className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 text-sm text-gray-600 hover:text-[#005580] transition-colors font-medium">
                      {item.name}
                   </Link>
                 ))}
               </div>
             </div>
          </div>
        </div>
      )
    },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className={`bg-gradient-to-r from-[#005580] to-[#0088cc] text-white transition-all duration-500 ease-in-out hidden sm:block ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'} relative z-[101]`}>
         <div className="container-custom h-full flex items-center justify-between text-[10px] md:text-[11px] font-bold tracking-wide">
            <div className="flex items-center gap-4 md:gap-6">
               <a href="tel:+918929733551" className="flex items-center gap-2 hover:text-blue-200 transition-colors"><Phone className="w-3 h-3 fill-current" /> Emergency: +91 89297 33551</a>
               <a href="mailto:info@umanghospitals.in" className="hidden lg:flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"><Mail className="w-3 h-3" /> info@umanghospitals.in</a>
            </div>
            <div className="flex items-center gap-4">
               <Link to="/doctors" className="hover:text-blue-200 transition-colors">Book Appointment</Link>
               <span className="opacity-30">|</span>
               <Link to="/careers" className="hover:text-blue-200 transition-colors">Careers</Link>
            </div>
         </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-[100] transition-all duration-500 border-b ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-xl shadow-lg border-white/20 py-2' 
            : 'top-0 sm:top-10 bg-white border-gray-100 py-3 md:py-4 shadow-sm'
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          
          <Link to="/" className="flex items-center gap-2 md:gap-3 group relative z-50 shrink-0">
             <div className="p-1 md:p-1.5 bg-white rounded-lg shadow-sm shrink-0 h-10 md:h-12 flex items-center">
               <img src="/umang.jpg" alt="Umang Hospital" className="h-full w-auto object-contain" />
             </div>
             <div className="flex flex-col leading-tight md:leading-none">
               <span className="text-base sm:text-lg md:text-2xl font-bold tracking-tight text-[#005580]">
                 Umang <span className="text-[#0088cc]">Hospital</span>
               </span>
               <span className="hidden sm:block text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-gray-500 mt-0.5 group-hover:text-[#0088cc] transition-colors">
                 Superspeciality Care
               </span>
             </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative group h-14 flex items-center"
                onMouseEnter={() => link.type === 'dropdown' && setActiveDropdown(link.name)}
                onMouseLeave={() => link.type === 'dropdown' && setActiveDropdown(null)}
              >
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `relative px-4 py-2 text-xs xl:text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-1 ${
                      isActive 
                        ? 'text-white bg-[#005580] shadow-md' 
                        : 'text-gray-600 hover:text-[#005580] hover:bg-blue-50/80'
                    }`
                  }
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.name}
                    {link.type === 'dropdown' && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </span>
                </NavLink>

                <AnimatePresence>
                  {activeDropdown === link.name && link.type === 'dropdown' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`absolute top-[90%] left-1/2 -translate-x-1/2 pt-4 z-[110] ${link.width}`}
                    >
                       <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
                       <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative z-50 ring-1 ring-black/5">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#005580] via-[#0088cc] to-[#005580]" />
                          {link.content}
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
             <Link 
                to="/doctors" 
                className="hidden sm:flex group h-10 md:h-12 px-4 md:px-8 rounded-full items-center gap-2 text-xs md:text-sm font-bold bg-gradient-to-r from-[#005580] to-[#0088cc] text-white hover:shadow-lg transition-all shadow-md shadow-blue-900/20"
             >
               <Calendar className="w-4 h-4" />
               <span className="whitespace-nowrap">Appointment</span>
             </Link>

             <button 
               className="xl:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center border border-gray-100"
               onClick={(e) => {
                 e.stopPropagation();
                 setIsMobileMenuOpen(true);
               }}
             >
               <Menu className="w-6 h-6 md:w-7 md:h-7" />
             </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 bg-black/60 backdrop-blur-md z-[150]"
               onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: "spring", damping: 35, stiffness: 300 }}
               className="fixed inset-y-0 right-0 w-full sm:w-[80%] max-w-[320px] bg-white z-[160] shadow-2xl p-6 flex flex-col pointer-events-auto"
            >
               <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                     <img src="/umang.jpg" alt="Logo" className="h-8" />
                     <span className="font-bold text-[#005580] text-lg tracking-tight">Menu</span>
                  </div>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 border border-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
               </div>
               
               <div className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
                  {navLinks.map((link) => (
                    <NavLink 
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => 
                        `block px-5 py-4 rounded-2xl text-base font-bold transition-all ${isActive ? 'bg-[#005580] text-white shadow-lg' : 'text-gray-600 hover:bg-blue-50 hover:text-[#005580]'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
               </div>

               <div className="pt-6 border-t border-gray-100 space-y-3">
                  <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-gradient-to-r from-[#005580] to-[#0088cc] text-white font-bold hover:shadow-lg">
                     <Calendar className="w-4 h-4" /> Book Appointment
                  </Link>
                  <a href="tel:+918929733551" className="flex items-center justify-center gap-2 w-full py-4 rounded-full border-2 border-primary-100 text-primary-600 font-bold hover:bg-primary-50 transition-colors">
                     <Phone className="w-4 h-4" /> Emergency Call
                  </a>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;