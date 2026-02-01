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
      spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={spotlightRef} className="py-16 lg:py-24 bg-brand-dark relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-3xl"
           >
             <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[2px] bg-primary-500" />
                <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-xs">Elite Medical Faculty</span>
             </div>
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
               World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400 italic">Specialists</span>
             </h2>
             <p className="text-gray-400 text-lg md:text-xl mt-6 font-light max-w-xl leading-relaxed">
               Our doctors are pioneers in their fields, bringing international expertise and compassionate care to every patient interaction.
             </p>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <Link to="/doctors" className="group flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-sm">
                Explore All <CountUp to={100} />+ Doctors <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
             </Link>
           </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
           
           {/* Interactive List Area - Desktop Left */}
           <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-3 max-h-[500px] lg:max-h-[700px] overflow-y-auto pr-2 lg:pr-4 no-scrollbar">
              <p className="text-primary-400 text-[10px] font-bold uppercase tracking-widest mb-2 lg:hidden">Select a doctor to view details:</p>
              {spotlightDoctors.map((doc) => (
                 <motion.div 
                    key={doc.id} 
                    onClick={() => handleDocSelect(doc)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 lg:p-5 rounded-[2rem] cursor-pointer transition-all duration-300 flex items-center gap-4 lg:gap-5 border ${
                       activeDoc.id === doc.id 
                       ? 'bg-primary-600/10 border-primary-500/50 shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] backdrop-blur-sm' 
                       : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
                    }`}>
                    <div className="relative shrink-0">
                       <img 
                         src={doc.image} 
                         alt={doc.name} 
                         className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl object-cover transition-all duration-500 ${activeDoc.id === doc.id ? 'ring-2 ring-primary-400 scale-105' : 'opacity-60 grayscale group-hover:grayscale-0'}`} 
                       />
                       {activeDoc.id === doc.id && (
                          <motion.div layoutId="activeIndicator" className="absolute -right-1 -top-1 w-4 h-4 bg-primary-500 rounded-full border-2 border-brand-dark" />
                       )}
                    </div>
                    <div className="flex-1 min-w-0">
                       <h4 className={`text-base lg:text-lg font-bold truncate transition-colors duration-300 ${activeDoc.id === doc.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{doc.name}</h4>
                       <p className="text-xs text-primary-400/80 font-bold uppercase tracking-wider truncate mt-1">{doc.dept}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform duration-300 ${activeDoc.id === doc.id ? 'text-primary-400 translate-x-1' : 'text-gray-700'}`} />
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
                    className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-[#1e293b] group"
                 >
                    <img 
                      src={activeDoc.image} 
                      alt={activeDoc.name} 
                      className="w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-[2s]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent hidden lg:block" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-8 left-8 flex flex-col gap-3">
                       <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-xl"
                       >
                          <Award className="w-4 h-4 text-yellow-400" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Board Certified</span>
                       </motion.div>
                       <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-xl"
                       >
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Verified Expert</span>
                       </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12">
                       <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                       >
                          <div className="flex items-center flex-wrap gap-4 mb-6">
                             <span className="px-5 py-2 rounded-full bg-primary-600 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary-600/30">
                                {activeDoc.dept}
                             </span>
                             <div className="flex items-center gap-2 text-yellow-400 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                <Star className="w-4 h-4 fill-current" /> <span className="font-bold">{activeDoc.rating} / 5.0</span>
                             </div>
                          </div>
                          
                          <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 tracking-tight leading-none">{activeDoc.name}</h3>
                          <p className="text-primary-200 text-lg md:text-xl lg:text-2xl mb-10 font-light italic leading-relaxed max-w-2xl">{activeDoc.role}</p>

                          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                             <Link 
                               to={`/booking/${activeDoc.id}`} 
                               className="px-8 py-5 bg-white text-brand-dark rounded-full font-bold text-lg shadow-xl hover:bg-primary-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                             >
                                Instant Appointment <ArrowRight className="w-5 h-5" />
                             </Link>
                             <Link 
                               to={`/doctor/${activeDoc.id}`} 
                               className="px-8 py-5 rounded-full border border-white/30 text-white font-bold text-lg backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition-all text-center flex items-center justify-center gap-2"
                             >
                                <Stethoscope className="w-5 h-5" />
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
