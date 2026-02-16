import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Brain, Bone, Activity, Stethoscope, Microscope, ChevronRight, ArrowRight, ShieldCheck, Wind, Zap, Scissors, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

// Data Structure
const categories = [
  { id: 'cardiac', name: 'Cardiac Sciences', icon: Heart },
  { id: 'neuro', name: 'Neuro Sciences', icon: Brain },
  { id: 'ortho', name: 'Orthopaedics', icon: Bone },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity },
  { id: 'pulmonology', name: 'Pulmonology', icon: Wind },
  { id: 'urology', name: 'Urology', icon: Zap },
  { id: 'surgery', name: 'General Surgery', icon: Scissors },
  { id: 'oncology', name: 'Oncology', icon: ShieldCheck },
  { id: 'internal', name: 'Internal Medicine', icon: Stethoscope },
];

const services = {
  cardiac: [
    { title: 'Interventional Cardiology', desc: 'Minimally invasive catheter-based treatment for heart diseases.', img: ASSETS.SVC_INTERVENTIONAL_CARDIOLOGY },
    { title: 'Cardiothoracic Surgery', desc: 'Complex surgical procedures of the heart, lungs, and chest.', img: ASSETS.SVC_CARDIOTHORACIC_SURGERY },
    { title: 'Electrophysiology', desc: 'Diagnosis and treatment of heart rhythm disorders.', img: ASSETS.SVC_ELECTROPHYSIOLOGY },
  ],
  neuro: [
    { title: 'Neuro Surgery', desc: 'Advanced surgical care for brain and spine disorders.', img: ASSETS.SVC_NEURO_SURGERY },
    { title: 'Neurology', desc: 'Comprehensive management of neurological conditions.', img: ASSETS.SVC_NEUROLOGY },
    { title: 'Stroke Care', desc: '24/7 rapid response for acute stroke management.', img: ASSETS.SVC_STROKE_CARE },
  ],
  ortho: [
    { title: 'Joint Replacement', desc: 'Total knee and hip replacement using robotic precision.', img: ASSETS.SVC_JOINT_REPLACEMENT },
    { title: 'Sports Medicine', desc: 'Treatment for sports-related injuries and rehabilitation.', img: ASSETS.SVC_SPORTS_MEDICINE },
    { title: 'Trauma Surgery', desc: 'Emergency surgical care for fractures and dislocations.', img: ASSETS.SVC_TRAUMA_SURGERY },
  ],
  gastro: [
    { title: 'Medical Gastroenterology', desc: 'Diagnosis and treatment of digestive tract and liver disorders.', img: ASSETS.SVC_MEDICAL_GASTRO },
    { title: 'Surgical Gastroenterology', desc: 'Advanced surgical interventions for complex GI conditions.', img: ASSETS.SVC_SURGICAL_GASTRO },
    { title: 'Hepatology', desc: 'Specialized care for liver, gallbladder, and pancreas diseases.', img: ASSETS.SVC_HEPATOLOGY },
  ],
  pulmonology: [
    { title: 'Respiratory Medicine', desc: 'Expert care for asthma, COPD, and lung infections.', img: ASSETS.PULMONOLOGY },
    { title: 'Sleep Medicine', desc: 'Diagnosis and treatment of sleep apnea and snoring.', img: ASSETS.SLEEP_STUDY },
    { title: 'Critical Care Pulmonology', desc: 'Advanced respiratory support for ICU patients.', img: ASSETS.ABOUT_ICU },
  ],
  urology: [
    { title: 'Endourology', desc: 'Laser treatment for kidney stones and prostate issues.', img: ASSETS.UROLOGY },
    { title: 'Uro-Oncology', desc: 'Specialized care for kidney, bladder, and prostate cancers.', img: ASSETS.SVC_LAPAROSCOPIC_SURGERY },
    { title: 'Andrology', desc: 'Comprehensive treatment for male reproductive health.', img: ASSETS.CONSULTATION },
  ],
  surgery: [
    { title: 'Laparoscopic Surgery', desc: 'Minimally invasive surgery for faster recovery and less pain.', img: ASSETS.SVC_LAPAROSCOPIC_SURGERY },
    { title: 'General Surgery', desc: 'Comprehensive surgical care for a wide range of conditions.', img: ASSETS.SVC_GENERAL_SURGERY },
    { title: 'Bariatric Surgery', desc: 'Weight loss surgery for obesity and metabolic disorders.', img: ASSETS.SVC_BARIATRIC_SURGERY },
  ],
  oncology: [
    { title: 'Medical Oncology', desc: 'Advanced chemotherapy and targeted cancer therapies.', img: ASSETS.RADIOLOGY },
    { title: 'Surgical Oncology', desc: 'Precision surgical removal of tumors and cancerous tissues.', img: ASSETS.SVC_GENERAL_SURGERY },
    { title: 'Preventive Oncology', desc: 'Early detection and cancer screening programs.', img: ASSETS.HEALTH_CHECKUP },
  ],
  internal: [
    { title: 'General Medicine', desc: 'Comprehensive care for adult health and common illnesses.', img: ASSETS.SVC_GENERAL_MEDICINE },
    { title: 'Infectious Diseases', desc: 'Diagnosis and management of complex infections.', img: ASSETS.SVC_INFECTIOUS_DISEASES },
    { title: 'Geriatrics', desc: 'Specialized healthcare for the elderly population.', img: ASSETS.SVC_GERIATRICS },
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
      <section className="bg-[#0f172a] pt-24 pb-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
         <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 tracking-tight">Centres of Excellence</h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
               Combining specialized medical expertise with cutting-edge technology to deliver superior clinical outcomes across all major healthcare domains.
            </p>
         </div>
      </section>

      {/* 2. Main Layout (Sidebar + Grid) */}
      <section className="py-16 lg:py-20">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
               
               {/* Left: Sticky Sidebar */}
               <div className="lg:w-1/4">
                  <div className="sticky top-32 space-y-3 bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100">
                     <h3 className="text-xs lg:text-sm font-black text-gray-400 uppercase tracking-[0.2em] px-4 py-2 mb-4 border-b border-gray-50">Clinical Departments</h3>
                     {categories.map((cat) => (
                        <button
                           key={cat.id}
                           onClick={() => setActiveCategory(cat.id)}
                           className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                              activeCategory === cat.id 
                                ? 'bg-[#005580] text-white shadow-lg shadow-blue-900/20' 
                                : 'hover:bg-blue-50 text-gray-600 hover:text-[#005580]'
                           }`}
                        >
                           <cat.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${activeCategory === cat.id ? 'text-white' : 'text-gray-400 group-hover:text-[#005580]'}`} />
                           <span className="font-bold text-base lg:text-lg text-left">{cat.name}</span>
                           {activeCategory === cat.id && <ChevronRight className="w-5 h-5 ml-auto" />}
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
                        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                     >
                        {(services[activeCategory] || []).map((service, idx) => (
                           <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ y: -8 }}
                              className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col"
                           >
                              <Link to={`/specialities/${activeCategory}`} className="flex flex-col h-full">
                                 {/* Image Container */}
                                 <div className="relative h-48 overflow-hidden shrink-0">
                                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                 </div>

                                 {/* Content */}
                                 <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg lg:text-xl font-serif font-bold text-[#0f172a] mb-3 group-hover:text-[#005580] transition-colors leading-tight">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                       {service.desc}
                                    </p>
                                    
                                    <div className="mt-auto flex items-center gap-2 text-xs font-black text-[#005580] group-hover:gap-3 transition-all uppercase tracking-widest">
                                       <span>Learn More</span> <ArrowRight className="w-4 h-4" />
                                    </div>
                                 </div>
                              </Link>
                           </motion.div>
                        ))}
                        
                        {/* Empty State / CTA Card */}
                        <div className="bg-blue-50/50 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-blue-100 group hover:bg-white hover:border-solid hover:border-[#005580] transition-all duration-500">
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#005580] mb-4 shadow-md group-hover:scale-110 transition-transform">
                              <HelpCircle className="w-6 h-6" />
                           </div>
                           <h4 className="text-lg font-bold text-[#005580] mb-2">Need Assistance?</h4>
                           <p className="text-xs text-gray-500 mb-6 leading-relaxed">Our medical coordinators are here to help you.</p>
                           <Link to="/contact" className="w-full py-3 bg-[#005580] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-widest">
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
