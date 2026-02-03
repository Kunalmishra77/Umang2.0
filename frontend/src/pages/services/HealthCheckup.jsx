import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, Heart, ShieldCheck, Clock, User, CheckCircle, 
  ArrowRight, FileText, Smartphone, Calendar 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 1,
    title: "Basic Health Check",
    subtitle: "Essential screening for young adults",
    tests: "40+ Parameters",
    price: "₹1,499",
    oldPrice: "₹2,500",
    color: "bg-blue-50 border-blue-100",
    icon: Activity,
    features: ["Complete Blood Count (CBC)", "Blood Sugar (Fasting)", "Lipid Profile (Cholesterol)", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Urine Routine"]
  },
  {
    id: 2,
    title: "Executive Full Body",
    subtitle: "Comprehensive analysis for 30+",
    tests: "75+ Parameters",
    price: "₹3,999",
    oldPrice: "₹6,000",
    color: "bg-green-50 border-green-100",
    icon: ShieldCheck,
    popular: true,
    features: ["All Basic Tests", "Thyroid Profile (T3, T4, TSH)", "Vitamin D & B12", "HbA1c (3 Month Sugar)", "ECG & Chest X-Ray", "Doctor Consultation"]
  },
  {
    id: 3,
    title: "Premium Heart Check",
    subtitle: "Dedicated cardiac assessment",
    tests: "60+ Parameters",
    price: "₹5,499",
    oldPrice: "₹8,500",
    color: "bg-red-50 border-red-100",
    icon: Heart,
    features: ["All Executive Tests", "2D Echo / TMT", "Cardiac Risk Markers", "Homocysteine", "Pulmonary Function Test", "Cardiologist Consult"]
  },
  {
    id: 4,
    title: "Senior Citizen Care",
    subtitle: "Specialized geriatric screening",
    tests: "85+ Parameters",
    price: "₹4,499",
    oldPrice: "₹7,000",
    color: "bg-orange-50 border-orange-100",
    icon: User,
    features: ["All Executive Tests", "Bone Health Profile", "Prostate / Pap Smear", "Eye & Dental Checkup", "Audiometry", "Geriatric Consult"]
  }
];

const HealthCheckup = () => {
  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Preventive Health Checkups | Umang Hospital</title>
        <meta name="description" content="Book comprehensive full body checkups starting at ₹1499. Includes blood tests, cardiac screening, and doctor consultation." />
      </Helmet>

      {/* 1. Hero Section - Full Width & Spacious */}
      <section className="relative min-h-[650px] flex items-center bg-[#005580] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Health Checkup" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005580] via-[#005580]/90 to-transparent" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-cyan-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Activity className="w-4 h-4" /> Preventive Care
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Invest in your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Future Self.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12 max-w-xl">
              Lifestyle diseases are silent. Early detection is your best defense. Our comprehensive health packages are designed to give you a complete picture of your well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })} className="h-16 px-10 rounded-full bg-white text-[#005580] font-bold text-lg hover-lift hover:scale-105 transition-all flex items-center justify-center gap-3">
                View Packages <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-blue-200">Book via Call</p>
                  <p className="font-bold text-lg">89297 33551</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             {/* Decorative Abstract Shapes */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[80px]" />
             <img 
               src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" 
               alt="Doctor Reviewing Reports" 
               className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white/5 rotate-2 hover:rotate-0 transition-transform duration-700" 
             />
          </motion.div>
        </div>
      </section>

      {/* 2. Packages Section - Spacious Grid */}
      <section id="packages" className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Curated Health Packages</h2>
               <p className="text-gray-500 text-xl leading-relaxed">
                  Tailored screening plans for every age, gender, and lifestyle. Choose the one that fits you best.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
               {packages.map((pkg) => (
                  <motion.div 
                     key={pkg.id}
                     whileHover={{ y: -8 }}
                     className={`bg-white rounded-[2.5rem] overflow-hidden border ${pkg.color} shadow-sm hover:shadow-xl transition-all relative flex flex-col`}
                  >
                     {pkg.popular && (
                        <div className="absolute top-6 right-6 bg-[#005580] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg z-10">
                           Most Popular
                        </div>
                     )}
                     
                     <div className="p-10 flex-1">
                        <div className="flex items-start gap-6 mb-8">
                           <div className={`w-16 h-16 rounded-2xl ${pkg.color} flex items-center justify-center shrink-0`}>
                              <pkg.icon className="w-8 h-8 text-[#0f172a]" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-bold text-[#0f172a] mb-1">{pkg.title}</h3>
                              <p className="text-gray-500">{pkg.subtitle}</p>
                           </div>
                        </div>

                        <div className="mb-8">
                           <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Package Includes</span>
                           <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                              {pkg.features.map((feat, idx) => (
                                 <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> {feat}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <div className="bg-gray-50 p-8 border-t border-gray-100 flex items-center justify-between">
                        <div>
                           <div className="flex items-center gap-3 mb-1">
                              <span className="text-3xl font-bold text-[#0f172a]">{pkg.price}</span>
                              <span className="text-lg text-gray-400 line-through font-medium">{pkg.oldPrice}</span>
                           </div>
                           <p className="text-green-600 text-sm font-bold">{pkg.tests}</p>
                        </div>
                        <Link to="/services/booking/health-checkup" className="h-14 px-8 rounded-xl bg-[#0f172a] text-white font-bold hover:bg-[#005580] transition-all shadow-lg flex items-center gap-2">
                           Book Now
                        </Link>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Process Section - Large Visuals */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-blue-50 rounded-[3rem] -rotate-3" />
                  <img 
                     src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000" 
                     alt="Lab Process" 
                     className="relative rounded-[3rem] shadow-2xl w-full object-cover"
                  />
               </div>
               
               <div>
                  <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-12">Seamless Experience</h2>
                  <div className="space-y-12">
                     {[
                        { title: "Book Appointment", desc: "Select a package and choose a convenient time slot for home collection or hospital visit." },
                        { title: "Sample Collection", desc: "Our trained phlebotomists collect samples following strict hygiene and safety protocols." },
                        { title: "Smart Reporting", desc: "Detailed digital reports are shared via email and WhatsApp within 12-24 hours." },
                        { title: "Doctor Review", desc: "Get a free tele-consultation with our experts to understand your report findings." }
                     ].map((step, i) => (
                        <div key={i} className="flex gap-6">
                           <div className="w-12 h-12 rounded-full border-2 border-[#005580] flex items-center justify-center text-[#005580] font-bold text-xl shrink-0">
                              {i + 1}
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-[#0f172a] mb-2">{step.title}</h4>
                              <p className="text-gray-500 leading-relaxed text-lg">{step.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Why Prevention Matters */}
      <section className="py-32 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Why wait for symptoms?</h2>
            <p className="text-2xl text-gray-300 font-light mb-12 leading-relaxed">
               70% of lifestyle diseases are preventable if detected early. Regular health checkups are the most effective way to monitor your vital parameters and stay ahead of chronic conditions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <FileText className="w-10 h-10 text-cyan-300 mb-6" />
                  <h4 className="text-xl font-bold mb-3">Early Detection</h4>
                  <p className="text-gray-400">Identify risk factors before they become complications.</p>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <ShieldCheck className="w-10 h-10 text-cyan-300 mb-6" />
                  <h4 className="text-xl font-bold mb-3">Lower Costs</h4>
                  <p className="text-gray-400">Preventive care reduces long-term medical expenses.</p>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <Heart className="w-10 h-10 text-cyan-300 mb-6" />
                  <h4 className="text-xl font-bold mb-3">Better Quality of Life</h4>
                  <p className="text-gray-400">Active monitoring leads to healthier lifestyle choices.</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default HealthCheckup;
