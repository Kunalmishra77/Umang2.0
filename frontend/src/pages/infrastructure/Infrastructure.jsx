import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X, Maximize2, Info, CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';

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
    img: ASSETS.OT,
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
    img: ASSETS.MRI_SCAN,
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
    img: ASSETS.ICU,
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
    img: ASSETS.CT_SCAN,
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
    <div 
      ref={containerRef} 
      className="bg-white min-h-screen font-sans relative"
      style={{ position: 'relative' }}
    >
      <Helmet>
        <title>Infrastructure | Umang Superspeciality Hospital</title>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative h-[80vh] lg:h-[90vh] min-h-[600px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <ParallaxImage 
            src={ASSETS.OT} 
            alt="Hero" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            offset={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center pt-20 lg:pt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-6 lg:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-primary-200 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-6 lg:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              World Class Facility
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-[9rem] font-serif font-bold text-white mb-6 lg:mb-8 leading-[1.1] lg:leading-[0.9] tracking-tighter">
              Medical <br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-primary-200">Excellence</span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-100/80 max-w-2xl mx-auto mb-10 lg:mb-12 font-light leading-relaxed px-4 lg:px-0">
              Experience a hospital designed around the patient. From advanced modular OTs to luxury recovery suites.
            </p>
            
            <div className="flex justify-center gap-6">
               <button onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })} className="h-12 lg:h-14 px-6 lg:px-8 rounded-full bg-white text-brand-dark font-bold text-xs lg:text-sm hover:bg-primary-50 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
                  Explore Facilities <ChevronDown className="w-4 h-4" />
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Hotspot Section */}
      <section className="py-12 lg:py-10 bg-white overflow-hidden relative">
         <div className="container-custom">
            <div className="text-center mb-12 lg:mb-16">
               <span className="section-subtitle">Precision Engineering</span>
               <h2 className="section-title">Technological <span className="text-primary-600">Mastery</span></h2>
               <p className="text-gray-500 text-base lg:text-lg px-4">Tap on the markers to explore our advanced OT technology.</p>
            </div>

            <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[600px] group border-4 border-white bg-gray-100">
               <ParallaxImage 
                  src={ASSETS.OT} 
                  containerClassName="w-full h-full"
                  className="transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-110" 
                  alt="OT" 
                  offset={50}
               />
               <div className="absolute inset-0 bg-brand-dark/20" />

               {hotspots.map((spot) => (
                  <div 
                     key={spot.id}
                     className="absolute"
                     style={{ top: spot.y, left: spot.x }}
                     onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                     onMouseEnter={() => setActiveHotspot(spot.id)}
                     onMouseLeave={() => setActiveHotspot(null)}
                  >
                     <div className="relative cursor-pointer">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary-500/50 animate-ping absolute inset-0" />
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border-2 lg:border-4 border-primary-500 relative z-10 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                           <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-primary-500" />
                        </div>
                     </div>

                     {/* Tooltip */}
                     <AnimatePresence>
                        {activeHotspot === spot.id && (
                           <motion.div
                              initial={{ opacity: 0, y: 15, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 15, scale: 0.9 }}
                              className="absolute top-12 lg:top-14 left-1/2 -translate-x-1/2 w-48 lg:w-64 bg-white/95 backdrop-blur-xl p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-2xl z-20 border border-white/20 text-center"
                           >
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-white rotate-45 border-t border-l border-white/20" />
                              <h4 className="font-bold text-brand-dark text-base lg:text-lg mb-1 lg:mb-2">{spot.title}</h4>
                              <p className="text-[10px] lg:text-sm text-gray-500 leading-relaxed">{spot.desc}</p>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Expandable Gallery (The "Click Effect") */}
      <section id="gallery" className="py-12 lg:py-10 bg-gray-50">
         <div className="container-custom">
            <span className="section-subtitle">Visual Tour</span>
            <h2 className="section-title mb-16">Infrastructure Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {facilities.map((item) => (
                  <motion.div 
                     layoutId={`card-${item.id}`}
                     key={item.id}
                     onClick={() => setSelectedId(item.id)}
                     className="bg-white rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover-lift transition-all group border border-gray-100"
                     whileHover={{ y: -8 }}
                  >
                     <motion.div layoutId={`img-container-${item.id}`} className="relative h-80 overflow-hidden">
                        <ParallaxImage src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" offset={40} />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-8 left-8">
                           <span className="text-primary-300 text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                           <h3 className="text-3xl font-serif font-bold text-white">{item.title}</h3>
                        </div>
                        <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                           <Maximize2 className="w-5 h-5" />
                        </div>
                     </motion.div>
                     <div className="p-10">
                        <p className="text-gray-500 text-lg mb-6 leading-relaxed">{item.short}</p>
                        <div className="flex items-center text-primary-600 font-bold text-sm gap-2 group-hover:gap-4 transition-all uppercase tracking-wider">
                           View Technical Specs
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
                  className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md z-[100]" 
               />
               <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                  {facilities.filter(f => f.id === selectedId).map(item => (
                     <motion.div 
                        layoutId={`card-${item.id}`}
                        key={item.id}
                        className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl pointer-events-auto relative no-scrollbar"
                     >
                        <button 
                           onClick={() => setSelectedId(null)}
                           className="absolute top-8 right-8 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
                        >
                           <X className="w-6 h-6" />
                        </button>

                        <motion.div layoutId={`img-container-${item.id}`} className="relative h-[450px] overflow-hidden">
                           <ParallaxImage src={item.img} alt={item.title} className="w-full h-full object-cover" offset={60} />
                           <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
                           <div className="absolute bottom-12 left-12">
                              <span className="text-primary-300 text-sm font-bold uppercase tracking-widest mb-3 block">{item.category}</span>
                              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-none">{item.title}</h2>
                           </div>
                        </motion.div>

                        <div className="p-10 lg:p-16 bg-white">
                           <div className="grid lg:grid-cols-2 gap-16">
                              <div>
                                 <h4 className="text-2xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                                    <Info className="w-6 h-6 text-primary-500" /> Technical Specifications
                                 </h4>
                                 <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                                    <div className="space-y-5">
                                       {item.details.specs.map((spec, i) => (
                                          <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                             <span className="text-gray-500 font-medium">{spec.label}</span>
                                             <span className="text-brand-dark font-bold text-lg">{spec.value}</span>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              </div>

                              <div>
                                 <h4 className="text-2xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" /> Key Features
                                 </h4>
                                 <ul className="space-y-5 mb-10">
                                    {item.details.features.map((feat, i) => (
                                       <li key={i} className="flex items-start gap-4">
                                          <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-1">
                                             <div className="w-2.5 h-2.5 rounded-full bg-primary-600" />
                                          </div>
                                          <span className="text-gray-600 text-lg leading-relaxed">{feat}</span>
                                       </li>
                                    ))}
                                 </ul>
                                 
                                 <div className="p-8 bg-brand-dark rounded-3xl text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16" />
                                    <h5 className="font-bold text-xl mb-3 relative z-10">Patient Safety First</h5>
                                    <p className="text-primary-100/80 text-sm mb-6 leading-relaxed relative z-10">
                                       All our facilities undergo rigorous daily sterilization protocols and regular maintenance audits.
                                    </p>
                                    <Link to="/contact" className="inline-block bg-white text-brand-dark px-8 py-4 rounded-xl text-sm font-bold hover:bg-primary-50 transition-colors relative z-10 uppercase tracking-wider">
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
