import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Bone, Baby, Activity, Scissors, Wind, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const departments = [
  { id: 'cardiac', name: 'Cardiac Sciences', icon: Heart, desc: 'Advanced Cath Labs & Cardiac Surgery', img: ASSETS.CARDIAC, col: 'md:col-span-2' },
  { id: 'neuro', name: 'Neuro Sciences', icon: Brain, desc: 'Complex Brain & Spine Surgeries', img: ASSETS.NEURO, col: 'md:col-span-1' },
  { id: 'ortho', name: 'Orthopaedics', icon: Bone, desc: 'Joint Replacement & Trauma Care', img: ASSETS.ORTHO, col: 'md:col-span-1' },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity, desc: 'Digestive & Liver Care', img: ASSETS.GASTRO, col: 'md:col-span-2' },
  { id: 'pulmonology', name: 'Pulmonology', icon: Wind, desc: 'Respiratory & Chest Medicine', img: ASSETS.PULMONOLOGY, col: 'md:col-span-1' },
  { id: 'surgery', name: 'General Surgery', icon: Scissors, desc: 'Laparoscopic & Minimal Access', img: ASSETS.OT, col: 'md:col-span-1' },
];

const SpecialitiesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="section-subtitle">Clinical Excellence</span>
            <h2 className="section-title">Centres of Excellence</h2>
            <p className="text-gray-500 max-w-xl text-lg">
              Specialized departments led by industry experts, utilizing cutting-edge technology for superior patient outcomes.
            </p>
          </div>
          <Link to="/specialities" className="hidden md:flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors group">
            View All Departments <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {departments.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${dept.col}`}
            >
              <Link to={`/specialities/${dept.id}`} className="absolute inset-0 z-30"></Link>
              {/* Background Image with Zoom Effect */}
              <img 
                src={dept.img} 
                alt={dept.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20 group-hover:bg-primary-600 group-hover:border-primary-600 transition-colors">
                  <dept.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 ease-in-out">
                  {dept.desc}
                </p>
                
                <div className="flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-wider group-hover:text-white">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/specialities" className="btn-outline w-full">View All Departments</Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
