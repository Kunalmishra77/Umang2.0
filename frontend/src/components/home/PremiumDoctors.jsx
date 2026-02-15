import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ChevronRight, Award, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';
import CountUp from '../../components/common/CountUp';

const PremiumDoctors = () => {
  const spotlightDoctors = doctors.slice(0, 8);
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
    <section className="py-16 lg:py-24 bg-brand-dark relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-primary-600/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[200px] lg:w-[600px] h-[200px] lg:h-[600px] bg-cyan-600/10 rounded-full blur-[60px] lg:blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 lg:mb-20 gap-8 text-center lg:text-left">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-3xl"
           >
             <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="w-12 h-[2px] bg-primary-500" />
                <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs">Elite Medical Faculty</span>
             </div>
             <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
               World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400 italic">Specialists</span>
             </h2>
             <p className="text-gray-400 text-base md:text-xl mt-6 font-light max-w-xl leading-relaxed mx-auto lg:mx-0">
               Our doctors are pioneers in their fields, bringing international expertise and compassionate care to every interaction.
             </p>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <Link to="/doctors" className="group flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-xs lg:text-sm font-bold text-white hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-sm">
                Explore All <CountUp to={100} />+ Doctors <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
             </Link>
           </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12" ref={spotlightRef}>
           
           {/* Interactive List Area - Mobile First (stacks below on small screens) */}
           <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-3 max-h-[400px] lg:max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-primary-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 lg:hidden sticky top-0 bg-brand-dark py-2 z-10">Select a specialist:</p>
              {spotlightDoctors.map((doc) => (
                 <motion.div 
                    key={doc.id} 
                    onClick={() => handleDocSelect(doc)}
                    whileHover={{ x: 5 }}
                    className={`p-4 lg:p-5 rounded-2xl lg:rounded-[2rem] cursor-pointer transition-all duration-300 flex items-center gap-4 border ${
                       activeDoc.id === doc.id 
                       ? 'bg-primary-600/10 border-primary-500/50 shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] backdrop-blur-sm' 
                       : 'bg-white/5 border-transparent hover:bg-white/10'
                    }`}>
                    <div className="relative shrink-0">
                       <img 
                         src={doc.image} 
                         alt={doc.name} 
                         className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl object-cover transition-all duration-500 ${activeDoc.id === doc.id ? 'ring-2 ring-primary-400 scale-105' : 'opacity-60 grayscale'}`} 
                       />
                       {activeDoc.id === doc.id && (
                          <motion.div layoutId="activeIndicator" className="absolute -right-1 -top-1 w-3 h-3 lg:w-4 lg:h-4 bg-primary-500 rounded-full border-2 border-brand-dark" />
                       )}
                    </div>
                    <div className="flex-1 min-w-0">
                       <h4 className={`text-sm lg:text-lg font-bold truncate ${activeDoc.id === doc.id ? 'text-white' : 'text-gray-400'}`}>{doc.name}</h4>
                       <p className="text-[10px] text-primary-400/80 font-bold uppercase tracking-wider truncate mt-0.5">{doc.dept}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeDoc.id === doc.id ? 'text-primary-400 translate-x-1' : 'text-gray-700'}`} />
                 </motion.div>
              ))}
           </div>

           {/* Spotlight Display Area */}
           <div className="lg:col-span-8 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                 <motion.div
                    key={activeDoc.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-[#1e293b]"
                 >
                    <img 
                      src={activeDoc.image} 
                      alt={activeDoc.name} 
                      className="w-full h-full object-cover object-top opacity-70 group-hover:scale-105 transition-transform duration-[2s]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-transparent to-transparent hidden lg:block" />
                    
                    {/* Floating Badges - Repositioned for mobile */}
                    <div className="absolute top-4 lg:top-8 left-4 lg:left-8 flex flex-col gap-2 lg:gap-3">
                       <div className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-1.5 lg:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-xl">
                          <Award className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400" />
                          <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest">Board Certified</span>
                       </div>
                       <div className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-1.5 lg:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-xl">
                          <ShieldCheck className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-400" />
                          <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest">Verified Expert</span>
                       </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                       <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                       >
                          <div className="flex items-center flex-wrap gap-3 lg:gap-4 mb-4 lg:mb-6">
                             <span className="px-3 lg:px-5 py-1 lg:py-2 rounded-full bg-primary-600 text-white text-[8px] lg:text-xs font-black uppercase tracking-widest">
                                {activeDoc.dept}
                             </span>
                             <div className="flex items-center gap-1.5 lg:gap-2 text-yellow-400 bg-black/30 backdrop-blur-md px-3 lg:px-4 py-1 lg:py-2 rounded-full border border-white/10">
                                <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-current" /> <span className="font-bold text-[10px] lg:text-sm">{activeDoc.rating}</span>
                             </div>
                          </div>
                          
                          <h3 className="text-2xl md:text-4xl lg:text-7xl font-serif font-bold text-white mb-2 lg:mb-4 tracking-tight leading-none">{activeDoc.name}</h3>
                          <p className="text-primary-200 text-sm lg:text-2xl mb-6 lg:mb-10 font-light italic leading-relaxed max-w-2xl line-clamp-2 lg:line-clamp-none">{activeDoc.role}</p>

                          <div className="flex flex-col sm:flex-row gap-3 lg:gap-6">
                             <Link 
                               to={`/booking/${activeDoc.id}`} 
                               className="px-6 lg:px-8 py-3 lg:py-5 bg-white text-brand-dark rounded-xl lg:rounded-full font-bold text-xs lg:text-lg shadow-xl hover:bg-primary-50 transition-all flex items-center justify-center gap-2 lg:gap-3"
                             >
                                Instant Appointment <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                             </Link>
                             <Link 
                               to={`/doctor/${activeDoc.id}`} 
                               className="px-6 lg:px-8 py-3 lg:py-5 rounded-xl lg:rounded-full border border-white/30 text-white font-bold text-xs lg:text-lg backdrop-blur-md hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
                             >
                                <Stethoscope className="w-4 h-4 lg:w-5 lg:h-5" />
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
