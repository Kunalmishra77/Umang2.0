import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Home, Heart, Activity, UserCheck, Clock, ShieldCheck, 
  Phone, Calendar, CheckCircle, ArrowRight, Star, ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Activity,
    title: "ICU at Home",
    desc: "Critical care setup with ventilators, monitors, and 24/7 specialized nursing staff for patients requiring intensive monitoring.",
    features: ["Advanced Life Support", "Critical Care Nurses", "Daily Doctor Tele-rounds"]
  },
  {
    icon: UserCheck,
    title: "Nursing Care",
    desc: "Compassionate nursing support for post-surgical care, wound dressing, injection administration, and elderly care.",
    features: ["12/24 Hour Shifts", "Post-operative Support", "Medication Management"]
  },
  {
    icon: Heart,
    title: "Physiotherapy",
    desc: "Expert physiotherapists visiting your home to help with rehabilitation, pain management, and mobility improvement.",
    features: ["Orthopedic Rehab", "Neurological Rehab", "Geriatric Fitness"]
  },
  {
    icon: ShieldCheck,
    title: "Elderly Care",
    desc: "Holistic support for seniors including companionship, hygiene assistance, and vitals monitoring.",
    features: ["Assisted Living", "Dementia Care", "Fall Prevention"]
  },
  {
    icon: Clock,
    title: "Medical Equipment",
    desc: "Rent or buy hospital-grade equipment like oxygen concentrators, hospital beds, and wheelchairs.",
    features: ["Quick Delivery", "Installation & Demo", "Sanitized Equipment"]
  },
  {
    icon: Calendar,
    title: "Doctor Visits",
    desc: "Scheduled home visits by general physicians and specialists for routine checkups and consultations.",
    features: ["General Health Check", "Chronic Disease Mgmt", "Palliative Care"]
  }
];

const faqs = [
  { q: "Is the nursing staff certified?", a: "Yes, all our nurses are qualified, background-verified, and trained in critical care protocols." },
  { q: "How quickly can you set up an ICU at home?", a: "We can deploy a complete ICU setup within 12-24 hours depending on the equipment requirements." },
  { q: "Do you offer short-term care?", a: "Yes, we offer flexible plans ranging from a single visit to long-term monthly packages." }
];

const HomeCare = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Home Care Services | Umang Hospital</title>
        <meta name="description" content="Professional hospital-like care at home. ICU setup, nursing, physiotherapy, and medical equipment rental services." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative h-[650px] overflow-hidden flex items-center bg-[#f0f9ff]">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-[#e0f2fe] rounded-bl-[10rem] z-0" />
          <img 
            src="https://images.unsplash.com/photo-1584515933487-9dca71d603a1?auto=format&fit=crop&q=80&w=2000" 
            alt="Nurse with Patient" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] object-cover rounded-l-[3rem] shadow-2xl z-10 hidden lg:block"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 text-[#005580] font-bold uppercase tracking-widest text-xs mb-6">
              <Home className="w-4 h-4" />
              <span>Hospital Expertise at Home</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0f172a] mb-6 leading-tight">
              Healing begins where the <br />
              <span className="text-[#005580]">Heart belongs.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
              Bring world-class medical care to the comfort of your home. From ICU setups to compassionate nursing, we are by your side.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md">
               <h3 className="font-bold text-[#0f172a] mb-4">Request a Call Back</h3>
               <form className="space-y-4">
                  <input type="text" placeholder="Patient Name" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#005580] outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#005580] outline-none" />
                  <button className="w-full h-12 bg-[#005580] text-white rounded-xl font-bold hover:bg-[#004466] transition-all shadow-lg flex items-center justify-center gap-2">
                     Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </button>
               </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-4">Comprehensive Home Care</h2>
               <p className="text-gray-500 text-lg"> tailored medical services designed to promote recovery and well-being in a familiar environment.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {services.map((service, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#005580] flex items-center justify-center mb-6 group-hover:bg-[#005580] group-hover:text-white transition-colors">
                        <service.icon className="w-7 h-7" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0f172a] mb-3">{service.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                     <ul className="space-y-2">
                        {service.features.map((feat, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wide">
                              <CheckCircle className="w-3 h-3 text-green-500" /> {feat}
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Why Choose Us (Stats) */}
      <section className="py-20 bg-[#005580] text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
               {[
                  { label: "Happy Patients", val: "5000+" },
                  { label: "Nurses Deployed", val: "200+" },
                  { label: "Home ICUs Setup", val: "500+" },
                  { label: "Years of Trust", val: "15+" }
               ].map((stat, i) => (
                  <div key={i} className="p-4">
                     <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.val}</h3>
                     <p className="text-blue-200 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Process Steps */}
      <section className="py-24 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-16 text-center">How It Works</h2>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
               <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10" />
               
               {[
                  { title: "Consultation", desc: "Speak with our care manager to discuss needs." },
                  { title: "Assessment", desc: "Our team conducts a home assessment visit." },
                  { title: "Care Plan", desc: "Customized care plan created by doctors." },
                  { title: "Service Start", desc: "Care delivery begins with regular monitoring." }
               ].map((step, i) => (
                  <div key={i} className="text-center relative bg-gray-50">
                     <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-xl font-bold text-[#005580] mx-auto mb-6 shadow-sm relative z-10">
                        {i + 1}
                     </div>
                     <h4 className="text-lg font-bold text-[#0f172a] mb-2">{step.title}</h4>
                     <p className="text-sm text-gray-500 px-4">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. FAQ & CTA */}
      <section className="py-24 bg-white">
         <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center mb-12">Common Questions</h2>
            <div className="space-y-4 mb-16">
               {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50">
                     <button 
                        onClick={() => toggleAccordion(i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                     >
                        <span className="font-bold text-[#0f172a]">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeAccordion === i ? 'rotate-180' : ''}`} />
                     </button>
                     <AnimatePresence>
                        {activeAccordion === i && (
                           <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                           >
                              <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">
                                 {faq.a}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>

            <div className="bg-blue-50 rounded-[2rem] p-8 md:p-12 text-center border border-blue-100">
               <div className="w-16 h-16 bg-[#005580] rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-200">
                  <Phone className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Need immediate assistance?</h3>
               <p className="text-gray-600 mb-8 max-w-lg mx-auto">Our Home Care coordinators are available 24/7 to answer your queries and arrange urgent care.</p>
               <a href="tel:+918929733551" className="inline-flex items-center gap-2 px-8 py-4 bg-[#005580] text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                  Call Support Team
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};

export default HomeCare;
