import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Play, Maximize, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirtualTour = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Helmet>
        <title>Virtual Tour | Umang Hospital</title>
      </Helmet>

      <div className="absolute inset-0 z-0">
         <img src="/assets/images/localized/hospital-hallway.jpg" className="w-full h-full object-cover opacity-30" alt="Hospital Bg" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative z-10 container-custom text-center text-white">
         <Link to="/health-library/technologies" className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back
         </Link>

         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Interactive Experience</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-12">Explore Umang Hospital</h1>
            
            <div className="relative max-w-4xl mx-auto aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
               <img src="/assets/images/corrected/hospital-building.jpg" alt="Tour Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                     <Play className="w-10 h-10 text-white fill-current ml-1" />
                  </div>
               </div>
               <div className="absolute bottom-6 right-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-300">
                  <Maximize className="w-4 h-4" /> Full Screen
               </div>
            </div>
            
            <p className="mt-12 text-gray-400 max-w-2xl mx-auto">
               Take a 360-degree tour of our advanced Operation Theatres, Cath Labs, and Luxury Patient Suites.
            </p>
         </motion.div>
      </div>
    </div>
  );
};

export default VirtualTour;
