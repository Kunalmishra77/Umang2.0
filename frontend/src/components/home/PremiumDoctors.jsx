import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Heart, Bone, Brain, Stethoscope,
  Wind, Activity, Ear, Droplets, Scissors, Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';
import { siteConfig } from '../../config/siteConfig';
import CountUp from '../common/CountUp';

const deptIconMap = {
  'Cardiology': Heart,
  'Orthopedics & Joint Replacement': Bone,
  'Orthopedics': Bone,
  'Neurosurgery': Brain,
  'General Medicine': Stethoscope,
  'Pulmonology': Wind,
  'Medical Gastroenterology': Activity,
  'Urology': Droplets,
  'Critical Care': Activity,
  'Radiology': Microscope,
  'ENT (Otorhinolaryngology)': Ear,
  'Nephrology': Droplets,
  'Obstetrics & Gynecology': Heart,
  'Anesthesiology': Activity,
  'Plastic & Reconstructive Surgery': Scissors,
  'General & Laparoscopic Surgery': Scissors,
};

const marqueeCSS = `
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .marquee-left  { animation: scrollLeft  38s linear infinite; }
  .marquee-right { animation: scrollRight 44s linear infinite; }
  .marquee-left:hover,
  .marquee-right:hover { animation-play-state: paused; }
`;

const DoctorPill = ({ doc }) => {
  const Icon = deptIconMap[doc.dept] || Stethoscope;
  return (
    <div className="flex items-center gap-3 px-5 py-3 mx-2 rounded-full border border-white/10 bg-white/[0.04] shrink-0 select-none hover:border-primary-500/50 hover:bg-primary-600/10 transition-colors duration-300 cursor-default">
      <Icon className="w-4 h-4 text-primary-400 shrink-0" />
      <span className="text-white font-semibold text-sm whitespace-nowrap">{doc.name}</span>
      <span className="w-[5px] h-[5px] rounded-full bg-primary-500/50 shrink-0" />
      <span className="text-primary-300 text-xs font-medium whitespace-nowrap">{doc.dept}</span>
    </div>
  );
};

const stats = [
  { value: 18, suffix: '+',  label: 'Specialist Doctors' },
  { value: 14, suffix: '',   label: 'Departments' },
  { value: 26, suffix: '+',  label: 'Insurance & TPA Partners' },
  { value: 15, suffix: '+',  label: 'Years of Excellence' },
];

const PremiumDoctors = () => {
  const row1 = [...doctors.slice(0, 9),  ...doctors.slice(0, 9)];
  const row2 = [...doctors.slice(9),     ...doctors.slice(9)];

  return (
    <section className="py-16 lg:py-24 bg-brand-dark relative overflow-hidden">
      <style>{marqueeCSS}</style>

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-12 h-[2px] bg-primary-500 rounded-full" />
            <span className="text-primary-400 font-black uppercase tracking-[0.4em] text-[12px]">Elite Medical Faculty</span>
            <span className="w-12 h-[2px] bg-primary-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            World-Class{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">
              Specialists
            </span>
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            India's finest superspecialists — committed to excellence across every discipline of medicine.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-16"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-5 lg:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
            >
              <p className="text-3xl lg:text-4xl font-serif font-bold text-white mb-1">
                <CountUp to={s.value} />{s.suffix}
              </p>
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4 mb-10 lg:mb-14"
        >
          {/* Row 1 — scroll left */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-brand-dark to-transparent" />
            <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-brand-dark to-transparent" />
            <div className="flex marquee-left">
              {row1.map((doc, i) => (
                <DoctorPill key={`r1-${doc.id}-${i}`} doc={doc} />
              ))}
            </div>
          </div>

          {/* Row 2 — scroll right */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-brand-dark to-transparent" />
            <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-brand-dark to-transparent" />
            <div className="flex marquee-right">
              {row2.map((doc, i) => (
                <DoctorPill key={`r2-${doc.id}-${i}`} doc={doc} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/doctors"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-600 text-white font-bold text-sm hover:bg-primary-500 transition-all duration-300 shadow-xl shadow-primary-900/40 hover:scale-105 hover:shadow-primary-600/30"
          >
            Meet All Our Doctors
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PremiumDoctors;
