import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Activity, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const upgrades = [
  { 
    title: '128-Slice CT Scan', 
    desc: 'Ultra-fast imaging with 80% less radiation dose than conventional scanners.', 
    icon: Activity, 
    image: ASSETS.CT_SCAN,
    tag: "Diagnostic"
  },
  { 
    title: '3 Tesla MRI', 
    desc: 'Highest clarity imaging for neurological and musculoskeletal diagnostics.', 
    icon: Cpu, 
    image: ASSETS.MRI_SCAN,
    tag: "Imaging"
  },
  { 
    title: 'Robotic OT Suite', 
    desc: 'Modular operation theatres with advanced robotic-assisted surgery systems.', 
    icon: Zap, 
    image: ASSETS.OT,
    tag: "Surgical"
  },
];

const MedicalUpgrades = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="section-padding bg-[#020617] text-white overflow-hidden relative border-t border-white/5">
      {/* Background elements */}
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 lg:mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">Clinical Infrastructure</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-[1.1]">
              Built for <span className="hero-gradient-text italic">Precision.</span>
            </h2>
            <p className="text-white/70 mt-6 text-sm lg:text-lg font-light leading-relaxed max-w-[55ch]">
              Experience Gurugram's most advanced 100-bedded superspeciality facility, engineered for clinical excellence.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <Link to="/infrastructure" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-brand-dark transition-all duration-500 font-bold text-[11px] uppercase tracking-widest backdrop-blur-sm">
              Explore Infrastructure <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {upgrades.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative bg-[#0f172a]/60 backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col hover:border-primary-500/40 transition-all duration-500"
            >
              <Link to="/infrastructure" className="absolute inset-0 z-30" aria-label={item.title} />
              
              <div className="aspect-[16/9] lg:aspect-[16/10] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-100" 
                  onError={(e) => {
                    e.currentTarget.src = ASSETS.HOSPITAL_EXTERIOR;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-30" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-6 lg:p-8 pt-5 flex-1 flex flex-col items-start text-left">
                <div className="w-10 h-10 rounded-xl bg-primary-500/5 flex items-center justify-center border border-white/10 mb-6 group-hover:border-primary-500/30 group-hover:bg-primary-500/10 transition-all duration-500 shadow-xl">
                   <item.icon className="w-5 h-5 text-primary-400" />
                </div>
                
                <h4 className="text-lg lg:text-[1.3rem] font-serif font-bold mb-3 tracking-tight text-white group-hover:text-primary-300 transition-colors leading-tight">{item.title}</h4>
                <p className="text-white/60 text-[11px] lg:text-[13px] leading-relaxed font-light mb-6 line-clamp-2 group-hover:text-white/90 transition-colors">{item.desc}</p>
                
                <div className="mt-auto flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary-400 transition-all group-hover:gap-3">
                   Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalUpgrades;
