import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, User, Send, ChevronDown, Activity, HeartPulse, Clock, Award, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';

const HERO_IMAGES = [
  ASSETS.HOSPITAL_EXTERIOR,
  ASSETS.SVC_ICU_ADVANCE_CARE,
  ASSETS.ROBOTIC_SURGERY,
  ASSETS.SVC_RADIOLOGY_IMAGING,
  ASSETS.SVC_INTERVENTIONAL_CARDIOLOGY,
  ASSETS.CARDIAC_HERO,
  ASSETS.SVC_LAPAROSCOPIC_SURGERY
].filter(Boolean);

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
  const [index, setIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('Select Specialty');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Combine video and images for the loop
  const mediaItems = [
    { type: 'video', src: ASSETS.UMANG_VIDEO },
    ...HERO_IMAGES.map(img => ({ type: 'image', src: img }))
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mediaItems.length);
    }, mediaItems[index]?.type === 'video' ? 12000 : 6000); // Longer duration for video
    return () => clearInterval(timer);
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 2500);
    }, 1200);
  };

  return (
    <section
      className="relative w-full bg-[#020617] text-white overflow-hidden flex items-center"
      style={{ height: 'calc(100svh - var(--header-h))' }}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {mediaItems[index]?.type === 'video' ? (
              <video
                src={mediaItems[index].src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-55"
              />
            ) : (
              <img
                src={mediaItems[index].src}
                className="w-full h-full object-cover opacity-50"
                alt=""
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-[#020617]/30 to-transparent z-10" />
      <div className="overlay-soft z-10 opacity-20" />

      <div className="container-custom relative z-20 w-full py-4 lg:py-0">
        <div className="grid lg:grid-cols-12 panel-inner-gap items-center">
          <div className="lg:col-span-7 xl:col-span-8 text-center lg:text-left flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-3 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <Activity className="w-3.5 h-3.5 text-primary-300" />
                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white">Advanced Superspeciality Care</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans font-black tracking-tight leading-[0.9] mb-4" 
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.2rem)' }}
            >
              Precision
              <br />
              <span className="hero-gradient-text italic">Healthcare.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[15px] md:text-[1.1rem] text-white/80 max-w-[60ch] mb-8 lg:mb-10 font-medium leading-relaxed mx-auto lg:mx-0"
            >
              A 100-bed beacon of medical excellence in Gurugram, where advanced technology meets human compassion.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                to="/doctors"
                className="h-12 lg:h-13 px-8 flex items-center justify-center bg-white text-brand-dark rounded-xl font-black uppercase tracking-[0.15em] text-[12px] transition-all shadow-2xl hover:bg-primary-50 hover:-translate-y-1"
              >
                Book Appointment <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+918929733550"
                className="h-12 lg:h-13 px-8 flex items-center justify-center rounded-xl border-2 border-white/25 backdrop-blur-md hover:bg-white/10 transition-all text-[12px] font-black uppercase tracking-[0.15em]"
              >
                Emergency Support
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 border-t border-white/15 pt-5 opacity-80"
            >
              {[
                { label: 'NABH Accredited', icon: ShieldCheck },
                { label: '100+ Smart Beds', icon: Award },
                { label: '24/7 Response', icon: Clock }
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <s.icon className="w-4 h-4 text-primary-300" />
                  <span className="text-[11.5px] font-black uppercase tracking-[0.2em] text-white/85">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 w-full max-w-[340px] mx-auto lg:max-w-[380px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.5 }} 
              className="relative"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-[#0f172a]/30 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] p-7 lg:p-9">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="w-5 h-5 text-primary-400" />
                    <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">Inquiry</h3>
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative group">
                    <User className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-primary-300 transition-colors" />
                    <input
                      required
                      type="text"
                      placeholder="PATIENT NAME"
                      className="w-full bg-transparent border-b border-white/10 py-3.5 pl-7 pr-2 text-[12.5px] font-black uppercase tracking-widest outline-none focus:border-primary-300 placeholder:text-white/20 text-white transition-all"
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-primary-300 transition-colors" />
                    <input
                      required
                      type="tel"
                      placeholder="MOBILE NUMBER"
                      className="w-full bg-transparent border-b border-white/10 py-3.5 pl-7 pr-2 text-[12.5px] font-black uppercase tracking-widest outline-none focus:border-primary-300 placeholder:text-white/20 text-white transition-all"
                    />
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full bg-transparent border-b ${isDropdownOpen ? 'border-primary-300' : 'border-white/10'} py-3.5 text-[12.5px] font-black uppercase tracking-widest outline-none transition-all flex items-center justify-between text-white/90`}
                    >
                      <span className={selectedSpecialty === 'Select Specialty' ? 'text-white/20' : 'text-white'}>{selectedSpecialty.toUpperCase()}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-white/20 transition-transform ${isDropdownOpen ? 'rotate-180 text-primary-300' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-full left-0 right-0 mb-4 bg-[#0f172a]/95 border border-white/10 z-30 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl"
                        >
                          <div className="max-h-[180px] overflow-y-auto custom-scrollbar p-2">
                            {specialties.map((s) => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => {
                                  setSelectedSpecialty(s);
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full text-left px-4 py-3 text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
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
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full h-12 font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 transition-all mt-4 rounded-xl shadow-2xl ${
                      isSubmitted ? 'bg-emerald-500 text-white' : 'bg-primary-600 hover:bg-primary-500 text-white hover:shadow-primary-500/25'
                    }`}
                  >
                    {isSubmitting ? <Activity className="w-4 h-4 animate-spin" /> : isSubmitted ? 'Request Sent' : <>Request Callback <Send className="w-3.5 h-3.5" /></>}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
