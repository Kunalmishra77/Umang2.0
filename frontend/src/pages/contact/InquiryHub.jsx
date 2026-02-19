import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, MessageSquare, Briefcase, Globe, Ambulance, Heart, 
  ArrowRight, CheckCircle, Info, Phone, Mail, MapPin,
  Smile, ShieldCheck, Clock, Download, Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadForm } from '../../hooks/useLeadForm';
import SeoHead from '../../components/common/SeoHead';
import { siteConfig } from '../../config/siteConfig';

const InquiryHub = () => {
  const [activeForm, setActiveForm] = useState('general'); // general, corporate, feedback
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const { submitForm, loading, success, error, reset } = useLeadForm(
    activeForm === 'feedback' ? 'contact' : (activeForm === 'corporate' ? 'contact' : 'contact')
  );

  const scrollToForm = (type) => {
    setActiveForm(type);
    document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      phone: formData.contact.includes('@') ? '' : formData.contact,
      email: formData.contact.includes('@') ? formData.contact : '',
      inquiry_type: activeForm,
      message: formData.message,
      source_page: 'Inquiry Hub'
    };
    
    await submitForm(payload);
  };

  return (
    <div className="bg-white min-h-screen pt-12">
      <SeoHead 
        title="Specific Inquiries & Support" 
        description="Dedicated desks for international patients, corporate wellness, and patient feedback at Umang Hospital."
        canonical="/contact/inquiry-hub"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/localized/inquiry-hero.jpg" 
            alt="Customer Support" 
            className="w-full h-full object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-[#0f172a]" />
        </div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto py-12 lg:py-10">
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
                     className="p-10 rounded-[3rem] border border-gray-100 bg-white shadow-sm hover-lift transition-all group"
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
                           onClick={() => { setActiveForm(tab.id); reset(); }}
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
                  {success ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white rounded-[3rem] p-16 shadow-2xl text-center text-gray-900"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-[#0f172a] mb-4">Request Submitted</h3>
                      <p className="text-gray-500 mb-8">Thank you for reaching out. Our representative will contact you shortly.</p>
                      <button 
                        onClick={() => { reset(); setFormData({ name: '', contact: '', message: '' }); }}
                        className="px-8 py-4 bg-[#005580] text-white rounded-xl font-bold"
                      >
                        Send Another Request
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-10 shadow-2xl text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="md:col-span-2">
                          <h3 className="text-2xl font-serif font-bold text-[#0f172a] mb-2 capitalize">{activeForm} Request</h3>
                          <p className="text-gray-500 text-sm">Please provide accurate information for a faster resolution.</p>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                          <input 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            type="text" 
                            required 
                            className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent" 
                            placeholder="John Doe" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone / Email</label>
                          <input 
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            type="text" 
                            required 
                            className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent" 
                            placeholder="+91 / mail@" 
                          />
                       </div>
                       <div className="md:col-span-2 space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Message</label>
                          <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="3" 
                            required 
                            className="w-full border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent resize-none" 
                            placeholder="Describe your requirement..."
                          ></textarea>
                       </div>

                       {error && (
                         <div className="md:col-span-2 text-red-500 text-sm font-bold">
                           {error}
                         </div>
                       )}

                       <div className="md:col-span-2 pt-8">
                          <button 
                            disabled={loading}
                            type="submit" 
                            className="w-full h-16 bg-[#0f172a] text-white rounded-2xl font-black text-lg hover:bg-[#005580] transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                          >
                             {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Submit Inquiry Hub Request'}
                          </button>
                       </div>
                    </form>
                  )}
               </div>
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
                  <p className="text-blue-200/60 mb-2">Emergency: {siteConfig.contacts.emergency}</p>
                  <p className="text-blue-200/60">OPD Hub: {siteConfig.contacts.main}</p>
               </div>
               <div>
                  <Mail className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Email Assistance</h4>
                  <p className="text-blue-200/60 mb-2">Inquiry: {siteConfig.contacts.email}</p>
                  <p className="text-blue-200/60">Corporate: {siteConfig.contacts.email}</p>
               </div>
               <div>
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Main Campus</h4>
                  <p className="text-blue-200/60 mb-2">{siteConfig.locations.main.address.split(',')[0]}</p>
                  <p className="text-blue-200/60">{siteConfig.locations.main.address.split(',').slice(1).join(',')}</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default InquiryHub;
