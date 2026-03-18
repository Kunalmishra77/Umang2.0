import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Award, Star, Heart, HeartPulse } from 'lucide-react';
import { Container } from '../ui/Layout';

const trustItems = [
  { icon: ShieldCheck, title: "NABH Accredited", desc: "Gold Standard Quality" },
  { icon: Activity, title: "NABL Certified", desc: "Precision Diagnostics" },
  { icon: Award, title: "JCI Standards", desc: "Global Care Protocols" },
  { icon: Star, title: "ISO 9001:2015", desc: "Quality Management" },
  { icon: Heart, title: "Patient Choice", desc: "Voted #1 in Region" },
  { icon: HeartPulse, title: "24/7 Emergency", desc: "Critical Care Hub" }
];

const TrustSection = () => {
  return (
    <section className="py-10 md:py-12 bg-white border-y border-gray-100 overflow-hidden">
      <Container>
        <div className="flex flex-wrap justify-center lg:flex-nowrap gap-2 md:gap-0">
          {trustItems.map((item, i) => (
            <React.Fragment key={i}>
              {/* Separator dot — desktop only, between items */}
              {i > 0 && (
                <div className="hidden lg:flex items-center px-1">
                  <div className="w-1 h-1 rounded-full bg-gray-200" />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex-1 min-w-[130px] md:min-w-[150px]"
              >
                <div className="flex flex-col items-center text-center p-4 md:p-5 rounded-2xl hover:bg-gray-50/80 transition-all duration-300 group cursor-default">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-3 border border-primary-100/50 group-hover:bg-primary-100 group-hover:scale-105 transition-all duration-300">
                    <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h4 className="text-sm md:text-[15px] font-bold text-brand-dark mb-0.5 group-hover:text-primary-700 transition-colors">{item.title}</h4>
                  <p className="text-[10px] md:text-[11px] text-gray-400 font-semibold uppercase tracking-wider">{item.desc}</p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustSection;
