import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ChevronRight, Clock, ShieldCheck, X, Phone, Calendar, ArrowLeft, Award, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';

const departments = ['All', 'Cardiac Sciences', 'Neuro Sciences', 'Orthopaedics', 'Gastroenterology', 'General Surgery', 'Pediatrics', 'Oncology', 'Nephrology', 'Pulmonology', 'Urology'];

const DoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

  // Sync scroll lock when mobile detail is open
  useEffect(() => {
    if (isMobileDetailOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileDetailOpen]);

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => 
      (selectedDept === 'All' || doc.dept === selectedDept) &&
      (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.dept.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedDept]);

  const selectedDoc = useMemo(() => 
    doctors.find(d => d.id === selectedDocId) || doctors[0]
  , [selectedDocId]);

  const handleDocSelect = (id) => {
    setSelectedDocId(id);
    if (window.innerWidth < 1024) {
      setIsMobileDetailOpen(true);
    }
  };

  const DetailContent = ({ doc, isMobile = false }) => (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      <div className="h-64 sm:h-80 lg:h-72 relative shrink-0">
        <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-8 text-white pr-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-500/30 backdrop-blur-md border border-white/30 text-blue-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {doc.dept}
            </span>
            <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
              <Star className="w-3 h-3 fill-current" /> {doc.rating}
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-1 leading-tight">{doc.name}</h2>
          <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">{doc.role}</p>
        </div>
        
        {isMobile && (
          <button 
            onClick={() => setIsMobileDetailOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 active:scale-90 transition-transform"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="p-6 md:p-8 flex-1 overflow-y-auto custom-scrollbar pb-32 lg:pb-8">
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 border-b border-gray-100 pb-8">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Experience</p>
            <p className="text-base md:text-lg font-bold text-[#0f172a]">{doc.exp}</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Expertise</p>
            <p className="text-base md:text-lg font-bold text-[#0f172a] truncate">{doc.tags[0]}</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Rating</p>
            <p className="text-base md:text-lg font-bold text-[#0f172a]">{doc.rating}/5</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Professional Overview
            </h4>
            <p className="text-gray-600 font-light italic leading-relaxed text-sm md:text-base">"{doc.about}"</p>
          </div>

          <div className="bg-blue-50/50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#005580] shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Availability</p>
                <p className="text-sm md:text-base font-bold text-[#005580]">{doc.nextSlot} (Slots Active)</p>
              </div>
            </div>
            <Link to={`/booking/${doc.id}`} className="w-full sm:w-auto px-8 py-4 bg-[#005580] text-white rounded-2xl font-bold text-sm hover:bg-[#004466] transition-all shadow-lg text-center">
              Instant Booking
            </Link>
          </div>
          
          <Link to={`/doctor/${doc.id}`} className="block w-full py-4 border-2 border-gray-100 rounded-2xl text-[#0f172a] font-bold text-center hover:bg-gray-50 transition-all text-sm">
            View Full Career Profile
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      <Helmet><title>Medical Directory | Umang Hospital</title></Helmet>

      {/* Header Area */}
      <section className="bg-[#0f172a] text-white py-12 pb-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
         <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-3 tracking-tight">Medical Directory</h1>
            <p className="text-blue-300 text-sm md:text-base opacity-80">Discover world-class specialists dedicated to your recovery.</p>
         </div>
      </section>

      {/* Main Content Area */}
      <div className="container-custom -mt-16 pb-20 relative z-20">
         <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row h-auto lg:h-[800px]">
            
            {/* LIST SECTION - Scrollable list of doctors */}
            <div className="w-full lg:w-5/12 border-r border-gray-100 flex flex-col bg-white overflow-hidden h-[600px] lg:h-full">
               
               {/* Search & Filter Fixed Header */}
               <div className="p-5 border-b border-gray-100 bg-gray-50/50 sticky top-0 z-10">
                  <div className="relative mb-4">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input 
                       type="text" 
                       placeholder="Search name or speciality..." 
                       className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all text-sm font-medium shadow-sm"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                     {departments.map(dept => (
                        <button key={dept} onClick={() => setSelectedDept(dept)}
                           className={`px-4 py-2 rounded-full text-[10px] font-bold whitespace-nowrap transition-all uppercase tracking-wider ${selectedDept === dept ? 'bg-[#005580] text-white shadow-lg shadow-blue-900/20' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                           {dept}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Results List */}
               <div className="flex-1 overflow-y-auto p-3 space-y-2 no-scrollbar scroll-smooth">
                  {filteredDoctors.map(doc => (
                     <div key={doc.id} onClick={() => handleDocSelect(doc.id)}
                        className={`p-4 rounded-2xl cursor-pointer transition-all flex items-center gap-4 border group ${
                           selectedDocId === doc.id ? 'bg-[#0f172a] text-white shadow-xl border-transparent' : 'bg-white hover:bg-blue-50/50 border-gray-50 hover:border-blue-100'
                        }`}>
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-gray-100 group-hover:scale-105 transition-transform">
                           <img src={doc.image} alt={doc.name} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                           <h4 className="font-bold truncate text-sm md:text-base mb-0.5">{doc.name}</h4>
                           <p className={`text-[10px] truncate font-bold uppercase tracking-tight ${selectedDocId === doc.id ? 'text-blue-400' : 'text-primary-600'}`}>{doc.dept}</p>
                           <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-0.5 text-yellow-400">
                                 <Star className="w-3 h-3 fill-current" />
                                 <span className={`text-[10px] font-bold ${selectedDocId === doc.id ? 'text-gray-300' : 'text-gray-500'}`}>{doc.rating}</span>
                              </div>
                              <span className="text-[10px] text-gray-400 font-medium">• {doc.exp} Exp</span>
                           </div>
                        </div>
                        <ChevronRight className={`w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1 ${selectedDocId === doc.id ? 'text-white' : 'text-gray-300'}`} />
                     </div>
                  ))}
                  {filteredDoctors.length === 0 && (
                    <div className="text-center py-20 px-6">
                       <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                          <Search className="w-8 h-8" />
                       </div>
                       <p className="text-gray-500 font-medium">No specialists found.</p>
                       <button onClick={() => {setSearchTerm(''); setSelectedDept('All');}} className="text-[#005580] text-sm font-bold mt-2 hover:underline">Clear all filters</button>
                    </div>
                  )}
               </div>
            </div>

            {/* DESKTOP PREVIEW SECTION - Always visible on large screens */}
            <div className="hidden lg:flex lg:w-7/12 bg-gray-50/30 flex-col border-l border-gray-100">
               <AnimatePresence mode="wait">
                  <motion.div key={selectedDoc.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="h-full">
                     <DetailContent doc={selectedDoc} />
                  </motion.div>
               </AnimatePresence>
            </div>
         </div>
      </div>

      {/* MOBILE & TABLET DETAIL OVERLAY - Slide up animation */}
      <AnimatePresence>
        {isMobileDetailOpen && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[1000] lg:hidden bg-white pointer-events-auto"
          >
            <DetailContent doc={selectedDoc} isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoctorSearch;