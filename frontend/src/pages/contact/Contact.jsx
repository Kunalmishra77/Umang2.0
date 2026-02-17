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
import { ASSETS } from '../../utils/imageAssets';

const depts = [
  { title: "International Patients", icon: Globe, email: "Umanghospitalgurugram@gmail.com", phone: "+91 89297 33550" },
              { title: "TPA & Insurance", icon: FileText, email: "Umanghospitalgurugram@gmail.com", phone: "+91 89297 33550" },
              { title: "Careers / HR", icon: Briefcase, email: "Umanghospitalgurugram@gmail.com", phone: "+91 89297 33550" },
              { title: "Emergency", icon: Ambulance, email: "Umanghospitalgurugram@gmail.com", phone: "+91 89297 33550" },];

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
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center bg-brand-dark pt-20 pb-24 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
               src={ASSETS.RECEPTION} 
               alt="Hospital Reception" 
               className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark" />
         </div>
         <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
               <span className="inline-flex items-center gap-2 bg-primary-500/10 px-4 py-2 rounded-full border border-primary-500/20 text-primary-300 font-bold uppercase tracking-widest text-[10px] mb-8">
                  <Headset className="w-4 h-4" /> 24/7 Patient Support
               </span>
               <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6">How can we <span className="text-primary-400 italic">help?</span></h1>
               <p className="text-xl text-primary-100/70 max-w-2xl mx-auto font-light leading-relaxed">
                  From critical emergencies to routine checkups, our dedicated assistance team is just a call or click away.
               </p>
            </motion.div>
         </div>
      </section>

      {/* 2. Quick Action Section - Functional Subsections */}
      <section className="container-custom -mt-12 md:-mt-20 relative z-20 mb-32">
         <div className="grid md:grid-cols-3 gap-8">
            <Link to="/appointments/request" className="group">
               <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 h-full transition-all hover:bg-brand-dark hover:text-white group">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                     <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Request Appointment</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors mb-8 leading-relaxed">Schedule a visit with our world-class specialists in seconds.</p>
                  <span className="inline-flex items-center gap-2 font-bold text-primary-600 group-hover:text-white uppercase tracking-wider text-sm">
                     Book Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
               </motion.div>
            </Link>

            <Link to="/doctors" className="group">
               <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 h-full transition-all hover:bg-brand-dark hover:text-white group">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                     <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Find a Doctor</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors mb-8 leading-relaxed">Search through our directory of 100+ expert medical consultants.</p>
                  <span className="inline-flex items-center gap-2 font-bold text-primary-600 group-hover:text-white uppercase tracking-wider text-sm">
                     Search Directory <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
               </motion.div>
            </Link>

            <div className="group">
               <motion.div whileHover={{ y: -10 }} className="bg-brand-dark p-10 rounded-[3rem] shadow-2xl shadow-primary-900/20 border border-white/5 h-full text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10" />
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-red-500/30">
                     <Ambulance className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-red-400">Emergency Call</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors mb-8 leading-relaxed">Immediate critical care assistance available 24 hours a day, 7 days a week.</p>
                  <a href="tel:+918929733550" className="text-3xl font-serif font-black tracking-tighter hover:text-red-400 transition-colors">+91 89297 33550</a>
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
                     <span className="section-subtitle">Get in Touch</span>
                     <h2 className="section-title">Our Main Campus</h2>
                     <p className="text-gray-500 text-lg leading-relaxed mb-10">Visit our flagship superspeciality center in the heart of Gurugram for all your medical needs.</p>
                     
                     <div className="space-y-6">
                        <div className="flex gap-6 p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500">
                           <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                              <MapPin className="w-7 h-7" />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg text-brand-dark mb-1">Hospital Location</h4>
                              <p className="text-gray-500 text-sm leading-relaxed mb-3">Sector 55, Golf Course Road,<br />Gurugram, Haryana 122011</p>
                              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-primary-600 font-bold text-xs uppercase tracking-widest inline-block border-b border-primary-200 hover:border-primary-600 transition-all">Get Directions</a>
                           </div>
                        </div>

                        <div className="flex gap-6 p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500">
                           <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                              <Clock className="w-7 h-7" />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg text-brand-dark mb-1">Operational Hours</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">Emergency: 24/7 (All Days)<br />OPD: Mon - Sat (9 AM - 8 PM)</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-brand-dark rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
                     <h4 className="text-xl font-bold mb-8">Connect Digitally</h4>
                     <div className="space-y-5">
                        <a href="mailto:Umanghospitalgurugram@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                              <Mail className="w-5 h-5" />
                           </div>
                           <span className="group-hover:translate-x-2 transition-transform">Umanghospitalgurugram@gmail.com</span>
                        </a>
                        <a href="tel:+918929733550" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                              <Phone className="w-5 h-5" />
                           </div>
                           +91 124 456 7890
                        </a>
                     </div>
                     <div className="mt-10 flex gap-4 border-t border-white/10 pt-8">
                        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                           <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all border border-white/5 hover:border-white">
                              <Icon className="w-5 h-5" />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

               {/* RIGHT: Form */}
               <div className="lg:col-span-7 bg-white rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-2xl border border-gray-100">
                  <div className="mb-10">
                     <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Send an Inquiry</h2>
                     <p className="text-gray-500">For non-emergency feedback, corporate tie-ups, or hospital visits.</p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                           <input type="text" required className="w-full h-14 bg-gray-50 rounded-2xl px-6 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-semibold text-brand-dark placeholder:text-gray-300" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                           <input type="email" required className="w-full h-14 bg-gray-50 rounded-2xl px-6 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-semibold text-brand-dark placeholder:text-gray-300" placeholder="Umanghospitalgurugram@gmail.com" />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                        <select className="w-full h-14 bg-gray-50 rounded-2xl px-6 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-semibold text-brand-dark appearance-none cursor-pointer">
                           <option>General Inquiry</option>
                           <option>Corporate Partnership</option>
                           <option>Billing & Insurance</option>
                           <option>Feedback / Compliment</option>
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                        <textarea rows="4" required className="w-full p-6 bg-gray-50 rounded-[2rem] border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-semibold text-brand-dark resize-none placeholder:text-gray-300" placeholder="How can we assist you today?"></textarea>
                     </div>

                     <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={submitted}
                        className={`w-full h-16 bg-brand-dark text-white rounded-2xl font-bold text-lg hover:bg-primary-600 transition-all shadow-xl flex items-center justify-center gap-3 ${submitted ? 'opacity-70 cursor-wait' : ''}`}
                     >
                        {submitted ? 'Sending...' : 'Submit Request'} <Send className="w-5 h-5" />
                     </motion.button>
                  </form>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Specialized Department Contacts */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-16 text-center">Specific Assistance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {depts.map((dept, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -8 }}
                    className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-lg hover-lift hover:border-primary-100 transition-all group"
                  >
                     <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                        <dept.icon className="w-7 h-7" />
                     </div>
                     <h3 className="font-bold text-lg text-brand-dark mb-4">{dept.title}</h3>
                     <p className="text-sm text-gray-500 mb-2 font-medium">{dept.email}</p>
                     <p className="text-sm text-primary-600 font-bold">{dept.phone}</p>
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
                  <span className="section-subtitle">Common Queries</span>
                  <h2 className="section-title mb-8">Your Questions, <br /><span className="text-primary-600">Answered.</span></h2>
                  <p className="text-gray-500 text-lg mb-12 font-light">Can't find what you are looking for? Our FAQ section covers the most common patient queries regarding appointments, insurance, and visiting hours.</p>
                  
                  <div className="space-y-4">
                     {faqs.map((faq, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <button 
                              onClick={() => toggleAccordion(i)}
                              className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-gray-50 transition-colors"
                           >
                              <span className="font-bold text-brand-dark text-lg pr-4">{faq.q}</span>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${activeAccordion === i ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
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
                  <div className="absolute inset-0 bg-primary-200 rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-60 transition-opacity duration-1000" />
                  <div className="relative bg-white p-12 lg:p-16 rounded-[4rem] shadow-2xl border border-gray-100">
                     <ShieldCheck className="w-20 h-20 text-green-500 mb-10" />
                     <h3 className="text-3xl font-serif font-bold text-brand-dark mb-6">Patient Rights & Privacy</h3>
                     <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">At Umang Hospital, we strictly adhere to international patient privacy laws and ethical standards of medical care.</p>
                     <ul className="space-y-5 mb-12">
                        {["Confidentiality Guarantee", "Transparent Billing", "Ethical Clinical Practices"].map((item, i) => (
                           <li key={i} className="flex items-center gap-4 font-bold text-brand-dark">
                              <CheckCircle className="w-6 h-6 text-primary-500" /> {item}
                           </li>
                        ))}
                     </ul>
                     <Link to="/privacy" className="text-primary-600 font-black uppercase tracking-widest text-xs border-b-2 border-primary-100 hover:border-primary-600 transition-all pb-1">Read Privacy Policy</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Live Map - Full Width Premium */}
      <section className="h-[500px] lg:h-[600px] w-full relative group grayscale hover:grayscale-0 transition-all duration-1000">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.574636787962!2d77.0915!3d28.4322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzU1LjkiTiA3N8KwMDUnMjkuNCJF!5e0!3m2!1sen!2sin!4v1638202993631!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen="" 
           loading="lazy"
           title="Hospital Location"
         ></iframe>
         <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/20 hidden md:block max-w-sm pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
            <div className="flex items-center gap-3 mb-3">
               <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
               <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Open Now</span>
            </div>
            <h4 className="font-bold text-brand-dark text-xl mb-2">Find Us on the Map</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-light">Our center is conveniently located near the Sector 55-56 Metro Station, Gurugram.</p>
         </div>
      </section>

      {/* 7. Post-Visit Feedback CTA */}
      <section className="py-12 lg:py-10 bg-brand-dark text-white overflow-hidden relative">
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
         <div className="container-custom relative z-10 text-center">
            <MessageCircle className="w-16 h-16 text-primary-400 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Help us improve your experience.</h2>
            <p className="text-primary-100 text-xl max-w-2xl mx-auto mb-12 opacity-80 font-light">We value your feedback. Whether it's a compliment or a suggestion for improvement, we are listening.</p>
            <button className="h-16 px-12 rounded-full bg-white text-brand-dark font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover-lift hover:-translate-y-1">
               Share Your Feedback
            </button>
         </div>
      </section>
    </div>
  );
};

export default Contact;
