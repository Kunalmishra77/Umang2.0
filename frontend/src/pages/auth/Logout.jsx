import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      // Clear authentication data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Small delay for visual effect
      setTimeout(() => {
        navigate('/');
        window.location.reload(); // Refresh to clear any states in context
      }, 1000);
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 max-w-sm w-full"
        >
          <div className="flex justify-center mb-6">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#0f172a] mb-2">Signing You Out</h2>
          <p className="text-slate-500 font-medium">Please wait while we secure your account session...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Logout;
