import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Activity, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const upgrades = [
  {
    title: "128-Slice CT Scan",
    desc: "Ultra-fast imaging with 80% less radiation dose than conventional scanners.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    tag: "Diagnostic"
  },
  {
    title: "3 Tesla MRI",
    desc: "Highest clarity imaging for neurological and musculoskeletal diagnostics.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    tag: "Precision"
  },
  {
    title: "Robotic OT Suite",
    desc: "Modular operation theatres with advanced robotic-assisted surgery systems.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    tag: "Surgical"
  }
];

const MedicalUpgrades = () => {
  return (
    <section className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Technological Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Latest Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Upgrades</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg font-light leading-relaxed">
              We continuously invest in the world's most advanced medical technology to ensure 
              unparalleled precision in diagnosis and treatment.
            </p>
          </div>
          <Link to="/infrastructure" className="group flex items-center gap-3 text-sm font-bold text-white hover:text-blue-400 transition-colors">
            Explore Infrastructure <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upgrades.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                <div className="absolute top-6 left-6 px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-[10px] font-bold text-blue-300 uppercase tracking-widest">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-10">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light mb-8">
                  {item.desc}
                </p>
                <div className="w-full h-[1px] bg-white/5 group-hover:bg-blue-500/20 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalUpgrades;
