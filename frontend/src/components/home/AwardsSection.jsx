import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, Heart } from 'lucide-react';

const awards = [
  { title: "NABH Accredited", desc: "Gold Standard for Quality Healthcare in India.", icon: ShieldCheck },
  { title: "NABL Certified", desc: "Highest precision in diagnostic pathology labs.", icon: Award },
  { title: "ISO 9001:2015", desc: "International standard for quality management.", icon: Star },
  { title: "Patient Choice Award", desc: "Voted #1 for patient care in Gurugram Region.", icon: Heart }
];

const AwardsSection = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-sm lg:text-base font-bold text-brand-dark mb-1">{item.title}</h4>
              <p className="text-[10px] lg:text-xs text-gray-400 font-medium uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
