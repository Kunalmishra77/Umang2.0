import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Target, Eye, Quote, ShieldCheck, Heart, Users, 
  Award, ArrowRight, Activity, Zap, Globe, Microscope, Star, 
  CheckCircle2, Plus, MessageCircle, Phone, Calendar
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const IMAGES = {
  banner: "/assets/images/hospital-building-exterior.jpg",
  director: "/assets/images/director-profile.jpg",
  philosophy: "/assets/images/nursing-care.jpg",
  infra1: "/assets/images/hospital-reception.jpg", 
  infra2: "/assets/images/infrastructure-icu.jpg", 
  global: "/assets/images/international-patients.jpg",
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
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
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src={IMAGES.banner} alt="Hospital Building" className="w-full h-full object-cover opacity-40 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Established 2010
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 italic">Excellence.</span>
            </h1>
            <p className="text-lg md:text-2xl text-blue-100/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed px-4">
              More than a hospital, Umang is a sanctuary of healing where medical science meets deep human compassion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button onClick={() => document.getElementById('purpose').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white text-[#0f172a] rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl">
                  Explore Our Story
               </button>
               <Link to="/contact" className="px-10 py-5 rounded-2xl border-2 border-white/20 text-white font-black text-sm uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-all text-center">
                  Visit Campus
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PURPOSE & PHILOSOPHY (MISSION/VISION) */}
      <section id="purpose" className="py-32 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Purpose</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">
                Guided by <span className="text-blue-600">Vision,</span> <br />Driven by Mission.
              </h2>
              <p className="text-gray-500 text-xl font-light leading-relaxed mb-12">
                We believe that premium healthcare is a fundamental right. Our philosophy centers on "Patient-First" ethics, ensuring every individual receives world-class treatment without compromise.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-3">Our Vision</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">To be the most trusted global destination for advanced superspeciality care.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-200">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-3">Our Mission</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">To provide ethically grounded, high-tech medical solutions with compassion.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-[4rem] rotate-3 transform translate-x-4 translate-y-4" />
              <img src={IMAGES.philosophy} alt="Care" className="relative z-10 rounded-[4rem] shadow-2xl w-full h-[600px] object-cover" />
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl z-20 max-w-[280px] hidden md:block">
                <Quote className="w-10 h-10 text-blue-100 mb-4 fill-current" />
                <p className="text-[#0f172a] font-bold italic leading-relaxed">"We treat every patient like they are our only patient."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES GRID */}
      <section className="py-32 bg-[#0f172a] text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Umang Ethos</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-400 text-xl font-light">The pillars that support our clinical excellence and patient trust.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { icon: Heart, title: "Compassion", desc: "Empathy at every touchpoint of care.", color: "bg-rose-500" },
              { icon: ShieldCheck, title: "Integrity", desc: "Transparent billing and ethical trials.", color: "bg-blue-500" },
              { icon: Users, title: "Teamwork", desc: "Multidisciplinary boards for complex cases.", color: "bg-cyan-500" },
              { icon: Award, title: "Excellence", desc: "Continuous medical education and research.", color: "bg-yellow-500" },
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white hover:text-[#0f172a] transition-all duration-500 group"
              >
                <div className={`w-14 h-14 ${val.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                  <val.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{val.title}</h4>
                <p className="opacity-60 group-hover:opacity-100 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP MESSAGE */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="relative rounded-[4rem] bg-gray-50 overflow-hidden p-8 md:p-24 border border-gray-100">
            <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
              <div className="lg:col-span-7">
                <Quote className="w-16 h-16 text-blue-200 mb-8 fill-current" />
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#0f172a] leading-tight mb-10 italic">
                  "In the world of technology, we must never lose the touch of humanity. Our goal is to heal not just the disease, but the person."
                </h3>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-1 bg-blue-600 rounded-full" />
                  <div>
                    <h4 className="text-2xl font-bold text-[#0f172a]">Dr. Rakesh Gupta</h4>
                    <p className="text-blue-600 font-black uppercase tracking-widest text-[10px] mt-1">Medical Director & Founder</p>
                  </div>
                </div>
                <div className="mt-12">
                   <Link to="/team" className="inline-flex items-center gap-3 font-bold text-[#0f172a] hover:text-blue-600 transition-colors">
                      Meet Our Leadership Board <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-200 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
                  <img src={IMAGES.director} alt="Director" className="relative z-10 w-full aspect-square object-cover object-top rounded-[3rem] shadow-2xl border-8 border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: QUALITY & ACCREDITATIONS */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
               <div className="max-w-2xl">
                  <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Trust & Quality</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] leading-tight">Standards that <br /><span className="text-blue-600 italic">Define Us.</span></h2>
               </div>
               <div className="flex gap-4">
                  <div className="px-6 py-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-green-500" />
                     <span className="font-bold text-sm">NABH Accredited</span>
                  </div>
                  <div className="px-6 py-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-green-500" />
                     <span className="font-bold text-sm">NABL Certified</span>
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[ 
                  { title: "Clinical Excellence", desc: "Rigorous medical audits and peer reviews to ensure the highest success rates in complex surgeries.", icon: Activity },
                  { title: "Patient Safety", desc: "Zero-infection protocols and a dedicated patient safety department monitored by global standards.", icon: ShieldCheck },
                  { title: "Advanced Research", desc: "Collaborating with international medical institutions for clinical trials and treatment breakthroughs.", icon: Microscope }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                     <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <h4 className="text-xl font-bold text-[#0f172a] mb-4">{item.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 6: THE TIMELINE JOURNEY */}
      <section className="py-32 bg-gray-50 overflow-hidden relative">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent" />
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent" />
         </div>

         <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Milestones</span>
               <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] mb-6">The Healing Journey</h2>
               <p className="text-gray-500 text-lg">From a humble beginning to a world-class institution, every step has been taken with our patients in mind.</p>
            </div>
            
            <div className="relative">
               {/* Central Vertical Line (Gradient) */}
               <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-300 to-blue-100 hidden lg:block rounded-full transform -translate-x-1/2" />
               
               <div className="space-y-32">
                  {[ 
                    { year: '2010', title: 'The Foundation', desc: 'Umang opens its doors as a 50-bed focused care unit. Driven by a mission to bring accessible, world-class healthcare to Gurugram, we started with just two OTs and a dream.', align: 'left', img: ASSETS.HOSPITAL_EXTERIOR },
                    { year: '2015', title: 'Technological Leap', desc: 'A major upgrade to a 100-bed facility. We installed the region\'s first 128-slice CT scan and inaugurated our advanced 24/7 Pathology Lab.', align: 'right', img: ASSETS.LAB },
                    { year: '2020', title: 'Super Speciality Beacon', desc: 'Launch of dedicated Cardiac and Neuro Sciences wings. In the very first year, our team successfully performed over 1,000 complex life-saving procedures.', align: 'left', img: ASSETS.OT },
                    { year: '2024', title: 'NABH Gold Standard', desc: 'Expanding to 150 beds with state-of-the-art Robotic OT suites and high-clearance 3T MRI. Achieving the highest national accreditation for quality and safety.', align: 'right', img: ASSETS.RECEPTION },
                  ].map((item, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className={`flex flex-col lg:flex-row items-center gap-12 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
                     >
                        {/* Content Side */}
                        <div className={`lg:w-1/2 flex ${item.align === 'right' ? 'justify-start' : 'justify-end'} relative`}>
                           <div className={`bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-xl relative group hover:-translate-y-2 transition-transform duration-500`}>
                              {/* Connector Dot for Desktop */}
                              <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-blue-200 ${item.align === 'right' ? '-left-16' : '-right-16'}`}>
                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg ${item.align === 'right' ? '-left-2' : '-right-2'}`} />
                              </div>

                              <span className="text-6xl font-serif font-bold text-blue-500/10 absolute top-4 right-8 select-none">{item.year}</span>
                              <div className="relative z-10">
                                 <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs mb-4">{item.year}</span>
                                 <h4 className="text-2xl font-bold text-[#0f172a] mb-4">{item.title}</h4>
                                 <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                        </div>

                        {/* Center Node (Mobile Only) */}
                        <div className="lg:hidden w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md" />

                        {/* Image Side */}
                        <div className={`lg:w-1/2 flex ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                           <div className="relative w-full max-w-md aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
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
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-8 min-h-[600px]">
               <div className="lg:col-span-8 relative rounded-[3rem] overflow-hidden group">
                  <img src={IMAGES.infra1} alt="OT" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-12">
                     <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Medical Hub</span>
                     <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">150-Bedded Elite Facility</h3>
                     <Link to="/infrastructure" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f172a] rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all">
                        Virtual Tour <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
               <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="flex-1 relative rounded-[3rem] overflow-hidden group">
                     <img src={IMAGES.infra2} alt="ICU" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-[#005580]/60 mix-blend-multiply" />
                     <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
                        <Activity className="w-10 h-10 mb-4" />
                        <h4 className="text-2xl font-bold">Advanced ICU</h4>
                        <p className="text-sm opacity-80 mt-2">24/7 Monitoring with 1:1 Nursing</p>
                     </div>
                  </div>
                  <div className="flex-1 bg-[#0f172a] rounded-[3rem] p-10 text-white flex flex-col justify-between">
                     <div>
                        <h4 className="text-2xl font-bold mb-4">Quick Stats</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                           <li className="flex justify-between border-b border-white/5 pb-2"><span>ICU Beds</span> <span className="text-white">40+</span></li>
                           <li className="flex justify-between border-b border-white/5 pb-2"><span>Modular OTs</span> <span className="text-white">04</span></li>
                           <li className="flex justify-between border-b border-white/5 pb-2"><span>Specialists</span> <span className="text-white">100+</span></li>
                        </ul>
                     </div>
                     <Link to="/doctors" className="flex items-center gap-2 text-blue-400 font-bold hover:gap-4 transition-all">
                        View Full Directory <ChevronRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 8: GLOBAL OUTREACH */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="relative order-2 lg:order-1">
                  <div className="absolute -inset-10 bg-blue-50 rounded-full blur-3xl opacity-60" />
                  <img src={IMAGES.global} alt="International Patients" className="relative z-10 rounded-[4rem] shadow-2xl" />
                  <div className="absolute top-10 right-10 bg-[#005580] text-white p-8 rounded-[3rem] shadow-2xl z-20 hidden md:block">
                     <h4 className="text-4xl font-serif font-bold mb-1">30+</h4>
                     <p className="text-xs font-bold uppercase tracking-widest opacity-80">Countries Served</p>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Global Footprint</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] leading-tight mb-8">A Global Medical <br /><span className="text-blue-600">Destination.</span></h2>
                  <p className="text-gray-500 text-xl font-light leading-relaxed mb-10">
                     Umang Hospital is a preferred choice for international patients seeking high-quality surgical procedures. Our International Patient Desk provides visa assistance, concierge services, and post-discharge follow-ups globally.
                  </p>
                  <div className="space-y-4">
                     {[ "International Concierge Desk", "Interpreter Services", "Global Follow-up Program"].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-[#0f172a] font-bold">
                           <div className="w-2 h-2 rounded-full bg-blue-600" />
                           {item}
                        </div>
                     ))}
                  </div>
                  <Link to="/contact/inquiry-hub" className="inline-block mt-12 px-10 py-5 bg-[#0f172a] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#005580] transition-all shadow-xl">
                     Inquire for International Desk
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-32 bg-[#0f172a] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[150px]" />
         </div>
         
         <div className="container-custom relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
               <Star className="w-16 h-16 text-yellow-400 fill-current mx-auto mb-10 animate-pulse" />
               <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 tracking-tighter">Ready to experience <br />the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">Umang difference?</span></h2>
               <div className="flex flex-wrap justify-center gap-8">
                  <Link to="/doctors" className="px-12 py-6 bg-white text-[#0f172a] rounded-3xl font-black text-lg shadow-2xl hover:scale-105 transition-all flex items-center gap-4">
                     Book an Appointment <Calendar className="w-6 h-6" />
                  </Link>
                  <a href="tel:+918929733551" className="px-12 py-6 border-2 border-white/20 text-white rounded-3xl font-black text-lg backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-4">
                     Call 24/7 Helpline <Phone className="w-6 h-6" />
                  </a>
               </div>
               <p className="mt-16 text-gray-500 font-bold uppercase tracking-widest text-xs">Certified by NABH • NABL • JCI Standards</p>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default About;
