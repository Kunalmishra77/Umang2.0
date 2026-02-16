import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar, Activity, Mail, ArrowRight, ShieldCheck, MapPin, Clock, Plus, Minus, Heart, Star, Award, Stethoscope, Video, Pill, Info, BookOpen, Users, Smartphone, MessageSquare, Zap, GraduationCap, Briefcase, Radio, PenTool, Mic, FileText, HelpCircle, Wind, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../../utils/imageAssets';

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
      width: 'md:w-[720px]',
      content: (
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden">
          <div className="w-full md:w-[38%] bg-primary-50/50 p-8 lg:p-10 border-r border-gray-100 flex flex-col justify-between">
             <div>
                <div className="flex items-center gap-2 text-primary-600 font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                   <Star className="w-3.5 h-3.5 animate-pulse" /> Top Rated Dept
                </div>
                <Link to="/specialities" state={{ category: 'cardiac' }} className="block group">
                   <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 relative shadow-xl">
                      <img src={ASSETS.CARDIAC} alt="Cardiac" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 text-white">
                         <p className="text-[11px] font-bold uppercase tracking-widest opacity-90 mb-1">Center of Excellence</p>
                         <h4 className="font-bold text-xl lg:text-2xl">Cardiac Sciences</h4>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">Advanced Cath Labs & Heart Surgery facilities with 24/7 critical care support.</p>
                </Link>
             </div>
             <Link to="/specialities" className="flex items-center text-[11px] font-black text-primary-600 uppercase tracking-widest gap-2 hover:gap-3 transition-all">
                All Departments <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          <div className="w-full md:w-[62%] p-8 lg:p-10 bg-white">
             <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Major Specialities
             </div>
             <div className="grid grid-cols-2 gap-x-10 gap-y-3">
               {[
                 { name: "Cardiac Sciences", id: 'cardiac', icon: Heart }, 
                 { name: "Neuro Sciences", id: 'neuro', icon: Activity }, 
                 { name: "Orthopaedics", id: 'ortho', icon: Award }, 
                 { name: "Gastroenterology", id: 'gastro', icon: Activity }, 
                 { name: "Pulmonology", id: 'pulmonology', icon: Wind }, 
                 { name: "Urology", id: 'urology', icon: Zap },
                 { name: "General Surgery", id: 'surgery', icon: Scissors },
                 { name: "Oncology", id: 'oncology', icon: ShieldCheck },
                 { name: "Internal Medicine", id: 'internal', icon: Stethoscope }
               ].map((item, i) => (
                 <Link key={i} to="/specialities" state={{ category: item.id }} className="flex items-center gap-4 py-2.5 text-[15px] font-bold text-gray-700 hover:text-primary-600 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-primary-50 flex items-center justify-center text-gray-400 group-hover:text-primary-500 transition-all duration-300 shadow-sm group-hover:shadow-md">
                       <item.icon className="w-5 h-5" />
                    </div>
                    {item.name}
                 </Link>
               ))}
             </div>
          </div>
        </div>
      ),
      links: [
        { name: "Cardiac Sciences", id: 'cardiac' }, { name: "Neuro Sciences", id: 'neuro' }, 
        { name: "Orthopaedics", id: 'ortho' }, { name: "Gastroenterology", id: 'gastro' }, 
        { name: "Pulmonology", id: 'pulmonology' }, { name: "Urology", id: 'urology' },
        { name: "General Surgery", id: 'surgery' }, { name: "Oncology", id: 'oncology' }
      ],
      mobileFeature: { img: ASSETS.CARDIAC, title: "Cardiac Sciences", desc: "Center of excellence with advanced cardiac care." }
    },
    {
      name: 'Services',
      path: '/services',
      type: 'dropdown',
      width: 'md:w-[640px]',
      content: (
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden">
          <div className="w-full md:w-[35%] bg-blue-50/50 p-8 border-r border-gray-100 flex flex-col justify-between">
             <div>
                <div className="flex items-center gap-2 text-[#005580] font-black uppercase tracking-[0.3em] text-[9px] mb-6">
                   <Clock className="w-3 h-3" /> 24/7 Response
                </div>
                <Link to="/services/emergency" className="block group">
                   <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative shadow-xl">
                      <img src={ASSETS.AMBULANCE} alt="Emergency" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-red-900/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-4 left-4">
                         <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-600 shadow-lg">
                            <Phone className="w-4 h-4 fill-current" />
                         </div>
                      </div>
                   </div>
                   <h4 className="font-bold text-lg text-brand-dark mb-1">Emergency & Trauma</h4>
                   <p className="text-xs text-gray-500 leading-relaxed font-medium mb-4 text-left">Advanced life support ambulances and a dedicated trauma team ready 24/7.</p>
                </Link>
             </div>
             <Link to="/services" className="flex items-center text-[10px] font-black text-primary-600 uppercase tracking-widest gap-2 hover:gap-3 transition-all">
                Explore All Services <ArrowRight className="w-3.5 h-3.5" />
             </Link>
          </div>
          <div className="w-full md:w-[65%] p-8 bg-white">
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" /> Support Services
             </div>
             <div className="grid grid-cols-2 gap-x-8 gap-y-2">
               {[
                 { name: "Diagnostics & Labs", slug: "lab-test-diagnostic", icon: Activity },
                 { name: "24/7 Pharmacy", slug: "buy-medicines", icon: Pill },
                 { name: "Emergency Care", slug: "emergency", icon: Phone },
                 { name: "Health Checkups", slug: "health-checkup", icon: ShieldCheck },
                 { name: "ICU Facility", path: "/infrastructure/icu", icon: Activity },
                 { name: "Cashless Help", path: "/cashless-insurance", icon: Award },
                 { name: "Telemedicine", path: "/services/telemedicine", icon: Video },
                 { name: "Home Care", path: "/services/ipd-opd", icon: Info }
               ].map((item, i) => (
                 <Link key={i} to={item.path || `/services/${item.slug}`} className="flex items-center gap-3 py-2.5 text-[13px] font-bold text-gray-600 hover:text-primary-600 transition-all group">
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
        { name: "Diagnostics & Labs", slug: "lab-test-diagnostic" }, { name: "24/7 Pharmacy", slug: "buy-medicines" },
        { name: "Emergency & Trauma", slug: "emergency" }, { name: "Health Checkups", slug: "health-checkup" },
        { name: "ICU Infrastructure", path: "/infrastructure/icu" }, { name: "Cashless Insurance", path: "/cashless-insurance" }
      ],
      mobileFeature: { img: ASSETS.AMBULANCE, title: "Emergency & Trauma", desc: "24/7 rapid response and critical support services." }
    },
    {
      name: 'Library',
      path: '/health-library',
      type: 'dropdown',
      width: 'md:w-[600px]',
      content: (
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden">
          <div className="w-full md:w-[40%] bg-emerald-50/50 p-8 border-r border-gray-100">
             <div className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-6">Educational Resources</div>
             <Link to="/health-library/ailments" className="block group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative shadow-lg">
                   <img src={ASSETS.HEALTH_CHECKUP} alt="Checkup" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="font-bold text-lg text-brand-dark mb-1">Health Ailments</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium text-left">Comprehensive encyclopedia of medical conditions and symptoms.</p>
             </Link>
          </div>
          <div className="w-full md:w-[60%] p-8 bg-white grid grid-cols-1 gap-2">
             {[
               { name: "Medical Treatments", path: "/health-library/treatments", icon: Stethoscope },
               { name: "Advanced Technologies", path: "/health-library/technologies", icon: Zap },
               { name: "Health Events", path: "/health-library/events", icon: Calendar },
               { name: "Knowledge Center", path: "/health-library/knowledge-center", icon: GraduationCap },
               { name: "Patient Downloads", path: "/health-library/downloads", icon: FileText }
             ].map((item, i) => (
               <Link key={i} to={item.path} className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-gray-600 hover:text-emerald-700 transition-all font-bold group">
                  <div className="flex items-center gap-3">
                     <item.icon className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                     <span className="text-sm">{item.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
               </Link>
             ))}
          </div>
        </div>
      ),
      links: [
        { name: "Treatments", path: "/health-library/treatments" }, { name: "Technologies", path: "/health-library/technologies" },
        { name: "Ailments", path: "/health-library/ailments" }, { name: "Knowledge Center", path: "/health-library/knowledge-center" },
        { name: "Events", path: "/health-library/events" }
      ],
      mobileFeature: { img: ASSETS.HEALTH_CHECKUP, title: "Health Ailments", desc: "Comprehensive encyclopedia of conditions and symptoms." }
    },
    {
      name: 'Team',
      path: '/team',
      type: 'dropdown',
      width: 'md:w-[540px]',
      content: (
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden">
          <div className="w-full md:w-[45%] bg-indigo-50/50 p-8 border-r border-gray-100">
             <div className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">Expert Faculty</div>
             <Link to="/doctors" className="block group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative shadow-lg">
                   <img src="/doctors-images/dr-manmohan.svg" alt="Doctor" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="font-bold text-lg text-brand-dark mb-1">Meet Our Doctors</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium text-left">Over 100+ board certified specialists across 25+ departments.</p>
             </Link>
          </div>
          <div className="w-full md:w-[55%] p-8 bg-white flex flex-col justify-center gap-3">
             {[
               { name: "Our Specialists", path: "/doctors", icon: Users, desc: "Search doctor directory" },
               { name: "Leadership Team", path: "/team", icon: Award, desc: "Our board & management" },
               { name: "Nursing Staff", path: "/team", icon: Heart, desc: "Compassionate care team" },
               { name: "Join Our Team", path: "/careers", icon: Briefcase, desc: "Explore career opportunities" }
             ].map((item, i) => (
               <Link key={i} to={item.path} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-indigo-50 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-indigo-400 group-hover:text-indigo-600 transition-colors border border-gray-100">
                     <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-gray-900 leading-none mb-1">{item.name}</p>
                     <p className="text-[10px] text-gray-400 font-medium">{item.desc}</p>
                  </div>
               </Link>
             ))}
          </div>
        </div>
      ),
      links: [
        { name: "Our Doctors", path: "/doctors" }, { name: "Leadership", path: "/team" }, { name: "Careers", path: "/careers" }
      ],
      mobileFeature: { img: ASSETS.DIRECTOR, title: "Expert Faculty", desc: "Meet our specialists and leadership team." }
    },
    {
       name: 'Patients',
       path: '/patient-corner',
       type: 'dropdown',
       width: 'md:w-[600px]',
       content: (
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden">
          <div className="w-full md:w-[35%] bg-amber-50/50 p-8 border-r border-gray-100 flex flex-col justify-between">
             <div>
                <div className="text-[9px] font-black text-amber-600 uppercase tracking-[0.3em] mb-6">Patient Portal</div>
                <Link to="/patient-corner/patient-stories" className="block group">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative shadow-xl">
                    <img src={ASSETS.INTERNATIONAL} alt="Patient services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Patient Support</p>
                      <h4 className="font-bold text-lg">Success Stories</h4>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 font-medium">Real recovery journeys and patient literature for a smooth care path.</p>
                </Link>
             </div>
             <Link to="/patient-experience" className="flex items-center text-[10px] font-black text-amber-600 uppercase tracking-widest gap-2 hover:gap-3 transition-all">
                Patient Rights & Policy <ArrowRight className="w-3.5 h-3.5" />
             </Link>
          </div>
          <div className="w-full md:w-[65%] p-8 bg-white grid grid-cols-1 gap-1">
             {[
                { name: "Patient Experience", path: "/patient-experience", icon: Star },
                { name: "Success Stories", path: "/patient-corner/patient-stories", icon: Heart },
                { name: "Health Blogs", path: "/patient-corner/blogs", icon: PenTool },
                { name: "Health Podcasts", path: "/patient-corner/podcasts", icon: Mic },
                { name: "Patient Literature", path: "/patient-corner/patient-information-literature", icon: Info }
             ].map((item, i) => (
               <Link key={i} to={item.path} className="flex items-center justify-between p-3.5 rounded-xl hover:bg-amber-50 text-gray-600 hover:text-amber-700 transition-all font-bold group">
                  <div className="flex items-center gap-4">
                     <item.icon className="w-4.5 h-4.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                     <span className="text-[13px]">{item.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
               </Link>
             ))}
          </div>
        </div>
       ),
       links: [
          { name: "Patient Experience", path: "/patient-experience" }, { name: "Patient Stories", path: "/patient-corner/patient-stories" },
          { name: "Health Blogs", path: "/patient-corner/blogs" }, { name: "Patient Literatur", path: "/patient-corner/patient-information-literature" }
       ],
       mobileFeature: { img: ASSETS.INTERNATIONAL, title: "Patient Portal", desc: "Support resources and patient stories in one place." }
    },
    {
      name: 'Contact',
      path: '/contact',
      type: 'dropdown',
      width: 'md:w-[620px]',
      content: (
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden">
          <div className="w-full md:w-[40%] bg-rose-50/60 p-8 border-r border-gray-100">
            <div className="text-[9px] font-black text-rose-600 uppercase tracking-[0.3em] mb-6">Quick Support</div>
            <div className="rounded-2xl overflow-hidden mb-4 shadow-lg relative">
              <img src={ASSETS.HOSPITAL_EXTERIOR} alt="Contact Umang Hospital" className="w-full h-44 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Always Available</p>
                <h4 className="font-bold text-lg">Get in Touch</h4>
              </div>
            </div>
            <a href="tel:+918929733550" className="flex items-center gap-3 text-rose-700 text-xs font-black uppercase tracking-wider">
              <Phone className="w-4 h-4 fill-current" /> +91 89297 33550
            </a>
          </div>
          <div className="w-full md:w-[60%] p-8 bg-white space-y-2">
            {[
              { name: "General Inquiry", path: "/contact", icon: MessageSquare, color: "text-blue-600 bg-blue-50" },
              { name: "Inquiry Hub", path: "/contact/inquiry-hub", icon: HelpCircle, color: "text-amber-600 bg-amber-50" },
              { name: "Media Center", path: "/media-center", icon: Radio, color: "text-purple-600 bg-purple-50" }
            ].map((item, i) => (
              <Link key={i} to={item.path} className="flex items-center justify-between gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color.split(' ')[1]} ${item.color.split(' ')[0]}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-gray-700">{item.name}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      ),
      links: [
         { name: "Get in Touch", path: "/contact" }, { name: "Inquiry Hub", path: "/contact/inquiry-hub" }, { name: "Media Center", path: "/media-center" }
      ],
      mobileFeature: { img: ASSETS.HOSPITAL_EXTERIOR, title: "Quick Support", desc: "Reach the right team for inquiries and assistance." }
    },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'shadow-2xl' : ''}`}>
        {/* TOP BAR */}
        <div className={`bg-[#0f172a] text-white transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-10 lg:max-h-8'}`}>
           <div className="container-custom h-10 lg:h-8 flex items-center justify-between text-[10px] lg:text-[11px] font-semibold tracking-wide px-4">
              <a href="tel:+918929733550" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                 <Phone className="w-3 h-3" /> <span className="hidden xs:inline">Emergency:</span> +91 89297 33550
              </a>
              <div className="flex items-center gap-4">
                 <div className="hidden md:flex items-center gap-2 text-emerald-400 font-bold"><ShieldCheck className="w-3 h-3" /> NABH ACCREDITED</div>
                 <Link to="/doctors" className="hover:text-primary-400 transition-colors">Find Doctor</Link>
              </div>
           </div>
        </div>

        {/* MAIN NAV */}
        <div className={`bg-white transition-all duration-500 border-b border-gray-100 ${isScrolled ? 'py-1 lg:py-2' : 'py-2 lg:py-3'}`}>
          <div className="container-custom flex items-center justify-between gap-4 px-4">
            <Link to="/" className="flex items-center gap-2 shrink-0 group">
               <div className={`transition-all duration-500 ${isScrolled ? 'h-7 lg:h-8' : 'h-8 lg:h-9'}`}>
                 <img src="/umang.svg" alt="Umang" className="h-full w-auto object-contain" />
               </div>
               <div className="flex flex-col leading-none">
                 <span className="text-base lg:text-xl font-bold tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors">Umang<span className="text-primary-600">Hospital</span></span>
                 <span className="text-[6px] lg:text-[7px] uppercase tracking-[0.25em] font-bold text-gray-400">Superspeciality</span>
               </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group h-full flex items-center" onMouseEnter={() => link.type === 'dropdown' && setActiveDropdown(link.name)} onMouseLeave={() => link.type === 'dropdown' && setActiveDropdown(null)}>
                  <NavLink to={link.path} className={({ isActive }) => `px-2 lg:px-2.5 py-1.5 text-[12.5px] lg:text-[14px] font-bold rounded-xl transition-all ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'}`}>
                    <span className="flex items-center gap-0.5">
                       {link.name} {link.type === 'dropdown' && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : 'opacity-40'}`} />}
                    </span>
                  </NavLink>
                  <AnimatePresence>
                    {activeDropdown === link.name && link.type === 'dropdown' && (
                      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className={`absolute top-[80%] left-1/2 -translate-x-1/2 pt-5 z-[110] ${link.width}`}>
                         <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
                            {link.content}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
               <Link to="/doctors" className={`h-9 lg:h-10 px-4 lg:px-6 rounded-lg lg:rounded-xl flex items-center gap-2 text-[10.5px] lg:text-[12.5px] font-black uppercase tracking-widest transition-all ${isScrolled ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-900 text-white'}`}>
                 <Calendar className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Appointment</span><span className="sm:hidden text-[9px]">BOOK</span>
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
                                  {link.mobileFeature && (
                                    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-2">
                                      <img src={link.mobileFeature.img} alt={link.mobileFeature.title} className="w-full h-28 object-cover" />
                                      <div className="p-3">
                                        <h5 className="text-xs font-bold text-brand-dark">{link.mobileFeature.title}</h5>
                                        <p className="text-[10px] text-gray-500 leading-relaxed mt-1">{link.mobileFeature.desc}</p>
                                      </div>
                                    </div>
                                  )}
                                  {link.links.map((sub) => (
                                    <Link key={sub.name} to="/specialities" state={{ category: sub.id }} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[14px] font-semibold text-gray-600 hover:text-primary-600 flex items-center gap-3">
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
