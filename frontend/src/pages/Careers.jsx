import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Users, Star, ArrowRight, ChevronDown, CheckCircle, Heart, Plus, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
  { id: 1, title: "Senior Resident - Cardiology", type: "Full Time", loc: "Gurugram", exp: "3-5 Years", desc: "Looking for an experienced resident to manage OPD and IPD patients in the cardiology department." },
  { id: 2, title: "Nursing Staff (ICU)", type: "Full Time", loc: "Gurugram", exp: "2-4 Years", desc: "Certified nurses with experience in critical care units and ventilator management." },
  { id: 3, title: "Front Desk Executive", type: "Full Time", loc: "Gurugram", exp: "1-3 Years", desc: "Manage patient appointments, queries, and billing with a hospitable attitude." },
  { id: 4, title: "IT Systems Administrator", type: "Full Time", loc: "Gurugram", exp: "2-5 Years", desc: "Maintain hospital HMIS, networks, and IT infrastructure." },
];

const perks = [
  { icon: Heart, title: "Health Benefits", desc: "Comprehensive medical coverage for you and your family." },
  { icon: Star, title: "Growth", desc: "Regular training workshops and career advancement paths." },
  { icon: Users, title: "Great Culture", desc: "A supportive, collaborative environment focused on patient care." },
  { icon: Plus, title: "Work-Life Balance", desc: "Flexible shifts and paid time off." }
];

const Careers = () => {
  const [activeJob, setActiveJob] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Careers | Umang Superspeciality Hospital</title>
        <meta name="description" content="Join our team of medical professionals dedicated to saving lives. View current openings." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-[#0f172a] overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2500" 
              alt="Medical Team" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
         </div>
         
         <div className="container-custom relative z-10 text-center pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Join Our Mission</span>
               <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                  Build a Career that <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Saves Lives</span>
               </h1>
               <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                  Be part of a world-class team where your expertise meets our passion for compassionate healthcare.
               </p>
               <button onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 rounded-full bg-white text-[#0f172a] font-bold text-sm hover:bg-blue-50 transition-all flex items-center gap-2 mx-auto">
                  View Openings <ArrowRight className="w-4 h-4" />
               </button>
            </motion.div>
         </div>
      </section>

      {/* 2. Culture & Perks */}
      <section className="py-24 bg-gray-50">
         <div className="container-custom">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-4">Why Choose Umang?</h2>
               <p className="text-gray-500 max-w-2xl mx-auto">More than just a job, it's a calling. Here's what we offer our team.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {perks.map((perk, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -5 }}
                     className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-blue-200 transition-all"
                  >
                     <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#005580] mb-6">
                        <perk.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg font-bold text-[#0f172a] mb-2">{perk.title}</h3>
                     <p className="text-sm text-gray-500">{perk.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Job Board */}
      <section id="openings" className="py-24 bg-white">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-2">Current Openings</h2>
                  <p className="text-gray-500">We are currently hiring for the following positions.</p>
               </div>
               <div className="hidden md:block text-sm font-bold text-gray-400">
                  Showing {jobs.length} Positions
               </div>
            </div>

            <div className="space-y-4">
               {jobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-blue-300 hover:shadow-lg bg-white">
                     <div 
                        className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                        onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                     >
                        <div>
                           <h3 className="text-xl font-bold text-[#0f172a]">{job.title}</h3>
                           <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                              <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-blue-500" /> {job.type}</span>
                              <span className="flex items-center gap-1"><Users className="w-4 h-4 text-green-500" /> {job.exp}</span>
                              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-red-500" /> {job.loc}</span>
                           </div>
                        </div>
                        <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-transform ${activeJob === job.id ? 'rotate-180 bg-gray-100' : ''}`}>
                           <ChevronDown className="w-5 h-5 text-gray-600" />
                        </div>
                     </div>
                     
                     <AnimatePresence>
                        {activeJob === job.id && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-gray-50 border-t border-gray-100"
                           >
                              <div className="p-6 md:p-8">
                                 <h4 className="font-bold text-[#0f172a] mb-2">Job Description</h4>
                                 <p className="text-gray-600 mb-6">{job.desc}</p>
                                 
                                 <h4 className="font-bold text-[#0f172a] mb-2">Requirements</h4>
                                 <ul className="list-disc list-inside text-gray-600 mb-8 space-y-1">
                                    <li>Relevant degree/certification in the field.</li>
                                    <li>Excellent communication and interpersonal skills.</li>
                                    <li>Commitment to patient safety and care.</li>
                                 </ul>

                                 <button className="px-8 py-3 rounded-xl bg-[#005580] text-white font-bold text-sm hover:bg-[#004466] transition-all shadow-lg flex items-center gap-2">
                                    Apply for this Role <ArrowRight className="w-4 h-4" />
                                 </button>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-[#005580] text-white">
         <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Don't see a suitable role?</h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-10 text-lg">
               We are always looking for talent. Drop your CV at our HR desk, and we will get back to you.
            </p>
            <a href="mailto:hr@umanghospitals.in" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#005580] rounded-full font-bold shadow-xl hover:bg-blue-50 transition-all">
               Email Your Resume <ArrowRight className="w-4 h-4" />
            </a>
         </div>
      </section>
    </div>
  );
};

export default Careers;
