import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Bone, Activity, Scissors, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../common/ParallaxImage';

const departments = [
  { id: 'cardiac', name: 'Cardiac Sciences', icon: Heart, desc: 'Advanced Cath Labs', img: ASSETS.CARDIAC, col: 'md:col-span-2' },
  { id: 'neuro', name: 'Neuro Sciences', icon: Brain, desc: 'Brain & Spine Care', img: ASSETS.NEURO, col: 'md:col-span-1' },
  { id: 'ortho', name: 'Orthopaedics', icon: Bone, desc: 'Joint Replacement', img: ASSETS.ORTHO, col: 'md:col-span-1' },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity, desc: 'Digestive Health', img: ASSETS.GASTRO, col: 'md:col-span-2' },
  { id: 'pulmonology', name: 'Pulmonology', icon: Wind, desc: 'Respiratory Care', img: ASSETS.PULMONOLOGY, col: 'md:col-span-1' },
  { id: 'surgery', name: 'General Surgery', icon: Scissors, desc: 'Laparoscopic Care', img: ASSETS.OT, col: 'md:col-span-1' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const SpecialitiesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 lg:mb-16 gap-6 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <span className="section-subtitle">Clinical Excellence</span>
            <h2 className="section-title">Centres of Excellence</h2>
            <p className="text-gray-600 max-w-xl text-base lg:text-lg font-light leading-relaxed mx-auto lg:mx-0">
              Leading specialized departments utilizing cutting-edge technology for superior patient outcomes.
            </p>
          </motion.div>
          <Link to="/specialities" className="hidden lg:flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300 hover:border-primary-600 hover:bg-primary-50 text-brand-dark transition-all font-semibold group">
            View All Departments <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2 per row on mobile (grid-cols-2), 4 on desktop */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 auto-rows-[220px] sm:auto-rows-[280px] lg:auto-rows-[350px]">
          {departments.map((dept) => (
            <motion.div key={dept.id} variants={item} className={`group relative rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden cursor-pointer ${dept.col === 'md:col-span-2' ? 'col-span-2' : 'col-span-1'}`}>
              <Link to={`/specialities/${dept.id}`} className="absolute inset-0 z-30"></Link>
              <div className="absolute inset-0 overflow-hidden">
                <ParallaxImage src={dept.img} alt={dept.name} containerClassName="w-full h-full" className="transition-transform duration-1000 group-hover:scale-110" offset={20} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-4 lg:p-8 flex flex-col justify-end">
                <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-5 border border-white/20">
                     <dept.icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                   </div>
                   <h3 className="text-sm lg:text-3xl font-serif font-bold text-white mb-1 lg:mb-2 leading-tight">{dept.name}</h3>
                   <div className="hidden lg:block h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                     <p className="text-gray-200 text-xs lg:text-sm font-light mb-4 lg:mb-6 border-l-2 border-primary-400 pl-3">{dept.desc}</p>
                     <div className="flex items-center gap-3 text-white font-bold tracking-wider text-[10px] lg:text-sm uppercase">
                       <span>Explore</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 lg:hidden text-center">
          <Link to="/specialities" className="btn-outline w-full justify-center py-4 rounded-2xl text-xs uppercase tracking-widest">All Departments</Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
