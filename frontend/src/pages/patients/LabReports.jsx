import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, Search, Download, ShieldCheck, Clock, MessageCircle, 
  ArrowRight, CheckCircle, Smartphone, Lock, Info, Bell,
  User, Calendar, Mail, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LabReports = () => {
  const [trackId, setTrackId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackResult, setTrackResult] = useState(null);
  const [notifying, setNotifying] = useState(false);
  const [showSample, setShowSample] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    setIsTracking(true);
    setTimeout(() => {
      setIsTracking(false);
      setTrackResult({
        status: "Processing",
        patient: "Rajesh Kumar",
        date: "Jan 26, 2026",
        eta: "Today, 6 PM"
      });
    }, 1500);
  };

  const handleNotify = () => {
    setNotifying(true);
    setTimeout(() => {
      setNotifying(false);
      alert("SMS Notification scheduled!");
    }, 2000);
  };

  const scrollToTracker = () => {
    document.getElementById('tracker').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Access Lab Reports Online | Umang Hospital</title>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[550px] flex items-center bg-[#005580] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-cyan-300 font-bold uppercase tracking-widest text-[10px] mb-8">
              <FileText className="w-4 h-4" /> Digital Health Records
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Your Reports <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Simplified.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Securely access, download, and share your diagnostic results anytime, anywhere. Your health data is now just a tap away.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/login" className="h-16 px-10 rounded-full bg-white text-[#005580] font-black text-lg hover:bg-cyan-50 transition-all shadow-2xl flex items-center gap-2">
                     Login to Portal <ArrowRight className="w-5 h-5" />
                  </Link>
               </motion.div>
               <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSample(true)} 
                  className="h-16 px-10 rounded-full bg-white/10 text-white border border-white/20 font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md"
               >
                  View Sample Report
               </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sample Report Modal */}
      <AnimatePresence>
         {showSample && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
               <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setShowSample(false)}
                  className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-sm"
               />
               <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white w-full max-w-3xl rounded-xl relative z-10 shadow-2xl overflow-hidden flex flex-col h-[90vh]"
               >
                  <div className="bg-gray-50 p-6 flex justify-between items-center border-b border-gray-200">
                     <div className="flex items-center gap-3">
                        <FileText className="w-6 h-6 text-[#005580]" />
                        <h3 className="font-bold text-[#0f172a]">Digital Report Preview</h3>
                     </div>
                     <button onClick={() => setShowSample(false)} className="text-gray-400 hover:text-gray-600 font-bold uppercase text-xs">Close</button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-12 bg-white font-serif">
                     <div className="flex justify-between border-b-4 border-[#005580] pb-8 mb-12">
                        <div className="text-3xl font-black text-[#005580]">UMANG HOSPITAL</div>
                        <div className="text-right text-xs">
                           <p>Sector 55, Gurugram, 122011</p>
                           <p>NABL Accredited Facility</p>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-12 mb-12 text-sm">
                        <div className="space-y-1">
                           <p><span className="font-bold">Patient Name:</span> Rajesh Kumar</p>
                           <p><span className="font-bold">Age/Sex:</span> 45 / Male</p>
                           <p><span className="font-bold">Ref By:</span> Dr. Sarah Johnson</p>
                        </div>
                        <div className="space-y-1 text-right">
                           <p><span className="font-bold">Bill No:</span> UMG-2026-882</p>
                           <p><span className="font-bold">Date:</span> 26 Jan 2026</p>
                           <p><span className="font-bold">Status:</span> Final Report</p>
                        </div>
                     </div>

                     <div className="mb-12">
                        <h4 className="font-bold text-center border-y border-gray-200 py-2 mb-8 bg-gray-50">CLINICAL PATHOLOGY</h4>
                        <table className="w-full text-left">
                           <thead>
                              <tr className="border-b-2 border-gray-100 text-xs uppercase text-gray-400">
                                 <th className="py-4">Parameter</th>
                                 <th className="py-4">Result</th>
                                 <th className="py-4">Reference Range</th>
                              </tr>
                           </thead>
                           <tbody className="text-sm">
                              <tr className="border-b border-gray-50">
                                 <td className="py-4 font-bold">Haemoglobin</td>
                                 <td className="py-4">14.5 g/dL</td>
                                 <td className="py-4 text-gray-500">13.0 - 17.0</td>
                              </tr>
                              <tr className="border-b border-gray-50">
                                 <td className="py-4 font-bold">Blood Glucose (Fasting)</td>
                                 <td className="py-4 text-red-600 font-black">126 mg/dL *</td>
                                 <td className="py-4 text-gray-500">70 - 100</td>
                              </tr>
                              <tr className="border-b border-gray-50">
                                 <td className="py-4 font-bold">Total Cholesterol</td>
                                 <td className="py-4">188 mg/dL</td>
                                 <td className="py-4 text-gray-500">&lt; 200</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                     <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-12">
                        <p className="text-xs font-bold text-blue-800 mb-2">CLINICAL REMARKS:</p>
                        <p className="text-sm text-blue-900/70 italic leading-relaxed">Blood sugar levels are borderline high. Recommended follow-up with a clinical nutritionist and regular lipid panel monitoring.</p>
                     </div>

                     <div className="flex justify-end gap-12 pt-12 border-t border-gray-100">
                        <div className="text-center">
                           <div className="w-24 h-12 border border-dashed border-gray-200 mb-2 flex items-center justify-center text-[8px] text-gray-300 uppercase">Hospital Seal</div>
                           <p className="text-[10px] font-bold">Digital Signature</p>
                        </div>
                     </div>
                  </div>

                  <div className="p-6 bg-gray-50 flex gap-4">
                     <button className="flex-1 h-14 bg-[#005580] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] transition-all">
                        <Download className="w-5 h-5" /> Download PDF
                     </button>
                     <button onClick={() => setShowSample(false)} className="px-8 h-14 border border-gray-200 rounded-xl font-bold text-gray-500 hover:bg-white transition-all">Dismiss</button>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>

      {/* 2. Live Tracker Section */}
      <section id="tracker" className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-gray-100 flex flex-col lg:flex-row gap-20 items-center">
               <div className="lg:w-5/12">
                  <span className="text-[#005580] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Real-Time Updates</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8">Track Your <br />Report Status.</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10">Enter your Registration ID or Bill Number to see exactly where your samples are in the clinical process.</p>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 text-sm font-bold text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" /> Sample Collection Done
                     </div>
                     <div className="flex items-center gap-4 text-sm font-bold text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" /> Laboratory Processing
                     </div>
                     <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-200" /> Doctor Validation
                     </div>
                  </div>
               </div>

               <div className="lg:w-7/12 w-full">
                  <div className="bg-[#0f172a] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden transition-all duration-500">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                     
                     <AnimatePresence mode="wait">
                        {!trackResult ? (
                           <motion.form 
                              key="track-form"
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              onSubmit={handleTrack} 
                              className="relative z-10"
                           >
                              <h3 className="text-white text-2xl font-bold mb-8">Instant Status Check</h3>
                              <div className="space-y-6">
                                 <div className="space-y-3">
                                    <label className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Bill / ID Number</label>
                                    <input 
                                       type="text" 
                                       required
                                       className="w-full h-16 bg-white/5 border-b-2 border-white/20 focus:border-blue-400 outline-none text-white font-bold text-2xl transition-all"
                                       placeholder="e.g. UMG-99281"
                                       value={trackId}
                                       onChange={(e) => setTrackId(e.target.value)}
                                    />
                                 </div>
                                 <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isTracking} 
                                    className="w-full h-16 bg-blue-500 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-blue-900/50"
                                 >
                                    {isTracking ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <>Track My Samples <Search className="w-6 h-6" /></>}
                                 </motion.button>
                              </div>
                           </motion.form>
                        ) : (
                           <motion.div 
                              key="track-result"
                              initial={{ opacity: 0, x: 20 }} 
                              animate={{ opacity: 1, x: 0 }} 
                              exit={{ opacity: 0, x: -20 }}
                              className="relative z-10 text-white"
                           >
                              <div className="flex justify-between items-start mb-10 pb-10 border-b border-white/10">
                                 <div>
                                    <p className="text-blue-400 font-bold text-xs uppercase mb-2">Patient Name</p>
                                    <h4 className="text-3xl font-serif font-bold">{trackResult.patient}</h4>
                                 </div>
                                 <div className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl text-sm font-black border border-yellow-500/30">
                                    {trackResult.status}
                                 </div>
                              </div>
                              <div className="grid grid-cols-2 gap-8 mb-12">
                                 <div>
                                    <p className="text-white/40 font-bold text-[10px] uppercase mb-1 tracking-widest">Billing Date</p>
                                    <p className="font-bold">{trackResult.date}</p>
                                 </div>
                                 <div>
                                    <p className="text-white/40 font-bold text-[10px] uppercase mb-1 tracking-widest">Estimated Ready By</p>
                                    <p className="font-bold">{trackResult.eta}</p>
                                 </div>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-4">
                                 <button onClick={() => setTrackResult(null)} className="flex-1 h-14 rounded-xl border border-white/20 hover:bg-white/10 font-bold transition-all text-sm">Close</button>
                                 <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleNotify}
                                    disabled={notifying}
                                    className="flex-1 h-14 bg-white text-[#0f172a] rounded-xl font-bold hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2"
                                 >
                                    {notifying ? <div className="w-4 h-4 border-2 border-[#0f172a] border-t-transparent rounded-full animate-spin" /> : 'Notify Me via SMS'}
                                 </motion.button>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Access Channels */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] text-center mb-20">Multiple Ways to Get Results</h2>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { title: "WhatsApp Alerts", desc: "Receive an automated PDF directly on your registered WhatsApp number as soon as it's ready.", icon: MessageCircle, color: "text-green-600 bg-green-50" },
                  { title: "Umang Portal", desc: "Log in to our encrypted patient portal to see historical trends and lifetime medical records.", icon: ShieldCheck, color: "text-blue-600 bg-blue-50" },
                  { title: "Physical Collection", desc: "Visit our 24/7 report dispatch desk for printed copies with the official hospital seal.", icon: Smartphone, color: "text-purple-600 bg-purple-50" }
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group text-center"
                  >
                     <div className={`w-20 h-20 rounded-[2.5rem] ${item.color} flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110`}>
                        <item.icon className="w-10 h-10" />
                     </div>
                     <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{item.title}</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Security & Privacy */}
      <section className="py-32 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
         <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-blue-500/20 rounded-[4rem] blur-[100px]" />
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] p-12 md:p-20 shadow-2xl relative z-10">
                  <Lock className="w-20 h-20 text-blue-400 mb-10 mx-auto" />
                  <h3 className="text-3xl font-serif font-bold text-center mb-8">Bank-Grade Encryption.</h3>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                        <CheckCircle className="w-6 h-6 text-blue-400" />
                        <span className="font-medium">256-bit SSL Data Protection</span>
                     </div>
                     <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                        <CheckCircle className="w-6 h-6 text-blue-400" />
                        <span className="font-medium">Multi-Factor Authentication</span>
                     </div>
                     <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                        <CheckCircle className="w-6 h-6 text-blue-400" />
                        <span className="font-medium">Compliance with HIPAA & GDPR</span>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Your Privacy is <br /><span className="text-blue-400">Our Mandate.</span></h2>
               <p className="text-blue-100 text-xl leading-relaxed mb-12 opacity-80">
                  We understand the sensitivity of medical data. Only you and your treating doctors have access to your digital lab reports. Our systems are audited daily for security excellence.
               </p>
               <button className="h-16 px-10 rounded-full bg-blue-500 text-white font-black text-lg hover:bg-blue-600 transition-all flex items-center gap-3">
                  Read Data Policy <ArrowRight className="w-6 h-6" />
               </button>
            </div>
         </div>
      </section>

      {/* 5. Support Section */}
      <section className="py-32 bg-white">
         <div className="container-custom max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-16">Facing Trouble Accessing Reports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 flex flex-col items-center group hover:bg-white hover-lift transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><Mail className="w-8 h-8" /></div>
                  <h4 className="font-bold text-[#0f172a] text-xl mb-2">Email Desk</h4>
                  <p className="text-gray-500 mb-6 text-sm">Typically responds in 4 hours.</p>
                  <p className="text-lg font-black text-[#005580]">Umanghospitalgurugram@gmail.com</p>
               </div>
               <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 flex flex-col items-center group hover:bg-white hover-lift transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6"><Phone className="w-8 h-8" /></div>
                  <h4 className="font-bold text-[#0f172a] text-xl mb-2">Call Support</h4>
                  <p className="text-gray-500 mb-6 text-sm">Direct line to Laboratory Desk.</p>
                  <p className="text-lg font-black text-[#005580]">+91 124 456 7899</p>
               </div>
            </div>
         </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
         <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] text-center mb-16">Common Queries</h2>
            <div className="space-y-4">
               {[
                  { q: "How long are reports stored online?", a: "Your reports are stored for a lifetime in our patient portal. You can access reports dating back to 2020 at any time." },
                  { q: "What should I do if my report is 'Delayed'?", a: "Rarely, complex tests like cultures or biopsies may require more time. Our team will contact you if any extra validation is needed." },
                  { q: "Can I get my reports on multiple email IDs?", a: "For security, we only send reports to the email registered at the time of billing. You can update this at the hospital reception." }
               ].map((faq, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                     <h4 className="font-bold text-lg text-[#0f172a] mb-2 flex items-center gap-3"><Info className="w-5 h-5 text-blue-500" /> {faq.q}</h4>
                     <p className="text-gray-500 ml-8 leading-relaxed">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default LabReports;
