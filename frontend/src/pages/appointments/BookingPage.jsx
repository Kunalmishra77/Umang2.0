import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, CreditCard, CheckCircle, ArrowLeft, ArrowRight, ShieldCheck, Star, MapPin } from 'lucide-react';
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
    <div className="bg-[#f8fafc] min-h-screen pt-20 pb-12 font-sans selection:bg-[#023e8a] selection:text-white">
      <Helmet>
        <title>Book Appointment | Umang Hospital</title>
      </Helmet>

      <div className="container-custom">
        <Link to="/doctors" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#023e8a] mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Doctors
        </Link>

        <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[800px]">
          
          {/* LEFT: Context Card (Sticky) */}
          <div className="lg:col-span-4 lg:h-full">
            <div className="bg-[#023e8a] text-white rounded-[2.5rem] p-8 h-full flex flex-col relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
               
               <div className="relative z-10 flex-1">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
                     Selected Specialist
                  </span>
                  
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 border-4 border-white/10 shadow-lg">
                     <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  </div>

                  <h2 className="text-3xl font-serif font-bold mb-1">{doctor.name}</h2>
                  <p className="text-blue-200 mb-6 font-light">{doctor.role}</p>

                  <div className="space-y-4 text-sm text-blue-100">
                     <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <MapPin className="w-5 h-5 text-blue-300" />
                        <span>{doctor.loc} Branch</span>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <CreditCard className="w-5 h-5 text-blue-300" />
                        <span>Consultation Fee: <strong className="text-white text-lg ml-1">{doctor.fee}</strong></span>
                     </div>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-white/10 text-xs text-blue-200/60 text-center">
                  <p className="flex items-center justify-center gap-2 mb-1">
                     <ShieldCheck className="w-3 h-3" /> Secure Booking
                  </p>
                  <p>Your data is encrypted and safe.</p>
               </div>
            </div>
          </div>

          {/* RIGHT: Multi-Step Form */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col overflow-hidden relative">
             
             {/* Tabs */}
             <div className="flex border-b border-gray-100">
                <button 
                  onClick={() => setActiveTab('book')}
                  className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'book' ? 'text-[#023e8a] bg-blue-50/50 border-b-2 border-[#023e8a]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Book Appointment
                </button>
                <button 
                  onClick={() => setActiveTab('callback')}
                  className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'callback' ? 'text-[#023e8a] bg-blue-50/50 border-b-2 border-[#023e8a]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Request Call Back
                </button>
             </div>

             {activeTab === 'book' ? (
               <>
                 {/* Progress Bar */}
                 <div className="absolute top-[58px] left-0 w-full h-1 bg-gray-100">
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
                             className="space-y-8"
                          >
                             <h2 className="text-3xl font-serif font-bold text-[#0f172a]">Patient Details</h2>
                             <p className="text-gray-500 -mt-6">Please enter the details of the patient visiting.</p>

                             <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                   <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                                   <div className="relative">
                                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                      <input 
                                        type="text" 
                                        placeholder="e.g. Rajesh Kumar" 
                                        className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#023e8a] focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                      />
                                   </div>
                                </div>
                                <div className="space-y-2">
                                   <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                                   <div className="relative">
                                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                      <input 
                                        type="tel" 
                                        placeholder="+91 98765 43210" 
                                        className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#023e8a] focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium"
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
                             className="space-y-8"
                          >
                             <h2 className="text-3xl font-serif font-bold text-[#0f172a]">Select Schedule</h2>
                             <p className="text-gray-500 -mt-6">Choose a date and time that works for you.</p>

                             {/* Date Picker (Mock) */}
                             <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                                {[0, 1, 2, 3, 4].map((i) => (
                                   <button 
                                     key={i}
                                     className={`min-w-[100px] p-4 rounded-2xl border transition-all ${i === 0 ? 'border-[#023e8a] bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                                   >
                                      <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Jan</span>
                                      <span className="block text-2xl font-bold text-[#0f172a]">{26 + i}</span>
                                      <span className="block text-xs font-medium text-gray-500 mt-1">Today</span>
                                   </button>
                                ))}
                             </div>

                             {/* Slots */}
                             <div>
                                <h4 className="font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                                   <Clock className="w-4 h-4 text-blue-500" /> Morning Slots
                                </h4>
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                   {slots.map((slot) => (
                                      <button 
                                        key={slot}
                                        onClick={() => setFormData({...formData, slot})}
                                        className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                                           formData.slot === slot 
                                             ? 'bg-[#023e8a] text-white border-[#023e8a] shadow-lg' 
                                             : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                        }`}
                                      >
                                         {slot}
                                      </button>
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
                             className="flex flex-col items-center text-center justify-center h-full"
                          >
                             <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle className="w-12 h-12 text-green-600" />
                             </div>
                             <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Booking Confirmed!</h2>
                             <p className="text-gray-500 max-w-md mb-8">
                                Your appointment with <span className="font-bold text-[#0f172a]">{doctor.name}</span> is confirmed for <span className="font-bold text-[#0f172a]">{formData.slot}</span>.
                             </p>
                             <div className="bg-gray-50 p-6 rounded-2xl w-full max-w-md border border-gray-200 mb-8 text-left">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Booking ID: #UMG-8821</p>
                                <div className="flex justify-between items-center">
                                   <div>
                                      <p className="text-sm text-gray-500">Patient</p>
                                      <p className="font-bold text-[#0f172a]">{formData.name || 'Guest'}</p>
                                   </div>
                                   <div className="text-right">
                                      <p className="text-sm text-gray-500">Amount to Pay</p>
                                      <p className="font-bold text-[#0f172a] text-lg">{doctor.fee}</p>
                                   </div>
                                </div>
                             </div>
                             <Link to="/" className="btn-primary w-full max-w-xs justify-center">Return Home</Link>
                          </motion.div>
                       )}
                    </AnimatePresence>
                 </div>

                 {/* Footer Actions */}
                 {step < 3 && (
                    <div className="p-8 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                       {step > 1 ? (
                          <button onClick={prevStep} className="font-bold text-gray-500 hover:text-[#0f172a] transition-colors flex items-center gap-2">
                             <ArrowLeft className="w-4 h-4" /> Back
                          </button>
                       ) : (
                          <div />
                       )}
                       
                       <button 
                         onClick={nextStep} 
                         disabled={step === 1 && !formData.name}
                         className={`h-12 px-8 rounded-full font-bold text-white flex items-center gap-2 shadow-lg transition-all ${
                            step === 1 && !formData.name ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#023e8a] hover:bg-[#002855] hover:shadow-xl'
                         }`}
                       >
                          {step === 2 ? 'Confirm Booking' : 'Next Step'} <ArrowRight className="w-4 h-4" />
                       </button>
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
                      className="space-y-6"
                    >
                       <div className="space-y-2">
                          <h2 className="text-3xl font-serif font-bold text-[#0f172a]">Request Call Back</h2>
                          <p className="text-gray-500">Leave your details and we'll get back to you shortly.</p>
                       </div>

                       <div className="space-y-4">
                          <div>
                             <label className="text-sm font-bold text-gray-700 uppercase tracking-wide block mb-2">Name</label>
                             <input type="text" required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none" />
                          </div>
                          <div>
                             <label className="text-sm font-bold text-gray-700 uppercase tracking-wide block mb-2">Phone</label>
                             <input type="tel" required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none" />
                          </div>
                          <div>
                             <label className="text-sm font-bold text-gray-700 uppercase tracking-wide block mb-2">Preferred Time</label>
                             <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none bg-white">
                                <option>Morning (9 AM - 12 PM)</option>
                                <option>Afternoon (12 PM - 4 PM)</option>
                                <option>Evening (4 PM - 8 PM)</option>
                             </select>
                          </div>
                          <div>
                             <label className="text-sm font-bold text-gray-700 uppercase tracking-wide block mb-2">Message (Optional)</label>
                             <textarea rows="3" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none resize-none"></textarea>
                          </div>
                       </div>

                       <button className="w-full h-12 rounded-xl bg-[#023e8a] text-white font-bold hover:bg-[#002855] transition-colors shadow-lg">
                          Request Call Back
                       </button>
                    </motion.form>
                 ) : (
                    <motion.div 
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="flex flex-col items-center justify-center h-full text-center"
                    >
                       <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle className="w-10 h-10 text-green-600" />
                       </div>
                       <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Request Received!</h3>
                       <p className="text-gray-500 max-w-xs mx-auto">
                          Our support team will call you back at your preferred time.
                       </p>
                       <button onClick={() => setCallbackSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">
                          Submit Another Request
                       </button>
                    </motion.div>
                 )}
               </div>
             )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingPage;
