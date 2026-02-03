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
    >
      <Helmet>
        <title>Our Story & Legacy | Umang Superspeciality Hospital</title>
        <meta name="description" content="Discover the legacy of Umang Hospital. 15+ years of clinical excellence, advanced infrastructure, and compassionate care in Gurugram." />
      </Helmet>

      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src={ASSETS.HOSPITAL_EXTERIOR} alt="Hospital Building" className="w-full h-full object-cover opacity-30 scale-110 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-transparent to-brand-dark" />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" /> Established 2010
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-200 to-primary-400 italic">Excellence.</span>
            </h1>
            <p className="text-lg md:text-2xl text-primary-100/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed px-4">
              More than a hospital, Umang is a sanctuary of healing where medical science meets deep human compassion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button onClick={() => document.getElementById('purpose').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-50 transition-all shadow-2xl">
                  Explore Our Story
               </button>
               <Link to="/contact" className="px-10 py-5 rounded-full border border-white/20 text-white font-bold text-sm uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-all text-center">
                  Visit Campus
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PURPOSE & PHILOSOPHY (MISSION/VISION) */}
      <section id="purpose" className="pt-10 pb-16 lg:pt-15 lg:pb-24 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative z-10">
              <span className="section-subtitle">Our Purpose</span>
              <h2 className="section-title">
                Guided by <span className="text-primary-600">Vision,</span> <br />Driven by Mission.
              </h2>
              <p className="text-gray-500 text-lg lg:text-xl font-light leading-relaxed mb-12">
                Umang Superspeciality Hospital is a 100-bedded healthcare facility dedicated to providing advanced, patient-centric medical care. Equipped with modern infrastructure, including modular operation theaters, fully equipped ICUs, and comprehensive diagnostic services, the hospital offers expertise across specialties like Cardiology, Neurology, Orthopedics, Oncology, and more.
                <br /><br />
                With a team of highly skilled doctors and compassionate staff, Umang Hospital ensures personalized treatment and exceptional outcomes. Committed to innovation, community outreach, and preventive care, it strives to set new standards in healthcare excellence.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover-lift transition-all duration-500">
                  <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-200">
                    <Eye className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-3">Our Vision</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">To be the most trusted global destination for advanced superspeciality care.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover-lift transition-all duration-500">
                  <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-200">
                    <Target className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-3">Our Mission</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">To provide ethically grounded, high-tech medical solutions with compassion.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] lg:h-[600px] w-full rounded-[3rem] shadow-2xl z-0"
            >
              <div className="absolute inset-0 bg-primary-600 rotate-3 transform translate-x-4 translate-y-4 rounded-[3rem]" />
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden">
                <ParallaxImage 
                  src={ASSETS.NURSE_CARE} 
                  alt="Care" 
                  className="w-full h-full object-cover" 
                  offset={40}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-white p-6 lg:p-8 rounded-[2rem] shadow-2xl z-20 max-w-[240px] lg:max-w-[280px] border border-gray-100">
                <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-primary-200 mb-4 fill-current" />
                <p className="text-brand-dark font-bold italic leading-relaxed text-sm lg:text-base">"We treat every patient like they are our only patient."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* SECTION 3: CORE VALUES GRID */}
      <section className="py-12 lg:py-10 bg-brand-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Umang Ethos</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-400 text-xl font-light">The pillars that support our clinical excellence and patient trust.</p>
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
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-10 rounded-[2.5rem] hover:bg-white hover:text-brand-dark transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 ${val.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{val.title}</h4>
                </div>
                <p className="opacity-60 group-hover:opacity-100 text-sm leading-relaxed transition-opacity">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP MESSAGE */}
      <section className="py-10 lg:py-10 bg-white">
        <div className="container-custom">
          <div className="relative rounded-[3rem] bg-gray-50 overflow-hidden p-8 md:p-20 border border-gray-100 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-primary-200 mb-6 lg:mb-8 fill-current" />
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight mb-8 lg:mb-10 italic">
                  "In the world of technology, we must never lose the touch of humanity. Our goal is to heal not just the disease, but the person."
                </h3>
                <div className="flex items-center gap-6">
                  <div className="w-12 lg:w-16 h-1.5 bg-primary-600 rounded-full" />
                  <div>
                    <h4 className="text-xl lg:text-2xl font-bold text-brand-dark">Dr. Rakesh Gupta</h4>
                    <p className="text-primary-600 font-bold uppercase tracking-widest text-[10px] mt-1">Medical Director & Founder</p>
                  </div>
                </div>
                <div className="mt-10 lg:mt-12">
                   <Link to="/team" className="inline-flex items-center gap-3 font-bold text-brand-dark hover:text-primary-600 transition-colors group text-sm lg:text-base">
                      Meet Our Leadership Board <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative group rounded-[3rem] overflow-hidden">
                  <div className="absolute inset-0 bg-primary-200 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-square">
                    <img src={ASSETS.DIRECTOR} alt="Director" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: QUALITY & ACCREDITATIONS */}
      <section className="py-12 lg:py-10 bg-gray-50">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-8">
               <div className="max-w-2xl">
                  <span className="section-subtitle">Trust & Quality</span>
                  <h2 className="section-title">Standards that <br /><span className="text-primary-600 italic">Define Us.</span></h2>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <div className="px-6 py-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4 hover:border-green-500 hover:shadow-md transition-all">
                     <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                       <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <div>
                       <span className="font-bold text-brand-dark block">NABH Accredited</span>
                       <span className="text-xs text-gray-500 font-medium">National Quality Board</span>
                     </div>
                  </div>
                  <div className="px-6 py-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4 hover:border-green-500 hover:shadow-md transition-all">
                     <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                       <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <div>
                       <span className="font-bold text-brand-dark block">NABL Certified</span>
                       <span className="text-xs text-gray-500 font-medium">Lab Excellence</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
               {[ 
                  { title: "Clinical Excellence", desc: "Rigorous medical audits and peer reviews to ensure the highest success rates in complex surgeries.", icon: Activity },
                  { title: "Patient Safety", desc: "Zero-infection protocols and a dedicated patient safety department monitored by global standards.", icon: ShieldCheck },
                  { title: "Advanced Research", desc: "Collaborating with international medical institutions for clinical trials and treatment breakthroughs.", icon: Microscope }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                     <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 lg:mb-8 group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7" />
                     </div>
                     <h4 className="text-xl font-bold text-brand-dark mb-3 lg:mb-4">{item.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 6: THE TIMELINE JOURNEY */}
      <section className="py-12 lg:py-10 bg-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />

         <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
               <span className="section-subtitle">Our Milestones</span>
               <h2 className="section-title">The Healing Journey</h2>
               <p className="text-gray-500 text-lg">From a humble beginning to a world-class institution, every step has been taken with our patients in mind.</p>
            </div>
            
            <div className="relative px-4 lg:px-0">
               {/* Central Vertical Line */}
               <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-100 via-primary-200 to-primary-100 transform lg:-translate-x-1/2" />
               
               <div className="space-y-24 lg:space-y-32">
                  {[ 
                    { year: '2010', title: 'The Foundation', desc: 'Umang opens its doors as a 50-bed focused care unit. Driven by a mission to bring accessible, world-class healthcare to Gurugram.', align: 'left', img: ASSETS.HOSPITAL_EXTERIOR },
                    { year: '2015', title: 'Technological Leap', desc: 'A major upgrade to a 100-bed facility. We installed the region\'s first 128-slice CT scan and inaugurated our advanced 24/7 Pathology Lab.', align: 'right', img: ASSETS.LAB },
                    { year: '2020', title: 'Super Speciality Beacon', desc: 'Launch of dedicated Cardiac and Neuro Sciences wings. In the very first year, our team successfully performed over 1,000 procedures.', align: 'left', img: ASSETS.OT },
                    { year: '2024', title: 'NABH Gold Standard', desc: 'Expanding to 150 beds with state-of-the-art Robotic OT suites and high-clearance 3T MRI. Achieving the highest national accreditation.', align: 'right', img: ASSETS.RECEPTION },
                  ].map((item, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''} relative pl-12 lg:pl-0`}
                     >
                        {/* Timeline Node (Mobile) */}
                        <div className="absolute left-[13px] top-8 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-md lg:hidden z-20" />

                        {/* Content Side */}
                        <div className={`lg:w-1/2 flex ${item.align === 'right' ? 'justify-start' : 'justify-end'} relative w-full`}>
                           <div className={`bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-xl relative group hover:-translate-y-2 transition-transform duration-500 w-full`}>
                              {/* Connector Dot for Desktop */}
                              <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-primary-200 ${item.align === 'right' ? '-left-16' : '-right-16'}`}>
                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-lg ${item.align === 'right' ? '-left-2' : '-right-2'}`} />
                              </div>

                              <span className="text-5xl lg:text-6xl font-serif font-bold text-gray-100 absolute top-4 right-6 lg:right-8 select-none z-0">{item.year}</span>
                              <div className="relative z-10">
                                 <span className="inline-block px-3 py-1 rounded-lg bg-primary-50 text-primary-600 font-bold text-xs mb-4">{item.year}</span>
                                 <h4 className="text-xl lg:text-2xl font-bold text-brand-dark mb-3 lg:mb-4">{item.title}</h4>
                                 <p className="text-gray-500 text-sm lg:text-base leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                        </div>

                        {/* Image Side */}
                        <div className={`lg:w-1/2 w-full flex ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                           <div className="relative w-full max-w-md aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white">
                              <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                              <img 
                                 src={item.img} 
                                 alt={item.title} 
                                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                              />
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 7: INFRASTRUCTURE PREVIEW */}
      <section className="py-12 lg:py-10 bg-gray-50">
         <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[500px] lg:min-h-[600px]">
               <div className="lg:col-span-8 relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group shadow-2xl h-[400px] lg:h-auto">
                  <img src={ASSETS.RECEPTION} alt="OT" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 max-w-xl pr-8">
                     <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 lg:mb-4 block">Medical Hub</span>
                     <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">150-Bedded Elite Facility</h3>
                     <Link to="/infrastructure" className="inline-flex items-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-white text-brand-dark rounded-full font-bold text-xs lg:text-sm hover:bg-primary-50 transition-all">
                        Virtual Tour <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
               <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                  <div className="flex-1 relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group shadow-xl h-[250px] lg:h-auto">
                     <img src={ASSETS.ICU} alt="ICU" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
                     <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
                        <Activity className="w-10 h-10 lg:w-12 lg:h-12 mb-3 lg:mb-4 text-primary-300" />
                        <h4 className="text-xl lg:text-2xl font-bold">Advanced ICU</h4>
                        <p className="text-xs lg:text-sm opacity-80 mt-2 font-light">24/7 Monitoring with 1:1 Nursing</p>
                     </div>
                  </div>
                  <div className="flex-1 bg-brand-dark rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-10 text-white flex flex-col justify-between shadow-xl min-h-[250px] lg:min-h-auto">
                     <div>
                        <h4 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Quick Stats</h4>
                        <ul className="space-y-3 lg:space-y-4 text-gray-400 font-medium text-xs lg:text-sm">
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>ICU Beds</span> <span className="text-white font-bold">40+</span></li>
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>Modular OTs</span> <span className="text-white font-bold">04</span></li>
                           <li className="flex justify-between border-b border-white/10 pb-2 lg:pb-3"><span>Specialists</span> <span className="text-white font-bold">100+</span></li>
                        </ul>
                     </div>
                     <Link to="/doctors" className="flex items-center gap-2 text-primary-400 font-bold hover:gap-4 transition-all text-xs lg:text-sm uppercase tracking-wider mt-4">
                        View Full Directory <ChevronRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 8: GLOBAL OUTREACH */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               <div className="relative order-2 lg:order-1">
                  <div className="absolute -inset-10 bg-primary-50 rounded-full blur-3xl opacity-60" />
                  <div className="relative z-10 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src={ASSETS.INTERNATIONAL} alt="International Patients" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-brand-dark text-white p-6 lg:p-8 rounded-[2rem] shadow-2xl z-20 max-w-[140px] lg:max-w-none text-center lg:text-left">
                     <h4 className="text-3xl lg:text-4xl font-serif font-bold mb-1">30+</h4>
                     <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest opacity-80">Countries Served</p>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <span className="section-subtitle">Global Footprint</span>
                  <h2 className="section-title">A Global Medical <br /><span className="text-primary-600">Destination.</span></h2>
                  <p className="text-gray-500 text-lg lg:text-xl font-light leading-relaxed mb-8 lg:mb-10">
                     Umang Hospital is a preferred choice for international patients seeking high-quality surgical procedures. Our International Patient Desk provides visa assistance, concierge services, and post-discharge follow-ups globally.
                  </p>
                  <div className="space-y-3 lg:space-y-4">
                     {[ "International Concierge Desk", "Interpreter Services", "Global Follow-up Program"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 lg:gap-4 text-brand-dark font-bold text-sm lg:text-base">
                           <div className="w-2 h-2 rounded-full bg-primary-600" />
                           {item}
                        </div>
                     ))}
                  </div>
                  <Link to="/contact/inquiry-hub" className="inline-block mt-10 lg:mt-12 px-8 py-4 lg:px-10 lg:py-5 bg-brand-dark text-white rounded-full font-bold text-xs lg:text-sm uppercase tracking-widest hover:bg-primary-900 transition-all shadow-xl hover-lift hover:-translate-y-1">
                     Inquire for International Desk
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-12 lg:py-10 bg-brand-dark relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary-600 rounded-full blur-[100px] lg:blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-600 rounded-full blur-[100px] lg:blur-[150px]" />
         </div>
         
         <div className="container-custom relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
               <Star className="w-12 h-12 lg:w-16 lg:h-16 text-yellow-400 fill-current mx-auto mb-8 lg:mb-10 animate-pulse" />
               <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-8 lg:mb-10 tracking-tighter leading-tight">Ready to experience <br />the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300 italic">Umang difference?</span></h2>
               <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
                  <Link to="/doctors" className="px-8 py-4 lg:px-10 lg:py-5 bg-white text-brand-dark rounded-full font-bold text-base lg:text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                     Book an Appointment <Calendar className="w-5 h-5" />
                  </Link>
                  <a href="tel:+918929733551" className="px-8 py-4 lg:px-10 lg:py-5 border border-white/20 text-white rounded-full font-bold text-base lg:text-lg backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                     Call 24/7 Helpline <Phone className="w-5 h-5" />
                  </a>
               </div>
               <p className="mt-12 lg:mt-16 text-gray-500 font-bold uppercase tracking-widest text-[10px] lg:text-xs">Certified by NABH • NABL • JCI Standards</p>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default About;
