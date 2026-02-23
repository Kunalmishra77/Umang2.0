import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FileText, ShieldCheck, Scale, AlertCircle, Clock, ChevronRight, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Section } from '../../components/ui/Layout';
import { ASSETS } from '../../utils/imageAssets';

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction & Acceptance',
      icon: ShieldCheck,
      content: 'Welcome to Umang Hospital. These Terms and Conditions govern your use of our website (www.umanghospital.com) and all digital services. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms.'
    },
    {
      id: 'medical-disclaimer',
      title: '2. Medical Advice Disclaimer',
      icon: AlertCircle,
      content: 'The content provided on this website—including text, graphics, and images—is for informational purposes only. It is NOT intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. NEVER disregard professional medical advice or delay in seeking it because of something you have read on this website.'
    },
    {
      id: 'appointments',
      title: '3. Appointment Booking & Cancellations',
      icon: Clock,
      content: 'Appointments booked through our digital portal are subject to consultant availability. Umang Hospital reserves the right to reschedule or cancel appointments due to clinical emergencies or unforeseen circumstances. While we strive for punctuality, wait times may vary based on the complexity of clinical cases.'
    },
    {
      id: 'user-conduct',
      title: '4. User Conduct & Responsibilities',
      icon: Scale,
      content: 'Users are prohibited from using this website for any unlawful purpose. You agree not to disrupt the website servers, attempt unauthorized access to patient data, or upload malicious code. Any breach of security may lead to legal action and termination of access to our digital services.'
    },
    {
      id: 'intellectual-property',
      title: '5. Intellectual Property',
      icon: FileText,
      content: 'All content, logos, trademarks, and medical literature on this website are the exclusive property of Umang Hospital. Unauthorized reproduction, distribution, or modification of any material is strictly prohibited without prior written consent.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Terms & Conditions | Umang Superspeciality Hospital</title>
        <meta name="description" content="Legal terms and conditions for using Umang Hospital's digital services and website." />
      </Helmet>

      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.HOSPITAL_EXTERIOR} 
            alt="Umang Hospital" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-[#0f172a] to-[#0f172a]" />
        </div>
        
        <Container className="relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
               <Scale className="w-3.5 h-3.5" /> Legal Framework
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
              Terms & <span className="text-primary-400 italic font-medium">Conditions.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Last Updated: February 24, 2026 • Version 2.0
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. BREADCRUMBS */}
      <div className="bg-slate-50 py-6 border-b border-slate-100">
         <Container>
            <div className="flex items-center gap-3 text-[12px] font-black text-slate-400 uppercase tracking-[0.2em]">
               <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
               <ChevronRight size={14} className="opacity-50" />
               <span className="text-slate-900">Terms of Service</span>
            </div>
         </Container>
      </div>

      {/* 3. CONTENT GRID */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sidebar Navigation */}
            <div className="hidden lg:block lg:col-span-4">
               <div className="sticky top-32 space-y-2">
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Table of Contents</h4>
                  {sections.map((s) => (
                     <a 
                       key={s.id} 
                       href={`#${s.id}`}
                       className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 text-slate-500 hover:text-primary-600 font-bold text-sm transition-all group"
                     >
                        <s.icon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                        {s.title.split('. ')[1]}
                     </a>
                  ))}
                  
                  <div className="mt-12 p-8 bg-primary-600 rounded-[2.5rem] text-white relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                     <h5 className="font-bold text-lg mb-2 relative z-10">Need Help?</h5>
                     <p className="text-primary-100 text-sm mb-6 opacity-80 relative z-10 leading-relaxed">Our legal desk is available for any clarifications regarding our policies.</p>
                     <a href="mailto:umanghospitalgurugram@gmail.com" className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-widest bg-white text-primary-600 px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors relative z-10">
                        Contact Legal <ArrowRight className="w-3.5 h-3.5" />
                     </a>
                  </div>
               </div>
            </div>

                           {/* Main Content Sections */}
                        <div className="lg:col-span-8 space-y-8">
                           {sections.map((section, idx) => (
                              <motion.div 
                                key={idx}
                                id={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 lg:p-12 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-500 group"
                              >
                                 <div className="flex items-start gap-6 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-700">
                                       <section.icon size={28} />
                                    </div>
                                    <div>
                                       <h2 className="text-2xl lg:text-3xl font-serif font-bold text-slate-900 mb-4 tracking-tight">{section.title}</h2>
                                       <div className="h-1 w-12 bg-primary-500/20 rounded-full group-hover:w-20 group-hover:bg-primary-500 transition-all duration-700" />
                                    </div>
                                 </div>
                                 <div className="pl-0 lg:pl-20">
                                    <p className="text-slate-600 text-lg lg:text-xl font-light leading-relaxed">
                                       {section.content}
                                    </p>
                                    
                                    {/* Interactive scanning element */}
                                    <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                                       <ShieldCheck size={14} /> Verified Compliance Standard
                                    </div>
                                 </div>
                              </motion.div>
                           ))}
               {/* FINAL STATEMENT */}
               <div className="p-10 lg:p-14 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-[80px]" />
                  <h3 className="text-2xl font-serif font-bold mb-6">6. Agreement Termination</h3>
                  <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                     Umang Hospital reserves the right, in its sole discretion, to terminate your access to all or part of this website, with or without notice, for any reason, including, without limitation, the breach of these Terms and Conditions.
                  </p>
                  <div className="flex flex-wrap gap-8">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                           <Phone size={18} className="text-primary-400" />
                        </div>
                        <div>
                           <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest leading-none mb-1.5">Emergency</p>
                           <p className="font-bold text-sm text-white">+91 85880 72727</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                           <Mail size={18} className="text-primary-400" />
                        </div>
                        <div>
                           <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest leading-none mb-1.5">Official Mail</p>
                           <p className="font-bold text-sm text-white">legal@umanghospital.com</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Terms;
