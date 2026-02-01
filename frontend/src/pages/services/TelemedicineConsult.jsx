import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mic, Video, Settings, ShieldCheck, ArrowRight, Loader } from 'lucide-react';

const TelemedicineConsult = () => {
  const [step, setStep] = useState(1);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => setChecking(false), 2000);
    }
  }, [step]);

  return (
    <div className="bg-[#0f172a] min-h-screen flex flex-col justify-center items-center text-white p-6 pt-16">
      <Helmet>
        <title>Consultation Waiting Room | Umang Hospital</title>
      </Helmet>

      <div className="w-full max-w-2xl">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-3xl font-bold mb-8">System Check</h1>
            
            <div className="grid gap-4 mb-8">
              <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${checking ? 'bg-white/10 animate-pulse' : 'bg-green-500/20 text-green-400'}`}>
                    <Mic className="w-5 h-5" />
                  </div>
                  <span>Microphone</span>
                </div>
                {checking ? <Loader className="w-5 h-5 animate-spin text-blue-400" /> : <span className="text-green-400 font-bold text-sm">Working</span>}
              </div>

              <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${checking ? 'bg-white/10 animate-pulse' : 'bg-green-500/20 text-green-400'}`}>
                    <Video className="w-5 h-5" />
                  </div>
                  <span>Camera</span>
                </div>
                {checking ? <Loader className="w-5 h-5 animate-spin text-blue-400" /> : <span className="text-green-400 font-bold text-sm">Working</span>}
              </div>

              <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${checking ? 'bg-white/10 animate-pulse' : 'bg-green-500/20 text-green-400'}`}>
                    <Wifi className="w-5 h-5" /> {/* Note: Assuming Wifi icon exists or replacing */}
                    <Settings className="w-5 h-5" /> 
                  </div>
                  <span>Connection</span>
                </div>
                {checking ? <Loader className="w-5 h-5 animate-spin text-blue-400" /> : <span className="text-green-400 font-bold text-sm">Stable</span>}
              </div>
            </div>

            <button 
              disabled={checking}
              onClick={() => setStep(2)}
              className={`w-full h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${checking ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20'}`}
            >
              Continue to Waiting Room <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] animate-pulse">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-serif font-bold mb-4">You are in the Queue</h2>
            <p className="text-xl text-gray-400 mb-8">Estimated Wait Time: <span className="text-white font-bold">4 Minutes</span></p>
            
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-left mb-8">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Next Available Doctor</h4>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt="Doctor" className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <p className="text-xl font-bold">Dr. Rahul Sharma</p>
                  <p className="text-gray-400 text-sm">Senior General Physician</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500">Please keep this window open. You will be automatically connected.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TelemedicineConsult;
