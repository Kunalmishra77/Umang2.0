import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, Target, Eye, Quote, Shield, Heart, Users, 
  Award, ArrowRight, Activity, Phone, Calendar, Star, Microscope, Zap, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';
import { siteConfig } from '../../config/siteConfig';
import SeoHead from '../../components/common/SeoHead';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div 
      ref={containerRef} 
      className="bg-white overflow-hidden relative font-sans"
      style={{ position: 'relative' }}
    >
      <SeoHead 
        title="Our Story & Legacy" 
        description={`Discover the legacy of ${siteConfig.name}. 15+ years of clinical excellence, 150-bedded infrastructure, and compassionate care in Gurugram.`}
        canonical="/about"
      />

      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative min-h-[500px] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-brand-dark">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={ASSETS.ABOUT_BANNER} 
            alt="Umang Hospital Legacy" 
            className="w-full h-full object-cover opacity-70 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/60" />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-[11px] lg:text-[13px] font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" /> Established 2010
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 tracking-tighter leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-200 to-primary-400 italic">Excellence.</span>
            </h1>
            <p className="text-base md:text-lg text-white max-w-3xl mx-auto mb-8 font-medium leading-relaxed px-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              More than a hospital, {siteConfig.shortName} is a sanctuary of healing where medical science meets deep human compassion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button onClick={() => document.getElementById('purpose').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-white text-brand-dark rounded-full font-bold text-[12px] uppercase tracking-widest hover:bg-primary-50 transition-all shadow-2xl">
                  Explore Our Story
               </button>
               <Link to="/contact" className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[12px] uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-all text-center">
                                     Visit Hospital               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PURPOSE & PHILOSOPHY (MISSION/VISION) */}
      <section id="purpose" className="py-12 lg:py-16 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-7 relative z-10">
              <span className="section-subtitle">Our Purpose</span>
              <h2 className="section-title">
                Guided by <span className="text-primary-600">Vision,</span> <br />Driven by Mission.
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-light leading-relaxed mb-10 max-w-[65ch]">
                We are a {siteConfig.stats.beds}-bedded super speciality hospital in Gurugram, where care and expertise unite. {siteConfig.marketingMessage}. Trust {siteConfig.shortName} for comprehensive care that makes a difference.
                <br /><br />
                It is a modern {siteConfig.stats.beds}-bedded healthcare facility with world-class Intensive Care Units, including {siteConfig.stats.icuBedsMarketing} ICU beds ({siteConfig.stats.icuBreakdown.general} General, {siteConfig.stats.icuBreakdown.sicu} SICU and {siteConfig.stats.icuBreakdown.ccu} CCU). The hospital features {siteConfig.infrastructure.ots} modular operation theaters, an advanced critical care unit, a state-of-the-art CT scan, and cutting-edge Cath Labs.   
              </p>
              
              <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                <Link to="/patient-experience" className="p-6 lg:p-7 rounded-[1.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover-lift transition-all duration-500 block">
                  <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg shadow-primary-200 group-hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">Our Vision</h4>
                  <p className="text-gray-500 text-[11px] lg:text-sm leading-relaxed">We seek to be a leader in providing high-quality services to our patients and define the standards of excellence for healthcare in India.</p>
                </Link>
                <Link to="/patient-experience" className="p-6 lg:p-7 rounded-[1.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover-lift transition-all duration-500 block">
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-200 group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">Our Mission</h4>
                  <p className="text-gray-500 text-[11px] lg:text-sm leading-relaxed">To provide advanced, ethical, and compassionate healthcare that is accessible and affordable, with personalized treatment and excellent outcomes.</p>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-[480px] w-full rounded-[2rem] shadow-2xl z-0"
            >
              <div className="absolute inset-0 bg-primary-600 rotate-2 transform translate-x-3 translate-y-3 rounded-[2rem]" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                <ParallaxImage 
                  src={ASSETS.ABOUT_MAIN} 
                  alt="Care" 
                  className="w-full h-full object-cover" 
                  offset={40}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-2xl z-20 max-w-[200px] lg:max-w-[240px] border border-gray-100">
                <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-primary-200 mb-3 fill-current" />
                <p className="text-brand-dark font-bold italic leading-relaxed text-[11px] lg:text-[13px]">"We treat every patient like they are our only patient."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: LEADERSHIP MESSAGE */}
      <section className="py-20 lg:py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5">
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl aspect-[4/5]">
                <img src={ASSETS.DIRECTOR} alt="Dr. Rakesh Gupta" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-bold text-white">Dr. Rakesh Gupta</h4>
                  <p className="text-primary-400 font-bold uppercase tracking-widest text-xs">Medical Director</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <Quote className="w-12 h-12 text-primary-500 mb-8 opacity-50" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">A Message from <br /><span className="text-primary-400">Our Leadership</span></h2>
              <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                <p>
                  "At Umang Superspeciality Hospital, our journey has always been defined by a single-minded focus: to make world-class healthcare accessible to everyone. We believe that medical excellence is not just about advanced machines, but about the hands that operate them and the hearts that care for the patients."
                </p>
                <p>
                  "We have invested in the finest medical talent and the most advanced infrastructure to ensure that when a patient walks through our doors, they receive care that is ethical, evidence-based, and deeply compassionate."
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500">
                  <img src={ASSETS.DIRECTOR} alt="Signature" className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-white">Dr. Vikram Sethi</h5>
                  <p className="text-gray-500 text-sm">Managing Director & Co-Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: PATIENT CARE PHILOSOPHY */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <span className="section-subtitle">Our Philosophy</span>
              <h2 className="section-title">Patient-Centered <br /><span className="text-primary-600">Healing.</span></h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                We believe in a holistic healing approach where the patient is at the center of every decision we make. Our care model is built on empathy, transparency, and clinical brilliance.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Empathetic Listening", desc: "Our doctors take the time to understand your concerns deeply.", icon: Heart, path: "/patient-experience" },
                  { title: "Evidence-Based Medicine", desc: "Treatment plans backed by the latest global medical research.", icon: Microscope, path: "/doctors" },
                  { title: "Family Involvement", desc: "We keep your loved ones informed and involved in the care journey.", icon: Users, path: "/patient-experience" }
                ].map((item, i) => (
                  <Link to={item.path} key={i} className="flex gap-6 group cursor-pointer block">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary-50 rounded-[4rem] rotate-3 -z-10" />
              <img src={ASSETS.ABOUT_MAIN} alt="Philosophy" className="rounded-[4rem] shadow-2xl w-full h-[600px] object-cover" />
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trust Factor</p>
                    <p className="text-2xl font-bold text-brand-dark">98% Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: QUALITY & SAFETY STANDARDS */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="section-subtitle">Clinical Excellence</span>
            <h2 className="section-title">Global Quality Standards</h2>
            <p className="text-gray-500 text-lg lg:text-xl font-light">Our clinical protocols are aligned with international benchmarks to ensure maximum patient safety.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "NABH Accredited", desc: "Highest national recognition for quality of care and patient safety.", icon: Award, path: "/patient-experience" },
              { title: "NABL Certified Lab", desc: "Ensuring 100% accuracy and precision in diagnostic reporting.", icon: Microscope, path: "/services/lab-test-diagnostic" },
              { title: "Infection Control", desc: "Rigorous sterilization and zero-infection protocols across all zones.", icon: Shield, path: "/infrastructure" },
              { title: "Ethical Billing", desc: "Transparent, honest communication regarding all clinical costs.", icon: Shield, path: "/patient-experience" }
            ].map((std, i) => (
              <Link to={std.path} key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group block">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                  <std.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-primary-600 transition-colors">{std.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{std.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: COMMUNITY OUTREACH (CSR) */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <span className="section-subtitle">Beyond Medicine</span>
              <h2 className="section-title">Community & <br /><span className="text-primary-600">Care.</span></h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                We are committed to making healthcare accessible to the underserved sections of society through our various community outreach programs.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "Free Health Camps", desc: "Regular medical checkups organized in rural areas of Gurugram.", path: "/media-center/newsletters" },
                  { title: "Awareness Webinars", desc: "Educational sessions on preventive health and lifestyle management.", path: "/media-center/newsletters" },
                  { title: "Subsidized Surgery", desc: "Providing low-cost surgical options for economically weaker sections.", path: "/contact" }
                ].map((csr, i) => (
                  <Link to={csr.path} key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-5 items-center group hover:bg-white hover:shadow-md transition-all block">
                    <div className="w-3 h-3 rounded-full bg-primary-500 shrink-0 group-hover:scale-150 transition-transform" />
                    <div>
                      <h4 className="font-bold text-brand-dark group-hover:text-primary-600 transition-colors">{csr.title}</h4>
                      <p className="text-sm text-gray-500">{csr.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[500px]">
                <img src={ASSETS.ABOUT_GLOBAL} alt="CSR" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h4 className="text-3xl font-serif font-bold">10,000+</h4>
                  <p className="text-sm uppercase tracking-widest font-black text-primary-400">Lives Touched Annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 3: CORE VALUES GRID */}
      <section className="section-padding bg-gray-50 text-brand-dark overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">The Umang Ethos</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-500 text-lg lg:text-xl font-light">The pillars that support our clinical excellence and patient trust.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[ 
              { icon: Heart, title: "Compassion", desc: "Empathy at every touchpoint; dignity and respect for all patients.", color: "bg-rose-500", path: "/patient-experience" },
              { icon: Shield, title: "Integrity", desc: "Transparent billing and clear communication about diagnosis and costs.", color: "bg-primary-500", path: "/patient-experience" },
              { icon: Users, title: "Teamwork", desc: "Multidisciplinary collaboration across major medical specialties.", color: "bg-cyan-500", path: "/doctors" },
              { icon: Award, title: "Excellence", desc: "High medical standards and continuous medical education.", color: "bg-yellow-500", path: "/patient-experience" },
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link 
                  to={val.path}
                  className="bg-white border border-gray-100 p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col justify-between block"
                >
                  <div>
                    <div className={`w-14 h-14 ${val.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                      <val.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">{val.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed transition-opacity">{val.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CLINICAL EXCELLENCE & SAFETY */}
      <section className="section-padding bg-brand-dark relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-7">
              <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">Safety First</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                Premium Standards, <br/>
                <span className="text-primary-400 italic">Global Protocols.</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
                {[
                  { title: "Zero Infection", desc: "Modular OTs with HEPA filters ensuring maximum surgical safety.", icon: Shield, path: "/infrastructure" },
                  { title: "Patient Rights", desc: "Ethical care models aligned with NABH quality frameworks.", icon: Heart, path: "/patient-experience" },
                  { title: "Critical Care", desc: `Large ${siteConfig.stats.icuBedsMarketing}-bed ICU capacity with 24/7 intensivist coverage.`, icon: Activity, path: "/infrastructure/icu" },
                  { title: "24/7 Diagnostics", desc: "In-house lab and imaging delivering accurate results round-the-clock.", icon: Microscope, path: "/services/lab-test-diagnostic" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Link to={item.path} className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 shadow-sm flex items-center justify-center text-primary-400 border border-white/10 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{item.title}</h4>
                        <p className="text-sm lg:text-base text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="lg:col-span-5 relative">
               <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {/* Image 1: Advanced OT */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative group"
                  >
                    <img src={ASSETS.ROBOTIC_SURGERY} alt="Robotic Surgery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">Infrastructure</p>
                       <h4 className="text-white font-bold text-lg">Robotic OT</h4>
                    </div>
                  </motion.div>

                  {/* Stat 1: Modular OTs */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-brand-dark to-[#1e293b] p-8 lg:p-10 flex flex-col justify-center items-center text-center text-white shadow-xl border border-white/5 relative overflow-hidden"
                  >
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl" />
                    <Zap className="w-8 h-8 text-primary-400 mb-4 opacity-50" />
                    <h4 className="text-4xl lg:text-5xl font-black mb-2 tracking-tighter text-primary-400">03</h4>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">Modular OTs</p>
                  </motion.div>

                  {/* Stat 2: Specialists */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="aspect-square rounded-[2.5rem] bg-primary-600 p-8 lg:p-10 flex flex-col justify-center items-center text-center text-white shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                    <Users className="w-8 h-8 text-white/40 mb-4" />
                    <h4 className="text-4xl lg:text-5xl font-black mb-2 tracking-tighter">{siteConfig.stats.superspecialists}</h4>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-90">Specialists</p>
                  </motion.div>

                  {/* Image 2: High-End Facility */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative group"
                  >
                    <img src={ASSETS.ABOUT_ICU} alt="ICU Facility" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">Critical Care</p>
                       <h4 className="text-white font-bold text-lg">Smart ICU</h4>
                    </div>
                  </motion.div>
               </div>

               {/* Refined NABH Floating Badge */}
               <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
               >
                  <div className="w-28 h-28 lg:w-36 lg:h-36 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center p-5 border-4 border-primary-50">
                    <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current mb-2" />
                    <span className="text-[9px] lg:text-[11px] font-black text-brand-dark uppercase tracking-tighter leading-none">NABH GOLD<br/>STANDARDS</span>
                    <div className="mt-2 w-8 h-1 bg-primary-600 rounded-full" />
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE TIMELINE JOURNEY */}
      <section className="section-padding bg-gray-50 overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

         <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
               <span className="section-subtitle">Our Milestones</span>
               <h2 className="section-title text-4xl md:text-6xl">The Healing Journey</h2>
               <p className="text-gray-600 text-lg lg:text-xl font-light">From a humble beginning to a world-class institution.</p>
            </div>
            
            <div className="relative">
               {/* Central Vertical Line */}
               <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary-100 via-primary-300 to-primary-100 transform lg:-translate-x-1/2" />
               
               <div className="space-y-16 lg:space-y-32">
                  {[ 
                    { year: '2010', title: 'The Foundation', desc: `Umang opens its doors as a 50-bed focused care unit. Driven by a mission to bring accessible, world-class healthcare to Gurugram.`, align: 'left', img: ASSETS.HOSPITAL_EXTERIOR },
                    { year: '2015', title: 'Technological Leap', desc: `A major upgrade to a ${siteConfig.stats.beds}-bed facility. We installed the region's first 128-slice CT scan and inaugurated our advanced 24/7 Pathology Lab.`, align: 'right', img: ASSETS.ABOUT_LEAP },
                    { year: '2020', title: 'Super Speciality Beacon', desc: 'Launch of dedicated Cardiac and Neuro Sciences wings. In the very first year, our team successfully performed over 1,000 procedures.', align: 'left', img: ASSETS.ABOUT_BEACON },
                    { year: '2024', title: 'NABH Gold Standard', desc: `Expanding to ${siteConfig.stats.beds} beds with state-of-the-art Robotic OT suites and comprehensive critical care infrastructure. Achieving high national accreditation.`, align: 'right', img: ASSETS.ABOUT_NABH },
                  ].map((item, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''} relative pl-12 lg:pl-0`}
                     >
                        {/* Timeline Node */}
                        <div className="absolute left-[13px] lg:left-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary-600 border-4 border-white shadow-xl z-20 lg:-translate-x-1/2" />

                        {/* Content Side */}
                        <div className={`lg:w-1/2 flex ${item.align === 'right' ? 'justify-start' : 'justify-end'} w-full`}>
                           <motion.div 
                              whileHover={{ y: -10 }}
                              className={`bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 max-w-xl relative group transition-all duration-500 w-full`}
                           >
                              <span className="text-5xl lg:text-7xl font-serif font-bold text-gray-50 absolute top-6 right-10 select-none z-0 group-hover:text-primary-50 transition-colors">{item.year}</span>
                              <div className="relative z-10 text-left">
                                 <span className="inline-block px-4 py-1.5 rounded-xl bg-primary-50 text-primary-600 font-bold text-[12px] lg:text-sm mb-5 shadow-sm">{item.year}</span>
                                 <h4 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">{item.title}</h4>
                                 <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{item.desc}</p>
                              </div>
                           </motion.div>
                        </div>

                        {/* Image Side */}
                        <div className={`lg:w-1/2 w-full flex ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                           <motion.div 
                              whileHover={{ scale: 1.05, rotate: item.align === 'right' ? 2 : -2 }}
                              className="relative w-full max-w-md aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white"
                           >
                              <img src={item.img} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-1000" />
                              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           </motion.div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 6: INFRASTRUCTURE PREVIEW */}
      <section className="section-padding bg-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 min-h-[460px] lg:min-h-[520px]">
               <div className="lg:col-span-8 relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group shadow-2xl h-[400px] lg:h-auto">
                  <img src={ASSETS.ABOUT_100_BEDS} alt="150-bedded Elite Facility" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-8 right-8 lg:bottom-10 lg:right-10 max-w-xl pl-8 text-right">
                     <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 lg:mb-4 block">Medical Hub</span>
                     <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-6 leading-tight">{siteConfig.stats.beds}-bedded Elite Facility</h3>
                     <Link to="/infrastructure" className="inline-flex items-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-white text-brand-dark rounded-full font-bold text-[11px] lg:text-sm hover:bg-primary-50 transition-all ml-auto">
                        Virtual Tour <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
               <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                  <Link to="/infrastructure/icu" className="flex-1 relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group shadow-xl h-[250px] lg:h-auto block">
                     <img src={ASSETS.ABOUT_ICU} alt="ICU" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply group-hover:bg-primary-900/40 transition-all" />
                     <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
                        <Activity className="w-10 h-10 lg:w-12 lg:h-12 mb-3 lg:mb-4 text-primary-300 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg lg:text-xl font-bold">Advanced ICU</h4>
                        <p className="text-[11px] lg:text-sm opacity-90 mt-2 font-light">24/7 Monitoring with 1:1 Nursing</p>
                     </div>
                  </Link>
                  <div className="flex-1 bg-brand-dark rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 text-white flex flex-col justify-between shadow-xl min-h-[250px] lg:min-h-auto">
                     <div>
                        <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Quick Stats</h4>
                        <ul className="space-y-3 lg:space-y-4 text-gray-300 font-medium text-[12px] lg:text-sm">
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>ICU Beds</span> <span className="text-white font-bold">{siteConfig.stats.icuBedsMarketing}</span></li>
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>Modular OTs</span> <span className="text-white font-bold">{siteConfig.infrastructure.ots}</span></li>
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>Specialists</span> <span className="text-white font-bold">{siteConfig.stats.superspecialists}</span></li>
                        </ul>
                     </div>
                     <Link to="/doctors" className="flex items-center gap-2 text-primary-400 font-bold hover:gap-4 transition-all text-[11px] lg:text-sm uppercase tracking-wider mt-4">
                        View Full Directory <ChevronRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 7: GLOBAL OUTREACH */}
      <section className="section-padding bg-gray-50">
         <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
               <div className="lg:col-span-6 relative">
                  <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src={ASSETS.ABOUT_GLOBAL} alt="International Patients" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-brand-dark text-white p-6 lg:p-8 rounded-[1.5rem] shadow-2xl z-20 max-w-[200px] text-left border-4 border-white">
                     <h4 className="text-3xl lg:text-4xl font-serif font-bold mb-1">30+</h4>
                     <p className="text-[11px] lg:text-sm font-bold uppercase tracking-widest opacity-90 leading-tight">Countries Served Globally</p>
                  </div>
               </div>
               <div className="lg:col-span-6 text-left">
                  <span className="section-subtitle">Global Footprint</span>
                  <h2 className="text-2xl lg:text-4xl font-serif font-bold text-brand-dark mb-6 leading-tight">A Premier Medical <br /><span className="text-primary-600">Destination.</span></h2>
                  <p className="text-gray-600 text-sm lg:text-base font-light leading-relaxed mb-8">
                     {siteConfig.shortName} is a preferred choice for international patients seeking high-quality surgical procedures. Our dedicated International Desk ensures a seamless journey from visa assistance to post-discharge care.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                     {[ "International Desk", "Interpreter Services", "Concierge Care", "Global Follow-ups"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-brand-dark font-bold text-[11px] lg:text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                           {item}
                        </div>
                     ))}
                  </div>
                  <Link to="/contact/inquiry-hub" className="inline-block px-8 py-4 bg-brand-dark text-white rounded-xl font-bold text-[11px] lg:text-sm uppercase tracking-widest hover:bg-primary-900 transition-all shadow-xl">
                     Inquire for International Desk
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary-600 rounded-full blur-[100px] lg:blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-600 rounded-full blur-[100px] lg:blur-[150px]" />
         </div>
         
         <div className="container-custom relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
               <Star className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-400 fill-current mx-auto mb-6 lg:mb-8 animate-pulse" />
               <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 lg:mb-10 tracking-tighter leading-tight">Ready to experience <br />the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300 italic">{siteConfig.shortName.split(' ')[0]} difference?</span></h2>
               <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
                  <Link to="/doctors" className="px-8 py-4 lg:px-10 lg:py-5 bg-white text-brand-dark rounded-full font-bold text-sm lg:text-base shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                     Book an Appointment <Calendar className="w-5 h-5" />
                  </Link>
                  <a href={`tel:${siteConfig.contacts.emergency}`} className="px-8 py-4 lg:px-10 lg:py-5 border border-white/20 text-white rounded-full font-bold text-sm lg:text-base backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                     Call 24/7 Helpline <Phone className="w-5 h-5" />
                  </a>
               </div>
               <p className="mt-10 lg:mt-12 text-gray-500 font-bold uppercase tracking-widest text-[11px] lg:text-sm">Certified by NABH • NABL • JCI Standards</p>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default About;
