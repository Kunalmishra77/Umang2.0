import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, Ambulance, Heart, Activity, Clock, MapPin, 
  ShieldCheck, AlertCircle, ArrowRight, Zap, ChevronDown, Plus
} from 'lucide-react';

const emergencyServices = [
  {
    icon: Heart,
    title: "Cardiac Emergency",
    desc: "24/7 Cath Lab availability for immediate angioplasty (Primary PTCA) within the golden hour.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Activity,
    title: "Stroke Unit",
    desc: "Dedicated stroke team for rapid thrombolysis and neuro-intervention to reverse paralysis.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Zap,
    title: "Trauma & Accident",
    desc: "Level 1 Trauma Center equipped to handle poly-trauma, fractures, and severe injuries.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: AlertCircle,
    title: "Poison & Overdose",
    desc: "Critical care toxicology unit for immediate neutralization and life support.",
    color: "bg-yellow-50 text-yellow-600"
  }
];

const firstAid = [
  { title: "Heart Attack", steps: ["Call Ambulance immediately", "Chew 300mg Aspirin", "Keep patient calm & seated", "Perform CPR if unconscious"] },
  { title: "Stroke", steps: ["Check FAST (Face, Arms, Speech, Time)", "Note the time of symptom onset", "Do NOT give food or water", "Rush to stroke-ready hospital"] },
  { title: "Severe Bleeding", steps: ["Apply direct pressure on wound", "Elevate the injured part", "Do not remove embedded objects", "Keep patient warm"] }
];

const Emergency = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Emergency & Trauma Care | Umang Hospital</title>
        <meta name="description" content="24/7 Emergency Room and Trauma Center. Immediate care for heart attacks, strokes, and accidents. Call 89297 33551." />
      </Helmet>

      {/* 1. High-Urgency Hero Section */}
      <section className="relative min-h-[750px] overflow-hidden flex items-center bg-[#0f172a] py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516574187841-693018f33663?auto=format&fit=crop&q=80&w=2000" 
            alt="Emergency Room" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-[#0f172a]/80 to-transparent" />
          {/* Animated Pulse Overlay */}
          <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
        </div>

        <div className="container-custom relative z-20 text-white pb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-8 animate-bounce">
              <AlertCircle className="w-4 h-4" /> 24/7 Emergency Active
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-none tracking-tight">
              Every Second <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Counts.</span>
            </h1>
            <p className="text-xl text-red-100 font-light leading-relaxed mb-12 max-w-xl">
              World-class emergency care staffed by fellowship-trained experts. Prepared for the unexpected, every moment of every day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a href="tel:+918929733551" className="h-16 px-8 rounded-full bg-red-600 text-white font-bold text-lg hover:bg-red-700 hover:shadow-2xl hover:shadow-red-900/50 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                <Phone className="w-6 h-6 animate-wiggle" /> Call Ambulance: 89297 33551
              </a>
              <a href="https://maps.google.com/?q=Umang+Hospital+Gurugram" target="_blank" rel="noreferrer" className="h-16 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                <MapPin className="w-6 h-6" /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Critical Services Grid */}
      <section className="py-24 bg-white relative -mt-20 z-30">
         <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {emergencyServices.map((service, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="bg-white p-8 rounded-3xl shadow-xl border-b-4 border-b-red-500 hover:-translate-y-2 transition-all duration-300"
                  >
                     <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                        <service.icon className="w-7 h-7" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Triage & Protocol Info */}
      <section className="py-24 bg-gray-50">
         <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Protocol</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Advanced Life Support</h2>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our fleet of ACLS (Advanced Cardiac Life Support) ambulances are essentially ICUs on wheels. Staffed by trained paramedics and equipped with ventilators and defibrillators, treatment begins the moment you board.
               </p>
               
               <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 shrink-0">
                        <Clock className="w-4 h-4" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#0f172a]">Zero Waiting Time</h4>
                        <p className="text-sm text-gray-500">Immediate triage for critical patients (Red Zone).</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#0f172a]">Specialist Backup</h4>
                        <p className="text-sm text-gray-500">24/7 backup from Cardiologists, Neurologists & Surgeons.</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-red-500/10 rounded-3xl transform rotate-3" />
               <img 
                  src="https://images.unsplash.com/photo-1587351021759-3e566b9a44fd?auto=format&fit=crop&q=80&w=800" 
                  alt="Ambulance" 
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
               />
               <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center animate-pulse">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">Emergency Hotline</p>
                        <p className="text-2xl font-bold text-[#0f172a]">89297 33551</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. When to Visit ER */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center mb-16">When to visit the ER?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: "Chest Pain & Breathing", items: ["Severe chest pressure", "Difficulty breathing", "Fainting or blackout", "Sudden dizziness"] },
                  { title: "Trauma & Injury", items: ["Deep cuts or bleeding", "Head injury with confusion", "Broken bones (visible)", "Severe burns"] },
                  { title: "Neurological Symptoms", items: ["Sudden weakness/numbness", "Slurred speech (Stroke signs)", "Severe sudden headache", "Seizures"] }
               ].map((cat, i) => (
                  <div key={i} className="bg-red-50 p-8 rounded-3xl border border-red-100">
                     <h3 className="text-xl font-bold text-red-700 mb-6">{cat.title}</h3>
                     <ul className="space-y-3">
                        {cat.items.map((item, idx) => (
                           <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. First Aid Guide */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Quick First Aid Guide</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {firstAid.map((item, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-red-400">{item.title}</h3>
                <ul className="space-y-4">
                  {item.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 1}</div>
                      <span className="text-gray-300 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-12">*This information is for educational purposes. Always call emergency services first.</p>
        </div>
      </section>

      {/* 6. Sticky Emergency Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-4 z-50 shadow-2xl md:hidden">
         <div className="container-custom flex items-center justify-between">
            <div>
               <p className="text-xs font-bold text-red-200 uppercase">Emergency?</p>
               <p className="font-bold text-lg">Tap to Call</p>
            </div>
            <a href="tel:+918929733551" className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
               <Phone className="w-6 h-6 fill-current" />
            </a>
         </div>
      </div>

    </div>
  );
};

export default Emergency;