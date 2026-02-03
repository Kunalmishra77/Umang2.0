import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, Download, Calendar, ArrowRight, CheckCircle, 
  BookOpen, Star, Users, Bell, Search, ChevronDown, 
  Heart, Shield, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const archives = [
  { id: 1, title: "January 2026 - New Year, New Health Goals", date: "Jan 01, 2026", size: "2.4 MB", img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "December 2025 - Winter Wellness Guide", date: "Dec 01, 2025", size: "3.1 MB", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "November 2025 - Diabetes Awareness Special", date: "Nov 01, 2025", size: "2.8 MB", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "October 2025 - Mental Health Matters", date: "Oct 01, 2025", size: "2.5 MB", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600" }
];

const Newsletters = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Umang Pulse Newsletter | Media Center</title>
        <meta name="description" content="Subscribe to Umang Pulse, our monthly health newsletter. Get expert tips, hospital updates, and wellness guides delivered to your inbox." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[650px] flex items-center bg-[#005580] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=2000" 
            alt="Newsletter" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005580] via-[#005580]/90 to-transparent" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-cyan-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Bell className="w-4 h-4" /> Monthly Health Digest
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Umang <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Pulse.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12 max-w-xl">
              Stay connected with your health. Get the latest medical news, wellness tips, and hospital updates delivered right to your inbox every month.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 bg-white/10 p-2 rounded-2xl border border-white/20 max-w-lg transition-all focus-within:bg-white/20">
               <input 
                 type="email" 
                 required
                 placeholder="Enter your email address" 
                 className="flex-1 h-14 bg-transparent px-4 outline-none text-white placeholder-blue-200 font-medium"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={submitting}
                  className="h-14 px-10 rounded-xl bg-white text-[#005580] font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
               >
                  {submitting ? <div className="w-5 h-5 border-2 border-[#005580] border-t-transparent rounded-full animate-spin" /> : <>Subscribe Now <ArrowRight className="w-4 h-4" /></>}
               </motion.button>
            </form>
            <AnimatePresence>
               {subscribed && (
                  <motion.p 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0 }}
                     className="mt-6 text-green-400 font-bold flex items-center gap-2"
                  >
                     <CheckCircle className="w-5 h-5" /> Subscribed successfully! Welcome to the community.
                  </motion.p>
               )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="relative z-10 bg-white rounded-[3rem] shadow-2xl p-4 border border-white/10 group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" 
                  alt="Magazine" 
                  className="rounded-[2.5rem] shadow-lg w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-[2.5rem] opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-12 left-12 right-12 text-white">
                   <p className="text-cyan-300 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2"><div className="w-8 h-[1px] bg-cyan-300" /> Latest Issue</p>
                   <h3 className="text-4xl font-serif font-bold group-hover:text-cyan-300 transition-colors">New Year Edition 2026</h3>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What's Inside Section */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Inside Every Issue</h2>
               <p className="text-gray-500 text-xl leading-relaxed">
                  We curate content that empowers you to lead a healthier, more informed life.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: "Expert Columns", desc: "Deep dives into medical topics by our senior consultants.", icon: BookOpen, color: "text-blue-600 bg-blue-50" },
                  { title: "Patient Stories", desc: "Inspirational recovery journeys from our community.", icon: Heart, color: "text-red-600 bg-red-50" },
                  { title: "Wellness Tips", desc: "Practical nutrition, exercise, and mental health advice.", icon: Star, color: "text-yellow-600 bg-yellow-50" },
                  { title: "Hospital News", desc: "Updates on new technologies, launches, and events.", icon: Shield, color: "text-green-600 bg-green-50" }
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ 
                        y: -15,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                     }}
                     className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all duration-500 group flex flex-col items-center text-center"
                  >
                     <div className={`w-20 h-20 rounded-[2rem] ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <item.icon className="w-10 h-10" />
                     </div>
                     <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{item.title}</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Archives Grid */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div>
                  <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">Past Issues</h2>
                  <p className="text-gray-500 text-lg">Browse our complete archive of health knowledge.</p>
               </div>
               <div className="flex gap-4">
                  <div className="relative">
                     <select className="h-14 pl-8 pr-12 rounded-2xl border-2 border-gray-100 bg-white font-bold text-gray-600 outline-none focus:border-[#005580] appearance-none cursor-pointer shadow-sm">
                        <option>Year 2026</option>
                        <option>Year 2025</option>
                     </select>
                     <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {archives.map((issue) => (
                  <motion.div 
                     key={issue.id}
                     whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
                     }}
                     className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-500 border border-gray-100 flex flex-col group"
                  >
                     <div className="h-56 relative overflow-hidden">
                        <img src={issue.img} alt={issue.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-[#005580] uppercase tracking-widest shadow-lg">
                           PDF Edition
                        </div>
                     </div>
                     <div className="p-8 flex-1 flex flex-col">
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">{issue.date}</p>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-8 line-clamp-2 group-hover:text-[#005580] transition-colors leading-tight">{issue.title}</h3>
                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                           <span className="text-xs text-gray-400 font-bold">{issue.size}</span>
                           <motion.button 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 text-[#005580] font-bold text-sm"
                           >
                              Download <Download className="w-4 h-4" />
                           </motion.button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Preference Center Section */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">Customize Your Experience</h2>
               <p className="text-blue-200 text-lg mb-10 leading-relaxed">
                  Tailor the content you receive. Select your areas of interest and preferred frequency to make Umang Pulse work for you.
               </p>
               <div className="space-y-6">
                  {[
                     { title: "Multiple Categories", desc: "Choose from Oncology, Cardiac, Wellness, and more." },
                     { title: "Frequency Control", desc: "Weekly highlights or Monthly deep-dives." },
                     { title: "Format Choice", desc: "Digital interactive or printable PDF editions." }
                  ].map((feat, i) => (
                     <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                           <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-1">{feat.title}</h4>
                           <p className="text-gray-400 text-sm">{feat.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="bg-white text-gray-900 rounded-[3rem] p-10 shadow-2xl">
               <h3 className="text-2xl font-bold mb-8">Manage Preferences</h3>
               <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-2 gap-4">
                     {["Wellness", "Cardiology", "Neurology", "Pediatrics", "Nutrition", "Oncology"].map((pref) => (
                        <label key={pref} className="flex items-center gap-3 cursor-pointer group">
                           <input type="checkbox" className="w-5 h-5 rounded border-gray-200 text-[#005580] focus:ring-[#005580]" />
                           <span className="text-sm font-medium text-gray-600 group-hover:text-[#005580] transition-colors">{pref}</span>
                        </label>
                     ))}
                  </div>
               </div>
               <button className="w-full h-14 bg-[#005580] text-white rounded-xl font-bold hover:bg-[#004466] transition-all shadow-lg">
                  Update Preferences
               </button>
            </div>
         </div>
      </section>

      {/* 5. Special Editions */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-16 text-center">Special Theme Editions</h2>
            <div className="grid md:grid-cols-2 gap-12">
               {[
                  { title: "2025 Annual Impact Report", desc: "A comprehensive look at our year in clinical outcomes and community impact.", color: "bg-blue-600" },
                  { title: "The Oncology Guide 2026", desc: "Essential reading for patients and families fighting cancer with hope.", color: "bg-pink-600" }
               ].map((item, i) => (
                  <div key={i} className={`${item.color} rounded-[2.5rem] p-12 text-white relative overflow-hidden group cursor-pointer`}>
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                     <h3 className="text-3xl font-serif font-bold mb-4 relative z-10">{item.title}</h3>
                     <p className="text-white/80 text-lg mb-8 relative z-10 leading-relaxed">{item.desc}</p>
                     <span className="inline-flex items-center gap-2 font-bold relative z-10 hover:gap-4 transition-all">
                        View Edition <ArrowRight className="w-5 h-5" />
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Community Corner Highlights */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <img 
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1000" 
                  alt="Community" 
                  className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
               />
            </div>
            <div className="order-1 lg:order-2">
               <span className="text-[#005580] font-bold uppercase tracking-widest text-xs mb-6 block">Community Voice</span>
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">Featured in the Pulse: Patient Stories</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Every issue features a segment dedicated to our patients. It's a space for sharing, healing, and celebrating the indomitable human spirit. Read how your neighbors found hope at Umang.
               </p>
               <Link to="/patient-corner/patient-stories" className="inline-flex items-center gap-2 text-[#005580] font-bold text-lg hover:gap-4 transition-all">
                  Read More Stories <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Newsletters;
