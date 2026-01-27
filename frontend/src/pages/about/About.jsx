import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Target, Eye, Quote, ShieldCheck, Heart, Users, Award, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const IMAGES = {
  banner: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
  director: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
  infra1: "https://images.unsplash.com/photo-1516549655169-df83a0833860?auto=format&fit=crop&q=80&w=1200", 
  infra2: "https://images.unsplash.com/photo-1581056771107-24ca5f037085?auto=format&fit=crop&q=80&w=800", 
  infra3: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
};

const timeline = [
  { year: '2010', title: 'Inception', desc: 'Umang Hospital opens its doors as a 50-bed nursing home dedicated to affordable care.' },
  { year: '2015', title: 'Expansion', desc: 'Upgraded to a 100-bed facility with a 24/7 Trauma Centre and Advanced ICU.' },
  { year: '2020', title: 'Super Speciality', desc: 'Launch of dedicated Cardiac Sciences and Neuro Sciences wings.' },
  { year: '2024', title: 'NABH Accreditation', desc: 'Recognized for highest quality standards, expanding to 150 beds.' },
];

const values = [
  { icon: Heart, title: "Compassion", desc: "Treating every patient with empathy and kindness." },
  { icon: ShieldCheck, title: "Integrity", desc: "Upholding the highest ethical standards in care." },
  { icon: Users, title: "Teamwork", desc: "Collaborating across specialities for best outcomes." },
  { icon: Award, title: "Excellence", desc: "Pursuing the highest quality in medical practices." },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden relative">
      <Helmet>
        <title>About Us | Umang Superspeciality Hospital</title>
      </Helmet>

      {/* 1. Hero - Reduced height on mobile */}
      <section className="relative h-[50vh] sm:h-[65vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src={IMAGES.banner} alt="Hospital" className="w-full h-full object-cover opacity-40 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 italic">Trust</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light px-4">
              Serving the community with cutting-edge medical technology and a legacy of healing hands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Narrative & Timeline */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6 leading-tight">
                A Decade of <br /> <span className="text-blue-600 italic">Caring Hearts.</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>From a humble 50-bed facility, we have evolved into a 150-bed superspeciality beacon, housing the region's most advanced ICU and trauma response units.</p>
              </div>
              <div className="flex gap-8 sm:gap-12 items-center">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-[#0f172a]">15+</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Years</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-[#0f172a]">50k+</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Patients</p>
                </div>
              </div>
            </div>

            {/* Timeline - Adjusted for Mobile (Remove -left-[72px] on small screens) */}
            <div className="lg:col-span-7 space-y-10 lg:pl-16 lg:border-l border-gray-100">
              {timeline.map((item, idx) => (
                <motion.div key={idx} className="relative pl-6 lg:pl-0">
                  <div className="hidden lg:block absolute -left-[72px] top-1.5 w-3 h-3 rounded-full bg-white border-4 border-blue-600 shadow-lg" />
                  <span className="text-5xl sm:text-7xl font-black text-gray-100 absolute -top-4 left-0 lg:left-4 -z-10 select-none opacity-50">
                    {item.year}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-xl">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values - Grid columns adjusted */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <val.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#0f172a] mb-3">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership - Responsive Grid & Image Size */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative rounded-[2rem] md:rounded-[3rem] bg-[#0f172a] overflow-hidden p-8 md:p-16 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="order-2 lg:order-1">
                <Quote className="w-10 h-10 md:w-16 md:h-16 text-blue-500/20 mb-6" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-8 italic">
                  "Science and humanity must meet at every bedside."
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-8 md:w-12 h-1 bg-blue-500 rounded-full" />
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">Dr. Rakesh Gupta</h4>
                    <p className="text-blue-300 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Medical Director</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[380px] lg:h-[380px]">
                  <img src={IMAGES.director} alt="Director" className="w-full h-full object-cover rounded-[2rem] border-4 border-white/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Infrastructure - Grid Fix */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[500px]">
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[300px]">
              <img src={IMAGES.infra1} alt="OT" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white pr-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Advanced Modular OTs</h3>
                <p className="text-gray-300 text-xs sm:text-sm max-w-md font-light">Integrated surgical suites designed for highest safety.</p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex-1 relative rounded-3xl overflow-hidden min-h-[200px]">
                <img src={IMAGES.infra2} alt="ICU" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-bold">Critical Care ICU</h3>
              </div>
              <div className="flex-1 relative rounded-3xl overflow-hidden min-h-[200px]">
                <img src={IMAGES.infra3} alt="Imaging" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-bold">Advanced Imaging</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;