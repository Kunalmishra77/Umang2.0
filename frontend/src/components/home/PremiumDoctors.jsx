import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';

const PremiumDoctors = () => {
  const spotlightDoctors = doctors.slice(0, 8);
  const [activeDoc, setActiveDoc] = useState(spotlightDoctors[0]);
  const spotlightRef = useRef(null);

  const handleDocSelect = (doc) => {
    setActiveDoc(doc);
    if (window.innerWidth < 1024) {
      spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={spotlightRef} className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 gap-8">
           <div className="max-w-3xl">
             <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-blue-500" />
                <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">Elite Medical Faculty</span>
             </div>
             <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight">
               World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Specialists</span>
             </h2>
             <p className="text-gray-400 text-lg md:text-xl mt-6 font-light max-w-xl">
               Our doctors are pioneers in their fields, bringing international expertise and compassionate care to Gurugram.
             </p>
           </div>
           <Link to="/doctors" className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white hover:text-[#0f172a] transition-all duration-500">
              Explore All 100+ Doctors <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
           
           {/* Interactive List Area - Desktop Left */}
           <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-3 max-h-[500px] lg:max-h-[700px] overflow-y-auto pr-2 lg:pr-4 no-scrollbar">
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2 lg:hidden">Select a doctor to view details:</p>
              {spotlightDoctors.map((doc) => (
                 <motion.div 
                    key={doc.id} 
                    onClick={() => handleDocSelect(doc)}
                    className={`p-4 lg:p-5 rounded-3xl cursor-pointer transition-all duration-500 flex items-center gap-4 lg:gap-5 border-2 ${
                       activeDoc.id === doc.id 
                       ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                       : 'bg-white/5 border-transparent hover:bg-white/10'
                    }`}>
                    <div className="relative shrink-0">
                       <img 
                         src={doc.image} 
                         alt={doc.name} 
                         className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl object-cover transition-transform duration-500 ${activeDoc.id === doc.id ? 'scale-110' : 'opacity-40 grayscale group-hover:grayscale-0'}`} 
                       />
                    </div>
                    <div className="flex-1 min-w-0">
                       <h4 className={`text-base lg:text-lg font-bold truncate ${activeDoc.id === doc.id ? 'text-white' : 'text-gray-400'}`}>{doc.name}</h4>
                       <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider truncate mt-1">{doc.dept}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform duration-500 ${activeDoc.id === doc.id ? 'text-white translate-x-2' : 'text-gray-700'}`} />
                 </motion.div>
              ))}
           </div>

           {/* Spotlight Display Area - Desktop Right */}
           <div className="lg:col-span-8 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                 <motion.div
                    key={activeDoc.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 bg-[#1e293b]"
                 >
                    <img 
                      src={activeDoc.image} 
                      alt={activeDoc.name} 
                      className="w-full h-full object-cover object-top opacity-80" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/60 via-transparent to-transparent hidden lg:block" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-6 lg:top-10 left-6 lg:left-10 flex flex-col gap-3 lg:gap-4">
                       <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 lg:gap-3 px-4 lg:px-5 py-2 lg:py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl lg:rounded-2xl text-white shadow-2xl"
                       >
                          <Award className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" />
                          <span className="text-[8px] lg:text-xs font-bold uppercase tracking-widest">Board Certified</span>
                       </motion.div>
                       <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2 lg:gap-3 px-4 lg:px-5 py-2 lg:py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl lg:rounded-2xl text-white shadow-2xl"
                       >
                          <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-green-400" />
                          <span className="text-[8px] lg:text-xs font-bold uppercase tracking-widest">Verified Expert</span>
                       </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
                       <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                       >
                          <div className="flex items-center flex-wrap gap-3 lg:gap-4 mb-4 lg:mb-6">
                             <span className="px-4 lg:px-5 py-1.5 lg:py-2 rounded-full bg-blue-600 text-white text-[10px] lg:text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-600/20">
                                {activeDoc.dept}
                             </span>
                             <div className="flex items-center gap-2 text-yellow-400 bg-white/10 backdrop-blur-md px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-white/10">
                                <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-current" /> <span className="font-bold text-xs lg:text-base">{activeDoc.rating} / 5.0</span>
                             </div>
                          </div>
                          
                          <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-2 lg:mb-3 tracking-tight">{activeDoc.name}</h3>
                          <p className="text-blue-300 text-base md:text-xl lg:text-2xl mb-8 lg:mb-10 font-light italic leading-relaxed max-w-2xl">{activeDoc.role}</p>

                          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
                             <Link 
                               to={`/booking/${activeDoc.id}`} 
                               className="px-8 lg:px-10 py-4 lg:py-5 bg-white text-[#0f172a] rounded-2xl font-black text-base lg:text-lg shadow-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3"
                             >
                                Instant Appointment <ArrowRight className="w-5 h-5" />
                             </Link>
                             <Link 
                               to={`/doctor/${activeDoc.id}`} 
                               className="px-8 lg:px-10 py-4 lg:py-5 rounded-2xl border-2 border-white/20 text-white font-black text-base lg:text-lg backdrop-blur-md hover:bg-white/10 transition-all text-center"
                             >
                                Full Biography
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