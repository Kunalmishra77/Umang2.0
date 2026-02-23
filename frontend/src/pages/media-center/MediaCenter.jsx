import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Newspaper, Video, Mail, Radio, ArrowRight, ExternalLink, 
  ShieldCheck as Shield, Award, Download, Users, Star,
  Globe, Heart, Play, Calendar, Search, MessageSquare, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
        title="Media Center - News, Press & Updates" 
        description="Stay informed with the latest press releases, media coverage, and newsletters from Umang Hospital."
        canonical="/media-center"
      />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[60vh] lg:h-[70vh] min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <ParallaxImage 
            src={ASSETS.SVC_PATHOLOGY} 
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
            Newsroom & Global Press
          </motion.div>
          
          <MaskText>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 lg:mb-8 leading-tight tracking-tighter">
              Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">Impact.</span>
            </h1>
          </MaskText>
          
          <MaskText delay={0.2}>
            <p className="text-lg lg:text-xl text-blue-100/80 font-light max-w-3xl mx-auto leading-relaxed">
              Explore the latest announcements, breakthrough clinical achievements, and global media recognition of Umang Hospital.
            </p>
          </MaskText>
        </div>
      </section>

      {/* 2. MEDIA IMPACT STATS */}
      <div className="bg-primary-600 py-12 lg:py-16 text-white relative z-30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center relative z-10">
            {[
              { label: "Press Mentions", value: "500+" },
              { label: "Digital Reach", value: "10M+" },
              { label: "News Features", value: "150+" },
              { label: "Live Events", value: "25+" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl lg:text-5xl font-serif font-bold tracking-tighter mb-1">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary-100 opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. MEDIA CATEGORIES GRID */}
      <section className="pt-24 pb-24 bg-gray-50 overflow-hidden border-b border-gray-100">
        <div className="container-custom">
          <SectionHeading eyebrow="Resources" title="Explore Our Media Hub" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {[
              { title: "Press Releases", slug: "press-release", icon: Newspaper, desc: "Official statements and launch announcements.", color: "text-blue-600" },
              { title: "Media Coverage", slug: "media-coverage", icon: Video, desc: "Umang Hospital in national and global news.", color: "text-red-600" },
              { title: "Newsletters", slug: "newsletters", icon: Mail, desc: "Monthly health digests and community updates.", color: "text-green-600" },
              { title: "Media Connect", slug: "media-connect", icon: Radio, desc: "Resources and contacts for journalists.", color: "text-purple-600" },
            ].map((item, i) => (
              <Link to={`/media-center/${item.slug}`} key={i} className="group">
                <SpotlightCard className="h-full bg-white rounded-[2.5rem] p-10 flex flex-col justify-between border border-gray-100 group-hover:border-primary-200 shadow-sm hover:shadow-premium transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                  
                  <div className="relative z-10">
                     <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-gray-100 ${item.color}`}>
                        <item.icon size={28} />
                     </div>
                     <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="relative z-10 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-dark transition-colors pt-10">
                     <span>Enter Hub</span>
                     <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VIDEO NEWS ARCHIVE */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeading 
              eyebrow="Visual News" 
              title="Umang in <span class='text-primary-600'>Focus.</span>" 
              description="Watch our latest televised news features, expert interviews, and facility launch videos."
              className="!mb-0"
            />
            <button className="btn-outline">Browse All Videos</button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Advanced Cardiology Launch", source: "Health News India", img: ASSETS.ABOUT_BEACON },
              { title: "CSR Health Camp 2025", source: "Local News Network", img: ASSETS.ABOUT_GLOBAL },
              { title: "Neuroscience Breakthrough", source: "Science Today", img: ASSETS.ROBOTIC_SURGERY }
            ].map((video, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-lg mb-6">
                  <img src={video.img} alt="Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-all">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-600">
                    4:20 Mins
                  </div>
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-primary-600 transition-colors">{video.title}</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{video.source}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. LATEST HEADLINES (ENHANCED) */}
      <section className="py-32 bg-gray-50 border-y border-gray-100 overflow-hidden">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
               <div className="max-w-2xl text-left">
                  <span className="section-subtitle">Live Updates</span>
                  <h2 className="section-title">Latest Headlines</h2>
                  <p className="text-gray-500 text-lg">Staying ahead of the curve with continuous innovation and compassionate care.</p>
               </div>
               <Link to="/media-center/press-release" className="px-10 py-4 bg-white border border-gray-200 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-sm hidden md:flex items-center gap-2">
                  All Press Releases <ArrowRight size={16} />
               </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
               {/* Main Featured Article */}
               <motion.div 
                  whileHover={{ y: -10 }}
                  className="relative group rounded-[3.5rem] overflow-hidden shadow-2xl h-full flex flex-col"
               >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                  <img src={ASSETS.ROBOTIC_SURGERY} alt="Robotic Surgery" className="h-[600px] w-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-12 lg:p-16 z-20 w-full">
                     <span className="bg-primary-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Breaking News</span>
                     <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">Umang Hospital Launches Advanced Robotic Surgery Wing</h3>
                     <p className="text-gray-300 text-lg mb-10 line-clamp-2 font-light">Marking a new era in precision medicine with the installation of the latest Da Vinci system.</p>
                     <Link to="/media-center/press-release/1" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-[0.2em] text-[10px] group/link">
                        Read Investigation <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-brand-dark transition-all"><ArrowRight size={16} /></div>
                     </Link>
                  </div>
               </motion.div>

               {/* Side List */}
               <div className="flex flex-col gap-8">
                  {[
                     { title: "National Healthcare Excellence Award 2025", date: "Jan 15, 2026", cat: "Recognition", icon: Award, color: "text-yellow-500" },
                     { title: "Free Cardiac Screening Camp Success", date: "Dec 20, 2025", cat: "Community", icon: Heart, color: "text-rose-500" },
                     { title: "Partnership with Global Health Initiative", date: "Nov 10, 2025", cat: "Corporate", icon: Globe, color: "text-blue-500" }
                  ].map((news, idx) => (
                     <motion.div 
                        key={idx}
                        whileHover={{ x: 15 }}
                        className="flex-1 bg-white rounded-[2.5rem] p-10 flex flex-col justify-center border border-gray-100 hover:border-primary-200 hover:shadow-premium transition-all cursor-pointer group"
                     >
                        <div className="flex justify-between items-center mb-6">
                           <div className="flex items-center gap-3">
                              <news.icon size={16} className={news.color} />
                              <span className="text-primary-600 text-[10px] font-black uppercase tracking-widest">{news.cat}</span>
                           </div>
                           <span className="text-slate-400 text-xs font-bold">{news.date}</span>
                        </div>
                        <h4 className="text-2xl font-bold text-brand-dark group-hover:text-primary-700 transition-colors leading-snug">{news.title}</h4>
                        <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-600">
                           Full Coverage <ArrowRight size={14} />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. PRESS KIT DOWNLOAD HUB (NEW) */}
      <Section className="bg-white">
        <Container>
          <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[140px] opacity-10 -mr-32 -mt-32" />
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">For Editorial Use</span>
                <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-8">Digital Press Kit</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                  Download official high-resolution brand assets, leadership headshots, and hospital b-roll for your news features.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Brand Identity", size: "15MB", icon: FileText },
                    { title: "Fact Sheet 2026", size: "2MB", icon: Calendar },
                    { title: "Leadership Bios", size: "5MB", icon: Users },
                    { title: "Image Bank", size: "45MB", icon: ASSETS.HOSPITAL_EXTERIOR ? Search : Shield }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all cursor-pointer flex justify-between items-center shadow-lg">
                      <div>
                        <p className="font-bold text-base mb-1">{item.title}</p>
                        <p className="text-[10px] text-primary-400 uppercase font-black">{item.size} • PDF/ZIP</p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all">
                        <Download size={18} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:pl-12">
                <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-2xl rotate-12">
                    <Star className="text-white fill-current" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-6 text-primary-400">Journalist Access</h4>
                  <p className="text-slate-400 leading-relaxed mb-10 font-light">
                    Registered media professionals can request accreditation for special event coverage and one-on-one specialist interviews.
                  </p>
                  <Link to="/contact/media-connect" className="block w-full py-5 bg-white text-brand-dark text-center rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary-50 transition-all shadow-xl active:scale-95">
                    Apply for Accreditation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. SOCIAL WALL CTA (NEW) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-20">
            <span className="section-subtitle">Real-time Pulse</span>
            <h2 className="section-title">Follow Our Journey</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Facebook', id: '@UmangHospital', icon: Globe, color: 'text-blue-600' },
              { label: 'Twitter', id: '@UmangCare', icon: Radio, color: 'text-sky-500' },
              { label: 'Linkedin', id: 'Umang Superspeciality', icon: Users, color: 'text-blue-700' },
              { label: 'Instagram', id: '@umang_hospital', icon: ASSETS.SNEHA_KAPOOR ? Search : MessageSquare, color: 'text-pink-600' }
            ].map((social, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-gray-100 flex flex-col items-center group hover:shadow-premium transition-all cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 ${social.color} group-hover:scale-110 transition-transform`}>
                  <social.icon size={32} />
                </div>
                <span className="font-black text-brand-dark text-[10px] uppercase tracking-widest mb-1">{social.label}</span>
                <span className="font-bold text-slate-400 text-sm">{social.id}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. CSR & COMMUNITY MEDIA (NEW) */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="Beyond Medicine" 
                title="Community & <span class='text-primary-600'>CSR Impact.</span>" 
                description="Our commitment to societal health is reflected in our regular community outreach programs, captured by leading news outlets."
              />
              <div className="space-y-8 mt-10">
                {[
                  { title: "Project Swasthya 2025", desc: "Reaching 10,000+ rural citizens with primary health checkups." },
                  { title: "Eco-Hospital Initiative", desc: "Umang Hospital goes solar - covered by Green Digest." }
                ].map((csr, i) => (
                  <div key={i} className="flex gap-6 group cursor-pointer">
                    <div className="w-1.5 h-12 bg-primary-100 rounded-full group-hover:bg-primary-600 transition-all" />
                    <div>
                      <h4 className="font-bold text-xl text-brand-dark group-hover:text-primary-600 transition-colors">{csr.title}</h4>
                      <p className="text-slate-500 text-sm">{csr.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <img src={ASSETS.ABOUT_GLOBAL} alt="CSR" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute inset-0 border-[20px] border-white/10 rounded-[3rem] scale-105 -z-10" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. MEDIA CONTACT HUB (ENHANCED) */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-600/10 to-transparent" />
         <div className="container-custom relative z-10 text-center">
            <Radio className="w-16 h-16 text-primary-400 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8">Media & Press Desk</h2>
            <p className="text-primary-100 text-xl max-w-2xl mx-auto mb-16 opacity-80 font-light leading-relaxed">
               For official statements, interview requests with our senior medical faculty, or high-res assets, connect with our communications hub.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
               <a href={`mailto:${siteConfig.contacts.email}`} className="px-12 py-6 bg-white text-brand-dark rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary-50 transition-all shadow-xl flex items-center gap-3">
                  <Mail size={18} /> Email Desk
               </a>
               <Link to="/media-center/media-connect" className="px-12 py-6 border-2 border-white/20 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all flex items-center gap-3">
                  <Radio size={18} /> Media Connect Hub
               </Link>
            </div>
         </div>
      </section>

      {/* 10. NEWSLETTER SIGNUP (ENHANCED) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-slate-100 shadow-sm">
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-brand-dark mb-4">Stay in the Loop.</h3>
              <p className="text-slate-500 font-medium">Get the latest healthcare news and hospital updates delivered monthly.</p>
            </div>
            <div className="w-full lg:w-max flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Your Work Email" className="h-14 px-8 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-primary-500/20 transition-all min-w-[300px]" />
              <button className="h-14 px-10 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg active:scale-95">Subscribe</button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default MediaCenter;