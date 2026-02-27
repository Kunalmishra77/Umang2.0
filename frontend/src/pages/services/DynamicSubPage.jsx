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
            <section className="relative pt-40 pb-24 bg-brand-dark text-white overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src={content.heroImage} alt={content.title} className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
              </div>
              <Container className="relative z-20">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-12 h-[2px] bg-primary-500" />
                    <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-[12px]">{content.subtitle || 'Infrastructure Excellence'}</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                    {content.title.split(' ').map((word, i) => (
                      <span key={i}>
                        {i === content.title.split(' ').length - 1 ? (
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400 normal">{word}</span>
                        ) : word + ' '}
                      </span>
                    ))}
                  </h1>
                  <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light mb-12">
                    {content.description}
                  </p>
                  <div className="flex flex-wrap gap-6">
                     <Link to="/appointments/request" className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-500 transition-all shadow-xl hover:scale-105">
                        Book Consultation
                     </Link>
                     <Link to="/contact" className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                        Inquire Hub
                     </Link>
                  </div>
                </motion.div>
              </Container>
            </section>
      
            {/* 2. BREADCRUMBS & NAVIGATION */}
            <div className="bg-white py-6 border-b border-slate-100">
               <Container>
                  <div className="flex items-center gap-3 text-[12px] font-black text-slate-400 uppercase tracking-[0.2em]">
                     <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
                     <ChevronRight size={14} className="opacity-50" />
                     <span className="text-brand-dark">{content.title}</span>
                  </div>
               </Container>
            </div>
      
            {/* DYNAMIC SECTIONS ENGINE */}
            <div className="relative">
              {content.sections.map((section, idx) => {
                if (section.type === 'stats') {
                  return (
                                         <div key={idx} className="bg-[#030712] py-10 md:py-12 text-white relative overflow-hidden border-b border-white/5">
                                            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
                                            <Container className="relative z-10">
                                               <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
                                                  {section.data.map((stat, i) => (
                                                     <div key={i} className="group relative">
                                                        <div className="absolute -inset-4 bg-primary-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                        <p className="text-3xl lg:text-4xl font-serif font-bold mb-2 tracking-tighter text-white group-hover:text-primary-400 transition-colors duration-500">{stat.value}</p>
                                                        <div className="flex flex-col items-center">
                                                           <div className="h-[1px] w-5 bg-primary-600/40 mb-3 group-hover:w-10 transition-all duration-700" />
                                                           <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-300 transition-colors">{stat.label}</p>
                                                        </div>
                                                     </div>
                                                  ))}
                                               </div>
                                            </Container>
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
                                         </div>                  );
                }
      
                if (section.type === 'features' || section.type === 'grid') {
                  return (
                    <Section key={idx} className="bg-white">
                       <Container>
                          <SectionHeading title={section.title} centered />
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                             {section.items.map((item, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-primary-100 transition-all duration-500 group">
                                   <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                                      <ShieldCheck size={28} />
                                   </div>
                                   <h4 className="text-2xl font-bold text-brand-dark mb-4">{item.title}</h4>
                                   <p className="text-gray-500 text-base leading-relaxed font-light">{item.desc}</p>
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
                          <div className={`flex flex-col lg:flex-row gap-20 lg:gap-32 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                             <div className="lg:w-1/2">
                                <div className="flex items-center gap-3 mb-8">
                                   <span className="w-10 h-[1px] bg-primary-500" />
                                   <span className="text-primary-600 font-black text-[12px] lg:text-[13px] uppercase tracking-[0.3em]">Core Competencies</span>
                                </div>
                                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark mb-10 leading-tight tracking-tight">{section.title}</h2>
                                <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed mb-12 border-l-4 border-primary-500 pl-8">{section.text}</p>
                                
                                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 mt-12">
                                   {['Precision Engineering', 'Certified Safety', 'Real-time Monitoring', 'Expert Validation'].map((feature, i) => (
                                      <div key={i} className="flex items-center gap-4 group/item">
                                         <div className="w-2 h-2 rounded-full bg-primary-500 group-hover/item:scale-150 transition-transform" />
                                         <span className="font-bold text-slate-700 text-sm lg:text-base">{feature}</span>
                                      </div>
                                   ))}
                                </div>

                                <div className="mt-16 flex flex-wrap gap-10">
                                   <div className="flex items-center gap-4">
                                      <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shadow-sm">
                                         <CheckCircle2 size={24} />
                                      </div>
                                      <div>
                                         <p className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Standard</p>
                                         <p className="font-bold text-slate-700">Verified Protocol</p>
                                      </div>
                                   </div>
                                   <div className="flex items-center gap-4">
                                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                                         <Award size={24} />
                                      </div>
                                      <div>
                                         <p className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Quality</p>
                                         <p className="font-bold text-slate-700">NABH Accredited</p>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div className="lg:w-1/2 relative">
                                <div className={`absolute inset-0 bg-primary-600/5 rounded-[4rem] ${idx % 2 === 0 ? 'rotate-3' : '-rotate-3'} -z-10`} />
                                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[550px] border-[12px] border-white group">
                                   <img src={section.image} alt={section.title} className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110" />
                                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                </div>
                             </div>
                          </div>
                       </Container>
                    </Section>
                  );
                }
      
                if (section.type === 'highlights') {
                  return (
                    <Section key={idx} className="bg-[#030712] text-white relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none" />
                       <Container>
                          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                             <div className="lg:col-span-7">
                                <div className="flex items-center gap-4 mb-6">
                                   <span className="text-primary-400 font-black text-[13px] uppercase tracking-[0.4em]">{section.eyebrow || 'Clinical Excellence'}</span>
                                   <div className="h-px flex-1 bg-gradient-to-r from-primary-500/30 to-transparent" />
                                </div>
                                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-10 lg:mb-12 leading-[1.1]">
                                  {section.title || 'Key Benchmarks.'}
                                </h2>
                                
                                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                                   {section.items.map((h, i) => (
                                      <div key={i} className="flex items-center justify-between p-5 lg:p-6 bg-white/5 border border-white/10 rounded-2xl lg:rounded-[2rem] hover:bg-white/10 hover:border-primary-500/30 transition-all duration-500 group min-h-[80px]">
                                         <span className="font-bold uppercase tracking-[0.2em] text-[11px] lg:text-[12px] text-primary-100 group-hover:text-primary-400 transition-colors leading-tight">{h}</span>
                                         <div className="w-2 h-2 rounded-full bg-primary-400/50 group-hover:bg-primary-400 transition-colors shadow-[0_0_10px_rgba(96,165,250,0.5)] shrink-0 ml-4" />
                                      </div>
                                   ))}
                                </div>
                             </div>
                             
                             <div className="lg:col-span-5 h-full flex">
                                <div className="bg-gradient-to-br from-primary-600 to-blue-700 p-10 lg:p-14 rounded-[3rem] lg:rounded-[4rem] shadow-2xl relative overflow-hidden group flex flex-col justify-center w-full">
                                   <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-125" />
                                   <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">{section.sideTitle || 'Patient-First Policy'}</h3>
                                   <p className="text-blue-50 text-lg lg:text-xl mb-10 opacity-90 leading-relaxed font-light">{section.sideDesc || 'Every infrastructure design at Umang is guided by patient safety and ergonomic comfort protocols.'}</p>
                                   <Link to="/contact" className="flex items-center justify-center gap-4 px-8 py-4 lg:py-5 bg-white text-primary-600 rounded-2xl font-bold uppercase tracking-widest text-[11px] lg:text-xs hover:bg-primary-50 transition-all shadow-xl hover:scale-105 active:scale-95 mt-auto">
                                      Request Facility Tour <ArrowRight size={18} />
                                   </Link>
                                </div>
                             </div>
                          </div>
                       </Container>
                    </Section>
                  );
                }
      
                if (section.type === 'faq') {
                  return (
                    <Section key={idx} className="bg-slate-50 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[120px] opacity-30 -mr-48 -mt-48" />
                       <Container>
                          <div className="text-center mb-16 relative z-10">
                             <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary-600 mb-4 block">Information Desk</span>
                             <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark mb-6">Common <span className="text-primary-600 normal">Questions.</span></h2>
                          </div>
                          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
                             {section.items.map((faq, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                  className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary-200 hover:shadow-2xl transition-all duration-500 group"
                                >
                                   <h4 className="font-bold text-brand-dark flex items-start gap-6 mb-4 text-xl group-hover:text-primary-600 transition-colors">
                                      <span className="w-10 h-10 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-600 font-black text-sm group-hover:bg-primary-600 group-hover:text-white transition-all">?</span>
                                      {faq.q}
                                   </h4>
                                   <div className="pl-16">
                                      <p className="text-slate-500 text-lg font-light leading-relaxed">{faq.a}</p>
                                   </div>
                                </motion.div>
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
                 <a href="tel:8588072727" className="px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-base shadow-xl flex items-center justify-center gap-3">
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
