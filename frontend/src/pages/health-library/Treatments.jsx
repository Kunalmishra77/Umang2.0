import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, Stethoscope, Activity, Heart, Brain, Bone, Eye, 
  ArrowRight, CheckCircle, Calendar, DollarSign, FileText, ChevronDown, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const categories = [
  { id: 'cardiac', name: 'Cardiology', icon: Heart, count: 6 },
  { id: 'neuro', name: 'Neurology', icon: Brain, count: 6 },
  { id: 'ortho', name: 'Orthopedics', icon: Bone, count: 6 },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity, count: 6 },
  { id: 'pulmo', name: 'Pulmonology', icon: Stethoscope, count: 6 },
  { id: 'uro', name: 'Urology', icon: CheckCircle, count: 6 },
  { id: 'nephro', name: 'Nephrology', icon: Activity, count: 6 },
  { id: 'gynae', name: 'Gynecology', icon: CheckCircle, count: 6 },
  { id: 'pain', name: 'Pain Management', icon: Activity, count: 6 },
  { id: 'physio', name: 'Physiotherapy', icon: Activity, count: 6 },
  { id: 'surgery', name: 'General Surgery', icon: Activity, count: 6 },
];

const treatments = [
  // Cardiac
  { id: 101, name: "Angiography & Angioplasty (PTCA)", category: "Cardiology", duration: "1-2 Hours", stay: "1-2 Days", cost: "₹1.5L - ₹2.5L", img: ASSETS.CARDIAC },
  { id: 102, name: "Coronary Artery Bypass Graft (CABG)", category: "Cardiology", duration: "4-6 Hours", stay: "7-10 Days", cost: "₹3.0L - ₹5.0L", img: ASSETS.CARDIAC },
  { id: 103, name: "Valve Replacement & Repair (TAVR/TAVI)", category: "Cardiology", duration: "3-4 Hours", stay: "5-7 Days", cost: "₹5.0L - ₹8.0L", img: ASSETS.CARDIAC },
  { id: 104, name: "Pacemaker & ICD Implantation", category: "Cardiology", duration: "1-2 Hours", stay: "2 Days", cost: "₹2.0L - ₹4.0L", img: ASSETS.CARDIAC },
  { id: 105, name: "Pediatric Cardiac Surgery", category: "Cardiology", duration: "3-5 Hours", stay: "7-14 Days", cost: "₹2.5L - ₹4.5L", img: ASSETS.CARDIAC },
  { id: 106, name: "Heart Failure Management", category: "Cardiology", duration: "N/A", stay: "Varies", cost: "Consultation", img: ASSETS.CARDIAC },

  // Neuro
  { id: 201, name: "Brain Tumor Excision", category: "Neurology", duration: "4-8 Hours", stay: "7-10 Days", cost: "₹3.0L - ₹6.0L", img: ASSETS.NEURO },
  { id: 202, name: "Stroke Management (Thrombolysis)", category: "Neurology", duration: "1 Hour", stay: "5-7 Days", cost: "₹1.0L - ₹2.5L", img: ASSETS.NEURO },
  { id: 203, name: "Spine Surgery (MISS)", category: "Neurology", duration: "2-4 Hours", stay: "3-5 Days", cost: "₹2.5L - ₹4.0L", img: ASSETS.NEURO },
  { id: 204, name: "Epilepsy Surgery", category: "Neurology", duration: "4-6 Hours", stay: "5-7 Days", cost: "₹3.0L - ₹5.0L", img: ASSETS.NEURO },
  { id: 205, name: "Deep Brain Stimulation (DBS)", category: "Neurology", duration: "6-8 Hours", stay: "3-5 Days", cost: "₹10.0L+", img: ASSETS.NEURO },
  { id: 206, name: "Aneurysm Coiling & Clipping", category: "Neurology", duration: "3-5 Hours", stay: "5-7 Days", cost: "₹4.0L - ₹7.0L", img: ASSETS.NEURO },

  // Ortho
  { id: 301, name: "Total Knee Replacement (TKR)", category: "Orthopedics", duration: "2-3 Hours", stay: "4-5 Days", cost: "₹2.0L - ₹3.5L", img: ASSETS.ORTHO_KNEE },
  { id: 302, name: "Total Hip Replacement (THR)", category: "Orthopedics", duration: "2-3 Hours", stay: "4-5 Days", cost: "₹2.5L - ₹4.0L", img: ASSETS.ORTHO_KNEE },
  { id: 303, name: "Arthroscopic Sports Surgery", category: "Orthopedics", duration: "1-2 Hours", stay: "1-2 Days", cost: "₹1.0L - ₹2.0L", img: ASSETS.ORTHO_KNEE },
  { id: 304, name: "Complex Trauma Surgery", category: "Orthopedics", duration: "Varies", stay: "Varies", cost: "Varies", img: ASSETS.ORTHO_KNEE },
  { id: 305, name: "Spine Deformity Correction", category: "Orthopedics", duration: "4-6 Hours", stay: "7-10 Days", cost: "₹4.0L - ₹6.0L", img: ASSETS.ORTHO_KNEE },
  { id: 306, name: "Shoulder Replacement", category: "Orthopedics", duration: "2-3 Hours", stay: "3-4 Days", cost: "₹2.5L - ₹3.5L", img: ASSETS.ORTHO_KNEE },

  // Gastro
  { id: 401, name: "Endoscopy & Colonoscopy", category: "Gastroenterology", duration: "30-60 Mins", stay: "Day Care", cost: "₹5k - ₹15k", img: ASSETS.SURGERY_TEAM },
  { id: 402, name: "ERCP (Stone Removal)", category: "Gastroenterology", duration: "1-2 Hours", stay: "1-2 Days", cost: "₹40k - ₹80k", img: ASSETS.SURGERY_TEAM },
  { id: 403, name: "Liver Transplant", category: "Gastroenterology", duration: "8-12 Hours", stay: "15-21 Days", cost: "₹20.0L+", img: ASSETS.SURGERY_TEAM },
  { id: 404, name: "Bariatric (Weight Loss) Surgery", category: "Gastroenterology", duration: "2-3 Hours", stay: "2-3 Days", cost: "₹3.0L - ₹5.0L", img: ASSETS.SURGERY_TEAM },
  { id: 405, name: "GI Cancer Surgery", category: "Gastroenterology", duration: "4-6 Hours", stay: "7-10 Days", cost: "₹3.0L - ₹6.0L", img: ASSETS.SURGERY_TEAM },
  { id: 406, name: "Hepatitis Management", category: "Gastroenterology", duration: "N/A", stay: "OPD", cost: "Consultation", img: ASSETS.SURGERY_TEAM },

  // Pulmonology
  { id: 501, name: "Bronchoscopy", category: "Pulmonology", duration: "30-45 Mins", stay: "Day Care", cost: "₹10k - ₹20k", img: ASSETS.NURSE_CARE },
  { id: 502, name: "Thoracoscopy", category: "Pulmonology", duration: "1-2 Hours", stay: "2-3 Days", cost: "₹40k - ₹60k", img: ASSETS.NURSE_CARE },
  { id: 503, name: "Sleep Study (Polysomnography)", category: "Pulmonology", duration: "Overnight", stay: "1 Night", cost: "₹15k - ₹25k", img: ASSETS.NURSE_CARE },
  { id: 504, name: "PFT (Pulmonary Function Test)", category: "Pulmonology", duration: "30 Mins", stay: "OPD", cost: "₹1k - ₹2k", img: ASSETS.NURSE_CARE },
  { id: 505, name: "Lung Cancer Screening", category: "Pulmonology", duration: "Varies", stay: "OPD", cost: "₹5k - ₹10k", img: ASSETS.NURSE_CARE },
  { id: 506, name: "Allergy Testing", category: "Pulmonology", duration: "30 Mins", stay: "OPD", cost: "₹2k - ₹5k", img: ASSETS.NURSE_CARE },

  // Surgery (General)
  { id: 601, name: "Laparoscopic Cholecystectomy", category: "General Surgery", duration: "1-2 Hours", stay: "1-2 Days", cost: "₹60k - ₹1.0L", img: ASSETS.SURGERY_TEAM },
  { id: 602, name: "Hernia Repair", category: "General Surgery", duration: "1-2 Hours", stay: "1-2 Days", cost: "₹50k - ₹90k", img: ASSETS.SURGERY_TEAM },
  { id: 603, name: "Appendectomy", category: "General Surgery", duration: "1 Hour", stay: "1-2 Days", cost: "₹40k - ₹70k", img: ASSETS.SURGERY_TEAM },
  { id: 604, name: "Thyroid Surgery", category: "General Surgery", duration: "2-3 Hours", stay: "2-3 Days", cost: "₹80k - ₹1.2L", img: ASSETS.SURGERY_TEAM },
  { id: 605, name: "Breast Surgery", category: "General Surgery", duration: "2-4 Hours", stay: "2-4 Days", cost: "₹1.0L - ₹2.0L", img: ASSETS.SURGERY_TEAM },
  { id: 606, name: "Trauma Surgery", category: "General Surgery", duration: "Varies", stay: "Varies", cost: "Varies", img: ASSETS.SURGERY_TEAM },

  // Urology
  { id: 701, name: "Laser Lithotripsy (Kidney Stones)", category: "Urology", duration: "1 Hour", stay: "1 Day", cost: "₹50k - ₹90k", img: ASSETS.SURGERY_TEAM },
  { id: 702, name: "TURP (Prostate Surgery)", category: "Urology", duration: "1-2 Hours", stay: "2-3 Days", cost: "₹60k - ₹1.0L", img: ASSETS.SURGERY_TEAM },
  { id: 703, name: "Uro-Oncology Surgery", category: "Urology", duration: "3-5 Hours", stay: "5-7 Days", cost: "₹2.0L - ₹4.0L", img: ASSETS.SURGERY_TEAM },
  { id: 704, name: "Reconstructive Urology", category: "Urology", duration: "2-4 Hours", stay: "3-5 Days", cost: "₹1.5L - ₹3.0L", img: ASSETS.SURGERY_TEAM },
  { id: 705, name: "Andrology & Infertility", category: "Urology", duration: "Varies", stay: "OPD/Day Care", cost: "Varies", img: ASSETS.SURGERY_TEAM },
  { id: 706, name: "Kidney Transplant", category: "Urology", duration: "4-6 Hours", stay: "10-14 Days", cost: "₹6.0L - ₹10.0L", img: ASSETS.SURGERY_TEAM },

  // Nephrology
  { id: 801, name: "Hemodialysis", category: "Nephrology", duration: "4 Hours", stay: "Day Care", cost: "₹2k - ₹4k/session", img: ASSETS.NURSE_CARE },
  { id: 802, name: "Peritoneal Dialysis", category: "Nephrology", duration: "Varies", stay: "Home/OPD", cost: "Varies", img: ASSETS.NURSE_CARE },
  { id: 803, name: "Kidney Biopsy", category: "Nephrology", duration: "30 Mins", stay: "Day Care", cost: "₹10k - ₹15k", img: ASSETS.NURSE_CARE },
  { id: 804, name: "Kidney Transplant Care", category: "Nephrology", duration: "Long Term", stay: "OPD", cost: "Consultation", img: ASSETS.NURSE_CARE },
  { id: 805, name: "Critical Care Nephrology", category: "Nephrology", duration: "Varies", stay: "ICU", cost: "Varies", img: ASSETS.ICU },
  { id: 806, name: "Hypertension Management", category: "Nephrology", duration: "N/A", stay: "OPD", cost: "Consultation", img: ASSETS.NURSE_CARE },

  // Pain Management
  { id: 901, name: "Interventional Pain Procedures", category: "Pain Management", duration: "30-60 Mins", stay: "Day Care", cost: "₹10k - ₹30k", img: ASSETS.NURSE_CARE },
  { id: 902, name: "Nerve Blocks & Epidural Injections", category: "Pain Management", duration: "30 Mins", stay: "Day Care", cost: "₹5k - ₹15k", img: ASSETS.NURSE_CARE },
  { id: 903, name: "Radiofrequency Ablation", category: "Pain Management", duration: "1 Hour", stay: "Day Care", cost: "₹40k - ₹60k", img: ASSETS.NURSE_CARE },
  { id: 904, name: "Spinal Cord Stimulation", category: "Pain Management", duration: "1-2 Hours", stay: "1 Day", cost: "₹5.0L+", img: ASSETS.NURSE_CARE },
  { id: 905, name: "Myofascial Trigger Point Therapy", category: "Pain Management", duration: "30 Mins", stay: "OPD", cost: "₹2k - ₹4k", img: ASSETS.NURSE_CARE },
  { id: 906, name: "Cancer Pain Management", category: "Pain Management", duration: "Varies", stay: "OPD/IPD", cost: "Varies", img: ASSETS.NURSE_CARE },

  // Gynecology
  { id: 1001, name: "Normal & High-Risk Delivery", category: "Gynecology", duration: "Varies", stay: "2-4 Days", cost: "₹50k - ₹1.5L", img: ASSETS.NURSE_CARE },
  { id: 1002, name: "Laparoscopic Hysterectomy", category: "Gynecology", duration: "1-2 Hours", stay: "2 Days", cost: "₹80k - ₹1.2L", img: ASSETS.NURSE_CARE },
  { id: 1003, name: "Infertility Treatment", category: "Gynecology", duration: "Varies", stay: "OPD", cost: "Varies", img: ASSETS.NURSE_CARE },
  { id: 1004, name: "PCOS/PCOD Management", category: "Gynecology", duration: "N/A", stay: "OPD", cost: "Consultation", img: ASSETS.NURSE_CARE },
  { id: 1005, name: "Menopause Clinic", category: "Gynecology", duration: "N/A", stay: "OPD", cost: "Consultation", img: ASSETS.NURSE_CARE },
  { id: 1006, name: "Gynecological Oncology Screening", category: "Gynecology", duration: "30 Mins", stay: "OPD", cost: "₹5k - ₹10k", img: ASSETS.NURSE_CARE },

  // Physiotherapy
  { id: 1101, name: "Post-Operative Rehabilitation", category: "Physiotherapy", duration: "45-60 Mins", stay: "OPD", cost: "₹500 - ₹1000", img: ASSETS.NURSE_CARE },
  { id: 1102, name: "Sports Injury Management", category: "Physiotherapy", duration: "45-60 Mins", stay: "OPD", cost: "₹500 - ₹1500", img: ASSETS.NURSE_CARE },
  { id: 1103, name: "Neuro-Rehabilitation", category: "Physiotherapy", duration: "1 Hour", stay: "OPD", cost: "₹800 - ₹1200", img: ASSETS.NURSE_CARE },
  { id: 1104, name: "Manual Therapy", category: "Physiotherapy", duration: "30-45 Mins", stay: "OPD", cost: "₹600 - ₹1000", img: ASSETS.NURSE_CARE },
  { id: 1105, name: "Electrotherapy", category: "Physiotherapy", duration: "30 Mins", stay: "OPD", cost: "₹400 - ₹800", img: ASSETS.NURSE_CARE },
  { id: 1106, name: "Geriatric Rehabilitation", category: "Physiotherapy", duration: "45 Mins", stay: "OPD", cost: "₹500 - ₹1000", img: ASSETS.NURSE_CARE },
];

const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added state for dropdown

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory, searchTerm]);

  const filteredTreatments = treatments.filter(t => 
    (activeCategory === 'All' || t.category === activeCategory) &&
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Duplicate categories for seamless marquee loop
  const marqueeCategories = [...categories, ...categories];

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Medical Treatments & Procedures | Umang Hospital</title>
        <meta name="description" content="Explore our comprehensive list of medical treatments, surgeries, and procedures. Get details on cost, duration, and recovery." />
      </Helmet>

      {/* CSS for Marquee Animation and Custom Scrollbar */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

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

        <div className="container-custom relative z-10 py-12 lg:py-10">
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

      {/* 2. Browse by Specialty - Marquee */}
      <section className="py-12 lg:py-10 bg-gray-50 border-b border-gray-200 overflow-hidden">
         <div className="container-custom mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
               <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Browse by Specialty</h2>
               <p className="text-gray-500 text-sm">Select a department to view available procedures.</p>
            </div>

            {/* Quick Select Custom Dropdown */}
            <div className="relative w-full md:w-72 z-20">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border border-gray-200 text-[#0f172a] py-3 px-6 rounded-full font-bold shadow-sm hover:shadow-lg transition-all flex items-center justify-between text-sm"
              >
                <span className="truncate">{activeCategory === 'All' ? 'All Specialties' : activeCategory}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden max-h-[300px] overflow-y-auto custom-scrollbar"
                  >
                    <button
                      onClick={() => { setActiveCategory('All'); setIsDropdownOpen(false); }}
                      className={`w-full text-left px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors ${activeCategory === 'All' ? 'bg-blue-50 text-[#005580]' : 'text-gray-600'}`}
                    >
                      All Specialties
                    </button>
                    {categories.map((cat) => (
                      <button
                         key={cat.id}
                         onClick={() => { setActiveCategory(cat.name); setIsDropdownOpen(false); }}
                         className={`w-full text-left px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-3 ${activeCategory === cat.name ? 'bg-blue-50 text-[#005580]' : 'text-gray-600'}`}
                      >
                         <cat.icon className="w-4 h-4 opacity-70" />
                         {cat.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
         </div>
         
         <div className="marquee-container w-full overflow-hidden">
             <div className="marquee-track px-4">
               {marqueeCategories.map((cat, i) => (
                  <button 
                     key={`${cat.id}-${i}`}
                     onClick={() => setActiveCategory(cat.name === activeCategory ? 'All' : cat.name)}
                     className={`w-[200px] shrink-0 p-6 rounded-3xl border transition-all text-center flex flex-col items-center gap-4 group ${activeCategory === cat.name ? 'bg-[#005580] border-[#005580] text-white shadow-xl' : 'bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:shadow-lg'}`}
                  >
                     <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${activeCategory === cat.name ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#005580] group-hover:bg-[#005580] group-hover:text-white'}`}>
                        <cat.icon className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm mb-1 truncate w-full">{cat.name}</h4>
                        <span className={`text-xs ${activeCategory === cat.name ? 'text-blue-200' : 'text-gray-400'}`}>{cat.count} Procedures</span>
                     </div>
                  </button>
               ))}
             </div>
         </div>
      </section>

      {/* 3. Treatment Listings */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-12">
               <h2 className="text-3xl font-serif font-bold text-[#0f172a]">
                  {activeCategory === 'All' ? 'All Treatments' : `${activeCategory} Treatments`}
               </h2>
               <span className="text-gray-500 font-medium">{filteredTreatments.length} Results Found</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredTreatments.slice(0, visibleCount).map((treatment) => (
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

            {/* Load More Button */}
            {visibleCount < filteredTreatments.length && (
               <div className="flex justify-center mt-12">
                  <button 
                     onClick={() => setVisibleCount(prev => prev + 6)}
                     className="px-8 py-3 bg-gray-100 text-gray-600 rounded-full font-bold hover:bg-gray-200 transition-colors"
                  >
                     Load More Treatments
                  </button>
               </div>
            )}
         </div>
      </section>

      {/* 4. Patient Education (Process) */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white relative overflow-hidden">
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
      <section className="py-12 lg:py-10 bg-blue-50">
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
