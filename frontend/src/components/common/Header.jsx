import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar, AlertCircle, Phone, Minus, Plus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { navConfig } from '../../config/navConfig';
import MegaMenuPanel from './MegaMenuPanel';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  }, [location]);

  const baseLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' }
  ];

  const allLinks = [...baseLinks, ...navConfig.mainNav];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
        {/* TOP BAR */}
        <div className={`bg-[#0f172a] text-white transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-10 lg:max-h-10'}`}>
           <div className="container-custom h-10 lg:h-10 flex items-center justify-between text-[13px] lg:text-[14px] font-semibold tracking-wide px-4">
              <a href={`tel:${siteConfig.contacts.emergency.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                 <AlertCircle className="w-3.5 h-3.5 text-red-500" /> <span className="inline">Emergency:</span> {siteConfig.contacts.emergency}
              </a>
              <div className="flex items-center gap-6">
                 <div className="hidden md:flex items-center gap-2 text-emerald-400 font-bold tracking-widest text-[12px]">NABH ACCREDITED</div>
                 <Link to="/doctors" className="hover:text-primary-400 transition-colors">Find Doctor</Link>
              </div>
           </div>
        </div>

        {/* MAIN NAV ROW */}
        <div className={`bg-white transition-all duration-500 border-b border-gray-100 relative ${isScrolled ? 'h-12 lg:h-14' : 'h-14 lg:h-16'}`}>
          <div className="container-custom flex items-center justify-between gap-4 px-4 w-full h-full relative">
            <Link to="/" className="flex items-center gap-2 shrink-0 group py-1">
               <div className="h-7 lg:h-9 flex items-center">
                 <img src="/umang.svg" alt="Umang" className="h-full w-auto object-contain" />
               </div>
               <div className="flex flex-col justify-center leading-none">
                 <span className="text-sm lg:text-lg font-bold tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors">{siteConfig.shortName.split(' ')[0]}<span className="text-primary-600">{siteConfig.shortName.split(' ')[1]}</span></span>
                 <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400">Superspeciality</span>
               </div>
            </Link>

            {/* Tightened Navigation Spacing */}
            <nav className="hidden xl:flex items-center gap-0.5 h-full">
              {allLinks.map((link) => {
                const hasDropdown = link.groups && link.groups.length > 0;
                
                return (
                  <div 
                    key={link.title} 
                    className="h-full flex items-center relative" 
                    onMouseEnter={() => hasDropdown && setActiveDropdown(link.title)} 
                    onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                  >
                    <NavLink 
                      to={link.href} 
                      className={({ isActive }) => `px-2 lg:px-3.5 py-2 text-[12px] lg:text-[13px] font-black uppercase tracking-wider rounded-xl transition-all ${isActive ? 'text-primary-600 bg-primary-50/50' : 'text-gray-600 hover:text-primary-600'}`}
                    >
                      <span className="flex items-center gap-1 whitespace-nowrap">
                         {link.title} {hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.title ? 'rotate-180' : 'opacity-40'}`} />}
                      </span>
                    </NavLink>

                    {/* Flush Dropdown Positioning - Optimized width and smart alignment */}
                    <AnimatePresence>
                      {activeDropdown === link.title && hasDropdown && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: 5 }} 
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full z-[110] pt-0 ${
                            ['Contact', 'Patients', 'Doctor', 'Infrastructure'].includes(link.title) ? 'right-0' : 
                            ['Home', 'About'].includes(link.title) ? 'left-0' : 'left-1/2 -translate-x-1/2'
                          } w-[720px] pointer-events-auto`}
                        >
                           <MegaMenuPanel item={link} closeMenu={() => setActiveDropdown(null)} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
               <Link to="/doctors" className="h-10 lg:h-11 px-4 lg:px-6 rounded-xl flex items-center gap-2 text-[11px] lg:text-[12px] font-black uppercase tracking-widest transition-all bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:bg-primary-500 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap">
                 <Calendar className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Appointment</span><span className="sm:hidden">BOOK</span>
               </Link>
               <button className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 border border-gray-100" onClick={() => setIsMobileMenuOpen(true)}>
                 <Menu className="w-6 h-6" />
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (Restored) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[150]" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed inset-y-0 right-0 w-[85%] max-w-[400px] bg-white z-[160] p-6 flex flex-col shadow-2xl overflow-y-auto">
               <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100 shrink-0">
                  <span className="text-xl font-bold text-gray-900">{siteConfig.shortName.split(' ')[0]}<span className="text-primary-600">{siteConfig.shortName.split(' ')[1]}</span></span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><X className="w-5 h-5" /></button>
               </div>
               <div className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
                  {allLinks.map((link) => {
                    const hasDropdown = link.groups && link.groups.length > 0;
                    return (
                      <div key={link.title} className="border-b border-gray-50 last:border-0 pb-1">
                        {hasDropdown ? (
                          <>
                            <button onClick={() => setMobileAccordion(mobileAccordion === link.title ? null : link.title)} className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50">
                              {link.title} {mobileAccordion === link.title ? <Minus className="w-4 h-4 text-primary-500" /> : <Plus className="w-4 h-4 text-gray-400" />}
                            </button>
                            <AnimatePresence>
                              {mobileAccordion === link.title && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-gray-50 rounded-2xl mx-2 mb-2">
                                  <div className="py-4 px-4 flex flex-col gap-1">
                                    {link.groups.map((group, gIdx) => {
                                      const isExternal = group.href.startsWith('http');
                                      const LinkComponent = isExternal ? 'a' : Link;
                                      const linkProps = isExternal 
                                        ? { href: group.href, target: "_blank", rel: "noopener noreferrer" } 
                                        : { to: group.href };

                                      return (
                                        <LinkComponent 
                                          key={gIdx} 
                                          {...linkProps}
                                          onClick={() => setIsMobileMenuOpen(false)} 
                                          className="px-4 py-4 text-[15px] font-bold text-gray-600 hover:text-primary-600 hover:bg-white rounded-xl flex items-center justify-between transition-all"
                                        >
                                          <span className="flex items-center gap-3">
                                            {group.icon && <group.icon size={18} className="text-primary-400" />}
                                            {group.title}
                                          </span>
                                          <ArrowRight size={16} className="text-gray-300" />
                                        </LinkComponent>
                                      );
                                    })}
                                    <Link 
                                      to={link.href} 
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="mt-2 px-4 py-3 bg-primary-100/50 text-primary-700 rounded-xl text-xs font-black uppercase tracking-widest text-center"
                                    >
                                      View All {link.title}
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <NavLink to={link.href} onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `block px-4 py-4 rounded-xl text-sm font-bold transition-all ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                            {link.title}
                          </NavLink>
                        )}
                      </div>
                    );
                  })}
               </div>
               <div className="pt-6 border-t border-gray-100 space-y-3 mt-4 shrink-0">
                  <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary-600 text-white font-bold text-sm shadow-lg shadow-primary-600/20">Book Appointment</Link>
                  <a href={`tel:${siteConfig.contacts.emergency.replace(/\s/g,'')}`} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 border-gray-900 text-gray-900 font-bold text-sm">Emergency Call</a>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
