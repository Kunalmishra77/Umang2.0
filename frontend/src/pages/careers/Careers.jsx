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

      {/* 4. EMPLOYEE GROWTH & TRAINING */}
      <Section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Career Advancement</span>
              <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-10 leading-tight">Upskilling the <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Next Generation.</span></h2>
              <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
                We don't just hire professionals; we build leaders. Our dedicated training wing provides monthly workshops, digital certifications, and mentorship programs for all staff levels.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">CME Programs</h4>
                    <p className="text-xs text-slate-500">Continuous medical education for clinical faculty.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Soft Skill Hub</h4>
                    <p className="text-xs text-slate-500">Empathy-based training for support teams.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={ASSETS.ROBOTIC_SURGERY} alt="Training" className="rounded-[3rem] shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-10 rounded-[3rem] shadow-2xl hidden xl:block">
                <p className="text-white font-black text-5xl mb-1 tracking-tighter">100+</p>
                <p className="text-blue-200 font-bold uppercase tracking-widest text-[10px]">Training Hours/Year</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. INTERNSHIPS & RESIDENCY */}
      <Section className="bg-white pt-24 pb-12">
        <Container>
          <div className="bg-blue-50 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50 -mr-48 -mt-48" />
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">For Students</span>
                <h2 className="text-4xl font-serif font-bold text-brand-dark leading-tight">Internship & <br /><span className="text-blue-600 italic">Academic Residency.</span></h2>
              </div>
              <button className="px-8 py-4 bg-[#005580] text-white rounded-2xl font-bold hover:bg-[#004466] transition-all shadow-xl">
                Explore Programs
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Nursing Internships', desc: 'Six-month rotation programs for BSc Nursing final year students.' },
                { title: 'Admin Management', desc: 'Practical exposure to healthcare operations and hospital HMIS.' },
                { title: 'Pharmacy Trainees', desc: 'On-floor training for retail and hospital pharmacy protocols.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-blue-100/50">
                  <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. LIFE AT UMANG (Gallery) */}
      <Section className="bg-white pt-12">
        <Container>
          <SectionHeading eyebrow="Culture in Action" title="Life at Umang Hospital" centered />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-4">
              <img src={ASSETS.SURGERY_TEAM} alt="Team" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
              <img src={ASSETS.ABOUT_GLOBAL} alt="Event" className="rounded-3xl h-48 w-full object-cover shadow-lg" />
            </div>
            <div className="space-y-4 pt-8">
              <img src={ASSETS.DIRECTOR} alt="Leadership" className="rounded-3xl h-80 w-full object-cover shadow-lg" />
              <img src={ASSETS.NURSE_CARE} alt="Floor" className="rounded-3xl h-48 w-full object-cover shadow-lg" />
            </div>
            <div className="space-y-4">
              <img src={ASSETS.ROBOTIC_SURGERY} alt="Tech" className="rounded-3xl h-48 w-full object-cover shadow-lg" />
              <img src={ASSETS.ABOUT_MAIN} alt="Lobby" className="rounded-3xl h-80 w-full object-cover shadow-lg" />
            </div>
            <div className="space-y-4 pt-12">
              <img src={ASSETS.SVC_ICU_ADVANCE} alt="ICU" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
              <img src={ASSETS.RECEPTION} alt="Front" className="rounded-3xl h-48 w-full object-cover shadow-lg" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. DIVERSITY & INCLUSION */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="Core Values" 
                title="A Workplace for <span class='text-blue-600'>Everyone.</span>" 
                description="We take pride in our diverse workforce representing various cultures and backgrounds across India. Inclusivity is at the heart of our collaborative healing environment."
              />
              <div className="flex flex-wrap gap-4">
                {['Equal Opportunity', 'Gender Diversity', 'Zero Tolerance Harassment', 'Transparent Pay'].map((tag, idx) => (
                  <span key={idx} className="bg-white border border-blue-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-blue-50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Users size={64} className="text-blue-200 mb-6" />
                <h4 className="text-2xl font-bold text-brand-dark mb-4">Referral Program</h4>
                <p className="text-gray-500 mb-8 leading-relaxed">Know someone who fits our culture? Our employee referral program rewards you for bringing top talent into our family.</p>
                <Link to="/contact" className="text-blue-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">Refer Now <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. CAREERS FAQ */}
      <section className="section-padding bg-white border-y border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-subtitle">Candidate Support</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does the hiring process take?", a: "Typically, the process from application to offer takes 2-3 weeks, depending on the role and seniority." },
              { q: "Do you offer accommodation for outstation candidates?", a: "We provide temporary transit accommodation assistance for senior medical and nursing staff joining from other cities." },
              { q: "Is there a policy for internal growth?", a: "Yes, we prioritize internal promotions and have a robust performance-linked growth framework." },
              { q: "What documents are required for interview?", a: "Please carry your updated CV, original educational certificates, experience letters from previous employers, and two passport-sized photographs." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-transparent hover:border-blue-200 transition-all text-left">
                <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm"><HelpCircle size={20} /></div> {faq.q}
                </h4>
                <p className="text-gray-600 pl-14 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HOSPITAL HIRING (NEW) */}
      <Section className="bg-blue-600 text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">Hospital Hiring 2026</h2>
              <p className="text-blue-100 text-xl font-light">We are visiting top medical and nursing colleges this year. If you represent an institution, let's connect for placement drives.</p>
            </div>
            <Link to="/contact" className="h-16 px-10 bg-white text-blue-600 rounded-full font-black text-lg flex items-center gap-3 hover:bg-blue-50 transition-all shadow-2xl">
              Institutional Connect <Globe size={24} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 10. FINAL CTA HUB */}
      <Section className="bg-brand-dark text-white relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container className="text-center relative z-10">
          <h2 className="text-4xl lg:text-8xl font-serif font-bold mb-10 leading-tight">Start Your <br /><span className="text-primary-400 italic">Calling.</span></h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">Join a legacy of healing and innovation. Your future at Umang Hospital begins today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })} className="px-12 py-6 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group">
              <Briefcase size={24} className="group-hover:rotate-12 transition-transform" /> View Openings
            </button>
            <a href="mailto:umanghospitalgurugram@gmail.com" className="px-12 py-6 border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-4 hover:scale-105 active:scale-95">
              <Mail size={24} /> Drop Resume
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Careers;
