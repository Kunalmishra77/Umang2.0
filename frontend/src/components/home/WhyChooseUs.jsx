import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Award } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import CountUp from '../../components/common/CountUp';
import ParallaxImage from '../common/ParallaxImage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#005580 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-3xl"
          >
            <span className="section-subtitle">Medical Excellence</span>
            <h2 className="section-title">Why Patients <span className="text-primary-600">Trust Umang</span></h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Providing Gurugram with a world-class healing ecosystem since 2010. 
              We combine high-tech infrastructure with deep human compassion.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 md:auto-rows-[340px]"
        >
          
          {/* Card 1: The Infrastructure (Large) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-brand-dark rounded-[3rem] p-10 relative overflow-hidden group shadow-2xl min-h-[320px] transform transition-transform hover:-translate-y-2 duration-500"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 mb-8 md:mb-0 shadow-lg">
                <ShieldCheck className="w-8 h-8 text-primary-300" />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">150-Bedded Superspeciality</h3>
                <p className="text-blue-100/80 text-lg leading-relaxed font-light">
                  Gurugram's premium healthcare facility featuring 28 ICU beds, 8 SICU, 7 CCU, and 3 state-of-the-art modular operation theatres.
                </p>
              </div>
            </div>
            
            <ParallaxImage 
               src={ASSETS.HOSPITAL_EXTERIOR} 
               containerClassName="absolute right-0 bottom-0 w-full md:w-[60%] h-full"
               className="opacity-30 mix-blend-luminosity group-hover:scale-100 transition-transform duration-1000" 
               alt="Hospital Building"
               offset={40}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent pointer-events-none" />
          </motion.div>

          {/* Card 2: 24/7 Support */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-[3rem] p-10 flex flex-col justify-between hover-lift hover:shadow-red-500/10 transition-all duration-500 border border-gray-100 group min-h-[280px]"
          >
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shadow-sm text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 mb-8 md:mb-0">
               <Clock className="w-8 h-8" />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-red-600 transition-colors">24/7 Support</h3>
               <p className="text-gray-500 leading-relaxed">Emergency trauma care, fully stocked pharmacy, and diagnostic services available round-the-clock.</p>
            </div>
          </motion.div>

          {/* Card 3: Advanced Tech */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-[3rem] p-10 flex flex-col justify-between hover-lift hover:shadow-primary-500/10 transition-all duration-500 border border-gray-100 group min-h-[280px]"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center shadow-sm text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 mb-8 md:mb-0">
               <Zap className="w-8 h-8" />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-primary-600 transition-colors">Modern Tech</h3>
               <p className="text-gray-500 leading-relaxed">Cutting-edge Cath Labs, 128 Slice CT, 3 Tesla MRI, and 4D Ultrasound technology.</p>
            </div>
          </motion.div>

          {/* Card 4: Clinical Excellence (Wide) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-primary-900 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl group min-h-[320px] transform transition-transform hover:-translate-y-2 duration-500"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
             <div className="absolute right-0 top-0 w-[60%] h-full bg-gradient-to-l from-black/20 to-transparent z-0" />
             
             <div className="relative z-10 flex flex-col md:flex-row items-center h-full gap-10">
                <div className="flex-1">
                   <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 mb-8">
                      <Award className="w-8 h-8 text-primary-200" />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Clinical Outcomes</h3>
                   <p className="text-primary-100/80 text-lg leading-relaxed font-light">
                      Our commitment to medical ethics and quality is reflected in our NABH accreditation and high patient recovery rates.
                   </p>
                </div>
                
                <div className="hidden lg:flex w-56 h-56 bg-white/5 backdrop-blur-xl rounded-[2.5rem] items-center justify-center border border-white/10 shadow-2xl shrink-0 group-hover:scale-105 transition-transform duration-500">
                   <div className="text-center">
                      <p className="text-6xl font-bold text-white mb-2 tracking-tighter"><CountUp to={50} />+</p>
                      <p className="text-primary-200 text-sm font-bold uppercase tracking-widest">Top Specialists</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
