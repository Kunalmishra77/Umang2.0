import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Ambulance, Heart, Activity, Clock, MapPin, 
  Shield, AlertCircle, ArrowRight, Zap, ChevronDown, Plus, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../../components/ui/Layout';
import SeoHead from '../../components/common/SeoHead';

const emergencyServices = [
  {
    icon: Heart,
    title: "Cardiac Emergency",
    desc: "24/7 Cath Lab availability for immediate angioplasty (Primary PTCA) within the golden hour.",
    color: "bg-red-50 text-red-600",
    path: "/specialities/cardiology"
  },
  {
    icon: Activity,
    title: "Stroke Unit",
    desc: "Dedicated stroke team for rapid thrombolysis and neuro-intervention to reverse paralysis.",
    color: "bg-purple-50 text-purple-600",
    path: "/specialities/neuro"
  },
  {
    icon: Zap,
    title: "Trauma & Accident",
    desc: "Level 1 Trauma Center equipped to handle poly-trauma, fractures, and severe injuries.",
    color: "bg-orange-50 text-orange-600",
    path: "/specialities/ortho"
  },
  {
    icon: AlertCircle,
    title: "Poison & Overdose",
    desc: "Critical care toxicology unit for immediate neutralization and life support.",
    color: "bg-yellow-50 text-yellow-600",
    path: "/doctors"
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
    <div className="bg-white min-h-screen">
      <SeoHead 
        title="Emergency & Trauma Care" 
        description="24/7 Emergency Room and Trauma Center. Immediate care for heart attacks, strokes, and accidents. Call 89297 33551."
        canonical="/services/emergency"
      />

      {/* 1. High-Urgency Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[600px] overflow-hidden flex items-center bg-[#0f172a] py-12 lg:py-8">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.AMBULANCE} 
            alt="Emergency Room" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-[#0f172a]/80 to-transparent" />
          {/* Animated Pulse Overlay */}
          <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
        </div>

        <div className="container-custom relative z-20 text-white pb-6 lg:pb-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-8 animate-bounce">
              <AlertCircle className="w-4 h-4" /> 24/7 Emergency Active
            </div>
            <h1 className="text-4xl md:text-8xl font-serif font-bold mb-6 leading-none tracking-tight">
              Every Second <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Counts.</span>
            </h1>
            <p className="text-lg md:text-xl text-red-100 font-light leading-relaxed mb-10 max-w-xl">
              World-class emergency care staffed by fellowship-trained experts. Prepared for the unexpected, every moment of every day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
                             <a href={`tel:${siteConfig.contacts.emergency.replace(/\s/g,'')}`} className="h-16 px-8 rounded-full bg-red-600 text-white font-bold text-lg hover:bg-red-700 hover-lift hover:shadow-red-900/50 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                              <Phone className="w-6 h-6 animate-wiggle" /> Call Ambulance: {siteConfig.contacts.emergency}              </a>
              <a href="https://maps.google.com/?q=Umang+Hospital+Gurugram" target="_blank" rel="noreferrer" className="h-16 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                <MapPin className="w-6 h-6" /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: EMERGENCY STATISTICS */}
      <div className="bg-red-600 py-6 lg:py-8 relative overflow-hidden border-y border-red-500/30">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { label: "Door-to-Balloon", value: "<60 Mins" },
              { label: "Stroke Response", value: "24/7" },
              { label: "Trauma Beds", value: "15+" },
              { label: "Ambulance Hubs", value: "03" }
            ].map((stat, i) => (
              <div key={i} className="group transition-all duration-500">
                <p className="text-xl lg:text-3xl font-serif font-bold tracking-tight mb-1">{stat.value}</p>
                <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-red-100/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Critical Services Grid */}
      <section className="py-20 lg:py-24 bg-white relative z-30">
         <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {emergencyServices.map((service, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="group"
                  >
                    <Link to={service.path} className="block bg-white p-8 rounded-3xl shadow-xl border-b-4 border-b-red-500 hover:-translate-y-2 transition-all duration-300 h-full">
                       <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <service.icon className="w-7 h-7" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                       <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                       <div className="mt-6 flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                         View Details <ArrowRight size={14} />
                       </div>
                    </Link>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: TRAUMA PROTOCOLS */}
      <section className="section-padding bg-slate-50 overflow-hidden relative">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Clinical Mastery</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8">Trauma Level 1 <br /><span className="text-red-600 normal">Response.</span></h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                Our trauma protocols are designed for speed. We have a dedicated multidisciplinary team comprising of trauma surgeons, intensivists, and neuro-specialists on standby 24/7.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Stat CT Scan", desc: "Immediate imaging for trauma cases to identify internal injuries.", path: "/services/lab-test-diagnostic" },
                  { title: "Ready-to-Go OTs", desc: "One operation theatre is permanently reserved for emergency surgeries.", path: "/infrastructure/ot" },
                  { title: "In-house Blood Bank", desc: "24/7 availability of critical blood components for trauma patients.", path: "/services/lab-test-diagnostic" }
                ].map((item, i) => (
                  <Link to={item.path} key={i} className="flex gap-5 items-start group block">
                    <div className="w-2 h-12 bg-red-100 rounded-full group-hover:bg-red-600 transition-colors shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1 group-hover:text-red-600 transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-red-100 rounded-[4rem] rotate-3 -z-10" />
              <img src={ASSETS.OT} alt="Emergency OT" className="rounded-[4rem] shadow-2xl w-full h-[550px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Triage & Protocol Info */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Protocol</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Advanced Life Support</h2>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our fleet of ACLS (Advanced Cardiac Life Support) ambulances are essentially ICUs on wheels. Staffed by trained paramedics and equipped with ventilators and defibrillators, treatment begins the moment you board.
               </p>
               
               <div className="space-y-6">
                  <Link to="/patient-experience" className="flex gap-4 items-start group block">
                     <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Clock className="w-4 h-4" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#0f172a] group-hover:text-red-600 transition-colors">Zero Waiting Time</h4>
                        <p className="text-sm text-gray-500">Immediate triage for critical patients (Red Zone).</p>
                     </div>
                  </Link>
                  <Link to="/doctors" className="flex gap-4 items-start group block">
                     <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Shield className="w-4 h-4" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#0f172a] group-hover:text-red-600 transition-colors">Specialist Backup</h4>
                        <p className="text-sm text-gray-500">24/7 backup from Cardiologists, Neurologists & Surgeons.</p>
                     </div>
                  </Link>
               </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
               <div className="absolute inset-0 bg-red-500/10 rounded-3xl transform -rotate-3" />
               <img 
                  src={ASSETS.SVC_ADVANCED_LIFE_SUPPORT} 
                  alt="Ambulance" 
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
               />
            </div>
         </div>
      </section>

      {/* SECTION: EMERGENCY HUB TECHNOLOGY (NEW SECTION 10) */}
      <section className="section-padding bg-slate-50 overflow-hidden relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">ER Technology</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a]">Advanced ER Infrastructure</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Central Monitoring", desc: "Real-time vitals monitoring of all ER beds from a central nursing station.", icon: Activity, path: "/infrastructure/icu" },
              { title: "Point-of-Care Testing", desc: "Bedside blood gas and cardiac marker testing for immediate diagnosis.", icon: Zap, path: "/services/lab-test-diagnostic" },
              { title: "Ventilator Support", desc: "Every ER bed is equipped with advanced invasive/non-invasive ventilation.", icon: AlertCircle, path: "/infrastructure/icu" }
            ].map((tech, i) => (
              <Link to={tech.path} key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group block">
                <tech.icon className="w-10 h-10 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-red-600 transition-colors">{tech.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                   Learn More <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: AMBULANCE WORKFLOW */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden">
        <Container>
          <div className="text-center mb-16 lg:mb-24">
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm mb-4 block">Rapid Dispatch</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Ambulance Dispatch Path</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-0" />
            {[
              { title: "Call Hub", desc: "Centralized emergency call center receives the alert." },
              { title: "Triage", desc: "Dispatcher determines patient severity level." },
              { title: "Dispatch", desc: "Closest ACLS ambulance is assigned instantly." },
              { title: "Stabilize", desc: "Paramedics stabilize patient en route to hospital." }
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10">
                <div className="w-20 h-20 bg-[#0f172a] rounded-full border-4 border-red-600 flex items-center justify-center text-2xl font-black text-white mx-auto mb-8 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. When to Visit ER */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center mb-16">When to visit the ER?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: "Chest Pain & Breathing", path: "/specialities/cardiology", items: ["Severe chest pressure", "Difficulty breathing", "Fainting or blackout", "Sudden dizziness"] },
                  { title: "Trauma & Injury", path: "/specialities/ortho", items: ["Deep cuts or bleeding", "Head injury with confusion", "Broken bones (visible)", "Severe burns"] },
                  { title: "Neurological Symptoms", path: "/specialities/neuro", items: ["Sudden weakness/numbness", "Slurred speech (Stroke signs)", "Severe sudden headache", "Seizures"] }
               ].map((cat, i) => (
                  <Link to={cat.path} key={i} className="bg-red-50 p-8 rounded-3xl border border-red-100 group block hover:bg-white transition-all">
                     <h3 className="text-xl font-bold text-red-700 mb-6 group-hover:text-red-600">{cat.title}</h3>
                     <ul className="space-y-3">
                        {cat.items.map((item, idx) => (
                           <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" /> {item}
                           </li>
                        ))}
                     </ul>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: EMERGENCY HELPLINE CTA */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/5" />
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Save this Number. <br /><span className="text-red-500 normal">It Saves Lives.</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Our emergency response team is just one tap away. Bookmark our location or call us for immediate ACLS ambulance dispatch.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${siteConfig.contacts.emergency.replace(/\s/g,'')}`} className="px-10 py-5 bg-red-600 text-white rounded-full font-bold text-base shadow-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 animate-pulse" /> Call {siteConfig.contacts.emergency}
            </a>
            <Link to="/contact" className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              View Hospital Map <ArrowRight size={20} />
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION: SPECIALIST ER TEAM (NEW SECTION 11) */}
      <section className="section-padding bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-5/12">
              <img src={ASSETS.ABOUT_MAIN} alt="Medical Team" className="rounded-[3rem] shadow-2xl w-full max-h-[500px] object-cover" />
            </div>
            <div className="lg:w-7/12">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Medical Experts</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">Staffed by <br /><span className="text-red-600 normal">Fellowship Trained</span> Experts.</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
                Our ER is not just about machines; it is about the experts who operate them. Every shift is led by an ER consultant with deep experience in trauma and cardiac resuscitation.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-4xl font-bold text-brand-dark">100+</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Paramedics</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-brand-dark">24/7</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Intensivist Cover</p>
                </div>
              </div>
              <Link to="/doctors" className="h-14 px-10 rounded-full bg-sky-500 text-white font-bold inline-flex items-center justify-center hover:bg-sky-600 transition-colors shadow-lg shadow-sky-200">
                 View Specialists
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. First Aid Guide */}
      <section className="py-12 lg:py-10 bg-gray-900 text-white">
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
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-4 z-[60] shadow-2xl md:hidden">
         <div className="container-custom flex items-center justify-between">
            <div>
               <p className="text-xs font-bold text-red-200 uppercase">Emergency?</p>
               <p className="font-bold text-lg">Tap to Call</p>
            </div>
            <a href="tel:+918588072727" className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
               <Phone className="w-6 h-6 fill-current" />
            </a>
         </div>
      </div>

    </div>
  );
};

export default Emergency;
