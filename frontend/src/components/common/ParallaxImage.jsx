import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, className = "", containerClassName = "", offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${containerClassName}`}>
      <motion.div 
        style={{ y, scale }}
        className="w-full h-full"
      >
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
