import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, User, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">
      <Helmet>
        <title>Register | Umang Patient Portal</title>
      </Helmet>

      {/* LEFT: Cinematic Branding */}
      <div className="lg:w-5/12 bg-[#0f172a] relative overflow-hidden hidden lg:flex flex-col justify-center p-20 text-white">
         <div className="absolute inset-0 z-0">
            <img src="/assets/images/corrected/hospital-building.jpg" className="w-full h-full object-cover opacity-20" alt="Hospital" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#005580] via-[#0f172a] to-transparent" />
         </div>
         
         <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-16">
               <div className="p-2 bg-white rounded-xl shadow-lg">
                  <img src="/umang.svg" alt="Logo" className="h-10 w-auto object-contain" />
               </div>
               <span className="text-3xl font-serif font-bold">Umang</span>
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="text-5xl font-serif font-bold mb-8 leading-tight"
            >
              Start Your <br /><span className="text-blue-400 italic">Journey to Health.</span>
            </motion.h1>
            
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-sm">
               Register now to access exclusive healthcare benefits and manage your family's health under one portal.
            </p>
         </div>
      </div>

      {/* RIGHT: Register Form */}
      <div className="lg:w-7/12 flex flex-col justify-center p-8 md:p-20 relative">
         <div className="max-w-xl w-full mx-auto">
            <div className="mb-12">
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-2">Create Account</h2>
               <p className="text-gray-500">Join the Umang community for a healthier future.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                     <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <input type="text" placeholder="John Doe" className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 focus:border-[#005580] outline-none" />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <div className="relative">
                     <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <input type="tel" placeholder="+91 89297 33550" className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 focus:border-[#005580] outline-none" />
                  </div>
               </div>

               <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <input type="email" placeholder="Umanghospitalgurugram@gmail.com" className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 focus:border-[#005580] outline-none" />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                  <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <input type="password" placeholder="••••••••" className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 focus:border-[#005580] outline-none" />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Confirm Password</label>
                  <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <input type="password" placeholder="••••••••" className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 focus:border-[#005580] outline-none" />
                  </div>
               </div>

               <div className="md:col-span-2 py-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                     <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#005580] focus:ring-[#005580]" />
                     <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">I agree to the <Link to="#" className="text-[#005580] font-bold">Terms & Conditions</Link></span>
                  </label>
               </div>

               <div className="md:col-span-2">
                  <button className="w-full h-14 bg-[#005580] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] shadow-xl transition-all group">
                     Create Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </form>

            <div className="mt-8 text-center">
               <p className="text-gray-500 text-sm">
                  Already have an account? <Link to="/login" className="text-[#005580] font-bold hover:underline">Log in here</Link>
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Register;
