import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, CalendarCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const AppointmentCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-brand-dark relative overflow-hidden flex items-center justify-center min-h-[600px]">
       {/* Parallax Background */}
       <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <img 
            src={ASSETS.HOSPITAL_EXTERIOR} 
            alt="Hospital Building" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-brand-dark/40" />
       </motion.div>

       {/* Decorative Elements */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="container-custom relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
          >
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.5 }}
               className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-2xl"
             >
               <Clock className="w-3 h-3 text-primary-400" />
               <span>Ready to Serve 24/7</span>
             </motion.div>

             <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Your Health, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300">Our Priority.</span>
             </h2>
             
             <p className="text-xl md:text-2xl text-blue-100/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Experience world-class healthcare with a personal touch. Schedule your consultation with our leading specialists today.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <Link 
                  to="/appointments/request" 
                  className="group relative px-10 py-5 bg-white text-brand-dark rounded-full overflow-hidden flex items-center gap-3 font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1"
                >
                   <span className="relative z-10">Book Appointment Now</span>
                   <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                   <div className="absolute inset-0 bg-primary-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </Link>
                
                <a 
                  href="tel:+918929733551" 
                  className="px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-3 backdrop-blur-sm group"
                >
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4 fill-current" />
                   </div>
                   <span>+91 8929733551</span>
                </a>
             </div>

             <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
                <div className="flex items-center gap-3">
                   <CalendarCheck className="w-6 h-6 text-primary-400" />
                   <span className="text-sm font-bold uppercase tracking-wider text-white">Easy Scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                   <Phone className="w-6 h-6 text-primary-400" />
                   <span className="text-sm font-bold uppercase tracking-wider text-white">Instant Support</span>
                </div>
                <div className="flex items-center gap-3">
                   <ArrowRight className="w-6 h-6 text-primary-400" />
                   <span className="text-sm font-bold uppercase tracking-wider text-white">Walk-ins Welcome</span>
                </div>
             </div>
          </motion.div>
       </div>
    </section>
  );
};

export default AppointmentCTA;
