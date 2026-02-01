import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Upload, FileText, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PrescriptionUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
      setTimeout(() => navigate('/services/buy-medicines'), 3000);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-12">
      <Helmet>
        <title>Upload Prescription | Umang Pharmacy</title>
      </Helmet>

      <div className="container-custom max-w-xl">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 text-center">
          {!success ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#005580]">
                <FileText className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Upload Prescription</h1>
              <p className="text-gray-500 mb-8">Please upload a clear image of your valid prescription.</p>

              <div className="relative border-2 border-dashed border-gray-300 rounded-3xl h-64 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 hover:border-[#005580] transition-all cursor-pointer group mb-8">
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                />
                {!file ? (
                  <>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6 text-[#005580]" />
                    </div>
                    <p className="font-bold text-gray-700">Click to Upload</p>
                    <p className="text-xs text-gray-400 mt-1">JPG, PNG or PDF (Max 5MB)</p>
                  </>
                ) : (
                  <div className="relative z-20 flex flex-col items-center">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="font-bold text-gray-900">{file.name}</p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setFile(null); }}
                      className="mt-4 text-red-500 text-xs font-bold hover:underline flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Remove File
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={handleUpload}
                disabled={!file || uploading}
                className={`w-full h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${!file || uploading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#005580] text-white hover:bg-[#004466]'}`}
              >
                {uploading ? 'Uploading...' : 'Submit Prescription'} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Upload Successful!</h2>
              <p className="text-gray-500 mb-8">Our pharmacists will verify your prescription and contact you shortly.</p>
              <Link to="/services/buy-medicines" className="text-[#005580] font-bold hover:underline">Return to Pharmacy</Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrescriptionUpload;
