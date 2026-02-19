import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, Microscope, TestTube, FlaskConical, Clock, 
  CheckCircle2, ArrowRight, Download, Smartphone, Heart, 
  ShieldCheck, Phone, MapPin, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';

const packages = [
  {
    id: 1,
    title: "Basic Fever Profile",
    desc: "Essential tests for persistent fever including CBC, Malaria, and Typhoid.",
    tests: ["CBC with ESR", "Typhidot (IgM & IgG)", "Malaria Parasite (MP)", "Urine Routine"],
    icon: Activity,
    color: "bg-blue-50 border-blue-100"
  },
  {
    id: 2,
    title: "Healthy Heart Panel",
    desc: "Complete cardiac risk assessment with lipid and inflammatory markers.",
    tests: ["Lipid Profile", "HS-CRP", "Homocysteine", "ECG (In-hospital)"],
    icon: Heart,
    color: "bg-red-50 border-red-100"
  },
  {
    id: 3,
    title: "Diabetes Screening",
    desc: "Advanced monitoring for blood glucose and long-term sugar levels.",
    tests: ["HbA1c", "Glucose (Fasting/PP)", "Microalbuminuria", "Creatinine"],
    icon: ShieldCheck,
    color: "bg-green-50 border-green-100"
  },
  {
    id: 4,
    title: "Vitamin & Mineral",
    desc: "Check for essential nutrient deficiencies for energy and immunity.",
    tests: ["Vitamin D3", "Vitamin B12", "Iron Profile", "Calcium"],
    icon: ShieldCheck,
    color: "bg-orange-50 border-orange-100"
  }
];

const LabDiagnostics = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Diagnostics & Pathology Lab | Umang Hospital</title>
        <meta name="description" content="Book lab tests and health checkups with home collection. NABL accredited labs and accurate reports." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[550px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.SVC_PATHOLOGY} 
            alt="Lab Diagnostics" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-widest text-[10px] mb-8">
              <Microscope className="w-4 h-4" /> NABL Accredited Services
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Precision in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Every Drop.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Advanced pathology and imaging powered by 128-Slice CT and AI-driven diagnostics for faster, more accurate results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/services/booking/lab-test" className="h-16 px-10 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3">
                Book a Test <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-blue-300">Report Turnaround</p>
                  <p className="font-bold text-lg">Same Day (4-6 Hours)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Search & Popular Categories */}
      <section className="py-20 bg-gray-50">
         <div className="container-custom">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl -mt-32 relative z-20 border border-gray-100">
               <div className="grid lg:grid-cols-3 gap-12 items-center">
                  <div className="lg:col-span-1">
                     <h3 className="text-2xl font-serif font-bold text-[#0f172a] mb-2">Find a Test</h3>
                     <p className="text-gray-500 text-sm">Search from over 2000+ specialized lab tests.</p>
                  </div>
                  <div className="lg:col-span-2 relative">
                     <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                     <input 
                        type="text" 
                        placeholder="Search tests (e.g. Thyroid, CBC, Lipid Profile...)"
                        className="w-full h-16 pl-16 pr-8 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white outline-none font-bold text-lg transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Popular Test Packages */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
               <div className="max-w-2xl text-left">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Recommended for you</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a]">Popular Health Packages</h2>
               </div>
               <Link to="/services/health-checkup" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-blue-100 pb-1">
                  View All Packages <ArrowRight className="w-5 h-5" />
               </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {packages.map((pkg) => (
                  <motion.div 
                     key={pkg.id}
                     whileHover={{ y: -10 }}
                     className={`p-10 rounded-[3rem] border ${pkg.color} hover:shadow-2xl transition-all flex flex-col`}
                  >
                     <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                        <pkg.icon className="w-8 h-8 text-[#0f172a]" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0f172a] mb-4">{pkg.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">{pkg.desc}</p>
                     
                     <div className="mb-8">
                        <ul className="space-y-3">
                           {pkg.tests.slice(0, 3).map((test, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-xs font-bold text-gray-600">
                                 <CheckCircle2 className="w-4 h-4 text-green-500" /> {test}
                              </li>
                           ))}
                        </ul>
                     </div>

                     <Link to="/services/booking/lab-test" className="w-full h-12 rounded-xl bg-[#0f172a] text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all">
                        Enquire Now
                     </Link>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Home Collection Banner */}
      <section className="py-12 lg:py-10 container-custom">
         <div className="bg-[#005580] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
            
            <div className="lg:w-1/2 relative z-10">
               <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Professional <br />Home Collection.</h2>
               <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                  Skip the queue and stay safe. Our vaccinated and trained phlebotomists will collect samples from the comfort of your home.
               </p>
               <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-4 font-bold text-lg">
                     <CheckCircle2 className="w-6 h-6 text-cyan-400" /> Secure Sample Transport
                  </li>
                  <li className="flex items-center gap-4 font-bold text-lg">
                     <CheckCircle2 className="w-6 h-6 text-cyan-400" /> Digital Reports on WhatsApp
                  </li>
                  <li className="flex items-center gap-4 font-bold text-lg">
                     <CheckCircle2 className="w-6 h-6 text-cyan-400" /> Certified Phlebotomists
                  </li>
               </ul>
               <div className="flex flex-wrap gap-6">
                  <a href={`tel:${siteConfig.contacts.main.replace(/\s/g, '')}`} className="h-16 px-10 rounded-full bg-white text-[#005580] font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                     <Phone className="w-6 h-6" /> Call +91 89297 33550
                  </a>
               </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[80px]" />
               <img 
                  src={ASSETS.SVC_LAB_PROCESS} 
                  alt="Home Collection" 
                  className="relative z-10 rounded-[3rem] shadow-2xl rotate-3"
               />
            </div>
         </div>
      </section>

      {/* 5. Diagnostics Technology Grid */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Advanced Imaging</h2>
               <p className="text-gray-500 text-lg leading-relaxed">
                  Our radiology department is equipped with high-end machinery for precision reporting and rapid clinical decisions.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { title: "128-Slice CT Scan", desc: "Ultra-fast cardiac and whole-body imaging with minimal radiation.", img: ASSETS.CT_SCAN },
                  { title: "3 Tesla MRI", desc: "High-resolution neurological and musculoskeletal imaging.", img: ASSETS.MRI_SCAN },
                  { title: "Digital X-Ray & USG", desc: "Instant high-clarity imaging for routine and emergency diagnostics.", img: ASSETS.SVC_RADIOLOGY_IMAGING }
               ].map((tech, i) => (
                  <div key={i} className="group">
                     <div className="aspect-[4/3] rounded-[3rem] overflow-hidden mb-8 shadow-lg">
                        <img src={tech.img} alt={tech.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>
                     <h4 className="text-2xl font-bold text-[#0f172a] mb-4">{tech.title}</h4>
                     <p className="text-gray-500 leading-relaxed">{tech.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default LabDiagnostics;
