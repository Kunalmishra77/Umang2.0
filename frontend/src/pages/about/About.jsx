import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, Target, Eye, Quote, ShieldCheck, Heart, Users, 
  Award, ArrowRight, Activity, Phone, Calendar, CheckCircle2, Star, Microscope
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../../components/common/ParallaxImage';

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
      <Helmet>
        <title>Our Story & Legacy | Umang Superspeciality Hospital</title>
        <meta name="description" content="Discover the legacy of Umang Hospital. 15+ years of clinical excellence, advanced infrastructure, and compassionate care in Gurugram." />
      </Helmet>

      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-brand-dark">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src={ASSETS.HOSPITAL_EXTERIOR} alt="Hospital Building" className="w-full h-full object-cover opacity-50 scale-110 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-transparent to-brand-dark" />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[11px] lg:text-[13px] font-bold uppercase tracking-[0.3em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" /> Established 2010
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 tracking-tighter leading-[0.85]">
              Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-200 to-primary-400 italic">Excellence.</span>
            </h1>
            <p className="text-base md:text-lg text-primary-100/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed px-4">
              More than a hospital, Umang is a sanctuary of healing where medical science meets deep human compassion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button onClick={() => document.getElementById('purpose').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-white text-brand-dark rounded-full font-bold text-[12px] uppercase tracking-widest hover:bg-primary-50 transition-all shadow-2xl">
                  Explore Our Story
               </button>
               <Link to="/contact" className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[12px] uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-all text-center">
                  Visit Campus
               </Link>
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
                We are a 100-bedded super speciality hospital in Gurugram, where care and expertise unite. We're committed to your well-being. Trust Umang Hospital for comprehensive care that makes a difference.
                <br /><br />
                It is a modern 150-bedded healthcare facility with world-class Intensive Care Units, including 28 ICU beds, 8 SICU and 7 CCU (Cardiac Care beds). The hospital features 3 modular operation theaters, an advanced critical care and dialysis unit, a state-of-the-art CT scan, and ultrasound, and cutting-edge Cath Labs, making it one of the best medical centre in Gurugram.   
              </p>
              
              <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                <div className="p-6 lg:p-7 rounded-[1.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover-lift transition-all duration-500">
                  <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg shadow-primary-200">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">Our Vision</h4>
                  <p className="text-gray-500 text-[11px] lg:text-sm leading-relaxed">We seek to be a leader in providing high-quality services to our patients and define the standards of excellence for healthcare in India.</p>
                </div>
                <div className="p-6 lg:p-7 rounded-[1.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover-lift transition-all duration-500">
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-200">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">Our Mission</h4>
                  <p className="text-gray-500 text-[11px] lg:text-sm leading-relaxed">To provide a premium and holistic patient care experience and develop an internal community of trust and respect.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative h-[400px] lg:h-[480px] w-full rounded-[2rem] shadow-2xl z-0"
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
              { icon: Heart, title: "Compassion", desc: "Empathy at every touchpoint of care.", color: "bg-rose-500" },
              { icon: ShieldCheck, title: "Integrity", desc: "Transparent billing and ethical trials.", color: "bg-primary-500" },
              { icon: Users, title: "Teamwork", desc: "Multidisciplinary boards for complex cases.", color: "bg-cyan-500" },
              { icon: Award, title: "Excellence", desc: "Continuous medical education and research.", color: "bg-yellow-500" },
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 ${val.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{val.title}</h4>
                </div>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed transition-opacity">{val.desc}</p>
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
                  { title: "Zero Infection", desc: "Modular OTs with HEPA filters ensuring maximum surgical safety.", icon: ShieldCheck, path: "/infrastructure" },
                  { title: "Patient Rights", desc: "Transparent care models aligned with NABH quality frameworks.", icon: Heart, path: "/patient-experience" },
                  { title: "Smart Monitoring", desc: "1:1 nursing ratios in our 28-bed advanced ICU units.", icon: Activity, path: "/infrastructure/icu" },
                  { title: "Quick Results", desc: "NABL certified labs delivering accurate diagnostics in 4-6 hours.", icon: Microscope, path: "/services/lab-test-diagnostic" }
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
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6 pt-8 lg:pt-16">
                     <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                     >
                        <img src={ASSETS.OT} alt="OT" className="w-full h-full object-cover" />
                     </motion.div>
                     <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="aspect-square rounded-[2rem] bg-primary-600 p-8 flex flex-col justify-end text-white shadow-xl shadow-primary-200"
                     >
                        <h4 className="text-3xl lg:text-4xl font-black mb-1">100+</h4>
                        <p className="text-[12px] font-bold uppercase tracking-widest opacity-90">Specialists</p>
                     </motion.div>
                  </div>
                  <div className="space-y-6">
                     <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="aspect-square rounded-[2rem] bg-brand-dark p-8 flex flex-col justify-end text-white shadow-2xl"
                     >
                        <h4 className="text-3xl lg:text-4xl font-black mb-1">03</h4>
                        <p className="text-[12px] font-bold uppercase tracking-widest opacity-90">Modular OTs</p>
                     </motion.div>
                     <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                     >
                        <img src={ASSETS.ABOUT_ICU} alt="ICU" className="w-full h-full object-cover" />
                     </motion.div>
                  </div>
               </div>
               {/* Decorative floating badge */}
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-32 lg:h-32 bg-white rounded-full shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center text-center p-4 border-4 border-gray-50 z-20"
               >
                  <Star className="w-6 h-6 text-yellow-400 fill-current mb-1" />
                  <span className="text-[10px] font-black text-brand-dark uppercase tracking-tighter leading-tight">NABH GOLD<br/>ACCREDITED</span>
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
                    { year: '2010', title: 'The Foundation', desc: 'Umang opens its doors as a 50-bed focused care unit. Driven by a mission to bring accessible, world-class healthcare to Gurugram.', align: 'left', img: ASSETS.HOSPITAL_EXTERIOR },
                    { year: '2015', title: 'Technological Leap', desc: 'A major upgrade to a 100-bed facility. We installed the region\'s first 128-slice CT scan and inaugurated our advanced 24/7 Pathology Lab.', align: 'right', img: ASSETS.ABOUT_LEAP },
                    { year: '2020', title: 'Super Speciality Beacon', desc: 'Launch of dedicated Cardiac and Neuro Sciences wings. In the very first year, our team successfully performed over 1,000 procedures.', align: 'left', img: ASSETS.ABOUT_BEACON },
                    { year: '2024', title: 'NABH Gold Standard', desc: 'Expanding to 150 beds with state-of-the-art Robotic OT suites and high-clearance 3T MRI. Achieving the highest national accreditation.', align: 'right', img: ASSETS.ABOUT_NABH },
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
                  <img src={ASSETS.ABOUT_100_BEDS} alt="OT" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-8 right-8 lg:bottom-10 lg:right-10 max-w-xl pl-8 text-right">
                     <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 lg:mb-4 block">Medical Hub</span>
                     <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-6 leading-tight">100-Bedded Elite Facility</h3>
                     <Link to="/infrastructure" className="inline-flex items-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-white text-brand-dark rounded-full font-bold text-[11px] lg:text-sm hover:bg-primary-50 transition-all ml-auto">
                        Virtual Tour <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
               <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                  <div className="flex-1 relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group shadow-xl h-[250px] lg:h-auto">
                     <img src={ASSETS.ABOUT_ICU} alt="ICU" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
                     <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
                        <Activity className="w-10 h-10 lg:w-12 lg:h-12 mb-3 lg:mb-4 text-primary-300" />
                        <h4 className="text-lg lg:text-xl font-bold">Advanced ICU</h4>
                        <p className="text-[11px] lg:text-sm opacity-90 mt-2 font-light">24/7 Monitoring with 1:1 Nursing</p>
                     </div>
                  </div>
                  <div className="flex-1 bg-brand-dark rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 text-white flex flex-col justify-between shadow-xl min-h-[250px] lg:min-h-auto">
                     <div>
                        <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Quick Stats</h4>
                        <ul className="space-y-3 lg:space-y-4 text-gray-300 font-medium text-[12px] lg:text-sm">
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>ICU Beds</span> <span className="text-white font-bold">40+</span></li>
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>Modular OTs</span> <span className="text-white font-bold">03</span></li>
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>Specialists</span> <span className="text-white font-bold">100+</span></li>
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
                     Umang Hospital is a preferred choice for international patients seeking high-quality surgical procedures. Our dedicated International Desk ensures a seamless journey from visa assistance to post-discharge care.
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
               <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 lg:mb-10 tracking-tighter leading-tight">Ready to experience <br />the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300 italic">Umang difference?</span></h2>
               <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
                  <Link to="/doctors" className="px-8 py-4 lg:px-10 lg:py-5 bg-white text-brand-dark rounded-full font-bold text-sm lg:text-base shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                     Book an Appointment <Calendar className="w-5 h-5" />
                  </Link>
                  <a href="tel:+918929733550" className="px-8 py-4 lg:px-10 lg:py-5 border border-white/20 text-white rounded-full font-bold text-sm lg:text-base backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-3">
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
