import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, MessageSquare, Briefcase, Globe, Ambulance, Heart, 
  ArrowRight, CheckCircle, Info, Phone, Mail, MapPin,
  Smile, ShieldCheck, Clock, Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InquiryHub = () => {
  const [activeForm, setActiveForm] = useState('general'); // general, corporate, feedback
  const [submitted, setSubmitted] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  const scrollToForm = (type) => {
    setActiveForm(type);
    document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      alert("Request Submitted. Our representative will contact you within 24 hours.");
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Specific Inquiries & Support | Umang Hospital</title>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
            alt="Customer Support" 
            className="w-full h-full object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-[#0f172a]" />
        </div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-widest text-[10px] mb-8">
              <Plus className="w-4 h-4" /> Comprehensive Care Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Beyond the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Consultation Room.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed">
              Whether you are an international patient, a corporate partner, or looking for special services, we have dedicated desks to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Special Services Grid */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] text-center mb-20">Specialized Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: "International Desk", desc: "Visa assistance, airport transfers, and interpreter services for foreign nationals.", icon: Globe, color: "text-blue-600 bg-blue-50", type: 'general' },
                  { title: "Home Collection", desc: "Expert phlebotomists visiting your home for blood and urine sample collection.", icon: Heart, color: "text-red-600 bg-red-50", type: 'general' },
                  { title: "Ambulance Hub", desc: "Advanced cardiac life support (ACLS) ambulances available 24/7 for transfers.", icon: Ambulance, color: "text-red-600 bg-red-50", type: 'general' },
                  { title: "Corporate Wellness", desc: "Customized health camps and onsite clinics for your workforce.", icon: Briefcase, color: "text-[#005580] bg-blue-50", type: 'corporate' }
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="p-10 rounded-[3rem] border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all group"
                  >
                     <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0f172a] mb-4">{item.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                     <button 
                        onClick={() => scrollToForm(item.type)}
                        className="text-[#005580] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
                     >
                        Learn More <ArrowRight className="w-4 h-4" />
                     </button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Corporate Tie-ups Section */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-blue-100 rounded-[4rem] rotate-3" />
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" alt="Corporate" className="relative rounded-[4rem] shadow-2xl w-full h-[500px] object-cover" />
               <div className="absolute bottom-10 right-10 bg-[#005580] text-white p-8 rounded-[3rem] shadow-2xl max-w-[250px]">
                  <h4 className="text-3xl font-serif font-bold mb-2">500+</h4>
                  <p className="text-sm opacity-80">Corporates already empanelled with Umang Group.</p>
               </div>
            </div>
            <div>
               <span className="text-[#005580] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">B2B Partnerships</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">Partner with India's <br />Best for Healthcare.</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  We offer end-to-end healthcare solutions for businesses, including pre-employment checkups, annual physicals, and specialized occupational health programs.
               </p>
               <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="flex items-center gap-3 font-bold text-[#0f172a] text-sm">
                     <CheckCircle className="w-5 h-5 text-green-500" /> Cashless Benefits
                  </div>
                  <div className="flex items-center gap-3 font-bold text-[#0f172a] text-sm">
                     <CheckCircle className="w-5 h-5 text-green-500" /> On-site Camps
                  </div>
                  <div className="flex items-center gap-3 font-bold text-[#0f172a] text-sm">
                     <CheckCircle className="w-5 h-5 text-green-500" /> Wellness Webinars
                  </div>
                  <div className="flex items-center gap-3 font-bold text-[#0f172a] text-sm">
                     <CheckCircle className="w-5 h-5 text-green-500" /> Priority Booking
                  </div>
               </div>
               <button onClick={() => scrollToForm('corporate')} className="h-16 px-10 rounded-full bg-[#0f172a] text-white font-black text-lg hover:bg-[#005580] transition-all shadow-xl">
                  Contact Corporate Desk
               </button>
            </div>
         </div>
      </section>

      {/* 4. Inquiry & Feedback Hub Form */}
      <section id="inquiry-form" className="py-32 bg-white">
         <div className="container-custom">
            <div className="bg-[#005580] rounded-[5rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row gap-20">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
               
               <div className="lg:w-5/12 relative z-10">
                  <h2 className="text-5xl font-serif font-bold mb-10 leading-tight">We are Listening.</h2>
                  <div className="space-y-4">
                     {[
                        { id: 'general', label: 'General Inquiry', icon: MessageSquare },
                        { id: 'corporate', label: 'Corporate Tie-up', icon: Briefcase },
                        { id: 'feedback', label: 'Patient Feedback', icon: Smile }
                     ].map(tab => (
                        <button 
                           key={tab.id}
                           onClick={() => setActiveForm(tab.id)}
                           className={`w-full flex items-center justify-between p-6 rounded-3xl border-2 transition-all ${activeForm === tab.id ? 'bg-white text-[#005580] border-white shadow-xl' : 'bg-transparent text-white border-white/20 hover:bg-white/5'}`}
                        >
                           <span className="flex items-center gap-4 font-bold">
                              <tab.icon className="w-6 h-6" /> {tab.label}
                           </span>
                           {activeForm === tab.id && <ArrowRight className="w-5 h-5" />}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="lg:w-7/12 relative z-10">
                  <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-10 shadow-2xl text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-[#0f172a] mb-2 capitalize">{activeForm} Request</h3>
                        <p className="text-gray-500 text-sm">Please provide accurate information for a faster resolution.</p>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                        <input type="text" required className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone / Email</label>
                        <input type="text" required className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent" placeholder="+91 / mail@" />
                     </div>
                     <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Message</label>
                        <textarea rows="3" required className="w-full border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent resize-none" placeholder="Describe your requirement..."></textarea>
                     </div>
                     <div className="md:col-span-2 pt-8">
                        <button type="submit" className="w-full h-16 bg-[#0f172a] text-white rounded-2xl font-black text-lg hover:bg-[#005580] transition-all shadow-xl">
                           Submit Inquiry Hub Request
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* 5. International Patient Desk */}
      <section className="py-32 bg-gray-50 overflow-hidden">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <span className="text-[#005580] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Medical Tourism</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">Global Care, <br />Global Patients.</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Every year, thousands of patients from over 30 countries travel to Umang Hospital for advanced surgical procedures. Our International Patient Desk provides end-to-end concierge services.
               </p>
               <div className="space-y-6 mb-12">
                  <motion.div 
                     onClick={handleDownload}
                     whileHover={{ scale: 1.02 }}
                     className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm cursor-pointer group"
                  >
                     <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#005580] group-hover:text-white transition-all">
                        {downloading ? <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" /> : <Download className="w-6 h-6" />}
                     </div>
                     <div>
                        <h4 className="font-bold text-[#0f172a]">{downloading ? 'Preparing File...' : 'Patient Concierge Guide'}</h4>
                        <p className="text-xs text-gray-400">Download PDF (1.2 MB)</p>
                     </div>
                  </motion.div>
               </div>
               <button onClick={() => scrollToForm('general')} className="h-16 px-10 rounded-full border-2 border-[#0f172a] text-[#0f172a] font-black text-lg hover:bg-[#0f172a] hover:text-white transition-all">
                  Contact International Desk
               </button>
            </div>
            <div className="order-1 lg:order-2 relative group">
               <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px] scale-150 animate-pulse" />
               <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" alt="Concierge" className="relative rounded-[4rem] shadow-2xl w-full h-[600px] object-cover" />
            </div>
         </div>
      </section>

      {/* 6. Comprehensive Contact Hub */}
      <section className="py-32 bg-[#0f172a] text-white">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-center mb-20">All Contact Points</h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
               <div>
                  <Phone className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Voice Desk</h4>
                  <p className="text-blue-200/60 mb-2">Emergency: +91 89297 33551</p>
                  <p className="text-blue-200/60">OPD Hub: +91 124 456 7890</p>
               </div>
               <div>
                  <Mail className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Email Assistance</h4>
                  <p className="text-blue-200/60 mb-2">Inquiry: info@umanghospitals.in</p>
                  <p className="text-blue-200/60">Corporate: b2b@umanghospitals.in</p>
               </div>
               <div>
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Main Campus</h4>
                  <p className="text-blue-200/60 mb-2">Sector 55, Golf Course Ext.</p>
                  <p className="text-blue-200/60">Gurugram, Haryana 122011</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default InquiryHub;
