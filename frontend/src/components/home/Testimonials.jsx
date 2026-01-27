import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageCircle } from 'lucide-react';
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
    text: 'The emergency team saved my father\'s life during a critical hour. Their rapid response and advanced ICU facilities are truly life-saving. Forever grateful.', 
    loc: 'Noida',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <MessageCircle className="w-3 h-3" /> Voice of Our Patients
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] mb-6">
              Stories of <span className="text-blue-600">Hope & Healing</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Nothing speaks louder than the experiences of those who have walked through our doors and returned home with a smile.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-10 right-10 text-gray-100 group-hover:text-blue-50 transition-colors">
                <Quote className="w-16 h-16 fill-current" />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-xl leading-relaxed italic mb-10 font-light">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-5 relative z-10">
                 <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h4 className="font-bold text-xl text-[#0f172a]">{item.name}</h4>
                    <p className="text-sm text-blue-500 font-bold uppercase tracking-widest">{item.loc}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Link 
            to="/patient-corner/patient-stories" 
            className="inline-block px-10 py-4 rounded-full border-2 border-[#0f172a] text-[#0f172a] font-black text-sm uppercase tracking-widest hover:bg-[#0f172a] hover:text-white transition-all"
           >
              View All Patient Stories
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
