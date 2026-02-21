import React, { useMemo, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Star, Activity, 
  HelpCircle, ChevronRight, Award, HeartPulse, Clock, CheckCircle2, Phone, Calendar
} from 'lucide-react';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';
import SeoHead from '../../components/common/SeoHead';
import { pageContent } from '../../data/pageContent';
import { ASSETS } from '../../utils/imageAssets';

const DynamicSubPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  
  // Try to find content based on path or slug
  const pathKey = location.pathname.startsWith('/') ? location.pathname.substring(1) : location.pathname;
  
  const content = useMemo(() => {
    // Check full path first (e.g., 'infrastructure/ot')
    if (pageContent[pathKey]) return pageContent[pathKey];
    // Check slug only (e.g., 'ot')
    if (pageContent[slug]) return pageContent[slug];
    
    // Fallback if no content found
    return {
      title: slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Page Under Update',
      subtitle: 'Umang Hospital Facility',
      description: 'We are currently updating this section with world-class clinical content. Please check back shortly.',
      heroImage: ASSETS.HOSPITAL_EXTERIOR,
      sections: []
    };
  }, [slug, pathKey]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathKey]);

  return (
    <div className="bg-white min-h-screen">
      <SeoHead title={content.title} description={content.description} />

      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={content.heroImage} alt={content.title} className="w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
        </div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-white/10 text-primary-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              {content.subtitle || 'Hospital Infrastructure'}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
              {content.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/appointments/request" className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-500 transition-all shadow-xl">
                  Book Consultation
               </Link>
               <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all">
                  Inquire Hub
               </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. BREADCRUMBS & NAVIGATION */}
      <div className="bg-gray-50 py-5 border-b border-gray-100">
         <Container>
            <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
               <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
               <ChevronRight size={14} className="opacity-50" />
               <span className="text-gray-900">{content.title}</span>
            </div>
         </Container>
      </div>

      {/* DYNAMIC SECTIONS ENGINE */}
      <div className="relative">
        {content.sections.map((section, idx) => {
          if (section.type === 'stats') {
            return (
              <div key={idx} className="bg-primary-600 py-14 text-white relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
                 <Container className="relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                       {section.data.map((stat, i) => (
                          <div key={i}>
                             <p className="text-3xl lg:text-5xl font-serif font-bold mb-2 tracking-tighter">{stat.value}</p>
                             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-100/70">{stat.label}</p>
                          </div>
                       ))}
                    </div>
                 </Container>
              </div>
            );
          }

          if (section.type === 'features' || section.type === 'grid') {
            return (
              <Section key={idx} className="bg-white">
                 <Container>
                    <SectionHeading title={section.title} centered />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                       {section.items.map((item, i) => (
                          <div key={i} className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group border-b-4 hover:border-b-primary-500">
                             <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                                <ShieldCheck size={28} />
                             </div>
                             <h4 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h4>
                             <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                       ))}
                    </div>
                 </Container>
              </Section>
            );
          }

          if (section.type === 'text-image') {
            return (
              <Section key={idx} className={`${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} overflow-hidden`}>
                 <Container>
                    <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                       <div className="lg:w-1/2">
                          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight tracking-tight">{section.title}</h2>
                          <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">{section.text}</p>
                          <div className="flex gap-6">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                   <CheckCircle2 size={20} />
                                </div>
                                <span className="font-bold text-slate-700">Verified Protocol</span>
                             </div>
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                   <Award size={20} />
                                </div>
                                <span className="font-bold text-slate-700">NABH Accredited</span>
                             </div>
                          </div>
                       </div>
                       <div className="lg:w-1/2 relative">
                          <div className={`absolute inset-0 bg-primary-600/10 rounded-[4rem] ${idx % 2 === 0 ? 'rotate-3' : '-rotate-3'} -z-10`} />
                          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[500px]">
                             <img src={section.image} alt={section.title} className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110" />
                          </div>
                       </div>
                    </div>
                 </Container>
              </Section>
            );
          }

          if (section.type === 'highlights') {
            return (
              <Section key={idx} className="bg-brand-dark text-white">
                 <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div>
                          <SectionHeading title={section.title} eyebrow="Key Benchmarks" />
                          <div className="grid sm:grid-cols-2 gap-6 mt-10">
                             {section.items.map((h, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                                   <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                                   <span className="font-bold uppercase tracking-widest text-[11px] text-primary-100">{h}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                       <div className="bg-primary-600 p-10 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                          <h3 className="text-3xl font-serif font-bold mb-6">Patient-First Policy</h3>
                          <p className="text-primary-50 text-lg mb-8 opacity-90 leading-relaxed">Every infrastructure design at Umang is guided by patient safety and ergonomic comfort protocols.</p>
                          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary-50 transition-all">
                             Request Facility Tour <ArrowRight size={16} />
                          </Link>
                       </div>
                    </div>
                 </Container>
              </Section>
            );
          }

          if (section.type === 'faq') {
            return (
              <Section key={idx} className="bg-gray-50">
                 <Container className="max-w-4xl">
                    <div className="text-center mb-16">
                       <span className="section-subtitle">Information Desk</span>
                       <h2 className="section-title">Common Questions</h2>
                    </div>
                    <div className="space-y-4">
                       {section.items.map((faq, i) => (
                          <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                             <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                                <HelpCircle size={22} className="text-primary-600 shrink-0" /> {faq.q}
                             </h4>
                             <p className="text-slate-600 pl-10 leading-relaxed">{faq.a}</p>
                          </div>
                       ))}
                    </div>
                 </Container>
              </Section>
            );
          }

          return null;
        })}
      </div>

      {/* FALLBACK CTA IF CONTENT IS THIN */}
      {content.sections.length < 5 && (
        <Section className="bg-brand-dark text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[150px] opacity-10" />
           <Container className="text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Need specialized <span className="text-primary-400">assistance?</span></h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">Our coordination desk is available 24/7 to help you navigate through our world-class facilities and services.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <a href="tel:8929733550" className="px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-base shadow-xl flex items-center justify-center gap-3">
                    <Phone size={20} /> Call Help Desk
                 </a>
                 <Link to="/appointments/request" className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-base backdrop-blur-md hover:bg-white/10 flex items-center justify-center gap-3">
                    <Calendar size={20} /> Book Visit
                 </Link>
              </div>
           </Container>
        </Section>
      )}
    </div>
  );
};

export default DynamicSubPage;
