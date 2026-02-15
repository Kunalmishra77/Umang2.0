import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  { 
    name: 'Rajesh Kumar', 
    text: 'Exceptional care during my cardiac surgery. The team was supportive throughout the recovery process. The modular OTs and professional staff made me feel safe.', 
    loc: 'Gurugram',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  { 
    name: 'Anita Singh', 
    text: 'Best hospital for maternity. The facilities are world-class and very clean. The nursing staff was incredibly kind and attentive to all my needs.', 
    loc: 'Delhi',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  { 
    name: 'Vikram Mehta', 
    text: 'The emergency team saved my father\'s life during a critical hour. Their rapid response and advanced ICU facilities are truly life-saving.', 
    loc: 'Noida',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-multiply" />
      
      <div className="container-custom relative z-10 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 lg:mb-20 gap-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="section-subtitle">Voice of Our Patients</span>
            <h2 className="section-title">Stories of <span className="text-primary-600">Hope & Healing</span></h2>
            <p className="text-gray-500 mt-4 lg:mt-6 text-base lg:text-xl font-light leading-relaxed">
              Nothing speaks louder than the experiences of those who have walked through our doors and returned home with a smile.
            </p>
          </motion.div>
          
          <Link 
            to="/patient-corner/patient-stories" 
            className="hidden lg:flex btn-outline group py-4 px-8 rounded-full font-black uppercase tracking-widest text-xs"
          >
            View All Stories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Grid instead of infinite scroll for better mobile control */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between relative group transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-6 lg:top-8 right-6 lg:right-8 text-gray-100 group-hover:text-primary-50 transition-colors duration-500">
                <Quote className="w-12 h-12 lg:w-20 lg:h-20 fill-current transform rotate-180" />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed italic mb-8 font-light relative">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 lg:gap-5 relative z-10 pt-6 border-t border-gray-100">
                 <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden shadow-md border-2 border-white ring-2 ring-gray-100 group-hover:ring-primary-200 transition-all">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h4 className="font-bold text-base lg:text-lg text-brand-dark group-hover:text-primary-700 transition-colors">{item.name}</h4>
                    <p className="text-[10px] lg:text-xs text-primary-500 font-bold uppercase tracking-widest">{item.loc}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center lg:hidden">
           <Link 
            to="/patient-corner/patient-stories" 
            className="btn-outline w-full justify-center py-4 rounded-2xl text-xs uppercase font-black tracking-widest"
           >
              View All Stories
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
