import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Video, Pill, Activity } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../common/ParallaxImage';
import SpotlightCard from '../common/SpotlightCard';
import MaskText from '../common/MaskText';

const services = [
  { icon: Home, title: "Home Care", path: "/services/home-care", desc: "Nursing, physiotherapy, and elderly care at your doorstep.", color: "bg-blue-50 text-blue-600", img: ASSETS.NURSE_CARE },
  { icon: Video, title: "Telemedicine", path: "/services/telemedicine", desc: "Connect with top specialists via secure video calls.", color: "bg-green-50 text-green-600", img: ASSETS.TELEMEDICINE },
  { icon: Pill, title: "Pharmacy", path: "/pharmacy", desc: "24/7 online pharmacy with genuine medicine delivery.", color: "bg-purple-50 text-purple-600", img: ASSETS.PHARMACY },
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
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-custom px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 lg:mb-20 gap-8 text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <MaskText><span className="section-subtitle">Comprehensive Care</span></MaskText>
            <MaskText delay={0.1}><h2 className="section-title">Beyond Clinical Excellence</h2></MaskText>
            <MaskText delay={0.2}><p className="text-gray-600 mt-6 text-lg lg:text-xl font-light leading-relaxed">Widest range of supportive services for your comfort and convenience.</p></MaskText>
          </div>
          <Link to="/services" className="hidden lg:flex btn-outline group py-4 px-8 rounded-full font-black">
            View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="relative min-h-[400px] lg:min-h-[450px]">
              <Link to={service.path} className="block h-full group">
                <SpotlightCard className="h-full rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm hover-lift transition-all duration-500 overflow-hidden">
                  
                  <div className="h-48 lg:h-[220px] overflow-hidden relative bg-gray-200">
                    <div className="absolute inset-0 bg-primary-900/10 z-10 group-hover:opacity-0 transition-opacity" />
                    <ParallaxImage src={service.img} alt={service.title} containerClassName="w-full h-full" className="transition-transform duration-700 group-hover:scale-110" offset={15} />
                  </div>

                  <div className="p-8 relative">
                    <div className="absolute -top-10 right-8">
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${service.color} flex items-center justify-center shadow-lg border-4 border-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          <service.icon className="w-8 h-8 lg:w-9 lg:h-9" />
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-8">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{service.desc}</p>
                    </div>

                    <div className="flex items-center gap-2 text-primary-600 font-bold text-sm tracking-wide uppercase mt-6">
                        <span className="group-hover:underline decoration-2 underline-offset-4">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="lg:hidden mt-10 text-center">
           <Link to="/services" className="btn-outline w-full justify-center py-4 rounded-2xl text-xs uppercase tracking-widest font-black">All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
