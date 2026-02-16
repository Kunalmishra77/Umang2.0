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
    <section ref={ref} className="section-padding bg-[#020617] relative overflow-hidden flex items-center justify-center min-h-[380px]">
       {/* Parallax Background */}
       <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <img 
            src={ASSETS.HOSPITAL_EXTERIOR} 
            alt="Hospital Building" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
       </motion.div>

       {/* Decorative Elements */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="container-custom relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto"
          >
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.5 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[12px] font-black uppercase tracking-[0.2em] mb-6 shadow-2xl"
             >
               <Clock className="w-3.5 h-3.5 text-primary-400" />
               <span>Ready to Serve 24/7</span>
             </motion.div>

             <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                Your Health, <br />
                <span className="hero-gradient-text italic">Our Priority.</span>
             </h2>
             
             <p className="text-base md:text-xl text-blue-100/60 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Experience world-class healthcare with a personal touch. Schedule your consultation with our leading specialists today.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Link 
                  to="/appointments/request" 
                  className="group relative px-8 py-4 bg-white text-brand-dark rounded-xl overflow-hidden flex items-center gap-3 font-bold text-sm shadow-xl hover:shadow-primary-500/20 transition-all transform hover:-translate-y-1"
                >
                   <span className="relative z-10">Book Appointment</span>
                   <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                   <div className="absolute inset-0 bg-primary-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </Link>
                
                <a 
                  href="tel:+918929733550" 
                  className="px-8 py-4 rounded-xl border-2 border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 backdrop-blur-sm group"
                >
                   <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-3.5 h-3.5 fill-current" />
                   </div>
                   <span>+91 89297 33550</span>
                </a>
             </div>
          </motion.div>
       </div>
    </section>
  );
};

export default AppointmentCTA;
