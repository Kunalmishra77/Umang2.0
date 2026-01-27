import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Clock, Award, Users, Activity, Microscope } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#005580 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#005580] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Medical Excellence</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] mb-6 leading-tight">
            Why Patients <br /><span className="text-[#005580]">Trust Umang</span>
          </h2>
          <p className="text-xl text-gray-500 font-light">
            Providing Gurugram with a world-class healing ecosystem since 2010. 
            We combine high-tech infrastructure with deep human compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[320px]">
          
          {/* Card 1: The Infrastructure (Large) */}
          <div className="md:col-span-2 bg-[#0f172a] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 relative overflow-hidden group shadow-2xl min-h-[300px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 mb-8 md:mb-0">
                <ShieldCheck className="w-7 h-7 text-blue-400" />
              </div>
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">150-Bedded Superspeciality</h3>
                <p className="text-blue-100/70 text-base md:text-lg leading-relaxed">
                  Gurugram's premium healthcare facility featuring 28 ICU beds, 8 SICU, 7 CCU, and 3 state-of-the-art modular operation theatres.
                </p>
              </div>
            </div>
            
            <img 
               src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
               className="absolute right-0 bottom-0 w-full md:w-1/2 h-full object-cover opacity-20 md:opacity-30 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-1000" 
               alt="Hospital Building"
            />
          </div>

          {/* Card 2: 24/7 Support */}
          <div className="bg-[#f8fafc] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-500 border border-gray-100 group min-h-[250px] md:min-h-0">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all mb-8 md:mb-0">
               <Clock className="w-7 h-7" />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-[#0f172a] mb-2">24/7 Support</h3>
               <p className="text-gray-500 text-sm md:text-base">Emergency trauma care, fully stocked pharmacy, and diagnostic services available round-the-clock.</p>
            </div>
          </div>

          {/* Card 3: Advanced Tech */}
          <div className="bg-[#f8fafc] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-500 border border-gray-100 group min-h-[250px] md:min-h-0">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-[#005580] group-hover:bg-[#005580] group-hover:text-white transition-all mb-8 md:mb-0">
               <Zap className="w-7 h-7" />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Modern Tech</h3>
               <p className="text-gray-500 text-sm md:text-base">Cutting-edge Cath Labs, 128 Slice CT, 3 Tesla MRI, and 4D Ultrasound technology.</p>
            </div>
          </div>

          {/* Card 4: Clinical Excellence (Wide) */}
          <div className="md:col-span-2 bg-[#005580] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 relative overflow-hidden shadow-2xl group min-h-[300px]">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
             
             <div className="relative z-10 flex flex-col md:flex-row items-center h-full gap-8">
                <div className="flex-1">
                   <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 mb-6">
                      <Award className="w-7 h-7 text-blue-300" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Clinical Outcomes</h3>
                   <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
                      Our commitment to medical ethics and quality is reflected in our NABH accreditation and high patient recovery rates.
                   </p>
                </div>
                <div className="hidden lg:block w-48 h-48 bg-white/5 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center border border-white/10 shadow-2xl shrink-0">
                   <div className="text-center">
                      <p className="text-5xl font-bold text-white mb-1">50+</p>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Top Specialists</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
