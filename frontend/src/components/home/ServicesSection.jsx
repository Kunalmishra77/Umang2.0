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
    color: "bg-blue-50 text-blue-600",
    img: "https://images.unsplash.com/photo-1586773860418-d3b9a8ec8c77?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Video,
    title: "Telemedicine",
    slug: "telemedicine",
    desc: "Consult specialists online.",
    color: "bg-green-50 text-green-600",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Pill,
    title: "Pharmacy",
    slug: "buy-medicines",
    desc: "24/7 medicines delivery.",
    color: "bg-purple-50 text-purple-600",
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Activity,
    title: "Health Checkup",
    slug: "health-checkup",
    desc: "Comprehensive packages.",
    color: "bg-orange-50 text-orange-600",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-[#005580] font-bold tracking-widest uppercase text-sm mb-2 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >
              {/* Background Image */}
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent transition-opacity group-hover:opacity-90" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <Link to={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-[#005580] gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
