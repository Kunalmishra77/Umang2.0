import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-black text-gray-100 mb-8 relative">
            404
            <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-serif font-bold text-brand-dark">
              Page Not Found
            </span>
          </h1>
        </motion.div>
        
        <p className="text-gray-500 text-lg lg:text-xl mb-12 font-light leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="px-8 py-4 bg-brand-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-600 transition-all shadow-lg"
          >
            <Home className="w-5 h-5" /> Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="px-8 py-4 border-2 border-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
