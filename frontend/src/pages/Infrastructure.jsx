import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X, Maximize2, Zap, ShieldCheck, Activity, Wifi, Play, ArrowRight, Thermometer, Microscope, Info, CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Data ---
const hotspots = [
  { id: 1, x: '30%', y: '40%', title: 'Surgical Lights', desc: 'Shadowless LED lighting with integrated cameras.' },
  { id: 2, x: '50%', y: '60%', title: 'OT Table', desc: 'Electro-hydraulic table with C-Arm compatibility.' },
  { id: 3, x: '70%', y: '30%', title: 'Anesthesia', desc: 'Dräger workstations with advanced gas monitoring.' },
];

const facilities = [
  { 
    id: 'ot', 
    title: 'Modular Operation Theatres', 
    category: 'Critical Care',
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000",
    short: 'HEPA filtered air and laminar flow.',
    details: {
      specs: [
        { label: 'Air Quality', value: 'ISO Class 5 (Class 100)' },
        { label: 'Air Changes', value: '20-25 per hour' },
        { label: 'Cladding', value: 'Anti-bacterial Silver Ion' },
        { label: 'Control Panel', value: 'Touchscreen Integrated' }
      ],
      features: ['Zero-infection environment', 'Seamless anti-static flooring', 'Integrated Tele-medicine suite']
    }
  },
  { 
    id: 'mri', 
    title: '3 Tesla MRI', 
    category: 'Diagnostics',
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
    short: 'Silent Scan Technology with ambient experience.',
    details: {
      specs: [
        { label: 'Field Strength', value: '3.0 Tesla' },
        { label: 'Bore Size', value: '70cm (Wide Bore)' },
        { label: 'Software', value: 'AI-assisted Imaging' },
        { label: 'Speed', value: '50% Faster Scans' }
      ],
      features: ['Non-claustrophobic design', 'Cardiac MRI capability', 'Functional Neuro-imaging']
    }
  },
  { 
    id: 'icu', 
    title: 'Advanced ICU', 
    category: 'Critical Care',
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f037085?auto=format&fit=crop&q=80&w=2000",
    short: '1:1 Nursing ratio with advanced monitoring.',
    details: {
      specs: [
        { label: 'Beds', value: '40 Critical Care Beds' },
        { label: 'Ventilators', value: 'Invasive & Non-invasive' },
        { label: 'Monitoring', value: 'Central Station (24/7)' },
        { label: 'Dialysis', value: 'Bedside SLED Support' }
      ],
      features: ['Negative pressure isolation rooms', 'Dedicated Intensivist team', 'Crash cart readiness']
    }
  },
  { 
    id: 'ct', 
    title: '128 Slice CT Scan', 
    category: 'Diagnostics',
    img: "https://images.unsplash.com/photo-1516549655169-df83a0833860?auto=format&fit=crop&q=80&w=2000",
    short: 'Low dose radiation with cardiac imaging.',
    details: {
      specs: [
        { label: 'Slices', value: '128 per rotation' },
        { label: 'Resolution', value: '0.33mm Isotropic' },
        { label: 'Dose', value: 'ASiR Low Dose Tech' },
        { label: 'Application', value: 'Cardiac & Angio' }
      ],
      features: ['5-beat Cardiac CT', 'Whole body trauma scan', 'Pediatric protocols']
    }
  }
];

const Infrastructure = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen font-sans relative">
      <Helmet>
        <title>Infrastructure | Umang Superspeciality Hospital</title>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[800px] flex items-center justify-center overflow-hidden bg-[#023e8a]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2500" alt="Hero" className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#023e8a] via-[#023e8a]/50 to-transparent" />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              World Class Facility
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-bold text-white mb-8 leading-[0.9] tracking-tighter">
              Medical <br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">Excellence</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Experience a hospital designed around the patient. From advanced modular OTs to luxury recovery suites.
            </p>
            
            <div className="flex justify-center gap-6">
               <button onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 rounded-full bg-white text-[#023e8a] font-bold text-sm hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
                  Explore Facilities <ChevronDown className="w-4 h-4" />
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Hotspot Section */}
      <section className="py-24 bg-white overflow-hidden relative">
         <div className="container-custom">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-4">Precision Engineering</h2>
               <p className="text-gray-500">Hover over the markers to explore our OT technology.</p>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] group border-4 border-white">
               <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-110" alt="OT" />
               <div className="absolute inset-0 bg-black/20" />

               {hotspots.map((spot) => (
                  <div 
                     key={spot.id}
                     className="absolute"
                     style={{ top: spot.y, left: spot.x }}
                     onMouseEnter={() => setActiveHotspot(spot.id)}
                     onMouseLeave={() => setActiveHotspot(null)}
                  >
                     <div className="relative cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-blue-500/50 animate-ping absolute inset-0" />
                        <div className="w-8 h-8 rounded-full bg-white border-4 border-blue-500 relative z-10 flex items-center justify-center shadow-lg">
                           <div className="w-2 h-2 rounded-full bg-blue-500" />
                        </div>
                     </div>

                     {/* Tooltip */}
                     <AnimatePresence>
                        {activeHotspot === spot.id && (
                           <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.9 }}
                              className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl p-4 rounded-xl shadow-2xl z-20 border border-blue-100 text-center"
                           >
                              <h4 className="font-bold text-[#0f172a] text-sm mb-1">{spot.title}</h4>
                              <p className="text-xs text-gray-500 leading-snug">{spot.desc}</p>
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-blue-100" />
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Expandable Gallery (The "Click Effect") */}
      <section id="gallery" className="py-24 bg-slate-50">
         <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-12">Infrastructure Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {facilities.map((item) => (
                  <motion.div 
                     layoutId={`card-${item.id}`}
                     key={item.id}
                     onClick={() => setSelectedId(item.id)}
                     className="bg-white rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all group border border-gray-100"
                     whileHover={{ y: -5 }}
                  >
                     <motion.div layoutId={`img-container-${item.id}`} className="relative h-80 overflow-hidden">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-8">
                           <span className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                           <h3 className="text-3xl font-serif font-bold text-white">{item.title}</h3>
                        </div>
                        <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                           <Maximize2 className="w-5 h-5" />
                        </div>
                     </motion.div>
                     <div className="p-8">
                        <p className="text-gray-500 text-lg mb-4">{item.short}</p>
                        <div className="flex items-center text-[#005580] font-bold text-sm gap-2 group-hover:gap-4 transition-all">
                           View Technical Specs <ArrowRight className="w-4 h-4" />
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Detail Modal (The "Information" Layer) */}
      <AnimatePresence>
         {selectedId && (
            <>
               <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  onClick={() => setSelectedId(null)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" 
               />
               <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                  {facilities.filter(f => f.id === selectedId).map(item => (
                     <motion.div 
                        layoutId={`card-${item.id}`}
                        key={item.id}
                        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl pointer-events-auto relative"
                     >
                        <button 
                           onClick={() => setSelectedId(null)}
                           className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
                        >
                           <X className="w-5 h-5" />
                        </button>

                        <motion.div layoutId={`img-container-${item.id}`} className="relative h-[400px]">
                           <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-80" />
                           <div className="absolute bottom-10 left-10">
                              <span className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                              <h2 className="text-5xl font-serif font-bold text-white mb-4">{item.title}</h2>
                           </div>
                        </motion.div>

                        <div className="p-10 lg:p-14 bg-white">
                           <div className="grid lg:grid-cols-2 gap-12">
                              <div>
                                 <h4 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-blue-500" /> Technical Specifications
                                 </h4>
                                 <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                                    <div className="space-y-4">
                                       {item.details.specs.map((spec, i) => (
                                          <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                                             <span className="text-gray-500 font-medium">{spec.label}</span>
                                             <span className="text-[#0f172a] font-bold">{spec.value}</span>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              </div>

                              <div>
                                 <h4 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" /> Key Features
                                 </h4>
                                 <ul className="space-y-4">
                                    {item.details.features.map((feat, i) => (
                                       <li key={i} className="flex items-start gap-3">
                                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                             <div className="w-2 h-2 rounded-full bg-blue-500" />
                                          </div>
                                          <span className="text-gray-600 text-lg">{feat}</span>
                                       </li>
                                    ))}
                                 </ul>
                                 
                                 <div className="mt-10 p-6 bg-[#023e8a] rounded-2xl text-white">
                                    <h5 className="font-bold text-lg mb-2">Patient Safety First</h5>
                                    <p className="text-blue-100 text-sm mb-4">
                                       All our facilities undergo rigorous daily sterilization protocols and regular maintenance audits.
                                    </p>
                                    <Link to="/contact" className="inline-block bg-white text-[#023e8a] px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors">
                                       Book a Facility Tour
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </>
         )}
      </AnimatePresence>

    </div>
  );
};

export default Infrastructure;
