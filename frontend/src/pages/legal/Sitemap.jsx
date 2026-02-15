import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
    Map, ChevronRight, Activity, Heart, Shield, 
    Stethoscope, Pill, Phone, User, Globe, FileText 
} from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';

const Sitemap = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    const sitemapData = [
        {
            title: "Main Hospital",
            icon: Globe,
            links: [
                { name: "Home", path: "/" },
                { name: "About Our Legacy", path: "/about" },
                { name: "Clinical Leadership", path: "/team" },
                { name: "Medical Infrastructure", path: "/infrastructure" },
                { name: "Careers & HR", path: "/careers" },
                { name: "Contact Us", path: "/contact" }
            ]
        },
        {
            title: "Centres of Excellence",
            icon: Stethoscope,
            links: [
                { name: "Cardiac Sciences", path: "/specialities", state: { category: 'cardiac' } },
                { name: "Neuro Sciences", path: "/specialities", state: { category: 'neuro' } },
                { name: "Orthopaedics", path: "/specialities", state: { category: 'ortho' } },
                { name: "Gastroenterology", path: "/specialities", state: { category: 'gastro' } },
                { name: "Pulmonology", path: "/specialities", state: { category: 'pulmonology' } },
                { name: "Urology & Nephrology", path: "/specialities", state: { category: 'urology' } }
            ]
        },
        {
            title: "Medical Services",
            icon: Activity,
            links: [
                { name: "Diagnostics & Labs", path: "/services/lab-test-diagnostic" },
                { name: "24/7 Pharmacy", path: "/services/buy-medicines" },
                { name: "Emergency & Trauma", path: "/services/emergency" },
                { name: "Health Checkups", path: "/services/health-checkup" },
                { name: "ICU Infrastructure", path: "/infrastructure/icu" },
                { name: "Cashless Insurance", path: "/cashless-insurance" }
            ]
        },
        {
            title: "Patient Corner",
            icon: User,
            links: [
                { name: "Patient Experience", path: "/patient-experience" },
                { name: "Patient Stories", path: "/patient-corner/patient-stories" },
                { name: "Health Blogs", path: "/patient-corner/blogs" },
                { name: "Podcasts", path: "/patient-corner/podcasts" },
                { name: "Health Library", path: "/health-library" },
                { name: "Patient Portal Login", path: "/login" }
            ]
        },
        {
            title: "Legal & Support",
            icon: Shield,
            links: [
                { name: "Terms of Service", path: "/terms" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Legal & Compliance", path: "/cms/legal-and-compliance" },
                { name: "Corporate Connect", path: "/media-center/media-connect" },
                { name: "Inquiry Hub", path: "/contact/inquiry-hub" }
            ]
        }
    ];

    return (
        <div ref={containerRef} className="bg-white min-h-screen font-sans overflow-hidden relative" style={{ position: 'relative' }}>
            <Helmet>
                <title>Sitemap | Navigate Umang Superspeciality Hospital</title>
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-dark">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <ParallaxImage 
                        src={ASSETS.RECEPTION} 
                        alt="Sitemap" 
                        className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
                        offset={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                </motion.div>
                
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                           <Map className="w-3.5 h-3.5" /> Site Navigation
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tighter leading-tight">
                            Sitemap.
                        </h1>
                        <p className="text-primary-100/60 text-sm md:text-base uppercase tracking-widest font-light">
                            Quick access to everything at Umang Hospital
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SITEMAP GRID */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                        {sitemapData.map((section, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                        <section.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-dark">{section.title}</h3>
                                </div>
                                
                                <ul className="space-y-4">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link 
                                                to={link.path} 
                                                state={link.state}
                                                className="flex items-center justify-between py-2 text-gray-500 hover:text-primary-600 font-medium transition-colors border-b border-gray-50 group/link"
                                            >
                                                <span>{link.name}</span>
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* QUICK SEARCH CTA */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-24 p-12 bg-gray-50 rounded-[3rem] text-center border border-gray-100"
                    >
                        <h4 className="text-2xl font-bold text-brand-dark mb-4">Can't find what you're looking for?</h4>
                        <p className="text-gray-500 mb-8 max-w-xl mx-auto">Our help desk is available 24/7 to guide you through our services and facilities.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-600 transition-all active:scale-95 shadow-xl">
                            Contact Support Desk <Phone className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Sitemap;
