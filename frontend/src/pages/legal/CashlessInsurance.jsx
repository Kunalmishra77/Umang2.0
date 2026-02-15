import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
    Shield, Search, Info, CheckCircle2, Heart, Plus, 
    ChevronDown, ExternalLink, X, Send, PhoneCall, MessageCircle, Loader2 
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';

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
                            Cashless <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-200 to-primary-400 italic">Insurance.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-100/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                            We are empaneled with major insurance companies and TPAs to provide you with a seamless and worry-free recovery journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. SEARCH & LISTING */}
            <section className="py-20 lg:py-24 bg-white relative">
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
                                                <p className="text-sm text-gray-500 leading-relaxed italic">
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
                                            <a href="tel:+918929733550" className="flex items-center gap-3 text-xs font-bold text-primary-400 hover:text-white transition-colors">
                                                <PhoneCall className="w-4 h-4" /> +91 89297 33550
                                            </a>
                                            <a href="https://wa.me/918929733550" className="flex items-center gap-3 text-xs font-bold text-green-400 hover:text-white transition-colors">
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
            <section className="py-20 lg:py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-brand-dark rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-center group shadow-2xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600 rounded-full blur-[140px] opacity-20 -mr-40 -mt-40 group-hover:opacity-30 transition-opacity duration-1000" />
                            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-10 relative z-10">Important <span className="text-primary-400 italic">Information</span></h3>
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
                            <a href="tel:+918929733550" className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-10 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-600 transition-all text-center shadow-2xl hover:-translate-y-1 active:scale-95 duration-300">
                                Call Helpline: +91 89297 33550
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CashlessInsurance;
