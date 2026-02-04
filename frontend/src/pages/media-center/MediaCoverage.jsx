import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Play, ExternalLink, Calendar, Newspaper, Video, 
  Search, ArrowRight, Share2, Award, Radio
} from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    source: "Hindustan Times",
    title: "Umang Hospital performs rare 6-organ transplant",
    date: "Jan 22, 2026",
    type: "Digital",
    img: "https://images.unsplash.com/photo-1551076882-68b47d82a8da?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    source: "NDTV News",
    title: "India's first AI-integrated Cardiac Center opens in Gurugram",
    date: "Jan 15, 2026",
    type: "Video",
    img: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    source: "The Economic Times",
    title: "Umang Hospitals expansion plans for 2026 revealed",
    date: "Jan 05, 2026",
    type: "Print",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  }
];

const MediaCoverage = () => {
  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Media Coverage | Umang in the News</title>
        <meta name="description" content="Umang Hospital in the headlines. Watch news segments, read digital articles, and see our impact in the medical world." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/localized/press-conference.jpg" 
            alt="Hospital News" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Video className="w-4 h-4" /> Media Spotlight
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Umang Hospital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">In the Headlines.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed">
              Tracking our impact across digital, print, and broadcast media. See how we are shaping the future of healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Coverage Grid */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <h2 className="text-4xl font-serif font-bold text-[#0f172a]">Featured Headlines</h2>
               <div className="flex gap-4">
                  <motion.div 
                     whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#005580" }}
                     className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 cursor-pointer shadow-sm transition-all"
                  >
                     <Share2 className="w-5 h-5" />
                  </motion.div>
               </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
               {newsItems.map((item) => (
                  <motion.div 
                     key={item.id}
                     whileHover={{ y: -15, boxShadow: "0 30px 60px -12px rgba(0,0,0,0.15)" }}
                     className="bg-white rounded-[3rem] overflow-hidden shadow-sm transition-all duration-500 border border-gray-100 flex flex-col group"
                  >
                     <div className="h-64 relative overflow-hidden">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        {item.type === 'Video' && (
                           <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div 
                                 whileHover={{ scale: 1.2 }}
                                 whileTap={{ scale: 0.9 }}
                                 className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-2xl"
                              >
                                 <Play className="w-6 h-6 fill-current ml-1" />
                              </motion.div>
                           </div>
                        )}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold text-[#005580] uppercase tracking-widest shadow-lg">
                           {item.type}
                        </div>
                     </div>
                     <div className="p-10 flex-1 flex flex-col transition-colors group-hover:bg-gray-50/50">
                        <span className="text-blue-600 font-bold text-sm mb-3 uppercase tracking-widest">{item.source}</span>
                        <h3 className="text-2xl font-bold text-[#0f172a] mb-8 group-hover:text-[#005580] transition-colors leading-tight">{item.title}</h3>
                        <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                           <span className="text-xs text-gray-400 font-bold flex items-center gap-2 uppercase tracking-widest">
                              <Calendar className="w-4 h-4 text-blue-500" /> {item.date}
                           </span>
                           <motion.a 
                              whileHover={{ x: 5, scale: 1.1 }}
                              href="#" 
                              className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-[#005580] group-hover:text-white transition-all shadow-sm border border-gray-100"
                           >
                              <ExternalLink className="w-5 h-5" />
                           </motion.a>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Media Mentions Slider Placeholder */}
      <section className="py-12 lg:py-10 bg-white border-y border-gray-100">
         <div className="container-custom">
            <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Recognized By</h3>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {["Hindustan Times", "TOI", "BBC News", "CNN", "NDTV", "Reuters"].map((pub, i) => (
                  <span key={i} className="text-2xl md:text-3xl font-serif font-black text-[#0f172a]">{pub}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Expert Opinions / Thought Leadership */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-3" />
               <img src="/assets/images/localized/doctor-interview.jpg" alt="Doctor Interview" className="relative rounded-[3rem] shadow-2xl w-full object-cover" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse cursor-pointer">
                  <Play className="w-8 h-8 fill-current ml-1" />
               </div>
            </div>
            <div>
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Opinion Leaders</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8">Expert Insights on Global Health</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Our specialists are frequently invited by leading news channels to provide expert commentary on medical breakthroughs, public health policies, and seasonal wellness tips.
               </p>
               <div className="space-y-6">
                  {[
                     { title: "Managing Post-Pandemic Wellness", source: "Health Asia" },
                     { title: "Future of Robotic Surgery in India", source: "Medical Times" }
                  ].map((op, i) => (
                     <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-blue-200 transition-all">
                        <div>
                           <h4 className="font-bold text-[#0f172a] group-hover:text-[#005580] transition-colors">{op.title}</h4>
                           <p className="text-xs text-gray-400">{op.source}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. Award Highlights */}
      <section className="py-32 bg-[#0f172a] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
         <div className="container-custom relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="md:w-1/2">
                  <Award className="w-16 h-16 text-yellow-400 mb-8" />
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Excellence Recognized Globally.</h2>
                  <p className="text-blue-200 text-lg leading-relaxed opacity-80">
                     Umang Hospital has been honored with multiple national and international awards for clinical safety, innovation, and outstanding patient care programs.
                  </p>
               </div>
               <div className="md:w-1/2 grid grid-cols-2 gap-6">
                  {[
                     { val: "20+", label: "National Awards" },
                     { val: "5+", label: "International Accreditations" },
                     { val: "100+", label: "News Features" },
                     { val: "1M+", label: "Digital Reach" }
                  ].map((stat, i) => (
                     <div key={i} className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10 text-center">
                        <h3 className="text-3xl font-bold mb-2">{stat.val}</h3>
                        <p className="text-xs text-blue-300 uppercase tracking-widest">{stat.label}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. Social Media Buzz */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom text-center">
            <Radio className="w-12 h-12 text-[#005580] mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-4">Stay Connected</h2>
            <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
               Follow us on social media for real-time updates, health tips, and behind-the-scenes looks at our medical miracles.
            </p>
            <div className="flex justify-center gap-6">
               {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map((social, i) => (
                  <a key={i} href="#" className="h-14 px-8 rounded-xl border border-gray-200 text-gray-600 font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
                     {social}
                  </a>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default MediaCoverage;
