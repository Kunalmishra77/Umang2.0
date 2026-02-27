import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Newspaper, Download, Calendar, ArrowRight, Search, 
  User, Award, Link as LinkIcon, Share2, Printer, 
  Mail, Phone, FileText, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const releases = [
  {
    id: 1,
    title: "Umang Hospital Inaugurates Advanced Robotic Surgery Wing",
    date: "Jan 25, 2026",
    category: "New Launch",
    excerpt: "The new wing features the latest Da Vinci Xi surgical system, marking a new era in minimally invasive care in Gurugram.",
    img: "https://images.unsplash.com/photo-1551076882-68b47d82a8da?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "National Quality Excellence Award Won by Umang Group",
    date: "Jan 10, 2026",
    category: "Award",
    excerpt: "Recognized for outstanding patient safety protocols and clinical outcomes at the 2026 Healthcare Summit.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Umang Hospital Partners with Global Health Initiative for Rural Outreach",
    date: "Dec 15, 2025",
    category: "Partnership",
    excerpt: "A strategic collaboration to provide free cardiac screenings to over 50 villages in the Haryana region.",
    img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800"
  }
];

const PressRelease = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [downloading, setDownloading] = useState(null);

  const handleDownload = (id) => {
    setDownloading(id);
    setTimeout(() => setDownloading(null), 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Press Releases | Umang Hospital Media Center</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and corporate updates from Umang Hospital." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/localized/press-conference.jpg" 
            alt="Press Conference" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
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
              <Newspaper className="w-4 h-4" /> Official Newsroom
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Latest from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Umang Hospital.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Browse our official press releases, corporate announcements, and clinical milestone updates.
            </p>
            
            <div className="bg-white p-2 rounded-2xl shadow-2xl flex max-w-xl transform hover:scale-105 transition-all duration-300 group">
               <div className="flex-1 flex items-center px-4">
                  <Search className="w-5 h-5 text-gray-400 mr-3 group-focus-within:text-[#005580] transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search news..." 
                    className="w-full h-12 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               <button className="h-12 px-8 bg-[#005580] text-white rounded-xl font-bold hover:bg-[#004466] transition-all">
                  Filter
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Release */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-16">Featured Announcement</h2>
            <Link to={`/media-center/press-release/${releases[0].id}`}>
               <motion.div 
                  whileHover={{ y: -10, boxShadow: "0 30px 60px -12px rgba(0,0,0,0.15)" }}
                  className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row group transition-all duration-500"
               >
                  <div className="lg:w-1/2 relative overflow-hidden h-[400px] lg:h-auto">
                     <img src={releases[0].img} alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                     <div className="absolute top-8 left-8">
                        <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">Latest Release</span>
                     </div>
                  </div>
                  <div className="lg:w-1/2 p-12 flex flex-col justify-center transition-colors group-hover:bg-gray-50/50">
                     <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-6 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> {releases[0].date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="text-blue-600">{releases[0].category}</span>
                     </div>
                     <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-6 group-hover:text-[#005580] transition-colors leading-tight">{releases[0].title}</h3>
                     <p className="text-gray-500 text-lg leading-relaxed mb-10">{releases[0].excerpt}</p>
                     <span className="inline-flex items-center gap-2 text-[#005580] font-bold text-lg">
                        Read Full Statement <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight className="w-5 h-5" /></motion.div>
                     </span>
                  </div>
               </motion.div>
            </Link>
         </div>
      </section>

      {/* 3. Press Release Grid */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-16">All Press Releases</h2>
            <div className="grid md:grid-cols-2 gap-12">
               {releases.slice(1).map((item) => (
                  <motion.div 
                     key={item.id}
                     whileHover={{ x: 10 }}
                     className="flex gap-8 items-start group cursor-pointer border-b border-gray-100 pb-12 transition-all"
                  >
                     <Link to={`/media-center/press-release/${item.id}`} className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-gray-100">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     </Link>
                     <div className="flex-1">
                        <div className="flex items-center gap-3 text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                           {item.category} • {item.date}
                        </div>
                        <Link to={`/media-center/press-release/${item.id}`} className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-[#005580] transition-colors leading-tight block">{item.title}</Link>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">{item.excerpt}</p>
                        <button 
                           onClick={() => handleDownload(item.id)}
                           className="text-sm font-bold text-[#0f172a] flex items-center gap-2 group-hover:text-blue-600 transition-colors"
                        >
                           {downloading === item.id ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Clock className="w-4 h-4" /></motion.div> : <Download className="w-4 h-4" />}
                           {downloading === item.id ? 'Preparing Download...' : 'Download PDF'}
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>
            <div className="mt-16 text-center">
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gray-50 border-2 border-gray-100 rounded-full text-[#0f172a] font-bold hover:bg-white hover:border-[#005580] hover:text-[#005580] transition-all shadow-sm"
               >
                  Load More News
               </motion.button>
            </div>
         </div>
      </section>

      {/* 4. Media Kit */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
         <div className="container-custom relative z-10">
            <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-6 sm:p-12 md:p-20 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="max-w-xl">
                  <h2 className="text-4xl font-serif font-bold mb-6">Media Kit for Journalists</h2>
                  <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                     Access high-resolution hospital imagery, executive headshots, brand guidelines, and our annual fact sheet for your reporting.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                        <FileText className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium">Hospital Profile</span>
                     </div>
                     <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                        <User className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium">Leadership Bio</span>
                     </div>
                  </div>
               </div>
               <button className="h-16 px-10 rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl shadow-blue-900/50">
                  <Download className="w-6 h-6" /> Download All Assets
               </button>
            </div>
         </div>
      </section>

      {/* 5. Leadership Quote */}
      <section className="py-32 bg-white">
         <div className="container-custom max-w-4xl text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-10 text-[#005580]">
               <Award className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-8 leading-relaxed normal">
               "Our commitment to clinical excellence is driven by a passion for human well-being. Every press release we issue is a testament to a life saved or an innovation achieved."
            </h2>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full overflow-hidden mb-4 shadow-lg border-2 border-white">
                  <img src="/assets/images/localized/doctor-thumbnail.jpg" alt="CEO" className="w-full h-full object-cover" />
               </div>
               <h4 className="font-bold text-[#0f172a]">Dr. Vikram Sethi</h4>
               <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Group Medical Director</p>
            </div>
         </div>
      </section>

      {/* 6. Media Contact */}
      <section className="py-12 lg:py-10 bg-gray-50">
         <div className="container-custom">
            <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-6">Media Inquiries</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                     Are you a journalist or media professional? Connect with our Corporate Communications team for official statements and interview scheduling.
                  </p>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 text-gray-700 font-bold">
                        <Mail className="w-5 h-5 text-blue-500" /> Umanghospitalgurugram@gmail.com
                     </div>
                     <div className="flex items-center gap-4 text-gray-700 font-bold">
                        <Phone className="w-5 h-5 text-blue-500" /> +91 124 456 7895
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 w-full">
                  <form className="space-y-4">
                     <input type="text" placeholder="Journalist Name" className="w-full h-14 bg-gray-50 rounded-xl px-6 border border-gray-200 outline-none focus:border-blue-500 transition-all" />
                     <input type="text" placeholder="Media House" className="w-full h-14 bg-gray-50 rounded-xl px-6 border border-gray-200 outline-none focus:border-blue-500 transition-all" />
                     <textarea rows="3" placeholder="Nature of inquiry..." className="w-full bg-gray-50 rounded-xl p-6 border border-gray-200 outline-none focus:border-blue-500 transition-all resize-none"></textarea>
                     <button className="w-full h-14 bg-[#0f172a] text-white rounded-xl font-bold hover:bg-[#005580] transition-all shadow-lg">
                        Submit Media Request
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PressRelease;
