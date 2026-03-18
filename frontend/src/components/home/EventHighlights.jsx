import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const events = [
  {
    title: 'Janta OPD',
    desc: 'Walk in for affordable specialist consultations. Our senior doctors across Cardiology, Orthopaedics, and General Medicine are available daily at just ₹50.',
    badge: '₹50 Only',
    status: 'Live Now',
    statusColor: 'bg-red-500',
    schedule: 'Daily 10 AM – 12 PM',
    location: 'Ground Floor, OPD Wing',
    image: ASSETS.EVENT_JANTA_OPD,
    gradient: 'from-blue-600 to-cyan-500',
    icon: '🩺',
    cta: { label: 'Book OPD Slot', to: '/doctors' },
  },
  {
    title: 'Diagnostic Services',
    desc: 'Complete blood tests, imaging, and pathology at the most competitive prices in Gurugram. NABL-certified lab with same-day digital reports.',
    badge: 'Lowest Prices',
    status: 'Ongoing',
    statusColor: 'bg-emerald-500',
    schedule: 'All Days Available',
    location: 'Basement, Diagnostic Wing',
    image: ASSETS.EVENT_DIAGNOSTICS,
    gradient: 'from-emerald-600 to-teal-500',
    icon: '🔬',
    cta: { label: 'View Tests', to: '/services/diagnostic-lab' },
  },
  {
    title: 'Full Body Checkup',
    desc: 'Preventive health screening with 60+ parameters including CBC, Lipid Profile, Thyroid, Liver & Kidney function — all reviewed by a senior physician.',
    badge: '₹500 Starting',
    status: 'Limited Slots',
    statusColor: 'bg-amber-500',
    schedule: 'Till 30 March 2026',
    location: 'Health Checkup Centre, 1st Floor',
    image: ASSETS.EVENT_BODY_CHECKUP,
    gradient: 'from-primary-600 to-blue-500',
    icon: '❤️‍🩹',
    cta: { label: 'Book Package', to: '/services/health-checkup' },
  },
  {
    title: 'Free Saturday Camp',
    desc: 'Walk-in community health camp every Saturday with free specialist consultations, basic diagnostics, BMI checks, and blood pressure screening.',
    badge: 'FREE Entry',
    status: 'This Week',
    statusColor: 'bg-orange-500',
    schedule: 'Every Saturday 1–5 PM',
    location: 'Main Reception Area',
    image: ASSETS.EVENT_SATURDAY_CAMP,
    gradient: 'from-amber-500 to-orange-500',
    icon: '🏥',
    cta: { label: 'Learn More', to: '/services' },
  },
];

const EventHighlights = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);

  const goTo = useCallback((idx) => {
    setActive(idx < 0 ? events.length - 1 : idx >= events.length ? 0 : idx);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pauseAutoplay = () => clearInterval(intervalRef.current);
  const resumeAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % events.length);
    }, 4000);
  };

  const event = events[active];
  const [imgFailed, setImgFailed] = useState(true);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Section header — compact */}
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">Currently Running</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-dark leading-tight">
              Hospital <span className="text-primary-600">Programs</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => { prev(); pauseAutoplay(); resumeAutoplay(); }}
              className="w-9 h-9 rounded-full border border-gray-200 hover:border-primary-500 hover:bg-primary-50 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => { next(); pauseAutoplay(); resumeAutoplay(); }}
              className="w-9 h-9 rounded-full border border-gray-200 hover:border-primary-500 hover:bg-primary-50 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Main showcase — single event at a time */}
        <div
          className="bg-white rounded-2xl lg:rounded-3xl shadow-[0_4px_40px_-12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left — Image */}
            <div className="lg:w-[45%] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[4/3] lg:aspect-auto lg:h-full relative"
                >
                  {!imgFailed ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${event.gradient} flex items-center justify-center min-h-[260px] lg:min-h-[340px]`}>
                      <span className="text-7xl lg:text-8xl opacity-20 select-none">{event.icon}</span>
                    </div>
                  )}
                  {/* Status badge on image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${event.statusColor} text-white text-[10px] font-black uppercase tracking-wider shadow-lg`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {event.status}
                    </span>
                  </div>
                  {/* Counter removed */}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — Content */}
            <div className="lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Price badge */}
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-primary-50 border border-primary-100 text-primary-700 text-[12px] font-bold mb-4">
                    {event.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-3 leading-tight">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-6 max-w-lg">
                    {event.desc}
                  </p>

                  {/* Meta info */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-7">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span className="text-[13px] font-medium text-gray-600">{event.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4 text-primary-500" />
                      <span className="text-[13px] font-medium text-gray-600">{event.location}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3">
                    <Link
                      to={event.cta.to}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-[13px] transition-all hover:-translate-y-0.5 active:scale-[0.97] shadow-lg shadow-primary-600/20"
                    >
                      {event.cta.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`tel:+918588072727`}
                      className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 hover:border-primary-300 rounded-full font-bold text-[13px] text-gray-600 hover:text-primary-600 transition-all"
                    >
                      Call to Enquire
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots removed */}
      </div>
    </section>
  );
};

export default EventHighlights;
