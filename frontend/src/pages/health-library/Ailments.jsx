import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, Activity, Thermometer, AlertCircle, Heart, Brain, Bone, 
  ArrowRight, Info, CheckCircle, ChevronDown, Stethoscope 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const commonAilments = [
  {
    id: 1,
    name: "Diabetes Mellitus",
    category: "Endocrinology",
    specialityId: "endocrinology", // Assuming this will be added or maps to general medicine for now
    desc: "A chronic condition that affects how your body turns food into energy.",
    symptoms: ["Frequent urination", "Excessive thirst", "Blurry vision"],
    risk: "High",
    icon: Activity
  },
  {
    id: 2,
    name: "Hypertension",
    category: "Cardiology",
    specialityId: "cardiac",
    desc: "High blood pressure that can lead to severe complications like heart disease and stroke.",
    symptoms: ["Headaches", "Shortness of breath", "Nosebleeds"],
    risk: "Medium",
    icon: Heart
  },
  {
    id: 3,
    name: "Migraine",
    category: "Neurology",
    specialityId: "neuro",
    desc: "A neurological condition causing intense, debilitating headaches.",
    symptoms: ["Severe throbbing pain", "Sensitivity to light", "Nausea"],
    risk: "Low",
    icon: Brain
  },
  {
    id: 4,
    name: "Arthritis",
    category: "Orthopedics",
    specialityId: "ortho",
    desc: "Swelling and tenderness of one or more joints causing pain and stiffness.",
    symptoms: ["Joint pain", "Stiffness", "Swelling", "Decreased range of motion"],
    risk: "Medium",
    icon: Bone
  },
  {
    id: 5,
    name: "Asthma",
    category: "Pulmonology",
    specialityId: "pulmonology",
    desc: "A condition in which your airways narrow and swell and may produce extra mucus.",
    symptoms: ["Shortness of breath", "Chest tightness", "Wheezing"],
    risk: "Medium",
    icon: Thermometer
  },
  {
    id: 6,
    name: "Gastroenteritis",
    category: "Gastroenterology",
    specialityId: "gastro",
    desc: "An intestinal infection marked by diarrhea, cramps, nausea, vomiting, and fever.",
    symptoms: ["Watery diarrhea", "Abdominal cramps", "Nausea"],
    risk: "Low",
    icon: AlertCircle
  }
];

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Ailments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLetter, setActiveLetter] = useState('A');

  const filteredAilments = commonAilments.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Ailments & Conditions | Umang Hospital</title>
        <meta name="description" content="Comprehensive guide to medical conditions, symptoms, and treatments. Search our encyclopedia of ailments." />
      </Helmet>

      {/* 1. Hero Section - Symptom Checker Vibe */}
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-5 animate-pulse" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/30 text-red-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Activity className="w-4 h-4" /> Symptom Checker
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Understand Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">Body's Signals.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Knowledge is the first step to recovery. Explore our comprehensive library of medical conditions, symptoms, and treatment protocols.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl flex max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
               <div className="flex-1 flex items-center px-4">
                  <Search className="w-6 h-6 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search e.g. 'Headache' or 'Diabetes'" 
                    className="w-full h-14 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               <button className="h-14 px-8 bg-[#005580] text-white rounded-xl font-bold hover:bg-[#004466] transition-all">
                  Search
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. A-Z Index */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
         <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
               {alphabets.map((letter) => (
                  <button 
                     key={letter}
                     onClick={() => setActiveLetter(letter)}
                     className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-bold transition-all ${activeLetter === letter ? 'bg-[#005580] text-white scale-110' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                  >
                     {letter}
                  </button>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Common Conditions Grid */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Common Conditions</h2>
               <p className="text-gray-500 text-xl leading-relaxed">
                  Detailed insights into the most frequent health issues treated at Umang Hospital.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredAilments.map((ailment) => (
                  <motion.div 
                     key={ailment.id}
                     whileHover={{ y: -10 }}
                     className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover-lift transition-all duration-300 group relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] transition-transform group-hover:scale-110" />
                     
                     <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                           <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#005580] flex items-center justify-center group-hover:bg-[#005580] group-hover:text-white transition-colors">
                              <ailment.icon className="w-8 h-8" />
                           </div>
                           <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${ailment.risk === 'High' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                              {ailment.risk} Risk
                           </span>
                        </div>

                        <h3 className="text-2xl font-bold text-[#0f172a] mb-2 group-hover:text-[#005580] transition-colors">{ailment.name}</h3>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{ailment.category}</p>
                        <p className="text-gray-500 leading-relaxed mb-6 h-16 line-clamp-3">{ailment.desc}</p>
                        
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                           <span className="text-xs font-bold text-gray-400 uppercase mb-2 block">Key Symptoms</span>
                           <div className="flex flex-wrap gap-2">
                              {ailment.symptoms.map((sym, i) => (
                                 <span key={i} className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded border border-gray-200">
                                    {sym}
                                 </span>
                              ))}
                           </div>
                        </div>

                        <Link to={`/specialities/${ailment.specialityId}`} className="flex items-center gap-2 text-[#005580] font-bold hover:gap-3 transition-all">
                           Consult Specialist <ArrowRight className="w-4 h-4" />
                        </Link>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Prevention & Wellness */}
      <section className="py-32 bg-white">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-sm mb-6">
                  Wellness Guide
               </div>
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-8">Prevention is the Best Cure</h2>
               <div className="space-y-8">
                  <div className="flex gap-6">
                     <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">1</div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">Regular Screenings</h4>
                        <p className="text-gray-500 leading-relaxed">Annual health checkups can detect silent killers like hypertension and diabetes early.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">2</div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">Balanced Nutrition</h4>
                        <p className="text-gray-500 leading-relaxed">A diet rich in fiber, low in sugar, and balanced macros boosts immunity naturally.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">3</div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">Active Lifestyle</h4>
                        <p className="text-gray-500 leading-relaxed">30 minutes of moderate activity daily reduces cardiovascular risk by 40%.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="absolute inset-0 bg-green-50 rounded-[3rem] rotate-3" />
               <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Wellness" 
                  className="relative rounded-[3rem] shadow-2xl w-full object-cover"
               />
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-12 lg:py-10 bg-[#005580] text-white relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
         <div className="container-custom relative z-10 max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Unsure about your symptoms?</h2>
            <p className="text-xl text-blue-100 font-light mb-10">
               Don't self-diagnose. Talk to our general physicians for an accurate assessment and peace of mind.
            </p>
            <div className="flex justify-center gap-6">
               <Link to="/doctors" className="h-16 px-10 rounded-full bg-white text-[#005580] font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-2 shadow-xl">
                  <Stethoscope className="w-5 h-5" /> Consult a Doctor
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Ailments;
