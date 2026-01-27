import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, 
  Instagram, Plus, Globe, Briefcase, FileText, Ambulance, 
  MessageCircle, ArrowRight, Calendar, Search, 
  ShieldCheck, Headset, CheckCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const depts = [
  { title: "International Patients", icon: Globe, email: "international@umanghospitals.in", phone: "+91 98765 43210" },
  { title: "TPA & Insurance", icon: FileText, email: "tpa@umanghospitals.in", phone: "+91 124 456 7891" },
  { title: "Careers / HR", icon: Briefcase, email: "hr@umanghospitals.in", phone: "+91 124 456 7892" },
  { title: "Emergency", icon: Ambulance, email: "emergency@umanghospitals.in", phone: "+91 89297 33551" },
];

const faqs = [
  { q: "What are the visiting hours for general wards?", a: "Visiting hours are from 4:00 PM to 7:00 PM daily. Only two visitors are allowed at a time." },
  { q: "Do you offer cashless insurance facilities?", a: "Yes, we are empanelled with all major TPA and insurance providers for cashless treatment." },
  { q: "Is prior appointment mandatory for OPD?", a: "While walk-ins are welcome, we highly recommend booking an appointment to minimize waiting time." },
  { q: "Do you have parking facilities?", a: "Yes, we have ample parking space for patients and visitors within the hospital premises." },
];

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      alert("Thank you for your message. Our team will contact you shortly.");
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Contact & Support | Umang Superspeciality Hospital</title>
      </Helmet>

      {/* 1. Hero Section - Cinematic */}
      <section className="relative min-h-[500px] flex items-center bg-[#0f172a] pt-32 pb-24 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
               src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
               alt="Hospital Reception" 
               className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-[#0f172a]" />
         </div>
         <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
               <span className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-widest text-[10px] mb-8">
                  <Headset className="w-4 h-4" /> 24/7 Patient Support
               </span>
               <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">How can we <span className="text-blue-400">help?</span></h1>
               <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                  From critical emergencies to routine checkups, our dedicated assistance team is just a call or click away.
               </p>
            </motion.div>
         </div>
      </section>

      {/* 2. Quick Action Section - Functional Subsections */}
      <section className="container-custom -mt-20 relative z-20 mb-32">
         <div className="grid md:grid-cols-3 gap-8">
            <Link to="/appointments/request" className="group">
               <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 h-full transition-all hover:bg-[#005580] hover:text-white">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005580] mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                     <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Request Appointment</h3>
                  <p className="text-gray-500 group-hover:text-blue-100 transition-colors mb-8 leading-relaxed">Schedule a visit with our world-class specialists in seconds.</p>
                  <span className="inline-flex items-center gap-2 font-bold text-[#005580] group-hover:text-white">
                     Book Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
               </motion.div>
            </Link>

            <Link to="/doctors" className="group">
               <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 h-full transition-all hover:bg-[#005580] hover:text-white">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005580] mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                     <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Find a Doctor</h3>
                  <p className="text-gray-500 group-hover:text-blue-100 transition-colors mb-8 leading-relaxed">Search through our directory of 100+ expert medical consultants.</p>
                  <span className="inline-flex items-center gap-2 font-bold text-[#005580] group-hover:text-white">
                     Search Directory <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
               </motion.div>
            </Link>

            <div className="group">
               <motion.div whileHover={{ y: -10 }} className="bg-[#0f172a] p-10 rounded-[3rem] shadow-2xl border border-white/5 h-full text-white">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                     <Ambulance className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-red-400">Emergency Call</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors mb-8 leading-relaxed">Immediate critical care assistance available 24 hours a day, 7 days a week.</p>
                  <a href="tel:+918929733551" className="text-3xl font-serif font-black tracking-tighter hover:text-red-400 transition-colors">+91 89297 33551</a>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. Detailed Contact Info & Form Grid */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
               
               {/* LEFT: Info */}
               <div className="lg:col-span-5 space-y-12">
                  <div>
                     <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Our Main Campus</h2>
                     <p className="text-gray-500 text-lg leading-relaxed mb-10">Visit our flagship superspeciality center in the heart of Gurugram for all your medical needs.</p>
                     
                     <div className="space-y-8">
                        <div className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500">
                           <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#005580] shrink-0 group-hover:bg-[#005580] group-hover:text-white transition-colors">
                              <MapPin className="w-6 h-6" />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg mb-1">Hospital Location</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">Sector 55, Golf Course Road,<br />Gurugram, Haryana 122011</p>
                              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[#005580] font-bold text-xs uppercase tracking-widest mt-4 inline-block border-b-2 border-blue-100 hover:border-[#005580] transition-all">Get Directions</a>
                           </div>
                        </div>

                        <div className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500">
                           <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#005580] shrink-0 group-hover:bg-[#005580] group-hover:text-white transition-colors">
                              <Clock className="w-6 h-6" />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg mb-1">Operational Hours</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">Emergency: 24/7 (All Days)<br />OPD: Mon - Sat (9 AM - 8 PM)</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-[#005580] rounded-[3rem] p-10 text-white relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10" />
                     <h4 className="text-xl font-bold mb-6">Connect Digitally</h4>
                     <div className="space-y-4">
                        <a href="mailto:info@umanghospitals.in" className="flex items-center gap-4 text-blue-100 hover:text-white transition-colors">
                           <Mail className="w-5 h-5 text-blue-300" /> info@umanghospitals.in
                        </a>
                        <a href="tel:+911244567890" className="flex items-center gap-4 text-blue-100 hover:text-white transition-colors">
                           <Phone className="w-5 h-5 text-blue-300" /> +91 124 456 7890
                        </a>
                     </div>
                     <div className="mt-10 flex gap-4">
                        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                           <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#005580] transition-all border border-white/10">
                              <Icon className="w-5 h-5" />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

               {/* RIGHT: Form */}
               <div className="lg:col-span-7 bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-gray-100">
                  <div className="mb-12">
                     <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">Send an Inquiry</h2>
                     <p className="text-gray-500">For non-emergency feedback, corporate tie-ups, or hospital visits.</p>
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Name</label>
                           <input type="text" required className="w-full h-14 bg-gray-50 rounded-2xl px-6 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                           <input type="email" required className="w-full h-14 bg-gray-50 rounded-2xl px-6 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold" />
                        </div>
                     </div>

                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Subject</label>
                        <select className="w-full h-14 bg-gray-50 rounded-2xl px-6 border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold appearance-none cursor-pointer">
                           <option>General Inquiry</option>
                           <option>Corporate Partnership</option>
                           <option>Billing & Insurance</option>
                           <option>Feedback / Compliment</option>
                        </select>
                     </div>

                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Message</label>
                        <textarea rows="4" required className="w-full p-6 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:border-[#005580] focus:bg-white outline-none transition-all font-bold resize-none" placeholder="How can we assist you today?"></textarea>
                     </div>

                     <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={submitted}
                        className={`w-full h-16 bg-[#0f172a] text-white rounded-2xl font-black text-xl hover:bg-[#005580] transition-all shadow-2xl flex items-center justify-center gap-4 ${submitted ? 'opacity-70 cursor-wait' : ''}`}
                     >
                        {submitted ? 'Sending...' : 'Submit Request'} <Send className="w-6 h-6" />
                     </motion.button>
                  </form>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Specialized Department Contacts */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-16 text-center">Specific Assistance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {depts.map((dept, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all group"
                  >
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#005580] mb-6 shadow-sm group-hover:bg-[#005580] group-hover:text-white transition-all">
                        <dept.icon className="w-6 h-6" />
                     </div>
                     <h3 className="font-bold text-lg text-[#0f172a] mb-4">{dept.title}</h3>
                     <p className="text-sm text-gray-500 mb-2 font-medium">{dept.email}</p>
                     <p className="text-sm text-[#005580] font-bold">{dept.phone}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Trust & FAQ Section */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
         <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">Your Questions, <br />Answered.</h2>
                  <p className="text-gray-500 text-lg mb-12">Can't find what you are looking for? Our FAQ section covers the most common patient queries.</p>
                  
                  <div className="space-y-4">
                     {faqs.map((faq, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                           <button 
                              onClick={() => toggleAccordion(i)}
                              className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50/50 transition-colors"
                           >
                              <span className="font-bold text-[#0f172a] text-lg">{faq.q}</span>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeAccordion === i ? 'bg-[#005580] text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                                 <Plus className="w-4 h-4" />
                              </div>
                           </button>
                           <AnimatePresence>
                              {activeAccordion === i && (
                                 <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                 >
                                    <div className="p-8 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                       {faq.a}
                                    </div>
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100">
                     <ShieldCheck className="w-16 h-16 text-green-500 mb-8" />
                     <h3 className="text-3xl font-serif font-bold text-[#0f172a] mb-6">Patient Rights & Privacy</h3>
                     <p className="text-gray-500 text-lg leading-relaxed mb-8">At Umang Hospital, we strictly adhere to international patient privacy laws and ethical standards of medical care.</p>
                     <ul className="space-y-4 mb-10">
                        {["Confidentiality Guarantee", "Transparent Billing", "Ethical Clinical Practices"].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 font-bold text-[#0f172a]">
                              <CheckCircle className="w-5 h-5 text-blue-500" /> {item}
                           </li>
                        ))}
                     </ul>
                     <Link to="/privacy" className="text-[#005580] font-black uppercase tracking-widest text-xs border-b-2 border-blue-100 hover:border-[#005580] transition-all">Read Privacy Policy</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Live Map - Full Width Premium */}
      <section className="h-[600px] w-full relative group grayscale hover:grayscale-0 transition-all duration-1000">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.574636787962!2d77.0915!3d28.4322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzU1LjkiTiA3N8KwMDUnMjkuNCJF!5e0!3m2!1sen!2sin!4v1638202993631!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen="" 
           loading="lazy"
           title="Hospital Location"
         ></iframe>
         <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/20 hidden md:block max-w-sm pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
            <h4 className="font-bold text-[#0f172a] text-xl mb-2">Find Us on the Map</h4>
            <p className="text-gray-500 text-sm leading-relaxed italic">Our center is conveniently located near the Sector 55-56 Metro Station, Gurugram.</p>
         </div>
      </section>

      {/* 7. Post-Visit Feedback CTA */}
      <section className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
         <div className="container-custom relative z-10 text-center">
            <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl font-serif font-bold mb-6 tracking-tight">Help us improve your experience.</h2>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-12 opacity-80">We value your feedback. Whether it's a compliment or a suggestion for improvement, we are listening.</p>
            <button className="h-16 px-12 rounded-2xl bg-white text-[#0f172a] font-black text-lg hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/40">
               Share Your Feedback
            </button>
         </div>
      </section>

      {/* Sticky Quick Contact */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-50">
         <a href="https://wa.me/918929733551" target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative">
            <div className="absolute right-full mr-4 bg-white text-[#0f172a] px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">WhatsApp Us</div>
            <MessageCircle className="w-8 h-8" />
         </a>
      </div>
    </div>
  );
};

export default Contact;
