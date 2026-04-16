import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent, useInView } from 'framer-motion';
import {
  ChevronRight, Target, Eye, Quote, Shield, Heart, Users,
  Award, ArrowRight, Activity, Phone, Calendar, Star, Microscope, Zap, CheckCircle,
  ChevronDown, Globe, Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';
import SeoHead from '../../components/common/SeoHead';
import CountUp from '../../components/common/CountUp';

/* ═══════════════════════════════════════
   ANIMATED COUNTER HOOK
═══════════════════════════════════════ */
const AnimatedNumber = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {isInView ? <CountUp to={parseInt(value)} /> : '0'}{suffix}
    </span>
  );
};

/* ═══════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════ */
const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -120]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1.1, 1.3]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div ref={containerRef} className="bg-white overflow-hidden relative font-sans">
      <SeoHead
        title="Our Story & Legacy"
        description={`Discover the legacy of ${siteConfig.name}. 15+ years of clinical excellence, 150-bedded infrastructure, and compassionate care in Gurugram.`}
        canonical="/about"
      />

      {/* ═══ SECTION 1: CINEMATIC HERO — Parallax zoom ═══ */}
      <section className="relative min-h-[500px] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-brand-dark">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
          <img src={ASSETS.ABOUT_BANNER} alt="Umang Hospital Legacy" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/80" />
        </motion.div>

        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-[11px] lg:text-[13px] font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" /> Established 2021
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 tracking-tighter leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              Legacy of <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-200 to-primary-400 normal"
              >Excellence.</motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-white max-w-3xl mx-auto mb-8 font-medium leading-relaxed px-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
            >
              More than a hospital, {siteConfig.shortName} is a sanctuary of healing where medical science meets deep human compassion.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => document.getElementById('purpose').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-white text-brand-dark rounded-full font-bold text-[12px] uppercase tracking-widest hover:bg-primary-50 transition-all shadow-2xl">
                Explore Our Story
              </button>
              <Link to="/contact" className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[12px] uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-all text-center">
                Visit Hospital
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 2: PURPOSE — Animated tab switcher ═══ */}
      <PurposeSection fadeIn={fadeIn} />

      {/* ═══ SECTION 3: LEADERSHIP — Typewriter quote reveal ═══ */}
      <LeadershipSection />

      {/* ═══ SECTION 4: PATIENT CARE — Stepped reveal ═══ */}
      <PatientCareSection />

      {/* ═══ SECTION 5: QUALITY & SAFETY — Accordion expanding panels ═══ */}
      <QualitySection />

      {/* ═══ SECTION 6: CORE VALUES — Floating hover-glow cards ═══ */}
      <CoreValuesSection />

      {/* ═══ SECTION 7: CSR COMMUNITY — Parallax depth ═══ */}
      <CSRSection />

      {/* ═══ SECTION 8: CLINICAL EXCELLENCE — Staggered mosaic ═══ */}
      <ClinicalExcellenceSection fadeIn={fadeIn} />

      {/* ═══ SECTION 9: TIMELINE — Scroll-drawing progress line ═══ */}
      <TimelineSection />

      {/* ═══ SECTION 10: INFRASTRUCTURE — Hover-zoom bento ═══ */}
      <InfrastructureSection />

      {/* ═══ SECTION 11: GLOBAL OUTREACH — Staggered counter reveal ═══ */}
      <GlobalOutreachSection />

      {/* ═══ SECTION 12: FINAL CTA — Animated gradient orbs ═══ */}
      <FinalCTASection fadeIn={fadeIn} />
    </div>
  );
};


/* ═══════════════════════════════════════
   PURPOSE SECTION — Tab switcher
═══════════════════════════════════════ */
const PurposeSection = ({ fadeIn }) => {
  const [activeTab, setActiveTab] = useState('vision');
  const tabs = {
    vision: { icon: Eye, title: 'Our Vision', color: 'primary', text: 'Patient centric affordable and advance clinical care.' },
    mission: { icon: Target, title: 'Our Mission', color: 'cyan', text: 'To provide advanced, ethical, and compassionate healthcare that is accessible and affordable, with personalized treatment and excellent outcomes.' },
  };

  return (
    <section id="purpose" className="py-16 lg:py-24 bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-7 relative z-10">
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight mb-4">
              Guided by <span className="text-primary-600">Vision,</span> <br />Driven by Mission.
            </h2>
            <p className="text-gray-600 text-sm lg:text-base font-light leading-relaxed mb-10 max-w-[65ch]">
              We are a {siteConfig.stats.beds}-bedded super speciality hospital in Gurugram, where care and expertise unite. {siteConfig.marketingMessage}. Trust {siteConfig.shortName} for comprehensive care that makes a difference.
              <br /><br />
              It is a modern {siteConfig.stats.beds}-bedded healthcare facility with world-class Intensive Care Units, including {siteConfig.stats.icuBedsMarketing} ICU beds ({siteConfig.stats.icuBreakdown.general} General, {siteConfig.stats.icuBreakdown.sicu} SICU and {siteConfig.stats.icuBreakdown.ccu} CCU). The hospital features {siteConfig.infrastructure.ots} modular operation theaters, an advanced critical care unit, a state-of-the-art CT scan, and cutting-edge Cath Labs.
            </p>

            {/* Tab switcher */}
            <div className="flex gap-3 mb-6">
              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-200'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className={`p-7 rounded-[1.5rem] border-2 transition-colors ${
                  activeTab === 'vision' ? 'bg-primary-50/50 border-primary-100' : 'bg-cyan-50/50 border-cyan-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white mb-3 shadow-lg shrink-0 ${
                    activeTab === 'vision' ? 'bg-primary-600 shadow-primary-200' : 'bg-cyan-500 shadow-cyan-200'
                  }`}>
                    {activeTab === 'vision' ? <Eye className="w-5 h-5" /> : <Target className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${activeTab === 'vision' ? 'text-primary-700' : 'text-cyan-700'}`}>
                      {tabs[activeTab].title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{tabs[activeTab].text}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-[480px] w-full rounded-[2rem] shadow-2xl z-0"
          >
            <motion.div
              animate={{ rotate: activeTab === 'vision' ? 2 : -2 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-primary-600 rounded-[2rem] transform translate-x-3 translate-y-3"
            />
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
              <img src={ASSETS.ABOUT_MAIN} alt="Umang Hospital Facility" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-2xl z-20 max-w-[200px] lg:max-w-[240px] border border-gray-100">
              <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-primary-200 mb-3 fill-current" />
              <p className="text-brand-dark font-bold normal leading-relaxed text-[11px] lg:text-[13px]">"We treat every patient like they are our only patient."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   LEADERSHIP — Scroll-triggered quote reveal
═══════════════════════════════════════ */
const LeadershipSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'center center'] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[150px]" />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div style={{ scale: imageScale, opacity: imageOpacity }} className="lg:col-span-5">
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl aspect-[4/5]">
              <img src={ASSETS.DIRECTOR} alt="Capt. Umang Bhardwaj" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-8"
              >
                <h4 className="text-2xl font-bold text-white">Capt. Umang Bhardwaj</h4>
                <p className="text-primary-400 font-bold uppercase tracking-widest text-xs">Shaurya Chakra (P) &bull; Our Inspiration</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }}>
              <Quote className="w-12 h-12 text-primary-500 mb-8" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight"
            >
              A Message from <br /><span className="text-primary-400">Our Leadership</span>
            </motion.h2>

            {/* Staggered quote paragraphs */}
            {[
              "At Umang Superspeciality Hospital, our journey has always been defined by a single-minded focus: to make world-class healthcare accessible to everyone. We believe that medical excellence is not just about advanced machines, but about the hands that operate them and the hearts that care for the patients.",
              "We have invested in the finest medical talent and the most advanced infrastructure to ensure that when a patient walks through our doors, they receive care that is ethical, evidence-based, and deeply compassionate."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="text-gray-300 text-lg font-light leading-relaxed mb-6"
              >
                "{text}"
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-white/20 via-primary-500/30 to-transparent mt-10 mb-10"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500 shadow-lg shadow-primary-500/20">
                <img src={ASSETS.DIRECTOR} alt="Capt. Umang Bhardwaj" className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-white">Capt. Umang Bhardwaj</h5>
                <p className="text-gray-500 text-sm">Shaurya Chakra (P) &bull; The Soul Behind Umang Hospital</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   PATIENT CARE — Stepped reveal list
═══════════════════════════════════════ */
const PatientCareSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const items = [
    { title: "Empathetic Listening", desc: "Our doctors take the time to understand your concerns deeply.", icon: Heart, path: "/patient-experience" },
    { title: "Evidence-Based Medicine", desc: "Treatment plans backed by the latest global medical research.", icon: Microscope, path: "/doctors" },
    { title: "Family Involvement", desc: "We keep your loved ones informed and involved in the care journey.", icon: Users, path: "/patient-experience" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight mb-4">
              Patient-Centered <br /><span className="text-primary-600 normal">Healing.</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg font-light leading-relaxed mb-10">
              We believe in a holistic healing approach where the patient is at the center of every decision we make.
            </p>

            {/* Stepped items with active state */}
            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onMouseEnter={() => setActiveStep(i)}
                    className={`flex gap-5 p-5 rounded-2xl transition-all duration-500 group border-2 ${
                      activeStep === i
                        ? 'border-primary-200 bg-primary-50/50 shadow-md shadow-primary-100'
                        : 'border-transparent hover:border-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    {/* Step number + icon */}
                    <div className="relative shrink-0">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        activeStep === i
                          ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      {i < items.length - 1 && (
                        <div className={`absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-8 transition-colors ${
                          activeStep > i ? 'bg-primary-300' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className={`text-lg font-bold mb-1 transition-colors ${
                        activeStep === i ? 'text-primary-700' : 'text-brand-dark'
                      }`}>{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 mt-2 transition-all ${
                      activeStep === i ? 'text-primary-500 opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary-50 rounded-[4rem] rotate-3 -z-10" />
            <motion.img
              src={ASSETS.ABOUT_PHILOSOPHY}
              alt="Philosophy"
              className="rounded-[4rem] shadow-2xl w-full h-[500px] object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 hidden md:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trust Factor</p>
                <p className="text-2xl font-bold text-brand-dark">98% Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   QUALITY & SAFETY — Accordion panels
═══════════════════════════════════════ */
const QualitySection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const standards = [
    { title: "NABH Accredited", desc: "Highest national recognition for quality of care and patient safety. Our processes meet the strictest clinical governance standards.", icon: Award, color: 'from-primary-500 to-primary-700' },
    { title: "NABL Certified Lab", desc: "Ensuring 100% accuracy and precision in diagnostic reporting. Our lab follows international quality controls.", icon: Microscope, color: 'from-cyan-500 to-teal-600' },
    { title: "Infection Control", desc: "Rigorous sterilization and zero-infection protocols across all zones, including HEPA-filtered modular OTs.", icon: Shield, color: 'from-emerald-500 to-green-600' },
    { title: "Ethical Billing", desc: "Transparent, honest communication regarding all clinical costs. No hidden charges, complete billing clarity.", icon: Shield, color: 'from-amber-500 to-orange-600' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Clinical Excellence</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight mb-4">
              Global Quality <span className="text-primary-600 normal">Standards</span>
            </h2>
            <p className="text-gray-500 text-base lg:text-lg font-light leading-relaxed mb-8">
              Our clinical protocols are aligned with international benchmarks to ensure maximum patient safety.
            </p>
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-center">
                <p className="text-3xl font-black text-primary-600"><AnimatedNumber value="4" /></p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Certifications</p>
              </div>
              <div className="w-px h-12 bg-gray-100" />
              <div className="text-center">
                <p className="text-3xl font-black text-primary-600"><AnimatedNumber value="100" suffix="%" /></p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Compliance</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-3">
            {standards.map((std, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div
                  className={`rounded-2xl border-2 overflow-hidden transition-all duration-500 ${
                    openIdx === i
                      ? 'border-primary-200 bg-white shadow-lg'
                      : 'border-gray-100 bg-white/60 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                    className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 transition-all duration-300 bg-gradient-to-br ${
                      openIdx === i ? std.color : 'from-gray-200 to-gray-300'
                    }`}>
                      <std.icon className="w-5 h-5" />
                    </div>
                    <h4 className={`flex-1 font-bold text-base lg:text-lg transition-colors ${
                      openIdx === i ? 'text-primary-700' : 'text-brand-dark'
                    }`}>{std.title}</h4>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      openIdx === i ? 'rotate-180 text-primary-500' : ''
                    }`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className="px-5 lg:px-6 pb-6 pl-[76px]">
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <div className={`w-full h-0.5 bg-gradient-to-r ${std.color} rounded-full mb-4 opacity-30`} />
                            <p className="text-gray-600 text-sm leading-relaxed">{std.desc}</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   CORE VALUES — Floating hover-glow cards
═══════════════════════════════════════ */
const CoreValuesSection = () => {
  const values = [
    { icon: Heart, title: "Compassion", desc: "Empathy at every touchpoint; dignity and respect for all patients.", color: "from-rose-500 to-red-600", glow: "shadow-rose-200" },
    { icon: Shield, title: "Integrity", desc: "Transparent billing and clear communication about diagnosis and costs.", color: "from-primary-500 to-primary-700", glow: "shadow-primary-200" },
    { icon: Users, title: "Teamwork", desc: "Multidisciplinary collaboration across major medical specialties.", color: "from-cyan-500 to-teal-600", glow: "shadow-cyan-200" },
    { icon: Award, title: "Excellence", desc: "High medical standards and continuous medical education.", color: "from-amber-500 to-yellow-600", glow: "shadow-amber-200" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 text-brand-dark overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">The Umang Ethos</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-500 text-lg lg:text-xl font-light">Sewa Parmo Dharam — Service is the highest virtue.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <div className={`bg-white border border-gray-100 p-8 lg:p-10 rounded-[2.5rem] shadow-sm group-hover:shadow-xl group-hover:${val.glow} transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden`}>
                {/* Hover glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${val.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${val.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${val.glow}`}>
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">{val.title}</h4>
                </div>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   CSR — Parallax depth layers
═══════════════════════════════════════ */
const CSRSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const statY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const csrItems = [
    { title: "Free Health Camps", desc: "Regular medical checkups organized in rural areas of Gurugram." },
    { title: "Awareness Webinars", desc: "Educational sessions on preventive health and lifestyle management." },
    { title: "Subsidized Surgery", desc: "Providing low-cost surgical options for economically weaker sections." }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Beyond Medicine</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight mb-4">
              Community & <br /><span className="text-primary-600 normal">Care.</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg font-light leading-relaxed mb-10">
              We are committed to making healthcare accessible to the underserved sections of society.
            </p>
            <div className="space-y-4">
              {csrItems.map((csr, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-5 items-start group hover:bg-white hover:shadow-md hover:border-primary-100 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shrink-0 text-[11px] font-black group-hover:scale-110 transition-transform shadow-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark group-hover:text-primary-600 transition-colors">{csr.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{csr.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Parallax depth image */}
          <div className="lg:w-1/2 relative h-[500px]">
            {/* Layer 1: Image (slow) */}
            <motion.div style={{ y: imgY }} className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={ASSETS.ABOUT_GLOBAL} alt="CSR" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
            </motion.div>

            {/* Layer 2: Teal overlay shape (medium) */}
            <motion.div
              style={{ y: overlayY }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl opacity-20 blur-sm"
            />

            {/* Layer 3: Floating stat card (fast) */}
            <motion.div
              style={{ y: statY }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-gray-100 z-20"
            >
              <h4 className="text-3xl font-serif font-bold text-primary-600"><AnimatedNumber value="10000" suffix="+" /></h4>
              <p className="text-[11px] uppercase tracking-widest font-black text-gray-500">Lives Touched Annually</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   CLINICAL EXCELLENCE — Staggered mosaic
═══════════════════════════════════════ */
const ClinicalExcellenceSection = ({ fadeIn }) => {
  const items = [
    { title: "Zero Infection", desc: "Modular OTs with HEPA filters ensuring maximum surgical safety.", icon: Shield, path: "/infrastructure" },
    { title: "Patient Rights", desc: "Ethical care models aligned with NABH quality frameworks.", icon: Heart, path: "/patient-experience" },
    { title: "Critical Care", desc: `Large ${siteConfig.stats.icuBedsMarketing}-bed ICU capacity with 24/7 intensivist coverage.`, icon: Activity, path: "/infrastructure/icu" },
    { title: "24/7 Diagnostics", desc: "In-house lab and imaging delivering accurate results round-the-clock.", icon: Microscope, path: "/services/lab-test-diagnostic" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-dark relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-7">
            <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">Safety First</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
              Premium Standards, <br /><span className="text-primary-400 normal">Global Protocols.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Link to={item.path} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 shadow-sm flex items-center justify-center text-primary-400 border border-white/10 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{item.title}</h4>
                      <p className="text-sm lg:text-base text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative group"
              >
                <img src={ASSETS.ROBOTIC_SURGERY} alt="Robotic Surgery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">Infrastructure</p>
                  <h4 className="text-white font-bold text-lg">Robotic OT</h4>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8 }}
                className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-brand-dark to-[#1e293b] p-8 lg:p-10 flex flex-col justify-center items-center text-center text-white shadow-xl border border-white/5 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl" />
                <Zap className="w-8 h-8 text-primary-400 mb-4 opacity-50" />
                <h4 className="text-4xl lg:text-5xl font-black mb-2 tracking-tighter text-primary-400"><AnimatedNumber value="3" /></h4>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">Modular OTs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                whileHover={{ y: -8 }}
                className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-primary-500 to-primary-700 p-8 lg:p-10 flex flex-col justify-center items-center text-center text-white shadow-xl relative overflow-hidden"
              >
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                <Users className="w-8 h-8 text-white/40 mb-4" />
                <h4 className="text-4xl lg:text-5xl font-black mb-2 tracking-tighter"><AnimatedNumber value={siteConfig.stats.superspecialists} suffix="" /></h4>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-90">Specialists</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8 }}
                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative group"
              >
                <img src={ASSETS.ABOUT_ICU} alt="ICU Facility" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">Critical Care</p>
                  <h4 className="text-white font-bold text-lg">Smart ICU</h4>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="w-28 h-28 lg:w-36 lg:h-36 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center p-5 border-4 border-primary-50">
                <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current mb-2" />
                <span className="text-[9px] lg:text-[11px] font-black text-brand-dark uppercase tracking-tighter leading-none">NABH GOLD<br/>STANDARDS</span>
                <div className="mt-2 w-8 h-1 bg-primary-600 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   TIMELINE — Scroll-drawing progress line
═══════════════════════════════════════ */
const TimelineSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const milestones = [
    { year: '2021', title: 'The Foundation', desc: `Umang opens its doors as a focused care unit. Driven by a mission to bring accessible, world-class healthcare to Gurugram.`, align: 'left', img: ASSETS.HOSPITAL_EXTERIOR },
    { year: '2022', title: 'Technological Leap', desc: `A major upgrade to a ${siteConfig.stats.beds}-bed facility. We installed a state-of-the-art CT scan and inaugurated our advanced 24/7 Pathology Lab.`, align: 'right', img: ASSETS.ABOUT_LEAP },
    { year: '2023', title: 'Super Speciality Beacon', desc: 'Launch of dedicated Cardiac and Neuro Sciences wings. In the very first year, our team successfully performed over 1,000 procedures.', align: 'left', img: ASSETS.ABOUT_BEACON },
    { year: '2024', title: 'NABH Gold Standard', desc: `Expanding to ${siteConfig.stats.beds} beds with state-of-the-art Robotic OT suites and comprehensive critical care infrastructure. Achieving high national accreditation.`, align: 'right', img: ASSETS.ABOUT_NABH },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Our Milestones</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark">The Healing Journey</h2>
            <p className="text-gray-500 text-base lg:text-lg font-light mt-4">From a humble beginning to a world-class institution.</p>
          </motion.div>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Drawing line — scaleY driven by scroll */}
          <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[3px] lg:-translate-x-1/2">
            <div className="w-full h-full bg-gray-200 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 via-primary-600 to-cyan-500 rounded-full"
              style={{ scaleY: scrollYProgress, height: '100%', transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-16 lg:space-y-28">
            {milestones.map((item, i) => (
              <TimelineNode key={i} item={item} index={i} totalItems={milestones.length} scrollProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineNode = ({ item, index, totalItems, scrollProgress }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-100px' });
  const threshold = (index + 0.5) / totalItems;

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''} relative pl-12 lg:pl-0`}
    >
      {/* Node dot with activation animation */}
      <div className="absolute left-[13px] lg:left-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          className="w-5 h-5 rounded-full bg-primary-600 border-4 border-white shadow-xl"
        />
        {/* Ripple ring */}
        {isInView && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute inset-0 rounded-full border-2 border-primary-400"
          />
        )}
      </div>

      {/* Content */}
      <div className={`lg:w-1/2 flex ${item.align === 'right' ? 'justify-start' : 'justify-end'} w-full`}>
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 max-w-xl relative group transition-all duration-500 w-full"
        >
          <span className="text-5xl lg:text-7xl font-serif font-bold text-gray-50 absolute top-6 right-10 select-none z-0 group-hover:text-primary-50 transition-colors">{item.year}</span>
          <div className="relative z-10 text-left">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-gradient-to-r from-primary-50 to-cyan-50 text-primary-600 font-bold text-[12px] lg:text-sm mb-5 shadow-sm border border-primary-100">{item.year}</span>
            <h4 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">{item.title}</h4>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      </div>

      {/* Image */}
      <div className={`lg:w-1/2 w-full flex ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <motion.div
          whileHover={{ scale: 1.03, rotate: item.align === 'right' ? 1.5 : -1.5 }}
          className="relative w-full max-w-md aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white"
        >
          <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};


/* ═══════════════════════════════════════
   INFRASTRUCTURE — Hover-zoom bento
═══════════════════════════════════════ */
const InfrastructureSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Medical Hub</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark">{siteConfig.stats.beds}-bedded <span className="text-primary-600 normal">Elite Facility</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 min-h-[460px] lg:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group shadow-2xl h-[400px] lg:h-auto cursor-pointer"
          >
            <img src={ASSETS.ABOUT_100_BEDS} alt="150-bedded Elite Facility" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
            <div className="absolute bottom-8 right-8 lg:bottom-10 lg:right-10 max-w-xl pl-8 text-right">
              <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 lg:mb-4 block">Medical Hub</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-6 leading-tight">{siteConfig.stats.beds}-bedded Elite Facility</h3>
              <Link to="/infrastructure" className="inline-flex items-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-white text-brand-dark rounded-full font-bold text-[11px] lg:text-sm hover:bg-primary-50 transition-all group/btn">
                Virtual Tour <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-5 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/infrastructure/icu" className="flex-1 relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group shadow-xl h-[250px] lg:h-[240px] block">
                <img src={ASSETS.ABOUT_ICU} alt="ICU" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply group-hover:bg-primary-900/40 transition-all" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
                  <Activity className="w-10 h-10 lg:w-12 lg:h-12 mb-3 lg:mb-4 text-primary-300 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg lg:text-xl font-bold">Advanced ICU</h4>
                  <p className="text-[11px] lg:text-sm opacity-90 mt-2 font-light">24/7 Monitoring with 1:1 Nursing</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-brand-dark rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 text-white flex flex-col justify-between shadow-xl min-h-[250px] lg:min-h-auto relative overflow-hidden group"
            >
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Quick Stats</h4>
                <ul className="space-y-3 lg:space-y-4 text-gray-300 font-medium text-[12px] lg:text-sm">
                  <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>ICU Beds</span> <span className="text-white font-bold">{siteConfig.stats.icuBedsMarketing}</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>Modular OTs</span> <span className="text-white font-bold">{siteConfig.infrastructure.ots}</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>Specialists</span> <span className="text-white font-bold">{siteConfig.stats.superspecialists}</span></li>
                </ul>
              </div>
              <Link to="/doctors" className="flex items-center gap-2 text-primary-400 font-bold hover:gap-4 transition-all text-[11px] lg:text-sm uppercase tracking-wider mt-4 relative z-10">
                View Full Directory <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   GLOBAL OUTREACH — Staggered counter reveal
═══════════════════════════════════════ */
const GlobalOutreachSection = () => {
  const outreachItems = ["International Desk", "Interpreter Services", "Concierge Care", "Global Follow-ups"];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
              <img src={ASSETS.ABOUT_GLOBAL} alt="International Patients" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-brand-dark text-white p-6 lg:p-8 rounded-[1.5rem] shadow-2xl z-20 max-w-[200px] text-left border-4 border-white"
            >
              <h4 className="text-3xl lg:text-4xl font-serif font-bold mb-1"><AnimatedNumber value="30" suffix="+" /></h4>
              <p className="text-[11px] lg:text-sm font-bold uppercase tracking-widest opacity-90 leading-tight">Countries Served Globally</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 text-left"
          >
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Global Footprint</span>
            <h2 className="text-2xl lg:text-4xl font-serif font-bold text-brand-dark mb-6 leading-tight">
              A Premier Medical <br /><span className="text-primary-600 normal">Destination.</span>
            </h2>
            <p className="text-gray-600 text-sm lg:text-base font-light leading-relaxed mb-8">
              {siteConfig.shortName} is a preferred choice for international patients seeking high-quality surgical procedures. Our dedicated International Desk ensures a seamless journey from visa assistance to post-discharge care.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {outreachItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-brand-dark font-bold text-[11px] lg:text-sm group"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 group-hover:scale-150 transition-transform" />
                  {item}
                </motion.div>
              ))}
            </div>
            <Link to="/contact/inquiry-hub" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white rounded-xl font-bold text-[11px] lg:text-sm uppercase tracking-widest hover:bg-primary-900 transition-all shadow-xl group">
              Inquire for International Desk <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════
   FINAL CTA — Animated gradient orbs
═══════════════════════════════════════ */
const FinalCTASection = ({ fadeIn }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const orbX1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const orbX2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden">
      <motion.div style={{ x: orbX1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-[150px] pointer-events-none" />
      <motion.div style={{ x: orbX2 }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Star className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-400 fill-current mx-auto mb-6 lg:mb-8" />
          </motion.div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 lg:mb-10 tracking-tighter leading-tight">
            Ready to experience <br />the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-300 to-accent-400 normal">{siteConfig.shortName.split(' ')[0]} difference?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
            <Link to="/doctors" className="px-8 py-4 lg:px-10 lg:py-5 bg-white text-brand-dark rounded-full font-bold text-sm lg:text-base shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 group">
              Book an Appointment <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
            <a href={`tel:${siteConfig.contacts.emergency}`} className="px-8 py-4 lg:px-10 lg:py-5 border border-white/20 text-white rounded-full font-bold text-sm lg:text-base backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              Call 24/7 Helpline <Phone className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-wrap justify-center gap-6">
            {['NABH Accredited', 'NABL Certified', 'JCI Standards'].map((badge, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-gray-500 font-bold uppercase tracking-widest text-[11px] lg:text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
