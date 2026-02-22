import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, 
  Calendar, Droplets, Camera, Save,
  Globe, Shield, Smartphone
} from 'lucide-react';

const PatientProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Profile Settings</h1>
          <p className="text-slate-500 font-medium">Manage your personal information and health profile.</p>
        </div>
        <button className="h-12 px-8 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          <Save className="w-4 h-4" /> Save All Changes
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Account Security */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
            <div className="relative inline-block mb-6">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Profile" 
                className="w-32 h-32 rounded-[2.5rem] object-cover ring-8 ring-slate-50"
              />
              <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 text-white rounded-xl border-4 border-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#0f172a]">Richard Wilson</h3>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">UH-2026-9821</p>
            
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Blood Group</p>
                <p className="text-lg font-bold text-[#0f172a]">O+</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Age</p>
                <p className="text-lg font-bold text-[#0f172a]">38 Yrs</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-[2.5rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[60px] opacity-20 -mr-16 -mt-16" />
            <div className="relative z-10">
              <Shield className="w-8 h-8 text-blue-400 mb-6" />
              <h4 className="text-xl font-serif font-bold mb-2">Account Security</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Ensure your medical records are safe by updating your password regularly.</p>
              <button className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-white/20 pb-1 hover:border-blue-400 transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Form */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#0f172a] mb-8 flex items-center gap-3">
              <User className="text-blue-600 w-6 h-6" /> Personal Information
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" defaultValue="Richard" className="w-full h-12 pl-12 pr-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" defaultValue="Wilson" className="w-full h-12 pl-12 pr-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="email" defaultValue="Richard.wilson@example.com" className="w-full h-12 pl-12 pr-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" defaultValue="+91 98210 12345" className="w-full h-12 pl-12 pr-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" defaultValue="1983-07-24" className="w-full h-12 pl-12 pr-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Blood Group</label>
                <div className="relative">
                  <Droplets className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select className="w-full h-12 pl-12 pr-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none appearance-none">
                    <option>O+</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>AB+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#0f172a] mb-8 flex items-center gap-3">
              <MapPin className="text-blue-600 w-6 h-6" /> Residential Address
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Street Address</label>
                <input type="text" defaultValue="Flat 402, Sunshine Residency, Palam Vihar" className="w-full h-12 px-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">City</label>
                <input type="text" defaultValue="Gurugram" className="w-full h-12 px-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">State</label>
                <input type="text" defaultValue="Haryana" className="w-full h-12 px-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Zip Code</label>
                <input type="text" defaultValue="122011" className="w-full h-12 px-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Country</label>
                <input type="text" defaultValue="India" className="w-full h-12 px-4 bg-slate-50 border-none rounded-xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all outline-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientProfile;
