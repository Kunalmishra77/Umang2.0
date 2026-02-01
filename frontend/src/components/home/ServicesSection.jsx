import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Video, Pill, Activity } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import ParallaxImage from '../common/ParallaxImage';
import SpotlightCard from '../common/SpotlightCard';
import MaskText from '../common/MaskText';

const services = [
  {
    icon: Home,
    title: "Home Care",
    slug: "home-care",
    desc: "Professional nursing, physiotherapy, and elderly care at your doorstep.",
    color: "bg-blue-50 text-blue-600",
    img: ASSETS.NURSE_CARE
  },
  {
    icon: Video,
    title: "Telemedicine",
    slug: "telemedicine",
    desc: "Connect with top specialists from the comfort of your home via secure video calls.",
    color: "bg-green-50 text-green-600",
    img: ASSETS.TELEMEDICINE
  },
  {
    icon: Pill,
    title: "Pharmacy",
    slug: "buy-medicines",
    desc: "24/7 online pharmacy with genuine medicines delivered to your location.",
    color: "bg-purple-50 text-purple-600",
    img: ASSETS.PHARMACY
  },
  {
    icon: Activity,
    title: "Health Checkup",
    slug: "health-checkup",
    desc: "Comprehensive preventive health packages customized for all age groups.",
    color: "bg-orange-50 text-orange-600",
    img: ASSETS.HEALTH_CHECKUP
  }
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
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-3xl">
            <MaskText>
              <span className="section-subtitle">Comprehensive Care</span>
            </MaskText>
            <MaskText delay={0.1}>
              <h2 className="section-title">Beyond Clinical Excellence</h2>
            </MaskText>
            <MaskText delay={0.2}>
              <p className="text-gray-600 mt-6 text-xl font-light leading-relaxed">
                We offer a wide range of supportive services to ensure your health journey is comfortable, convenient, and holistic.
              </p>
            </MaskText>
          </div>
          
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
          >
            <Link 
              to="/services" 
              className="hidden md:flex btn-outline group"
            >
              View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-[450px]"
            >
              <SpotlightCard className="h-full rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm hover-lift transition-all duration-500 group">
                <Link to={`/services/${service.slug}`} className="absolute inset-0 z-20" />
                
                {/* Image Reveal Effect */}
                <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden clip-path-slant bg-gray-200">
                   <div className="absolute inset-0 bg-primary-900/10 z-10 group-hover:opacity-0 transition-opacity duration-500" />
                   <ParallaxImage 
                      src={service.img} 
                      alt={service.title} 
                      containerClassName="w-full h-full"
                      className="transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      offset={30}
                   />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full h-[55%] bg-white p-8 flex flex-col justify-between transition-all duration-500 group-hover:h-[60%]">
                   {/* Floating Icon */}
                   <div className="absolute -top-10 right-8">
                      <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 border-4 border-white`}>
                        <service.icon className="w-9 h-9" />
                      </div>
                   </div>

                   <div className="mt-8">
                     <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">{service.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">{service.desc}</p>
                   </div>

                   <div className="flex items-center gap-2 text-primary-600 font-bold text-sm tracking-wide uppercase mt-4 group/btn">
                      <span className="group-hover/btn:underline decoration-2 underline-offset-4">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                   </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="md:hidden mt-12 text-center">
           <Link 
            to="/services" 
            className="btn-outline w-full justify-center"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
