import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Bed, Thermometer, UserCheck, Heart, ShieldCheck, CheckCircle2, ArrowRight, Clock, Phone, Calendar, Zap, Microscope, Award } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import api from '../../services/api';
import { ASSETS } from '../../utils/imageAssets';
import { siteConfig } from '../../config/siteConfig';
import ParallaxImage from '../../components/common/ParallaxImage';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';

const IcuPage = () => {
    const [icuUnits, setIcuUnits] = useState([]);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);
    const navigate = useNavigate();
    
    // Framer motion scroll progress
    const { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const icuRes = await api.get('/icu');
                setIcuUnits(icuRes.data);
            } catch (error) {
                console.error("Error fetching ICU data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleUnitClick = (unit) => {
        navigate(`/infrastructure/icu/${unit.slug}`);
    };

    return (
        <div 
            ref={containerRef} 
            className="bg-white min-h-screen font-sans overflow-hidden relative"
        >
            <Helmet>
                <title>Smart ICU Hub | Umang Superspeciality Hospital</title>
                <meta name="description" content="Explore our high-tech critical care ecosystem with specialized ICU, SICU, and CCU units featuring AI-driven monitoring." />
            </Helmet>

            {/* 1. CINEMATIC HERO */}
            <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-brand-dark">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <ParallaxImage 
                        src={ASSETS.SVC_ICU_ADVANCE_CARE} 
                        alt="ICU Facility" 
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
                        offset={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </motion.div>
                
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <div className="flex items-center justify-center gap-3 mb-6">
                           <span className="w-12 h-[2px] bg-primary-500" />
                           <span className="text-primary-400 font-black uppercase tracking-[0.4em] text-[11px]">Elite Critical Care</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-5xl font-serif font-bold text-white mb-6 tracking-tighter leading-[1.1]">
                            Smart ICU <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-200 to-primary-400 normal">Hub.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-100/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                            Advanced life support, AI-driven vigilance, and a multidisciplinary team dedicated to clinical excellence in every critical second.
                        </p>
                        <div className="flex flex-wrap justify-center gap-5">
                           <a href="tel:+918929733551" className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-[12px] uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl hover:scale-105 active:scale-95">
                              Emergency Helpline
                           </a>
                           <Link to="/contact" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-[12px] uppercase tracking-widest hover:bg-white/10 transition-all">
                              Contact Specialist
                           </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. PREMIUM STATS OVERLAY */}
            <div className="bg-[#030712] py-10 md:py-12 text-white relative overflow-hidden border-b border-white/5">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
                 <Container className="relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
                       {[
                          { label: 'Critical Beds', value: siteConfig.stats.icuBedsMarketing, icon: Bed },
                          { label: 'Life Support', value: '100%', icon: Heart },
                          { label: 'Response', value: '< 1 Min', icon: Activity },
                          { label: 'Uptime', value: '24/7', icon: Clock }
                       ].map((stat, i) => (
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
            </div>

            {/* 3. PRECISION CRITICAL CARE */}
            <Section className="bg-white overflow-hidden">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-8">
                               <span className="w-10 h-[1px] bg-primary-500" />
                               <span className="text-primary-600 font-black text-[10px] lg:text-[11px] uppercase tracking-[0.3em]">Clinical Ecosystem</span>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight tracking-tight">Vigilance in <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-600 normal">Every Vitals.</span></h2>
                            <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed mb-12 border-l-4 border-primary-500 pl-8">
                                Our ICU environment is engineered for the highest level of patient safety, integrating modular negative-pressure isolation and invasive hemodynamic monitoring.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 mb-16">
                                {[
                                    "AI-Driven Alerts",
                                    "Modular Isolation",
                                    "Bedside Dialysis",
                                    "Real-time PACS Integration"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4 group/item">
                                       <div className="w-2.5 h-2.5 rounded-full bg-primary-500 group-hover/item:scale-150 transition-transform" />
                                       <span className="font-bold text-slate-700 text-sm lg:text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-10">
                               <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shadow-sm">
                                     <CheckCircle2 size={24} />
                                  </div>
                                  <div>
                                     <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Ratio</p>
                                     <p className="font-bold text-slate-700">1:1 Nursing care</p>
                                  </div>
                               </div>
                               <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                                     <ShieldCheck size={24} />
                                  </div>
                                  <div>
                                     <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Quality</p>
                                     <p className="font-bold text-slate-700">NABH Gold Hub</p>
                                  </div>
                               </div>
                            </div>
                        </motion.div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute inset-0 bg-primary-600/5 rounded-[4rem] rotate-3 -z-10" />
                            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[550px] border-[12px] border-white group">
                               <img src={ASSETS.SVC_ICU_ADVANCE} alt="Advance ICU" className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110" />
                               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 4. SMART MONITORING TECH HUB */}
            <Section className="bg-[#030712] text-white relative overflow-hidden py-16 md:py-20">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none" />
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
                       <div className="lg:col-span-7 flex flex-col">
                          <div className="flex items-center gap-4 mb-8">
                             <span className="text-primary-400 font-black text-[11px] uppercase tracking-[0.4em]">Technology Stack</span>
                             <div className="h-px flex-1 bg-gradient-to-r from-primary-500/30 to-transparent" />
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-10 leading-[1.1]">Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400 normal">Care.</span></h2>
                          
                          <div className="grid sm:grid-cols-2 gap-5 flex-grow">
                             {[
                                { title: 'AI Predictive Vigilance', desc: 'Pre-emptive vitals monitoring with automated alerts.' },
                                { title: 'Adaptive Ventilation', desc: 'Lung-protective ventilation modes for all age groups.' },
                                { title: 'Digital Health Records', desc: 'Instant paperless data syncing with physician tablets.' },
                                { title: 'Smart Asset Tracking', desc: 'Real-time equipment availability and calibration logs.' }
                             ].map((item, i) => (
                                <div key={i} className="p-7 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-primary-500/30 transition-all duration-500 group flex flex-col h-full">
                                   <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors">
                                      <Activity size={18} className="text-primary-400 group-hover:text-white" />
                                   </div>
                                   <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                   <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                             ))}
                          </div>
                       </div>
                       
                       <div className="lg:col-span-5 flex">
                          <div className="bg-gradient-to-br from-primary-600 to-blue-700 p-10 lg:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group flex flex-col justify-center w-full">
                             <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-125" />
                             <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">Clinical Vanguard</h3>
                             <p className="text-blue-50 text-lg mb-10 opacity-95 leading-relaxed font-light">Every Smart ICU bed is linked to a centralized clinical command center, allowing senior intensivists to intervene with zero latency.</p>
                             <div className="space-y-4">
                                {[ "99.9% Tech Uptime", "Bank-Grade Encryption", "Dual Power Redundancy" ].map((tag, i) => (
                                   <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary-200">
                                      <ShieldCheck className="w-4 h-4" /> {tag}
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                </Container>
            </Section>

            {/* 5. SPECIALIZED ICU WINGS */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary-50 rounded-full mb-6">
                           <Microscope className="w-4 h-4 text-primary-600" />
                           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-700">Specialized Infrastructure</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-6">High-Tech <span className="text-primary-600 normal">Clinical Wings.</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">Explore our specialized intensive care units designed for diverse medical and surgical needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {loading ? (
                            [...Array(3)].map((_, i) => (
                                <div key={i} className="h-80 bg-slate-100 rounded-[3rem] animate-pulse" />
                            ))
                        ) : (
                            icuUnits.map((unit, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => handleUnitClick(unit)}
                                    className="group relative bg-slate-50 rounded-[3rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-primary-100 transition-all duration-500 cursor-pointer overflow-hidden active:scale-95"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[5rem] -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                                    
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-10 shadow-sm border border-slate-100 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 relative z-10">
                                        <Zap size={32} />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-primary-600 transition-colors relative z-10">{unit.name}</h3>
                                    <p className="text-gray-500 leading-relaxed font-light mb-8 relative z-10">Dedicated {unit.name.toLowerCase()} facility with specialized medical protocols and senior consultant oversight.</p>
                                    
                                    <div className="flex items-center justify-between pt-8 border-t border-slate-200/60 relative z-10">
                                        <div className="flex items-center gap-2">
                                            <span className="text-3xl font-serif font-bold text-primary-600">{unit.beds}</span>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Elite Beds</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all duration-500">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </Container>
            </Section>

            {/* 6. HYGIENE & STERILIZATION HUB */}
            <Section className="bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                <Container>
                    <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                        <div className="lg:w-1/2">
                            <span className="section-subtitle">Clinical Bio-Safety</span>
                            <h2 className="section-title text-3xl lg:text-4xl">Zero-Infection <br /><span className="text-primary-600 normal">Architecture.</span></h2>
                            <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed mb-10 border-l-4 border-primary-500 pl-8">
                                We maintain a "Clean Room" standard in our ICU suites, featuring HEPA-filtered air with 25+ positive pressure changes per hour to eliminate cross-contamination risks.
                            </p>
                            <div className="grid gap-8">
                                {[
                                    { title: "Negative Pressure Suits", desc: "Specialized isolation for contagious airborne conditions." },
                                    { title: "Triple-Buffer Entry", desc: "Rigorous sterilization sequence for all staff and family." },
                                    { title: "Sterile RO Water", desc: "Centralized treatment for medical and dialysis equipment." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark mb-1 text-xl">{item.title}</h4>
                                            <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[550px] border-[12px] border-white group">
                                <img src={ASSETS.SVC_LAB_PROCESS} alt="Sterilization" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-brand-dark/10" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 7. EXPERT MEDICAL TEAM */}
            <Section className="bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-8">
                               <span className="w-10 h-[1px] bg-primary-500" />
                               <span className="text-primary-600 font-black text-[10px] lg:text-[11px] uppercase tracking-[0.3em]">Specialist Faculty</span>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">The ICU <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 normal">Vanguard.</span></h2>
                            <p className="text-gray-600 text-xl font-light leading-relaxed mb-12">
                                Led by senior intensivists with global training, our critical care team is prepared to intervene in seconds, supported by registered nurses and physiotherapists.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="p-8 bg-[#030712] rounded-[2.5rem] text-white group hover:bg-primary-600 transition-colors duration-500">
                                    <p className="text-5xl font-serif font-bold text-primary-400 group-hover:text-white mb-3">24/7</p>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-primary-100">On-Site Intensivist</p>
                                </div>
                                <div className="p-8 bg-primary-50 rounded-[2.5rem] border border-primary-100 group hover:bg-primary-600 transition-colors duration-500">
                                    <p className="text-5xl font-serif font-bold text-primary-600 group-hover:text-white mb-3">1:1</p>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-400 group-hover:text-primary-100">Nurse-Patient Ratio</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-20 border border-slate-100 relative overflow-hidden group">
                                <Activity size={150} className="absolute -bottom-10 -right-10 text-primary-500/5 transition-transform duration-1000 group-hover:scale-125" />
                                <div className="flex items-center gap-4 mb-10">
                                   <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-600">
                                      <Zap size={24} />
                                   </div>
                                   <h3 className="text-3xl font-serif font-bold text-brand-dark">Rapid Response</h3>
                                </div>
                                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">Our specialized RRT is on standby to stabilize patients in any part of the hospital, preventing clinical deterioration before ICU admission is required.</p>
                                <div className="space-y-5">
                                    {["ACLS & BLS Certified Staff", "Emergency Code Blue Protocols", "Mobile Life-Support Kits"].map((task, i) => (
                                        <div key={i} className="flex items-center gap-4 font-bold text-slate-700">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" /> {task}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 8. FAMILY CONNECT PROGRAM */}
            <Section className="bg-[#030712] text-white relative overflow-hidden py-20 md:py-28">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <Container>
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-400 mb-6 block">Compassionate Support</span>
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-8 leading-tight">Bridging the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-primary-400 normal">Clinical Gap.</span></h2>
                        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-3xl mx-auto">
                            We ensure families are informed and connected with transparent medical data and regular clinical briefings through our exclusive Family Connect program.
                        </p>
                        
                        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 text-left">
                            {[
                                { title: "Clinical Briefings", desc: "Scheduled daily updates from the primary intensivist.", icon: Calendar },
                                { title: "Virtual Visit Hub", desc: "Secure 4K video calls for families to interact remotely.", icon: Phone },
                                { title: "Grief Counseling", desc: "Emotional guidance and support for patient relatives.", icon: Heart }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 hover:border-primary-500/30 transition-all duration-500 group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                                       <item.icon size={22} className="text-primary-400 group-hover:text-white" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-3 text-primary-400">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 9. ICU FAQ HUB */}
            <Section className="bg-slate-50 relative overflow-hidden py-20 md:py-28">
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[120px] opacity-30 -mr-48 -mt-48" />
               <Container>
                  <div className="text-center mb-20 relative z-10">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 mb-4 block">Help Center</span>
                     <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark">Clinical <span className="text-primary-600 normal">Queries.</span></h2>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
                     {[
                        { q: "What are the visiting hours for ICU?", a: "To minimize infection risk, ICU visits are strictly restricted to 4:00 PM - 5:00 PM for one immediate family member at a time." },
                        { q: "How often are medical updates provided?", a: "The treating intensivist provides a detailed medical update once daily during standard clinical briefing hours (usually 11 AM - 1 PM)." },
                        { q: "Can I bring home food into the ICU?", a: "Outside food, flowers, and personal items are strictly prohibited to maintain the sterile environment. Only clinical essentials are allowed." },
                        { q: "What is 'Barrier Nursing'?", a: "It's a specialized infection-control protocol where staff use dedicated PPE and equipment for a single patient to prevent cross-infection." },
                        { q: "Is 24/7 nursing available?", a: "Yes, every critical patient is assigned a dedicated nursing professional providing 1:1 care round-the-clock." },
                        { q: "Do you have isolation suites?", a: "Absolutely. We have specialized negative-pressure isolation suites for contagious respiratory and infectious conditions." }
                     ].map((faq, i) => (
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

            {/* 10. CLINICAL MILESTONES (NEW SECTION) */}
            <Section className="bg-[#030712] text-white py-20 lg:py-28">
               <Container>
                  <div className="flex flex-col lg:flex-row gap-20 items-center">
                     <div className="lg:w-[60%] order-2 lg:order-1">
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-12 leading-tight">Elite Critical <br /><span className="text-primary-400 normal">Benchmarks.</span></h2>
                        <div className="space-y-12">
                           {[
                              { year: "2018", title: "Smart ICU Inauguration", desc: "Equipped with the region's first centralized hemodynamic monitoring network." },
                              { year: "2021", title: "COVID-19 Excellence", desc: "Successfully treated 1000+ critical cases with zero in-facility cross-infection." },
                              { year: "2024", title: "AI Integration", desc: "Launched predictive vitals monitoring for pre-emptive life-saving interventions." }
                           ].map((m, i) => (
                              <div key={i} className="flex gap-10 group">
                                 <div className="flex flex-col items-center">
                                    <span className="text-3xl lg:text-4xl font-serif font-bold text-primary-600 opacity-40 group-hover:opacity-100 transition-opacity shrink-0">{m.year}</span>
                                    <div className="w-[1px] h-full bg-primary-900 mt-4 group-last:hidden" />
                                 </div>
                                 <div className="pb-8">
                                    <h4 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary-400 transition-colors">{m.title}</h4>
                                    <p className="text-slate-400 text-lg leading-relaxed font-light">{m.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="lg:w-[40%] order-1 lg:order-2">
                        <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                           <img src={ASSETS.ABOUT_NABH} alt="NABH Gold" className="w-full h-full object-cover opacity-90 scale-105" />
                           <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                        </div>
                     </div>
                  </div>
               </Container>
            </Section>

            {/* 11. CRITICAL CARE CTA */}
            <Section className="bg-brand-dark text-white relative overflow-hidden py-20 lg:py-24">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[150px] pointer-events-none" />
                <Container className="text-center relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Vigilance <br /><span className="text-primary-400 normal">24/7.</span></h2>
                    <p className="text-slate-400 text-base lg:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">Our clinical command center is available round-the-clock for critical emergencies and specialist consultation.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
                        <a href="tel:+918929733551" className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-base hover:bg-red-700 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
                            <Phone size={20} className="group-hover:rotate-12 transition-transform" /> Emergency Hub
                        </a>
                        <Link to="/contact" className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
                            <Calendar size={20} /> Get Assistance
                        </Link>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default IcuPage;
