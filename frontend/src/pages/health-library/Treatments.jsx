import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, Stethoscope, Activity, Heart, Brain, Bone, Eye, 
  ArrowRight, CheckCircle, Calendar, DollarSign, FileText, ChevronDown, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const categories = [
  { id: 'cardio', name: 'Cardiology', icon: Heart, count: 24 },
  { id: 'ortho', name: 'Orthopedics', icon: Bone, count: 18 },
  { id: 'neuro', name: 'Neurology', icon: Brain, count: 15 },
  { id: 'onco', name: 'Oncology', icon: Activity, count: 30 },
  { id: 'ent', name: 'ENT', icon: Stethoscope, count: 12 },
  { id: 'eye', name: 'Ophthalmology', icon: Eye, count: 10 },
];

const treatments = [
  { id: 1, name: "Angioplasty", category: "Cardiology", duration: "1-2 Hours", stay: "2 Days", cost: "₹1.5L - ₹2.5L", img: ASSETS.CARDIAC },
  { id: 2, name: "Total Knee Replacement", category: "Orthopedics", duration: "2-3 Hours", stay: "4-5 Days", cost: "₹2.0L - ₹3.5L", img: ASSETS.ORTHO_KNEE },
  { id: 3, name: "Cataract Surgery", category: "Ophthalmology", duration: "30 Mins", stay: "Day Care", cost: "₹25k - ₹50k", img: ASSETS.SURGERY_TEAM },
  { id: 4, name: "MRI Scan", category: "Diagnostics", duration: "45 Mins", stay: "N/A", cost: "₹6k - ₹12k", img: ASSETS.MRI_SCAN },
  { id: 5, name: "Chemotherapy", category: "Oncology", duration: "2-4 Hours", stay: "Day Care", cost: "₹15k - ₹50k/cycle", img: ASSETS.NURSE_CARE },
  { id: 6, name: "Brain Tumor Surgery", category: "Neurology", duration: "4-6 Hours", stay: "7-10 Days", cost: "₹3.0L - ₹5.0L", img: ASSETS.NEURO },
];

const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTreatments = treatments.filter(t => 
    (activeCategory === 'All' || t.category === activeCategory) &&
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Medical Treatments & Procedures | Umang Hospital</title>
        <meta name="description" content="Explore our comprehensive list of medical treatments, surgeries, and procedures. Get details on cost, duration, and recovery." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#005580] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.SURGERY_TEAM} 
            alt="Surgery" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#005580] via-[#005580]/90 to-transparent" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-cyan-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Stethoscope className="w-4 h-4" /> Clinical Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Advanced Treatments, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Compassionate Care.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              From minimally invasive procedures to complex robotic surgeries, we offer world-class treatment options tailored to your recovery.
            </p>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl flex max-w-xl">
               <div className="flex-1 flex items-center px-4">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search procedures (e.g. Angioplasty)" 
                    className="w-full h-12 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               <button className="h-12 px-8 bg-[#005580] text-white rounded-xl font-bold hover:bg-[#004466] transition-all">
                  Search
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Browse by Specialty */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-12">Browse by Specialty</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
               {categories.map((cat, i) => (
                  <motion.button 
                     key={i}
                     whileHover={{ y: -5 }}
                     onClick={() => setActiveCategory(cat.name === activeCategory ? 'All' : cat.name)}
                     className={`p-6 rounded-3xl border transition-all text-center flex flex-col items-center gap-4 group ${activeCategory === cat.name ? 'bg-[#005580] border-[#005580] text-white shadow-xl' : 'bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:shadow-lg'}`}
                  >
                     <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${activeCategory === cat.name ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#005580] group-hover:bg-[#005580] group-hover:text-white'}`}>
                        <cat.icon className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm mb-1">{cat.name}</h4>
                        <span className={`text-xs ${activeCategory === cat.name ? 'text-blue-200' : 'text-gray-400'}`}>{cat.count} Procedures</span>
                     </div>
                  </motion.button>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Treatment Listings */}
      <section className="py-16 bg-white">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-12">
               <h2 className="text-3xl font-serif font-bold text-[#0f172a]">
                  {activeCategory === 'All' ? 'All Treatments' : `${activeCategory} Treatments`}
               </h2>
               <span className="text-gray-500 font-medium">{filteredTreatments.length} Results Found</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredTreatments.map((treatment) => (
                  <motion.div 
                     key={treatment.id}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover-lift hover:border-blue-100 transition-all duration-300 flex flex-col"
                  >
                     <div className="h-56 overflow-hidden relative">
                        <img src={treatment.img} alt={treatment.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#005580] uppercase tracking-wide">
                           {treatment.category}
                        </div>
                     </div>
                     
                     <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-[#0f172a] mb-4 group-hover:text-[#005580] transition-colors">{treatment.name}</h3>
                        
                        <div className="space-y-3 mb-8 flex-1">
                           <div className="flex items-center justify-between text-sm text-gray-600 pb-3 border-b border-gray-50">
                              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> Duration</span>
                              <span className="font-bold">{treatment.duration}</span>
                           </div>
                           <div className="flex items-center justify-between text-sm text-gray-600 pb-3 border-b border-gray-50">
                              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-green-400" /> Hospital Stay</span>
                              <span className="font-bold">{treatment.stay}</span>
                           </div>
                           <div className="flex items-center justify-between text-sm text-gray-600">
                              <span className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-orange-400" /> Est. Cost</span>
                              <span className="font-bold text-[#0f172a]">{treatment.cost}</span>
                           </div>
                        </div>

                        <Link to="/contact" className="w-full h-12 rounded-xl border-2 border-[#005580] text-[#005580] font-bold flex items-center justify-center gap-2 hover:bg-[#005580] hover:text-white transition-all">
                           Enquire Now <ArrowRight className="w-4 h-4" />
                        </Link>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Patient Education (Process) */}
      <section className="py-16 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="container-custom relative z-10">
            <h2 className="text-4xl font-serif font-bold text-center mb-20">Your Journey to Recovery</h2>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
               <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10" />
               
               {[
                  { title: "Consultation", desc: "Meet our specialist for diagnosis and treatment planning." },
                  { title: "Pre-Admission", desc: "Insurance approval and pre-operative tests clearance." },
                  { title: "Treatment", desc: "Procedure performed in our state-of-the-art OT/Cath Lab." },
                  { title: "Rehabilitation", desc: "Post-op care and physio for a complete recovery." }
               ].map((step, i) => (
                  <div key={i} className="text-center">
                     <div className="w-24 h-24 bg-[#0f172a] rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-8 relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        {i + 1}
                     </div>
                     <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                     <p className="text-gray-400 leading-relaxed px-4">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 bg-blue-50">
         <div className="container-custom max-w-4xl text-center">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Need guidance on a procedure?</h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
               Our patient counselors are here to help you understand the treatment process, costs, and insurance coverage.
            </p>
            <div className="flex justify-center gap-6">
               <Link to="/contact" className="h-16 px-10 rounded-full bg-[#005580] text-white font-bold text-lg hover:bg-[#004466] shadow-xl hover-lift hover:-translate-y-1 transition-all flex items-center gap-3">
                  <FileText className="w-5 h-5" /> Get Cost Estimate
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Treatments;
