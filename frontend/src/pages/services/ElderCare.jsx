import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, UserCheck, Home, Smile, Activity, Clock, 
  Phone, Calendar, CheckCircle, ArrowRight, Sun, Shield 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const services = [
  {
    icon: UserCheck,
    title: "Assisted Living",
    desc: "Compassionate support for daily activities like bathing, dressing, and mobility, helping seniors maintain their dignity and independence.",
    features: ["24/7 Caregiver Support", "Personal Hygiene Assistance", "Mobility Aid"]
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    desc: "Specialized care for conditions like Diabetes, Hypertension, and Arthritis, with regular vitals monitoring and medication management.",
    features: ["Vitals Monitoring", "Medication Administration", "Dietary Planning"]
  },
  {
    icon: Heart,
    title: "Dementia & Alzheimer's Care",
    desc: "A safe, structured environment with memory care activities designed to reduce anxiety and improve cognitive function.",
    features: ["Memory Games", "Wandering Prevention", "Emotional Support"]
  },
  {
    icon: Sun,
    title: "Palliative Care",
    desc: "Focusing on relief from symptoms and stress of serious illness, improving quality of life for both the patient and the family.",
    features: ["Pain Management", "Psychological Support", "Family Counseling"]
  },
  {
    icon: Home,
    title: "Post-Hospitalization Care",
    desc: "Bridge the gap between hospital and home with professional nursing care to ensure a smooth and speedy recovery.",
    features: ["Wound Dressing", "Physiotherapy", "Doctor Tele-consults"]
  },
  {
    icon: Smile,
    title: "Companionship",
    desc: "Combating loneliness with social interaction, engaging conversations, and accompaniment for walks or appointments.",
    features: ["Social Engagement", "Recreational Activities", "Escort to Visits"]
  }
];

const carePlans = [
  {
    title: "Basic Support",
    price: "₹15,000 / mo",
    desc: "For seniors who need mild assistance.",
    features: ["Day Care (8 Hrs)", "Vitals Check", "Medication Reminder", "Companionship"]
  },
  {
    title: "Comprehensive Care",
    price: "₹35,000 / mo",
    desc: "Full-time support for higher needs.",
    features: ["24/7 Live-in Caregiver", "Personal Hygiene", "Mobility Assistance", "Weekly Doctor Visit"],
    popular: true
  },
  {
    title: "Specialized ICU",
    price: "₹60,000 / mo",
    desc: "Critical care setup at home.",
    features: ["ICU Nurse (24/7)", "Equipment Rental", "Daily Doctor Consult", "Physiotherapy"]
  }
];

const ElderCare = () => {
  const [activeTab, setActiveTab] = useState('care');

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Elder Care Services | Umang Hospital</title>
        <meta name="description" content="Compassionate geriatric care for seniors. Assisted living, dementia care, and medical support at home." />
      </Helmet>

      {/* 1. Hero Section - Warm & Reassuring */}
      <section className="relative min-h-[700px] flex items-center bg-[#fff7ed] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-3/4 h-full bg-[#ffedd5] rounded-bl-[15rem] z-0" />
          <img 
            src={ASSETS.GERIATRICS} 
            alt="Senior Citizen Care" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[85%] object-cover rounded-l-[4rem] shadow-2xl z-10 hidden lg:block"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-widest text-xs mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span>Geriatric Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">
              Aging with <br />
              <span className="text-orange-500">Dignity & Grace.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
              We understand that every senior has a unique story. Our holistic care plans are designed to honor their journey while providing the medical and emotional support they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => document.getElementById('care-plans').scrollIntoView({ behavior: 'smooth' })} className="h-16 px-8 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 hover:shadow-xl transition-all flex items-center justify-center gap-2">
                View Care Plans <ArrowRight className="w-5 h-5" />
              </button>
              <button className="h-16 px-8 rounded-full bg-white border border-orange-200 text-orange-600 font-bold hover:bg-orange-50 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Talk to an Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Comprehensive Services Grid */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-24">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Holistic Senior Care</h2>
               <p className="text-gray-500 text-xl leading-relaxed">
                  Beyond just medical attention, we focus on the emotional, social, and physical well-being of our elderly patients.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {services.map((service, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-orange-200 hover-lift transition-all group relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100%] -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                     
                     <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                           <service.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{service.title}</h3>
                        <p className="text-gray-500 text-base leading-relaxed mb-8">{service.desc}</p>
                        <ul className="space-y-3">
                           {service.features.map((feat, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-400 uppercase tracking-wide">
                                 <CheckCircle className="w-4 h-4 text-orange-500" /> {feat}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Care Plans Section */}
      <section id="care-plans" className="py-32 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] text-center mb-20">Tailored Care Packages</h2>
            
            <div className="grid lg:grid-cols-3 gap-10 items-center">
               {carePlans.map((plan, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -5 }}
                     className={`relative p-10 rounded-[3rem] ${plan.popular ? 'bg-[#0f172a] text-white shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 shadow-lg border border-gray-100'}`}
                  >
                     {plan.popular && (
                        <div className="absolute top-8 right-8 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                           Recommended
                        </div>
                     )}
                     <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                     <p className={`text-sm mb-8 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
                     
                     <div className="mb-10">
                        <span className="text-4xl font-bold">{plan.price}</span>
                     </div>

                     <ul className="space-y-5 mb-10">
                        {plan.features.map((feat, idx) => (
                           <li key={idx} className="flex items-center gap-4">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-white/10 text-orange-400' : 'bg-orange-50 text-orange-600'}`}>
                                 <CheckCircle className="w-4 h-4" />
                              </div>
                              <span className="font-medium">{feat}</span>
                           </li>
                        ))}
                     </ul>

                     <Link to="/services/booking/elder-care" className={`w-full h-14 rounded-xl font-bold transition-all flex items-center justify-center ${plan.popular ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-[#0f172a]'}`}>
                        Choose Plan
                     </Link>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Why Choose Us (Empathy Focus) */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-orange-50 rounded-full blur-[100px] opacity-50" />
               <img 
                  src={ASSETS.NURSE_CARE} 
                  alt="Caregiver Holding Hand" 
                  className="relative rounded-[3rem] shadow-2xl border-8 border-white z-10 hover:scale-[1.02] transition-transform duration-700 object-cover object-top"
               />
            </div>
            
            <div>
               <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-bold text-sm mb-6">
                  The Umang Difference
               </div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8">More than Caregivers, We are Family.</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Our selection process for caregivers focuses not just on medical expertise, but on empathy, patience, and integrity. We treat your loved ones with the same respect and attention we would give to our own parents.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                     <Shield className="w-8 h-8 text-orange-500 shrink-0" />
                     <div>
                        <h4 className="font-bold text-lg mb-1">Background Verified</h4>
                        <p className="text-sm text-gray-500">Police verified & medically certified staff.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <Clock className="w-8 h-8 text-orange-500 shrink-0" />
                     <div>
                        <h4 className="font-bold text-lg mb-1">Reliability Guarantee</h4>
                        <p className="text-sm text-gray-500">Immediate replacement in case of absence.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white text-center">
         <div className="container-custom max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Not sure what's best for your parent?</h2>
            <p className="text-xl text-gray-400 font-light mb-10">
               Schedule a free home assessment visit. Our geriatric experts will evaluate the medical and lifestyle needs to recommend the perfect care plan.
            </p>
            <div className="flex justify-center gap-6">
               <Link to="/services/booking/elder-care" className="h-16 px-10 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-orange-500/20">
                  Book Free Assessment
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ElderCare;
