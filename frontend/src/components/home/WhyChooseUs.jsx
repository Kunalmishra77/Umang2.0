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
      span: "md:col-span-2",
      path: "/infrastructure",
      features: ["Modular OTs", "28 ICU Beds", "Smart Wards"]
    },
    {
      title: "24/7 Critical Support",
      desc: "Round-the-clock emergency trauma care and fully stocked digital pharmacy.",
      icon: Clock,
      img: ASSETS.AMBULANCE,
      span: "col-span-1",
      path: "/services/emergency",
      accent: "text-red-500"
    },
    {
      title: "Modern Technology",
      desc: "Equipped with 128 Slice CT, 3 Tesla MRI, and precision diagnostic labs.",
      icon: Zap,
      img: ASSETS.CT_SCAN,
      span: "col-span-1",
      path: "/health-library/technologies"
    },
    {
      title: "Clinical Excellence",
      desc: "NABH accredited standards ensuring world-class safety and clinical outcomes.",
      icon: Award,
      img: ASSETS.GASTRO,
      span: "md:col-span-2",
      path: "/about",
      stat: "52+"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-50/50 rounded-full blur-[120px] -mr-100 -mt-100 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -ml-80 -mb-80 pointer-events-none" />

      <div className="container-custom relative z-10 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 lg:mb-24 gap-8">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-3xl text-left"
          >
            <div className="flex items-center gap-3 mb-4">
               <span className="w-10 h-[2px] bg-primary-500 rounded-full" />
               <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px] lg:text-xs">Excellence in Care</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
              The Gold Standard of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400 italic font-medium">Healthcare in Gurugram</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg lg:text-xl font-light leading-relaxed max-w-sm text-left lg:text-right"
          >
            Leading the way in medical innovation with a patient-first approach since 2010.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {chooseItems.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className={`${item.span} relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-gray-100`}
            >
              <Link to={item.path} className="absolute inset-0 z-20"></Link>
              
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.7]" 
                />
                {/* DARKER OVERLAY FOR PREMIUM FEEL */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-primary-950/20 mix-blend-overlay" />
              </div>
              
              <div className="relative z-10 p-8 lg:p-12 w-full h-full flex flex-col justify-end min-h-[350px] lg:min-h-[400px]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="text-left flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 mb-6 shadow-2xl group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-500">
                      <item.icon className={`w-7 h-7 ${item.accent || 'text-primary-400'}`} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-gray-300 text-base lg:text-lg font-light mb-6 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 ease-in-out">
                      {item.desc}
                    </p>

                    {item.features && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {item.features.map(f => (
                          <span key={f} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-bold text-primary-200 border border-white/10 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-primary-400" /> {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {item.stat && (
                    <div className="shrink-0 flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl min-w-[150px] group-hover:bg-primary-500/10 transition-colors">
                      <span className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-1"><CountUp to={52} />+</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400">Specialists</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-primary-400 transition-colors">View Details</span>
                   <MoveRight className="w-5 h-5 text-white/20 group-hover:text-primary-400 group-hover:translate-x-2 transition-all" />
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
