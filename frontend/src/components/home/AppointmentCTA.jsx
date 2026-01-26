import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppointmentCTA = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
       {/* Background Glows */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-[150px] opacity-20" />
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan rounded-full blur-[150px] opacity-20" />

       <div className="container-custom relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif">
                Your Health, Our Priority.
             </h2>
             <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
                Don't delay your care. Schedule an appointment with our specialists today or call us for emergency assistance.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/doctors" className="btn-primary text-lg px-12 py-5 shadow-primary-500/50">
                   Book Appointment Now
                </Link>
                <a href="tel:+918929733551" className="px-12 py-5 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                   <Phone className="w-5 h-5" /> +91 8929733551
                </a>
             </div>
          </motion.div>
       </div>
    </section>
  );
};

export default AppointmentCTA;