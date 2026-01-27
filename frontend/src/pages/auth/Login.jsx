import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">
      <Helmet>
        <title>Login | Umang Patient Portal</title>
      </Helmet>

      {/* LEFT: Cinematic Branding */}
      <div className="lg:w-1/2 bg-[#0f172a] relative overflow-hidden hidden lg:flex flex-col justify-center p-20 text-white">
         <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20" alt="Hospital" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#005580] via-[#0f172a] to-transparent" />
         </div>
         
         <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-16">
               <div className="p-2 bg-white rounded-xl shadow-lg">
                  <img src="/umang.jpg" alt="Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
               </div>
               <span className="text-3xl font-serif font-bold">Umang</span>
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight"
            >
              Your Health, <br /><span className="text-blue-400 italic">One Click Away.</span>
            </motion.h1>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 font-medium">Access your medical reports securely.</p>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Heart className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 font-medium">Manage appointments & consultations.</p>
               </div>
            </div>
         </div>
      </div>

      {/* RIGHT: Login Form */}
      <div className="lg:w-1/2 flex flex-col justify-center p-8 md:p-20 relative">
         <div className="max-w-md w-full mx-auto">
            <div className="mb-12 text-center lg:text-left">
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-2">Welcome Back</h2>
               <p className="text-gray-500">Enter your credentials to access your patient portal.</p>
            </div>

            <form className="space-y-6">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <input 
                       type="email" 
                       placeholder="name@company.com" 
                       className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 focus:border-[#005580] focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between items-center">
                     <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                     <Link to="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot Password?</Link>
                  </div>
                  <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <input 
                       type="password" 
                       placeholder="••••••••" 
                       className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 focus:border-[#005580] focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                     />
                  </div>
               </div>

               <button className="w-full h-14 bg-[#005580] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] shadow-xl transition-all group">
                  Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </form>

            <div className="mt-12 text-center">
               <p className="text-gray-500 text-sm">
                  New to Umang? <Link to="/register" className="text-[#005580] font-bold hover:underline">Create an account</Link>
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Login;