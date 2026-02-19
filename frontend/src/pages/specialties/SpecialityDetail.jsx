import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, HelpCircle, ArrowRight, ShieldCheck, Activity, Phone, Calendar, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { specialitiesData } from '../../data/specialitiesData';
import { doctors } from '../../utils/doctorsData';
import { Container, Section, SectionHeading, Card, Badge } from '../../components/ui/Layout';
import { siteConfig } from '../../config/siteConfig';
import CTAButton from '../../design/system/CTAButton';
import { VARIANTS } from '../../design/system/index';

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
      <Helmet>
        <title>{data.title} | {siteConfig.shortName}</title>
        <meta name="description" content={data.desc} />
      </Helmet>

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
                    <ShieldCheck className="text-primary-600" /> Key Procedures
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.procedures.map((item, i) => (
                      <Card key={i} className="flex items-start gap-4 group hover:border-primary-100">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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

              {/* Technology */}
              {data.tech && (
                <div>
                  <h3 className="mb-8 flex items-center gap-3 text-brand-dark">
                    <Activity className="text-primary-600" /> Advanced Technology
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.tech.map((item, i) => (
                      <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-soft transition-all">
                        <h4 className="text-lg font-bold text-brand-dark mb-3">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Doctors */}
              {deptDoctors.length > 0 && (
                <div className="pt-8">
                  <SectionHeading title="Department Specialists" />
                  <div className="grid sm:grid-cols-3 gap-6">
                    {deptDoctors.map(doc => (
                      <Link key={doc.id} to={`/doctor/${doc.id}`}>
                        <Card className="text-center group p-6">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-white shadow-soft">
                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                          </div>
                          <h5 className="text-sm font-bold mb-1 group-hover:text-primary-600 transition-colors">{doc.name}</h5>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{doc.role}</div>
                        </Card>
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
                    <h3 className="text-red-900 mb-6 italic font-bold">When to seek urgent care?</h3>
                    <p className="text-red-700 text-lg font-medium mb-8 max-w-xl leading-relaxed">{data.emergencyCallout}</p>
                    <CTAButton href={`tel:${siteConfig.contacts.emergency}`} variant="danger" size="lg" className="px-10">
                      Call Helpline: {siteConfig.contacts.emergency}
                    </CTAButton>
                  </div>
                </Card>
              )}

              {/* FAQ */}
              {data.faq && (
                <div className="pt-8">
                  <SectionHeading title="Frequently Asked Questions" />
                  <div className="space-y-4">
                    {data.faq.map((item, i) => (
                      <div key={i} className="border border-slate-100 rounded-2xl p-8 bg-slate-50 text-left">
                        <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                          <HelpCircle size={20} className="text-primary-600 shrink-0" /> {item.q}
                        </h4>
                        <p className="text-slate-600 pl-9 text-base leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <Card className="!bg-brand-dark !text-white !p-10 relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-[60px] -mr-16 -mt-16" />
                  <h3 className="text-white mb-6 italic leading-tight">Book <br /><span className="text-primary-400">Appointment.</span></h3>
                  <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light">
                    Consult with our senior {data.title.split(' ')[0]} specialists for personalized treatment planning.
                  </p>
                  <div className="space-y-4">
                    <CTAButton to="/doctors" size="md" className="w-full">Book Appointment</CTAButton>
                    <a href={`tel:${siteConfig.contacts.main}`} className="btn-secondary !bg-white/5 !text-white !border-white/10 w-full py-4 text-xs">
                      {siteConfig.contacts.main}
                    </a>
                  </div>
                </Card>

                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-left">
                  <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-200 pb-4">Clinical Directory</h4>
                  <div className="space-y-2">
                    {sidebarLinks.map((link) => (
                      <Link 
                        key={link.id} 
                        to={`/specialities/${link.id}`}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all group ${id === link.id ? 'bg-white shadow-soft text-primary-600' : 'text-slate-500 hover:text-primary-600 hover:bg-white'}`}
                      >
                        <span className="font-bold text-xs uppercase tracking-widest">{link.name}</span>
                        <ChevronRight size={14} className={id === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'} />
                      </Link>
                    ))}
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

export default SpecialityDetail;
