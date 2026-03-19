import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Activity, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const chips = ['NABH Accredited', '150-Bed Facility', '24/7 Emergency'];

const HospitalVideoSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax offsets for the two halves
  const leftY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const clipProgress = useTransform(scrollYProgress, [0.1, 0.4], [0, 100]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Video side with reveal animation */}
          <motion.div className="order-2 lg:order-1 relative" style={{ y: leftY }}>
            <div className="mb-6 lg:mb-8">
              <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] md:text-sm mb-3 block">Virtual Hospital Tour</span>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-brand-dark">World-Class Infrastructure</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[2.5rem] overflow-hidden border-4 lg:border-[12px] border-white shadow-2xl bg-[#0f172a] aspect-video lg:aspect-[4/3] group"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={ASSETS.HOSPITAL_EXTERIOR}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src="/assets/Home/umange-about.MP4?v=2" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-60" />

              {/* Animated play pulse */}
              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-primary-500/30 animate-ping" />
                  <div className="relative w-12 h-12 rounded-full bg-primary-600/80 backdrop-blur-md border border-white/30 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Stats overlay on hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/20 hidden lg:flex items-center gap-4"
              >
                <div className="text-center">
                  <p className="text-2xl font-black text-white">150+</p>
                  <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Beds</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-2xl font-black text-white">35+</p>
                  <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Doctors</p>
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text side with staggered reveal */}
          <motion.div className="order-1 lg:order-2" style={{ y: rightY }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[11px] sm:text-[12px] mb-3 sm:mb-4 block">The Umang Experience</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-6 sm:mb-8 leading-tight">
                Next-Gen Infrastructure with a <span className="text-primary-600 normal font-medium">Human Touch.</span>
              </h2>

              <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-light">
                  In the world of high-end technology, we never lose the human connection. Our care model combines advanced infrastructure with deep empathy.
                </p>

                <div className="grid sm:grid-cols-1 gap-4">
                  {chips.map((chip, i) => (
                    <motion.div
                      key={chip}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm lg:text-base font-bold text-brand-dark group-hover:text-primary-600 transition-colors">{chip}</span>
                      <div className="flex-1 h-px bg-gray-100 group-hover:bg-primary-100 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="h-12 sm:h-14 px-6 sm:px-8 bg-primary-600 text-white rounded-xl flex items-center gap-2 sm:gap-3 font-bold text-[13px] sm:text-sm hover:bg-primary-500 transition-all shadow-[0_15px_30px_-5px_rgba(2,132,199,0.4)] active:scale-95 group">
                  Explore Hospital <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/team" className="h-12 sm:h-14 px-6 sm:px-8 border-2 border-brand-dark/10 text-brand-dark rounded-xl flex items-center gap-2 sm:gap-3 font-bold text-[13px] sm:text-sm hover:bg-gray-50 transition-all active:scale-95">
                  Our Leadership
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HospitalVideoSection;
