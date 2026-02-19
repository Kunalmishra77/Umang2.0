import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTAButton = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold uppercase tracking-[0.15em] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:-translate-y-1 shadow-soft hover:shadow-premium rounded-xl',
    secondary: 'bg-slate-50 text-slate-600 border border-slate-100 hover:bg-white hover:text-primary-600 hover:-translate-y-1 shadow-none hover:shadow-soft rounded-xl',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10 hover:-translate-y-1 rounded-xl',
    danger: 'bg-red-600 text-white hover:bg-red-700 hover:-translate-y-1 shadow-soft rounded-xl',
    whatsapp: 'bg-[#25D366] text-white hover:shadow-lg hover:-translate-y-1 rounded-xl',
    pill: 'bg-primary-50 text-primary-700 hover:bg-primary-100 rounded-full text-[10px] px-4 py-1.5 h-auto',
  };

  const sizes = {
    sm: 'h-10 px-6 text-[10px]',
    md: 'h-12 md:h-14 px-8 text-xs',
    lg: 'h-14 md:h-16 px-10 text-sm',
  };

  const content = (
    <>
      {Icon && <Icon className={(size === 'pill' ? 'w-3 h-3' : 'w-4 h-4') + ' mr-2'} />}
      {children}
    </>
  );

  const finalClass = baseStyles + ' ' + variants[variant] + ' ' + (size !== 'pill' ? sizes[size] : '') + ' ' + className;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className='inline-block'
    >
      {to ? (
        <Link to={to} className={finalClass} {...props}>{content}</Link>
      ) : href ? (
        <a href={href} className={finalClass} target='_blank' rel='noopener noreferrer' {...props}>{content}</a>
      ) : (
        <button 
          className={finalClass} 
          onClick={onClick}
          {...props}
        >
          {content}
        </button>
      )}
    </motion.div>
  );
};

export default CTAButton;