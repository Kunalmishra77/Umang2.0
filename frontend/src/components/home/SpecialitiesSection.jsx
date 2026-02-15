import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Bone, Activity, Scissors, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../common/ParallaxImage';

const departments = [
  { id: 'cardiac', name: 'Cardiac Sciences', icon: Heart, desc: 'Advanced Cath Labs & Cardiac Surgery', img: ASSETS.CARDIAC, col: 'md:col-span-2' },
  { id: 'neuro', name: 'Neuro Sciences', icon: Brain, desc: 'Complex Brain & Spine Surgeries', img: ASSETS.NEURO, col: 'md:col-span-1' },
  { id: 'ortho', name: 'Orthopaedics', icon: Bone, desc: 'Joint Replacement & Trauma Care', img: ASSETS.ORTHO, col: 'md:col-span-1' },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity, desc: 'Digestive & Liver Care', img: ASSETS.GASTRO, col: 'md:col-span-2' },
  { id: 'pulmonology', name: 'Pulmonology', icon: Wind, desc: 'Respiratory & Chest Medicine', img: ASSETS.PULMONOLOGY, col: 'md:col-span-1' },
  { id: 'surgery', name: 'General Surgery', icon: Scissors, desc: 'Laparoscopic & Minimal Access', img: ASSETS.OT, col: 'md:col-span-1' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const SpecialitiesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 lg:mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="section-subtitle">Clinical Excellence</span>
            <h2 className="section-title">Centres of Excellence</h2>
            <p className="text-gray-600 max-w-xl text-base lg:text-lg font-light leading-relaxed mx-auto lg:mx-0">
              Specialized departments led by industry experts, utilizing cutting-edge technology for superior patient outcomes.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 30 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             transition={{ duration: 0.8 }} 
             viewport={{ once: true }}
             className="hidden lg:block"
          >
            <Link to="/specialities" className="flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300 hover:border-primary-600 hover:bg-primary-50 text-brand-dark hover:text-primary-700 transition-all font-semibold group">
              View All Departments <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[300px] lg:auto-rows-[350px]"
        >
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              variants={item}
              className={`group relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden cursor-pointer ${dept.col} sm:col-span-1 ${dept.col === 'md:col-span-2' ? 'sm:col-span-2' : ''}`}
            >
              <Link to={`/specialities/${dept.id}`} className="absolute inset-0 z-30"></Link>
              
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <ParallaxImage 
                  src={dept.img} 
                  alt={dept.name} 
                  containerClassName="w-full h-full"
                  className="transition-transform duration-1000 group-hover:scale-110"
                  offset={30}
                />
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-500 mix-blend-multiply" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-5 border border-white/20 shadow-lg group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300">
                     <dept.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" strokeWidth={1.5} />
                   </div>
                   
                   <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-2 leading-tight">{dept.name}</h3>
                   
                   <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                     <p className="text-gray-200 text-xs lg:text-sm font-light mb-4 lg:mb-6 border-l-2 border-primary-400 pl-3">
                       {dept.desc}
                     </p>
                     
                     <div className="flex items-center gap-3 text-white font-bold tracking-wider text-[10px] lg:text-sm">
                       <span className="border-b border-transparent group-hover:border-white transition-all pb-0.5 uppercase">Explore Department</span>
                       <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 lg:hidden text-center px-4">
          <Link to="/specialities" className="btn-outline w-full justify-center py-4 rounded-2xl text-sm">View All Departments</Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
