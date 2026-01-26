import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Plus, Star, ShieldCheck, Clock, Truck, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const products = [
  { id: 1, name: 'Wellness Kit', cat: 'Health', price: '₹999', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Vitamin C Complex', cat: 'Supplements', price: '₹450', img: 'https://images.unsplash.com/photo-1616671285410-09502197946a?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Digital BP Monitor', cat: 'Devices', price: '₹2,499', img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Sanitization Pack', cat: 'Hygiene', price: '₹299', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=600' },
];

const Pharmacy = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>24/7 Pharmacy | Umang Hospital</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Trust & Quality</span>
               <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">Umang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Pharmacy</span></h1>
               <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">Authentic medicines, surgical supplies, and health wellness products delivered to your doorstep 24/7.</p>
               <div className="flex gap-6 text-sm text-blue-200">
                  <div className="flex items-center gap-2"><Truck className="w-4 h-4" /> Home Delivery</div>
                  <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 100% Genuine</div>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] relative">
               <h3 className="text-2xl font-bold mb-6">Upload Prescription</h3>
               <p className="text-gray-400 mb-8 text-sm">Need medicines quickly? Just upload your prescription and we will verify and deliver.</p>
               <button className="w-full py-4 bg-white text-[#0f172a] rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                  Select File <Plus className="w-4 h-4" />
               </button>
            </div>
         </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 container-custom">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a]">Essentials</h2>
            <button className="text-[#005580] font-bold text-sm flex items-center gap-2">View Full Store <ArrowRight className="w-4 h-4" /></button>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
               <motion.div whileHover={{ y: -10 }} key={item.id} className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className="h-64 relative overflow-hidden bg-white p-8">
                     <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-primary-600 mb-1 block">{item.cat}</span>
                     <h3 className="font-bold text-[#0f172a] text-lg mb-4">{item.name}</h3>
                     <div className="flex justify-between items-center">
                        <span className="text-xl font-black text-[#0f172a]">{item.price}</span>
                        <button className="w-10 h-10 rounded-xl bg-[#005580] text-white flex items-center justify-center hover:bg-[#004466] shadow-lg transition-all">
                           <ShoppingBag className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Pharmacy;
