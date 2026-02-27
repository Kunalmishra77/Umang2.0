import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield, Search, Info, CheckCircle2, Heart, Plus,
    ChevronDown, ExternalLink, X, Send, PhoneCall, MessageCircle, Loader2,
    Clock, ThumbsUp, Users, Activity, AlertCircle, Phone
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';
const CashlessInsurance = () => {
    const [companies, setCompanies] = useState([]);
    const [notices, setNotices] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const containerRef = useRef(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [compRes, noticeRes] = await Promise.all([
                    api.get('/insurance-companies'),
                    api.get('/site-notices')
                ]);
                setCompanies(compRes.data);
                setNotices(noticeRes.data);
            } catch (error) {
                console.error("Error fetching insurance data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const onSubmitInquiry = async (data) => {
        setIsSubmitting(true);
        try {
            await api.post('/insurance-inquiry', {
                ...data,
                company_name: selectedCompany.name
            });
            toast.success("Inquiry submitted! Our team will contact you soon.");
            setSelectedCompany(null);
            reset();
        } catch (error) {
            toast.error("Failed to submit inquiry. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredCompanies = companies.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayedCompanies = filteredCompanies.slice(0, visibleCount);
    const hasMore = visibleCount < filteredCompanies.length;

    const loadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <div 
            ref={containerRef} 
            className="bg-white min-h-screen font-sans overflow-hidden relative"
            style={{ position: 'relative' }}
        >
            <Helmet>
                <title>Cashless Insurance & TPA | Umang Superspeciality Hospital</title>
            </Helmet>

            {/* 1. CINEMATIC HERO */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <ParallaxImage 
                        src={ASSETS.SVC_CASHLESS_INSURANCE} 
                        alt="Hospital Reception" 
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
                        offset={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </motion.div>
                
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                            <Shield className="w-4 h-4" /> Hassle-Free Healthcare
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tighter leading-tight">
                            Cashless <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-200 to-primary-400 normal">Insurance.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-100/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                            We are empaneled with major insurance companies and TPAs to provide you with a seamless and worry-free recovery journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATS BAR (NEW) */}
            <div className="bg-[#030712] py-16 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <Container className="relative z-10 text-center">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: 'Insurance Partners', val: '50+', icon: Shield },
                            { label: 'Cashless Approvals', val: '10k+', icon: CheckCircle2 },
                            { label: 'Avg Approval Time', val: '< 2 Hrs', icon: Clock },
                            { label: 'Success Rate', val: '99.2%', icon: ThumbsUp }
                        ].map((stat, i) => (
                            <div key={i} className="group">
                                <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-4xl font-serif font-bold text-white mb-1">{stat.val}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* 3. SEARCH & LISTING */}
            <section className="section-padding bg-white relative">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto mb-20">
                        <div className="bg-gray-50 rounded-[2.5rem] p-4 lg:p-6 border border-gray-100 shadow-sm relative z-10">
                            <div className="relative group">
                                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-primary-400 h-6 w-6 group-focus-within:text-primary-600 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search your insurance provider..."
                                    className="w-full pl-16 pr-8 py-6 bg-white border-2 border-transparent focus:border-primary-500 rounded-3xl shadow-sm text-lg font-medium text-brand-dark placeholder-gray-400 transition-all outline-none"
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setVisibleCount(6);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        <AnimatePresence mode="popLayout">
                        {loading ? (
                            [...Array(6)].map((_, i) => (
                                <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 animate-pulse h-80"></div>
                            ))
                        ) : (
                            displayedCompanies.map((company, idx) => (
                                <motion.div 
                                    key={company.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                                    className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 group hover:-translate-y-2 flex flex-col h-full relative overflow-hidden cursor-default"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-[4rem] -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary-100" />
                                    
                                    <div className="flex-1 relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                            <Shield className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-primary-700 transition-colors">{company.name}</h3>
                                        
                                        {company.is_gipsa_group ? (
                                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-green-50 text-green-700 border border-green-100 mb-6 group-hover:bg-green-100 transition-colors">
                                                <CheckCircle2 className="w-3 h-3 mr-1.5" /> GIPSA Member
                                            </span>
                                        ) : null}

                                        {!company.is_gipsa_group && (!company.tpas || company.tpas.length === 0) ? (
                                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100 mb-6 group-hover:bg-blue-100 transition-colors">
                                                <Shield className="w-3 h-3 mr-1.5" /> Direct Panel
                                            </span>
                                        ) : null}

                                        {company.tpas && company.tpas.length > 0 ? (
                                            <div className="mt-4 pt-8 border-t border-gray-100">
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                                                    <Info className="w-3.5 h-3.5 text-primary-400" /> Associated TPAs
                                                </p>
                                                <ul className="space-y-3.5">
                                                    {company.tpas.map(tpa => (
                                                        <li key={tpa.id} className="text-sm text-gray-600 flex items-center gap-3 group/item">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-300 group-hover/item:scale-150 group-hover/item:bg-primary-500 transition-all" />
                                                            <span className="group-hover/item:text-brand-dark transition-colors">{tpa.name}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <div className="mt-4 pt-8 border-t border-gray-100">
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                                    <Info className="w-3.5 h-3.5 text-primary-400" /> Service Note
                                                </p>
                                                <p className="text-sm text-gray-500 leading-relaxed normal">
                                                    {company.note || "Direct empanelment available. Contact our insurance desk for specialized pre-authorization assistance."}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-8 pt-6 relative z-10">
                                        <button 
                                            onClick={() => setSelectedCompany(company)}
                                            className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary-600 hover:text-primary-800 transition-all group/btn active:scale-95"
                                        >
                                            Inquire for Cashless <Plus className="w-3 h-3 group-hover/btn:rotate-90 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        )}
                        </AnimatePresence>
                    </div>

                    {!loading && hasMore && (
                        <div className="mt-20 text-center">
                            <button onClick={loadMore} className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-primary-100 text-brand-dark rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 shadow-xl group active:scale-95">
                                Load More Providers <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* 4. ADMISSION WORKFLOW (NEW) */}
            <Section className="bg-slate-50">
                <Container>
                    <SectionHeading eyebrow="The Journey" title="Cashless Admission <span class='text-primary-600'>Workflow.</span>" centered />
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary-100 -z-0" />
                        {[
                            { title: 'TPA Desk', desc: 'Visit our dedicated desk with your insurance ID and ID proof.' },
                            { title: 'Pre-Auth', desc: 'Our team files for pre-authorization with the medical reports.' },
                            { title: 'Approval', desc: 'Receive initial approval from the TPA within 2-4 hours.' },
                            { title: 'Admission', desc: 'Proceed with treatment without any upfront payment.' }
                        ].map((step, i) => (
                            <div key={i} className="text-center relative z-10 group">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary-500 flex items-center justify-center text-3xl font-black text-primary-600 mx-auto mb-8 shadow-xl group-hover:bg-primary-600 group-hover:text-white transition-all">
                                    {i + 1}
                                </div>
                                <h4 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed px-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 5. DOCUMENT CHECKLIST (NEW) */}
            <Section className="bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="lg:w-1/2">
                            <SectionHeading 
                                eyebrow="Preparation" 
                                title="Documents Required for <span class='text-primary-600'>Cashless Approval.</span>" 
                                description="To ensure a smooth approval process, please have the following documents ready at the time of admission."
                            />
                            <div className="grid sm:grid-cols-2 gap-6 mt-10">
                                {[
                                    'Original Insurance ID Card',
                                    'Government ID (Aadhar/PAN)',
                                    'Doctor\'s Consultation Note',
                                    'Relevant Lab Reports',
                                    'Previous Discharge Summary',
                                    'Employee ID (Corporate Policy)'
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="font-bold text-slate-700 text-sm">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-primary-100 rounded-[4rem] rotate-3 -z-10" />
                            <img src={ASSETS.RECEPTION} alt="Checklist" className="rounded-[4rem] shadow-2xl w-full h-[550px] object-cover" />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 6. TPA DESK ADVANTAGE (NEW) */}
            <Section className="bg-[#0f172a] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
                <Container>
                    <div className="text-center mb-20">
                        <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Our Expertise</span>
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold">The Umang TPA <span className="normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Advantage.</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: '24/7 Desk', desc: 'Our insurance team is available round the clock for emergency approvals.', icon: Clock },
                            { title: 'Expert Liaisons', desc: 'Dedicated coordinators for major insurers to fast-track your claims.', icon: Users },
                            { title: 'Transparent Process', desc: 'Real-time updates on your approval status directly to your phone.', icon: Activity }
                        ].map((adv, i) => (
                            <div key={i} className="p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center">
                                <adv.icon className="w-12 h-12 text-primary-400 mx-auto mb-8" />
                                <h4 className="text-2xl font-bold mb-4">{adv.title}</h4>
                                <p className="text-slate-400 leading-relaxed font-light">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 7. CORPORATE WELLNESS HUB (NEW) */}
            <Section className="bg-white">
                <Container>
                    <div className="bg-blue-50 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[100px] opacity-50 -mr-48 -mt-48" />
                        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 relative z-10">
                            <div className="max-w-2xl">
                                <span className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-4 block">For Organizations</span>
                                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">Corporate Health <br /><span className="text-primary-600 normal">& Tie-ups.</span></h2>
                            </div>
                            <Link to="/contact/inquiry-hub" className="px-10 py-5 bg-brand-dark text-white rounded-2xl font-bold hover:bg-primary-600 transition-all shadow-xl active:scale-95">
                                Inquire for Tie-up
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10 relative z-10">
                            {[
                                { title: 'Health Camps', desc: 'On-site preventive health screenings for employees.' },
                                { title: 'Priority Access', desc: 'Dedicated appointment slots for corporate members.' },
                                { title: 'Wellness Plans', desc: 'Customized annual health packages for the workforce.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50 group-hover:bg-white transition-all">
                                    <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* INQUIRY MODAL */}
            <AnimatePresence>
                {selectedCompany && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedCompany(null)}
                            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md z-[1000]"
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 z-[1001] flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden pointer-events-auto relative">
                                <button onClick={() => setSelectedCompany(null)} className="absolute top-8 right-8 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-primary-500 hover:text-white transition-all active:scale-90 z-10">
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="grid md:grid-cols-5 h-full">
                                    <div className="md:col-span-2 bg-brand-dark p-10 text-white flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16" />
                                        <div className="relative z-10">
                                            <Shield className="w-12 h-12 text-primary-400 mb-6" />
                                            <h3 className="text-2xl font-serif font-bold mb-4">Cashless Inquiry</h3>
                                            <p className="text-primary-100/70 text-sm leading-relaxed mb-8">
                                                Provide your details for <strong>{selectedCompany.name}</strong> and our insurance desk will assist you.
                                            </p>
                                        </div>
                                        <div className="space-y-4 relative z-10">
                                            <a href="tel:+918588072727" className="flex items-center gap-3 text-xs font-bold text-primary-400 hover:text-white transition-colors">
                                                <PhoneCall className="w-4 h-4" /> +91 85880 72727
                                            </a>
                                            <a href="https://wa.me/918588072727" className="flex items-center gap-3 text-xs font-bold text-green-400 hover:text-white transition-colors">
                                                <MessageCircle className="w-4 h-4" /> WhatsApp Us
                                            </a>
                                        </div>
                                    </div>

                                    <div className="md:col-span-3 p-10">
                                        <form onSubmit={handleSubmit(onSubmitInquiry)} className="space-y-5">
                                            <div>
                                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Patient Name</label>
                                                <input 
                                                    {...register("patient_name", { required: "Name is required" })}
                                                    className={`w-full px-5 py-3.5 bg-gray-50 border ${errors.patient_name ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm`}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                                                    <input 
                                                        {...register("phone", { required: "Phone is required" })}
                                                        className={`w-full px-5 py-3.5 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm`}
                                                        placeholder="9876543210"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Policy No.</label>
                                                    <input 
                                                        {...register("policy_number")}
                                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm"
                                                        placeholder="Optional"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">How can we help?</label>
                                                <textarea 
                                                    {...register("message")}
                                                    rows="3"
                                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm resize-none"
                                                    placeholder="Brief description of your procedure..."
                                                ></textarea>
                                            </div>
                                            <button 
                                                disabled={isSubmitting}
                                                className="w-full py-4 bg-brand-dark text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-brand-dark/10 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
                                            >
                                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                                {isSubmitting ? "Submitting..." : "Send Inquiry"}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* 3. DISCLAIMER & INFO */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-brand-dark rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-center group shadow-2xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600 rounded-full blur-[140px] opacity-20 -mr-40 -mt-40 group-hover:opacity-30 transition-opacity duration-1000" />
                            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-10 relative z-10">Important <span className="text-primary-400 normal">Information</span></h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-5 group/note">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/note:bg-primary-500/20 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <p className="text-primary-100/90 leading-relaxed text-sm lg:text-lg font-light">
                                        {notices.insurance_note || "All insurance claims are subject to the terms and conditions of your policy. Please verify with our desk."}
                                    </p>
                                </div>
                                <div className="flex gap-5 group/note">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/note:bg-primary-500/20 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <p className="text-primary-100/90 leading-relaxed text-sm lg:text-lg font-light">
                                        {notices.tpa_note || "Cashless facility is available for pre-planned and emergency procedures, subject to TPA approvals."}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 lg:p-16 border border-gray-100 shadow-sm flex flex-col justify-center relative group">
                            <span className="section-subtitle">Need Assistance?</span>
                            <h3 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Patient Insurance Desk</h3>
                            <p className="text-gray-500 mb-10 leading-relaxed text-lg font-light">
                                Our dedicated insurance desk is available 24/7 to help you with the pre-authorization process and claim documentation.
                            </p>
                            <a href="tel:+918588072727" className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-10 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-600 transition-all text-center shadow-2xl hover:-translate-y-1 active:scale-95 duration-300">
                                Call Helpline: +91 85880 72727
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* SECTION: REIMBURSEMENT SUPPORT (NEW) */}
            <Section className="bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1 relative">
                            <img src={ASSETS.ABOUT_GLOBAL} alt="Reimbursement" className="rounded-[3rem] shadow-2xl" />
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <SectionHeading 
                                eyebrow="Beyond Cashless" 
                                title="Reimbursement <span class='text-primary-600'>Assistance.</span>" 
                                description="If your insurance provider is not on our panel, we provide complete documentation support to help you file for a reimbursement claim successfully."
                            />
                            <ul className="space-y-4 mb-10">
                                {['Itemized Billing Support', 'Clinical Record Compilation', 'Insurance Form Guidance', 'Query Resolution Desk'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                                        <Plus className="text-primary-500 w-4 h-4" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="tel:+918588072727" className="btn-outline">Talk to Claim Expert</a>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* SECTION: POLICY EXCLUSIONS (NEW) */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="bg-[#030712] rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden group border border-white/5 shadow-3xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[140px] opacity-10 -mr-48 -mt-48" />
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-red-400"><AlertCircle size={24} /></div>
                            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white">Understanding <span className="text-red-400">Exclusions.</span></h3>
                        </div>
                        <p className="text-slate-400 text-lg mb-12 max-w-2xl font-light">Most insurance policies have specific exclusions. Understanding these early can help you plan your finances better during hospitalization.</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { label: 'Non-Medical Items', desc: ' Admission kits, gloves, masks.' },
                                { label: 'Service Charges', desc: 'Registration or documentation fees.' },
                                { label: 'Food & Beverage', desc: 'Meals for attenders and visitors.' },
                                { label: 'Room Rent Capping', desc: 'Limits based on your policy tier.' }
                            ].map((item, i) => (
                                <div key={i} className="text-left">
                                    <h4 className="font-bold text-white mb-2">{item.label}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FINAL CTA (NEW) */}
            <Section className="bg-brand-dark text-white text-center relative overflow-hidden py-12 lg:py-16 border-t border-white/5">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <Container className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Zero-Stress <span className="text-primary-400 normal">Insurance.</span></h2>
                    <p className="text-slate-400 text-base lg:text-lg mb-8 font-light leading-relaxed">Let our experts handle the paperwork while you focus on your recovery. We are here to support your healing journey every step of the way.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
                        <Link to="/appointments/request" className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-base hover:bg-primary-700 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
                            <Calendar size={20} className="group-hover:rotate-12 transition-transform" /> Book Appointment
                        </Link>
                        <a href="tel:+918588072727" className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
                            <Phone size={20} /> Get Call Back
                        </a>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default CashlessInsurance;
