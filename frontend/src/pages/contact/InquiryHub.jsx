import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, MessageSquare, Briefcase, Globe, Ambulance, Heart, 
  ArrowRight, CheckCircle, Info, Smartphone, Mail, MapPin,
  Smile, ShieldCheck, Clock, Download, Loader2, UserCheck, Star, FileText
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

      {/* 2. STATS BAR (NEW) */}
      <div className="bg-[#030712] py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Queries Resolved', val: '100k+', icon: UserCheck },
              { label: 'Avg Response', val: '< 15 Min', icon: Clock },
              { label: 'Support Desks', val: '08', icon: ShieldCheck },
              { label: 'Patient Rating', val: '4.9/5', icon: Star }
            ].map((stat, i) => (
              <div key={i} className="group">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-serif font-bold text-white mb-1">{stat.val}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. SPECIALIZED DESKS GRID */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <SectionHeading eyebrow="Expert Assistance" title="Our Specialized <span class='text-blue-600'>Support Hubs.</span>" centered />
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
                     className="p-10 rounded-[3rem] border border-gray-100 bg-white shadow-sm hover:shadow-premium transition-all group h-full flex flex-col"
                  >
                     <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0f172a] mb-4">{item.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                     <button 
                        onClick={() => scrollToForm(item.type)}
                        className="text-[#005580] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
                     >
                        Initiate Inquiry <ArrowRight className="w-4 h-4" />
                     </button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. RESPONSE TIMELINE (NEW) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="bg-[#0f172a] rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-10 -mr-48 -mt-48" />
            <div>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-4 block">Service Level Agreement</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8 text-white">Our Response <br /><span className="text-blue-400 italic">Guarantees.</span></h2>
              <div className="space-y-8">
                {[
                  { label: 'Emergency Callback', time: 'Immediate' },
                  { label: 'General Inquiry', time: '< 30 Mins' },
                  { label: 'Medical Report Queries', time: '< 2 Hours' },
                  { label: 'Corporate Tie-up Proposals', time: '< 24 Hours' }
                ].map((sla, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 group">
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{sla.label}</span>
                    <span className="text-blue-400 font-black uppercase tracking-widest text-xs">{sla.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
               <div className="inline-block p-12 bg-white/5 border border-white/10 rounded-full animate-pulse">
                  <Clock className="w-24 h-24 text-blue-400" />
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. DIGITAL SUPPORT CHANNELS (NEW) */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1 relative">
               <img src={ASSETS.ABOUT_GLOBAL} alt="Digital Channels" className="rounded-[3rem] shadow-2xl" />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <SectionHeading 
                eyebrow="Modern Connect" 
                title="Seamless <span class='text-blue-600'>Digital Channels.</span>" 
                description="Choose the way you want to connect with us. Our systems are integrated to provide a unified experience across all platforms."
              />
              <div className="space-y-6 mt-10">
                {[
                  { title: "WhatsApp Concierge", desc: "Instant automated assistance for reports and appointments.", icon: MessageSquare },
                  { title: "Patient Portal", desc: "Log in to manage your entire medical history securely.", icon: ShieldCheck },
                  { title: "24/7 Voice Desk", desc: "Speak directly with our clinical coordinators for help.", icon: Smartphone }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. COMMON SUPPORT TOPICS (NEW) */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeading eyebrow="Self Help" title="Common Support Topics" centered />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Billing & Refunds', 'Report Delays', 'Insurance/TPA', 'Medical Records', 'Appointment Fix', 'Visitor Passes', 'Feedback Hub', 'Tech Support'].map((topic, i) => (
              <button key={i} className="p-6 bg-white border border-slate-100 rounded-3xl text-center hover:border-blue-300 hover:shadow-premium transition-all group">
                <span className="font-bold text-brand-dark group-hover:text-blue-600 transition-colors text-sm">{topic}</span>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. INQUIRY & FEEDBACK HUB FORM */}
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

      {/* 8. GLOBAL SUPPORT (NEW) */}
      <Section className="bg-white">
        <Container>
          <div className="bg-blue-50 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50 -mr-48 -mt-48" />
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 relative z-10">
              <div className="max-w-2xl">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Global Patient Desk</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">International <br /><span className="text-blue-600 italic">Concierge Service.</span></h2>
              </div>
              <button className="px-10 py-5 bg-brand-dark text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                Visit International Hub
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              {[
                { title: 'Visa Invitation', desc: 'Assistance with medical visa documentation and embassy coordination.' },
                { title: 'Airport Pickup', desc: 'Dedicated transport service for international arrivals and departures.' },
                { title: 'Language Desk', desc: 'Native speaking interpreters available for clinical consultations.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50 group-hover:bg-white transition-all">
                  <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. INQUIRY FAQ (REDESIGNED) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Direct Answers</span>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-8 leading-tight">Specific Inquiry <br /><span className="text-blue-600 italic">FAQ Hub.</span></h2>
              <p className="text-slate-500 leading-relaxed mb-10 font-light">Find instant answers to specialized queries regarding international care, corporate tie-ups, and more.</p>
              <div className="p-8 bg-blue-100/50 rounded-[2.5rem] border border-blue-100 shadow-sm">
                 <p className="text-xs font-black uppercase text-blue-600 tracking-widest mb-4">Dedicated Desk</p>
                 <p className="text-brand-dark font-bold leading-relaxed mb-6 italic">"Our support hubs are specialized to provide technical and clinical clarity beyond standard care."</p>
                 <button className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">Read Policy Docs <ArrowRight size={12} /></button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              {[
                { q: 'How long does it take to get a callback?', a: 'Our automated system attempts to route your call to the relevant desk within 5 minutes. For email inquiries, the turnaround is under 4 hours.' },
                { q: 'Do you offer home sample collection?', a: 'Yes, our phlebotomy team is available for home collection between 6 AM to 8 PM across the NCR region.' },
                { q: 'Can organizations book group health camps?', a: 'Absolutely. Our corporate wellness hub specializes in onsite preventive health screenings and mental wellness workshops.' },
                { q: 'Is my feedback shared with doctors?', a: 'Yes, constructive clinical feedback is shared with the relevant department heads to ensure continuous quality improvement.' }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-100 group hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                  <h4 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Info size={16} />
                    </div>
                    {faq.q}
                  </h4>
                  <p className="text-slate-500 leading-relaxed font-medium pl-12 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. VOICE DESK & HELPLINES (NEW) */}
      <Section className="bg-white pt-0">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Emergency 24/7', info: siteConfig.contacts.emergency, icon: Smartphone, color: 'bg-red-50 text-red-600' },
              { label: 'OPD Appointment', info: siteConfig.contacts.main, icon: Calendar, color: 'bg-blue-50 text-blue-600' },
              { label: 'Report Dispatch', info: '+91 124 456 7899', icon: FileText, color: 'bg-emerald-50 text-emerald-600' }
            ].map((box, i) => (
              <div key={i} className="p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-premium transition-all text-center group">
                <div className={`w-16 h-16 rounded-2xl ${box.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <box.icon size={28} />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-2">{box.label}</h4>
                <p className="text-xl font-bold text-brand-dark">{box.info}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 11. COMPREHENSIVE CONTACT HUB (ENHANCED) */}
      <section className="py-32 bg-[#0f172a] text-white">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-center mb-20">Regional Presence</h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
               <div className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                  <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-xl font-bold mb-4">Voice Desk</h4>
                  <p className="text-blue-200/60 mb-2">Emergency: {siteConfig.contacts.emergency}</p>
                  <p className="text-blue-200/60">OPD Hub: {siteConfig.contacts.main}</p>
               </div>
               <div className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                  <Mail className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-xl font-bold mb-4">Email Assistance</h4>
                  <p className="text-blue-200/60 mb-2">Inquiry: {siteConfig.contacts.email}</p>
                  <p className="text-blue-200/60">Corporate: {siteConfig.contacts.email}</p>
               </div>
               <div className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-xl font-bold mb-4">Main Hospital</h4>
                  <p className="text-blue-200/60 mb-2">{siteConfig.locations.main.address.split(',')[0]}</p>
                  <p className="text-blue-200/60">{siteConfig.locations.main.address.split(',').slice(1).join(',')}</p>
               </div>
            </div>
         </div>
      </section>

      {/* 12. FINAL CTA HUB (NEW) */}
      <Section className="bg-brand-dark text-white relative overflow-hidden py-24 border-t border-white/5">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container className="text-center relative z-10">
          <h2 className="text-4xl lg:text-8xl font-serif font-bold mb-10 leading-tight">Always <span className="text-blue-400 italic">Available.</span></h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">Our clinical and administrative desks are operational 24/7 to provide you with the support you need.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="tel:+918588072727" className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group">
              <Smartphone size={24} className="group-hover:rotate-12 transition-transform" /> 85880 72727
            </a>
            <Link to="/contact" className="px-12 py-6 border-2 border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-4 hover:scale-105 active:scale-95">
              <MapPin size={24} /> Get Directions
            </Link>
          </div>
        </Container>
      </Section>

    </div>
  );
};

export default InquiryHub;
