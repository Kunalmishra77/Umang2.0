import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Video, Pill, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';

const services = [
  { icon: Home, title: "Home Care", path: "/services/ipd-opd", desc: "Nursing, physiotherapy, and elderly care at your doorstep. Professional medical staff available round the clock.", img: ASSETS.NURSE_CARE, accent: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50' },
  { icon: Video, title: "Telemedicine", path: "/services/telemedicine", desc: "Connect with top specialists via secure video calls. Get expert medical advice from the comfort of your home.", img: ASSETS.TELEMEDICINE, accent: 'from-emerald-500 to-green-500', bg: 'bg-green-50' },
  { icon: Pill, title: "Pharmacy", path: "/services/buy-medicines", desc: "24/7 online pharmacy with genuine medicine delivery. Flat discounts on all prescriptions.", img: ASSETS.PHARMACY, accent: 'from-violet-500 to-purple-500', bg: 'bg-purple-50' },
  { icon: Activity, title: "Health Checkup", path: "/services/health-checkup", desc: "Comprehensive custom preventive packages with home collection, digital reports, and doctor consultations.", img: ASSETS.HEALTH_CHECKUP, accent: 'from-orange-500 to-amber-500', bg: 'bg-orange-50' }
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const goTo = useCallback((idx, dir = 1) => {
    setDirection(dir);
    setActive(idx);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((p) => (p + 1) % services.length);
    }, 5000);
  }, []);

  const next = () => goTo((active + 1) % services.length, 1);
  const prev = () => goTo((active - 1 + services.length) % services.length, -1);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((p) => (p + 1) % services.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const current = services[active];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-8 sm:mb-10 lg:mb-14 gap-4 sm:gap-6 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[11px] sm:text-[12px] mb-2 sm:mb-3 block">Comprehensive Care</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Beyond Clinical <span className="text-primary-600 normal">Excellence</span>
            </h2>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Widest range of supportive services for your comfort and convenience.
            </p>
          </motion.div>
          <Link to="/services" className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 hover:border-primary-600 text-brand-dark transition-all font-bold text-[11px] uppercase tracking-widest group h-11">
            All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── Desktop: Split layout with image + tabs ── */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          {/* Left — Image showcase */}
          <div className="col-span-7 relative h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img src={current.img} alt={current.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Number watermark */}
            <span className="absolute top-6 left-8 text-[100px] font-black text-white/[0.06] leading-none select-none font-serif z-10">
              0{active + 1}
            </span>

            {/* Bottom content on image */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${current.accent} text-white text-[10px] font-bold uppercase tracking-widest mb-3 shadow-lg`}>
                    <current.icon className="w-3.5 h-3.5" />
                    {current.title}
                  </div>
                  <p className="text-white/70 text-sm max-w-md leading-relaxed">{current.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="absolute top-6 right-6 z-10 flex gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 z-20">
              <motion.div
                className={`h-full bg-gradient-to-r ${current.accent}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: 'linear' }}
                key={`progress-${active}`}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>

          {/* Right — Service tabs */}
          <div className="col-span-5 flex flex-col gap-3">
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? 1 : -1)}
                onMouseEnter={() => goTo(i, i > active ? 1 : -1)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-5 group flex-1 ${
                  i === active
                    ? 'bg-primary-50 border-2 border-primary-200 shadow-md'
                    : 'bg-gray-50 border-2 border-transparent hover:bg-white hover:border-gray-100 hover:shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                  i === active
                    ? `bg-gradient-to-br ${service.accent} text-white shadow-lg`
                    : `${service.bg} text-gray-500`
                }`}>
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-bold text-[15px] transition-colors ${
                    i === active ? 'text-primary-700' : 'text-brand-dark'
                  }`}>{service.title}</h4>
                  <p className={`text-[12px] mt-0.5 transition-colors line-clamp-1 ${
                    i === active ? 'text-primary-500 font-medium' : 'text-gray-400'
                  }`}>{service.desc}</p>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${
                  i === active ? 'text-primary-500 translate-x-0 opacity-100' : 'opacity-0 -translate-x-2'
                }`} />
              </button>
            ))}

            <Link
              to={services[active].path}
              className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-dark text-white rounded-2xl font-bold text-[12px] uppercase tracking-wider hover:bg-primary-600 transition-all shadow-xl group"
            >
              Explore {services[active].title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── Mobile: Swipeable cards ── */}
        <div className="lg:hidden">
          <div className="relative h-[320px] xs:h-[360px] sm:h-[420px] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 mb-4 sm:mb-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <img src={current.img} alt={current.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${current.accent} text-white text-[9px] font-bold uppercase tracking-widest mb-3`}>
                    <current.icon className="w-3 h-3" />
                    {current.title}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{current.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">{current.desc}</p>
                  <Link to={current.path} className="inline-flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-wider">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 z-20">
              <motion.div
                className={`h-full bg-gradient-to-r ${current.accent}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: 'linear' }}
                key={`mob-progress-${active}`}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? 1 : -1)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-primary-500' : 'w-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="lg:hidden mt-8 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-brand-dark font-bold text-[11px] uppercase tracking-widest">
            All Services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
