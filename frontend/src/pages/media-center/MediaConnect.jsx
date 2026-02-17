import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Radio, Mail, Phone, Download, ArrowRight, 
  User, Award, FileText, Share2, CheckCircle, 
  MessageSquare, Camera, Video, MessageCircle, Info, Plus, Clock, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const spokespeople = [
  { name: "Dr. Vikram Sethi", role: "Group Medical Director", expertise: "Clinical Policy, Robotics", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" },
  { name: "Ms. Shalini Gupta", role: "Director, Patient Care", expertise: "Quality Control, Ethics", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" },
  { name: "Dr. Rajesh Kumar", role: "HOD, Cardiology", expertise: "Cardiovascular Innovations", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200" }
];

const MediaConnect = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Media Connect | Journalist Resources | Umang Hospital</title>
        <meta name="description" content="Official resource hub for media professionals. Connect with our spokespeople, download press kits, and request interviews." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/localized/media-connect-hero.jpg" 
            alt="Media Room" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Radio className="w-4 h-4" /> Press Relations
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Let's Tell the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Future of Care.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              The official hub for journalists and media professionals. Get prompt responses, expert opinions, and high-quality assets for your stories.
            </p>
            
            <div className="flex flex-wrap gap-6">
               <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="mailto:Umanghospitalgurugram@gmail.com" 
                  className="h-16 px-10 rounded-full bg-white text-[#0f172a] font-bold text-lg transition-all flex items-center gap-3 shadow-xl"
               >
                  <Mail className="w-6 h-6 text-blue-600" /> Umanghospitalgurugram@gmail.com
               </motion.a>
               <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="tel:+918929733550" 
                  className="h-16 px-10 rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl"
               >
                  <Phone className="w-6 h-6" /> +91 124 456 7895
               </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Press Resources Grid */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-20 text-center">Journalist Toolbox</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: "Brand Assets", desc: "Logos, brand colors, and guidelines.", icon: Camera },
                  { title: "Hospital Fact Sheet", desc: "Bed capacity, specialties, and stats.", icon: FileText },
                  { title: "Leadership Bios", desc: "Profiles of our medical & board leaders.", icon: User },
                  { title: "B-Roll Footage", desc: "High-res videos of facilities and OTs.", icon: Video }
               ].map((res, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ 
                        y: -15,
                        boxShadow: "0 30px 60px -12px rgba(0,0,0,0.1)"
                     }}
                     className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm transition-all duration-500 text-center group"
                  >
                     <div className="w-20 h-20 rounded-[2rem] bg-blue-50 text-[#005580] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-[#005580] group-hover:text-white transition-all duration-500">
                        <res.icon className="w-10 h-10" />
                     </div>
                     <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{res.title}</h3>
                     <p className="text-gray-500 text-sm mb-10 leading-relaxed">{res.desc}</p>
                     <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-[#005580] font-bold text-sm mx-auto transition-all"
                     >
                        Download Assets <Download className="w-4 h-4" />
                     </motion.button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Spokepersons Spotlight */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
               <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Expert Spokespeople</h2>
                  <p className="text-gray-500 text-xl leading-relaxed">Our clinical and administrative leaders are available for expert commentary, interviews, and panel discussions.</p>
               </div>
               <motion.div whileHover={{ x: 10 }}>
                  <Link to="/team" className="text-[#005580] font-bold flex items-center gap-2 text-lg">Meet Entire Team <ArrowRight className="w-5 h-5" /></Link>
               </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {spokespeople.map((person, i) => (
                  <motion.div 
                     key={i} 
                     whileHover={{ y: -10 }}
                     className="group cursor-pointer"
                  >
                     <div className="relative h-[400px] rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
                        <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute bottom-8 left-8 right-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">{person.role}</p>
                           <h3 className="text-3xl font-bold">{person.name}</h3>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 text-gray-500 text-lg italic px-4">
                        <MessageSquare className="w-6 h-6 text-blue-500" /> 
                        <span>Expert in {person.expertise}</span>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Accreditation & Trust Section */}
      <section className="py-32 bg-[#0f172a] text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
         <div className="container-custom relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-20 text-center">Commitment to Global Standards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {["JCI Accredited", "NABL Certified", "NABH Nursing", "ISO 9001:2015"].map((cert, i) => (
                  <motion.div 
                     key={i} 
                     whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                     className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center backdrop-blur-md transition-all duration-500"
                  >
                     <Award className="w-16 h-16 text-yellow-400 mx-auto mb-8 animate-pulse" />
                     <h4 className="text-xl font-bold mb-2">{cert}</h4>
                     <p className="text-blue-300 text-xs mt-4 uppercase tracking-[0.2em] font-black opacity-60">Valid through 2027</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Events for Media */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
               <div className="absolute inset-0 bg-blue-500/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <img src="/assets/images/localized/press-event-thumb.jpg" alt="Press Event" className="relative rounded-[4rem] shadow-2xl w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]" />
               <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 hidden xl:block">
                  <p className="text-4xl font-serif font-black text-[#005580]">Feb 04</p>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Next Briefing</p>
               </div>
            </div>
            <div>
               <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-8 inline-block shadow-sm">Calendar 2026</span>
               <h2 className="text-5xl font-serif font-bold text-[#0f172a] mb-10 leading-tight">Upcoming Media Briefings</h2>
               <div className="space-y-6">
                  {[
                     { title: "Cancer Awareness Month Launch", date: "Feb 04, 2026", time: "11:00 AM" },
                     { title: "New AI-Diagnostics Center Unveiling", date: "Feb 18, 2026", time: "02:30 PM" }
                  ].map((ev, i) => (
                     <motion.div 
                        key={i} 
                        whileHover={{ x: 15 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                     >
                        <div>
                           <h4 className="font-bold text-xl text-[#0f172a] group-hover:text-[#005580] transition-colors mb-2">{ev.title}</h4>
                           <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {ev.date}</span>
                              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {ev.time}</span>
                           </div>
                        </div>
                        <motion.button 
                           whileHover={{ scale: 1.2, rotate: 90 }}
                           className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner"
                        >
                           <Plus className="w-6 h-6" />
                        </motion.button>
                     </motion.div>
                  ))}
               </div>
               <p className="mt-12 text-gray-500 italic text-lg leading-relaxed flex items-start gap-3">
                  <Info className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  Note: All media events require RSVP. Connect with us for media passes and security clearance.
               </p>
            </div>
         </div>
      </section>

      {/* 6. Media Request Form */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="bg-[#005580] rounded-[3rem] lg:rounded-[5rem] p-6 sm:p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
               
               <div className="lg:w-5/12 relative z-10">
                  <h2 className="text-5xl font-serif font-bold mb-10 leading-tight">Request an Interview or Statement.</h2>
                  <p className="text-blue-100 text-xl mb-12 leading-relaxed opacity-90">
                     Fill out the form below with your requirements, and our media relations officer will get back to you within 2 hours.
                  </p>
                  <div className="space-y-8">
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#005580] transition-all duration-500">
                           <Clock className="w-7 h-7" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold">2-Hour Response</h4>
                           <p className="text-blue-200 text-sm">Guaranteed turnaround time.</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#005580] transition-all duration-500">
                           <CheckCircle className="w-7 h-7" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold">Expert Panel</h4>
                           <p className="text-blue-200 text-sm">Access to 100+ medical specialists.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="lg:w-7/12 relative z-10">
                  <AnimatePresence mode="wait">
                     {!submitted ? (
                        <motion.form 
                           key="form"
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           onSubmit={handleSubmit}
                           className="bg-white rounded-[3rem] p-12 shadow-2xl text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Journalist Name</label>
                              <input type="text" required className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-xl bg-transparent transition-colors placeholder:text-gray-200" placeholder="John Doe" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Media Outlet</label>
                              <input type="text" required className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-xl bg-transparent transition-colors placeholder:text-gray-200" placeholder="Media House" />
                           </div>
                           <div className="md:col-span-2 space-y-3">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Nature of Inquiry</label>
                              <select className="w-full h-12 border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent cursor-pointer">
                                 <option>Interview Request</option>
                                 <option>Official Statement</option>
                                 <option>Fact-checking</option>
                                 <option>Media Pass for Event</option>
                              </select>
                           </div>
                           <div className="md:col-span-2 space-y-3">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Your Message / Deadline</label>
                              <textarea required rows="3" className="w-full border-b-2 border-gray-100 focus:border-[#005580] outline-none font-bold text-lg bg-transparent transition-colors resize-none placeholder:text-gray-200" placeholder="Please provide details and your deadline..."></textarea>
                           </div>
                           <div className="md:col-span-2 pt-8">
                              <motion.button 
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}
                                 disabled={submitting}
                                 className="w-full h-16 bg-[#0f172a] text-white rounded-2xl font-black text-xl hover:bg-[#005580] transition-all shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-70"
                              >
                                 {submitting ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <>Send Media Request <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></>}
                              </motion.button>
                           </div>
                        </motion.form>
                     ) : (
                        <motion.div 
                           key="success"
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="bg-white rounded-[3rem] p-16 shadow-2xl text-center flex flex-col items-center justify-center min-h-[500px]"
                        >
                           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8 shadow-inner animate-bounce">
                              <CheckCircle className="w-12 h-12" />
                           </div>
                           <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">Request Sent!</h2>
                           <p className="text-gray-500 text-lg max-w-sm mb-10 leading-relaxed">Our Media Relations Officer has been notified and will contact you within 2 hours.</p>
                           <button onClick={() => setSubmitted(false)} className="text-[#005580] font-black uppercase tracking-widest text-sm hover:underline">Send Another Request</button>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Social Media & Whatsapp */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
         <div className="container-custom">
            <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12 group transition-all duration-500 hover-lift">
               <div className="flex items-center gap-8">
                  <motion.div 
                     whileHover={{ scale: 1.1, rotate: 15 }}
                     className="w-20 h-20 bg-green-100 rounded-[2rem] flex items-center justify-center text-green-600 shadow-inner"
                  >
                     <MessageCircle className="w-12 h-12" />
                  </motion.div>
                  <div>
                     <h4 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Media Alerts on WhatsApp</h4>
                     <p className="text-gray-500 text-lg">Get instant press releases, medical breakthroughs, and breaking news alerts.</p>
                  </div>
               </div>
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-16 px-12 rounded-2xl bg-[#25D366] text-white font-black text-lg hover:bg-[#128C7E] transition-all shadow-xl shadow-green-200 flex items-center gap-3"
               >
                  Join Media List <ArrowRight className="w-6 h-6" />
               </motion.button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default MediaConnect;
