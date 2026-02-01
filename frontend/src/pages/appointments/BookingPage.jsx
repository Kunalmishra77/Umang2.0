import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, User, Phone, Mail, CreditCard, CheckCircle, 
  ArrowLeft, ArrowRight, ShieldCheck, Star, MapPin, Video, 
  Info, Bell, Smartphone, HelpCircle, FileText, MessageSquare
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Mock Data (In production, fetch based on ID)
const doctor = {
  id: 1,
  name: 'Dr. Sarah Johnson',
  dept: 'Cardiology',
  role: 'Senior Consultant',
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
  fee: '₹1,500',
  loc: 'Gurugram',
  rating: 4.9,
  nextSlot: 'Today, 10:00 AM'
};

const slots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '04:30 PM'
];

const BookingPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('book'); // 'book' or 'callback'
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', slot: '', message: '' });
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    setCallbackSubmitted(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-12 pb-12 font-sans selection:bg-[#023e8a] selection:text-white">
      <Helmet>
        <title>Book Appointment | Umang Hospital</title>
      </Helmet>

      {/* 1. Booking Hero - Spacious & Reassuring */}
      <section className="bg-[#023e8a] text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
         <div className="container-custom relative z-10">
            <Link to="/doctors" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 font-medium transition-colors">
               <ArrowLeft className="w-4 h-4" /> Back to Search
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Request an Appointment</h1>
               <p className="text-blue-100 text-lg max-w-2xl opacity-80">Take the first step towards recovery. Our booking system ensures you get to see your preferred specialist at your chosen time.</p>
            </motion.div>
         </div>
      </section>

      {/* 2. Main Booking Wizard */}
      <div className="container-custom -mt-16 relative z-20 mb-32">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: Context Card (Sticky) */}
          <div className="lg:col-span-4 h-fit sticky top-24">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10" />
               
               <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-100">
                     Selected Specialist
                  </span>
                  
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                     <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <h2 className="text-2xl font-bold text-[#0f172a]">{doctor.name}</h2>
                        <p className="text-blue-600 text-sm font-bold uppercase tracking-wide">{doctor.dept}</p>
                        <div className="flex items-center gap-1 text-yellow-400 mt-1">
                           <Star className="w-3 h-3 fill-current" /> <span className="text-gray-400 text-xs font-bold">{doctor.rating}</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4 text-sm">
                     <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">{doctor.loc} Branch</span>
                     </div>
                     <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <CreditCard className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">Consultation Fee: <strong className="text-[#0f172a] text-lg ml-1">{doctor.fee}</strong></span>
                     </div>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                  <p className="flex items-center justify-center gap-2 mb-1 text-gray-400 text-xs font-bold">
                     <ShieldCheck className="w-3 h-3 text-green-500" /> SECURE BOOKING
                  </p>
               </div>
            </div>
          </div>

          {/* RIGHT: Multi-Step Form */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden relative">
             
             {/* Tabs */}
             <div className="flex border-b border-gray-100">
                <button 
                  onClick={() => setActiveTab('book')}
                  className={`flex-1 py-6 text-xs font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'book' ? 'text-[#023e8a] bg-blue-50/50 border-b-2 border-[#023e8a]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Book Appointment
                </button>
                <button 
                  onClick={() => setActiveTab('callback')}
                  className={`flex-1 py-6 text-xs font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'callback' ? 'text-[#023e8a] bg-blue-50/50 border-b-2 border-[#023e8a]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Request Call Back
                </button>
             </div>

             {activeTab === 'book' ? (
               <>
                 {/* Progress Bar */}
                 <div className="absolute top-[68px] left-0 w-full h-1.5 bg-gray-100">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: `${(step / 3) * 100}%` }} 
                      className="h-full bg-[#023e8a]" 
                    />
                 </div>

                 <div className="flex-1 p-8 lg:p-16 overflow-y-auto">
                    <AnimatePresence mode="wait">
                       {step === 1 && (
                          <motion.div
                             key="step1"
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             className="space-y-10"
                          >
                             <div>
                                <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Patient Details</h2>
                                <p className="text-gray-500">Enter the details of the individual visiting the doctor.</p>
                             </div>

                             <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                                   <div className="relative">
                                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                                      <input 
                                        type="text" 
                                        placeholder="e.g. Rajesh Kumar" 
                                        className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-100 focus:border-[#023e8a] outline-none transition-all font-bold text-lg"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                      />
                                   </div>
                                </div>
                                <div className="space-y-3">
                                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                                   <div className="relative">
                                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                                      <input 
                                        type="tel" 
                                        placeholder="+91 98765 43210" 
                                        className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-100 focus:border-[#023e8a] outline-none transition-all font-bold text-lg"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                      />
                                   </div>
                                </div>
                             </div>
                          </motion.div>
                       )}

                       {step === 2 && (
                          <motion.div
                             key="step2"
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             className="space-y-10"
                          >
                             <div>
                                <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Schedule Slot</h2>
                                <p className="text-gray-500">Choose a convenient date and time for your visit.</p>
                             </div>

                             {/* Date Picker (Mock) */}
                             <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                   <button 
                                     key={i}
                                     className={`min-w-[110px] p-6 rounded-3xl border-2 transition-all text-center ${i === 0 ? 'border-[#023e8a] bg-blue-50 shadow-lg' : 'border-gray-100 hover:border-blue-200 bg-white'}`}
                                   >
                                      <span className="block text-[10px] font-black text-gray-400 uppercase mb-2">Jan</span>
                                      <span className={`block text-3xl font-black ${i === 0 ? 'text-[#023e8a]' : 'text-gray-900'}`}>{26 + i}</span>
                                      <span className="block text-[10px] font-bold text-gray-400 mt-2 uppercase">{i === 0 ? 'Today' : 'Wed'}</span>
                                   </button>
                                ))}
                             </div>

                             {/* Slots */}
                             <div>
                                <h4 className="font-black text-[#0f172a] text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                                   <Clock className="w-4 h-4 text-blue-500" /> Morning Sessions
                                </h4>
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                                   {slots.map((slot) => (
                                      <motion.button 
                                        key={slot}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setFormData({...formData, slot})}
                                        className={`py-4 rounded-2xl text-sm font-black border-2 transition-all ${
                                           formData.slot === slot 
                                             ? 'bg-[#023e8a] text-white border-[#023e8a] shadow-xl' 
                                             : 'bg-white text-gray-600 border-gray-100 hover:border-blue-300'
                                        }`}
                                      >
                                         {slot}
                                      </motion.button>
                                   ))}
                                </div>
                             </div>
                          </motion.div>
                       )}

                       {step === 3 && (
                          <motion.div
                             key="step3"
                             initial={{ opacity: 0, scale: 0.9 }}
                             animate={{ opacity: 1, scale: 1 }}
                             className="flex flex-col items-center text-center justify-center h-full py-12"
                          >
                             <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 shadow-inner animate-bounce">
                                <CheckCircle className="w-12 h-12 text-green-600" />
                             </div>
                             <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">Booking Confirmed!</h2>
                             <p className="text-gray-500 max-w-md mb-12 text-lg">
                                Your appointment with <span className="font-bold text-[#023e8a]">{doctor.name}</span> is confirmed for <span className="font-bold text-[#023e8a]">{formData.slot}</span>.
                             </p>
                             <div className="bg-gray-50 p-10 rounded-[3rem] w-full max-w-md border-2 border-gray-100 mb-12 text-left shadow-lg">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-gray-200 pb-4">Receipt: #UMG-882190</p>
                                <div className="space-y-4">
                                   <div className="flex justify-between">
                                      <span className="text-gray-400 font-bold text-xs uppercase">Patient</span>
                                      <span className="font-black text-[#0f172a]">{formData.name || 'Guest'}</span>
                                   </div>
                                   <div className="flex justify-between">
                                      <span className="text-gray-400 font-bold text-xs uppercase">Specialty</span>
                                      <span className="font-black text-[#0f172a]">{doctor.dept}</span>
                                   </div>
                                   <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                      <span className="text-gray-400 font-bold text-xs uppercase">Fee</span>
                                      <span className="font-black text-[#0f172a] text-2xl">{doctor.fee}</span>
                                   </div>
                                </div>
                             </div>
                             <Link to="/" className="h-14 px-12 bg-[#023e8a] text-white rounded-xl font-black text-lg hover:bg-[#002855] transition-all shadow-xl">Return Home</Link>
                          </motion.div>
                       )}
                    </AnimatePresence>
                 </div>

                 {/* Footer Actions */}
                 {step < 3 && (
                    <div className="p-10 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center">
                       {step > 1 ? (
                          <button onClick={prevStep} className="font-black text-xs uppercase tracking-widest text-gray-400 hover:text-[#0f172a] transition-all flex items-center gap-2">
                             <ArrowLeft className="w-4 h-4" /> Go Back
                          </button>
                       ) : (
                          <div />
                       )}
                       
                       <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         onClick={nextStep} 
                         disabled={step === 1 && !formData.name}
                         className={`h-14 px-10 rounded-xl font-black text-lg text-white flex items-center gap-3 shadow-xl transition-all ${
                            step === 1 && !formData.name ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#023e8a] hover:bg-[#002855]'
                         }`}
                       >
                          {step === 2 ? 'Confirm Booking' : 'Continue'} <ArrowRight className="w-5 h-5" />
                       </motion.button>
                    </div>
                 )}
               </>
             ) : (
               <div className="flex-1 p-8 lg:p-16 overflow-y-auto">
                 {!callbackSubmitted ? (
                    <motion.form 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleCallbackSubmit} 
                      className="space-y-8"
                    >
                       <div className="space-y-3">
                          <h2 className="text-3xl font-serif font-bold text-[#0f172a]">Request Call Back</h2>
                          <p className="text-gray-500">Leave your contact details and our patient relation officer will call you within 15 minutes.</p>
                       </div>

                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Your Name</label>
                             <input type="text" required className="w-full h-14 bg-gray-50 rounded-xl px-6 border-2 border-gray-100 focus:border-[#023e8a] outline-none font-bold text-lg transition-all" />
                          </div>
                          <div className="space-y-3">
                             <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Phone Number</label>
                             <input type="tel" required className="w-full h-14 bg-gray-50 rounded-xl px-6 border-2 border-gray-100 focus:border-[#023e8a] outline-none font-bold text-lg transition-all" />
                          </div>
                       </div>
                       
                       <div className="space-y-3">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Message (Optional)</label>
                          <textarea rows="4" className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 focus:border-[#023e8a] outline-none font-bold text-lg transition-all resize-none" placeholder="Briefly describe your medical query..."></textarea>
                       </div>

                       <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full h-16 rounded-2xl bg-[#023e8a] text-white font-black text-xl hover:bg-[#002855] transition-all shadow-2xl flex items-center justify-center gap-4"
                       >
                          Submit Request <ArrowRight className="w-6 h-6" />
                       </motion.button>
                    </motion.form>
                 ) : (
                    <motion.div 
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="flex flex-col items-center justify-center h-full text-center py-12"
                    >
                       <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 shadow-inner animate-bounce">
                          <CheckCircle className="w-12 h-12 text-green-600" />
                       </div>
                       <h3 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">Request Received!</h3>
                       <p className="text-gray-500 text-lg max-w-sm mx-auto leading-relaxed">
                          Our support team is notified. Expect a call shortly at your provided number.
                       </p>
                       <button onClick={() => setCallbackSubmitted(false)} className="mt-12 text-[#023e8a] font-black uppercase tracking-widest text-sm hover:underline">Submit Another Request</button>
                    </motion.div>
                 )}
               </div>
             )}
          </div>

        </div>
      </div>

      {/* 3. Tele-consultation vs In-person */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] text-center mb-20">Choose Your Mode of Consultation</h2>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="p-12 rounded-[3rem] bg-gray-50 border-2 border-gray-100 group hover:border-[#023e8a] transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#023e8a] flex items-center justify-center mb-8 group-hover:bg-[#023e8a] group-hover:text-white transition-all">
                     <Video className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-[#0f172a]">Tele-Consultation</h3>
                  <p className="text-gray-500 text-lg mb-8 leading-relaxed">Ideal for second opinions, routine follow-ups, and non-emergency medical queries from the comfort of your home.</p>
                  <ul className="space-y-4 mb-10">
                     {["HD Video Quality", "Instant Digital RX", "Secure & Confidential"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-bold text-[#0f172a]">
                           <CheckCircle className="w-5 h-5 text-green-500" /> {item}
                        </li>
                     ))}
                  </ul>
                  <Link to="/services/telemedicine" className="inline-flex items-center gap-2 font-black text-blue-600 hover:gap-4 transition-all">Start Virtual Visit <ArrowRight className="w-5 h-5" /></Link>
               </div>
               <div className="p-12 rounded-[3rem] bg-gray-50 border-2 border-gray-100 group hover:border-[#023e8a] transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#023e8a] flex items-center justify-center mb-8 group-hover:bg-[#023e8a] group-hover:text-white transition-all">
                     <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-[#0f172a]">In-Person Visit</h3>
                  <p className="text-gray-500 text-lg mb-8 leading-relaxed">Comprehensive physical examination at our advanced clinical facilities with immediate access to diagnostics.</p>
                  <ul className="space-y-4 mb-10">
                     {["On-site Diagnostics", "Physical Assessment", "Immediate Lab Access"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-bold text-[#0f172a]">
                           <CheckCircle className="w-5 h-5 text-green-500" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="inline-flex items-center gap-2 font-black text-blue-600 hover:gap-4 transition-all">Hospital Locations <ArrowRight className="w-5 h-5" /></button>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Insurance Assistance */}
      <section className="py-16 bg-[#023e8a] text-white">
         <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
               <h2 className="text-4xl font-serif font-bold mb-4">Cashless Treatment Assistance</h2>
               <p className="text-blue-100 text-lg opacity-80">We are empanelled with all major TPAs and insurance providers. Check your eligibility now.</p>
            </div>
            <Link to="/contact" className="h-16 px-10 rounded-xl bg-white text-[#023e8a] font-black text-lg hover:bg-blue-50 transition-all flex items-center gap-3 shadow-2xl">
               <ShieldCheck className="w-6 h-6" /> Check Eligibility
            </Link>
         </div>
      </section>

      {/* 5. Preparation Guide */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] text-center mb-20">Before You Visit</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: "Bring Records", desc: "Carry all previous medical reports, prescriptions, and current medication list.", icon: FileText },
                  { title: "Arrival Time", desc: "Please arrive at least 15 minutes before your slot for registration.", icon: Clock },
                  { title: "ID & Insurance", desc: "Bring a government-issued photo ID and your insurance card.", icon: User }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm text-center">
                     <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-8 text-[#023e8a]">
                        <item.icon className="w-8 h-8" />
                     </div>
                     <h4 className="text-xl font-bold text-[#0f172a] mb-4">{item.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Patient Portal Benefits */}
      <section className="py-32 bg-white overflow-hidden">
         <div className="container-custom grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-blue-100 rounded-[4rem] -rotate-3" />
               <img src="https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=1000" alt="Mobile Portal" className="relative rounded-[4rem] shadow-2xl w-full h-[600px] object-cover" />
               <div className="absolute bottom-10 right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[250px]">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white"><Bell className="w-5 h-5" /></div>
                     <span className="font-bold text-sm">Reminders</span>
                  </div>
                  <p className="text-xs text-gray-500 font-bold leading-relaxed">Medicine refill reminder: Take Atorvastatin at 9 PM.</p>
               </div>
            </div>
            <div>
               <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-8 inline-block shadow-sm">Digital Care</span>
               <h2 className="text-5xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">Manage Your Health on the Go.</h2>
               <p className="text-gray-500 text-xl leading-relaxed mb-12">
                  Create an account to access our Patient Portal. View lab reports, manage bookings, and communicate with your care team seamlessly.
               </p>
               <div className="space-y-6 mb-12">
                  {[
                     { title: "Instant Lab Reports", desc: "Download and share your results securely." },
                     { title: "Family Health Cards", desc: "Manage multiple family members in one app." },
                     { title: "Medication Refills", desc: "Set reminders and order genuine medicines." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-start group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#023e8a] group-hover:text-white transition-all">
                           <Smartphone className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-[#023e8a] transition-colors">{item.title}</h4>
                           <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <Link to="/register" className="h-16 px-10 rounded-xl bg-[#0f172a] text-white font-black text-lg hover:bg-[#023e8a] transition-all flex items-center gap-3 w-fit">
                  Create Free Account <ArrowRight className="w-6 h-6" />
               </Link>
            </div>
         </div>
      </section>

      {/* 7. Contact Support */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
         <div className="container-custom text-center max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-12">Need Assistance with Booking?</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center"><MessageSquare className="w-8 h-8" /></div>
                  <div className="text-left">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp Support</p>
                     <p className="text-xl font-black text-[#0f172a]">89297 33551</p>
                  </div>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center"><HelpCircle className="w-8 h-8" /></div>
                  <div className="text-left">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">24/7 Helpline</p>
                     <p className="text-xl font-black text-[#0f172a]">0124 456 7890</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default BookingPage;
