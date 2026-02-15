import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Video, Pill, Activity } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../common/ParallaxImage';
import SpotlightCard from '../common/SpotlightCard';
import MaskText from '../common/MaskText';

const services = [
  { icon: Home, title: "Home Care", slug: "home-care", desc: "Nursing, physiotherapy, and elderly care.", color: "bg-blue-50 text-blue-600", img: ASSETS.NURSE_CARE },
  { icon: Video, title: "Telemedicine", slug: "telemedicine", desc: "Top specialists via secure video calls.", color: "bg-green-50 text-green-600", img: ASSETS.TELEMEDICINE },
  { icon: Pill, title: "Pharmacy", slug: "buy-medicines", desc: "24/7 genuine medicine delivery.", color: "bg-purple-50 text-purple-600", img: ASSETS.PHARMACY },
  { icon: Activity, title: "Health Checkup", slug: "health-checkup", desc: "Custom preventive packages.", color: "bg-orange-50 text-orange-600", img: ASSETS.HEALTH_CHECKUP }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 lg:mb-20 gap-6 text-center lg:text-left">
          <div className="max-w-3xl">
            <MaskText><span className="section-subtitle">Comprehensive Care</span></MaskText>
            <MaskText delay={0.1}><h2 className="section-title">Beyond Clinical Excellence</h2></MaskText>
            <MaskText delay={0.2}><p className="text-gray-600 mt-4 lg:mt-6 text-base lg:text-xl font-light mx-auto lg:mx-0">Widest range of supportive services for a comfortable health journey.</p></MaskText>
          </div>
          <Link to="/services" className="hidden lg:flex btn-outline group py-4 px-8 rounded-full">
            View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2 per row on mobile (grid-cols-2), 4 on desktop */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="relative min-h-[300px] lg:min-h-[450px]">
              <SpotlightCard className="h-full rounded-[1.5rem] lg:rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm hover-lift transition-all duration-500 group overflow-hidden">
                <Link to={`/services/${service.slug}`} className="absolute inset-0 z-20" />
                
                {/* Responsive heights for image */}
                <div className="h-32 sm:h-40 lg:h-[220px] overflow-hidden relative bg-gray-200">
                   <div className="absolute inset-0 bg-primary-900/10 z-10 group-hover:opacity-0" />
                   <ParallaxImage src={service.img} alt={service.title} containerClassName="w-full h-full" className="transition-transform duration-700 group-hover:scale-110" offset={15} />
                </div>

                <div className="p-4 lg:p-8 relative">
                   {/* Smaller floating icons on mobile */}
                   <div className="absolute -top-8 lg:-top-10 right-4 lg:right-8">
                      <div className={`w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl ${service.color} flex items-center justify-center shadow-lg border-2 lg:border-4 border-white`}>
                        <service.icon className="w-6 h-6 lg:w-9 lg:h-9" />
                      </div>
                   </div>

                   <div className="mt-4 lg:mt-8">
                     <h3 className="text-sm lg:text-2xl font-serif font-bold text-gray-900 mb-1 lg:mb-3">{service.title}</h3>
                     <p className="hidden lg:block text-gray-500 text-sm leading-relaxed line-clamp-2">{service.desc}</p>
                   </div>

                   <div className="flex lg:hidden items-center gap-1 text-primary-600 font-bold text-[10px] uppercase mt-2">
                      <span>More</span> <ArrowRight className="w-3 h-3" />
                   </div>
                   
                   <div className="hidden lg:flex items-center gap-2 text-primary-600 font-bold text-sm tracking-wide uppercase mt-4 group/btn">
                      <span>Learn More</span> <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                   </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="lg:hidden mt-8 text-center px-4">
           <Link to="/services" className="btn-outline w-full justify-center py-4 rounded-2xl text-xs uppercase tracking-widest">All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
