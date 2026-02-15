import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Bed, Thermometer, UserCheck, Heart, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import api from '../../services/api';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';

const IcuPage = () => {
    const [icuUnits, setIcuUnits] = useState([]);
    const [stats, setStats] = useState([]);
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
                const [icuRes, statsRes] = await Promise.all([
                    api.get('/icu'),
                    api.get('/stats')
                ]);
                setIcuUnits(icuRes.data);
                setStats(statsRes.data);
            } catch (error) {
                console.error("Error fetching ICU data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleUnitClick = (unit) => {
        // Navigate to the specific ICU unit detail page
        navigate(`/infrastructure/icu/${unit.slug}`);
    };

    return (
        <div 
            ref={containerRef} 
            className="bg-white min-h-screen font-sans overflow-hidden relative"
            style={{ position: 'relative' }} // Explicitly setting relative for Framer Motion
        >
            <Helmet>
                <title>Critical Care & ICU | Umang Superspeciality Hospital</title>
                <meta name="description" content="Discover our world-class intensive care units (ICU, SICU, CCU) equipped with advanced life support and 24/7 specialist monitoring." />
            </Helmet>

            {/* 1. CINEMATIC HERO */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
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
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                            <Activity className="w-4 h-4" /> Life-Saving Excellence
                        </span>
                        <h1 className="text-4xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                            Critical <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-200 to-primary-400 italic">Care.</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-primary-100/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Advanced life support, round-the-clock monitoring, and a team of expert intensivists dedicated to every heartbeat.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATS OVERLAY */}
            <div className="container-custom relative z-20 -mt-16 md:-mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-xl p-6 md:p-10 text-center border border-gray-100 hover-lift transition-all"
                        >
                            <p className="text-3xl md:text-5xl font-serif font-bold text-primary-600 mb-2">{stat.value}</p>
                            <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{stat.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. UNITS & FACILITIES */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="section-subtitle">Infrastructure</span>
                            <h2 className="section-title">World-Class <br /><span className="text-primary-600">Intensive Care.</span></h2>
                            <p className="text-gray-500 text-lg lg:text-xl font-light leading-relaxed mb-10">
                                Our Intensive Care Units (ICU) are the heart of our surgical and emergency excellence, featuring modular designs and negative pressure isolation suites.
                            </p>
                            <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border border-gray-100 shadow-sm">
                               <img src={ASSETS.SVC_ICU_ADVANCE} alt="Advance ICU" className="w-full h-full object-cover" />
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "24/7 Dedicated Intensivist Team",
                                    "Invasive & Non-invasive Ventilatory Support",
                                    "Centralized Hemodynamic Monitoring",
                                    "Bedside Dialysis & CRRT Support",
                                    "Strict Infection Control Protocols"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="bg-gray-50 rounded-[3rem] p-10 lg:p-16 border border-gray-100 relative shadow-inner overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
                            <h3 className="text-3xl font-serif font-bold text-brand-dark mb-10 flex items-center gap-4">
                                <Bed className="w-8 h-8 text-primary-600" />
                                Specialized Units
                            </h3>
                            <div className="space-y-6">
                                {loading ? (
                                    [...Array(3)].map((_, i) => (
                                        <div key={i} className="h-24 bg-white rounded-3xl animate-pulse"></div>
                                    ))
                                ) : (
                                    icuUnits.map((unit, index) => (
                                        <motion.div 
                                            key={index} 
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            onClick={() => handleUnitClick(unit)}
                                            className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] transition-all group cursor-pointer active:scale-95 border border-transparent hover:border-primary-100"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                                                    <Thermometer className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-brand-dark text-xl group-hover:text-primary-700 transition-colors">{unit.name}</p>
                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Click for Details</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <p className="text-3xl font-serif font-bold text-primary-600">{unit.beds}</p>
                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Beds</p>
                                                </div>
                                                <ArrowRight className="w-5 h-5 text-primary-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>
                            <div className="mt-12 pt-10 border-t border-gray-200">
                                <div className="flex items-center gap-4 p-6 bg-brand-dark rounded-2xl text-white group cursor-default">
                                    <UserCheck className="w-8 h-8 text-primary-400" />
                                    <p className="text-sm font-medium leading-relaxed opacity-90">
                                        Staffed by a 1:1 nurse-to-patient ratio for critical cases to ensure undivided attention.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-20 bg-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/10 pointer-events-none" />
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Prepared for the <span className="text-primary-400 italic">Unexpected.</span></h2>
                    <div className="flex justify-center gap-6">
                        <a href="tel:+918929733550" className="px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-50 transition-all shadow-2xl active:scale-95 duration-300">
                            Emergency: +91 89297 33550
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IcuPage;
