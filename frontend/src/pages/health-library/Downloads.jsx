import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Download, FileText, Search, ShieldCheck, File, 
  ChevronRight, Printer, Eye 
} from 'lucide-react';

const categories = ["All", "Patient Forms", "Insurance", "Guides", "Brochures"];

const files = [
  { id: 1, title: "Patient Admission Form", category: "Patient Forms", size: "1.2 MB", type: "PDF" },
  { id: 2, title: "TPA / Insurance Checklist", category: "Insurance", size: "0.8 MB", type: "PDF" },
  { id: 3, title: "Surgery Consent Form", category: "Patient Forms", size: "1.5 MB", type: "PDF" },
  { id: 4, title: "Discharge Process Guide", category: "Guides", size: "2.1 MB", type: "PDF" },
  { id: 5, title: "Cardiology Dept Brochure", category: "Brochures", size: "5.4 MB", type: "PDF" },
  { id: 6, title: "Visitor Policy", category: "Guides", size: "0.5 MB", type: "PDF" },
];

const Downloads = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFiles = files.filter(file => 
    (activeCategory === 'All' || file.category === activeCategory) &&
    file.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Patient Downloads | Umang Hospital</title>
        <meta name="description" content="Download essential hospital forms, insurance checklists, and patient education brochures." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Download className="w-4 h-4" /> Resources Center
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Essential Forms & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Documents.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Save time at the hospital. Access, fill, and print necessary forms from the comfort of your home.
            </p>
            
            <div className="bg-white p-2 rounded-2xl shadow-2xl flex max-w-xl mx-auto transform hover:scale-105 transition-all duration-300">
               <div className="flex-1 flex items-center px-4">
                  <Search className="w-6 h-6 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search documents..." 
                    className="w-full h-14 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Downloads Library */}
      <section className="py-16 bg-gray-50">
         <div className="container-custom">
            <div className="flex flex-wrap gap-4 justify-center mb-16">
               {categories.map((cat) => (
                  <button 
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#005580] text-white shadow-xl' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                  >
                     {cat}
                  </button>
               ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredFiles.map((file) => (
                  <motion.div 
                     key={file.id}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     whileHover={{ y: -5 }}
                     className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all group"
                  >
                     <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-[#005580]">
                           <FileText className="w-7 h-7" />
                        </div>
                        <span className="text-[10px] font-bold bg-gray-50 px-3 py-1 rounded-full uppercase tracking-wider text-gray-500">
                           {file.type} • {file.size}
                        </span>
                     </div>
                     
                     <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#005580] transition-colors">{file.title}</h3>
                     <p className="text-sm text-gray-400 mb-8">{file.category}</p>
                     
                     <div className="flex gap-3">
                        <button className="flex-1 h-12 rounded-xl bg-[#0f172a] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#005580] transition-all text-sm">
                           <Download className="w-4 h-4" /> Download
                        </button>
                        <button className="w-12 h-12 rounded-xl border-2 border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[#0f172a] transition-all">
                           <Eye className="w-5 h-5" />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Insurance Partners */}
      <section className="py-16 bg-white border-t border-gray-100">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <div className="inline-flex items-center gap-2 text-[#005580] font-bold uppercase tracking-widest text-xs mb-6">
                  <ShieldCheck className="w-4 h-4" /> Cashless Treatment
               </div>
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Insurance & TPA</h2>
               <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                  We are empanelled with all major insurance providers and Third Party Administrators (TPAs) to offer you a hassle-free cashless hospitalization experience.
               </p>
               <button className="flex items-center gap-2 text-[#005580] font-bold text-lg hover:gap-3 transition-all">
                  View Full List of TPAs <ChevronRight className="w-5 h-5" />
               </button>
            </div>
            <div className="grid grid-cols-2 gap-6 opacity-60">
               {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-24 bg-gray-50 rounded-2xl flex items-center justify-center font-bold text-gray-300 text-xl border border-gray-100">
                     Partner Logo
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default Downloads;
