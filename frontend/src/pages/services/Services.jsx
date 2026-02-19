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
    color: "bg-blue-50 text-blue-600",
    img: ASSETS.CONSULTATION
  },
  {
    icon: Activity,
    title: "Lab Test & Diagnostic",
    slug: "lab-test-diagnostic",
    desc: "State-of-the-art diagnostic services with accurate and timely reporting.",
    color: "bg-green-50 text-green-600",
    img: ASSETS.LAB
  },
  {
    icon: Home,
    title: "Home Care",
    slug: "home-care",
    desc: "Professional healthcare services delivered in the comfort of your home.",
    color: "bg-purple-50 text-purple-600",
    img: ASSETS.NURSE_CARE
  },
  {
    icon: Pill,
    title: "Buy Medicines",
    slug: "buy-medicines",
    desc: "24/7 Pharmacy with home delivery options for your convenience.",
    color: "bg-orange-50 text-orange-600",
    img: ASSETS.PHARMACY
  },
  {
    icon: Video,
    title: "Telemedicine",
    slug: "telemedicine",
    desc: "Virtual consultations with our specialists from anywhere in the world.",
    color: "bg-indigo-50 text-indigo-600",
    img: ASSETS.TELEMEDICINE
  },
  {
    icon: Phone,
    title: "Emergency",
    slug: "emergency",
    desc: "24/7 Emergency and Trauma care with advanced life support systems.",
    color: "bg-red-50 text-red-600",
    img: ASSETS.AMBULANCE
  },
  {
    icon: ShieldCheck,
    title: "Health Checkup",
    slug: "health-checkup",
    desc: "Comprehensive preventive health checkup packages for all age groups.",
    color: "bg-teal-50 text-teal-600",
    img: ASSETS.HEALTH_CHECKUP
  },
  {
    icon: Heart,
    title: "Elder Care",
    slug: "elder-care",
    desc: "Specialized geriatric care focusing on the unique needs of senior citizens.",
    color: "bg-rose-50 text-rose-600",
    img: ASSETS.GERIATRICS
  }
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Our Services | Umang Superspeciality Hospital</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden text-center lg:text-left">
        <div className="absolute inset-0 z-0">
           <img 
             src={ASSETS.HOSPITAL_EXTERIOR} 
             alt="Services Hero" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="hero-overlay-radial" />
        </div>
        
        <Container className="relative z-10 pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Support Services</span>
            <h1 className="text-white mb-6">Clinical <span className="text-primary-400 italic">Excellence.</span></h1>
            <p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              Comprehensive healthcare solutions designed around your needs, from preventive care to 24/7 emergency support and home care.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. Service Categories Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={service.slug === 'lab-test-diagnostic' ? '/services/lab-test-diagnostic' : `/services/${service.slug}`}
                  className="block h-full bg-white rounded-[2.5rem] shadow-soft hover:shadow-premium border border-slate-100 group overflow-hidden transition-all duration-500"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 left-6">
                       <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm`}>
                         <service.icon size={20} />
                       </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm lg:text-base mb-8 font-medium line-clamp-2">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-primary-600 font-bold text-[10px] uppercase tracking-widest gap-2 group-hover:gap-3 transition-all">
                       Learn More <ArrowRight size={14} />
                    </div>
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
