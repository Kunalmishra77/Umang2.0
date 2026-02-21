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
            <div key={idx} className="bg-primary-600 py-12 text-white relative overflow-hidden">
               <Container>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                     {section.data.map((stat, i) => (
                        <div key={i}>
                           <p className="text-3xl lg:text-4xl font-serif font-bold mb-1">{stat.value}</p>
                           <p className="text-[10px] font-black uppercase tracking-widest text-primary-100/70">{stat.label}</p>
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {section.items.map((item, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                           <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                              <ShieldCheck size={24} />
                           </div>
                           <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
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
            <Section key={idx} className="bg-slate-50 overflow-hidden">
               <Container>
                  <div className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                     <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">{section.title}</h2>
                        <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">{section.text}</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 text-primary-600 font-bold hover:gap-5 transition-all">
                           Book a Consultation <ArrowRight size={20} />
                        </Link>
                     </div>
                     <div className="lg:w-1/2">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                           <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                        </div>
                     </div>
                  </div>
               </Container>
            </Section>
          );
        }

        if (section.type === 'faq') {
          return (
            <Section key={idx} className="bg-white border-t border-gray-100">
               <Container className="max-w-4xl">
                  <SectionHeading title="Frequently Asked Questions" centered />
                  <div className="space-y-4">
                     {section.items.map((faq, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                           <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                              <HelpCircle size={20} className="text-primary-600" /> {faq.q}
                           </h4>
                           <p className="text-slate-600 pl-9 leading-relaxed">{faq.a}</p>
                        </div>
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
