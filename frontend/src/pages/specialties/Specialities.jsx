import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Brain, Bone, Activity, Stethoscope, Microscope, 
  ShieldCheck, Wind, Zap, Scissors, Search, 
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
      icon: id === 'cardiac' ? Heart : id === 'neuro' ? Brain : id === 'ortho' ? Bone : id === 'gastro' ? Activity : id === 'pulmonology' ? Wind : id === 'urology' ? Zap : id === 'surgery' ? Scissors : id === 'oncology' ? ShieldCheck : id === 'internal' ? Stethoscope : id === 'nephrology' ? Activity : id === 'pain-management' ? Activity : id === 'gynecology' ? Users : Activity
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
    </div>
  );
};

export default Specialities;
