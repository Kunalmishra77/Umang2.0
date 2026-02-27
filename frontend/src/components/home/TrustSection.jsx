import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Award, Star, Heart, HeartPulse } from 'lucide-react';
import { Container } from '../ui/Layout';

const trustItems = [
  { icon: ShieldCheck, title: "NABH Accredited", desc: "Gold Standard Quality", href: "/patient-experience" },
  { icon: Activity, title: "NABL Certified", desc: "Precision Diagnostics", href: "/services/lab-test-diagnostic" },
  { icon: Award, title: "JCI Standards", desc: "Global Care Protocols", href: "/patient-experience" },
  { icon: Star, title: "ISO 9001:2015", desc: "Quality Management", href: "/patient-experience" },
  { icon: Heart, title: "Patient Choice", desc: "Voted #1 in Region", href: "/patient-corner/patient-stories" },
  { icon: HeartPulse, title: "24/7 Emergency", desc: "Critical Care Hub", href: "/services/emergency" }
];

const TrustSection = () => {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <Container>
        <div className="flex flex-wrap justify-center lg:flex-nowrap gap-4 md:gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 min-w-[140px] md:min-w-[180px]"
            >
              <div
                className="flex flex-col items-center text-center p-4 rounded-3xl transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary-600 mb-4 shadow-sm border border-gray-100">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-xs md:text-sm font-bold text-brand-dark mb-1 transition-colors">{item.title}</h4>
                <p className="text-[9px] md:text-[10px] text-gray-400 font-medium uppercase tracking-wider">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustSection;
