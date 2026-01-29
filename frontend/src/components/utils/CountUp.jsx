import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const CountUp = ({ from = 0, to, duration = 2.5, suffix = '', prefix = '', className = '' }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (node) {
            // Format with commas for thousands
            const formatted = Intl.NumberFormat('en-US').format(Math.floor(value));
            node.textContent = `${prefix}${formatted}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, suffix, prefix]);

  // Initial render state
  return <span ref={nodeRef} className={className}>{prefix}{from}{suffix}</span>;
};

export default CountUp;
