import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Rajesh Kumar', text: 'Exceptional care during my cardiac surgery. The team was supportive throughout.', loc: 'Gurugram' },
  { name: 'Anita Singh', text: 'Best hospital for maternity. The facilities are world-class and very clean.', loc: 'Delhi' },
  { name: 'Vikram Mehta', text: 'Emergency team saved my fathers life. Forever grateful to Dr. Manmohan.', loc: 'Noida' },
  { name: 'Suman Gupta', text: 'Very professional staff and advanced technology. Highly recommended.', loc: 'Faridabad' },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom mb-16 text-center">
        <h2 className="section-title">Patient Stories</h2>
        <p className="text-gray-500">Real experiences from those we've served.</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex gap-8 animate-scroll whitespace-nowrap w-max px-4 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div 
              key={idx}
              className="w-[400px] bg-gray-50 rounded-3xl p-8 border border-gray-100 whitespace-normal flex flex-col justify-between hover:border-primary-200 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">"{item.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                    {item.name[0]}
                 </div>
                 <div>
                    <h4 className="font-bold text-brand-dark">{item.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.loc}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
