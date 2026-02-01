import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Activity, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const upgrades = [
  {
    title: "128-Slice CT Scan",
    desc: "Ultra-fast imaging with 80% less radiation dose than conventional scanners.",
    icon: Activity,
    image: ASSETS.CT_SCAN,
    tag: "Diagnostic"
  },
  {
    title: "3 Tesla MRI",
    desc: "Highest clarity imaging for neurological and musculoskeletal diagnostics.",
    icon: Cpu,
    image: ASSETS.MRI_SCAN,
    tag: "Precision"
  },
  {
    title: "Robotic OT Suite",
    desc: "Modular operation theatres with advanced robotic-assisted surgery systems.",
    icon: Zap,
    image: ASSETS.OT,
    tag: "Surgical"
  }
];

const MedicalUpgrades = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-brand-dark text-white overflow-hidden relative border-t border-white/5">
      {/* Background elements */}
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Technological Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Latest Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300">Upgrades</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg font-light leading-relaxed">
              We continuously invest in the world's most advanced medical technology to ensure 
              unparalleled precision in diagnosis and treatment.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <Link to="/infrastructure" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-brand-dark transition-all duration-300 font-bold text-sm">
              Explore Infrastructure <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upgrades.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -15, transition: { duration: 0.4 } }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-primary-500/50 hover:bg-white/10 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-8 lg:p-10">
                <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-400 mb-6 border border-primary-500/20 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light mb-8 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
                <Link to="/health-library/technologies" className="flex items-center gap-2 text-sm font-bold text-primary-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalUpgrades;
