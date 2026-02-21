import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Users, Star, ArrowRight, ChevronDown, CheckCircle, Heart, Plus, MapPin } from 'lucide-react';
import SeoHead from '../../components/common/SeoHead';

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
      <SeoHead 
        title="Careers" 
        description="Join our team of medical professionals dedicated to saving lives. View current clinical and administrative openings at Umang Hospital."
        canonical="/careers"
      />

      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-[#0f172a] overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="/assets/images/localized/careers-team.jpg" 
              alt="Medical Team" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
         </div>
         
         <div className="container-custom relative z-10 text-center pt-12">
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
      <section className="py-12 lg:py-10 bg-gray-50">
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
                     className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-blue-200 transition-all h-full"
                  >
                     <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#005580] mb-6 shadow-sm">
                        <perk.icon className="w-7 h-7" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0f172a] mb-3">{perk.title}</h3>
                     <p className="text-base text-gray-500 leading-relaxed">{perk.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: RECRUITMENT PROCESS */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <span className="section-subtitle">Join the Team</span>
            <h2 className="section-title">Our Recruitment Process</h2>
            <p className="text-gray-500 text-lg font-light">A transparent, four-step journey to becoming part of Umang Hospital.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />
            {[
              { title: "Application", desc: "Submit your updated CV through our portal or via email." },
              { title: "Screening", desc: "Our HR team reviews profiles against role-specific benchmarks." },
              { title: "Interview", desc: "Technical and behavioral rounds with department heads." },
              { title: "Onboarding", desc: "A comprehensive induction to our culture and protocols." }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-primary-500 flex items-center justify-center text-2xl font-black text-primary-600 mx-auto mb-8 shadow-xl group-hover:bg-primary-600 group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Job Board */}
      <section id="openings" className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-2">Current Openings</h2>
                  <p className="text-gray-500 text-lg">We are currently hiring for the following positions.</p>
               </div>
               <div className="hidden md:block text-sm font-black text-gray-400 uppercase tracking-widest">
                  Showing {jobs.length} Positions
               </div>
            </div>

            <div className="space-y-6">
               {jobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-3xl overflow-hidden transition-all hover:border-blue-300 hover:shadow-xl bg-white group">
                     <div 
                        className="p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                        onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                     >
                        <div>
                           <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-primary-600 transition-colors">{job.title}</h3>
                           <div className="flex flex-wrap gap-6 mt-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
                              <span className="flex items-center gap-2"><Briefcase className="w-4.5 h-4.5 text-blue-500" /> {job.type}</span>
                              <span className="flex items-center gap-2"><Users className="w-4.5 h-4.5 text-green-500" /> {job.exp}</span>
                              <span className="flex items-center gap-2"><MapPin className="w-4.5 h-4.5 text-red-500" /> {job.loc}</span>
                           </div>
                        </div>
                        <div className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${activeJob === job.id ? 'rotate-180 bg-primary-600 border-primary-600 text-white shadow-lg' : 'group-hover:border-primary-300 group-hover:text-primary-600'}`}>
                           <ChevronDown className="w-6 h-6" />
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
                              <div className="p-8 md:p-12">
                                 <h4 className="text-lg font-bold text-[#0f172a] mb-4 uppercase tracking-widest">Job Description</h4>
                                 <p className="text-gray-600 mb-8 text-lg leading-relaxed">{job.desc}</p>
                                 
                                 <h4 className="text-lg font-bold text-[#0f172a] mb-4 uppercase tracking-widest">Requirements</h4>
                                 <ul className="list-none space-y-4 mb-10">
                                    {[
                                        "Relevant degree/certification from a recognized institution.",
                                        "Minimum " + job.exp + " of hands-on experience in a superspeciality hospital.",
                                        "Excellent communication and interpersonal skills.",
                                        "Commitment to patient safety and quality care protocols."
                                    ].map((req, ridx) => (
                                        <li key={ridx} className="flex items-center gap-3 text-gray-600 text-lg">
                                            <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                                            {req}
                                        </li>
                                    ))}
                                 </ul>

                                 <button className="h-14 px-10 rounded-xl bg-[#005580] text-white font-black text-sm uppercase tracking-widest hover:bg-[#004466] transition-all shadow-xl flex items-center gap-3">
                                    Apply for this Role <ArrowRight className="w-5 h-5" />
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

      {/* SECTION: CAREERS FAQ */}
      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-subtitle">Candidate Support</span>
            <h2 className="section-title">Careers FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does the hiring process take?", a: "Typically, the process from application to offer takes 2-3 weeks, depending on the role and seniority." },
              { q: "Do you offer accommodation for outstation candidates?", a: "We provide temporary transit accommodation assistance for senior medical and nursing staff joining from other cities." },
              { q: "Is there a policy for internal growth?", a: "Yes, we prioritize internal promotions and have a robust performance-linked growth framework." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-left">
                <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary-500" /> {faq.q}
                </h4>
                <p className="text-gray-600 pl-6 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-12 lg:py-10 bg-[#005580] text-white">
         <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Don't see a suitable role?</h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-10 text-lg">
               We are always looking for talent. Drop your CV at our HR desk, and we will get back to you.
            </p>
            <a href="mailto:Umanghospitalgurugram@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#005580] rounded-full font-bold shadow-xl hover:bg-blue-50 transition-all">
               Email Your Resume <ArrowRight className="w-4 h-4" />
            </a>
         </div>
      </section>
    </div>
  );
};

export default Careers;
