import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Share2, UserCheck, ChevronRight, Mail, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Section } from '../../components/ui/Layout';
import { ASSETS } from '../../utils/imageAssets';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const privacySections = [
    {
      id: 'collection',
      title: '1. Information We Collect',
      icon: Eye,
      content: 'Umang Hospital collects personal and medical information that you provide directly—such as name, contact details, and health history—when you book appointments, register on our portal, or communicate with our clinical staff. We also collect non-identifiable technical data (IP addresses, cookies) to improve your digital experience.'
    },
    {
      id: 'usage',
      title: '2. How We Use Your Information',
      icon: FileCheck,
      content: 'Your data is primarily used to provide clinical care, manage appointments, maintain medical records, and communicate important health updates. We also use aggregated, anonymized data for internal quality audits and hospital administration to enhance our healthcare standards.'
    },
    {
      id: 'security',
      title: '3. Data Security & Protection',
      icon: Lock,
      content: 'We implement military-grade encryption and stringent physical and digital security protocols to protect your sensitive health data. Access to medical records is strictly restricted to authorized clinical personnel involved in your treatment, ensuring the highest level of patient confidentiality.'
    },
    {
      id: 'sharing',
      title: '4. Third-Party Sharing',
      icon: Share2,
      content: 'We do not sell or trade your personal data. Information is only shared with trusted partners (such as insurance providers or diagnostic labs) explicitly for your treatment or as required by Indian healthcare regulations. All third-party partners are bound by strict non-disclosure agreements.'
    },
    {
      id: 'rights',
      title: '5. Your Rights & Control',
      icon: UserCheck,
      content: 'You have the right to access your medical records, request corrections to personal data, and opt-out of marketing communications. For clinical data requests, patients must follow the hospital\'s standard medical records release protocol to ensure data integrity.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Privacy Policy | Umang Superspeciality Hospital</title>
        <meta name="description" content="Privacy policy and data protection guidelines for patients and users of Umang Hospital." />
      </Helmet>

      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-[#030712] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.ABOUT_BEACON} 
            alt="Data Security" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
        </div>
        
        <Container className="relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-black uppercase tracking-[0.3em] mb-8">
               <Shield className="w-3.5 h-3.5" /> Patient Confidentiality
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">
              Privacy <span className="text-emerald-400 normal font-medium">Policy.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Committed to protecting your sensitive medical data with <br />global security standards.
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
               <span className="text-slate-900">Privacy Policy</span>
            </div>
         </Container>
      </div>

      {/* 3. POLICY SECTIONS */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Sidebar TOC */}
            <div className="hidden lg:block lg:col-span-4">
               <div className="sticky top-32">
                  <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
                     <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-8 border-b border-slate-200 pb-4">On this page</h4>
                     <ul className="space-y-4">
                        {privacySections.map((s) => (
                           <li key={s.id}>
                              <a 
                                href={`#${s.id}`}
                                className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors group"
                              >
                                 <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                 {s.title.split('. ')[1]}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="mt-8 p-10 bg-emerald-600 rounded-[3rem] text-white relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                     <Shield className="w-12 h-12 text-emerald-300 mb-6 opacity-50" />
                     <h5 className="text-xl font-bold mb-3">Data Protection Officer</h5>
                     <p className="text-emerald-50 text-sm mb-8 font-light leading-relaxed">For any data-related queries or requests, reach out to our dedicated DPO.</p>
                     <a href="mailto:privacy@umanghospital.com" className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-widest bg-white text-emerald-600 px-8 py-4 rounded-2xl hover:bg-emerald-50 transition-all shadow-xl">
                        Email DPO <Mail size={16} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
               <div className="space-y-12">
                  {privacySections.map((section, idx) => (
                     <motion.div 
                        key={idx}
                        id={section.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 lg:p-14 rounded-[3.5rem] bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-700 group"
                     >
                        <div className="flex items-start gap-8 mb-10">
                           <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-1000 transform group-hover:rotate-6 shadow-sm">
                              <section.icon size={32} />
                           </div>
                           <div>
                              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4 group-hover:text-emerald-700 transition-colors">{section.title}</h2>
                              <div className="h-1.5 w-16 bg-emerald-500/20 rounded-full group-hover:w-32 group-hover:bg-emerald-500 transition-all duration-1000" />
                           </div>
                        </div>
                        <div className="lg:pl-24">
                           <p className="text-slate-600 text-xl font-light leading-relaxed mb-10">
                              {section.content}
                           </p>
                           {idx === 2 && (
                             <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                {['End-to-End Encryption', 'ISO 27001 Compliance', 'Restricted Bio-Metric Access', 'Regular Security Audits'].map((cert, i) => (
                                   <div key={i} className="flex items-center gap-3 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 group-hover:bg-emerald-50 transition-colors">
                                      <Lock size={16} className="text-emerald-500" />
                                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">{cert}</span>
                                   </div>
                                ))}
                             </div>
                           )}
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* FINAL CTA */}
               <div className="mt-32 p-12 lg:p-20 bg-slate-900 rounded-[4rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
                  <div className="max-w-xl">
                     <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-8 leading-tight">Patient Safety Above <span className="text-emerald-400 normal">Everything.</span></h3>
                     <p className="text-slate-400 text-lg font-light mb-12 leading-relaxed">If you have any further questions regarding your privacy at Umang Hospital, our patient experience team is here to help.</p>
                     <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all shadow-xl hover:scale-105 active:scale-95">
                        Inquiry Hub <ArrowRight size={18} />
                     </Link>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Privacy;
