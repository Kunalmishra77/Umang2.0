import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, HelpCircle, ArrowRight, Shield, Activity, Phone, Calendar, AlertCircle, Quote, Heart, Zap } from 'lucide-react';
import { specialitiesData } from '../../data/specialitiesData';
import { doctors } from '../../utils/doctorsData';
import { Container, Section, SectionHeading, Card, Badge } from '../../components/ui/Layout';
import { siteConfig } from '../../config/siteConfig';
import CTAButton from '../../design/system/CTAButton';
import { VARIANTS } from '../../design/system/index';
import SeoHead from '../../components/common/SeoHead';

const SpecialityDetail = () => {
  const { id } = useParams();
  const data = specialitiesData[id];

  const deptDoctors = useMemo(() => {
    return doctors.filter(doc => doc.specialtyId === id);
  }, [id]);

  if (!data) {
    return <Navigate to="/specialities" replace />;
  }

  const sidebarLinks = [
    { name: "Cardiac Sciences", id: "cardiac" },
    { name: "Neuro Sciences", id: "neuro" },
    { name: "Orthopaedics", id: "ortho" },
    { name: "Gastroenterology", id: "gastro" },
    { name: "Pulmonology", id: "pulmonology" },
    { name: "General Surgery", id: "surgery" },
    { name: "Urology", id: "urology" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SeoHead 
        title={data.title} 
        description={data.desc}
        canonical={`/specialities/${id}`}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.img} alt={data.title} className="w-full h-full object-cover opacity-30" />
          <div className="hero-overlay-radial" />
        </div>
        <Container className="relative z-20">
          <motion.div variants={VARIANTS.fadeIn} initial="hidden" animate="visible" className="max-w-3xl text-left">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/specialities" className="text-primary-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Specialities</Link>
              <ChevronRight size={14} className="text-slate-500" />
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{data.title.split(' (')[0]}</span>
            </div>
            <h1 className="text-white mb-6">{data.title}</h1>
            <p className="text-lg text-slate-200 leading-relaxed">{data.subtitle || data.desc.substring(0, 150) + '...'}</p>
          </motion.div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              {/* Overview */}
              <div>
                <SectionHeading title="Department Overview" description={data.desc} />
              </div>

              {/* Procedures */}
              {data.procedures && (
                <div>
                  <h3 className="mb-8 flex items-center gap-3 text-brand-dark">
                    <Shield className="text-primary-600" /> Key Procedures
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.procedures.map((item, i) => (
                      <Card key={i} className="flex items-start gap-4 group hover:border-primary-100">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold mb-1">{item}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">Advanced clinical protocols ensuring superior patient outcomes.</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: DEPARTMENT STATISTICS */}
              {data.statistics && (
                <div className="bg-blue-600 rounded-[2rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-xl shadow-blue-900/10">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[60px] -mr-24 -mt-24" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
                    {data.statistics.map((stat, i) => (
                      <div key={i} className="space-y-2">
                        <p className="text-4xl lg:text-5xl font-serif font-bold tracking-tight">{stat.value}</p>
                        <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-blue-100/80 leading-relaxed">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: TREATMENT APPROACH */}
              {data.approach && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-serif font-bold text-brand-dark">Our Treatment Approach</h3>
                  <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed border-l-4 border-blue-500 pl-8 normal">
                    "{data.approach}"
                  </p>
                </div>
              )}

              {/* Technology */}
              {data.tech && (
                <div>
                  <h3 className="mb-8 flex items-center gap-3 text-brand-dark font-serif font-bold text-3xl">
                    <Activity className="text-blue-600 w-8 h-8" /> Advanced Technology
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {data.tech.map((item, i) => (
                      <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                           <Zap size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium flex-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: SUCCESS STORIES */}
              {data.successStories && (
                <div className="pt-8">
                  <h3 className="text-3xl font-serif font-bold text-brand-dark mb-10">Patient Success Stories</h3>
                  <div className="grid gap-6">
                    {data.successStories.map((story, i) => (
                      <div key={i} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:bg-white hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                          <Quote size={24} className="opacity-50 group-hover:opacity-100" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-brand-dark mb-2">{story.patient} • <span className="text-primary-600 font-medium text-base">{story.condition}</span></h4>
                          <p className="text-gray-600 leading-relaxed normal">"{story.story}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: RECOVERY PATH */}
              {data.recovery && (
                <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-cyan-400" />
                  <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                    <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 border border-primary-500/30">
                      <Heart className="w-10 h-10 text-primary-400 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">Journey to Recovery</h3>
                      <p className="text-gray-400 text-lg font-light leading-relaxed">{data.recovery}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Doctors */}
              {deptDoctors.length > 0 && (
                <div className="pt-8">
                  <SectionHeading title="Department Specialists" />
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deptDoctors.map(doc => (
                      <Link key={doc.id} to={`/doctor/${doc.id}`}>
                        <Card className="text-center group p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem] border-slate-100">
                          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                          </div>
                          <h5 className="text-lg lg:text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{doc.name}</h5>
                          <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{doc.role}</div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: RELATED SERVICES */}
              {data.relatedServices && (
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-brand-dark mb-8">Related Care & Services</h3>
                  <div className="flex flex-wrap gap-3">
                    {data.relatedServices.map((service, i) => (
                      <Link key={i} to="/services" className="px-6 py-3 rounded-full bg-gray-50 border border-gray-100 text-gray-600 font-bold text-xs uppercase tracking-widest hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all">
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Emergency */}
              {data.emergencyCallout && (
                <Card className="!bg-red-50 !border-red-100 !p-12 relative overflow-hidden">
                  <div className="relative z-10 text-left">
                    <Badge className="!bg-red-600 !text-white !border-none mb-6 animate-pulse px-4 py-2">
                      <AlertCircle size={14} className="mr-2" /> Emergency Guidance
                    </Badge>
                    <h3 className="text-red-900 mb-6 normal font-bold">When to seek urgent care?</h3>
                    <p className="text-red-700 text-lg font-medium mb-8 max-w-xl leading-relaxed">{data.emergencyCallout}</p>
                    <CTAButton href={`tel:${siteConfig.contacts.emergency}`} variant="danger" size="lg" className="px-10">
                      Call Helpline: {siteConfig.contacts.emergency}
                    </CTAButton>
                  </div>
                </Card>
              )}

              {/* FAQ */}
              {data.faq && (
                <div className="pt-16 border-t border-slate-100">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-brand-dark mb-1">Frequently Asked Questions</h3>
                      <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Departmental Guidance</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    {data.faq.map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-600/5 transition-all duration-500"
                      >
                        <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-xl group-hover:text-primary-600 transition-colors">
                          <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs text-primary-600 border border-primary-100 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">Q</span>
                          {item.q}
                        </h4>
                        <div className="flex gap-4">
                          <div className="w-8 shrink-0 flex justify-center pt-1">
                            <div className="w-px h-full bg-slate-200 group-hover:bg-primary-200 transition-colors" />
                          </div>
                          <p className="text-slate-600 text-lg leading-relaxed font-light">{item.a}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[60px] -mr-16 -mt-16" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-900/20">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">Book an <br /><span className="text-blue-400 normal">Appointment.</span></h3>
                    <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light">
                      Consult with our senior {data.title.split(' ')[0]} specialists for personalized treatment planning and clinical advice.
                    </p>
                    
                    <div className="space-y-3">
                      <Link 
                        to="/doctors" 
                        className="flex items-center justify-center w-full h-14 bg-blue-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
                      >
                        Find a Doctor
                      </Link>
                      
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Or call our helpline</p>
                        <a 
                          href={`tel:${siteConfig.contacts.main.replace(/\s/g, '')}`} 
                          className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-all">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="text-lg font-bold">{siteConfig.contacts.main}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Directory section removed as per request */}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default SpecialityDetail;
