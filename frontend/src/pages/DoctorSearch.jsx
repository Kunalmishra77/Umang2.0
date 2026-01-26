import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ChevronRight, Clock, ShieldCheck, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { doctors } from '../utils/doctorsData';

const departments = ['All', 'Cardiac Sciences', 'Neuro Sciences', 'Orthopaedics', 'Gastroenterology', 'General Surgery', 'Pediatrics', 'Oncology', 'Nephrology'];

const DoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedDocId, setSelectedDocId] = useState(doctors[0].id);

  // Performance: Memoize filtered list
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => 
      (selectedDept === 'All' || doc.dept === selectedDept) &&
      (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.dept.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedDept]);

  const selectedDoc = useMemo(() => 
    doctors.find(d => d.id === selectedDocId) || doctors[0]
  , [selectedDocId]);

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      <Helmet><title>Medical Directory | Umang Hospital</title></Helmet>

      <section className="bg-[#0f172a] text-white py-10 pb-20 relative overflow-hidden">
         <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Medical Directory</h1>
            <p className="text-blue-300 text-sm opacity-80">Connected with {doctors.length} world-class specialists.</p>
         </div>
      </section>

      <div className="container-custom -mt-12 pb-20 relative z-20">
         <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row h-[750px]">
            
            {/* List */}
            <div className="lg:w-5/12 border-r border-gray-100 flex flex-col bg-white">
               <div className="p-5 border-b border-gray-100">
                  <div className="relative mb-4">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input 
                       type="text" 
                       placeholder="Search name or speciality..." 
                       className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-medium"
                       onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                     {departments.map(dept => (
                        <button key={dept} onClick={() => setSelectedDept(dept)}
                           className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${selectedDept === dept ? 'bg-[#005580] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                           {dept}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="flex-1 overflow-y-auto p-3 space-y-2 no-scrollbar">
                  {filteredDoctors.map(doc => (
                     <div key={doc.id} onClick={() => setSelectedDocId(doc.id)}
                        className={`p-3 rounded-2xl cursor-pointer transition-all flex items-center gap-4 border ${
                           selectedDocId === doc.id ? 'bg-[#0f172a] text-white shadow-lg border-transparent' : 'bg-white hover:bg-blue-50/50 border-gray-50'
                        }`}>
                        <img src={doc.image} alt={doc.name} loading="lazy" className="w-12 h-12 rounded-xl object-cover" />
                        <div className="flex-1 min-w-0">
                           <h4 className="font-bold truncate text-sm">{doc.name}</h4>
                           <p className={`text-[10px] truncate font-bold uppercase ${selectedDocId === doc.id ? 'text-blue-400' : 'text-primary-600'}`}>{doc.dept}</p>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${selectedDocId === doc.id ? 'text-white' : 'text-gray-300'}`} />
                     </div>
                  ))}
               </div>
            </div>

            {/* Preview */}
            <div className="hidden lg:flex lg:w-7/12 bg-gray-50/30 flex-col">
               <AnimatePresence mode="wait">
                  <motion.div key={selectedDoc.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                     className="h-full flex flex-col">
                     <div className="h-60 relative shrink-0">
                        <img src={selectedDoc.image} alt={selectedDoc.name} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-8 text-white">
                           <h2 className="text-3xl font-serif font-bold mb-1">{selectedDoc.name}</h2>
                           <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">{selectedDoc.role}</p>
                        </div>
                     </div>

                     <div className="p-8 flex-1 overflow-y-auto no-scrollbar">
                        <div className="grid grid-cols-3 gap-6 mb-8 border-b border-gray-100 pb-8">
                           <div>
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Experience</p>
                              <p className="text-lg font-bold text-[#0f172a]">{selectedDoc.exp}</p>
                           </div>
                           <div>
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Rating</p>
                              <p className="text-lg font-bold text-[#0f172a]">{selectedDoc.rating}/5</p>
                           </div>
                           <div>
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Cases</p>
                              <p className="text-lg font-bold text-[#0f172a]">{selectedDoc.cases.toLocaleString()}+</p>
                           </div>
                        </div>

                        <div className="space-y-6">
                           <div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                 <ShieldCheck className="w-4 h-4 text-green-500" /> Professional Overview
                              </h4>
                              <p className="text-gray-600 font-light italic">"{selectedDoc.about}"</p>
                           </div>

                           <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-xl flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#005580]">
                                    <Clock className="w-5 h-5" />
                                 </div>
                                 <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase">Available</p>
                                    <p className="text-sm font-bold text-[#005580]">{selectedDoc.nextSlot}</p>
                                 </div>
                              </div>
                              <Link to={`/booking/${selectedDoc.id}`} className="px-6 py-3 bg-[#005580] text-white rounded-xl font-bold text-sm hover:bg-[#004466] shadow-lg">
                                 Book Now
                              </Link>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DoctorSearch;