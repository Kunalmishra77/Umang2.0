import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Stethoscope, Activity, Home, Pill, Video, Phone, ShieldCheck, Heart } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "Second Opinion",
    desc: "Get expert validation on your diagnosis and treatment plan from our top specialists.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Activity,
    title: "Lab Test & Diagnostic",
    desc: "State-of-the-art diagnostic services with accurate and timely reporting.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Home,
    title: "Home Care",
    desc: "Professional healthcare services delivered in the comfort of your home.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Pill,
    title: "Buy Medicines",
    desc: "24/7 Pharmacy with home delivery options for your convenience.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Video,
    title: "Telemedicine",
    desc: "Virtual consultations with our specialists from anywhere in the world.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Phone,
    title: "Emergency",
    desc: "24/7 Emergency and Trauma care with advanced life support systems.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: ShieldCheck,
    title: "Health Checkup",
    desc: "Comprehensive preventive health checkup packages for all age groups.",
    color: "bg-teal-50 text-teal-600"
  },
  {
    icon: Heart,
    title: "Elder Care",
    desc: "Specialized geriatric care focusing on the unique needs of senior citizens.",
    color: "bg-rose-50 text-rose-600"
  }
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Helmet>
        <title>Our Services - Umang Hospital</title>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#005580] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Clinical Excellence & Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Comprehensive healthcare solutions designed around your needs, from preventive care to advanced treatments.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005580] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
