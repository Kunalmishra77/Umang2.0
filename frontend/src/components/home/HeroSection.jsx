import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, User, Send, ChevronDown, Activity, HeartPulse, Clock, Award, ShieldCheck, Loader2 } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';
import { useLeadForm } from '../../hooks/useLeadForm';

const specialties = [
  'Cardiac Sciences',
  'Neuro Sciences',
  'Orthopaedics',
  'Gastroenterology',
  'General Surgery',
  'Urology',
  'Pulmonology'
];

const HeroSection = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Select Specialty');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const videoRef = useRef(null);

  const { submitForm, loading, success: isSubmitted, reset } = useLeadForm('callback');

  const mediaItems = [
    { type: 'image', src: ASSETS.HOSPITAL_EXTERIOR },
    { type: 'image', src: ASSETS.ABOUT_BEACON },
    { type: 'image', src: ASSETS.ROBOTIC_SURGERY },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (videoRef.current) {
        videoRef.current.play().catch(error => console.error("Video autoplay failed:", error));
      }
      return;
    }

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [index, isMobile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const phone = e.target.elements[1].value;
    
    await submitForm({
      name,
      phone,
      speciality: selectedSpecialty !== 'Select Specialty' ? selectedSpecialty : '',
      source_page: 'Home Hero'
    });
    
    if (!loading) {
      e.target.reset();
      setSelectedSpecialty('Select Specialty');
    }
  };

  return (
    <section
      className="relative w-full bg-[#020617] text-white overflow-hidden flex items-center justify-center lg:justify-start"
      style={{ height: 'calc(100svh - var(--header-h))', minHeight: '480px' }}
    >
      {/* BACKGROUND MEDIA CONTAINER */}
      <div className="absolute inset-0 z-0 bg-[#020617]">
        {!isMobile ? (
          /* Desktop: Single High-Quality Video */
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={ASSETS.HOSPITAL_EXTERIOR}
            className="w-full h-full object-cover opacity-70 brightness-[0.85]"
          >
            <source src="/assets/Home/umang-banner.MP4" type="video/mp4" />
          </video>
        ) : (
          /* Mobile: Cinematic Image Loop (NO VIDEO FOR PERF) */
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 10, ease: "linear" } 
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={mediaItems[index].src}
                className="w-full h-full object-cover opacity-70 brightness-[0.85]"
                alt=""
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* GRADIENTS FOR CONTENT FOCUS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/20 to-[#020617]/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 via-transparent to-transparent z-10 hidden lg:block" />

      <div className="container-custom relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5 flex justify-center lg:justify-start w-full lg:w-auto"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-primary-600/30 border border-white/20 rounded-full backdrop-blur-2xl">
                <Activity className="w-2.5 h-2.5 text-primary-300" />
                <span className="text-[7.5px] md:text-[8.5px] font-black uppercase tracking-[0.4em] text-white/90">{siteConfig.tagline}</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans font-black tracking-tight leading-[1.1] mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]" 
              style={{ fontSize: 'clamp(2.2rem, 8vw, 4.2rem)' }}
            >
              <span className="text-white">Precision</span>
              <br />
              <span className="text-primary-400 italic">Healthcare.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[14px] md:text-[17px] text-white/90 max-w-[42ch] mb-9 font-medium leading-relaxed px-4 lg:px-0 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
            >
              A {siteConfig.stats.beds}-bed beacon of <span className="text-primary-300 font-black">medical excellence in Gurugram</span>, where advanced technology meets human compassion.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 w-full lg:w-auto px-6 lg:px-0"
            >
              <Link
                to="/doctors"
                className="h-10 px-6 w-full sm:w-auto flex items-center justify-center bg-primary-600 text-white rounded-xl font-bold uppercase tracking-[0.15em] text-[10px] transition-all shadow-lg hover:bg-primary-500 hover:-translate-y-1 hover:shadow-primary-600/30 active:scale-95"
              >
                Book Appointment <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
              <a
                href={`tel:${siteConfig.contacts.emergency.replace(/\s/g, '')}`}
                className="h-10 px-6 w-full sm:w-auto flex items-center justify-center rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all text-[10px] font-bold uppercase tracking-[0.15em] active:scale-95"
              >
                Emergency
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 pt-8 border-t border-white/10 w-full lg:w-auto"
            >
              {[
                { label: 'NABH Accredited', icon: ShieldCheck },
                { label: `${siteConfig.stats.beds}+ Smart Beds`, icon: Award },
                { label: `${siteConfig.timings.emergency} Response`, icon: Clock }
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <s.icon className="w-3.5 h-3.5 text-primary-300" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Inquiry Form - Visible only on LG+ with Ultra-Premium Glassmorphism */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.5, type: "spring", damping: 25 }} 
              className="relative ml-auto max-w-[340px]"
            >
              <div className="rounded-[2rem] border border-white/10 bg-transparent backdrop-blur-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] p-8 overflow-visible">
                {/* Decorative subtle glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-[60px] -z-10" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg">
                    <HeartPulse className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[9px] font-black text-white uppercase tracking-[0.25em] leading-tight">Quick Inquiry</h3>
                    <p className="text-[8px] text-primary-300 font-bold uppercase tracking-widest mt-1">Response in 15 min</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="text-white font-bold text-sm mb-2">Request Sent!</h4>
                    <p className="text-white/60 text-[10px] mb-6">Our team will call you shortly.</p>
                    <button 
                      onClick={reset}
                      className="text-primary-400 text-[9px] font-bold uppercase tracking-widest"
                    >
                      New Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                      <User className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 text-white/30 group-focus-within:text-primary-400 transition-colors" />
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="YOUR NAME"
                        className="w-full bg-transparent border-b border-white/10 py-2 pl-6 pr-2 text-[10px] font-bold uppercase tracking-[0.12em] outline-none focus:border-primary-400 placeholder:text-white/20 text-white transition-all"
                      />
                    </div>

                    <div className="relative group">
                      <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 text-white/30 group-focus-within:text-primary-400 transition-colors" />
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="PHONE NUMBER"
                        className="w-full bg-transparent border-b border-white/10 py-2 pl-6 pr-2 text-[10px] font-bold uppercase tracking-[0.12em] outline-none focus:border-primary-400 placeholder:text-white/20 text-white transition-all"
                      />
                    </div>

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-transparent border-b ${isDropdownOpen ? 'border-primary-400' : 'border-white/10'} py-2 text-[10px] font-bold uppercase tracking-[0.12em] outline-none transition-all flex items-center justify-between text-white/80 hover:text-white`}
                      >
                        <span className={selectedSpecialty === 'Select Specialty' ? 'text-white/20' : 'text-white'}>{selectedSpecialty.toUpperCase()}</span>
                        <ChevronDown className={`w-3 h-3 text-white/20 transition-transform ${isDropdownOpen ? 'rotate-180 text-primary-400' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-[#0f172a]/95 border border-white/10 z-30 backdrop-blur-3xl rounded-2xl overflow-hidden shadow-2xl"
                          >
                            <div className="p-1 grid grid-cols-1">
                              {specialties.map((s) => (
                                <button
                                  key={s}
                                  type="button"
                                  onClick={() => {
                                    setSelectedSpecialty(s);
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-2 text-[9px] font-bold uppercase tracking-wider rounded-xl transition-all ${
                                    selectedSpecialty === s 
                                      ? 'bg-primary-600 text-white' 
                                      : 'text-white/50 hover:text-white hover:bg-white/5'
                                  }`}
                                >
                                  {s}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      disabled={loading}
                      className={`w-full h-10 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 transition-all mt-4 rounded-xl shadow-xl bg-primary-600 hover:bg-primary-500 text-white disabled:opacity-50 active:scale-95`}
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Callback <Send className="w-3 h-3" /></>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
