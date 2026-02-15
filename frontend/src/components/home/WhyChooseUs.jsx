import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Award } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import CountUp from '../../components/common/CountUp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10 px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-12 lg:mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto"
          >
            <span className="section-subtitle">Medical Excellence</span>
            <h2 className="section-title">Why Patients <span className="text-primary-600">Trust Umang</span></h2>
            <p className="text-base lg:text-xl text-gray-500 font-light leading-relaxed mt-4">
              A legacy of healing and innovation in Gurugram since 2010.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          
          {/* Unified Premium Card Design */}
          {[
            {
              title: "150-Bedded Infrastructure",
              desc: "Premium healthcare facility with 28 ICU beds, Modular OTs, and specialized recovery units.",
              icon: ShieldCheck,
              img: ASSETS.HOSPITAL_EXTERIOR,
              color: "primary",
              span: "md:col-span-2"
            },
            {
              title: "24/7 Critical Support",
              desc: "Emergency trauma care, round-the-clock pharmacy, and rapid response ambulance services.",
              icon: Clock,
              img: ASSETS.AMBULANCE,
              color: "red",
              span: "col-span-1"
            },
            {
              title: "Advanced Technology",
              desc: "State-of-the-art Cath Labs, 128 Slice CT, 3 Tesla MRI, and precision robotic surgery suites.",
              icon: Zap,
              img: ASSETS.CT_SCAN,
              color: "primary",
              span: "col-span-1"
            },
            {
              title: "Clinical Excellence",
              desc: "NABH accredited standards with superior patient outcomes and dedicated specialized faculty.",
              icon: Award,
              img: ASSETS.GASTRO,
              color: "indigo",
              span: "md:col-span-2",
              stat: "52+"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className={`${item.span} relative rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 overflow-hidden group shadow-xl transition-all duration-500 hover:-translate-y-2 min-h-[300px] flex flex-col justify-end bg-brand-dark`}
            >
              {/* Background Image with Controlled Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 brightness-75" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-md text-left">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6 shadow-lg`}>
                    <item.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${item.color === 'red' ? 'text-red-400' : 'text-primary-400'}`} />
                  </div>
                  <h3 className="text-xl lg:text-3xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {item.stat && (
                  <div className="shrink-0 flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl min-w-[120px]">
                    <span className="text-3xl lg:text-4xl font-black text-white"><CountUp to={52} />+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-300">Specialists</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
