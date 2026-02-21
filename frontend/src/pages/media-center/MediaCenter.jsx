import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Newspaper, Video, Mail, Radio, ArrowRight, ExternalLink, ShieldCheck as Shield, Award } from 'lucide-react';
import ParallaxImage from '../../components/common/ParallaxImage';
import SpotlightCard from '../../components/common/SpotlightCard';
import MaskText from '../../components/common/MaskText';
import { ASSETS } from '../../utils/imageAssets';
import SeoHead from '../../components/common/SeoHead';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';

const MediaCenter = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-white min-h-screen pt-12 overflow-x-hidden">
      <SeoHead 
        title="Media Center" 
        description="Stay informed with the latest press releases, media coverage, and newsletters from Umang Hospital."
        canonical="/media-center"
      />

      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <ParallaxImage 
            src={ASSETS.PRESS_EVENT || ASSETS.HOSPITAL_EXTERIOR} 
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
      </section>

      {/* SECTION: MEDIA IMPACT STATS (NEW) */}
      <div className="bg-primary-600 py-12 lg:py-16 text-white relative z-30">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Press Mentions", value: "500+" },
              { label: "Reach", value: "10M+" },
              { label: "News Features", value: "150+" },
              { label: "Live Events", value: "25+" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl lg:text-5xl font-black tracking-tighter mb-1">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary-100 opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 2. Media Categories Grid */}
      <section className="pt-12 pb-12 lg:pb-24 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: "Press Releases", slug: "press-release", icon: Newspaper, desc: "Official statements and launch announcements.", color: "text-blue-600" },
              { title: "Media Coverage", slug: "media-coverage", icon: Video, desc: "Umang Hospital in national and global news.", color: "text-red-600" },
              { title: "Newsletters", slug: "newsletters", icon: Mail, desc: "Monthly health digests and community updates.", color: "text-green-600" },
              { title: "Media Connect", slug: "media-connect", icon: Radio, desc: "Resources and contacts for journalists.", color: "text-purple-600" },
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

      {/* SECTION: VIDEO NEWS ARCHIVE (NEW) */}
      <Section className="bg-white">
        <Container>
          <SectionHeading 
            eyebrow="Visual News" 
            title="Umang in Focus" 
            description="Watch our latest televised news features, expert interviews, and facility launch videos."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Advanced Cardiology Launch", source: "Health News India" },
              { title: "CSR Health Camp 2025", source: "Local News Network" },
              { title: "Neuroscience Breakthrough", source: "Science Today" }
            ].map((video, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg mb-6">
                  <img src={ASSETS.SVC_PATHOLOGY} alt="Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-all">
                      <Video className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-1">{video.title}</h4>
                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">{video.source}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Featured News & Updates */}
      <section className="py-12 lg:py-24 bg-gray-50">
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
                        className="flex-1 bg-white rounded-[2rem] p-8 flex flex-col justify-center border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group shadow-sm"
                     >
                        <div className="flex justify-between items-start mb-3">
                           <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{news.cat}</span>
                           <span className="text-gray-400 text-xs font-medium">{news.date}</span>
                        </div>
                        <h4 className="text-xl font-bold text-brand-dark group-hover:text-blue-700 transition-colors leading-snug">{news.title}</h4>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm font-bold text-blue-600">
                           Read More <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* SECTION: PRESS KIT (NEW) */}
      <Section className="bg-white">
        <Container>
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px] opacity-10 -mr-32 -mt-32" />
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Digital Press Kit</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                  Download official high-resolution logos, leadership headshots, and hospital b-roll for editorial use.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Brand Identity", size: "15MB" },
                    { title: "Fact Sheet 2026", size: "2MB" },
                    { title: "Leadership Bios", size: "5MB" },
                    { title: "Image Bank", size: "45MB" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all cursor-pointer flex justify-between items-center">
                      <div>
                        <p className="font-bold text-sm">{item.title}</p>
                        <p className="text-[10px] text-gray-500 uppercase font-black">{item.size} • PDF/ZIP</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary-400 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:pl-12">
                <Card className="!bg-white/5 border border-white/10 !p-10 backdrop-blur-xl">
                  <h4 className="text-xl font-bold mb-6 text-primary-400">Media Accreditation</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8">
                    Registered journalists can request media access for special event coverage and one-on-one specialist interviews.
                  </p>
                  <Link to="/contact/media-connect" className="block w-full py-4 bg-primary-600 text-white text-center rounded-xl font-bold hover:bg-primary-500 transition-all uppercase tracking-widest text-xs">
                    Apply for Access
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Contact CTA */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white relative overflow-hidden">
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
