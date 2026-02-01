import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, Home, Pill, Video, Phone, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';

const services = [
  {
    icon: Stethoscope,
    title: "Second Opinion",
    slug: "second-opinion",
    desc: "Get expert validation on your diagnosis and treatment plan from our top specialists.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Activity,
    title: "Lab Test & Diagnostic",
    slug: "lab-test-diagnostic",
    desc: "State-of-the-art diagnostic services with accurate and timely reporting.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Home,
    title: "Home Care",
    slug: "home-care",
    desc: "Professional healthcare services delivered in the comfort of your home.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Pill,
    title: "Buy Medicines",
    slug: "buy-medicines",
    desc: "24/7 Pharmacy with home delivery options for your convenience.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Video,
    title: "Telemedicine",
    slug: "telemedicine",
    desc: "Virtual consultations with our specialists from anywhere in the world.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Phone,
    title: "Emergency",
    slug: "emergency",
    desc: "24/7 Emergency and Trauma care with advanced life support systems.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: ShieldCheck,
    title: "Health Checkup",
    slug: "health-checkup",
    desc: "Comprehensive preventive health checkup packages for all age groups.",
    color: "bg-teal-50 text-teal-600"
  },
  {
    icon: Heart,
    title: "Elder Care",
    slug: "elder-care",
    desc: "Specialized geriatric care focusing on the unique needs of senior citizens.",
    color: "bg-rose-50 text-rose-600"
  }
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Our Services - Umang Hospital</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
           <img 
             src={ASSETS.HOSPITAL_EXTERIOR} 
             alt="Services Hero" 
             className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark" />
        </div>
        
        <div className="container-custom relative z-10 text-center pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle text-primary-400 mb-6 block mx-auto">Comprehensive Care</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
              Clinical <span className="text-primary-400 italic">Excellence</span>
            </h1>
            <p className="text-xl text-primary-100/70 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive healthcare solutions designed around your needs, from preventive care to advanced treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Service Categories Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="block h-full bg-white p-8 rounded-[2.5rem] shadow-sm hover-lift transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-primary-600 font-bold text-xs uppercase tracking-widest gap-2 opacity-60 group-hover:opacity-100 transition-all">
                     Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
