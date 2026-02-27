import React, { useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Star, Activity, 
  HelpCircle, ChevronRight, Award, HeartPulse, Clock
} from 'lucide-react';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';
import SeoHead from '../../components/common/SeoHead';
import { pageContent } from '../../data/pageContent';
import { ASSETS } from '../../utils/imageAssets';

const GenericPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  
  // Try to find content based on path
  const pathKey = location.pathname.startsWith('/') ? location.pathname.substring(1) : location.pathname;
  const content = useMemo(() => pageContent[pathKey] || pageContent[slug] || {
    title: slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Page Not Found',
    description: 'We are updating this page with world-class content. Please check back soon.',
    heroImage: ASSETS.HOSPITAL_EXTERIOR,
    sections: []
  }, [slug, pathKey]);

  return (
    <div className="bg-white min-h-screen">
      <SeoHead title={content.title} description={content.description} />

      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={content.heroImage} alt={content.title} className="w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
        </div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-white/10 text-primary-300 text-xs font-bold uppercase tracking-widest mb-6">
              {content.subtitle || 'Umang Hospital Facility'}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
              {content.description}
            </p>
            <div className="flex gap-4">
               <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-500 transition-all shadow-xl">
                  Inquire Now
               </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. BREADCRUMBS */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
         <Container>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
               <Link to="/" className="hover:text-primary-600">Home</Link>
               <ChevronRight size={12} />
               <span className="text-gray-900">{content.title}</span>
            </div>
         </Container>
      </div>

      {/* DYNAMIC SECTIONS */}
      {content.sections.map((section, idx) => {
        if (section.type === 'stats') {
          return (
            <div key={idx} className="bg-[#0f172a] py-16 text-white relative overflow-hidden border-b border-white/5">
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
               <Container>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
                     {section.data.map((stat, i) => (
                        <div key={i} className="group">
                           <p className="text-4xl lg:text-5xl font-serif font-bold mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
                           <div className="h-0.5 w-8 bg-primary-600/30 mx-auto mb-4 group-hover:w-16 transition-all duration-500" />
                           <p className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-primary-400 transition-colors">{stat.label}</p>
                        </div>
                     ))}
                  </div>
               </Container>
            </div>
          );
        }

        if (section.type === 'features') {
          return (
            <Section key={idx} className="bg-white">
               <Container>
                  <SectionHeading title={section.title} centered />
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                     {section.items.map((item, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-primary-100 transition-all duration-500 group">
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
            <Section key={idx} className="bg-slate-50 overflow-hidden">
               <Container>
                  <div className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                     <div className="lg:w-1/2">
                        <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark mb-8 leading-tight">{section.title}</h2>
                        <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed mb-10 border-l-4 border-primary-500 pl-8">{section.text}</p>
                        <Link to="/contact" className="inline-flex items-center gap-4 text-primary-600 font-bold text-lg hover:gap-6 transition-all uppercase tracking-widest">
                           Book a Consultation <ArrowRight size={24} />
                        </Link>
                     </div>
                     <div className="lg:w-1/2">
                        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                           <img src={section.image} alt={section.title} className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" />
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
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 mb-4 block">Help Center</span>
                    <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark mb-6">Frequently Asked <span className="text-primary-600 normal">Questions.</span></h2>
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

      {/* DEFAULT CTA IF NOT ENOUGH SECTIONS */}
      {content.sections.length < 5 && (
        <Section className="bg-brand-dark text-white">
           <Container className="text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Need more information?</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">Our patient coordinators are available 24/7 to help you with any queries regarding our facilities and services.</p>
              <div className="flex justify-center gap-6">
                 <Link to="/contact" className="px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-base shadow-xl">Contact Help Desk</Link>
              </div>
           </Container>
        </Section>
      )}
    </div>
  );
};

export default GenericPage;
