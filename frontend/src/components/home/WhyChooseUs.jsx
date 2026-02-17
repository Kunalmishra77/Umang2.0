import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Award, CheckCircle2, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import CountUp from '../../components/common/CountUp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const WhyChooseUs = () => {
  const chooseItems = [
    {
      title: "150-Bed Infrastructure",
      desc: "A massive facility featuring 28 ICU beds, Modular OTs, and specialized units for rapid recovery.",
      icon: ShieldCheck,
      img: ASSETS.HOSPITAL_EXTERIOR,
      video: "/assets/Home/150 bed .mp4",
      span: "md:col-span-2",
      path: "/infrastructure",
      features: ["Modular OTs", "28 ICU Beds", "Smart Wards"]
    },
    {
      title: "24/7 Critical Support",
      desc: "Round-the-clock emergency trauma care and fully stocked digital pharmacy.",
      icon: Clock,
      img: ASSETS.AMBULANCE,
      video: "/assets/Home/247 Critical support.mp4",
      span: "col-span-1",
      path: "/services/emergency",
      accent: "text-red-500"
    },
    {
      title: "Modern Technology",
      desc: "Equipped with 128 Slice CT, 3 Tesla MRI, and precision diagnostic labs.",
      icon: Zap,
      img: ASSETS.CT_SCAN,
      video: "/assets/Home/moder technology.mp4",
      span: "col-span-1",
      path: "/health-library/technologies"
    },
    {
      title: "Clinical Excellence",
      desc: "NABH accredited standards ensuring world-class safety and clinical outcomes.",
      icon: Award,
      img: ASSETS.GASTRO,
      video: "/assets/Home/clinical excelence.mp4",
      span: "md:col-span-2",
      path: "/about",
      stat: "52+"
    }
  ];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/20 rounded-full blur-[120px] -mr-100 -mt-100 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] -ml-80 -mb-80 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 lg:mb-16 gap-8">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-2xl text-left"
          >
            <div className="flex items-center gap-3 mb-3">
               <span className="w-10 h-[2px] bg-primary-500 rounded-full" />
               <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px]">Excellence in Care</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Trusted Care in <span className="text-primary-600 italic font-medium">Gurugram</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-base lg:text-lg font-light leading-relaxed max-w-sm text-left lg:text-right"
          >
            Leading the way in medical innovation with a patient-first approach since 2010.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {chooseItems.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className={`${item.span} relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-50`}
            >
              <Link to={item.path} className="absolute inset-0 z-20"></Link>
              
              <div className="absolute inset-0 z-0">
                {item.video ? (
                  <video 
                    src={item.video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.8]"
                  />
                ) : (
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.8]" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              
              <div className="relative z-10 p-6 lg:p-7 w-full h-full flex flex-col justify-end min-h-[220px] md:min-h-[260px] lg:min-h-[280px]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="text-left flex-1">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 mb-4 shadow-2xl group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-500">
                      <item.icon className={`w-5 h-5 ${item.accent || 'text-primary-400'}`} strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-lg lg:text-[1.4rem] font-bold text-white mb-2 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-gray-200 text-[11px] lg:text-[13px] font-light mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 ease-in-out line-clamp-2">
                      {item.desc}
                    </p>

                    {item.features && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.features.map(f => (
                          <span key={f} className="px-2 py-0.5 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-bold text-primary-200 border border-white/10 flex items-center gap-1">
                            <CheckCircle2 className="w-2.5 h-2.5 text-primary-400" /> {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {item.stat && (
                    <div className="shrink-0 flex flex-col items-center justify-center p-4 lg:p-6 bg-white/5 backdrop-blur-2xl rounded-[1.5rem] border border-white/10 shadow-2xl min-w-[110px] group-hover:bg-primary-500/10 transition-colors">
                      <span className="text-2xl lg:text-3xl font-black text-white tracking-tighter mb-0.5"><CountUp to={52} />+</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400">Doctors</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-primary-400 transition-colors">View Details</span>
                   <MoveRight className="w-4 h-4 text-white/20 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
