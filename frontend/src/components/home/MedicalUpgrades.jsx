import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Zap, Activity, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const upgrades = [
  {
    title: '128-Slice CT Scan',
    desc: 'Ultra-fast imaging with 80% less radiation dose than conventional scanners.',
    icon: Activity,
    image: ASSETS.CT_SCAN,
    tag: 'Diagnostic',
    specs: ['80% Less Radiation', 'Sub-Second Scans', '0.5mm Precision'],
  },
  {
    title: '3 Tesla MRI',
    desc: 'Highest clarity imaging for neurological and musculoskeletal diagnostics.',
    icon: Cpu,
    image: ASSETS.MRI_SCAN,
    tag: 'Imaging',
    specs: ['70cm Wide Bore', 'Silent Scan Tech', '4D Flow Imaging'],
  },
  {
    title: 'Robotic OT Suite',
    desc: 'Modular operation theatres with advanced robotic-assisted surgery systems.',
    icon: Zap,
    image: ASSETS.ROBOTIC_SURGERY,
    tag: 'Surgical',
    specs: ['HEPA Filtered', 'Zero Infection', 'Robotic Precision'],
  },
];

/* ── Desktop: Tab-based content switcher with crossfade ── */
const DesktopTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="hidden lg:block">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-10 items-stretch">
          {/* LEFT — Image area with crossfade */}
          <div className="col-span-7 relative h-[55vh] min-h-[420px] lg:h-[65vh] lg:min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img src={upgrades[active].image} alt={upgrades[active].tag} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-[#020617]/20 to-[#020617]/10" />
              </motion.div>
            </AnimatePresence>

            {/* Tag pill */}
            <div className="absolute top-6 right-6 z-20">
              <span className="px-4 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                {upgrades[active].tag}
              </span>
            </div>

            {/* Progress dots */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
              {upgrades.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 rounded-full transition-all duration-300 ${
                    i === active ? 'h-8 bg-primary-400' : 'h-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Number watermark */}
            <span className="absolute bottom-8 right-10 text-[120px] font-black text-white/[0.04] leading-none select-none font-serif">
              0{active + 1}
            </span>
          </div>

          {/* RIGHT — Content with tab navigation */}
          <div className="col-span-5 flex flex-col">
            {/* Tab buttons */}
            <div className="flex flex-col gap-2 mb-8">
              {upgrades.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                    i === active
                      ? 'bg-primary-50 border-2 border-primary-200 shadow-sm'
                      : 'bg-transparent border-2 border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    i === active
                      ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-200'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-bold text-[15px] transition-colors ${
                      i === active ? 'text-primary-700' : 'text-brand-dark'
                    }`}>{item.title}</h4>
                    <p className={`text-[11px] font-bold uppercase tracking-widest mt-0.5 ${
                      i === active ? 'text-primary-500' : 'text-gray-400'
                    }`}>{item.tag}</p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${
                    i === active ? 'text-primary-500 translate-x-0 opacity-100' : 'opacity-0 -translate-x-2'
                  }`} />
                </button>
              ))}
            </div>

            {/* Active content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="flex-1 flex flex-col justify-center"
              >
                <h3 className="text-3xl xl:text-4xl font-serif font-bold text-brand-dark mb-4 leading-tight">
                  {upgrades[active].title}
                </h3>

                <p className="text-gray-500 text-base xl:text-lg leading-relaxed mb-8 max-w-md font-light">
                  {upgrades[active].desc}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {upgrades[active].specs.map((spec) => (
                    <span key={spec} className="px-4 py-2 bg-primary-50 border border-primary-100 rounded-xl text-[12px] font-bold text-primary-700">
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  to="/infrastructure"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-dark text-white rounded-full font-bold text-[12px] uppercase tracking-wider hover:bg-primary-600 transition-all shadow-xl w-fit group"
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Mobile: Vertical cards ── */
const MobileCards = () => (
  <div className="lg:hidden space-y-6">
    {upgrades.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      >
        <Link to="/infrastructure" className="block rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white group">
          <div className="aspect-video relative overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
              {item.tag}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-brand-dark">{item.title}</h4>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
            <div className="flex flex-wrap gap-2">
              {item.specs.map((s) => (
                <span key={s} className="px-3 py-1 bg-primary-50 rounded-lg text-[11px] font-bold text-primary-600">{s}</span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
);

/* ── Main Section ── */
const MedicalUpgrades = () => {
  return (
    <section className="bg-white overflow-hidden relative">
      {/* Header — always visible */}
      <div className="container-custom pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-16">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 sm:gap-8 mb-6 sm:mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[11px] sm:text-[12px] mb-3 sm:mb-4 block">Clinical Infrastructure</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold leading-[1.1] text-brand-dark">
              Built for <span className="text-primary-600 normal">Precision.</span>
            </h2>
            <p className="text-gray-500 mt-4 sm:mt-6 text-sm lg:text-lg font-light leading-relaxed max-w-[55ch]">
              Experience Gurugram's most advanced 150-bedded superspeciality facility, engineered for clinical excellence.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link to="/infrastructure" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-gray-200 bg-white hover:bg-brand-dark hover:text-white transition-all duration-500 font-bold text-[11px] uppercase tracking-widest shadow-sm">
              Explore Infrastructure <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Desktop tabs */}
      <div className="pb-16 lg:pb-24">
        <DesktopTabs />
      </div>

      {/* Mobile cards */}
      <div className="container-custom pb-16 lg:pb-0 lg:hidden">
        <MobileCards />
      </div>
    </section>
  );
};

export default MedicalUpgrades;
