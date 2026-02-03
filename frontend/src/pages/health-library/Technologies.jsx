import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Cpu, Activity, Zap, Eye, Database, Server, 
  ArrowRight, CheckCircle, ShieldCheck, Play 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const techs = [
  {
    id: 1,
    title: "Da Vinci Xi Robotic System",
    category: "Surgical Robotics",
    desc: "The world's most advanced surgical robot for minimally invasive procedures with 3D HD vision and wrist-like precision.",
    specs: ["10x Magnification", "Tremor Filtration", "7 Degrees of Freedom"],
    img: ASSETS.ROBOTIC_SURGERY,
    icon: Cpu
  },
  {
    id: 2,
    title: "3 Tesla MRI (Silent Scan)",
    category: "Diagnostic Imaging",
    desc: "High-resolution imaging with reduced noise and faster scan times, providing exceptional clarity for neuro and cardiac scans.",
    specs: ["70cm Wide Bore", "Silent Scan Tech", "4D Flow Imaging"],
    img: ASSETS.MRI_SCAN,
    icon: Eye
  },
  {
    id: 3,
    title: "TrueBeam Linear Accelerator",
    category: "Cancer Care",
    desc: "Precise radiation therapy that targets tumors with sub-millimeter accuracy while protecting healthy tissue.",
    specs: ["RapidArc Therapy", "Motion Management", "HyperArc"],
    img: ASSETS.CT_SCAN,
    icon: Zap
  },
  {
    id: 4,
    title: "ECMO (Extracorporeal Support)",
    category: "Critical Care",
    desc: "Advanced life support system that functions as an artificial heart and lung for critically ill patients.",
    specs: ["Portable Unit", "Long-term Support", "Adult & Pediatric"],
    img: ASSETS.ICU,
    icon: Activity
  },
  {
    id: 5,
    title: "Hybrid Cath Lab",
    category: "Cardiology",
    desc: "Integrated suite for performing complex interventional and open heart procedures simultaneously.",
    specs: ["3D Roadmapping", "Low Dose X-Ray", "Sterile OR Environment"],
    img: ASSETS.CARDIAC,
    icon: Server
  },
  {
    id: 6,
    title: "AI-Powered Pathology",
    category: "Diagnostics",
    desc: "Utilizing artificial intelligence for faster and more accurate analysis of tissue samples and blood work.",
    specs: ["Digital Slides", "Pattern Recognition", "Auto-Validation"],
    img: ASSETS.LAB,
    icon: Database
  }
];

const Technologies = () => {
  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Advanced Medical Technology | Umang Hospital</title>
        <meta name="description" content="Explore our state-of-the-art medical technology including Robotic Surgery, 3T MRI, and Linear Accelerators." />
      </Helmet>

      {/* 1. Hero Section - Tech Focused */}
      <section className="relative min-h-[650px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 animate-pulse" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Cpu className="w-4 h-4" /> Future of Medicine
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Technology that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Saves Lives.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              We invest in the latest medical advancements to ensure precision, safety, and faster recovery for our patients.
            </p>
            
            <Link to="/health-library/technologies/virtual-tour" className="h-14 px-8 rounded-full bg-white text-[#0f172a] font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" /> Virtual Tour
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2.5rem] blur-lg opacity-30" />
             <img 
               src={ASSETS.MRI_SCAN} 
               alt="Advanced MRI" 
               className="relative z-10 rounded-[2rem] shadow-2xl border border-white/10" 
             />
          </motion.div>
        </div>
      </section>

      {/* 2. Technology Grid */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Cutting-Edge Infrastructure</h2>
               <p className="text-gray-500 text-xl leading-relaxed">
                  Our hospital is equipped with the world's best medical equipment to handle complex procedures with unmatched accuracy.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {techs.map((tech) => (
                  <motion.div 
                     key={tech.id}
                     whileHover={{ y: -10 }}
                     className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover-lift transition-all duration-500 border border-gray-100 group"
                  >
                     <div className="h-64 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-60" />
                        <img src={tech.img} alt={tech.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-6 left-6 z-20">
                           <span className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                              {tech.category}
                           </span>
                           <h3 className="text-white text-xl font-bold">{tech.title}</h3>
                        </div>
                     </div>
                     
                     <div className="p-8">
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm h-20 line-clamp-3">{tech.desc}</p>
                        
                        <div className="space-y-3 mb-8">
                           {tech.specs.map((spec, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-sm font-bold text-[#005580] bg-blue-50 p-2 rounded-lg">
                                 <Zap className="w-4 h-4 shrink-0" /> {spec}
                              </div>
                           ))}
                        </div>

                        <Link to="/contact" className="flex items-center gap-2 text-[#0f172a] font-bold hover:gap-3 transition-all text-sm group-hover:text-blue-600">
                           Enquire Availability <ArrowRight className="w-4 h-4" />
                        </Link>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Innovation Stats */}
      <section className="py-12 lg:py-10 bg-[#005580] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
         <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
               {[
                  { label: "Robotic Surgeries", val: "1000+" },
                  { label: "Radiology Scans", val: "50k+" },
                  { label: "Success Rate", val: "99.8%" },
                  { label: "Global Awards", val: "25+" }
               ].map((stat, i) => (
                  <div key={i} className="p-4">
                     <h3 className="text-5xl md:text-6xl font-serif font-bold mb-4">{stat.val}</h3>
                     <p className="text-blue-200 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Commitment to Safety */}
      <section className="py-32 bg-white">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-8">Safety First, Always.</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Technology isn't just about speed; it's about safety. Our advanced sterilization robots and AI-monitoring systems ensure a zero-infection environment for all procedures.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                     <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                        <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">Infection Control</h4>
                        <p className="text-sm text-gray-500">HEPA filters and UV-C sterilization robots in all OTs.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                        <CheckCircle className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">Regular Calibration</h4>
                        <p className="text-sm text-gray-500">All equipment undergoes rigorous daily safety checks.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-blue-50 rounded-full blur-[80px] opacity-60" />
               <img 
                  src={ASSETS.ROBOTIC_SURGERY} 
                  alt="Safety Tech" 
                  className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white"
               />
            </div>
         </div>
      </section>

    </div>
  );
};

export default Technologies;
