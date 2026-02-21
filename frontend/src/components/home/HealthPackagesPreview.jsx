import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  { 
    title: "Basic Health Check", 
    desc: "Essential screening for 40+ vital parameters.", 
    tag: "Essential",
    color: "bg-blue-50 border-blue-100 text-blue-600"
  },
  { 
    title: "Executive Full Body", 
    desc: "Comprehensive analysis including 75+ parameters.", 
    tag: "Most Popular",
    color: "bg-primary-50 border-primary-100 text-primary-600",
    popular: true
  },
  { 
    title: "Premium Heart Check", 
    desc: "Advanced cardiac risk assessment with 60+ tests.", 
    tag: "Advanced",
    color: "bg-red-50 border-red-100 text-red-600"
  }
];

const HealthPackagesPreview = () => {
  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <span className="section-subtitle">Preventive Care</span>
            <h2 className="section-title">Our Health Packages</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Early detection is your best defense. Choose from our curated screening plans designed for every age and lifestyle.
            </p>
          </div>
          <Link to="/services/health-checkup" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs border-b-2 border-primary-100 pb-1 mb-2">
            View All Packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative ${pkg.popular ? 'ring-2 ring-primary-500 ring-offset-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ${pkg.color}`}>
                {pkg.tag}
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">{pkg.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{pkg.desc}</p>
              <ul className="space-y-3 mb-10">
                {["Home Collection", "Digital Reports", "Doctor Review"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-xs font-bold text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/services/health-checkup" className="w-full h-12 rounded-xl bg-brand-dark text-white font-bold flex items-center justify-center gap-2 hover:bg-primary-600 transition-all shadow-lg">
                Enquire Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthPackagesPreview;
