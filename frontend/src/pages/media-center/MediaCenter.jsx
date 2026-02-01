import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Newspaper, Video, Mail, Radio, ArrowRight, ExternalLink } from 'lucide-react';
import ParallaxImage from '../../components/common/ParallaxImage';
import SpotlightCard from '../../components/common/SpotlightCard';
import MaskText from '../../components/common/MaskText';
import { ASSETS } from '../../utils/imageAssets';

const MediaCenter = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-white min-h-screen pt-12 overflow-x-hidden">
      <Helmet>
        <title>Media Center - Umang Hospital</title>
        <meta name="description" content="Stay informed with the latest press releases, media coverage, and newsletters from Umang Hospital." />
      </Helmet>

      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <ParallaxImage 
            src={ASSETS.PRESS_EVENT} 
            alt="Media Center Hero" 
            containerClassName="w-full h-full"
            className="opacity-40 mix-blend-overlay"
            offset={50}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
        </motion.div>

        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 lg:mb-6 px-4 py-2 lg:px-6 lg:py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs backdrop-blur-md"
          >
            Newsroom & Press
          </motion.div>
          
          <MaskText>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 lg:mb-8 leading-tight">
              Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Impact</span>
            </h1>
          </MaskText>
          
          <MaskText delay={0.2}>
            <p className="text-lg lg:text-xl text-blue-100/80 font-light max-w-3xl mx-auto leading-relaxed">
              Explore the latest announcements, breakthrough achievements, and global media recognition of Umang Hospital.
            </p>
          </MaskText>
        </div>
        
        {/* Decorative Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[5%] lg:left-[10%] w-16 h-16 lg:w-24 lg:h-24 bg-blue-500/20 rounded-full blur-[30px] lg:blur-[40px] pointer-events-none" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[5%] lg:top-40 lg:right-[10%] w-20 h-20 lg:w-32 lg:h-32 bg-cyan-500/20 rounded-full blur-[40px] lg:blur-[60px] pointer-events-none" 
        />
      </section>

      {/* 2. Media Categories Grid */}
      <section className="pt-0 pb-12 lg:pb-24 bg-gray-50 relative -mt-16 lg:-mt-20 z-20 rounded-t-[2.5rem] lg:rounded-t-[3rem]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: "Press Releases", slug: "press-release", icon: Newspaper, desc: "Official statements and launch announcements.", img: ASSETS.PRESS_EVENT, color: "text-blue-600" },
              { title: "Media Coverage", slug: "media-coverage", icon: Video, desc: "Umang Hospital in national and global news.", img: ASSETS.NEWS_ANCHOR || ASSETS.PRESS_EVENT, color: "text-red-600" },
              { title: "Newsletters", slug: "newsletters", icon: Mail, desc: "Monthly health digests and community updates.", img: ASSETS.NEWSLETTER || ASSETS.PRESS_EVENT, color: "text-green-600" },
              { title: "Media Connect", slug: "media-connect", icon: Radio, desc: "Resources and contacts for journalists.", img: ASSETS.MICROPHONE || ASSETS.PRESS_EVENT, color: "text-purple-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-[280px] lg:h-[320px]"
              >
                <Link to={`/media-center/${item.slug}`} className="block h-full group">
                  <SpotlightCard className="h-full bg-white rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between border border-gray-100 hover:border-gray-200 shadow-sm hover-lift transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gray-50 rounded-bl-[80px] lg:rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                    
                    <div className="relative z-10">
                       <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-gray-50 flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 ${item.color}`}>
                          <item.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                       </div>
                       <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-2 lg:mb-3 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                       <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-dark transition-colors">
                       <span>Explore</span>
                       <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured News & Updates */}
      <section className="section-padding bg-white">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <h2 className="section-title">Latest Headlines</h2>
                  <p className="text-gray-500 text-lg">Staying ahead of the curve with continuous innovation and compassionate care.</p>
               </div>
               <Link to="/media-center/press-release" className="btn-outline hidden md:flex">
                  View All News
               </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {/* Main Featured Article */}
               <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative group rounded-[2.5rem] overflow-hidden shadow-xl"
               >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <ParallaxImage src={ASSETS.ROBOTIC_SURGERY} alt="Robotic Surgery" className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                     <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Technology</span>
                     <h3 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">Umang Hospital Launches Advanced Robotic Surgery Wing</h3>
                     <p className="text-gray-300 mb-6 line-clamp-2">Marking a new era in precision medicine with the installation of the Da Vinci Xi system.</p>
                     <Link to="/media-center/press-release/1" className="text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Read Full Story <ArrowRight className="w-5 h-5" />
                     </Link>
                  </div>
               </motion.div>

               {/* Side List */}
               <div className="flex flex-col gap-6">
                  {[
                     { title: "National Healthcare Excellence Award 2025", date: "Jan 15, 2026", cat: "Awards" },
                     { title: "Free Cardiac Screening Camp Success", date: "Dec 20, 2025", cat: "Community" },
                     { title: "Partnership with Global Health Initiative", date: "Nov 10, 2025", cat: "Corporate" }
                  ].map((news, idx) => (
                     <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="flex-1 bg-gray-50 rounded-[2rem] p-8 flex flex-col justify-center border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group"
                     >
                        <div className="flex justify-between items-start mb-3">
                           <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{news.cat}</span>
                           <span className="text-gray-400 text-xs font-medium">{news.date}</span>
                        </div>
                        <h4 className="text-xl font-bold text-brand-dark group-hover:text-blue-700 transition-colors leading-snug">{news.title}</h4>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm font-bold text-blue-600">
                           Read More <ExternalLink className="w-3 h-3" />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
            
            <div className="mt-12 text-center md:hidden">
               <Link to="/media-center/press-release" className="btn-outline w-full justify-center">View All News</Link>
            </div>
         </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
         <div className="container-custom relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">For Media Inquiries</h2>
            <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
               Journalists and media houses can reach out to our communications team for official statements, interviews, and high-res assets.
            </p>
            <Link to="/media-center/media-connect" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0f172a] rounded-full font-bold hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all">
               <Mail className="w-5 h-5" /> Contact Press Team
            </Link>
         </div>
      </section>
    </div>
  );
};

export default MediaCenter;
