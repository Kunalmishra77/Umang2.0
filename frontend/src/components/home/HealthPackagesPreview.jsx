import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    title: "Basic Health Check",
    desc: "Essential screening for 40+ vital parameters.",
    tag: "Essential",
    icon: ShieldCheck,
    color: "from-primary-400 to-primary-600",
    bgLight: "bg-primary-50",
    features: ["Home Collection", "Digital Reports", "Doctor Review", "Diet Consultation"],
  },
  {
    title: "Executive Full Body",
    desc: "Comprehensive analysis including 75+ parameters.",
    tag: "Most Popular",
    icon: Sparkles,
    color: "from-primary-500 to-primary-700",
    bgLight: "bg-primary-50",
    popular: true,
    features: ["Home Collection", "Digital Reports", "Doctor Review", "Diet Consultation", "Follow-up Call"],
  },
  {
    title: "Premium Heart Check",
    desc: "Advanced cardiac risk assessment with 60+ tests.",
    tag: "Advanced",
    icon: Heart,
    color: "from-accent-400 to-accent-600",
    bgLight: "bg-accent-50",
    features: ["Home Collection", "Digital Reports", "Cardiologist Review", "ECG + Echo", "Stress Test"],
  }
];

const FlipCard = ({ pkg, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="relative h-[380px] xs:h-[400px] sm:h-[420px] lg:h-[460px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="w-full h-full relative cursor-pointer"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        onClick={() => setFlipped(!flipped)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* ── FRONT FACE ── */}
        <div
          className={`absolute inset-0 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-shadow ${pkg.popular ? 'ring-2 ring-primary-500 ring-offset-4' : 'bg-white'}`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {pkg.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary-500 to-primary-700 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg z-10">
              Most Popular
            </div>
          )}

          {/* Gradient icon area */}
          <div className={`w-full h-32 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6 relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')]" />
            <pkg.icon className="w-12 h-12 text-white drop-shadow-lg" />
          </div>

          <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${pkg.bgLight} text-gray-600 w-fit`}>
            {pkg.tag}
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-dark mb-2 sm:mb-3">{pkg.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">{pkg.desc}</p>

          <div className="mt-6 flex items-center gap-2 text-primary-600 font-bold text-[11px] uppercase tracking-widest">
            <span>Tap to see details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          className={`absolute inset-0 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 flex flex-col bg-brand-dark text-white border border-white/10 shadow-2xl ${pkg.popular ? 'ring-2 ring-primary-500 ring-offset-4 ring-offset-brand-dark' : ''}`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${pkg.color} text-white text-[10px] font-bold uppercase tracking-widest mb-6 w-fit shadow-lg`}>
            <pkg.icon className="w-3.5 h-3.5" />
            {pkg.tag}
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">{pkg.title}</h3>
          <p className="text-white/50 text-sm mb-6">{pkg.desc}</p>

          <ul className="space-y-3 flex-1">
            {pkg.features.map(item => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/80">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <Link
            to="/services/health-checkup"
            onClick={(e) => e.stopPropagation()}
            className={`w-full h-13 py-3.5 rounded-xl bg-gradient-to-r ${pkg.color} text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg mt-6 text-sm`}
          >
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HealthPackagesPreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-8 sm:mb-14 lg:mb-16 gap-4 sm:gap-6 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[11px] sm:text-[12px] mb-2 sm:mb-3 block">Preventive Care</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Our Health <span className="text-primary-600 normal">Packages</span>
            </h2>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Early detection is your best defense. Hover or tap to explore each package.
            </p>
          </motion.div>
          <Link to="/services/health-checkup" className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 hover:border-primary-600 text-brand-dark transition-all font-bold text-[11px] uppercase tracking-widest group h-11">
            View All Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, i) => (
            <FlipCard key={i} pkg={pkg} index={i} />
          ))}
        </div>

        <div className="lg:hidden mt-10 text-center">
          <Link to="/services/health-checkup" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-brand-dark font-bold text-[11px] uppercase tracking-widest">
            All Packages <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthPackagesPreview;
