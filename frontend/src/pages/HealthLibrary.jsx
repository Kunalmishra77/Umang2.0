import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { BookOpen, Cpu, Stethoscope, GraduationCap, Calendar, Download } from 'lucide-react';

const categories = [
  {
    icon: Stethoscope,
    title: "Treatments",
    count: "150+ Articles",
    desc: "In-depth information about various medical procedures and treatments."
  },
  {
    icon: Cpu,
    title: "Technologies",
    count: "50+ Updates",
    desc: "Latest advancements in medical technology and equipment."
  },
  {
    icon: BookOpen,
    title: "Ailments",
    count: "200+ Guides",
    desc: "Comprehensive guides on symptoms, causes, and prevention."
  },
  {
    icon: GraduationCap,
    title: "Knowledge Center",
    count: "Resource Hub",
    desc: "Educational materials for medical students and professionals."
  },
  {
    icon: Calendar,
    title: "Events",
    count: "Upcoming",
    desc: "Seminars, workshops, and health camps organized by Umang."
  },
  {
    icon: Download,
    title: "Downloads",
    count: "Forms & Brochures",
    desc: "Patient forms, hospital brochures, and preparation guides."
  }
];

const HealthLibrary = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Helmet>
        <title>Health Library - Umang Hospital</title>
      </Helmet>

      <section className="bg-[#005580] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Health Library
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Empowering you with knowledge for a healthier life. Explore our vast collection of medical resources.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005580] flex items-center justify-center group-hover:bg-[#005580] group-hover:text-white transition-colors duration-300">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{cat.count}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005580] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {cat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthLibrary;
