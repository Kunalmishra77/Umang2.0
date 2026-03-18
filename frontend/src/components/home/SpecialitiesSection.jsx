import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Bone, Activity, Scissors, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const departments = [
  { id: 'cardiac', name: 'Cardiac Sciences', icon: Heart, desc: 'Advanced heart care', img: ASSETS.CARDIAC },
  { id: 'neuro', name: 'Neuro Sciences', icon: Brain, desc: 'Brain & Spine Care', img: ASSETS.NEURO },
  { id: 'ortho', name: 'Orthopaedics', icon: Bone, desc: 'Joint Replacement', img: ASSETS.ORTHO },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity, desc: 'Digestive Health', img: ASSETS.GASTRO },
  { id: 'pulmonology', name: 'Pulmonology', icon: Wind, desc: 'Respiratory Care', img: ASSETS.PULMONOLOGY },
  { id: 'surgery', name: 'General Surgery', icon: Scissors, desc: 'Laparoscopic Care', img: ASSETS.OT },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const SpecialitiesSection = () => {
  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 lg:mb-14 gap-6 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] lg:text-[13px] mb-3 block">Clinical Excellence</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">Centres of <span className="text-primary-600">Excellence</span></h2>
            <p className="text-gray-500 max-w-xl text-base lg:text-lg font-light leading-relaxed mx-auto lg:mx-0 mt-3">
              Leading specialized departments utilizing cutting-edge technology for superior patient outcomes.
            </p>
          </motion.div>
          <Link to="/specialities" className="hidden lg:flex items-center gap-3 px-7 py-3.5 rounded-full border border-gray-200 hover:border-primary-600 hover:bg-white text-brand-dark transition-all font-bold text-[11px] uppercase tracking-widest group shrink-0 shadow-sm hover:shadow-md">
            View All Departments <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Simplified grid: 2 cols mobile, 3 cols desktop, uniform height */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[240px] sm:auto-rows-[260px] lg:auto-rows-[300px]"
        >
          {departments.map((dept) => (
            <motion.div key={dept.id} variants={item}>
              <Link to={`/specialities/${dept.id}`} className="block h-full group relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 overflow-hidden">
                  <img src={dept.img} alt={dept.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-75 group-hover:opacity-65 transition-opacity" />

                <div className="absolute inset-0 p-5 lg:p-7 flex flex-col justify-end">
                  <div className="relative z-10">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 lg:mb-4 border border-white/15 group-hover:bg-primary-500/20 group-hover:border-primary-400/30 transition-all duration-500">
                      <dept.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-base lg:text-xl font-bold text-white mb-1 leading-tight">{dept.name}</h3>
                    {/* Always visible "Explore" — not hover-only */}
                    <div className="flex items-center gap-2 text-primary-300 font-bold tracking-widest text-[10px] lg:text-[11px] uppercase mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span> <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 lg:hidden text-center">
          <Link to="/specialities" className="inline-flex items-center gap-2 text-primary-600 font-bold text-[11px] uppercase tracking-widest">
            All Departments <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
