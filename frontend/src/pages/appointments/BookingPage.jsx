import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, User, Phone, CreditCard, CheckCircle, 
  ArrowLeft, ArrowRight, ShieldCheck, Star, MapPin, Video, 
  Bell, Smartphone, HelpCircle, FileText, MessageSquare, Lock
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { doctors } from '../../utils/doctorsData';

const slots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '04:30 PM'
];

const BookingPage = () => {
  const { id } = useParams();
  
  const doctor = useMemo(() => {
    return doctors.find(d => d.id === parseInt(id)) || doctors[0];
  }, [id]);

  const [activeTab, setActiveTab] = useState('book');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ 
    name: '', phone: '', date: '', slot: '', message: '' 
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [callbackTime, setCallbackTime] = useState('Immediately');

  const callbackTimeOptions = [
    { label: 'Immediately', icon: Bell, desc: 'Within 15 mins' },
    { label: 'Morning', icon: Clock, desc: '9 AM - 12 PM' },
    { label: 'Afternoon', icon: Smartphone, desc: '12 PM - 4 PM' },
    { label: 'Evening', icon: MessageSquare, desc: '4 PM - 8 PM' }
  ];

  const nextStep = () => {
      if (step === 3) {
          handlePayment();
      } else {
          setStep(step + 1);
      }
  };
  
  const prevStep = () => setStep(step - 1);

  const handlePayment = () => {
      setIsProcessingPayment(true);
      setTimeout(() => {
          setIsProcessingPayment(false);
          setStep(4);
      }, 2000);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    setCallbackSubmitted(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-8 pb-12">
      <Helmet>
        <title>Book Appointment | {doctor.name}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#023e8a] text-white py-12 lg:py-16 relative overflow-hidden">
         <div className="container-custom relative z-10 px-6">
            <Link to="/doctors" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 font-bold transition-colors text-sm">
               <ArrowLeft className="w-4 h-4" /> BACK TO SEARCH
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Book Your Visit</h1>
               <p className="text-blue-100 text-base lg:text-lg max-w-2xl opacity-80">Secure your consultation with {doctor.name} in just a few clicks.</p>
            </motion.div>
         </div>
      </section>

      <div className="container-custom -mt-10 lg:-mt-16 relative z-20 mb-20 px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Doctor Summary Card */}
          <div className="lg:col-span-4 h-fit">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100">
               <div className="flex items-center gap-5 lg:gap-6 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0">
                     <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h2 className="text-xl lg:text-2xl font-bold text-gray-900">{doctor.name}</h2>
                     <p className="text-primary-600 text-xs lg:text-sm font-bold uppercase tracking-wider">{doctor.dept}</p>
                     <div className="flex items-center gap-1 text-yellow-400 mt-1">
                        <Star className="w-3 h-3 fill-current" /> <span className="text-gray-400 text-[10px] lg:text-xs font-bold">{doctor.rating} Rating</span>
                     </div>
                  </div>
               </div>

               <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                     <MapPin className="w-5 h-5 text-gray-400" />
                     <span className="font-bold text-gray-700">Gurugram Center</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                     <CreditCard className="w-5 h-5 text-gray-400" />
                     <span className="font-bold text-gray-700">Fee: <strong className="text-gray-900 ml-1">₹1,500</strong></span>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col overflow-hidden relative">
             <div className="flex border-b border-gray-100 bg-gray-50/50">
                <button 
                  onClick={() => setActiveTab('book')}
                  className={`flex-1 py-5 text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'book' ? 'text-primary-600 bg-white border-b-2 border-primary-600' : 'text-gray-400'}`}
                >
                  Book Slot
                </button>
                <button 
                  onClick={() => setActiveTab('callback')}
                  className={`flex-1 py-5 text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'callback' ? 'text-primary-600 bg-white border-b-2 border-primary-600' : 'text-gray-400'}`}
                >
                  Callback
                </button>
             </div>

             {activeTab === 'book' ? (
               <>
                 <div className="flex-1 p-6 lg:p-12 overflow-y-auto">
                    <AnimatePresence mode="wait">
                       {step === 1 && (
                          <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                             <h3 className="text-2xl font-serif font-bold text-gray-900">1. Patient Info</h3>
                             <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Name</label>
                                   <input type="text" className="w-full h-14 px-5 rounded-xl border-2 border-gray-100 focus:border-primary-600 outline-none font-bold" placeholder="Patient Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                                </div>
                                <div className="space-y-2">
                                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone</label>
                                   <input type="tel" className="w-full h-14 px-5 rounded-xl border-2 border-gray-100 focus:border-primary-600 outline-none font-bold" placeholder="Contact Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                                </div>
                             </div>
                          </motion.div>
                       )}

                       {step === 2 && (
                          <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                             <h3 className="text-2xl font-serif font-bold text-gray-900">2. Select Time</h3>
                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {slots.map((s) => (
                                   <button key={s} onClick={() => setFormData({...formData, slot: s})} className={`py-4 rounded-xl font-bold border-2 transition-all ${formData.slot === s ? 'bg-primary-600 text-white border-primary-600 shadow-lg' : 'bg-white text-gray-600 border-gray-100 hover:border-primary-300'}`}>
                                      {s}
                                   </button>
                                ))}
                             </div>
                          </motion.div>
                       )}

                       {step === 3 && (
                          <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 text-center py-6">
                             <h3 className="text-2xl font-serif font-bold text-gray-900">3. Confirm & Pay</h3>
                             <div className="p-8 bg-primary-50 rounded-3xl border border-primary-100 inline-block w-full max-w-sm">
                                <p className="text-sm text-gray-500 font-bold uppercase mb-2">Total Amount</p>
                                <p className="text-4xl font-black text-primary-600">₹1,500</p>
                             </div>
                             <p className="text-gray-500 text-sm">Safe & Secure Payment Processing</p>
                          </motion.div>
                       )}

                       {step === 4 && (
                          <motion.div key="s4" initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-12">
                             <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Confirmed!</h2>
                             <p className="text-gray-500 mb-8">Booking ID: #UMG-{Math.floor(Math.random()*900000)}</p>
                             <Link to="/" className="inline-block px-10 py-4 bg-primary-600 text-white rounded-xl font-bold">Return Home</Link>
                          </motion.div>
                       )}
                    </AnimatePresence>
                 </div>

                 {step < 4 && (
                    <div className="p-6 lg:p-10 border-t border-gray-100 bg-gray-50 flex justify-between">
                       {step > 1 ? <button onClick={prevStep} className="font-bold text-gray-400">Go Back</button> : <div />}
                       <button 
                        onClick={nextStep}
                        disabled={(step === 1 && !formData.name) || (step === 2 && !formData.slot) || isProcessingPayment}
                        className="px-10 py-4 bg-primary-600 text-white rounded-xl font-bold shadow-lg disabled:opacity-50"
                       >
                          {isProcessingPayment ? 'Wait...' : step === 3 ? 'Pay Now' : 'Continue'}
                       </button>
                    </div>
                 )}
               </>
             ) : (
               <div className="p-8 lg:p-12">
                 {!callbackSubmitted ? (
                    <form onSubmit={handleCallbackSubmit} className="space-y-6">
                       <h3 className="text-2xl font-serif font-bold text-gray-900">Request Callback</h3>
                       <input type="text" required className="w-full h-14 px-5 rounded-xl border-2 border-gray-100 focus:border-primary-600 outline-none font-bold" placeholder="Your Name" />
                       <input type="tel" required className="w-full h-14 px-5 rounded-xl border-2 border-gray-100 focus:border-primary-600 outline-none font-bold" placeholder="Phone Number" />
                       <button className="w-full h-16 bg-primary-600 text-white rounded-xl font-bold shadow-xl">Submit Request</button>
                    </form>
                 ) : (
                    <div className="text-center py-12">
                       <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                       <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                       <p className="text-gray-500">We'll call you shortly.</p>
                    </div>
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
