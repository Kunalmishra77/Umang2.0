import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Brain, Bone, Activity, Stethoscope, Microscope, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

// Data Structure
const categories = [
  { id: 'cardiac', name: 'Cardiac Sciences', icon: Heart },
  { id: 'neuro', name: 'Neuro Sciences', icon: Brain },
  { id: 'ortho', name: 'Orthopaedics', icon: Bone },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity },
  { id: 'surgery', name: 'General Surgery', icon: Stethoscope },
  { id: 'internal', name: 'Internal Medicine', icon: Microscope },
];

const services = {
  cardiac: [
    { title: 'Interventional Cardiology', desc: 'Minimally invasive catheter-based treatment for heart diseases.', img: ASSETS.CARDIAC },
    { title: 'Cardiothoracic Surgery', desc: 'Complex surgical procedures of the heart, lungs, and chest.', img: ASSETS.HEART_TRANSPLANT },
    { title: 'Electrophysiology', desc: 'Diagnosis and treatment of heart rhythm disorders.', img: ASSETS.CARDIAC },
  ],
  neuro: [
    { title: 'Neuro Surgery', desc: 'Advanced surgical care for brain and spine disorders.', img: ASSETS.NEURO },
    { title: 'Neurology', desc: 'Comprehensive management of neurological conditions.', img: ASSETS.NEURO },
    { title: 'Stroke Care', desc: '24/7 rapid response for acute stroke management.', img: ASSETS.ICU },
  ],
  ortho: [
    { title: 'Joint Replacement', desc: 'Total knee and hip replacement using robotic precision.', img: ASSETS.ORTHO_KNEE },
    { title: 'Sports Medicine', desc: 'Treatment for sports-related injuries and rehabilitation.', img: ASSETS.ORTHO },
    { title: 'Trauma Surgery', desc: 'Emergency surgical care for fractures and dislocations.', img: ASSETS.ORTHO },
  ],
  gastro: [
    { title: 'Medical Gastroenterology', desc: 'Diagnosis and treatment of digestive tract and liver disorders.', img: ASSETS.GASTRO },
    { title: 'Surgical Gastroenterology', desc: 'Advanced surgical interventions for complex GI conditions.', img: ASSETS.SURGERY_TEAM },
    { title: 'Hepatology', desc: 'Specialized care for liver, gallbladder, and pancreas diseases.', img: ASSETS.GASTRO },
  ],
  surgery: [
    { title: 'Laparoscopic Surgery', desc: 'Minimally invasive surgery for faster recovery and less pain.', img: ASSETS.ROBOTIC_SURGERY },
    { title: 'General Surgery', desc: 'Comprehensive surgical care for a wide range of conditions.', img: ASSETS.OT },
    { title: 'Bariatric Surgery', desc: 'Weight loss surgery for obesity and metabolic disorders.', img: ASSETS.OT },
  ],
  internal: [
    { title: 'General Medicine', desc: 'Comprehensive care for adult health and common illnesses.', img: ASSETS.CONSULTATION },
    { title: 'Infectious Diseases', desc: 'Diagnosis and management of complex infections.', img: ASSETS.LAB },
    { title: 'Geriatrics', desc: 'Specialized healthcare for the elderly population.', img: ASSETS.GERIATRICS },
  ]
};

const Specialities = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('cardiac');

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Centres of Excellence | Umang Superspeciality Hospital</title>
        <meta name="description" content="Explore our specialized centres of excellence for Cardiac, Neuro, Orthopaedics and more." />
      </Helmet>

      {/* 1. Page Header */}
      <section className="bg-[#0f172a] pt-20 pb-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
         <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Centres of Excellence</h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
               Combining specialized medical expertise with cutting-edge technology to deliver superior clinical outcomes.
            </p>
         </div>
      </section>

      {/* 2. Main Layout (Sidebar + Grid) */}
      <section className="py-16">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12">
               
               {/* Left: Sticky Sidebar */}
               <div className="lg:w-1/4">
                  <div className="sticky top-28 space-y-2 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                     <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 py-2 mb-2">Departments</h3>
                     {categories.map((cat) => (
                        <button
                           key={cat.id}
                           onClick={() => setActiveCategory(cat.id)}
                           className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
                              activeCategory === cat.id 
                                ? 'bg-[#005580] text-white shadow-lg shadow-blue-900/20' 
                                : 'hover:bg-blue-50 text-gray-600 hover:text-[#005580]'
                           }`}
                        >
                           <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? 'text-white' : 'text-gray-400 group-hover:text-[#005580]'}`} />
                           <span className="font-bold text-sm text-left">{cat.name}</span>
                           {activeCategory === cat.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Right: Dynamic Service Cards */}
               <div className="lg:w-3/4 min-h-[600px]">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 gap-6"
                     >
                        {(services[activeCategory] || []).map((service, idx) => (
                           <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="group bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
                           >
                              {/* Image Container */}
                              <div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-6">
                                 <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                 <div className="absolute bottom-4 left-4">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white">
                                       <ShieldCheck className="w-5 h-5" />
                                    </div>
                                 </div>
                              </div>

                              {/* Content */}
                              <div className="px-4 pb-4">
                                 <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#005580] transition-colors">{service.title}</h3>
                                 <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                    {service.desc}
                                 </p>
                                 
                                 <Link 
                                    to={`/specialities/${activeCategory}`} 
                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#005580] hover:gap-3 transition-all"
                                 >
                                    Know More <ArrowRight className="w-4 h-4" />
                                 </Link>
                              </div>
                           </motion.div>
                        ))}
                        
                        {/* Empty State / CTA Card */}
                        <div className="bg-blue-50 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-blue-200">
                           <h3 className="text-xl font-bold text-[#005580] mb-2">Need Help?</h3>
                           <p className="text-sm text-gray-600 mb-6">Our experts are here to guide you.</p>
                           <Link to="/contact" className="px-6 py-3 bg-[#005580] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all">
                              Contact Support
                           </Link>
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};

export default Specialities;
