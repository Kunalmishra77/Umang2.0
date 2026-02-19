import React from 'react';

export const Container = ({ children, className = '' }) => (
  <div className={'container-custom ' + className}>
    {children}
  </div>
);

export const Section = ({ children, className = '', id = '' }) => (
  <section id={id} className={'section-padding ' + className}>
    {children}
  </section>
);

export const SectionHeading = ({ 
  eyebrow, 
  title, 
  description, 
  centered = false,
  className = '',
  dark = false
}) => (
  <div className={'mb-16 md:mb-20 ' + (centered ? 'text-center' : 'text-left') + ' ' + className}>
    {eyebrow && (
      <span className={'text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.3em] mb-6 block ' + (dark ? 'text-primary-400' : 'text-primary-600')}>
        {eyebrow}
      </span>
    )}
    <h2 className={'mb-8 ' + (dark ? 'text-white' : 'text-brand-dark')}>
      {title}
    </h2>
    {description && (
      <p className={'max-w-[70ch] leading-relaxed ' + (centered ? 'mx-auto' : '') + ' ' + (dark ? 'text-slate-300' : 'text-slate-600')}>
        {description}
      </p>
    )}
  </div>
);

export const Card = ({ children, className = '' }) => (
  <div className={'premium-card ' + className}>
    {children}
  </div>
);

export const Badge = ({ children, className = '' }) => (
  <span className={'inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-50 text-primary-700 border border-primary-100 ' + className}>
    {children}
  </span>
);