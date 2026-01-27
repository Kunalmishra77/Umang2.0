import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, GraduationCap, Video, FileText, Calendar, 
  Download, ArrowRight, Play, Users, Award, Clock, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    type: "Case Study",
    title: "Complex Neuro-intervention in Acute Stroke",
    author: "Dr. R.K. Mehta",
    date: "Jan 15, 2026",
    desc: "A detailed analysis of mechanical thrombectomy in a 65-year-old patient with large vessel occlusion.",
    tags: ["Neurology", "Stroke", "Intervention"],
    icon: FileText
  },
  {
    type: "Research Paper",
    title: "Efficacy of Robotic Surgery in Prostate Cancer",
    author: "Dr. S. Singh & Team",
    date: "Dec 20, 2025",
    desc: "Comparative study of outcomes between robotic-assisted and open radical prostatectomy.",
    tags: ["Urology", "Robotics", "Oncology"],
    icon: BookOpen
  },
  {
    type: "Webinar",
    title: "Advances in Cardiac Rhythm Management",
    author: "Dr. A. Gupta",
    date: "Recorded Live",
    desc: "Expert panel discussion on the latest pacemaker technologies and leadless pacing.",
    tags: ["Cardiology", "Arrhythmia"],
    icon: Video
  }
];

const cmeEvents = [
  { title: "Annual Cardiology Summit", date: "Feb 10, 2026", time: "09:00 AM - 05:00 PM", location: "Auditorium, Umang Hospital" },
  { title: "Pediatric Critical Care Workshop", date: "Feb 24, 2026", time: "10:00 AM - 02:00 PM", location: "Skill Lab, 2nd Floor" },
  { title: "Oncology Update 2026", date: "Mar 05, 2026", time: "06:00 PM - 08:00 PM", location: "Virtual (Zoom)" }
];

const KnowledgeCenter = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Knowledge Center & Academics | Umang Hospital</title>
        <meta name="description" content="A hub for medical education, research papers, case studies, and CME programs for healthcare professionals." />
      </Helmet>

      {/* 1. Hero Section - Academic Focus */}
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Library" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005580] via-[#005580]/90 to-transparent" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-blue-200 font-bold uppercase tracking-widest text-xs mb-8">
              <GraduationCap className="w-4 h-4" /> Medical Education
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Bridging Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">With Knowledge.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Empowering the next generation of healthcare leaders through research, clinical excellence, and continuous learning.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="h-14 px-8 rounded-full bg-white text-[#0f172a] font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                Browse Research <ArrowRight className="w-4 h-4" />
              </button>
              <button className="h-14 px-8 rounded-full bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Upcoming CME
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Resource Library */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-4">Clinical Resources</h2>
                  <p className="text-gray-500 text-lg">Access our repository of medical insights and findings.</p>
               </div>
               
               <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                  {['All', 'Case Studies', 'Research', 'Webinars'].map((filter) => (
                     <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeFilter === filter ? 'bg-[#005580] text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                     >
                        {filter}
                     </button>
                  ))}
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {resources.map((item, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col"
                  >
                     <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#005580] group-hover:bg-[#005580] group-hover:text-white transition-colors">
                           <item.icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                           {item.type}
                        </span>
                     </div>
                     
                     <h3 className="text-xl font-bold text-[#0f172a] mb-3 line-clamp-2">{item.title}</h3>
                     <p className="text-sm text-gray-500 mb-4 flex-1">{item.desc}</p>
                     
                     <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag, idx) => (
                           <span key={idx} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                              #{tag}
                           </span>
                        ))}
                     </div>

                     <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600 font-medium">
                           <Users className="w-4 h-4" /> {item.author}
                        </div>
                        <button className="text-[#005580] font-bold hover:underline flex items-center gap-1">
                           View <ArrowRight className="w-3 h-3" />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Upcoming CME */}
      <section className="py-24 bg-white">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-blue-50 rounded-[3rem] -rotate-2" />
               <div className="relative bg-[#0f172a] rounded-[3rem] p-10 text-white shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
                  <h3 className="text-3xl font-serif font-bold mb-8 relative z-10">Upcoming CME Programs</h3>
                  
                  <div className="space-y-6 relative z-10">
                     {cmeEvents.map((event, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                           <div className="bg-blue-500 rounded-xl w-16 h-16 flex flex-col items-center justify-center shrink-0">
                              <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                              <span className="text-2xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                           </div>
                           <div>
                              <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                              <p className="text-xs text-blue-200 flex items-center gap-2">
                                 <Clock className="w-3 h-3" /> {event.time}
                              </p>
                              <p className="text-xs text-blue-200 mt-1">{event.location}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                  
                  <button className="w-full mt-8 h-12 bg-white text-[#0f172a] rounded-xl font-bold hover:bg-blue-50 transition-all">
                     View Full Calendar
                  </button>
               </div>
            </div>

            <div>
               <div className="inline-flex items-center gap-2 text-[#005580] font-bold uppercase tracking-widest text-xs mb-6">
                  <Award className="w-4 h-4" /> Continuous Learning
               </div>
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Professional Development</h2>
               <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                  Stay at the forefront of medical science with our accredited CME programs. We regularly organize workshops, seminars, and live surgical demonstrations led by international experts.
               </p>
               <ul className="space-y-4 mb-10">
                  {["Accredited by Medical Council", "Hands-on Surgical Training", "International Faculty", "Networking Opportunities"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> {item}
                     </li>
                  ))}
               </ul>
               <Link to="/contact" className="inline-flex items-center gap-2 text-[#005580] font-bold text-lg hover:gap-3 transition-all">
                  Register for Updates <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>

      {/* 4. Academic Partners */}
      <section className="py-20 bg-blue-50 text-center">
         <div className="container-custom">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">In Collaboration With</h3>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {["Harvard Medical", "AIIMS Delhi", "Royal College (UK)", "Johns Hopkins"].map((partner, i) => (
                  <span key={i} className="text-2xl md:text-3xl font-serif font-bold text-[#0f172a]">{partner}</span>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default KnowledgeCenter;
