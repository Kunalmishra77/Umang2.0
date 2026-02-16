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
    text: "The emergency team saved my father's life during a critical hour. Their rapid response and advanced ICU facilities are truly life-saving.",
    loc: 'Noida',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

const track = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50/50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-multiply" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-8 lg:mb-10 gap-6 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Patient Voices</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">Stories of <span className="hero-gradient-text italic">Hope.</span></h2>
            <p className="text-gray-500 mt-2 text-base lg:text-lg font-light">Real recovery journeys from those who trusted Umang.</p>
          </motion.div>

          <Link to="/patient-corner/patient-stories" className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 hover:border-primary-600 hover:bg-white text-brand-dark transition-all font-bold text-[11px] uppercase tracking-widest group h-12">
            View All Stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="relative flex overflow-hidden group py-8">
        <div className="flex gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] transition-all">
          {track.map((item, idx) => (
            <article
              key={`${item.name}-${idx}`}
              className="flex-shrink-0 w-[85vw] md:w-[380px] whitespace-normal"
            >
              <div className="h-full bg-white rounded-[2rem] p-7 md:p-10 border border-gray-100 shadow-[0_15px_40px_-12px_rgba(0,0,0,0.08)] relative group transition-all duration-500 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-900/5 flex flex-col">
                <div className="absolute top-6 right-8 text-gray-100/80">
                  <Quote className="w-10 h-10 fill-current transform rotate-180" />
                </div>

                <div className="relative z-10 flex-1">
                  <div className="flex gap-1.5 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed italic mb-8 font-medium">"{item.text}"</p>
                </div>

                <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-gray-50 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white ring-4 ring-gray-50/50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg text-brand-dark leading-none mb-1.5">{item.name}</h4>
                    <p className="text-[11px] text-primary-600 font-black uppercase tracking-[0.15em]">{item.loc}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-marquee {
          animation: marquee 50s linear infinite;
          display: flex;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 30s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none !important;
            overflow-x: auto !important;
            scrollbar-width: none;
          }
          .animate-marquee::-webkit-scrollbar {
            display: none;
          }
        }
      `}} />
    </section>
  );
};

export default Testimonials;
