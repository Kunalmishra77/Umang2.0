import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';

const AppointmentCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -40]);
  const orbX1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const orbX2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-14 sm:py-20 lg:py-28 bg-[#020617] relative overflow-hidden flex items-center justify-center min-h-[360px] sm:min-h-[420px]">
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={ASSETS.HOSPITAL_EXTERIOR}
          alt="Hospital Building"
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]/60" />
      </motion.div>

      {/* Animated gradient orbs */}
      <motion.div
        style={{ x: orbX1 }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/15 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ x: orbX2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/8 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div style={{ y: textY }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[12px] font-black uppercase tracking-[0.2em] mb-8 shadow-2xl"
          >
            <Clock className="w-3.5 h-3.5 text-primary-400" />
            <span>Ready to Serve 24/7</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
          >
            Your Health, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-300 to-accent-400 normal">Our Priority.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="text-base md:text-xl text-primary-100/60 mb-12 max-w-xl mx-auto font-light leading-relaxed"
          >
            Experience world-class healthcare with a personal touch. Schedule your consultation with our leading specialists today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
          >
            <Link
              to="/appointments/request"
              className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-2xl overflow-hidden flex items-center gap-3 font-bold text-sm shadow-xl shadow-primary-900/40 hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-4 h-4" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>

            <a
              href={`tel:${siteConfig.contacts.main.replace(/\s/g, '')}`}
              className="px-10 py-5 rounded-2xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-3 backdrop-blur-sm group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:scale-110 transition-all">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <span>{siteConfig.contacts.main}</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            {['NABH Accredited', 'NABL Certified', '24/7 Emergency'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-white/25 text-[11px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
