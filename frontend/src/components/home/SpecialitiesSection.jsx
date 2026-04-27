import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Brain, Bone, Activity, Scissors, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const departments = [
  {
    id: 'cardiac', name: 'Cardiac Sciences', shortName: 'Cardiac', icon: Heart,
    tagline: 'Comprehensive heart care with 24/7 Cath Lab, bypass surgery, and interventional cardiology.',
    stat: '5000+', statLabel: 'Procedures',
    img: ASSETS.CARDIAC, video: ASSETS.CARDIAC_VIDEO,
    accent: 'from-rose-500 to-red-600',
  },
  {
    id: 'neuro', name: 'Neuro Sciences', shortName: 'Neuro', icon: Brain,
    tagline: 'Advanced brain & spine surgeries including micro-neurosurgery and stroke management.',
    stat: '2000+', statLabel: 'Surgeries',
    img: ASSETS.NEURO, video: ASSETS.NEURO_VIDEO,
    accent: 'from-violet-500 to-purple-600',
  },
  {
    id: 'ortho', name: 'Orthopaedics', shortName: 'Ortho', icon: Bone,
    tagline: 'Total joint replacements, arthroscopy, sports medicine, and navigation-guided surgery.',
    stat: '3000+', statLabel: 'Replacements',
    img: ASSETS.ORTHO, video: ASSETS.ORTHO_VIDEO,
    accent: 'from-amber-500 to-orange-600',
  },
  {
    id: 'gastro', name: 'Gastroenterology', shortName: 'Gastro', icon: Activity,
    tagline: 'Advanced endoscopy, ERCP, liver transplant workup, and comprehensive GI care.',
    stat: '1500+', statLabel: 'Endoscopies',
    img: ASSETS.GASTRO, video: ASSETS.GASTRO_VIDEO,
    accent: 'from-emerald-500 to-green-600',
  },
  {
    id: 'pulmonology', name: 'Pulmonology', shortName: 'Pulmo', icon: Wind,
    tagline: 'Respiratory critical care, sleep medicine, bronchoscopy, and ventilator management.',
    stat: '1000+', statLabel: 'Treated',
    img: ASSETS.PULMONOLOGY, video: ASSETS.PULMONOLOGY_VIDEO,
    accent: 'from-cyan-500 to-teal-600',
  },
  {
    id: 'surgery', name: 'General Surgery', shortName: 'Surgery', icon: Scissors,
    tagline: 'Minimally invasive laparoscopic procedures, bariatric surgery, and hernia repair.',
    stat: '4000+', statLabel: 'Surgeries',
    img: ASSETS.OT, video: ASSETS.SURGERY_VIDEO,
    accent: 'from-blue-500 to-indigo-600',
  },
];

/* ═══════════════════════════════════════
   DESKTOP: Expanding Strips
═══════════════════════════════════════ */
const ExpandingStrips = () => {
  const [active, setActive] = useState(0);
  const videoRefs = useRef({});
  const timerRef = useRef(null);

  const activate = (idx) => {
    setActive(idx);
    // Play the newly active video
    Object.entries(videoRefs.current).forEach(([key, ref]) => {
      if (ref) {
        if (parseInt(key) === idx) {
          ref.currentTime = 0;
          ref.play().catch(() => {});
        } else {
          ref.pause();
        }
      }
    });
    // Reset auto-rotate
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % departments.length);
    }, 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % departments.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Play correct video when active changes via autoplay
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([key, ref]) => {
      if (ref) {
        if (parseInt(key) === active) {
          ref.currentTime = 0;
          ref.play().catch(() => {});
        } else {
          ref.pause();
        }
      }
    });
  }, [active]);

  return (
    <div className="hidden lg:flex h-[540px] rounded-[2rem] overflow-hidden border border-white/[0.06] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
      {departments.map((dept, i) => {
        const isActive = i === active;
        return (
          <motion.div
            key={dept.id}
            className="relative h-full cursor-pointer overflow-hidden"
            animate={{ flex: isActive ? 5 : 0.6 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => activate(i)}
            onMouseEnter={() => activate(i)}
          >
            {/* Background image (always visible) */}
            <img
              src={dept.img}
              alt={dept.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Video (only for active) */}
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              muted
              loop
              playsInline
              preload="none"
              poster={dept.img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={dept.video} type="video/mp4" />
            </video>

            {/* Dark overlay — heavier on collapsed strips */}
            <div className={`absolute inset-0 transition-all duration-600 ${
              isActive
                ? 'bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-[#020617]/20'
                : 'bg-[#020617]/80'
            }`} />

            {/* ── Collapsed state: vertical text ── */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
              isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${dept.accent} flex items-center justify-center mb-4 shadow-lg`}>
                <dept.icon className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-white/70 font-bold text-[13px] uppercase tracking-[0.2em]"
                style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
              >
                {dept.shortName}
              </span>
            </div>

            {/* ── Expanded state: full content ── */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute inset-0 flex flex-col justify-end p-10 xl:p-12"
                >
                  {/* Number indicator */}
                  <span className="absolute top-8 left-10 text-[120px] font-black text-white/[0.03] leading-none select-none font-serif">
                    0{i + 1}
                  </span>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${dept.accent} text-white text-[10px] font-bold uppercase tracking-widest mb-5 shadow-lg`}>
                      <dept.icon className="w-3.5 h-3.5" />
                      {dept.name}
                    </div>

                    <h3 className="text-3xl xl:text-4xl font-serif font-bold text-white mb-3 leading-tight">
                      {dept.name}
                    </h3>

                    <p className="text-white/50 text-sm xl:text-base leading-relaxed max-w-lg mb-8">
                      {dept.tagline}
                    </p>

                    <div className="flex items-center gap-8">
                      <Link
                        to={`/specialities/${dept.id}`}
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#020617] rounded-full font-bold text-[12px] uppercase tracking-wider hover:-translate-y-0.5 transition-all shadow-xl"
                      >
                        Explore <ArrowRight className="w-4 h-4" />
                      </Link>

                    </div>
                  </div>

                  {/* Progress bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${dept.accent}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: 'linear' }}
                      style={{ transformOrigin: 'left' }}
                      key={`progress-${active}`}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════════════
   MOBILE: Stacked horizontal scroll cards
═══════════════════════════════════════ */
const MobileCards = () => {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  return (
    <div className="lg:hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
        onScroll={(e) => {
          const el = e.target;
          const idx = Math.round(el.scrollLeft / (el.offsetWidth * 0.85));
          setActive(Math.min(idx, departments.length - 1));
        }}
      >
        {departments.map((dept, i) => (
          <Link
            key={dept.id}
            to={`/specialities/${dept.id}`}
            className="shrink-0 w-[85vw] sm:w-[70vw] snap-start relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] group block"
          >
            <img src={dept.img} alt={dept.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/40 to-transparent" />

            {/* Number watermark */}
            <span className="absolute top-4 right-5 text-[80px] font-black text-white/[0.04] leading-none select-none font-serif">
              0{i + 1}
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${dept.accent} text-white text-[9px] font-bold uppercase tracking-widest mb-3`}>
                <dept.icon className="w-3 h-3" />
                {dept.shortName}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{dept.name}</h3>
              <p className="text-white/40 text-[13px] leading-relaxed mb-5 line-clamp-2">{dept.tagline}</p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-wider">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${dept.accent}`} />
          </Link>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {departments.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-primary-400' : 'w-1.5 bg-white/15'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════ */
const SpecialitiesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/60 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 lg:mb-14 gap-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[11px] lg:text-[12px] mb-3 block">
              Clinical Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Centres of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500">
                Excellence
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl text-base lg:text-lg font-light leading-relaxed mx-auto lg:mx-0 mt-3">
              Hover to explore our world-class departments.
            </p>
          </motion.div>
          <Link
            to="/specialities"
            className="hidden lg:flex items-center gap-3 px-7 py-3.5 rounded-full border border-gray-300 hover:border-primary-500 text-brand-dark hover:text-primary-600 transition-all font-bold text-[11px] uppercase tracking-widest group shrink-0 hover:bg-primary-50"
          >
            All Departments <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop */}
        <ExpandingStrips />

        {/* Mobile */}
        <MobileCards />

        <div className="mt-8 lg:hidden text-center">
          <Link to="/specialities" className="inline-flex items-center gap-2 text-primary-600 font-bold text-[11px] uppercase tracking-widest">
            All Departments <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
