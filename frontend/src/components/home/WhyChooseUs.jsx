import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Award, CheckCircle2, MoveRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';
import CountUp from '../../components/common/CountUp';

const chooseItems = [
  {
    title: `${siteConfig.stats.beds}-Bed Infrastructure`,
    desc: `A massive facility featuring ${siteConfig.stats.icuBedsMarketing} ICU beds, Modular OTs, and specialized units for rapid recovery.`,
    icon: ShieldCheck,
    img: ASSETS.HOSPITAL_EXTERIOR,
    path: "/infrastructure",
    features: ["Modular OTs", "28 ICU Beds", "Smart Wards"],
    accent: 'from-primary-500 to-cyan-500',
  },
  {
    title: "24/7 Critical Support",
    desc: "Round-the-clock emergency trauma care and fully stocked digital pharmacy.",
    icon: Clock,
    img: ASSETS.AMBULANCE,
    path: "/services/emergency",
    accent: 'from-red-500 to-rose-600',
  },
  {
    title: "Modern Technology",
    desc: "Equipped with 128 Slice CT, 3 Tesla MRI, and precision diagnostic labs.",
    icon: Zap,
    img: ASSETS.CT_SCAN,
    path: "/health-library/technologies",
    accent: 'from-violet-500 to-purple-600',
  },
  {
    title: "Clinical Excellence",
    desc: "NABH accredited standards ensuring world-class safety and clinical outcomes.",
    icon: Award,
    img: ASSETS.ABOUT_NABH,
    path: "/about",
    stat: siteConfig.stats.superspecialists,
    accent: 'from-amber-500 to-orange-600',
  }
];

const WhyChooseUs = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/20 rounded-full blur-[120px] -mr-100 -mt-100 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] -ml-80 -mb-80 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-8 sm:mb-12 lg:mb-16 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="w-8 sm:w-10 h-[2px] bg-primary-500 rounded-full" />
              <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[11px] sm:text-[12px]">Excellence in Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Trusted Care in <span className="text-primary-600 normal font-medium">Gurugram</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500 text-base lg:text-lg font-light leading-relaxed max-w-sm text-left lg:text-right"
          >
            Leading the way in medical innovation with a patient-first approach since 2010.
          </motion.p>
        </div>

        {/* ── Interactive Grid — Expanding card on hover ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {chooseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative"
            >
              <Link to={item.path} className="block">
                <div className={`relative rounded-2xl sm:rounded-[2rem] overflow-hidden transition-all duration-700 border border-gray-50 ${
                  hoveredIdx === i ? 'shadow-2xl lg:-translate-y-3' : 'shadow-lg'
                }`}>
                  {/* Image */}
                  <div className="relative h-[240px] xs:h-[260px] sm:h-[280px] md:h-[300px] lg:h-[340px]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-[1.5s] ${
                        hoveredIdx === i ? 'scale-110 brightness-[0.6]' : 'scale-100 brightness-[0.75]'
                      }`}
                    />
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      hoveredIdx === i
                        ? 'bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-gray-950/20'
                        : 'bg-gradient-to-t from-gray-950/90 via-gray-900/40 to-transparent'
                    }`} />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-7">
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      hoveredIdx === i
                        ? `bg-gradient-to-br ${item.accent} text-white shadow-lg`
                        : 'bg-white/10 backdrop-blur-md text-primary-400 border border-white/20'
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>

                    {/* Description — slides up on hover */}
                    <motion.p
                      initial={false}
                      animate={{
                        height: hoveredIdx === i ? 'auto' : 0,
                        opacity: hoveredIdx === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 text-[13px] font-light leading-relaxed overflow-hidden"
                    >
                      {item.desc}
                    </motion.p>

                    {/* Features tags */}
                    {item.features && (
                      <motion.div
                        initial={false}
                        animate={{
                          height: hoveredIdx === i ? 'auto' : 0,
                          opacity: hoveredIdx === i ? 1 : 0,
                          marginTop: hoveredIdx === i ? 12 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="flex flex-wrap gap-2 overflow-hidden"
                      >
                        {item.features.map(f => (
                          <span key={f} className="px-2.5 py-1 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-bold text-primary-200 border border-white/10 flex items-center gap-1">
                            <CheckCircle2 className="w-2.5 h-2.5 text-primary-400" /> {f}
                          </span>
                        ))}
                      </motion.div>
                    )}

                    {/* Stat counter */}
                    {item.stat && hoveredIdx === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 flex items-center gap-3"
                      >
                        <span className="text-2xl font-black text-white"><CountUp to={parseInt(item.stat)} />+</span>
                        <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest">Specialists</span>
                      </motion.div>
                    )}

                    {/* Bottom bar */}
                    <div className={`mt-4 pt-3 border-t flex items-center justify-between transition-colors duration-300 ${
                      hoveredIdx === i ? 'border-white/15' : 'border-white/5'
                    }`}>
                      <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
                        hoveredIdx === i ? 'text-primary-400' : 'text-white/30'
                      }`}>View Details</span>
                      <MoveRight className={`w-4 h-4 transition-all ${
                        hoveredIdx === i ? 'text-primary-400 translate-x-0' : 'text-white/20 -translate-x-2'
                      }`} />
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredIdx === i ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
