import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, User, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const EventRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Mock event data
  const event = {
    title: "Free Heart Checkup Camp",
    date: "Feb 14, 2026",
    time: "09:00 AM - 04:00 PM",
    location: "Umang Hospital, Main Atrium"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
        navigate('/health-library/events');
    }, 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-12 flex items-center justify-center">
      <Helmet>
        <title>Event Registration | Umang Hospital</title>
      </Helmet>

      <div className="container-custom max-w-lg w-full">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#0f172a] p-8 text-white">
             <h2 className="text-2xl font-serif font-bold mb-2">Event Registration</h2>
             <p className="text-gray-400 text-sm">Join us for {event.title}</p>
          </div>

          <div className="p-8">
            {step === 1 ? (
              <motion.form 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
                   <div className="flex items-center gap-3 text-sm text-[#005580] mb-2">
                      <Calendar className="w-4 h-4" /> {event.date} • {event.time}
                   </div>
                   <div className="flex items-center gap-3 text-sm text-[#005580]">
                      <MapPin className="w-4 h-4" /> {event.location}
                   </div>
                </div>

                <div className="space-y-4">
                   <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Full Name</label>
                      <div className="relative">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                         <input type="text" required className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#005580] outline-none" />
                      </div>
                   </div>
                   <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Email Address</label>
                      <div className="relative">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                         <input type="email" required className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#005580] outline-none" />
                      </div>
                   </div>
                   <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Phone Number</label>
                      <div className="relative">
                         <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                         <input type="tel" required className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#005580] outline-none" />
                      </div>
                   </div>
                </div>

                <button className="w-full h-14 bg-[#005580] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] transition-all shadow-lg">
                   Confirm Registration <ArrowRight className="w-5 h-5" />
                </button>
              </motion.form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                 </div>
                 <h2 className="text-2xl font-bold text-[#0f172a] mb-2">You're Registered!</h2>
                 <p className="text-gray-500 mb-6">A confirmation email with the event pass has been sent to you.</p>
                 <p className="text-xs text-gray-400">Redirecting to events...</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
