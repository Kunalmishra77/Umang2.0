import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, Shield, Info, Download, ChevronRight, 
  Search, Book, Phone, HelpCircle, ArrowRight, UserCheck, 
  Clock, MapPin, MessageCircle, AlertCircle, Bed
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const guides = [
  { id: 1, title: "Admission Process", category: "Hospital Stay", size: "1.2 MB" },
  { id: 2, title: "Patient Rights & Responsibilities", category: "Policy", size: "0.8 MB" },
  { id: 3, title: "Visitor Guidelines", category: "Hospital Stay", size: "0.5 MB" },
  { id: 4, title: "Insurance & TPA Handbook", category: "Billing", size: "2.4 MB" },
  { id: 5, title: "Dietary Instructions", category: "Wellness", size: "1.5 MB" },
  { id: 6, title: "Discharge Procedure", category: "Hospital Stay", size: "1.0 MB" }
];

const rooms = [
  { type: "General Ward", desc: "Economical multi-bed units with curtain partitions.", img: ASSETS.PATIENT_ROOM },
  { type: "Twin Sharing", desc: "Comfortable room shared by two patients.", img: ASSETS.TWIN_SHARING },
  { type: "Private Room", desc: "Single occupancy room with attendant couch.", img: ASSETS.PATIENT_ROOM },
  { type: "Suite", desc: "Luxury suite with separate living area for family.", img: ASSETS.TWIN_SHARING }
];

const PatientInformation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [downloading, setDownloading] = useState(null);

  const handleDownload = (id) => {
    setDownloading(id);
    setTimeout(() => setDownloading(null), 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Patient Information & Guides | Umang Hospital</title>
        <meta name="description" content="Essential information for patients and visitors. Admission guides, insurance details, and hospital policies." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#005580] overflow-hidden">
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
              <Info className="w-4 h-4" /> Patient Support
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Information <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Simplified.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Everything you need to know about your hospital visit, from admission to discharge, all in one place.
            </p>
            
            <div className="bg-white p-2 rounded-2xl shadow-2xl flex max-w-xl mx-auto transform hover:scale-105 transition-all duration-300">
               <div className="flex-1 flex items-center px-4">
                  <Search className="w-6 h-6 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search topics (e.g. Visiting Hours)" 
                    className="w-full h-14 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Process Overview */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-16 text-center">Your Journey with Us</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
               {[
                  { title: "Admission", desc: "Bring your ID proof, insurance card, and referral letter. Visit the front desk for seamless registration.", step: "01" },
                  { title: "During Stay", desc: "Our nursing staff will orient you to the room facilities. Meals are provided based on the dietician's chart.", step: "02" },
                  { title: "Discharge", desc: "Discharge summary and bills will be processed by noon. Our staff will assist you with medication instructions.", step: "03" }
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                     }}
                     className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all relative overflow-hidden group"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] -mr-10 -mt-10 group-hover:bg-blue-600 transition-all duration-500" />
                     <div className="text-6xl font-bold text-gray-100 absolute top-6 right-6 font-serif group-hover:text-blue-500/20 transition-colors">{item.step}</div>
                     
                     <h3 className="text-2xl font-bold text-[#0f172a] mb-4 relative z-10 group-hover:text-[#005580] transition-colors">{item.title}</h3>
                     <p className="text-gray-500 leading-relaxed mb-8 relative z-10 group-hover:text-gray-700 transition-colors">{item.desc}</p>
                     
                     <motion.div whileHover={{ x: 5 }} className="relative z-10">
                        <Link to="/contact" className="text-[#005580] font-bold flex items-center gap-2 text-sm">
                           Read Guidelines <ArrowRight className="w-4 h-4" />
                        </Link>
                     </motion.div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Room Categories */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-12">Accommodation Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {rooms.map((room, i) => (
                  <motion.div 
                     key={i} 
                     whileHover={{ y: -10 }}
                     className="group cursor-pointer"
                  >
                     <div className="relative overflow-hidden rounded-2xl mb-4 h-48 shadow-lg">
                        <img src={room.img} alt={room.type} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                     </div>
                     <h4 className="text-lg font-bold text-[#0f172a] group-hover:text-[#005580] transition-colors">{room.type}</h4>
                     <p className="text-sm text-gray-500">{room.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Downloadable Resources */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-16">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a]">Essential Downloads</h2>
               <Link to="/health-library/downloads" className="text-[#005580] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  View All Documents <ArrowRight className="w-5 h-5" />
               </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {guides.filter(g => g.title.toLowerCase().includes(searchTerm.toLowerCase())).map((guide) => (
                  <motion.div 
                     key={guide.id} 
                     whileHover={{ scale: 1.02 }}
                     onClick={() => handleDownload(guide.id)}
                     className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer group bg-white relative overflow-hidden"
                  >
                     <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#005580] shadow-sm group-hover:scale-110 transition-transform">
                        {downloading === guide.id ? <div className="w-5 h-5 border-2 border-[#005580] border-t-transparent rounded-full animate-spin" /> : <FileText className="w-6 h-6" />}
                     </div>
                     <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-[#0f172a] truncate mb-1">{guide.title}</h4>
                        <p className="text-xs text-gray-500">{guide.category} • {guide.size}</p>
                     </div>
                     <Download className={`w-5 h-5 transition-all ${downloading === guide.id ? 'text-green-500 scale-125' : 'text-gray-400 group-hover:text-[#005580]'}`} />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Patient Rights */}
      <section className="py-24 bg-[#005580] text-white">
         <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-serif font-bold mb-6">Patient Rights & Responsibilities</h2>
               <p className="text-blue-100 text-lg mb-8">
                  We are committed to providing care with dignity and respect. Understanding your rights helps us serve you better.
               </p>
               <ul className="space-y-4">
                  {["Right to Information", "Right to Privacy", "Right to Consent", "Right to Second Opinion"].map((right, i) => (
                     <li key={i} className="flex items-center gap-3 font-medium">
                        <Shield className="w-5 h-5 text-cyan-300" /> {right}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
               <h3 className="text-xl font-bold mb-4">Patient Responsibilities</h3>
               <ul className="space-y-3 text-sm text-blue-100">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-300 mt-1.5" /> Provide accurate medical history.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-300 mt-1.5" /> Follow the treatment plan.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-300 mt-1.5" /> Respect hospital staff and other patients.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-300 mt-1.5" /> Adhere to visiting hours and no-smoking policy.</li>
               </ul>
            </div>
         </div>
      </section>

      {/* 6. Visitor Policy */}
      <section className="py-24 bg-white">
         <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-12">Visitor Guidelines</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
               <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Clock className="w-8 h-8 text-[#005580] mb-4" />
                  <h4 className="font-bold mb-2">Visiting Hours</h4>
                  <p className="text-sm text-gray-500">Wards: 4 PM - 7 PM<br/>ICU: 11 AM - 12 PM</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <UserCheck className="w-8 h-8 text-[#005580] mb-4" />
                  <h4 className="font-bold mb-2">Visitor Pass</h4>
                  <p className="text-sm text-gray-500">1 attendant pass + 1 visitor pass issued at admission.</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <AlertCircle className="w-8 h-8 text-[#005580] mb-4" />
                  <h4 className="font-bold mb-2">Restrictions</h4>
                  <p className="text-sm text-gray-500">Children under 12 not allowed in ICUs. No outside food.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Insurance & Billing */}
      <section className="py-24 bg-blue-50">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <div className="inline-flex items-center gap-2 text-[#005580] font-bold uppercase tracking-widest text-xs mb-6">
                  <Shield className="w-4 h-4" /> Financial Support
               </div>
               <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Insurance & TPA</h2>
               <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
                  We have partnered with all major insurance providers to ensure a seamless cashless hospitalization experience for you.
               </p>
               <div className="grid grid-cols-2 gap-6 mb-10 opacity-60">
                  <div className="bg-white p-4 rounded-xl text-center font-bold text-gray-400 border border-gray-200">HDFC Ergo</div>
                  <div className="bg-white p-4 rounded-xl text-center font-bold text-gray-400 border border-gray-200">Star Health</div>
                  <div className="bg-white p-4 rounded-xl text-center font-bold text-gray-400 border border-gray-200">ICICI Lombard</div>
                  <div className="bg-white p-4 rounded-xl text-center font-bold text-gray-400 border border-gray-200">Max Bupa</div>
               </div>
               <Link to="/contact" className="inline-flex items-center gap-2 bg-[#005580] text-white px-8 py-4 rounded-full font-bold hover:bg-[#004466] transition-all shadow-lg">
                  Check Your Eligibility <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
            
            <div className="relative bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl">
               <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Billing Assistance</h3>
               <ul className="space-y-6">
                  <li className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#005580]" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#0f172a]">24/7 Helpline</h4>
                        <p className="text-sm text-gray-500">Call +91 124 456 7891 for billing queries.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-5 h-5 text-[#005580]" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#0f172a]">Financial Counseling</h4>
                        <p className="text-sm text-gray-500">Visit our counselor at the Ground Floor desk.</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* 8. Feedback & Grievance */}
      <section className="py-20 bg-white border-t border-gray-100 text-center">
         <div className="container-custom max-w-2xl">
            <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Your Feedback Matters</h2>
            <p className="text-gray-500 mb-8">
               We strive for excellence. If you have any suggestions or grievances, please let us know.
            </p>
            <Link to="/contact" className="text-[#005580] font-bold hover:underline">
               Submit Feedback Form
            </Link>
         </div>
      </section>

    </div>
  );
};

export default PatientInformation;