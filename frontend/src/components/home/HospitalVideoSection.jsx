import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const chips = ['NABH Accredited', '150-Bed Facility', '24/7 Emergency'];

const HospitalVideoSection = () => {
  return (
    <section className="section-padding bg-white overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="mb-6 lg:mb-8">
               <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] md:text-sm mb-3 block">Virtual Hospital Tour</span>
               <h3 className="text-xl lg:text-2xl font-serif font-bold text-brand-dark">World-Class Infrastructure</h3>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden border-4 lg:border-[12px] border-white shadow-2xl bg-[#0f172a] aspect-video lg:aspect-[4/3] group"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={ASSETS.HOSPITAL_EXTERIOR}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src="/assets/Home/umange-about.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-60" />
              
              {/* Play Indicator Overlay - Shrunk and Top-Left */}
              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary-600/30 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-xl shadow-primary-900/40">
                       <Activity className="w-3.5 h-3.5 lg:w-4 lg:h-4 animate-pulse" />
                    </div>
                 </div>
              </div>

              {/* Right-aligned overlay text (Refined) */}
              <div className="absolute bottom-6 right-6 text-right pointer-events-none">
                <p className="text-white font-black text-sm lg:text-base leading-tight mb-0.5 uppercase tracking-tight opacity-90">Umang <span className="text-primary-400 italic">Hospital</span></p>
                <p className="text-white/50 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em]">Gurugram, India</p>
              </div>
            </motion.div>

            {/* Decorative element to fill space */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-subtitle mb-4">The Umang Experience</span>
              <h2 className="section-title mb-8">
                Next-Gen Infrastructure with a <span className="text-primary-600 italic font-medium">Human Touch.</span>
              </h2>
              
              <div className="space-y-8 mb-10">
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-light">
                  In the world of high-end technology, we never lose the human connection. Our care model combines advanced infrastructure with deep empathy.
                </p>

                <div className="grid sm:grid-cols-1 gap-4">
                  {chips.map((chip) => (
                    <div key={chip} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm lg:text-base font-bold text-brand-dark group-hover:text-primary-600 transition-colors">{chip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="h-14 px-8 bg-primary-600 text-white rounded-xl flex items-center gap-3 font-bold text-sm hover:bg-primary-500 transition-all shadow-[0_15px_30px_-5px_rgba(2,132,199,0.4)] active:scale-95">
                  Explore Hospital <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/team" className="h-14 px-8 border-2 border-brand-dark/10 text-brand-dark rounded-xl flex items-center gap-3 font-bold text-sm hover:bg-gray-50 transition-all active:scale-95">
                  Our Leadership
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalVideoSection;
