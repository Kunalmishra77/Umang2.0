import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Video, Pill, Activity } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../common/ParallaxImage';
import SpotlightCard from '../common/SpotlightCard';
import MaskText from '../common/MaskText';

const services = [
  { icon: Home, title: "Home Care", path: "/services/ipd-opd", desc: "Nursing, physiotherapy, and elderly care at your doorstep.", color: "bg-blue-50 text-blue-600", img: ASSETS.NURSE_CARE },
  { icon: Video, title: "Telemedicine", path: "/services/telemedicine", desc: "Connect with top specialists via secure video calls.", color: "bg-green-50 text-green-600", img: ASSETS.TELEMEDICINE },
  { icon: Pill, title: "Pharmacy", path: "/services/buy-medicines", desc: "24/7 online pharmacy with genuine medicine delivery.", color: "bg-purple-50 text-purple-600", img: ASSETS.PHARMACY },
  { icon: Activity, title: "Health Checkup", path: "/services/health-checkup", desc: "Comprehensive custom preventive packages.", color: "bg-orange-50 text-orange-600", img: ASSETS.HEALTH_CHECKUP }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 } 
  }
};

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 lg:mb-12 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <MaskText><span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[13px] mb-3 block">Comprehensive Care</span></MaskText>
            <MaskText delay={0.1}><h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">Beyond Clinical Excellence</h2></MaskText>
            <MaskText delay={0.2}><p className="text-gray-500 mt-4 text-base lg:text-lg font-light leading-relaxed">Widest range of supportive services for your comfort and convenience.</p></MaskText>
          </div>
          <Link to="/services" className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 hover:border-primary-600 hover:bg-white text-brand-dark transition-all font-bold text-[12px] uppercase tracking-widest group h-12">
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="relative">
              <Link to={service.path} className="block h-full group">
                <SpotlightCard className="h-full rounded-[1.5rem] lg:rounded-[2rem] bg-gray-50/50 border border-gray-100 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-500 overflow-hidden">
                  
                  <div className="h-40 lg:h-[180px] overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary-900/10 z-10 group-hover:opacity-0 transition-opacity" />
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>

                  <div className="p-6 lg:p-8 relative">
                    <div className="absolute -top-8 right-6 lg:right-8">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl ${service.color} flex items-center justify-center shadow-lg border-4 border-white transition-all duration-500 group-hover:scale-110`}>
                          <service.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                        </div>
                    </div>

                    <div className="mt-4 lg:mt-6">
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-brand-dark mb-2 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-500 text-sm lg:text-base leading-relaxed line-clamp-2">{service.desc}</p>
                    </div>

                    <div className="flex items-center gap-2 text-primary-600 font-bold text-[11px] tracking-widest uppercase mt-6">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="lg:hidden mt-10 text-center">
           <Link to="/services" className="btn-outline w-full justify-center py-4 rounded-2xl text-[12px] uppercase tracking-widest font-black">All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
