import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Activity, ChevronRight, ChevronLeft, MousePointer2, Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../common/ParallaxImage';
import MaskText from '../common/MaskText';
import HeroOverlay from './HeroOverlay';

const slides = [
  {
    id: 1,
    tag: "NABH Accredited",
    title: "World-Class Healthcare",
    subtitle: "Gurugram's leading 100-bedded super-speciality facility.",
    image: ASSETS.HOSPITAL_EXTERIOR,
    color: "from-[#005580] to-[#0f172a]",
    accent: "text-blue-400"
  },
  {
    id: 2,
    tag: "24/7 Emergency",
    title: "Care When It Matters",
    subtitle: "Level 1 Trauma Centre with rapid response ambulances.",
    image: ASSETS.ICU,
    color: "from-red-900 to-[#0f172a]",
    accent: "text-red-400"
  },
  {
    id: 3,
    tag: "Cardiac Excellence",
    title: "Healthy Hearts",
    subtitle: "Advanced Cath Labs and world-renowned cardiologists.",
    image: ASSETS.CARDIAC_HERO,
    color: "from-teal-900 to-[#0f172a]",
    accent: "text-teal-400"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  
  // 3D Tilt & Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-300, 300], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-5, 5]), { stiffness: 150, damping: 20 });
  
  // Parallax Layers
  const moveX1 = useSpring(useTransform(x, [-300, 300], [-15, 15]), { stiffness: 100, damping: 20 });
  const moveY1 = useSpring(useTransform(y, [-300, 300], [-15, 15]), { stiffness: 100, damping: 20 });
  
  const moveX2 = useSpring(useTransform(x, [-300, 300], [-30, 30]), { stiffness: 100, damping: 20 });
  const moveY2 = useSpring(useTransform(y, [-300, 300], [-30, 30]), { stiffness: 100, damping: 20 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)), 7000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#0f172a] text-white">
      
      {/* 1. Background Gradient & Noise */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].color} z-0`}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay pointer-events-none" />
      <HeroOverlay color={slides[current].color.split(' ')[1]} />

      {/* Main Container */}
      <div className="container-custom h-full relative z-10 flex flex-col justify-center pt-24 pb-12 lg:pt-20 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          
          {/* LEFT: Typography */}
          <div className="lg:col-span-7 relative z-20 order-2 lg:order-1 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 lg:gap-3 px-3 py-1.5 lg:px-5 lg:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 lg:mb-8 hover:bg-white/10 transition-colors cursor-default mx-auto lg:mx-0">
                  <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${slides[current].accent.replace('text', 'bg')} animate-pulse shadow-[0_0_10px_currentColor]`} />
                  <span className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.25em]">{slides[current].tag}</span>
                </motion.div>

                <div className="mb-4 lg:mb-6">
                  <MaskText>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] lg:leading-[1] tracking-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                      {slides[current].title}
                    </h1>
                  </MaskText>
                </div>

                <div className="mb-8 lg:mb-10 max-w-2xl border-l-0 lg:border-l-2 border-white/20 pl-0 lg:pl-6 mx-auto lg:mx-0">
                  <MaskText delay={0.2}>
                    <p className="text-lg md:text-2xl lg:text-4xl text-blue-100/90 font-light leading-snug tracking-wide">
                      {slides[current].subtitle}
                    </p>
                  </MaskText>
                </div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center lg:justify-start">
                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                     <Link 
                       to="/appointments/request" 
                       className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-white text-[#0f172a] rounded-full overflow-hidden flex items-center justify-center sm:justify-start gap-4 font-bold tracking-wide shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.4)] transition-all w-full text-sm lg:text-base"
                     >
                       <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       <span className="relative z-10">Book Appointment</span>
                       <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#0f172a] text-white flex items-center justify-center relative z-10 group-hover:rotate-45 transition-all duration-300">
                          <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
                       </div>
                     </Link>
                   </motion.div>
                   
                   <motion.a 
                      href="tel:+918929733550" 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 lg:px-10 lg:py-5 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center sm:justify-start gap-4 font-bold backdrop-blur-md group w-full sm:w-auto text-sm lg:text-base"
                    >
                      <div className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                         <Phone className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                      </div>
                      <span>24/7 Helpline</span>
                   </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-12 md:mt-16 lg:mt-24 lg:absolute lg:-bottom-16">
               <button onClick={prevSlide} className="p-3 lg:p-4 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/50 transition-all group backdrop-blur-sm">
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" />
               </button>
               <div className="flex gap-3">
                 {slides.map((_, idx) => (
                   <button 
                    key={idx} 
                    onClick={() => setCurrent(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${current === idx ? 'w-12 lg:w-16 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'w-3 lg:w-4 bg-white/20 hover:bg-white/40'}`} 
                   />
                 ))}
               </div>
               <button onClick={nextSlide} className="p-3 lg:p-4 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/50 transition-all group backdrop-blur-sm">
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

          {/* RIGHT: Visual Portal with 3D Tilt */}
          <div 
            className="lg:col-span-5 relative h-[280px] md:h-[400px] lg:h-[650px] block perspective-[2000px] mt-0 lg:mt-0 order-1 lg:order-2"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
             
             <motion.div 
               style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
               className="relative w-full h-full rounded-[120px_0_120px_0] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-4 border-white/10 z-10 bg-black group"
             >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                
                <AnimatePresence mode="popLayout">
                   <motion.div
                      key={current}
                      initial={{ scale: 1.3, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.1, opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-full h-full"
                   >
                      <ParallaxImage 
                        src={slides[current].image} 
                        alt="Hero" 
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover"
                        offset={40}
                      />
                   </motion.div>
                </AnimatePresence>
                
                {/* Floating Badge 1: Top Right */}
                <motion.div
                  style={{ x: moveX1, y: moveY1, translateZ: 40 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute top-12 right-8 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full hidden lg:flex items-center gap-2 shadow-xl z-20"
                >
                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
                   <span className="text-xs font-bold uppercase tracking-wider">Top Rated</span>
                </motion.div>

                {/* Main Floating Card */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    default: { delay: 0.5, duration: 0.8 }
                  }}
                  style={{ translateZ: 80 }}
                  className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-white/10 backdrop-blur-2xl border border-white/20 p-2 lg:p-6 rounded-full lg:rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] z-20 hover-lift cursor-default flex items-center gap-3 lg:block lg:w-72"
                >
                   <div className="flex items-center gap-2 lg:gap-4 lg:mb-4">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shrink-0">
                         <Activity className="w-4 h-4 lg:w-6 lg:h-6 text-emerald-400" />
                      </div>
                      <div>
                         <p className="hidden lg:block text-[11px] text-emerald-400 font-bold uppercase tracking-widest mb-0.5">Live Status</p>
                         <p className="text-[10px] lg:text-lg font-bold text-white leading-none whitespace-nowrap lg:whitespace-normal">Emergency Ready</p>
                      </div>
                   </div>
                   <div className="hidden lg:block w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="w-[100%] h-full bg-emerald-500 animate-[pulse_2s_infinite]" />
                   </div>
                   <div className="hidden lg:block mt-2 text-right">
                      <span className="text-[10px] text-white/60 font-medium">Avg Response: &lt;5 mins</span>
                   </div>
                </motion.div>
             </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 2, duration: 1 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
           <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 1.5, repeat: Infinity }}
           >
              <MousePointer2 className="w-5 h-5" />
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
