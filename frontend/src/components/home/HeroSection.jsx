import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, Activity, ChevronRight, ChevronLeft, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    tag: "NABH Accredited",
    title: "World-Class Healthcare",
    subtitle: "Gurugram's leading 150-bedded super-speciality facility.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2500",
    color: "from-[#005580] to-[#0f172a]",
    accent: "text-blue-400"
  },
  {
    id: 2,
    tag: "24/7 Emergency",
    title: "Care When It Matters",
    subtitle: "Level 1 Trauma Centre with rapid response ambulances.",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=2500",
    color: "from-red-900 to-[#0f172a]",
    accent: "text-red-400"
  },
  {
    id: 3,
    tag: "Cardiac Excellence",
    title: "Healthy Hearts",
    subtitle: "Advanced Cath Labs and world-renowned cardiologists.",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=2500",
    color: "from-teal-900 to-[#0f172a]",
    accent: "text-teal-400"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-300, 300], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-5, 5]), { stiffness: 150, damping: 20 });

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

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden bg-[#0f172a] text-white">
      
      {/* 1. Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].color} z-0`}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay" />

      {/* Main Container */}
      <div className="container-custom h-full relative z-10 flex flex-col justify-center pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Typography */}
          <div className="lg:col-span-7 relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
                  <div className={`w-2 h-2 rounded-full ${slides[current].accent.replace('text', 'bg')} animate-pulse`} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{slides[current].tag}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] md:leading-[1] mb-6 tracking-tight drop-shadow-2xl">
                  {slides[current].title}
                </h1>

                <p className="text-lg md:text-2xl text-blue-100/90 font-light mb-8 md:mb-10 max-w-lg leading-relaxed border-l-4 border-blue-500/30 pl-6">
                  {slides[current].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                     <Link 
                       to="/appointments/request" 
                       className="group relative px-8 py-4 bg-white text-[#005580] rounded-full overflow-hidden flex items-center justify-center sm:justify-start gap-3 font-bold tracking-wide shadow-xl transition-all w-full"
                     >
                       <span className="relative z-10">Book Appointment</span>
                       <div className="w-8 h-8 rounded-full bg-[#005580] text-white flex items-center justify-center relative z-10 group-hover:rotate-45 transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                       </div>
                     </Link>
                   </motion.div>
                   
                   <a href="tel:+918929733551" className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all flex items-center justify-center sm:justify-start gap-3 font-bold backdrop-blur-md group w-full sm:w-auto">
                      <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all">
                         <Phone className="w-4 h-4 fill-current" />
                      </div>
                      <span>24/7 Helpline</span>
                   </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-16 md:mt-24 lg:absolute lg:-bottom-24">
               <button onClick={prevSlide} className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors group">
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
               </button>
               <div className="flex gap-2">
                 {slides.map((_, idx) => (
                   <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${current === idx ? 'w-12 bg-white' : 'w-4 bg-white/20'}`} />
                 ))}
               </div>
               <button onClick={nextSlide} className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors group">
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

          {/* RIGHT: Visual Portal with 3D Tilt */}
          <div 
            className="lg:col-span-5 relative h-[500px] lg:h-[650px] hidden lg:block perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
             
             <motion.div 
               style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
               className="relative w-full h-full rounded-[100px_0_100px_0] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-white/10 z-10 bg-black"
             >
                <AnimatePresence mode="popLayout">
                   <motion.img
                      key={current}
                      src={slides[current].image}
                      alt="Hero"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="w-full h-full object-cover"
                   />
                </AnimatePresence>
                
                {/* Floating Card */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  style={{ translateZ: 60 }}
                  className="absolute bottom-10 right-10 bg-[#005580]/80 backdrop-blur-xl border border-white/20 p-6 rounded-3xl w-64 shadow-2xl"
                >
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                         <Activity className="w-5 h-5 text-white" />
                      </div>
                      <div>
                         <p className="text-[10px] text-green-300 font-bold uppercase tracking-wider">Operational Status</p>
                         <p className="font-bold text-white">Emergency Active</p>
                      </div>
                   </div>
                   <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                      <div className="w-[90%] h-full bg-green-500 animate-pulse" />
                   </div>
                </motion.div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;