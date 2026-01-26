import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';

const PremiumDoctors = () => {
  // Performance: Only render top 8 for Home spotlight
  const spotlightDoctors = doctors.slice(0, 8);
  const [activeDoc, setActiveDoc] = useState(spotlightDoctors[0]);

  return (
    <section className="py-20 bg-[#0f172a] relative overflow-hidden">
      {/* Background Decor - Optimized Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="max-w-2xl">
             <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">Medical Excellence</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
               Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Specialists</span>
             </h2>
           </div>
           <Link to="/doctors" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 text-xs font-bold text-white hover:bg-white hover:text-[#0f172a] transition-all">
              View Directory <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
           {/* Stage Area */}
           <div className="lg:col-span-7 relative h-[400px] lg:h-full">
              <AnimatePresence mode="wait">
                 <motion.div
                    key={activeDoc.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 bg-[#1e293b]"
                 >
                    <img 
                      src={activeDoc.image} 
                      alt={activeDoc.name} 
                      loading="eager"
                      className="w-full h-full object-cover object-top" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />
                    
                    <div className="absolute top-6 left-6 z-10">
                       <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                          Featured Specialist
                       </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                       <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider border border-blue-500/30">
                             {activeDoc.dept}
                          </span>
                          <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
                             <Star className="w-3 h-3 fill-current" /> {activeDoc.rating}
                          </div>
                       </div>
                       
                       <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">{activeDoc.name}</h3>
                       <p className="text-blue-200/80 text-sm mb-6 uppercase tracking-widest font-bold">{activeDoc.role}</p>

                       <div className="flex gap-4">
                          <Link to={`/booking/${activeDoc.id}`} className="px-6 py-3 bg-white text-[#0f172a] rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                             Book Appointment
                          </Link>
                          <Link to={`/doctor/${activeDoc.id}`} className="px-6 py-3 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all">
                             View Profile
                          </Link>
                       </div>
                    </div>
                 </motion.div>
              </AnimatePresence>
           </div>

           {/* List Area */}
           <div className="lg:col-span-5 flex flex-col h-[350px] lg:h-full">
              <div className="flex-1 overflow-y-auto pr-2 space-y-2 no-scrollbar">
                 {spotlightDoctors.map((doc) => (
                    <motion.div 
                       key={doc.id} 
                       onMouseEnter={() => setActiveDoc(doc)}
                       onClick={() => setActiveDoc(doc)}
                       className={`p-3 rounded-2xl cursor-pointer transition-all duration-300 flex items-center gap-4 group border ${
                          activeDoc.id === doc.id ? 'bg-white/10 border-blue-500/30 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/5'
                       }`}>
                       <img 
                         src={doc.image} 
                         alt={doc.name} 
                         loading="lazy"
                         className={`w-12 h-12 rounded-xl object-cover ${activeDoc.id === doc.id ? 'ring-2 ring-blue-500' : 'opacity-60'}`} 
                       />
                       <div className="flex-1">
                          <h4 className={`text-sm font-bold ${activeDoc.id === doc.id ? 'text-white' : 'text-gray-400'}`}>{doc.name}</h4>
                          <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">{doc.dept}</p>
                       </div>
                       <ChevronRight className={`w-4 h-4 ${activeDoc.id === doc.id ? 'text-white' : 'text-gray-700'}`} />
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumDoctors;
