import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, FlaskConical, Microscope, Clock, Home, Award, CheckCircle, 
  ArrowRight, ShieldCheck, FileText, ChevronRight, Phone 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 1,
    title: "Basic Health Checkup",
    tests: "55+ Tests",
    includes: ["Complete Hemogram", "Kidney Function Test", "Liver Function Test", "Blood Sugar"],
    price: "₹999",
    originalPrice: "₹1999",
    color: "bg-blue-50 text-blue-700",
    popular: false
  },
  {
    id: 2,
    title: "Comprehensive Full Body",
    tests: "85+ Tests",
    includes: ["Thyroid Profile", "Iron Deficiency", "Lipid Profile", "Urine Analysis", "Vitamin D"],
    price: "₹2499",
    originalPrice: "₹4999",
    color: "bg-purple-50 text-purple-700",
    popular: true
  },
  {
    id: 3,
    title: "Senior Citizen Care",
    tests: "70+ Tests",
    includes: ["HbA1c", "Bone Health", "Cardiac Risk Markers", "Electrolytes"],
    price: "₹1899",
    originalPrice: "₹3500",
    color: "bg-green-50 text-green-700",
    popular: false
  },
  {
    id: 4,
    title: "Women's Wellness",
    tests: "60+ Tests",
    includes: ["Hormonal Profile", "Calcium", "Iron Studies", "Pap Smear (Optional)"],
    price: "₹2199",
    originalPrice: "₹4200",
    color: "bg-pink-50 text-pink-700",
    popular: false
  }
];

const features = [
  { icon: Home, title: "Home Collection", desc: "Free sample pickup from your doorstep by trained phlebotomists." },
  { icon: Clock, title: "Smart Reports", desc: "Digital reports delivered within 6-12 hours via WhatsApp & Email." },
  { icon: Award, title: "NABL Accredited", desc: "Highest quality standards ensuring 100% accurate results." },
  { icon: Microscope, title: "Advanced Tech", desc: "Fully automated robotic labs for error-free processing." }
];

const LabDiagnostics = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Lab Tests & Diagnostics | Umang Hospital</title>
        <meta name="description" content="Book lab tests and health checkups with home collection. NABL accredited labs, accurate reports, and affordable packages." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative h-[550px] overflow-hidden flex items-center bg-[#0f172a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2000" 
            alt="Lab Technology" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005580] via-[#005580]/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-cyan-300 font-bold uppercase tracking-widest text-xs mb-4">
              <FlaskConical className="w-4 h-4" />
              <span>Diagnostic Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Precision in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Every Result.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-10">
              State-of-the-art pathology and imaging services. Accurate diagnostics are the foundation of effective treatment.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex max-w-lg">
               <div className="flex-1 flex items-center px-4">
                  <Search className="w-5 h-5 text-gray-300 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search for tests (e.g., CBC, Thyroid, MRI)" 
                    className="w-full bg-transparent border-none outline-none text-white placeholder-gray-300 font-medium h-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               <button className="h-10 px-6 bg-white text-[#005580] rounded-xl font-bold text-sm hover:bg-blue-50 transition-all">
                  Find Test
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
         <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8">
               {features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#005580] border border-gray-100 shrink-0">
                        <feat.icon className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#0f172a] mb-1">{feat.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Popular Packages */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-4">Curated Health Packages</h2>
                  <p className="text-gray-500 text-lg">Comprehensive screening packages designed by our senior doctors for every stage of life.</p>
               </div>
               <Link to="#" className="hidden md:flex text-[#005580] font-bold items-center gap-2 hover:gap-3 transition-all">
                  View All Packages <ArrowRight className="w-4 h-4" />
               </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {packages.map((pkg, i) => (
                  <motion.div 
                     key={pkg.id}
                     whileHover={{ y: -10 }}
                     className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden relative flex flex-col"
                  >
                     {pkg.popular && (
                        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider z-10">
                           Bestseller
                        </div>
                     )}
                     <div className={`p-6 ${pkg.color} bg-opacity-20`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                        <span className={`inline-block px-2 py-1 rounded-lg text-xs font-bold ${pkg.color} bg-white bg-opacity-60`}>
                           {pkg.tests}
                        </span>
                     </div>
                     
                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-3 mb-8 flex-1">
                           {pkg.includes.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                 <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                 <span>{item}</span>
                              </div>
                           ))}
                           {pkg.includes.length < 5 && <div className="text-xs text-gray-400 italic">+ more parameters</div>}
                        </div>

                        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                           <div>
                              <span className="text-xs text-gray-400 line-through block">{pkg.originalPrice}</span>
                              <span className="text-2xl font-bold text-[#0f172a]">{pkg.price}</span>
                           </div>
                           <Link to="/services/booking/lab-test" className="h-10 px-4 rounded-xl bg-[#005580] text-white text-sm font-bold hover:bg-[#004466] transition-all shadow-lg flex items-center justify-center">
                              Book Now
                           </Link>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Departments & Modalities */}
      <section className="py-24 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-12 text-center">Diagnostic Modalities</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: "Radiology & Imaging", items: ["3 Tesla MRI", "128 Slice CT Scan", "Digital X-Ray", "Ultrasound / Doppler", "Mammography"], img: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?auto=format&fit=crop&q=80" },
                  { title: "Pathology", items: ["Hematology", "Biochemistry", "Microbiology", "Histopathology", "Clinical Pathology"], img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80" },
                  { title: "Cardiology Diagnostics", items: ["ECG / ECHO", "TMT / Stress Test", "Holter Monitoring", "Angiography (Cath Lab)", "Doppler Study"], img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" }
               ].map((dept, i) => (
                  <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-lg transition-all">
                     <div className="h-48 relative overflow-hidden">
                        <img src={dept.img} alt={dept.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                           <h3 className="text-white text-xl font-bold">{dept.title}</h3>
                        </div>
                     </div>
                     <div className="p-6">
                        <ul className="space-y-3">
                           {dept.items.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#005580]"></div>
                                 {item}
                              </li>
                           ))}
                        </ul>
                        <button className="mt-6 w-full py-3 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-blue-50 hover:text-[#005580] hover:border-blue-200 transition-all flex items-center justify-center gap-2">
                           View All Tests <ChevronRight className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Home Collection CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="container-custom">
            <div className="bg-[#005580] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
               
               <div className="md:w-1/2 relative z-10">
                  <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block backdrop-blur-md">
                     Safe & Hygienic
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                     Book a Home <br />Sample Collection
                  </h2>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed opacity-90">
                     Skip the queue and stay safe. Our vaccinated and trained phlebotomists will collect samples from the comfort of your home at no extra cost.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Link to="/services/booking/lab-test" className="h-14 px-8 rounded-full bg-white text-[#005580] font-bold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                        <Home className="w-4 h-4" /> Book Home Visit
                     </Link>
                     <button className="h-14 px-8 rounded-full bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" /> Call +91 89297 33551
                     </button>
                  </div>
               </div>

               <div className="md:w-1/2 relative z-10 flex justify-center">
                  <div className="relative">
                     <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1584515933487-9dca71d603a1?auto=format&fit=crop&q=80&w=600" 
                        alt="Home Collection" 
                        className="relative rounded-3xl shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-sm" 
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default LabDiagnostics;
