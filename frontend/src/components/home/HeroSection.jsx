import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Phone, ArrowRight, User, Send, ChevronDown, HeartPulse, ShieldCheck, Award, Clock, Loader2, MessageSquare, Stethoscope, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import gsap from 'gsap';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';
import { useLeadForm } from '../../hooks/useLeadForm';

/* ═══════════════════════════════════════════════════════════
   SLIDE DATA
═══════════════════════════════════════════════════════════ */
const heroSlides = [
  {
    img: ASSETS.RECEPTION,
    tag: 'Welcome to Umang',
    heading: ['Your trusted', 'health partner'],
    desc: 'A 150-bed NABH-accredited superspeciality hospital in Gurugram — where every patient is family.',
    cta: { label: 'Book Appointment', to: '/doctors' },
    accent: '#1E97B2',
  },
  {
    img: ASSETS.OT,
    tag: 'Modular Operation Theatres',
    heading: ['World-class', 'surgical care'],
    desc: 'HEPA-filtered laminar flow OTs with zero-infection protocols for safe, precise surgeries.',
    cta: { label: 'Our Specialities', to: '/specialities' },
    accent: '#FFA600',
  },
  {
    img: ASSETS.CATH_LAB,
    tag: 'Cardiac Cath Lab',
    heading: ['Advanced heart', 'interventions'],
    desc: 'State-of-the-art catheterization lab for angiography, angioplasty, and life-saving cardiac procedures.',
    cta: { label: 'Cardiac Sciences', to: '/specialities/cardiac-sciences' },
    accent: '#1E97B2',
  },
  {
    img: ASSETS.EMERGENCY_DEPT,
    tag: '24/7 Emergency',
    heading: ['Every second', 'matters here'],
    desc: 'Round-the-clock emergency department with rapid response team and advanced trauma care.',
    cta: { label: 'Emergency Services', to: '/services/emergency' },
    accent: '#FFA600',
  },
];

const specialties = [
  'Cardiac Sciences', 'Neuro Sciences', 'Orthopaedics',
  'Gastroenterology', 'General Surgery', 'Urology', 'Pulmonology',
];

/* ═══════════════════════════════════════════════════════════
   INTERACTIVE CURSOR SPOTLIGHT (Desktop only)
═══════════════════════════════════════════════════════════ */
const CursorSpotlight = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-[5] hidden lg:block"
      style={{
        x: useTransform(springX, (v) => v - 300),
        y: useTransform(springY, (v) => v - 300),
        background: 'radial-gradient(circle, rgba(30,151,178,0.06) 0%, transparent 70%)',
      }}
    />
  );
};

/* ═══════════════════════════════════════════════════════════
   GSAP SPLIT-TEXT ANIMATION — Letter-by-letter reveal
═══════════════════════════════════════════════════════════ */
const SplitTextLine = ({ text, delay = 0, isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;
    const chars = containerRef.current.querySelectorAll('.split-char');
    gsap.fromTo(chars,
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0, opacity: 1, rotateX: 0,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.025,
        delay,
      }
    );
    return () => gsap.killTweensOf(chars);
  }, [isActive, delay]);

  return (
    <span ref={containerRef} className="inline-block overflow-hidden">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="split-char inline-block will-change-transform"
          style={{ opacity: isActive ? undefined : 0 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

/* FloatingStatCard and ProgressRing removed */

/* ═══════════════════════════════════════════════════════════
   AUTOPLAY PROGRESS HOOK
═══════════════════════════════════════════════════════════ */
const useAutoplayProgress = (duration = 6000) => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const reset = useCallback(() => {
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  useEffect(() => {
    const tick = (now) => {
      if (!startRef.current) startRef.current = now;
      const p = Math.min((now - startRef.current) / duration, 1);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [duration]);

  return { progress, reset };
};

/* ═══════════════════════════════════════════════════════════
   GLASSMORPHISM CONSULTATION FORM
═══════════════════════════════════════════════════════════ */
const ConsultationForm = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { submitForm, loading, success: isSubmitted, reset } = useLeadForm('callback');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const message = e.target.elements.message?.value || '';
    await submitForm({
      name, phone,
      speciality: selectedSpecialty || '',
      message, source_page: 'Home Hero',
    });
    if (!loading) { e.target.reset(); setSelectedSpecialty(''); }
  };

  const inputCls = "w-full bg-white/[0.08] border border-white/[0.18] rounded-xl py-3 pl-10 pr-4 text-[13px] font-medium outline-none focus:border-primary-400/60 focus:bg-white/[0.14] placeholder:text-white/50 text-white transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="rounded-[1.75rem] border border-white/[0.20] bg-white/[0.12] backdrop-blur-2xl shadow-[0_32px_80px_-16px_rgba(0,0,0,0.5)] p-6 xl:p-7 relative overflow-visible">
        {/* Animated glow orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500 blur-[80px] rounded-full pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-500 blur-[60px] rounded-full pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/[0.12]">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-600/30">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-black text-white uppercase tracking-[0.15em]">Book Consultation</h3>
            <p className="text-[10px] text-primary-300/90 font-semibold mt-0.5">We respond within 15 minutes</p>
          </div>
        </div>

        {isSubmitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
              className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 border border-green-500/20">
              <ShieldCheck className="w-7 h-7 text-green-400" />
            </motion.div>
            <h4 className="text-white font-bold text-base mb-2">Request Received!</h4>
            <p className="text-white/40 text-[12px] mb-5 leading-relaxed">Our medical coordinator will<br />call you within 15 minutes.</p>
            <button onClick={reset} className="text-primary-400 text-[11px] font-bold uppercase tracking-widest hover:text-primary-300 transition-colors">Submit Another</button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative group">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-primary-400 transition-colors" />
              <input required name="name" type="text" placeholder="Full Name" className={inputCls} />
            </div>
            <div className="relative group">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-primary-400 transition-colors" />
              <input required name="phone" type="tel" placeholder="Phone Number" className={inputCls} />
            </div>
            <div className="relative">
              <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full bg-white/[0.08] border ${isDropdownOpen ? 'border-primary-400/60 bg-white/[0.14]' : 'border-white/[0.18]'} rounded-xl py-3 px-4 text-[13px] font-medium outline-none transition-all flex items-center justify-between`}>
                <span className={selectedSpecialty ? 'text-white' : 'text-white/45'}>{selectedSpecialty || 'Select Specialty'}</span>
                <ChevronDown className={`w-4 h-4 text-white/45 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-primary-400' : ''}`} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0c1929]/98 border border-white/10 z-[100] backdrop-blur-2xl rounded-xl overflow-hidden shadow-2xl max-h-48 overflow-y-auto custom-scrollbar">
                    <div className="p-1.5">
                      {specialties.map((s) => (
                        <button key={s} type="button"
                          onClick={() => { setSelectedSpecialty(s); setIsDropdownOpen(false); }}
                          className={`w-full text-left px-3.5 py-2.5 text-[12px] font-semibold rounded-lg transition-all ${selectedSpecialty === s ? 'bg-primary-600 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative group">
              <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40 group-focus-within:text-primary-400 transition-colors" />
              <textarea name="message" placeholder="Brief message (optional)" rows={2}
                className="w-full bg-white/[0.08] border border-white/[0.18] rounded-xl py-3 pl-10 pr-4 text-[13px] font-medium outline-none focus:border-primary-400/60 focus:bg-white/[0.14] placeholder:text-white/50 text-white transition-all resize-none" />
            </div>
            <button disabled={loading}
              className="w-full h-12 font-bold uppercase tracking-[0.12em] text-[12px] flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white disabled:opacity-50 active:scale-[0.97] transition-all shadow-lg shadow-primary-600/25 mt-1">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Book Now <Send className="w-3.5 h-3.5" /></>}
            </button>
            <p className="text-center text-[10px] text-white/40 font-medium pt-1">
              <ShieldCheck className="w-3 h-3 inline mr-1 -mt-px" />No spam. Your data is secure.
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   SLIDE CONTENT — With GSAP split-text + stagger animations
═══════════════════════════════════════════════════════════ */
const SlideContent = ({ slide, isActive, index }) => {
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;
    // Animate description
    if (descRef.current) {
      gsap.fromTo(descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.6, ease: 'power3.out' }
      );
    }
    // Animate CTA
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.85, ease: 'power3.out' }
      );
    }
  }, [isActive]);

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={slide.tag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-10 flex flex-col justify-end"
        >
          {/* Multi-layer cinematic overlays — lighter to show background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-[#020617]/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/65 via-transparent to-[#020617]/15" />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 70% 40%, ${slide.accent}08 0%, transparent 50%)` }} />
          {/* Film grain texture */}
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 pb-28 sm:pb-32 lg:pb-20">
            <div className="lg:max-w-[52%]">
              {/* Eyebrow tag — animated line + pill */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="h-[2px] rounded-full"
                  style={{ background: `linear-gradient(90deg, ${slide.accent}, transparent)` }}
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: slide.accent }}>
                  {slide.tag}
                </span>
              </motion.div>

              {/* Headline — GSAP Split-Text letter reveal */}
              <h1
                className="font-sans font-black text-white leading-[0.92] mb-7 tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', perspective: '600px' }}
              >
                {slide.heading.map((line, lineIdx) => (
                  <span key={lineIdx} className="block">
                    <SplitTextLine text={line} delay={0.15 + lineIdx * 0.12} isActive={isActive} />
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p ref={descRef} className="text-white/65 text-[15px] lg:text-lg max-w-[46ch] leading-relaxed mb-8" style={{ opacity: 0 }}>
                {slide.desc}
              </p>

              {/* CTA Buttons */}
              <div ref={ctaRef} className="hidden lg:flex items-center gap-4" style={{ opacity: 0 }}>
                <Link to={slide.cta.to}
                  className="group h-[52px] px-8 flex items-center justify-center text-white rounded-full font-bold uppercase tracking-[0.1em] text-[12px] shadow-lg hover:-translate-y-0.5 active:scale-[0.97] transition-all relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}cc)`, boxShadow: `0 12px 30px -8px ${slide.accent}40` }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {slide.cta.label} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>
                <a href={`tel:${siteConfig.contacts.emergency.replace(/\s/g, '')}`}
                  className="group h-[52px] px-7 flex items-center justify-center rounded-full border border-white/[0.1] hover:bg-white/[0.06] hover:border-white/20 transition-all text-[12px] font-bold uppercase tracking-[0.1em] text-white/70 active:scale-[0.97] backdrop-blur-sm">
                  <Phone className="w-3.5 h-3.5 mr-2 text-red-400" /> Emergency
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* VerticalSlideNav removed */

/* ═══════════════════════════════════════════════════════════
   MAIN HERO SECTION
═══════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const { progress, reset: resetProgress } = useAutoplayProgress(4000);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
    resetProgress();
  }, [resetProgress]);

  return (
    <section
      className="relative w-full bg-[#020617] text-white overflow-hidden"
      style={{ height: 'calc(100svh - var(--header-h))', minHeight: '600px', maxHeight: '960px' }}
    >
      {/* Cursor-following spotlight */}
      <CursorSpotlight />

      {/* ── Background Swiper — Fade effect for cinematic transitions ── */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          onSlideChange={handleSlideChange}
          onSwiper={(s) => { swiperRef.current = s; }}
          className="w-full h-full"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={slide.tag} className="relative">
              {/* Image with Ken Burns + parallax depth */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={slide.img}
                  alt={slide.heading.join(' ')}
                  className="w-full h-full object-cover will-change-transform"
                  initial={{ scale: 1.15 }}
                  animate={activeIndex === i
                    ? { scale: 1, x: i % 2 === 0 ? [0, -10] : [0, 10] }
                    : { scale: 1.15 }
                  }
                  transition={{ scale: { duration: 7, ease: 'linear' }, x: { duration: 7, ease: 'linear' } }}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  style={{ filter: 'brightness(0.72)' }}
                />
              </div>
              <SlideContent slide={slide} isActive={activeIndex === i} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stat cards and vertical nav removed per design feedback */}

      {/* Hospital badge removed per design feedback */}

      {/* ── Right: Consultation Form (Desktop) ── */}
      <div className="hidden lg:flex absolute top-0 right-0 bottom-0 z-20 items-center pr-6 xl:pr-10 pointer-events-none">
        <div className="pointer-events-auto w-[320px] xl:w-[340px]">
          <ConsultationForm />
        </div>
      </div>

      {/* ── Bottom: Trust Bar + Progress (Desktop) ── */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-20">
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04]">
          <motion.div className="h-full bg-gradient-to-r from-primary-400 to-accent-400 origin-left" style={{ scaleX: progress }} />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-10 pb-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center gap-8"
          >
            {[
              { label: 'NABH Accredited', icon: ShieldCheck },
              { label: `${siteConfig.stats.specialties} Specialties`, icon: Award },
              { label: `${siteConfig.timings.emergency} Emergency`, icon: Clock },
              { label: `${siteConfig.stats.superspecialists} Specialists`, icon: HeartPulse },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-px h-4 bg-white/[0.08]" />}
                <div className="flex items-center gap-2.5">
                  <s.icon className="w-4.5 h-4.5 text-primary-400/50" />
                  <span className="text-sm font-semibold text-white/40 tracking-wide">{s.label}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Mobile: CTAs + Trust ── */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.04]">
          <motion.div className="h-full bg-primary-400 origin-left" style={{ scaleX: progress }} />
        </div>
        <div className="px-5 pb-5 pt-4 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-transparent">
          <div className="flex gap-3 mb-3">
            <Link to="/doctors"
              className="h-12 flex-1 flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-bold uppercase tracking-[0.08em] text-[12px] shadow-lg active:scale-[0.97] transition-all">
              Book Appointment <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <a href={`tel:${siteConfig.contacts.emergency.replace(/\s/g, '')}`}
              className="h-12 px-5 flex items-center justify-center rounded-full border border-white/[0.12] text-white text-[12px] font-bold uppercase tracking-[0.08em] active:scale-[0.97] transition-all">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-red-400" /> SOS
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            {[
              { label: 'NABH', icon: ShieldCheck },
              { label: `${siteConfig.stats.specialties} Depts`, icon: Award },
              { label: '24/7', icon: Clock },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-px h-2.5 bg-white/[0.06]" />}
                <div className="flex items-center gap-1.5">
                  <s.icon className="w-3 h-3 text-primary-400/40" />
                  <span className="text-[10px] font-semibold text-white/25">{s.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Particles removed per design feedback */}
    </section>
  );
};

export default HeroSection;
