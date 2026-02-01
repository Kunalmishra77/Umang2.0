import React from 'react';
import { motion } from 'framer-motion';

const MaskText = ({ children, className = "", delay = 0 }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for a "luxurious" slow-stop feel
          delay: delay 
        }}
        className="inline-block"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MaskText;
