import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Newspaper, Video, Mail, Radio } from 'lucide-react';

const MediaCenter = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Helmet>
        <title>Media Center - Umang Hospital</title>
      </Helmet>

      <section className="bg-[#005580] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Media Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Latest news, updates, and media coverage from Umang Hospital.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Press Release", icon: Newspaper, desc: "Official announcements and statements.", color: "text-blue-600 bg-blue-50" },
              { title: "Media Coverage", icon: Video, desc: "Umang Hospital in the news and media.", color: "text-red-600 bg-red-50" },
              { title: "Newsletters", icon: Mail, desc: "Monthly updates and health digests.", color: "text-green-600 bg-green-50" },
              { title: "Media Connect", icon: Radio, desc: "Resources for journalists and media partners.", color: "text-purple-600 bg-purple-50" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                 <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                 <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaCenter;
