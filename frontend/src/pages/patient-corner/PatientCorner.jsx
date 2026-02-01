import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { User, PenTool, Mic, Book, Lightbulb } from 'lucide-react';

const sections = [
  {
    icon: User,
    title: "Patient Stories",
    slug: "patient-stories",
    desc: "Real stories of hope, healing, and resilience from our patients.",
    color: "bg-rose-50 text-rose-600"
  },
  {
    icon: PenTool,
    title: "Blogs",
    slug: "blogs",
    desc: "Expert insights on health, wellness, and medical advancements.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Mic,
    title: "Podcasts",
    slug: "podcasts",
    desc: "Listen to our doctors discuss various health topics and tips.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Book,
    title: "Information Literature",
    slug: "patient-information-literature",
    desc: "Downloadable brochures and guides for patient education.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Breakthrough Cases",
    slug: "breakthrough-cases",
    desc: "Highlighting complex cases successfully treated at Umang.",
    color: "bg-emerald-50 text-emerald-600"
  }
];

const PatientCorner = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-12">
      <Helmet>
        <title>Patient Corner - Umang Hospital</title>
      </Helmet>

      <section className="bg-[#005580] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Patient Corner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            A dedicated space for our patients to share, learn, and connect.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/patient-corner/${section.slug}`}
                  className="block h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className={`w-14 h-14 rounded-xl ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005580] transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {section.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientCorner;
