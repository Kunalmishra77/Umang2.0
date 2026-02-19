import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Bone, Activity, Scissors, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const departments = [
  { id: 'cardiac', name: 'Cardiac Sciences', icon: Heart, desc: 'Advanced heart care', img: ASSETS.CARDIAC, colSpan: 'xl:col-span-2' },
  { id: 'neuro', name: 'Neuro Sciences', icon: Brain, desc: 'Brain & Spine Care', img: ASSETS.NEURO, colSpan: 'xl:col-span-1' },
  { id: 'ortho', name: 'Orthopaedics', icon: Bone, desc: 'Joint Replacement', img: ASSETS.ORTHO, colSpan: 'xl:col-span-1' },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity, desc: 'Digestive Health', img: ASSETS.GASTRO, colSpan: 'xl:col-span-1' },
  { id: 'pulmonology', name: 'Pulmonology', icon: Wind, desc: 'Respiratory Care', img: ASSETS.PULMONOLOGY, colSpan: 'xl:col-span-1' },
  { id: 'surgery', name: 'General Surgery', icon: Scissors, desc: 'Laparoscopic Care', img: ASSETS.OT, colSpan: 'xl:col-span-2' },
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
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 lg:mb-16 gap-8 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] lg:text-sm mb-3 block">Clinical Excellence</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">Centres of <span className="text-primary-600 italic">Excellence</span></h2>
            <p className="text-gray-600 max-w-xl text-base lg:text-lg font-light leading-relaxed mx-auto lg:mx-0">
              Leading specialized departments utilizing cutting-edge technology for superior patient outcomes.
            </p>
          </motion.div>
          <Link to="/specialities" className="hidden lg:flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300 hover:border-primary-600 hover:bg-white text-brand-dark transition-all font-bold text-[12px] uppercase tracking-widest group h-14 shadow-sm hover:shadow-lg">
            View All Departments <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 auto-rows-[240px] sm:auto-rows-[280px] lg:auto-rows-[320px]">
          {departments.map((dept) => (
            <motion.div 
              key={dept.id} 
              variants={item} 
              className={`col-span-1 ${dept.colSpan || ''}`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/specialities" state={{ category: dept.id }} className="block h-full group relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 overflow-hidden">
                  {dept.video ? (
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      preload="none"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    >
                      <source src={dept.video} type="video/mp4" />
                      <img src={dept.img} alt={dept.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </video>
                  ) : (
                    <img src={dept.img} alt={dept.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 lg:mb-8 border border-white/20 group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-500 shadow-xl">
                      <dept.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-white mb-2 leading-tight drop-shadow-md">{dept.name}</h3>
                    <div className="flex items-center gap-3 text-primary-300 font-bold tracking-widest text-[11px] lg:text-xs uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                        <span>Explore</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 lg:hidden text-center">
          <Link to="/specialities" className="btn-outline w-full justify-center py-5 rounded-2xl text-sm uppercase tracking-widest font-black">All Departments</Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
