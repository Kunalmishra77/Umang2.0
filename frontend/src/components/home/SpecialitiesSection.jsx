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
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Clinical Excellence</span>
            <h2 className="section-title">Centres of Excellence</h2>
            <p className="text-gray-600 max-w-xl text-lg font-light leading-relaxed">
              Specialized departments led by industry experts, utilizing cutting-edge technology for superior patient outcomes.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 30 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             transition={{ duration: 0.8 }} 
             viewport={{ once: true }}
             className="hidden md:block"
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
          className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[350px]"
        >
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              variants={item}
              className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer ${dept.col}`}
            >
              <Link to={`/specialities/${dept.id}`} className="absolute inset-0 z-30"></Link>
              
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <ParallaxImage 
                  src={dept.img} 
                  alt={dept.name} 
                  containerClassName="w-full h-full"
                  className="transition-transform duration-1000 group-hover:scale-110"
                  offset={40}
                />
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-500 mix-blend-multiply" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/20 shadow-lg group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300">
                     <dept.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                   </div>
                   
                   <h3 className="text-3xl font-serif font-bold text-white mb-2 leading-tight">{dept.name}</h3>
                   
                   <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                     <p className="text-gray-200 text-sm font-light mb-6 border-l-2 border-primary-400 pl-3">
                       {dept.desc}
                     </p>
                     
                     <div className="flex items-center gap-3 text-white font-bold tracking-wider text-sm">
                       <span className="border-b border-transparent group-hover:border-white transition-all pb-0.5">Explore Department</span>
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/specialities" className="btn-outline w-full justify-center">View All Departments</Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
