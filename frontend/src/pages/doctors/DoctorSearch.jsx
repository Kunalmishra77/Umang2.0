import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, ChevronRight, Clock, ShieldCheck, X, Phone, 
  Calendar, ArrowLeft, Award, MapPin, Filter, User, HelpCircle,
  ThumbsUp, Activity, Heart, Brain, Bone, Eye
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';

const departments = [
  { name: 'All', icon: Activity },
  { name: 'Cardiac Sciences', icon: Heart },
  { name: 'Neuro Sciences', icon: Brain },
  { name: 'Orthopaedics', icon: Bone },
  { name: 'Gastroenterology', icon: Activity },
  { name: 'General Surgery', icon: Activity },
  { name: 'Pediatrics', icon: User },
  { name: 'Oncology', icon: Activity },
  { name: 'Nephrology', icon: Activity },
  { name: 'Pulmonology', icon: Activity },
  { name: 'Urology', icon: Activity }
];

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
    <div className="bg-white min-h-screen pt-12">
      <Helmet><title>Find a Doctor | Umang Hospital</title></Helmet>

      {/* 1. Hero Section - Search Focused */}
      <section className="bg-[#0f172a] text-white py-12 lg:py-10 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
         <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">Find the Right <br /><span className="text-blue-400">Specialist.</span></h1>
               <p className="text-blue-200 text-lg mb-12 opacity-80">Search from our network of 100+ world-class doctors and book your consultation in seconds.</p>
               
               <div className="bg-white p-2 rounded-2xl shadow-2xl flex max-w-2xl mx-auto items-center">
                  <div className="flex-1 flex items-center px-4">
                     <Search className="w-6 h-6 text-gray-400 mr-3" />
                     <input 
                       type="text" 
                       placeholder="Search by name, specialty, or condition..." 
                       className="w-full h-14 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium text-lg"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
                  <button className="h-14 px-10 bg-[#005580] text-white rounded-xl font-bold hover:bg-[#004466] transition-all hidden md:block">
                     Find Doctor
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. Department Quick Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
         <div className="container-custom">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
               {departments.map((dept) => (
                  <button 
                     key={dept.name}
                     onClick={() => setSelectedDept(dept.name)}
                     className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all ${selectedDept === dept.name ? 'bg-[#005580] text-white shadow-lg' : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-300'}`}
                  >
                     <dept.icon className="w-4 h-4" />
                     {dept.name}
                  </button>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Main Directory & Preview */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:grid lg:grid-cols-12 h-auto lg:h-[800px]">
               
               {/* List Section */}
               <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col bg-white overflow-hidden h-[500px] sm:h-[600px] lg:h-full">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                     <h3 className="font-bold text-[#0f172a]">Doctors ({filteredDoctors.length})</h3>
                     <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                        <span className="hidden sm:inline">Tap to view</span>
                        <Filter className="w-5 h-5 cursor-pointer" />
                     </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                     {filteredDoctors.map(doc => (
                        <motion.div 
                           key={doc.id} 
                           onClick={() => handleDocSelect(doc.id)}
                           whileHover={{ scale: 1.01 }}
                           className={`p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] cursor-pointer transition-all flex items-center gap-4 sm:gap-5 border group ${
                              selectedDocId === doc.id ? 'bg-[#0f172a] text-white shadow-2xl border-transparent' : 'bg-white hover:bg-blue-50/50 border-gray-50'
                           }`}
                        >
                           <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-gray-100 group-hover:rotate-3 transition-transform">
                              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                           </div>
                           <div className="flex-1 min-w-0">
                              <h4 className="font-bold truncate text-sm sm:text-base mb-0.5">{doc.name}</h4>
                              <p className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${selectedDocId === doc.id ? 'text-blue-400' : 'text-[#005580]'}`}>{doc.dept}</p>
                              <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2 text-[9px] sm:text-[10px] font-bold">
                                 <span className="flex items-center gap-1 text-yellow-400"><Star className="w-2.5 h-2.5 fill-current" /> {doc.rating}</span>
                                 <span className="text-gray-400">• {doc.exp} Exp</span>
                              </div>
                           </div>
                           <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 ${selectedDocId === doc.id ? 'text-white' : 'text-gray-300'}`} />
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* Desktop Preview */}
               <div className="hidden lg:flex lg:col-span-7 bg-gray-50/30 flex-col border-l border-gray-100">
                  <AnimatePresence mode="wait">
                     <motion.div key={selectedDoc.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full">
                        <DetailContent doc={selectedDoc} />
                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Commitment Section */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom grid lg:grid-cols-3 gap-12">
            <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-gray-100">
               <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
               <h3 className="text-xl font-bold text-[#0f172a] mb-4">Board Certified</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Every doctor in our network undergoes a rigorous credentialing process to ensure the highest standards of medical care.</p>
            </div>
            <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-gray-100">
               <ThumbsUp className="w-12 h-12 text-green-600 mb-6" />
               <h3 className="text-xl font-bold text-[#0f172a] mb-4">Patient-First Approach</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Our doctors are ranked based on patient feedback, ensuring you receive care that is not only expert but also compassionate.</p>
            </div>
            <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-gray-100">
               <Award className="w-12 h-12 text-purple-600 mb-6" />
               <h3 className="text-xl font-bold text-[#0f172a] mb-4">Leading Specialists</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Access pioneers in medical research and complex surgeries, bringing global expertise to your local hospital.</p>
            </div>
         </div>
      </section>

      {/* 5. Educational: How to Choose */}
      <section className="py-32 bg-white">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-3" />
               <img src="/assets/images/hospital-reception.jpg" alt="Consultation" className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover" />
            </div>
            <div>
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-8">How to Choose the Right Specialist?</h2>
               <div className="space-y-8">
                  {[
                     { title: "Review Clinical Experience", desc: "Look at the doctor's years of practice and their specific focus areas within their specialty." },
                     { title: "Check Patient Testimonials", desc: "Read what other patients have to say about their experience and bedside manner." },
                     { title: "Evaluate Credentials", desc: "Verify board certifications, fellowship training, and academic contributions." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#005580] font-bold text-xl shrink-0">{i+1}</div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                           <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
         <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {[
                  { q: "Can I book a same-day appointment?", a: "Yes, if slots are available, you can book same-day appointments. Look for the 'Today' badge on doctor profiles." },
                  { q: "Do you offer second opinions online?", a: "Absolutely. Most of our specialists are available for video consultations specifically for second opinions." },
                  { q: "How do I cancel or reschedule?", a: "You can manage your bookings through the Patient Portal or by calling our helpline at 89297 33551." }
               ].map((faq, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100">
                     <h4 className="font-bold text-lg text-[#0f172a] mb-2 flex items-center gap-3"><HelpCircle className="w-5 h-5 text-blue-500" /> {faq.q}</h4>
                     <p className="text-gray-500 ml-8">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Mobile Detail Overlay */}
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
