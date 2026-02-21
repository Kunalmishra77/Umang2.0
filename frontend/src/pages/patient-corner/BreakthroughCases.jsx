import React from 'react';
import { motion } from 'framer-motion';
import SeoHead from '../../components/common/SeoHead';
import { Lightbulb, CheckCircle, ArrowRight, Activity, Heart, User, Star, Award, Microscope, Play, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const cases = [
  {
    id: 1,
    title: "Rare Pediatric Heart Transplant",
    category: "Cardiology",
    summary: "Successfully performed a heart transplant on a 4-year-old patient with dilated cardiomyopathy using advanced bridging therapy.",
    outcome: "Patient discharged in 3 weeks with full recovery.",
    doctor: "Dr. S. K. Gupta",
    img: ASSETS.HEART_TRANSPLANT,
    tech: "ECMO Support"
  },
  {
    id: 2,
    title: "Complex Spinal Tumor Removal",
    category: "Neurosurgery",
    summary: "Micro-surgical excision of a giant spinal tumor compressing the spinal cord using real-time neuro-monitoring.",
    outcome: "Restored mobility in legs within 10 days.",
    doctor: "Dr. R. Mehta",
    img: ASSETS.NEURO,
    tech: "Neuro-Navigation"
  },
  {
    id: 3,
    title: "Minimally Invasive Knee Replacement",
    category: "Orthopedics",
    summary: "Robotic-assisted bilateral total knee replacement for a 75-year-old patient with severe osteoarthritis and comorbidities.",
    outcome: "Walking without support on Day 2.",
    doctor: "Dr. A. Singh",
    img: ASSETS.ORTHO_KNEE,
    tech: "Mako Robot"
  }
];

const BreakthroughCases = () => {
  return (
    <div className="bg-white min-h-screen pt-12">
      <SeoHead 
        title="Breakthrough Cases" 
        description="Explore our medical success stories and complex cases treated by expert doctors at Umang Hospital."
        canonical="/patient-corner/breakthrough-cases"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10 py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-500/30 text-yellow-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Lightbulb className="w-4 h-4" /> Medical Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Impossible is just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">an Opinion.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Witness the miracles of modern medicine. Real stories of hope, resilience, and clinical excellence from Umang Hospital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Case Studies Grid */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="grid gap-16">
               {cases.map((item, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -10 }}
                     className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row group transition-all duration-500 hover-lift"
                  >
                     <div className="lg:w-1/2 relative overflow-hidden h-[400px] lg:h-auto">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8">
                           <span className="bg-yellow-500 text-[#0f172a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                              {item.category}
                           </span>
                           <h3 className="text-3xl font-serif font-bold text-white transition-all group-hover:text-yellow-400">{item.title}</h3>
                        </div>
                     </div>
                     
                     <div className="lg:w-1/2 p-12 flex flex-col justify-center bg-white transition-colors group-hover:bg-gray-50/50">
                        <div className="mb-8">
                           <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Case Summary</h4>
                           <p className="text-gray-600 text-lg leading-relaxed">{item.summary}</p>
                        </div>
                        
                        <motion.div 
                           whileHover={{ scale: 1.02 }}
                           className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-8 transition-colors group-hover:bg-green-100/50"
                        >
                           <div className="flex items-center gap-3 mb-2">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <h4 className="font-bold text-[#0f172a]">Clinical Outcome</h4>
                           </div>
                           <p className="text-green-800">{item.outcome}</p>
                        </motion.div>

                        <div className="flex items-center gap-3 mb-8">
                           <Microscope className="w-5 h-5 text-[#005580]" />
                           <span className="text-sm font-bold text-gray-500">Tech Used: <span className="text-[#005580] group-hover:underline">{item.tech}</span></span>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-[#005580] group-hover:text-white transition-all duration-500">
                                 <User className="w-5 h-5" />
                              </div>
                              <div>
                                 <p className="text-xs text-gray-400 font-bold uppercase">Lead Specialist</p>
                                 <p className="font-bold text-[#0f172a]">{item.doctor}</p>
                              </div>
                           </div>
                           <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                              <Link to={`/patient-corner/breakthrough-cases/${item.id}`} className="h-12 px-6 rounded-xl border-2 border-[#005580] text-[#005580] font-bold flex items-center gap-2 hover:bg-[#005580] hover:text-white transition-all shadow-sm">
                                 Read Full Case <ArrowRight className="w-4 h-4" />
                              </Link>
                           </motion.div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Technology Spotlight */}
      <section className="py-12 lg:py-10 bg-white border-t border-gray-100">
         <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-16">Powered by Innovation</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: "Robotic Surgery", desc: "Unmatched precision for minimal scarring.", icon: Activity },
                  { title: "Advanced Imaging", desc: "3T MRI & PET-CT for accurate diagnosis.", icon: Microscope },
                  { title: "Hybrid Cath Lab", desc: "Performing complex interventions safely.", icon: Heart }
               ].map((tech, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-yellow-200 transition-all">
                     <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <tech.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0f172a] mb-2">{tech.title}</h3>
                     <p className="text-gray-500">{tech.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Patient Video Testimonial */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-serif font-bold mb-6">"I never thought I'd walk again."</h2>
               <p className="text-xl text-gray-300 font-light mb-8 italic">
                  - Mr. Sharma, after complex spinal surgery.
               </p>
               <p className="text-gray-400 mb-8 leading-relaxed">
                  Watch the incredible story of recovery against all odds. Our multidisciplinary team worked round the clock to ensure a miracle.
               </p>
               <button className="h-14 px-8 rounded-full bg-white text-[#0f172a] font-bold flex items-center gap-2 hover:bg-yellow-50 transition-all">
                  <Play className="w-5 h-5 fill-current" /> Watch Video
               </button>
            </div>
            <div className="relative">
               <img src={ASSETS.SURGERY_TEAM} alt="Video Thumbnail" className="rounded-[2rem] shadow-2xl border-4 border-white/10" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 cursor-pointer hover:scale-110 transition-transform">
                     <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Awards & Recognition */}
      <section className="py-12 lg:py-10 bg-yellow-50">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-10 rounded-[3rem] shadow-sm border border-yellow-100">
               <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                     <Award className="w-10 h-10" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-[#0f172a]">Best Super-Speciality Hospital</h3>
                     <p className="text-gray-500">Awarded by Healthcare Asia 2025</p>
                  </div>
               </div>
               <div className="h-12 w-[1px] bg-gray-200 hidden md:block"></div>
               <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                     <div key={i} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-400">Logos</div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. Stats & CTA */}
      <section className="py-12 lg:py-10 bg-white text-center">
         <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-x divide-gray-100 mb-16">
               {[
                  { val: "500+", label: "Complex Surgeries" },
                  { val: "98%", label: "Success Rate" },
                  { val: "50+", label: "Global Referrals" }
               ].map((stat, i) => (
                  <div key={i} className="p-4">
                     <h3 className="text-5xl font-serif font-bold text-[#0f172a] mb-2">{stat.val}</h3>
                     <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                  </div>
               ))}
            </div>
            
            <div className="bg-[#0f172a] rounded-[2rem] p-12 text-white relative overflow-hidden max-w-4xl mx-auto">
               <div className="relative z-10">
                  <h2 className="text-3xl font-serif font-bold mb-4">Facing a complex medical condition?</h2>
                  <p className="text-gray-400 mb-8">Get a second opinion from our board of senior consultants.</p>
                  <Link to="/services/second-opinion" className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-yellow-500 text-[#0f172a] font-bold hover:bg-yellow-400 transition-all">
                     <Phone className="w-5 h-5" /> Consult an Expert
                  </Link>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default BreakthroughCases;
