import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
    FileText, Clock, Shield, CheckCircle2, ChevronRight, 
    BookOpen, Scale, AlertCircle, Mail, Phone 
} from 'lucide-react';
import api from '../../services/api';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';

const GenericCmsPage = ({ slug: propSlug }) => {
    const { slug: paramSlug } = useParams();
    const slug = propSlug || paramSlug;
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start start", "end end"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    useEffect(() => {
        const fetchPage = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/pages/${slug}`);
                setPage(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching CMS page:", err);
                setError("Information not available");
            } finally {
                setLoading(false);
            }
        };
        fetchPage();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary-600 animate-pulse" />
                </div>
            </div>
        </div>
    );

    if (error) return (
        <div className="max-w-4xl mx-auto py-40 text-center px-4">
            <AlertCircle className="w-20 h-20 text-gray-200 mx-auto mb-8" />
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">{error}</h2>
            <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl">
                Return to Safety
            </Link>
        </div>
    );

    return (
        <div ref={containerRef} className="bg-white min-h-screen font-sans overflow-hidden relative" style={{ position: 'relative' }}>
            <Helmet>
                <title>{page.seo_title || `${page.title} | Umang Superspeciality Hospital`}</title>
                <meta name="description" content={page.seo_description} />
            </Helmet>

            {/* 1. CINEMATIC HERO */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark">
                <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
                    <ParallaxImage 
                        src={ASSETS.HOSPITAL_EXTERIOR} 
                        alt="Background" 
                        className="w-full h-full object-cover mix-blend-luminosity" 
                        offset={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark" />
                </motion.div>
                
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-primary-300 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                           <Scale className="w-4 h-4" /> Legal Framework
                        </div>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter leading-tight">
                            {page.title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-cyan-200 italic" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-xs font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary-400" /> Effective: {new Date(page.updated_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary-500/40" />
                            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary-400" /> Compliance Verified</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CORE CONTENT AREA */}
            <section className="section-padding bg-white relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                        
                        {/* Sidebar: Navigation & Support */}
                        <div className="lg:col-span-4 space-y-10">
                            <div className="sticky top-32">
                                <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 shadow-inner mb-10">
                                    <h3 className="text-xl font-serif font-bold text-brand-dark mb-8 flex items-center gap-3">
                                        <BookOpen className="w-6 h-6 text-primary-600" /> 
                                        Policy Index
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            { name: "Privacy Policy", path: "/privacy-policy" },
                                            { name: "Terms of Service", path: "/terms" },
                                            { name: "Legal & Compliance", path: "/cms/legal-and-compliance" },
                                            { name: "Patient Rights", path: "/patient-experience" }
                                        ].map((link, i) => (
                                            <li key={i}>
                                                <Link 
                                                    to={link.path}
                                                    className={`flex items-center justify-between group py-3 px-4 rounded-2xl transition-all ${slug === link.path.split('/').pop() ? 'bg-brand-dark text-white shadow-xl' : 'hover:bg-white text-gray-500 hover:text-primary-600'}`}
                                                >
                                                    <span className="font-bold text-sm tracking-wide">{link.name}</span>
                                                    <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${slug === link.path.split('/').pop() ? 'text-primary-400' : 'text-gray-300'}`} />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-primary-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-primary-600/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                                    <h4 className="text-2xl font-serif font-bold mb-6 relative z-10">Legal Inquiry</h4>
                                    <p className="text-primary-100/80 text-sm leading-relaxed mb-10 relative z-10 font-light">
                                        For questions regarding our policies or data handling, contact our compliance officer.
                                    </p>
                                    <div className="space-y-4 relative z-10">
                                        <a href="mailto:compliance@umanghospital.in" className="flex items-center gap-4 text-sm font-bold bg-white/10 p-4 rounded-2xl hover:bg-white hover:text-brand-dark transition-all">
                                            <Mail className="w-5 h-5" /> compliance@umang
                                        </a>
                                        <a href="tel:+918929733550" className="flex items-center gap-4 text-sm font-bold bg-white/10 p-4 rounded-2xl hover:bg-white hover:text-brand-dark transition-all">
                                            <Phone className="w-5 h-5" /> +91 89297 33550
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Body */}
                        <div className="lg:col-span-8">
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                viewport={{ once: true }}
                                className="prose prose-xl prose-primary max-w-none 
                                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-brand-dark prose-headings:tracking-tight
                                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light prose-p:text-lg
                                    prose-strong:text-brand-dark prose-strong:font-bold
                                    prose-img:rounded-[3rem] prose-img:shadow-2xl
                                    [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:border-b [&_h2]:pb-6 [&_h2]:mt-20 [&_h2]:mb-10
                                    [&_h3]:text-primary-600 [&_h3]:text-2xl [&_h3]:mt-12
                                    [&_ul]:list-none [&_ul]:pl-0
                                    [&_li]:relative [&_li]:pl-10 [&_li]:mb-8 [&_li]:text-gray-600 [&_li]:text-lg
                                    [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-3 [&_li]:before:w-3 [&_li]:before:h-3 [&_li]:before:bg-primary-500 [&_li]:before:rounded-full [&_li]:before:shadow-[0_0_10px_rgba(var(--primary-rgb),0.4)]
                                    "
                                dangerouslySetInnerHTML={{ __html: page.content_html }}
                            />

                            {/* Trust Footnote */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-32 pt-16 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-3xl bg-green-50 flex items-center justify-center text-green-600 shadow-sm">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="font-serif font-bold text-brand-dark text-xl">Legally Compliant</p>
                                        <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-black mt-1">Hospital Ethics Committee Approved</p>
                                    </div>
                                </div>
                                <div className="px-6 py-3 rounded-full bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
                                    Document ID: UMANG-{slug.toUpperCase()}-2026
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/[0.02] mix-blend-multiply" />
                <div className="container-custom relative z-10">
                    <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl border border-white flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">Patient Safety & <span className="text-primary-600">Rights Hub.</span></h2>
                            <p className="text-gray-500 text-lg font-light">Explore our comprehensive guide to patient amenities, rights, and the care journey at Umang.</p>
                        </div>
                        <Link to="/patient-experience" className="px-12 py-6 bg-brand-dark text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-600 transition-all shadow-2xl active:scale-95 whitespace-nowrap">
                            Explore Experience <ChevronRight className="w-5 h-5 inline-block ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GenericCmsPage;
