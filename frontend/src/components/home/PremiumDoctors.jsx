import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ChevronRight, Award, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';
import { siteConfig } from '../../config/siteConfig';
import CountUp from '../../components/common/CountUp';

const PremiumDoctors = () => {
  const spotlightDoctors = doctors;
  const [activeDoc, setActiveDoc] = useState(spotlightDoctors[0]);
  const spotlightRef = useRef(null);

  const handleDocSelect = (doc) => {
    setActiveDoc(doc);
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-primary-600/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[200px] lg:w-[600px] h-[200px] lg:h-[600px] bg-cyan-600/10 rounded-full blur-[60px] lg:blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-10 lg:mb-14 gap-8 text-center lg:text-left">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-3xl"
           >
             <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <span className="w-16 h-[3px] bg-primary-500 rounded-full" />
                <span className="text-primary-400 font-black uppercase tracking-[0.4em] text-[13px] lg:text-[15px]">Elite Medical Faculty</span>
             </div>
             <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-2">
               World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400 normal">Specialists</span>
             </h2>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <Link to="/doctors" className="group flex items-center gap-3 sm:gap-5 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-[13px] font-bold text-white hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-sm uppercase tracking-widest shadow-xl">
                Explore <CountUp to={parseInt(siteConfig.stats.superspecialists)} />+ Specialists <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
             </Link>
           </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start" ref={spotlightRef}>
           
           {/* Interactive Selection Area - Shows 5, Scroll for more */}
           <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="flex flex-col gap-3 max-h-[450px] lg:max-h-[600px] overflow-y-auto no-scrollbar pr-1">
                {spotlightDoctors.map((doc) => (
                   <motion.div 
                      key={doc.id} 
                      onClick={() => handleDocSelect(doc)}
                      whileHover={{ x: 8 }}
                      className={`p-4 lg:p-5 rounded-xl lg:rounded-2xl cursor-pointer transition-all duration-300 flex items-center gap-5 border shrink-0 ${
                         activeDoc.id === doc.id 
                         ? 'bg-primary-600/20 border-primary-500/50 shadow-2xl backdrop-blur-md' 
                         : 'bg-white/5 border-transparent hover:bg-white/10'
                      }`}>
                      <div className="relative shrink-0">
                         <img 
                           src={doc.image} 
                           alt={doc.name} 
                           className={`w-14 h-14 lg:w-20 lg:h-20 rounded-xl object-cover aspect-square transition-all duration-500 ${activeDoc.id === doc.id ? 'ring-4 ring-primary-400/50 scale-105' : 'opacity-60 grayscale-[0.3]'}`} 
                         />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className={`text-base lg:text-lg font-bold truncate ${activeDoc.id === doc.id ? 'text-white' : 'text-gray-300'}`}>{doc.name}</h4>
                         <p className="text-[11px] text-primary-400 font-black uppercase tracking-widest truncate">{doc.dept}</p>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeDoc.id === doc.id ? 'text-primary-400 translate-x-1' : 'text-gray-700'}`} />
                   </motion.div>
                ))}
              </div>
           </div>

           {/* Spotlight Display Area */}
           <div className="lg:col-span-7 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                 <motion.div
                    key={activeDoc.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-[350px] xs:h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10 bg-[#1e293b]"
                 >
                    <img 
                      src={activeDoc.image} 
                      alt={activeDoc.name} 
                      className="w-full h-full object-cover object-top opacity-80 transition-transform duration-[2s] group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-5 left-5">
                       <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
                          <Award className="w-3 h-3 text-yellow-400" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Board Certified</span>
                       </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
                       <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                       >
                          <div className="flex items-center gap-2 mb-2">
                             <span className="px-2.5 py-0.5 rounded-full bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest">
                                {activeDoc.dept}
                             </span>
                             <div className="flex items-center gap-1 text-yellow-400 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                                <Star className="w-2.5 h-2.5 fill-current" /> <span className="font-bold text-[11px]">{activeDoc.rating}</span>
                             </div>
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-1 tracking-tight leading-tight">{activeDoc.name}</h3>
                          <p className="text-primary-100 text-[11px] sm:text-[12px] lg:text-[1.1rem] mb-4 sm:mb-5 lg:mb-6 font-light normal leading-relaxed max-w-lg line-clamp-2">{activeDoc.role}</p>

                          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                             <Link
                               to={`/booking/${activeDoc.id}`}
                               className="px-5 sm:px-7 py-3 sm:py-4 bg-white text-brand-dark rounded-xl lg:rounded-full font-bold text-[11px] sm:text-[12px] lg:text-[1rem] shadow-2xl hover:bg-primary-50 hover:scale-105 transition-all flex items-center justify-center gap-2 sm:gap-3"
                             >
                                Instant Appointment <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                             </Link>
                             <Link
                               to={`/doctor/${activeDoc.id}`}
                               className="px-5 sm:px-7 py-3 sm:py-4 rounded-xl lg:rounded-full border-2 border-white/20 text-white font-bold text-[11px] sm:text-[12px] lg:text-[1rem] backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all text-center flex items-center justify-center gap-2 sm:gap-3"
                             >
                                <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Full Profile
                             </Link>
                          </div>
                       </motion.div>
                    </div>
                 </motion.div>
              </AnimatePresence>
           </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumDoctors;
