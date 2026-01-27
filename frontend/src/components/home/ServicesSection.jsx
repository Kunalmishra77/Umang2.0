import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Video, Pill, Activity } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Home Care",
    slug: "home-care",
    desc: "Professional care at your doorstep.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Video,
    title: "Telemedicine",
    slug: "telemedicine",
    desc: "Consult specialists online.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Pill,
    title: "Pharmacy",
    slug: "buy-medicines",
    desc: "24/7 medicines delivery.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Activity,
    title: "Health Checkup",
    slug: "health-checkup",
    desc: "Comprehensive packages.",
    color: "bg-orange-50 text-orange-600"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-[#005580] font-bold tracking-widest uppercase text-sm mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Beyond Clinical Excellence
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              We offer a wide range of supportive services to ensure your health journey is comfortable and convenient.
            </p>
          </div>
          <Link 
            to="/services" 
            className="hidden md:flex items-center gap-2 text-[#005580] font-bold hover:gap-3 transition-all mt-6 md:mt-0"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 bg-white"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4 text-sm">{service.desc}</p>
              <Link to={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-[#005580] gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
           <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-[#005580] font-bold hover:gap-3 transition-all"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
