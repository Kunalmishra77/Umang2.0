import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ArrowRight, ShieldCheck, Clock, User, 
  Activity, Star, Zap, Heart, Search, ChevronRight,
  Info, Bell, Smartphone, FileText, Filter, Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 1,
    name: "Umang Essential",
    tag: "Most Popular",
    price: "₹1,999",
    originalPrice: "₹4,000",
    tests: "45+ Tests",
    description: "Ideal for basic screening and preventive health maintenance.",
    items: ["Full Blood Count", "Diabetes Screening", "Liver Function", "Kidney Function", "Vitamin D"]
  },
  {
    id: 2,
    name: "Executive Comprehensive",
    tag: "Premium Care",
    price: "₹4,999",
    originalPrice: "₹10,000",
    tests: "85+ Tests",
    description: "In-depth analysis for busy professionals including cardiac and thyroid panels.",
    items: ["Cardiac Markers", "TFT (Thyroid)", "Iron Profile", "Vitamin B12", "Chest X-Ray", "ECG"]
  },
  {
    id: 3,
    name: "Gold Platinum Plus",
    tag: "VIP Checkup",
    price: "₹9,999",
    originalPrice: "₹22,000",
    tests: "110+ Tests",
    description: "Our most advanced checkup with full body scans and specialist consults.",
    items: ["USG Abdomen", "Stress Test (TMT)", "PFT", "Dental & Eye Check", "Diet Consultation"]
  }
];

const HealthCheckBooking = () => {
  const [selectedPkg, setSelectedDoc] = useState(packages[1]);
  const [submitting, setSubmitting] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);
  const [showInclusions, setShowInclusions] = useState(null);

  const handleBooking = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setBookingDone(true);
    }, 2000);
  };

  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Premium Health Checkups | Umang Hospital</title>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/localized/health-checkup-hero.jpg" 
            alt="Health Check" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
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
              <Zap className="w-4 h-4" /> Prevention is Better than Cure
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Know Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Health Status.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Advanced health screening packages tailored for your lifestyle. Get results in 24 hours with expert doctor consultations.
            </p>
            
            <div className="flex gap-4">
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToPackages} 
                  className="h-16 px-10 rounded-full bg-[#005580] text-white font-bold hover:bg-[#004466] transition-all shadow-xl flex items-center gap-2"
               >
                  View All Packages <ArrowRight className="w-5 h-5" />
               </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Package Selector Section */}
      <section id="packages" className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Preventive Health Packages</h2>
               <p className="text-gray-500 text-xl leading-relaxed">Choose a package that suits your age and lifestyle needs.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               {packages.map((pkg) => (
                  <motion.div 
                     key={pkg.id}
                     whileHover={{ y: -15 }}
                     className={`bg-white rounded-[3rem] p-10 shadow-sm border-2 transition-all duration-500 flex flex-col ${selectedPkg.id === pkg.id ? 'border-[#005580] shadow-2xl' : 'border-gray-100'}`}
                  >
                     <div className="flex justify-between items-start mb-8">
                        <div>
                           <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 inline-block border border-blue-100">
                              {pkg.tag}
                           </span>
                           <h3 className="text-2xl font-bold text-[#0f172a]">{pkg.name}</h3>
                        </div>
                        <div className="text-right">
                           <p className="text-3xl font-black text-[#005580]">{pkg.price}</p>
                           <p className="text-sm text-gray-400 line-through">{pkg.originalPrice}</p>
                        </div>
                     </div>

                     <p className="text-gray-500 mb-8 leading-relaxed text-sm">{pkg.description}</p>

                     <div className="space-y-4 mb-10 flex-1">
                        <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-4 mb-4">
                           <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Key Inclusions ({pkg.tests})</span>
                           <button onClick={() => setShowInclusions(pkg)} className="text-[#005580] hover:underline">Full List</button>
                        </div>
                        {pkg.items.slice(0, 5).map((item, i) => (
                           <div key={i} className="flex items-center gap-3 text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                              <span className="text-sm font-medium">{item}</span>
                           </div>
                        ))}
                     </div>

                     <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                           setSelectedDoc(pkg);
                           document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full h-14 rounded-2xl font-bold transition-all ${selectedPkg.id === pkg.id ? 'bg-[#005580] text-white shadow-xl' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                     >
                        {selectedPkg.id === pkg.id ? 'Selected' : 'Select Package'}
                     </motion.button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Inclusion Modal */}
      <AnimatePresence>
         {showInclusions && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
               <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setShowInclusions(null)}
                  className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md"
               />
               <motion.div 
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="bg-white w-full max-w-2xl rounded-[3rem] p-10 md:p-16 relative z-10 shadow-2xl overflow-hidden"
               >
                  <button onClick={() => setShowInclusions(null)} className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"><Plus className="w-6 h-6 rotate-45" /></button>
                  <h3 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">{showInclusions.name}</h3>
                  <p className="text-gray-500 mb-10">Complete list of parameters included in this package.</p>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                     {["CBC with ESR", "FBS / PPBS", "HbA1c", "Lipid Profile", "Liver Function Test", "Kidney Function Test", "TSH", "Urine Routine", "ECG", "Chest X-Ray", "Physical Consultation", "Dental Consultation", "Eye Checkup", "Vitamin D", "Vitamin B12", "Iron Profile"].map((test, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-700 py-3 border-b border-gray-50">
                           <div className="w-2 h-2 rounded-full bg-blue-400" />
                           <span className="text-sm font-bold">{test}</span>
                        </div>
                     ))}
                  </div>
                  <button onClick={() => setShowInclusions(null)} className="w-full h-14 bg-[#005580] text-white rounded-2xl font-bold mt-10 shadow-xl hover:bg-[#004466] transition-all">Close Details</button>
               </motion.div>
            </div>
         )}
      </AnimatePresence>

      {/* 3. Why Choose Our Health Checks */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-[4rem] blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700" />
                  <img src="/assets/images/localized/lab-technician.jpg" alt="Lab" className="relative rounded-[4rem] shadow-2xl w-full h-[600px] object-cover" />
                  <div className="absolute top-10 left-10 bg-white/90 backdrop-blur p-8 rounded-[3rem] shadow-2xl border border-white/20">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600"><ShieldCheck className="w-6 h-6" /></div>
                        <span className="font-bold text-lg text-[#0f172a]">NABL Accredited</span>
                     </div>
                     <p className="text-sm text-gray-500 font-medium">Global standard laboratory testing.</p>
                  </div>
               </div>
               <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-10 leading-tight">Expertise in <br />Diagnostics.</h2>
                  <div className="space-y-10">
                     {[
                        { title: "Advanced Automation", desc: "Our labs use the latest high-throughput robotic systems for near-zero human error.", icon: Activity },
                        { title: "Doctor Review", desc: "Every health check report is reviewed by a senior consultant for clinical accuracy.", icon: User },
                        { title: "Same-Day Reports", desc: "Fast turnaround times ensuring you can start your wellness plan immediately.", icon: Clock }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-8 group">
                           <div className="w-16 h-16 rounded-[2rem] bg-blue-50 text-[#005580] flex items-center justify-center shrink-0 group-hover:bg-[#005580] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                              <item.icon className="w-8 h-8" />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-[#0f172a] mb-2">{item.title}</h4>
                              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Interactive Steps Section */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] text-center mb-20">Your Healthcheck Journey</h2>
            <div className="grid md:grid-cols-4 gap-12 relative">
               <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-100 hidden lg:block -z-0" />
               {[
                  { title: "Pick Package", desc: "Select the most suitable plan.", step: "01" },
                  { title: "Confirm Slot", desc: "Choose a date & time.", step: "02" },
                  { title: "Fast 12 Hours", desc: "Stay on empty stomach.", step: "03" },
                  { title: "Get Results", desc: "Report & Consultation.", step: "04" }
               ].map((item, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 text-center relative z-10 group hover:shadow-xl transition-all"
                  >
                     <div className="w-12 h-12 rounded-full bg-[#005580] text-white flex items-center justify-center mx-auto mb-6 font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">{item.step}</div>
                     <h4 className="text-lg font-bold text-[#0f172a] mb-3">{item.title}</h4>
                     <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Booking Flow Form Section */}
      <section id="booking-form" className="py-32 bg-white">
         <div className="container-custom">
            <div className="bg-[#005580] rounded-[5rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row gap-20 shadow-[0_50px_100px_-20px_rgba(0,85,128,0.3)]">
               <div className="lg:w-5/12 relative z-10">
                  <h2 className="text-5xl font-serif font-bold mb-8">Secure Your <br />Appointment.</h2>
                  <p className="text-blue-100 text-lg mb-12 leading-relaxed">Fill in your details and our care manager will confirm your healthcheck slot within 15 minutes.</p>
                  
                  <motion.div 
                     layoutId="selected-pkg"
                     className="p-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
                  >
                     <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" /> Selected Package</p>
                     <h4 className="text-2xl font-bold mb-2">{selectedPkg.name}</h4>
                     <p className="text-3xl font-black text-white">{selectedPkg.price}</p>
                  </motion.div>
               </div>

               <div className="lg:w-7/12 relative z-10">
                  <AnimatePresence mode="wait">
                     {!bookingDone ? (
                        <motion.form 
                           key="form"
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           onSubmit={(e) => {e.preventDefault(); handleBooking();}} 
                           className="bg-white rounded-[3rem] p-10 shadow-2xl text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                           <div className="md:col-span-2">
                              <h3 className="text-2xl font-serif font-bold text-[#0f172a] mb-2">Patient Information</h3>
                              <p className="text-gray-500 text-sm">Please provide the details of the person undergoing the checkup.</p>
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                              <input type="text" required className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent" placeholder="John Doe" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                              <input type="tel" required className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent" placeholder="+91 89297 33550" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Preferred Date</label>
                              <input type="date" required className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</label>
                              <select className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent cursor-pointer">
                                 <option>Gurugram Branch</option>
                                 <option>Delhi Center</option>
                              </select>
                           </div>
                           <div className="md:col-span-2 pt-8">
                              <motion.button 
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}
                                 disabled={submitting}
                                 type="submit" 
                                 className="w-full h-16 bg-[#0f172a] text-white rounded-2xl font-black text-lg hover:bg-[#005580] transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70"
                              >
                                 {submitting ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <>Confirm Appointment Request <ArrowRight className="w-6 h-6" /></>}
                              </motion.button>
                           </div>
                        </motion.form>
                     ) : (
                        <motion.div 
                           key="success"
                           initial={{ opacity: 0, scale: 0.9 }} 
                           animate={{ opacity: 1, scale: 1 }} 
                           className="bg-white rounded-[3rem] p-12 shadow-2xl text-gray-900 text-center flex flex-col items-center justify-center min-h-[400px]"
                        >
                           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8 shadow-inner animate-bounce">
                              <CheckCircle className="w-12 h-12" />
                           </div>
                           <h3 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">Request Received!</h3>
                           <p className="text-gray-500 mb-10 text-lg max-w-sm leading-relaxed">Our care manager will call you at your provided number shortly to confirm your <strong>{selectedPkg.name}</strong>.</p>
                           <button onClick={() => setBookingDone(false)} className="text-[#005580] font-black uppercase tracking-widest text-sm hover:underline">Book another checkup</button>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Faq Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
         <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] text-center mb-16">Questions About Health Checks?</h2>
            <div className="space-y-4">
               {[
                  { q: "Do I need to be on an empty stomach?", a: "Yes, for accurate blood results (especially blood sugar and lipid profiles), a 10-12 hour overnight fast is mandatory." },
                  { q: "Can I take my regular medications?", a: "You may take essential heart or blood pressure medications with a sip of water. However, consult our care manager for diabetic medications." },
                  { q: "How long does the entire process take?", a: "Depending on the package, it usually takes between 2 to 4 hours. We aim to complete all tests efficiently." }
               ].map((faq, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                     <h4 className="font-bold text-lg text-[#0f172a] mb-2 flex items-center gap-3"><Info className="w-5 h-5 text-blue-500" /> {faq.q}</h4>
                     <p className="text-gray-500 ml-8 leading-relaxed">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Footer Banner */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white overflow-hidden relative">
         <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
               <h2 className="text-4xl font-serif font-bold mb-4">Healthy Living Starts Here.</h2>
               <p className="text-blue-200 text-lg opacity-80">Join 50,000+ individuals who trust Umang for their annual health screenings.</p>
            </div>
            <a href="tel:+918929733550" className="h-16 px-10 rounded-xl bg-white text-[#0f172a] font-black text-lg hover:bg-blue-50 transition-all flex items-center gap-3 shadow-2xl">
               <Smartphone className="w-6 h-6" /> Call for Assistance
            </a>
         </div>
      </section>

    </div>
  );
};

export default HealthCheckBooking;
