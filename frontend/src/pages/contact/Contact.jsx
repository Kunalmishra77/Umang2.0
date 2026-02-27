import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Smartphone, Mail, Clock, Send, Facebook, Twitter, Linkedin, 
  Instagram, Plus, Globe, Briefcase, FileText, Ambulance, 
  MessageCircle, ArrowRight, Calendar, Search, 
  ShieldCheck, Headset, CheckCircle, Loader2, ChevronDown, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';
import { useLeadForm } from '../../hooks/useLeadForm';
import SeoHead from '../../components/common/SeoHead';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';

const depts = [
  { title: "International Patients", icon: Globe, email: siteConfig.contacts.email, phone: siteConfig.contacts.main },
  { title: "TPA & Insurance", icon: FileText, email: siteConfig.contacts.email, phone: siteConfig.contacts.main },
  { title: "Careers / HR", icon: Briefcase, email: siteConfig.contacts.email, phone: siteConfig.contacts.main },
  { title: "Emergency", icon: Ambulance, email: siteConfig.contacts.email, phone: siteConfig.contacts.emergency },
];

const faqs = [
  { q: "What are the visiting hours for general wards?", a: "Visiting hours are from 4:00 PM to 7:00 PM daily. Only two visitors are allowed at a time." },
  { q: "Do you offer cashless insurance facilities?", a: "Yes, we are empanelled with all major TPA and insurance providers for cashless treatment." },
  { q: "Is prior appointment mandatory for OPD?", a: "While walk-ins are welcome, we highly recommend booking an appointment to minimize waiting time." },
  { q: "Do you have parking facilities?", a: "Yes, we have ample parking space for patients and visitors within the hospital premises." },
];

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const subjects = ['General Inquiry', 'Corporate Partnership', 'Billing & Insurance', 'Feedback / Compliment'];

  const { submitForm, loading, success, error, reset } = useLeadForm('contact');

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectSubject = (subject) => {
    setFormData(prev => ({ ...prev, subject }));
    setIsSubjectOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm({
      name: formData.name,
      email: formData.email,
      phone: '', 
      inquiry_type: formData.subject,
      message: formData.message,
      source_page: 'Contact Us'
    });
  };

  return (
    <div className="bg-white min-h-screen pt-12">
      <SeoHead 
        title="Contact & Support" 
        description="Get in touch with Umang Superspeciality Hospital Gurugram. 24/7 emergency contact, appointment booking, and specialized department assistance."
        canonical="/contact"
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ASSETS.RECEPTION} alt="Hospital Reception" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-[#0f172a]" />
        </div>
        <Container className="relative z-10 text-center max-w-4xl mx-auto py-12 lg:py-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-widest text-[10px] mb-8">
              <Headset className="w-4 h-4" /> 24/7 Global Support
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Connect with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 normal">Umang Care.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed">
              Our clinical and administrative coordination desks are operational 24/7 to ensure your queries are resolved with clinical precision.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. QUICK ACTION TILES */}
      <section className="container-custom -mt-12 md:-mt-20 relative z-20">
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
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors mb-8 leading-relaxed">Search through our directory of {siteConfig.stats.superspecialists} expert medical consultants.</p>
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
                  <a href={`tel:${siteConfig.contacts.emergency.replace(/\s/g, '')}`} className="text-3xl font-serif font-black tracking-tighter hover:text-red-400 transition-colors">{siteConfig.contacts.emergency}</a>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. STATS SECTION */}
      <div className="bg-white py-24 border-b border-gray-50">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Queries Resolved", value: "100k+" },
              { label: "Avg Response Time", value: "< 15 Min" },
              { label: "Patient Feedback", value: "4.9/5" },
              { label: "Available 24/7", value: "100%" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl lg:text-5xl font-serif font-bold text-primary-600 mb-2">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 4. MAIN CONTACT GRID */}
      <section className="py-32 bg-gray-50 overflow-hidden">
         <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-16 items-stretch">
               
               {/* LEFT: Info */}
               <div className="lg:col-span-5 space-y-12 flex flex-col">
                  <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm flex-1">
                     <span className="section-subtitle">Get in Touch</span>
                                           <h2 className="section-title">Our Main Hospital</h2>                     <p className="text-gray-500 text-lg leading-relaxed mb-10">Visit our flagship superspeciality center in the heart of Gurugram for all your medical needs.</p>
                     
                     <div className="space-y-6">
                        <div className="flex gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                           <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                              <MapPin className="w-7 h-7" />
                           </div>
                           <div className="flex-1">
                              <h4 className="font-bold text-lg text-brand-dark mb-1">Hospital Location</h4>
                              <p className="text-gray-500 text-sm leading-relaxed mb-4">{siteConfig.locations.main.address}</p>
                              <a href={`https://www.google.com/maps/search/${encodeURIComponent(siteConfig.locations.main.googleMapsSearch)}`} target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-white hover:bg-primary-600 hover:text-white rounded-full text-primary-600 font-bold text-[10px] uppercase tracking-widest transition-all inline-block shadow-sm">Get Directions</a>
                           </div>
                        </div>

                        <div className="flex gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                           <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                              <Clock className="w-7 h-7" />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg text-brand-dark mb-1">Operational Hours</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">Emergency: {siteConfig.timings.emergency} (All Days)<br />OPD: {siteConfig.timings.opd.days} ({siteConfig.timings.opd.morning} & {siteConfig.timings.opd.evening})</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-brand-dark rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
                     <h4 className="text-xl font-bold mb-8">Connect Digitally</h4>
                     <div className="space-y-5">
                        <a href={`mailto:${siteConfig.contacts.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                              <Mail className="w-5 h-5" />
                           </div>
                           <span className="group-hover:translate-x-2 transition-transform font-bold">{siteConfig.contacts.email}</span>
                        </a>
                        <a href={`tel:${siteConfig.contacts.main.replace(/\s/g, '')}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                              <Smartphone className="w-5 h-5" />
                           </div>
                           <span className="group-hover:translate-x-2 transition-transform font-bold">{siteConfig.contacts.main}</span>
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
               <div className="lg:col-span-7 bg-white rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-2xl border border-gray-100 flex flex-col">
                  {success ? (
                    <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4">Inquiry Submitted</h3>
                      <p className="text-gray-500 mb-8 max-w-sm">Thank you for reaching out. Our team will contact you shortly.</p>
                      <button 
                        onClick={() => { reset(); setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' }); }}
                        className="px-10 py-4 bg-brand-dark text-white rounded-2xl font-bold hover:bg-primary-600 transition-all shadow-xl"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="mb-10">
                         <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Send an Inquiry</h2>
                         <p className="text-gray-500">For non-emergency feedback, corporate tie-ups, or hospital visits.</p>
                      </div>

                      <form id="inquiry-form" className="space-y-6 flex-1 flex flex-col justify-center" onSubmit={handleSubmit}>
                         <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                               <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                               <input 
                                 name="name"
                                 value={formData.name}
                                 onChange={handleInputChange}
                                 type="text" 
                                 required 
                                 className="w-full h-14 bg-gray-50 rounded-2xl px-6 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-bold text-brand-dark placeholder:text-gray-300 shadow-inner" 
                                 placeholder="John Doe" 
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                               <input 
                                 name="email"
                                 value={formData.email}
                                 onChange={handleInputChange}
                                 type="email" 
                                 required 
                                 className="w-full h-14 bg-gray-50 rounded-2xl px-6 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-bold text-brand-dark placeholder:text-gray-300 shadow-inner" 
                                 placeholder={siteConfig.contacts.email} 
                               />
                            </div>
                         </div>

                         <div className="space-y-2 relative z-30">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                            <div className="relative">
                               <button
                                 type="button"
                                 onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                                 className="w-full h-14 bg-gray-50 rounded-2xl px-6 border border-gray-200 text-left transition-all font-bold text-brand-dark flex items-center justify-between shadow-inner"
                               >
                                 {formData.subject}
                                 <ChevronDown className={`text-gray-400 transition-transform ${isSubjectOpen ? 'rotate-180' : ''}`} />
                               </button>
                               <AnimatePresence>
                                 {isSubjectOpen && (
                                   <motion.div
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     exit={{ opacity: 0, y: 10 }}
                                     className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden"
                                   >
                                     {subjects.map((sub) => (
                                       <button
                                         key={sub}
                                         type="button"
                                         onClick={() => selectSubject(sub)}
                                         className={`w-full p-4 text-left font-bold text-sm transition-colors hover:bg-primary-50 ${formData.subject === sub ? 'text-primary-600 bg-primary-50/50' : 'text-brand-dark'}`}
                                       >
                                         {sub}
                                       </button>
                                     ))}
                                   </motion.div>
                                 )}
                               </AnimatePresence>
                            </div>
                         </div>

                         <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                            <textarea 
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows="6" 
                              required 
                              className="w-full p-6 bg-gray-50 rounded-[2rem] border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-bold text-brand-dark resize-none placeholder:text-gray-300 shadow-inner" 
                              placeholder="How can we assist you today?"
                            ></textarea>
                         </div>

                         {error && (
                           <div className="text-red-500 text-sm font-bold">
                             {error}
                           </div>
                         )}

                         <div className="pt-4">
                            <motion.button 
                               whileHover={{ scale: 1.02 }}
                               whileTap={{ scale: 0.98 }}
                               disabled={loading}
                               className={`w-full h-16 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 disabled:opacity-50`}
                            >
                               {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Submit Request'} 
                               {!loading && <Send className="w-5 h-5" />}
                            </motion.button>
                         </div>
                      </form>
                    </div>
                  )}
               </div>

            </div>
         </div>
      </section>

      {/* 5. HELPLINE DIRECTORY */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Department Hub" title="Direct Helpline Directory" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Patient Billing', info: 'Ext: 104', sub: 'Ground Floor Hub', icon: FileText },
              { label: 'Medical Records', info: 'Ext: 201', sub: 'Lower Basement', icon: ShieldCheck },
              { label: 'Insurance Desk', info: 'Ext: 108', sub: 'TPA Support', icon: Zap },
              { label: 'OPD Appointments', info: siteConfig.contacts.main, sub: 'Main Reception', icon: Calendar },
              { label: 'Emergency Response', info: siteConfig.contacts.emergency, sub: 'Trauma Wing', icon: Ambulance },
              { label: 'Pharmacy Desk', info: 'Ext: 305', sub: '24/7 Support', icon: Zap }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-sm border border-slate-100 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <item.icon size={20} />
                   </div>
                   <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">{item.label}</h4>
                </div>
                <p className="text-2xl font-serif font-bold text-brand-dark mb-1">{item.info}</p>
                <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">{item.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. SPECIALIZED DEPT CONTACTS */}
      <section className="py-32 bg-gray-50 overflow-hidden">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-20 text-center">Specific Department Hubs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {depts.map((dept, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-lg hover:border-primary-100 transition-all group relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-[4rem] -mr-12 -mt-12 transition-all group-hover:scale-150" />
                     <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all relative z-10">
                        <dept.icon className="w-7 h-7" />
                     </div>
                     <h3 className="font-bold text-xl text-brand-dark mb-4 relative z-10">{dept.title}</h3>
                     <p className="text-sm text-gray-500 mb-2 font-medium relative z-10">{dept.email}</p>
                     <p className="text-lg text-primary-600 font-black relative z-10">{dept.phone}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. CAMPUS VIRTUAL TOUR CTA */}
      <Section className="bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary-500/20 rounded-[4rem] -rotate-3" />
              <img src={ASSETS.HOSPITAL_EXTERIOR} alt="Hospital Tour" className="rounded-[4rem] shadow-2xl w-full h-[450px] object-cover relative z-10" />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Experience Excellence</span>
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-8">Take a Virtual <br /><span className="text-primary-400 normal">Hospital Tour.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                Explore our world-class facilities, modular OTs, and premium recovery suites from the comfort of your home. Get a 360-degree view of the healing environment we have built for you.
              </p>
              <Link to="/infrastructure" className="px-10 py-5 bg-white text-brand-dark rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary-50 transition-all shadow-xl inline-flex items-center gap-3">
                Start Virtual Tour <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. TRUST & PRIVACY */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <span className="section-subtitle">Data Sovereignty</span>
                  <h2 className="section-title mb-8">Your Privacy, <br /><span className="text-primary-600 normal">Our Mandate.</span></h2>
                  <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed">At Umang Hospital, we strictly adhere to international patient privacy laws and ethical standards. Your medical records are encrypted and handled with absolute confidentiality.</p>
                  
                  <div className="space-y-6">
                     {faqs.slice(0, 3).map((faq, i) => (
                        <div key={i} className="flex gap-6 group cursor-pointer">
                           <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                              <ShieldCheck size={24} />
                           </div>
                           <div>
                              <h4 className="font-bold text-brand-dark text-lg mb-2">{faq.q}</h4>
                              <p className="text-gray-500 text-sm">{faq.a}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute inset-0 bg-primary-600/5 rounded-[4rem] blur-3xl" />
                  <div className="relative bg-slate-900 p-12 lg:p-16 rounded-[4rem] shadow-3xl text-white">
                     <ShieldCheck className="w-20 h-20 text-blue-400 mb-10" />
                     <h3 className="text-3xl font-serif font-bold mb-6">Patient Charter</h3>
                     <ul className="space-y-6 mb-12">
                        {["Right to Information", "Informed Consent Protocol", "Transparent Billing Guarantee", "24/7 Grievance Redressal"].map((item, i) => (
                           <li key={i} className="flex items-center gap-4 font-bold text-slate-300">
                              <CheckCircle className="w-6 h-6 text-blue-500" /> {item}
                           </li>
                        ))}
                     </ul>
                     <Link to="/patient-experience" className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-black uppercase tracking-widest text-white transition-all border border-white/10">Read Patient Rights</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 9. LIVE MAP - PREMIUM FULL WIDTH */}
      <section className="h-[600px] w-full relative group border-y border-slate-100">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.574636787962!2d77.0915!3d28.4322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzU1LjkiTiA3N8KwMDUnMjkuNCJF!5e0!3m2!1sen!2sin!4v1638202993631!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0)' }} 
           allowFullScreen="" 
           loading="lazy"
           title="Hospital Location"
           className="transition-all duration-1000 group-hover:grayscale-0 group-hover:contrast-100"
         ></iframe>
         <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-md p-10 rounded-[3rem] shadow-3xl border border-white/20 hidden md:block max-w-sm pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Open & Operating</span>
            </div>
            <h4 className="font-serif font-bold text-brand-dark text-2xl mb-4">Visit Our Hub</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-light mb-8">Located at the heart of Gurugram\'s medical corridor, opposite Radha Swami Satsang Bhawan.</p>
            <a href={`https://www.google.com/maps/search/${encodeURIComponent(siteConfig.locations.main.googleMapsSearch)}`} target="_blank" rel="noreferrer" className="text-primary-600 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 pointer-events-auto">Open in Maps <ArrowRight size={14} /></a>
         </div>
      </section>

      {/* 10. SOCIAL MEDIA WALL CTA */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <span className="section-subtitle">Stay Connected</span>
            <h2 className="section-title">Join Our Community</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Facebook', icon: Facebook, color: 'text-blue-600' },
              { label: 'Twitter', icon: Twitter, color: 'text-sky-500' },
              { label: 'Linkedin', icon: Linkedin, color: 'text-blue-700' },
              { label: 'Instagram', icon: Instagram, color: 'text-pink-600' }
            ].map((social, i) => (
              <a key={i} href="#" className="p-8 bg-white rounded-3xl border border-slate-100 flex flex-col items-center group hover:-translate-y-2 transition-all shadow-sm">
                <social.icon size={32} className={`${social.color} mb-4 group-hover:scale-110 transition-transform`} />
                <span className="font-bold text-brand-dark text-xs uppercase tracking-widest">{social.label}</span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* 11. FAQ SECTION (REDESIGNED) */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Quick Answers</span>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-8 leading-tight">Common Support <br /><span className="text-primary-600 normal">Queries.</span></h2>
              <p className="text-gray-500 leading-relaxed mb-10 font-light">Can't find what you're looking for? Our support team is available 24/7 to assist with your specific needs.</p>
              <div className="p-8 bg-primary-50 rounded-[2.5rem] border border-primary-100">
                <p className="text-sm font-bold text-brand-dark mb-4">Direct Assistance</p>
                <a href={`tel:${siteConfig.contacts.main}`} className="text-2xl font-serif font-bold text-primary-600 hover:text-primary-700 transition-colors">{siteConfig.contacts.main}</a>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-[2rem] overflow-hidden group hover:border-primary-200 transition-all shadow-sm hover:shadow-md">
                  <button 
                    onClick={() => toggleAccordion(i)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <span className="font-bold text-brand-dark text-lg pr-4">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${activeAccordion === i ? 'bg-primary-600 text-white rotate-180' : 'bg-white text-gray-400 shadow-sm'}`}>
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
                        <div className="p-8 pt-0 text-gray-600 leading-relaxed border-t border-white/50 font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 12. FINAL FEEDBACK HUB CTA (RESIZED) */}
      <section className="py-20 bg-brand-dark text-white overflow-hidden relative border-t border-white/5">
         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none" />
         <div className="container-custom relative z-10 text-center">
            <MessageCircle className="w-12 h-12 text-primary-400 mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 tracking-tighter">Your Feedback <br /><span className="text-primary-400 normal">Powers Us.</span></h2>
            <p className="text-primary-100 text-lg max-w-xl mx-auto mb-12 opacity-80 font-light leading-relaxed">Whether it's a compliment or a suggestion for improvement, we are listening. Your experience helps us redefine excellence.</p>
            <button 
              onClick={() => { window.scrollTo({ top: document.getElementById('inquiry-form')?.offsetTop - 150, behavior: 'smooth' }); }}
              className="px-10 py-5 bg-white text-brand-dark font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-primary-50 transition-all shadow-2xl active:scale-95"
            >
               Open Feedback Form
            </button>
         </div>
      </section>
    </div>
  );
};

export default Contact;