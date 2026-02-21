import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Brain, Bone, Activity, Stethoscope, Microscope, 
  Shield, Wind, Zap, Scissors, Search, 
  Phone, MessageSquare, AlertTriangle, Users, Award, 
  CheckCircle2, Clock, HelpCircle, ChevronRight, ArrowRight
} from 'lucide-react';
import SeoHead from '../../components/common/SeoHead';
import { siteConfig } from '../../config/siteConfig';
import { ASSETS } from '../../utils/imageAssets';
import { specialitiesData } from '../../data/specialitiesData';
import { Container, Section, SectionHeading, Card, Badge } from '../../components/ui/Layout';
import { VARIANTS } from '../../design/system/index';

const CATEGORIES = [
  { id: 'all', name: 'All Specialties' },
  { id: 'surgical', name: 'Surgical' },
  { id: 'medical', name: 'Medical' },
  { id: 'diagnostics', name: 'Diagnostics' }
];

const SYMPTOM_NAV = [
  { label: 'Chest pain / Heart', id: 'cardiac', icon: Heart },
  { label: 'Stroke / Spine', id: 'neuro', icon: Brain },
  { label: 'Fracture / Joint', id: 'ortho', icon: Bone },
  { label: 'Pregnancy / Women', id: 'gynecology', icon: Users }
];

const Specialities = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (location.state?.category) {
      setSearchQuery(location.state.category);
    }
  }, [location.state]);

  const allSpecialties = useMemo(() => {
    return Object.entries(specialitiesData).map(([id, data]) => ({
      id,
      name: data.title.split(' (')[0],
      bullets: data.bullets,
      img: data.img,
      path: `/specialities/${id}`,
      type: data.category || 'medical',
      icon: id === 'cardiac' ? Heart : id === 'neuro' ? Brain : id === 'ortho' ? Bone : id === 'gastro' ? Activity : id === 'pulmonology' ? Wind : id === 'urology' ? Zap : id === 'surgery' ? Scissors : id === 'oncology' ? Shield : id === 'internal' ? Stethoscope : id === 'nephrology' ? Activity : id === 'pain-management' ? Activity : id === 'gynecology' ? Users : Activity
    }));
  }, []);

  const filteredSpecialties = useMemo(() => {
    return allSpecialties.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'all' || s.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [allSpecialties, searchQuery, activeFilter]);

  return (
    <div className="bg-white min-h-screen">
      <SeoHead 
        title="Clinical Specialities" 
        description="Explore 52+ specialized departments including Cardiology, Neurology, and Orthopaedics at Umang Hospital Gurugram."
        canonical="/specialities"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ASSETS.OT} alt="OT" className="w-full h-full object-cover opacity-20" />
          <div className="hero-overlay-radial" />
        </div>
        <Container className="relative z-20">
          <motion.div variants={VARIANTS.fadeIn} initial="hidden" animate="visible">
            <h1 className="text-white mb-6">Centres of <span className="text-primary-400 italic">Excellence.</span></h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              Serving Gurugram & NCR with 52+ specialized departments and advanced clinical protocols.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* SECTION: QUICK STATS */}
      <div className="bg-primary-600 py-8 lg:py-10 border-y border-white/5">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { label: "Procedures / Year", value: "15,000+" },
              { label: "Specialists", value: "100+" },
              { label: "Success Rate", value: "99.2%" },
              { label: "Years Experience", value: "15+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-xl lg:text-3xl font-serif font-bold tracking-tight">{stat.value}</p>
                <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-primary-100/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* SECTION: TREATMENT APPROACH */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <span className="section-subtitle">The Umang Way</span>
              <h2 className="section-title">Evidence-Based <br /><span className="text-primary-600">Clinical Care.</span></h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                Our clinical departments follow rigorous international protocols. Every treatment plan is discussed in multidisciplinary boards to ensure comprehensive healing.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "Collaborative Diagnosis", desc: "Specialists from different departments work together for complex cases." },
                  { title: "Personalized Pathways", desc: "Every patient receives a unique clinical roadmap tailored to their recovery." },
                  { title: "Minimal Intervention", desc: "We prioritize non-invasive and minimally invasive techniques first." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-1.5 h-12 bg-primary-100 rounded-full group-hover:bg-primary-500 transition-colors" />
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
                <img src={ASSETS.ABOUT_BEACON} alt="Approach" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-dark/20" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: CENTRES OF EXCELLENCE (NEW) */}
      <Section className="bg-white overflow-hidden">
        <Container>
          <SectionHeading eyebrow="Department Showcase" title="Our Specialized Pillars" centered />
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "Cardiac Sciences", desc: "Top-tier interventional cardiology and cardiothoracic surgery with a 99% success rate in primary PCI.", img: ASSETS.CARDIAC },
              { title: "Neuro Sciences", desc: "Region\'s leading stroke hub with advanced neuro-microscopy and comprehensive rehabilitation.", img: ASSETS.NEURO }
            ].map((item, i) => (
              <div key={i} className="group relative rounded-[3rem] overflow-hidden h-[400px] shadow-xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h4 className="text-3xl font-serif font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-slate-200 text-lg mb-6 line-clamp-2">{item.desc}</p>
                  <Link to={`/specialities/${item.title.split(' ')[0].toLowerCase()}`} className="inline-flex items-center gap-2 text-primary-400 font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                    Explore Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION: CLINICAL MILESTONES (NEW) */}
      <Section className="bg-primary-950 text-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-8">Decades of <br /><span className="text-primary-400">Clinical Milestones.</span></h2>
              <div className="space-y-8">
                {[
                  { year: "2010", title: "First Robotic OT", desc: "Inaugurated the region's first fully integrated modular OT suite." },
                  { year: "2015", title: "10,000+ Cardiac Procedures", desc: "Crossed a significant milestone in minimally invasive heart surgeries." },
                  { year: "2022", title: "Global Accreditation", desc: "Achieved elite national quality benchmarks for specialty care." }
                ].map((m, i) => (
                  <div key={i} className="flex gap-8">
                    <span className="text-4xl font-serif font-bold text-primary-600 opacity-50 shrink-0">{m.year}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{m.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <img src={ASSETS.ABOUT_NABH} alt="Milestones" className="rounded-[4rem] shadow-2xl opacity-80" />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: PATIENT JOURNEY (NEW) */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeading eyebrow="Workflow" title="Your Path to Recovery" centered />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Direct meeting with a board-certified specialist." },
              { step: "02", title: "Diagnosis", desc: "High-precision diagnostic and imaging services." },
              { step: "03", title: "Treatment", desc: "Evidence-based clinical protocols and care." },
              { step: "04", title: "Recovery", desc: "Personalized post-op care and rehabilitation." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-all text-xl font-black text-primary-600">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Symptom Nav */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeading title="Match symptoms to specialist care" eyebrow="Symptom Navigator" centered />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {SYMPTOM_NAV.map((item) => (
              <Link key={item.id} to={`/specialities/${item.id}`}>
                <Card className="text-center group hover:bg-white hover:shadow-hover p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-sm font-bold text-brand-dark">{item.label}</h4>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="!bg-red-50 !border-red-100 !p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white shrink-0 animate-pulse">
                <AlertTriangle size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-red-900 mb-2 font-bold">Life-threatening symptoms?</h3>
                <p className="text-red-700 font-medium leading-relaxed">Severe chest pain, stroke signs, or breathing difficulty? Call Helpline immediately.</p>
              </div>
            </div>
            <a href={`tel:${siteConfig.contacts.emergency}`} className="btn-primary !bg-red-600 hover:!bg-red-700 !shadow-none py-4 px-10 relative z-10 text-sm font-bold">
              Call Emergency: {siteConfig.contacts.emergency}
            </a>
          </Card>
        </Container>
      </Section>

      {/* Search & Filter */}
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 border-b border-slate-100 pb-10">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search departments..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 outline-none font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeFilter === cat.id 
                      ? 'bg-brand-dark text-white shadow-soft scale-105' 
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-brand-dark'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredSpecialties.map((s) => (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Link to={s.path} className="block h-full group">
                    <Card className="h-full !p-0 overflow-hidden flex flex-col group-hover:border-primary-200 transition-all duration-500 shadow-soft hover:shadow-premium">
                      <div className="h-48 overflow-hidden relative">
                        <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 backdrop-blur-sm border-none">{s.type}</Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                           <s.icon size={24} className="text-primary-400" />
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <h4 className="mb-4 group-hover:text-primary-600 transition-colors font-bold text-xl">{s.name}</h4>
                        <ul className="space-y-3 mb-8 flex-1">
                          {s.bullets?.slice(0, 3).map((bullet, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                              <CheckCircle2 size={14} className="text-primary-500 shrink-0" /> {bullet}
                            </li>
                          ))}
                        </ul>
                        <div className="text-[10px] font-bold text-primary-600 uppercase tracking-widest flex items-center gap-2 mt-auto">
                          Explore Department <ArrowRight size={12} />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </Section>

      {/* SECTION: GENERAL FAQ */}
      <Section className="bg-gray-50 border-y border-gray-100">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-subtitle">Common Queries</span>
            <h2 className="section-title">Speciality FAQs</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How do I choose the right specialist?", a: "You can use our Symptom Navigator or contact our primary desk at +91 89297 33550 for guidance." },
              { q: "Are all specialists available 24/7?", a: "While OPD hours vary, a senior specialist from each core department is always on call for emergency cases." },
              { q: "Do you offer online video consultations?", a: "Yes, most of our senior consultants are available for telemedicine sessions. Look for the 'Video' icon on their profile." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-left group hover:border-primary-200 transition-all">
                <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                  <HelpCircle size={20} className="text-primary-600 shrink-0" /> {faq.q}
                </h4>
                <p className="text-slate-600 pl-9 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION: CONSULTATION CTA */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to consult <br /><span className="text-primary-400">a specialist?</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">Book your physical or digital consultation today and take the first step towards expert recovery.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/doctors" className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-base shadow-xl hover:bg-primary-500 transition-all flex items-center justify-center gap-3">
                Find a Doctor <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                Inquire Now <MessageSquare size={20} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Specialities;
