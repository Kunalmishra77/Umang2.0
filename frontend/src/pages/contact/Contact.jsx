import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram, Plus, Minus, Globe, Briefcase, FileText, Ambulance, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
    // Simulate API call
    setTimeout(() => {
      alert("Thank you for contacting us! We will get back to you shortly.");
      setSubmitted(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Helmet>
        <title>Contact & Support | Umang Superspeciality Hospital</title>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="bg-[#0f172a] pt-32 pb-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
         <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">How can we help?</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
               From appointments to insurance queries, our dedicated team is here to assist you 24/7.
            </p>
         </div>
      </section>

      {/* 2. Department Cards (Quick Access) */}
      <section className="container-custom -mt-12 relative z-20 mb-20">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {depts.map((dept, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
               >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#005580] mb-4">
                     <dept.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0f172a] mb-2">{dept.title}</h3>
                  <p className="text-sm text-gray-500 mb-1 flex items-center gap-2"><Mail className="w-3 h-3" /> {dept.email}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2"><Phone className="w-3 h-3" /> {dept.phone}</p>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 3. Main Contact Grid */}
      <section className="container-custom pb-24">
         <div className="grid lg:grid-cols-12 gap-8 shadow-2xl rounded-[2.5rem] overflow-hidden bg-white border border-gray-100">
            
            {/* LEFT: Detailed Info */}
            <div className="lg:col-span-5 bg-[#005580] p-12 text-white relative overflow-hidden">
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
               
               <div className="relative z-10">
                  <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>
                  
                  <div className="space-y-8">
                     <div className="flex gap-5">
                        <MapPin className="w-6 h-6 text-blue-300 mt-1" />
                        <div>
                           <h4 className="font-bold text-lg mb-1">Hospital Location</h4>
                           <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                              Umang Superspeciality Hospital,<br />
                              Sector 55, Gurugram, Haryana 122011<br />
                              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="underline mt-2 inline-block hover:text-white">Get Directions</a>
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-5">
                        <Phone className="w-6 h-6 text-blue-300 mt-1" />
                        <div>
                           <h4 className="font-bold text-lg mb-1">Helplines</h4>
                           <p className="text-blue-100 text-sm opacity-80">Emergency: +91 89297 33551</p>
                           <p className="text-blue-100 text-sm opacity-80">Front Desk: +91 124 456 7890</p>
                        </div>
                     </div>

                     <div className="flex gap-5">
                        <Clock className="w-6 h-6 text-blue-300 mt-1" />
                        <div>
                           <h4 className="font-bold text-lg mb-1">Operational Hours</h4>
                           <p className="text-blue-100 text-sm opacity-80">Emergency: 24/7 Open</p>
                           <p className="text-blue-100 text-sm opacity-80">OPD: Mon - Sat (9 AM - 8 PM)</p>
                           <p className="text-blue-100 text-sm opacity-80">Pharmacy: 24/7 Open</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-12 flex gap-4">
                     {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#005580] transition-all">
                           <Icon className="w-4 h-4" />
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-7 p-12 bg-white">
               <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Write to Us</h2>
               <p className="text-gray-500 mb-8">For feedback, complaints, or general inquiries.</p>

               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
                        <input type="text" required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#005580] focus:ring-2 focus:ring-blue-50 outline-none transition-all bg-gray-50" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email <span className="text-red-500">*</span></label>
                        <input type="email" required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#005580] focus:ring-2 focus:ring-blue-50 outline-none transition-all bg-gray-50" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject <span className="text-red-500">*</span></label>
                     <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#005580] focus:ring-2 focus:ring-blue-50 outline-none transition-all bg-gray-50">
                        <option>General Inquiry</option>
                        <option>Feedback</option>
                        <option>Complaint</option>
                        <option>Other</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message <span className="text-red-500">*</span></label>
                     <textarea required rows="4" className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#005580] focus:ring-2 focus:ring-blue-50 outline-none transition-all bg-gray-50 resize-none"></textarea>
                  </div>

                  <button disabled={submitted} className={`w-full h-14 bg-[#005580] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] shadow-lg transition-all ${submitted ? 'opacity-70 cursor-wait' : ''}`}>
                     {submitted ? 'Sending...' : 'Submit Request'} <Send className="w-4 h-4" />
                  </button>
               </form>
            </div>

         </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50">
                     <button 
                        onClick={() => toggleAccordion(i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                     >
                        <span className="font-bold text-[#0f172a] text-lg">{faq.q}</span>
                        {activeAccordion === i ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-gray-400" />}
                     </button>
                     <AnimatePresence>
                        {activeAccordion === i && (
                           <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                           >
                              <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                                 {faq.a}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Map */}
      <section className="h-[450px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.574636787962!2d77.0915!3d28.4322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzU1LjkiTiA3N8KwMDUnMjkuNCJF!5e0!3m2!1sen!2sin!4v1638202993631!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen="" 
           loading="lazy"
           title="Hospital Location"
         ></iframe>
      </section>

      {/* Sticky Actions */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
         <button className="w-14 h-14 bg-green-500 rounded-full text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
            <MessageCircle className="w-7 h-7" />
         </button>
      </div>
    </div>
  );
};

export default Contact;