import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Video, Calendar, Clock, ShieldCheck, Wifi, User, 
  MessageSquare, Mic, FileText, CheckCircle, ArrowRight, Star, Phone, HelpCircle, Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS, getRandomDoctor } from '../../utils/imageAssets';

const specialties = [
  { name: "General Medicine", icon: "🩺", waiting: "10 mins" },
  { name: "Pediatrics", icon: "👶", waiting: "15 mins" },
  { name: "Dermatology", icon: "🧬", waiting: "20 mins" },
  { name: "Gynaecology", icon: "👩‍⚕️", waiting: "12 mins" },
  { name: "Psychiatry", icon: "🧠", waiting: "30 mins" },
  { name: "Nutrition", icon: "🥗", waiting: "On Appt" }
];

const doctors = [
  { id: 1, name: "Dr. Anjali Gupta", spec: "General Physician", exp: "12 Yrs", rating: 4.9, img: getRandomDoctor('female'), online: true },
  { id: 2, name: "Dr. Rahul Sharma", spec: "Dermatologist", exp: "8 Yrs", rating: 4.8, img: getRandomDoctor('male'), online: true },
  { id: 3, name: "Dr. Priya Singh", spec: "Pediatrician", exp: "15 Yrs", rating: 5.0, img: getRandomDoctor('female'), online: false },
];

const testimonials = [
  { name: "Riya Kapoor", text: "The video quality was amazing, and Dr. Anjali listened to all my concerns patiently. Got the prescription instantly!", rating: 5 },
  { name: "Vikram Singh", text: "Saved me a trip to the hospital for a follow-up. Telemedicine is a game-changer for busy professionals.", rating: 5 }
];

const Telemedicine = () => {
  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Telemedicine & Online Consultation | Umang Hospital</title>
        <meta name="description" content="Consult top doctors online via secure video call. Get digital prescriptions and follow-up care from the comfort of your home." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative h-[650px] overflow-hidden flex items-center bg-[#f0fdf4]">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-[#dcfce7] rounded-br-[15rem] z-0" />
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-green-200/30 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-xs mb-6">
              <Wifi className="w-4 h-4 animate-pulse" />
              <span>Live Video Consultation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0f172a] mb-6 leading-tight">
              Expert Care, <br />
              <span className="text-green-600">Anytime, Anywhere.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
              Skip the traffic and waiting room. Connect with Umang's top specialists via secure HD video calls for diagnosis, prescriptions, and second opinions.
            </p>
            
            <div className="flex gap-4">
              <Link to="/services/telemedicine/consult" className="h-14 px-8 rounded-full bg-green-600 text-white font-bold hover:bg-green-700 hover:shadow-xl transition-all flex items-center gap-2">
                <Video className="w-5 h-5" /> Start Consultation
              </Link>
              <button className="h-14 px-8 rounded-full bg-white border border-green-200 text-green-700 font-bold hover:bg-green-50 transition-all flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Book for Later
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
                      <div className="relative z-10 bg-white rounded-[2.5rem] shadow-2xl p-6 border border-gray-100 max-w-md mx-auto hover:scale-[1.02] transition-transform duration-500">
                        <div className="relative h-[500px] rounded-[2rem] overflow-hidden">
                          <img src={ASSETS.TELEMEDICINE} alt="Doctor on Call" className="w-full h-full object-cover object-top" />                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Live • 12:45
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-[#0f172a]">Dr. Sarah Johnson</h3>
                  <p className="text-xs text-gray-500">Senior Cardiologist</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 cursor-not-allowed">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-200 cursor-pointer">
                    <Phone className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Instant Consultation Specialties */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-12 text-center">Consult for Common Symptoms</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
               {specialties.map((spec, i) => (
                  <Link to="/services/telemedicine/consult" key={i} className="group">
                    <motion.div 
                       whileHover={{ y: -5 }}
                       className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all text-center cursor-pointer h-full"
                    >
                       <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{spec.icon}</div>
                       <h3 className="font-bold text-[#0f172a] mb-1">{spec.name}</h3>
                       <p className="text-[10px] font-bold text-green-600 bg-green-50 inline-block px-2 py-0.5 rounded-full">
                          Wait: {spec.waiting}
                       </p>
                    </motion.div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Available Doctors */}
      <section className="py-12 lg:py-10 bg-gray-50">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-2">Available Doctors</h2>
                  <p className="text-gray-500">Connect instantly with doctors who are online right now.</p>
               </div>
               <Link to="/doctors" className="text-green-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">View All Doctors <ArrowRight className="w-4 h-4" /></Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {doctors.map((doc) => (
                  <div key={doc.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all flex gap-6 items-center">
                     <div className="relative shrink-0">
                        <img src={doc.img} alt={doc.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm" />
                        {doc.online && (
                           <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                     </div>
                     <div className="flex-1">
                        <h3 className="font-bold text-[#0f172a] text-lg">{doc.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{doc.spec}</p>
                        <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                           <span className="flex items-center gap-1 text-yellow-500"><Star className="w-3 h-3 fill-current" /> {doc.rating}</span>
                           <span>• {doc.exp} Exp</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                           <Link to="/services/telemedicine/consult" className={`flex-1 py-2 rounded-lg text-xs font-bold text-center flex items-center justify-center ${doc.online ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                              {doc.online ? 'Call Now' : 'Offline'}
                           </Link>
                           <button className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                              <MessageSquare className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Features & Benefits */}
      <section className="py-12 lg:py-10 bg-white relative overflow-hidden">
         <div className="container-custom">
            <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
               
               <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                  <div>
                     <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Why Choose Digital Care?</h2>
                     <div className="space-y-8">
                        {[
                           { icon: ShieldCheck, title: "Secure & Private", desc: "End-to-end encrypted video calls complying with telemedicine guidelines." },
                           { icon: FileText, title: "Digital Prescriptions", desc: "Instant valid prescriptions sent to your email and app immediately after the call." },
                           { icon: Clock, title: "Flexible Scheduling", desc: "Book appointments 24/7, including weekends and holidays." }
                        ].map((feat, i) => (
                           <div key={i} className="flex gap-6">
                              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-green-400 shrink-0">
                                 <feat.icon className="w-6 h-6" />
                              </div>
                              <div>
                                 <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
                                 <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="relative">
                     <div className="bg-white text-gray-900 rounded-[2rem] p-8 shadow-2xl max-w-sm mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                              <FileText className="w-6 h-6" />
                           </div>
                           <div>
                              <h4 className="font-bold">Digital RX</h4>
                              <p className="text-xs text-gray-500">Rx ID: #882910</p>
                           </div>
                        </div>
                        <div className="space-y-3 mb-6">
                           <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                           <div className="h-2 bg-gray-100 rounded w-full"></div>
                           <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                           <div className="flex items-center gap-2">
                              <img src="/umang.jpg" alt="Logo" className="h-6 w-auto opacity-50" />
                              <span className="text-xs font-bold text-gray-400">Signed Digitally</span>
                           </div>
                           <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Patient Stories */}
      <section className="py-12 lg:py-10 bg-green-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center mb-16">Patient Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-green-100 relative">
                <div className="text-4xl text-green-200 absolute top-6 left-6">"</div>
                <p className="text-gray-600 mb-6 relative z-10">{test.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">{test.name}</h4>
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(test.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technical Help */}
      <section className="py-12 lg:py-10 bg-white border-t border-gray-100">
        <div className="container-custom text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Technical Requirements</h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2"><Wifi className="w-5 h-5 text-green-600" /> Stable Internet (4G/WiFi)</div>
            <div className="flex items-center gap-2"><Laptop className="w-5 h-5 text-green-600" /> Smartphone or Laptop</div>
            <div className="flex items-center gap-2"><Mic className="w-5 h-5 text-green-600" /> Working Mic & Camera</div>
            <div className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-green-600" /> Need Help? Call Support</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Telemedicine;
