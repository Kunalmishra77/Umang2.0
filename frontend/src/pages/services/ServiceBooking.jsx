import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Phone, MapPin, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const serviceTypes = {
  'lab-test': { title: "Book Lab Test", subtitle: "Select a convenient slot for home collection or center visit." },
  'home-care': { title: "Request Home Care", subtitle: "Our care manager will contact you to assess requirements." },
  'elder-care': { title: "Elder Care Plan", subtitle: "Choose a plan that best suits your loved ones." },
  'health-checkup': { title: "Book Health Checkup", subtitle: "Prioritize your health with our comprehensive packages." }
};

const ServiceBooking = () => {
  const { serviceType } = useParams();
  const navigate = useNavigate();
  const info = serviceTypes[serviceType] || { title: "Book Service", subtitle: "Schedule your appointment." };
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Success state
    setTimeout(() => {
        navigate('/');
    }, 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-12">
      <Helmet>
        <title>{info.title} | Umang Hospital</title>
      </Helmet>

      <div className="container-custom max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-[#005580] p-8 text-white text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
             <div className="relative z-10">
                <h1 className="text-3xl font-serif font-bold mb-2">{info.title}</h1>
                <p className="text-blue-100">{info.subtitle}</p>
             </div>
          </div>

          <div className="p-8 md:p-12">
            {step === 1 && (
              <motion.form 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }}
                onSubmit={(e) => { e.preventDefault(); setStep(2); }}
                className="space-y-6"
              >
                <div className="space-y-4">
                   <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Patient Name</label>
                      <div className="relative">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                         <input 
                           type="text" 
                           required 
                           className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#005580] outline-none transition-all"
                           placeholder="Enter full name"
                           value={formData.name}
                           onChange={e => setFormData({...formData, name: e.target.value})}
                         />
                      </div>
                   </div>
                   <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Phone Number</label>
                      <div className="relative">
                         <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                         <input 
                           type="tel" 
                           required 
                           className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#005580] outline-none transition-all"
                           placeholder="+91 89297 33550"
                           value={formData.phone}
                           onChange={e => setFormData({...formData, phone: e.target.value})}
                         />
                      </div>
                   </div>
                </div>
                <button className="w-full h-14 bg-[#005580] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] transition-all shadow-lg">
                   Next Step <ArrowRight className="w-5 h-5" />
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-4">
                   <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Preferred Date</label>
                      <div className="relative">
                         <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                         <input 
                           type="date" 
                           required 
                           className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#005580] outline-none transition-all"
                           value={formData.date}
                           onChange={e => setFormData({...formData, date: e.target.value})}
                         />
                      </div>
                   </div>
                   <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Address / Location</label>
                      <div className="relative">
                         <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                         <textarea 
                           required 
                           rows="3"
                           className="w-full p-4 pl-12 rounded-xl border border-gray-200 focus:border-[#005580] outline-none transition-all resize-none"
                           placeholder="Enter your address"
                           value={formData.address}
                           onChange={e => setFormData({...formData, address: e.target.value})}
                         ></textarea>
                      </div>
                   </div>
                </div>
                
                <div className="flex gap-4">
                   <button type="button" onClick={() => setStep(1)} className="w-1/3 h-14 border border-gray-200 text-gray-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                      <ArrowLeft className="w-5 h-5" /> Back
                   </button>
                   <button className="w-2/3 h-14 bg-[#005580] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] transition-all shadow-lg">
                      Confirm Booking <CheckCircle className="w-5 h-5" />
                   </button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                     <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Booking Requested!</h2>
                  <p className="text-gray-500 mb-6">Thank you, {formData.name}. We have received your request. Our support team will confirm your slot shortly.</p>
                  <p className="text-xs text-gray-400">Redirecting to home...</p>
               </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
