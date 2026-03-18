import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-8"
      >
        <img src="/Umang-logo.png" alt="Umang Superspeciality Hospital" className="h-20 md:h-24 w-auto" />
      </motion.div>

      {/* Loading Bar */}
      <div className="w-48 h-[3px] bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-primary-600 rounded-full"
        />
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400"
      >
        Care with Passion
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
