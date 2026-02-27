import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
    Activity, Bed, Thermometer, UserCheck, ShieldCheck, 
    CheckCircle2, Clock, PhoneCall, Heart, Cpu, Info, Shield
} from 'lucide-react';
import api from '../../services/api';
import { ASSETS, getIcuImage } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';

const IcuUnitDetail = () => {
    const { slug } = useParams();
    const [unit, setUnit] = useState(null);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    useEffect(() => {
        const fetchUnit = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/icu-units/${slug}`);
                setUnit(response.data);
            } catch (error) {
                console.error("Error fetching ICU unit:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUnit();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-[60vh] bg-white">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
    );

    if (!unit) return (
        <div className="max-w-4xl mx-auto py-32 text-center px-4">
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Unit Not Found</h2>
            <Link to="/infrastructure/icu" className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-900 transition-all">Back to Critical Care</Link>
        </div>
    );

    return (
        <div ref={containerRef} className="bg-white min-h-screen font-sans overflow-hidden relative" style={{ position: 'relative' }}>
            <Helmet>
                <title>{unit.name} | Critical Care Excellence | Umang Hospital</title>
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <ParallaxImage 
                        src={getIcuImage(unit.slug)} 
                        alt={unit.name} 
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
                        offset={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </motion.div>
                
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                            <Activity className="w-4 h-4" /> Advanced Critical Care
                        </span>
                        <h1 className="text-4xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tighter leading-tight">
                            {unit.name}
                        </h1>
                        <p className="text-lg md:text-2xl text-primary-100/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                            {unit.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        <div className="lg:col-span-7">
                            <span className="section-subtitle">Clinical Overview</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-10">World-Class Monitoring & Healing</h2>
                            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12">
                                Our {unit.name} is a high-acuity environment where medical science meets compassionate vigilance. With a focus on patient safety and rapid stabilization, we employ multidisciplinary protocols to ensure the best possible outcomes for every patient in our care.
                            </p>

                            {/* UNIQUE FEATURES GRID */}
                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                {unit.details?.features?.map((feature, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary-100 transition-all duration-500"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-700 font-bold leading-snug">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* PROTOCOLS SECTION */}
                            <div className="bg-brand-dark rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32 group-hover:opacity-30 transition-opacity duration-1000" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 flex items-center gap-4">
                                        <Shield className="w-8 h-8 text-primary-400" />
                                        Safety Protocols
                                    </h3>
                                    <p className="text-primary-100/80 text-lg leading-relaxed mb-8 normal">
                                        "{unit.details?.protocols}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white">
                                            <Heart className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Patient-First Ethics</p>
                                            <p className="text-xs text-primary-300 uppercase tracking-widest font-black">ISO 9001:2015 Certified</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SIDEBAR: TECH & QUICK FACTS */}
                        <div className="lg:col-span-5 space-y-10">
                            {/* TECHNOLOGY SECTION */}
                            <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100">
                                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-10 flex items-center gap-4">
                                    <Cpu className="w-8 h-8 text-primary-600" />
                                    Technology Suite
                                </h3>
                                <div className="space-y-8">
                                    {unit.details?.technology?.map((tech, idx) => (
                                        <div key={idx} className="group">
                                            <h4 className="font-bold text-brand-dark mb-2 group-hover:text-primary-600 transition-colors">{tech.title}</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">{tech.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* QUICK STATS CARD */}
                            <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 opacity-[0.03]">
                                    <Bed className="w-48 h-48 text-brand-dark" />
                                </div>
                                <h4 className="text-xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                                    <Info className="w-5 h-5 text-primary-500" /> Quick Metrics
                                </h4>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-medium uppercase tracking-widest text-[10px]">Bed Capacity</span>
                                        <span className="text-2xl font-serif font-bold text-primary-600">{unit.beds}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-medium uppercase tracking-widest text-[10px]">Nurse Ratio</span>
                                        <span className="text-xl font-bold text-brand-dark">1:1 Focused</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="text-gray-500 font-medium uppercase tracking-widest text-[10px]">Status</span>
                                        <span className="flex items-center gap-2 font-black text-green-600 text-xs uppercase tracking-widest">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Emergency Ready
                                        </span>
                                    </div>
                                </div>
                                <a href="tel:+918588072727" className="mt-10 flex items-center justify-center gap-3 w-full py-5 bg-brand-dark text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary-600 transition-all active:scale-95 shadow-xl">
                                    <PhoneCall className="w-4 h-4" /> Admission Desk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISITATION & FAQ PREVIEW */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="section-subtitle">Support & Care</span>
                        <h2 className="section-title">Visitation & Caregiver <span className="text-primary-600">Support</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Visitation Hours", desc: "11:00 AM - 12:00 PM & 05:00 PM - 06:00 PM", icon: Clock },
                            { title: "Hygiene Guard", desc: "Gowns, masks, and sanitization required for all visitors.", icon: ShieldCheck },
                            { title: "Specialist Sync", desc: "Daily briefing for immediate family members with the intensivist.", icon: UserCheck }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-8">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IcuUnitDetail;
