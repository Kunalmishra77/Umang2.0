import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Phone, ArrowUpRight, User, Send, ChevronDown, Activity, HeartPulse, Clock, Globe, Award, ShieldCheck } from 'lucide-react';
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

const HUD_CORNER = "w-3 h-3 border-primary-500/20";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Select Specialty");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(smoothX, [-500, 500], [10, -10]);
  const bgY = useTransform(smoothY, [-500, 500], [10, -10]);

  const specialties = [
    "Cardiac Sciences", "Neuro Sciences", "Orthopaedics", 
    "Gastroenterology", "General Surgery", "Urology", "Pulmonology"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section 
      className="relative min-h-[90svh] lg:h-screen lg:min-h-[850px] w-full overflow-hidden bg-[#020617] text-white flex items-center py-12 lg:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* 1. LIGHTER BACKGROUND ENGINE */}
      <motion.div style={{ x: bgX, y: bgY, scale: 1.05 }} className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={HERO_IMAGES[index]} 
              className="w-full h-full object-cover opacity-[0.6] lg:opacity-[0.55] brightness-[1.1] saturate-[1.1]"
              alt=""
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Lighter dynamic glows */}
        <div className="absolute top-1/4 -left-20 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-primary-500/10 rounded-full blur-[80px] lg:blur-[120px]" />
      </motion.div>

      {/* LIGHTER GRADIENTS - Now using more transparency */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#020617]/60 via-[#020617]/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent z-10" />

      {/* 2. CONTENT LAYER */}
      <div className="container-custom relative z-30 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 xl:col-span-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                <Activity className="w-3 h-3 text-primary-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Advanced Superspeciality Care</span>
              </div>
            </motion.div>

            <h1 className="font-sans font-black tracking-tighter leading-[1.1] lg:leading-[0.9] mb-6"
                style={{ fontSize: 'clamp(42px, 9vw, 92px)' }}>
              Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-200 to-white italic">
                Healthcare.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg lg:text-2xl text-white/80 max-w-[45ch] mb-10 font-medium leading-relaxed tracking-tight mx-auto lg:mx-0 drop-shadow-lg"
            >
              A 150-bed beacon of medical excellence in Gurugram, <br className="hidden lg:block" />
              where advanced tech meets human compassion.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <motion.a 
                href="/doctors"
                whileHover={{ scale: 1.02 }}
                className="h-16 px-10 flex items-center justify-center bg-white text-brand-dark rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl w-full sm:w-auto"
              >
                Book Appointment <ArrowUpRight className="w-4 h-4 ml-3" />
              </motion.a>

              <motion.a 
                href="tel:+918929733551"
                className="h-16 px-10 flex items-center justify-center rounded-2xl border-2 border-white/30 backdrop-blur-md hover:bg-white/10 transition-all text-xs font-black uppercase tracking-widest w-full sm:w-auto"
              >
                Emergency Support
              </motion.a>
            </div>

            {/* Feature Badges - Always visible, better layout */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 border-t border-white/10 pt-10">
               {[
                 { label: "NABH Accredited", icon: ShieldCheck },
                 { label: "150+ Smart Beds", icon: Award },
                 { label: "24/7 Response", icon: Clock }
               ].map((s, i) => (
                 <div key={i} className="flex items-center gap-2 group">
                    <s.icon className="w-5 h-5 text-primary-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">{s.label}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* FORM: Hidden on small screens, shown only on Desktop (lg and up) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className={`absolute -top-1 -left-1 border-t border-l ${HUD_CORNER}`} />
              <div className={`absolute -top-1 -right-1 border-t border-r ${HUD_CORNER}`} />
              <div className={`absolute -bottom-1 -left-1 border-b border-l ${HUD_CORNER}`} />
              <div className={`absolute -bottom-1 -right-1 border-b border-r ${HUD_CORNER}`} />

              <div className="bg-white/[0.03] border border-white/10 backdrop-blur-3xl p-10 rounded-3xl relative overflow-hidden transition-all duration-500 group-hover:bg-white/[0.05]">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <HeartPulse className="w-6 h-6 text-primary-400" />
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter">Inquiry</h3>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-primary-500/30 to-transparent ml-6" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group/input">
                    <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within/input:text-primary-400 transition-colors" />
                    <input required type="text" placeholder="PATIENT NAME" className="w-full bg-transparent border-b border-white/10 py-4 pl-8 pr-4 text-[11px] font-bold tracking-widest outline-none focus:border-primary-500 transition-all placeholder:text-white/10 uppercase text-white" />
                  </div>

                  <div className="relative group/input">
                    <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within/input:text-primary-400 transition-colors" />
                    <input required type="tel" placeholder="MOBILE NUMBER" className="w-full bg-transparent border-b border-white/10 py-4 pl-8 pr-4 text-[11px] font-bold tracking-widest outline-none focus:border-primary-500 transition-all placeholder:text-white/10 uppercase text-white" />
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full bg-transparent border-b ${isDropdownOpen ? 'border-primary-500' : 'border-white/10'} py-4 pl-0 text-[11px] font-bold tracking-widest outline-none transition-all flex items-center justify-between uppercase text-white`}
                    >
                      <span className={selectedSpecialty === "Select Specialty" ? "text-white/20" : "text-white"}>{selectedSpecialty}</span>
                      <ChevronDown className={`w-4 h-4 text-white/20 transition-transform ${isDropdownOpen ? 'rotate-180 text-primary-400' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-[#020617]/95 border border-white/10 z-50 backdrop-blur-3xl p-1 shadow-2xl rounded-xl"
                        >
                          <div className="max-h-[180px] overflow-y-auto no-scrollbar">
                            {specialties.map((s) => (
                              <div key={s} onClick={() => { setSelectedSpecialty(s); setIsDropdownOpen(false); }} className="px-5 py-3.5 text-[10px] font-bold tracking-widest text-white/40 hover:text-white hover:bg-white/5 transition-all cursor-pointer uppercase">{s}</div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button 
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full h-16 font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 transition-all mt-6 rounded-xl ${
                      isSubmitted ? 'bg-emerald-500 text-white' : 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg'
                    }`}
                  >
                    {isSubmitting ? <Activity className="w-5 h-5 animate-spin" /> : isSubmitted ? "SUCCESS" : <>REQUEST CALLBACK <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* FOOTER: Fixed for better contrast and spacing */}
      <div className="absolute bottom-6 left-0 w-full px-6 lg:px-12 flex justify-between items-center z-40">
        <div className="flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className="p-1 transition-all">
              <div className={`h-[3px] rounded-full transition-all duration-700 ${index === i ? 'w-10 bg-primary-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]' : 'w-3 bg-white/20'}`} />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
          <Globe className="w-3 h-3" /> <span className="hidden sm:inline">Gurugram Sector 46</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
