import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Clock, Award, ShieldCheck, User, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Mock Data (Simulating Fetch)
const doctorData = {
  id: 1,
  name: 'Dr. Sarah Johnson',
  dept: 'Cardiology',
  role: 'Senior Consultant - Interventional Cardiology',
  exp: '15 Years',
  loc: 'Gurugram',
  rating: 4.9,
  reviews: 124,
  img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
  about: "Dr. Sarah Johnson is a renowned cardiologist with over 15 years of experience in complex angioplasties and heart failure management. She has performed over 5,000 successful procedures.",
  timeline: [
    { year: '2008', title: 'MBBS', desc: 'AIIMS, New Delhi (Gold Medalist)' },
    { year: '2012', title: 'MD - Medicine', desc: 'PGIMER, Chandigarh' },
    { year: '2015', title: 'DM - Cardiology', desc: 'Sree Chitra Tirunal Institute' },
    { year: '2018', title: 'Fellowship', desc: 'Cleveland Clinic, USA' }
  ],
  specializations: ['Coronary Angioplasty', 'Pacemaker Implantation', 'Heart Failure Management', 'Preventive Cardiology'],
  slots: ['10:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '02:30 PM', '04:00 PM']
};

const DoctorProfile = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Dates for booking (Next 3 days)
  const dates = [
    { day: 'Today', date: '26 Jan' },
    { day: 'Tomorrow', date: '27 Jan' },
    { day: 'Wed', date: '28 Jan' }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <Helmet>
        <title>{doctorData.name} | Umang Hospital</title>
      </Helmet>

      {/* 1. Profile Hero */}
      <section className="bg-[#0f172a] pt-20 pb-20 relative overflow-hidden">
         <div className="container-custom relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
               {/* Image */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="relative w-64 h-64 md:w-80 md:h-80 shrink-0"
               >
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20" />
                  <img src={doctorData.img} alt={doctorData.name} className="w-full h-full object-cover rounded-[2.5rem] border-4 border-white/10 shadow-2xl relative z-10" />
                  <div className="absolute -bottom-4 -right-4 bg-white text-brand-dark px-4 py-2 rounded-xl shadow-lg z-20 flex items-center gap-2">
                     <Star className="w-4 h-4 text-yellow-500 fill-current" />
                     <span className="font-bold">{doctorData.rating}</span>
                     <span className="text-xs text-gray-400">({doctorData.reviews} Reviews)</span>
                  </div>
               </motion.div>

               {/* Info */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="text-center md:text-left text-white"
               >
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                     {doctorData.dept}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{doctorData.name}</h1>
                  <p className="text-xl text-gray-300 mb-6 font-light">{doctorData.role}</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-gray-400">
                     <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-400" /> {doctorData.exp} Experience
                     </div>
                     <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-red-400" /> {doctorData.loc}
                     </div>
                     <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-green-400" /> Verified
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. Content Grid */}
      <div className="container-custom -mt-10 relative z-20">
         <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left: About & Timeline */}
            <div className="lg:col-span-8 space-y-8">
               
               {/* About Card */}
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4">About Doctor</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{doctorData.about}</p>
                  
                  <div className="mt-8">
                     <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Specializations</h4>
                     <div className="flex flex-wrap gap-2">
                        {doctorData.specializations.map((spec, i) => (
                           <span key={i} className="px-4 py-2 bg-blue-50 text-[#005580] rounded-lg text-sm font-bold">
                              {spec}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Experience Timeline */}
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-8">Education & Experience</h3>
                  <div className="space-y-8 pl-4 border-l-2 border-gray-100">
                     {doctorData.timeline.map((item, i) => (
                        <div key={i} className="relative pl-8 group">
                           <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover:scale-125 transition-transform" />
                           <span className="text-sm font-bold text-blue-500 mb-1 block">{item.year}</span>
                           <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                           <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>

            </div>

            {/* Right: Booking Sidebar */}
            <div className="lg:col-span-4">
               <div className="bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-100 sticky top-32">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
                     <Calendar className="w-5 h-5 text-[#005580]" /> Book Appointment
                  </h3>

                  {/* Date Selector */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                     {dates.map((d, i) => (
                        <button 
                           key={i}
                           onClick={() => setSelectedDate(i)}
                           className={`p-3 rounded-xl text-center border transition-all ${
                              selectedDate === i 
                                ? 'bg-[#005580] text-white border-[#005580] shadow-md' 
                                : 'border-gray-200 text-gray-600 hover:border-blue-300'
                           }`}
                        >
                           <span className="block text-xs opacity-80 mb-1">{d.day}</span>
                           <span className="block font-bold">{d.date}</span>
                        </button>
                     ))}
                  </div>

                  {/* Slot Grid */}
                  <div className="mb-8">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Available Slots</p>
                     <div className="grid grid-cols-3 gap-2">
                        {doctorData.slots.map((slot, i) => (
                           <button 
                              key={i}
                              onClick={() => setSelectedSlot(i)}
                              className={`py-2 rounded-lg text-xs font-bold transition-all ${
                                 selectedSlot === i 
                                   ? 'bg-green-100 text-green-700 border border-green-200' 
                                   : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                              }`}
                           >
                              {slot}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* CTA */}
                  <Link 
                     to={`/booking/${doctorData.id}`} 
                     className="w-full py-4 bg-[#005580] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] shadow-lg hover:shadow-xl transition-all"
                  >
                     Confirm Booking <ChevronRight className="w-4 h-4" />
                  </Link>
                  <p className="text-center text-xs text-gray-400 mt-4">
                     No payment required for booking. Pay at clinic.
                  </p>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
