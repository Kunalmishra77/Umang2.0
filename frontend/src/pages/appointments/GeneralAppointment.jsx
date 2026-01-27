import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, User, Phone, Mail, Clock, ShieldCheck, 
  CheckCircle, ArrowRight, ArrowLeft, Heart, Activity, 
  Stethoscope, MessageSquare, Info, Star, Bell, Video, HelpCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const GeneralAppointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ 
    type: 'new', 
    specialty: '', 
    name: '', 
    phone: '', 
    email: '', 
    date: '', 
    time: '', 
    reason: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const specialties = [
    "Cardiology", "Neurology", "Orthopaedics", "Gastroenterology", 
    "General Surgery", "Pediatrics", "Oncology", "Nephrology"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success state
    }, 2000);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      <Helmet>
        <title>Request an Appointment | Umang Hospital</title>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="bg-[#005580] text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
         <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Expert Care, <br /><span className="text-cyan-300">Just a Click Away.</span></h1>
               <p className="text-xl text-blue-100 font-light max-w-2xl mx-auto opacity-90">
                  Book your consultation with India's leading specialists. Our patient relation team will ensure a seamless experience for you.
               </p>
            </motion.div>
         </div>
      </section>

      {/* 2. Booking Wizard */}
      <div className="container-custom -mt-16 relative z-20 pb-32">
         <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
               
               {/* Progress Bar */}
               <div className="flex border-b border-gray-100 bg-gray-50/50">
                  {[
                    { s: 1, l: "Selection" },
                    { s: 2, l: "Patient Info" },
                    { s: 3, l: "Schedule" }
                  ].map((item) => (
                    <div key={item.s} className={`flex-1 py-6 flex items-center justify-center gap-3 transition-all ${step >= item.s ? 'text-[#005580]' : 'text-gray-400'}`}>
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= item.s ? 'bg-[#005580] text-white' : 'bg-gray-200'}`}>
                          {item.s}
                       </div>
                       <span className="hidden sm:inline font-black uppercase tracking-widest text-[10px]">{item.l}</span>
                    </div>
                  ))}
               </div>

               <div className="p-8 md:p-16">
                  <AnimatePresence mode="wait">
                     {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                           <div className="text-center">
                              <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">What are you looking for?</h2>
                              <p className="text-gray-500">Select the type of appointment and specialty.</p>
                           </div>

                           <div className="grid sm:grid-cols-2 gap-6">
                              <div 
                                 onClick={() => setFormData({...formData, type: 'new'})}
                                 className={`p-8 rounded-[2rem] border-2 cursor-pointer transition-all ${formData.type === 'new' ? 'border-[#005580] bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}
                              >
                                 <User className={`w-10 h-10 mb-4 ${formData.type === 'new' ? 'text-[#005580]' : 'text-gray-400'}`} />
                                 <h3 className="font-bold text-lg">New Patient</h3>
                                 <p className="text-sm text-gray-500 mt-1">First time visiting our hospital.</p>
                              </div>
                              <div 
                                 onClick={() => setFormData({...formData, type: 'followup'})}
                                 className={`p-8 rounded-[2rem] border-2 cursor-pointer transition-all ${formData.type === 'followup' ? 'border-[#005580] bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}
                              >
                                 <Clock className={`w-10 h-10 mb-4 ${formData.type === 'followup' ? 'text-[#005580]' : 'text-gray-400'}`} />
                                 <h3 className="font-bold text-lg">Follow-up</h3>
                                 <p className="text-sm text-gray-500 mt-1">Returning for a review or checkup.</p>
                              </div>
                           </div>

                           <div className="space-y-4">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Select Specialty</label>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                 {specialties.map(spec => (
                                    <button 
                                       key={spec}
                                       onClick={() => setFormData({...formData, specialty: spec})}
                                       className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${formData.specialty === spec ? 'bg-[#005580] text-white border-[#005580]' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-200'}`}
                                    >
                                       {spec}
                                    </button>
                                 ))}
                              </div>
                           </div>

                           <button 
                              onClick={() => setStep(2)}
                              disabled={!formData.specialty}
                              className="w-full h-14 bg-[#005580] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] transition-all shadow-lg disabled:opacity-50"
                           >
                              Next Step <ArrowRight className="w-4 h-4" />
                           </button>
                        </motion.div>
                     )}

                     {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                           <div className="text-center">
                              <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Patient Details</h2>
                              <p className="text-gray-500">Provide contact information for the patient.</p>
                           </div>

                           <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Full Name</label>
                                 <input 
                                    type="text" 
                                    required
                                    className="w-full h-14 px-6 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold text-lg"
                                    placeholder="Enter full name"
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Phone Number</label>
                                 <input 
                                    type="tel" 
                                    required
                                    className="w-full h-14 px-6 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold text-lg"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                 />
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Email Address</label>
                              <input 
                                 type="email" 
                                 className="w-full h-14 px-6 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold text-lg"
                                 placeholder="name@example.com"
                                 value={formData.email}
                                 onChange={e => setFormData({...formData, email: e.target.value})}
                              />
                           </div>

                           <div className="flex gap-4 pt-4">
                              <button onClick={() => setStep(1)} className="w-1/3 h-14 border-2 border-gray-100 text-gray-400 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                 <ArrowLeft className="w-4 h-4" /> Back
                              </button>
                              <button 
                                 onClick={() => setStep(3)}
                                 disabled={!formData.name || !formData.phone}
                                 className="w-2/3 h-14 bg-[#005580] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] transition-all shadow-lg disabled:opacity-50"
                              >
                                 Final Step <ArrowRight className="w-4 h-4" />
                              </button>
                           </div>
                        </motion.div>
                     )}

                     {step === 3 && (
                        <motion.form key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleSubmit} className="space-y-8">
                           <div className="text-center">
                              <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Schedule & Reason</h2>
                              <p className="text-gray-500">When would you like to visit?</p>
                           </div>

                           <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Preferred Date</label>
                                 <input 
                                    type="date" 
                                    required
                                    className="w-full h-14 px-6 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold text-lg"
                                    value={formData.date}
                                    onChange={e => setFormData({...formData, date: e.target.value})}
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Time Slot</label>
                                 <select 
                                    className="w-full h-14 px-6 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold text-lg appearance-none cursor-pointer"
                                    value={formData.time}
                                    onChange={e => setFormData({...formData, time: e.target.value})}
                                 >
                                    <option value="">Select Slot</option>
                                    <option>Morning (09:00 AM - 12:00 PM)</option>
                                    <option>Afternoon (12:00 PM - 04:00 PM)</option>
                                    <option>Evening (04:00 PM - 08:00 PM)</option>
                                 </select>
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Reason for Visit</label>
                              <textarea 
                                 rows="3"
                                 className="w-full p-6 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold text-lg resize-none"
                                 placeholder="Symptoms or medical notes..."
                                 value={formData.reason}
                                 onChange={e => setFormData({...formData, reason: e.target.value})}
                              ></textarea>
                           </div>

                           <div className="flex gap-4 pt-4">
                              <button type="button" onClick={() => setStep(2)} className="w-1/3 h-14 border-2 border-gray-100 text-gray-400 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                 <ArrowLeft className="w-4 h-4" /> Back
                              </button>
                              <button 
                                 type="submit"
                                 disabled={isSubmitting || !formData.date}
                                 className="w-2/3 h-14 bg-[#005580] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] transition-all shadow-lg disabled:opacity-50"
                              >
                                 {isSubmitting ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <>Request Appointment <CheckCircle className="w-4 h-4" /></>}
                              </button>
                           </div>
                        </motion.form>
                     )}

                     {step === 4 && (
                        <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-bounce">
                              <CheckCircle className="w-12 h-12 text-green-600" />
                           </div>
                           <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">Request Sent!</h2>
                           <p className="text-gray-500 text-lg max-w-sm mx-auto leading-relaxed mb-12">
                              Thank you, {formData.name}. Our patient relation team will call you at <span className="text-[#005580] font-bold">{formData.phone}</span> to confirm your slot within 15 minutes.
                           </p>
                           <Link to="/" className="inline-flex items-center gap-2 h-14 px-10 rounded-xl bg-[#0f172a] text-white font-bold hover:bg-[#005580] transition-all shadow-xl">
                              Back to Home <ArrowRight className="w-4 h-4" />
                           </Link>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </div>

      {/* 3. Why Book with Us */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
               <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100">
                  <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Verified Specialists</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Consult with board-certified doctors with over 15+ years of clinical experience.</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100">
                  <Clock className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Zero Wait Time</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our smart scheduling system ensures you see the doctor within 15 minutes of your slot.</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100">
                  <Bell className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Smart Alerts</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Receive instant updates and reminders about your appointment via WhatsApp and SMS.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Tele-Medicine Option */}
      <section className="py-32 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
         <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Can't travel? <br />Try Tele-Consultation.</h2>
               <p className="text-blue-200 text-lg mb-10 leading-relaxed">
                  Get high-quality medical advice from the comfort of your home. Secure HD video calls with our top specialists.
               </p>
               <Link to="/services/telemedicine" className="h-16 px-10 rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition-all flex items-center gap-3 w-fit shadow-xl shadow-blue-900/50">
                  <Video className="w-6 h-6" /> Start Virtual Visit
               </Link>
            </div>
            <div className="relative">
               <img src="https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=1000" alt="Telemedicine" className="rounded-[3rem] shadow-2xl border-4 border-white/10" />
            </div>
         </div>
      </section>

      {/* 5. Insurance & TPA */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-16">
               <div className="max-w-xl">
                  <span className="text-[#005580] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Financial Ease</span>
                  <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Cashless Hospitalization</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">We are empanelled with all major insurance providers and TPAs. Our dedicated desk will assist you with all documentation.</p>
                  <div className="flex gap-4">
                     {[1, 2, 3, 4].map(i => <div key={i} className="w-16 h-10 bg-gray-100 rounded-lg animate-pulse" />)}
                  </div>
               </div>
               <Link to="/contact" className="h-16 px-10 rounded-xl bg-[#005580] text-white font-bold text-lg hover:bg-[#004466] transition-all flex items-center gap-3 shadow-lg">
                  <ShieldCheck className="w-6 h-6" /> Check Eligibility
               </Link>
            </div>
         </div>
      </section>

      {/* 6. Support & Help */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="container-custom text-center max-w-3xl">
            <HelpCircle className="w-16 h-16 text-gray-200 mx-auto mb-8" />
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-6">Need help booking?</h2>
            <p className="text-gray-500 mb-12">If you are facing any issues with the online form, please call our 24/7 patient helpline for assistance.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
               <div className="flex flex-col items-center">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Helpline</p>
                  <p className="text-2xl font-black text-[#0f172a]">0124 456 7890</p>
               </div>
               <div className="w-[1px] h-12 bg-gray-200 hidden sm:block" />
               <div className="flex flex-col items-center">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Emergency</p>
                  <p className="text-2xl font-black text-red-600">89297 33551</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default GeneralAppointment;
