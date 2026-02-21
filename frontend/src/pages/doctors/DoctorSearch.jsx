import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, ChevronRight, Clock, Shield, X, Phone, 
  Calendar, ArrowLeft, Award, MapPin, Filter, User, HelpCircle,
  ThumbsUp, Activity, Heart, Brain, Bone, Eye, Loader
} from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';
import SeoHead from '../../components/common/SeoHead';

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
  
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchDoctors = async (reset = false) => {
    try {
      setLoading(true);
      const currentPage = reset ? 1 : page;
      const response = await api.get(`/doctors?page=${currentPage}`);
      const newDoctors = response.data.data;
      
      if (reset) {
        setDoctors(newDoctors);
        setPage(2);
      } else {
        setDoctors(prev => [...prev, ...newDoctors]);
        setPage(prev => prev + 1);
      }
      
      if (response.data.meta && response.data.meta.last_page <= currentPage) {
        setHasMore(false);
      } else if (!response.data.meta && newDoctors.length < 12) {
          // Fallback if meta not present (simple pagination)
          setHasMore(false);
      }
      
    } catch (error) {
      console.error("Failed to fetch doctors", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors(true);
  }, []);

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
      (selectedDept === 'All' || doc.dept === selectedDept || doc.dept.includes(selectedDept)) &&
      (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.dept.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedDept, doctors]);

  const selectedDoc = useMemo(() => 
    doctors.find(d => d.id === selectedDocId) || doctors[0]
  , [selectedDocId, doctors]);

  const handleDocSelect = (id) => {
    setSelectedDocId(id);
    if (window.innerWidth < 1024) {
      setIsMobileDetailOpen(true);
    }
  };

  const DetailContent = ({ doc, isMobile = false }) => {
    if (!doc) return <div className="p-8 text-center text-gray-500">Select a doctor to view details</div>;

    return (
      <div className="h-full flex flex-col bg-white overflow-hidden">
      <div className="h-64 sm:h-80 lg:h-[320px] relative shrink-0">
        <img src={doc.image || ASSETS.DOCTORS_MALE[0]} alt={doc.name} className="w-full h-full object-cover object-top" onError={(e) => {e.target.src = ASSETS.DOCTORS_MALE[0]}} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-8 text-white pr-12 text-left">
          <div className="flex items-center gap-2 mb-2 lg:mb-3">
            <span className="bg-blue-500/30 backdrop-blur-md border border-white/30 text-blue-100 px-3 py-1 rounded-full text-[11px] lg:text-[12px] font-bold uppercase tracking-widest">
              {doc.dept}
            </span>
            <div className="flex items-center gap-1 text-yellow-400 text-[11px] lg:text-sm font-bold">
              <Star className="w-3 h-3 fill-current" /> {doc.rating || 'N/A'}
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[2.8rem] font-serif font-bold mb-1 leading-tight">{doc.name}</h2>
          <p className="text-blue-200 text-sm lg:text-base font-bold tracking-wide">{doc.role}</p>
        </div>
        
        {isMobile && (
          <button 
            onClick={() => setIsMobileDetailOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 active:scale-90 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="p-6 lg:p-8 flex-1 overflow-y-auto custom-scrollbar pb-32 lg:pb-8">
        <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-8 border-b border-gray-100 pb-8">
          <div className="text-center lg:text-left">
            <p className="text-[11px] lg:text-[12px] text-gray-400 font-bold uppercase mb-1">Experience</p>
            <p className="text-sm lg:text-xl font-bold text-[#0f172a]">{doc.exp}</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-[11px] lg:text-[12px] text-gray-400 font-bold uppercase mb-1">Expertise</p>
            <p className="text-sm lg:text-xl font-bold text-[#0f172a]">{doc.tags && doc.tags[0] ? doc.tags[0] : doc.dept}</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-[11px] lg:text-[12px] text-gray-400 font-bold uppercase mb-1">Rating</p>
            <p className="text-sm lg:text-xl font-bold text-[#0f172a]">{doc.rating}/5</p>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div className="text-left">
            <h4 className="text-[12px] lg:text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" /> Professional Overview
            </h4>
            <p className="text-gray-600 font-light italic leading-relaxed text-sm lg:text-lg">"{doc.about}"</p>
          </div>

          <div className="bg-blue-50/50 rounded-[2rem] p-6 lg:p-8 border border-blue-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center text-[#005580] shadow-sm">
                <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="text-left">
                <p className="text-[11px] lg:text-sm font-bold text-gray-400 uppercase mb-1">Availability</p>
                <p className="text-sm lg:text-lg font-bold text-[#005580]">{doc.nextSlot || 'Available'} (Slots Active)</p>
              </div>
            </div>
            <Link to={`/booking/${doc.id}`} className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-[#005580] text-white rounded-xl lg:rounded-2xl font-bold text-sm lg:text-base hover:bg-[#004466] transition-all shadow-lg text-center">
              Instant Booking
            </Link>
          </div>
          
          <Link to={`/doctor/${doc.id}`} className="block w-full py-3 lg:py-4 border-2 border-gray-100 rounded-xl lg:rounded-2xl text-[#0f172a] font-bold text-center hover:bg-gray-50 transition-all text-sm lg:text-base">
            View Full Career Profile
          </Link>
        </div>
      </div>
    </div>
  )};

  return (
    <div className="bg-white min-h-screen">
      <SeoHead 
        title="Find a Doctor" 
        description="Search from our network of 100+ world-class doctors and book your consultation in seconds at Umang Hospital."
        canonical="/doctors"
      />

      {/* 1. Hero Section - Search Focused */}
      <section className="bg-[#0f172a] text-white py-14 lg:py-18 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
         <div className="container-custom relative z-10 text-center max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] font-serif font-bold mb-5 tracking-tight leading-[1.05]">Find the Right <span className="text-blue-400">Specialist.</span></h1>
               <p className="text-blue-200 text-base lg:text-lg mb-10 lg:mb-12 opacity-80 max-w-2xl mx-auto font-light">Search from our network of 100+ world-class doctors and book your consultation in seconds.</p>
               
               <div className="bg-white p-1.5 lg:p-2 rounded-xl lg:rounded-2xl shadow-2xl flex max-w-2xl mx-auto items-center">
                  <div className="flex-1 flex items-center px-3 lg:px-4">
                     <Search className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 mr-2 lg:mr-3" />
                     <input 
                       type="text" 
                       placeholder="Search by name or specialty..." 
                       className="w-full h-10 lg:h-14 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium text-sm lg:text-lg"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
                  <button className="h-10 lg:h-14 px-6 lg:px-10 bg-[#005580] text-white rounded-lg lg:rounded-xl font-bold hover:bg-[#004466] transition-all hidden sm:block text-xs lg:text-sm">
                     Find Doctor
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. Department Quick Filter */}
      <section className="py-8 lg:py-12 bg-gray-50 border-b border-gray-100">
         <div className="container-custom">
            <div className="flex gap-3 lg:gap-4 overflow-x-auto no-scrollbar pb-2 px-4 lg:px-0">
               {departments.map((dept) => (
                  <button 
                     key={dept.name}
                     onClick={() => setSelectedDept(dept.name)}
                     className={`flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 rounded-full font-bold text-xs lg:text-sm whitespace-nowrap transition-all ${selectedDept === dept.name ? 'bg-[#005580] text-white shadow-lg' : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-300'}`}
                  >
                     <dept.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                     {dept.name}
                  </button>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: CLINICAL EXPERTISE STATS */}
      <div className="bg-primary-600 py-8 lg:py-10 text-white overflow-hidden relative border-y border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { label: "Board Certified", value: "100%" },
              { label: "Specialists", value: "100+" },
              { label: "Avg Experience", value: "15+ Yrs" },
              { label: "Patient Rating", value: "4.9/5" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-xl lg:text-3xl font-serif font-bold tracking-tight mb-1">{stat.value}</p>
                <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-primary-100/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. Main Directory & Preview */}
      <section className="section-padding bg-white">
         <div className="container-custom">
            <div className="bg-white lg:rounded-[3rem] lg:shadow-2xl overflow-hidden lg:border border-gray-100 flex flex-col lg:grid lg:grid-cols-12 h-auto lg:h-[760px]">
               
               {/* List Section */}
               <div className="lg:col-span-5 lg:border-r border-gray-100 flex flex-col bg-white overflow-hidden h-[500px] sm:h-[600px] lg:h-full">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                     <h3 className="font-bold text-[#0f172a] text-sm lg:text-base text-left">Doctors ({filteredDoctors.length})</h3>
                     <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                        <span className="hidden sm:inline">Scroll to view</span>
                        <Filter className="w-4 h-4 cursor-pointer" />
                     </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                     {loading && doctors.length === 0 ? (
                        <div className="flex items-center justify-center h-40">
                          <Loader className="w-8 h-8 animate-spin text-primary-500" />
                        </div>
                     ) : (
                       <>
                        {filteredDoctors.map(doc => (
                            <motion.div
                            key={doc.id} 
                            onClick={() => handleDocSelect(doc.id)}
                            whileHover={{ scale: 1.01 }}
                            className={`p-4 rounded-[1.5rem] lg:rounded-[2rem] cursor-pointer transition-all flex items-center gap-4 border group text-left ${
                                selectedDocId === doc.id ? 'bg-[#0f172a] text-white shadow-2xl border-transparent' : 'bg-white hover:bg-blue-50/50 border-gray-50'
                            }`}
                            >
                            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl overflow-hidden shrink-0 border border-gray-100 group-hover:rotate-3 transition-transform">
                                <img src={doc.image || ASSETS.DOCTORS_MALE[0]} alt={doc.name} className="w-full h-full object-cover" onError={(e) => {e.target.src = ASSETS.DOCTORS_MALE[0]}} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-base lg:text-lg mb-0.5 leading-tight">{doc.name}</h4>
                                <p className={`text-[11px] lg:text-[12px] font-black uppercase tracking-widest ${selectedDocId === doc.id ? 'text-blue-400' : 'text-[#005580]'}`}>{doc.dept}</p>
                                <div className="flex items-center gap-2 lg:gap-3 mt-1 lg:mt-2 text-[11px] lg:text-[12px] font-bold">
                                    <span className="flex items-center gap-1 text-yellow-400"><Star className="w-2.5 h-2.5 fill-current" /> {doc.rating || 'N/A'}</span>
                                    <span className="text-gray-400">• {doc.exp} Exp</span>
                                </div>
                            </div>
                            <ChevronRight className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 ${selectedDocId === doc.id ? 'text-white' : 'text-gray-300'}`} />
                            </motion.div>
                        ))}
                        {hasMore && (
                            <button 
                              onClick={() => fetchDoctors(false)} 
                              disabled={loading}
                              className="w-full py-3 text-sm font-bold text-primary-600 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                            >
                              {loading ? 'Loading...' : 'Load More Doctors'}
                            </button>
                        )}
                       </>
                     )}
                  </div>
               </div>

               {/* Desktop Preview */}
               <div className="hidden lg:flex lg:col-span-7 bg-gray-50/30 flex-col">
                  <AnimatePresence mode="wait">
                     <motion.div key={selectedDoc?.id || 'empty'} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full">
                        {selectedDoc && <DetailContent doc={selectedDoc} />}
                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* REST OF SECTIONS OMITTED FOR BREVITY IF NOT CHANGED, BUT I WILL KEEP THEM AS IS */}
      {/* SECTION: WHY OUR SPECIALISTS */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="Clinical Philosophy" 
                title="Expertise Powered by <span class='text-primary-600'>Compassion.</span>" 
                description="Our doctors are more than just medical experts; they are dedicated partners in your healing journey. We prioritize evidence-based protocols and patient-centered care."
              />
              <div className="space-y-8">
                {[
                  { title: "Multidisciplinary Approach", desc: "Complex cases are reviewed by boards involving multiple specialists." },
                  { title: "Continuous Learning", desc: "Our faculty participates in global medical conferences and research." },
                  { title: "Ethical Practice", desc: "Strict adherence to transparent diagnosis and ethical treatment paths." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary-100 rounded-[4rem] rotate-3 -z-10" />
              <img src={ASSETS.ABOUT_BEACON} alt="Our Expertise" className="rounded-[4rem] shadow-2xl w-full h-[550px] object-cover" />
            </div>
          </div>
        </Container>
      </Section>
      
      {/* SECTION: CONSULTATION PROCESS */}
      <Section className="bg-slate-50 text-center">
        <Container>
          <SectionHeading 
            eyebrow="Workflow" 
            title="How to Consult Our Experts" 
            centered
          />
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary-100 -z-0" />
            {[
              { title: "Search", desc: "Filter by specialty or name." },
              { title: "Profile", desc: "Review experience and expertise." },
              { title: "Book", desc: "Select a convenient time slot." },
              { title: "Consult", desc: "Visit hospital or connect via video." }
            ].map((step, i) => (
              <div key={i} className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-primary-500 flex items-center justify-center text-xl font-black text-primary-600 mx-auto mb-6 shadow-xl group-hover:bg-primary-600 transition-all">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Commitment Section */}
      <section className="section-padding bg-white">
         <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-6">
            <div className="p-8 lg:p-10 bg-slate-50 rounded-[2.5rem] lg:rounded-[3rem] shadow-sm border border-gray-100 text-left hover:bg-white hover:shadow-xl transition-all group">
               <Shield className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-lg lg:text-xl font-bold text-[#0f172a] mb-4">Board Certified</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Every doctor in our network undergoes a rigorous credentialing process to ensure the highest standards.</p>
            </div>
            <div className="p-8 lg:p-10 bg-slate-50 rounded-[2.5rem] lg:rounded-[3rem] shadow-sm border border-gray-100 text-left hover:bg-white hover:shadow-xl transition-all group">
               <ThumbsUp className="w-10 h-10 lg:w-12 lg:h-12 text-green-600 mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-lg lg:text-xl font-bold text-[#0f172a] mb-4">Patient-First Approach</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Our doctors are ranked based on patient feedback, ensuring you receive care that is compassionate.</p>
            </div>
            <div className="p-8 lg:p-10 bg-slate-50 rounded-[2.5rem] lg:rounded-[3rem] shadow-sm border border-gray-100 text-left hover:bg-white hover:shadow-xl transition-all group">
               <Award className="w-10 h-10 lg:w-12 lg:h-12 text-purple-600 mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-lg lg:text-xl font-bold text-[#0f172a] mb-4">Leading Specialists</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Access pioneers in medical research and complex surgeries, bringing global expertise locally.</p>
            </div>
         </div>
      </section>

      {/* SECTION: GLOBAL SUPPORT */}
      <Section className="bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-[120px]" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">International <span className="text-primary-400">Patient Desk.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                Seeking world-class medical expertise from abroad? Our dedicated international desk assists with visa invitation letters, airport transfers, and concierge services for foreign nationals.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">Visa Assistance</span>
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">Interpreters</span>
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">Remote Follow-up</span>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <Link to="/contact/inquiry-hub" className="block w-full py-5 bg-primary-600 text-white text-center rounded-2xl font-bold hover:bg-primary-500 transition-all shadow-xl shadow-primary-900/20 uppercase tracking-widest text-sm">
                Inquire for Travel
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: PATIENT FEEDBACK (NEW) */}
      <Section className="bg-gray-50 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">Patient Stories of <span className="text-primary-600">Recovery.</span></h2>
              <p className="text-gray-500 mb-8 font-medium">Read how our specialists have helped thousands of patients reclaim their health and vitality.</p>
              <Link to="/patient-corner/patient-stories" className="btn-primary py-4 px-8 rounded-xl text-sm font-bold shadow-lg">View More Stories</Link>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
              {[
                { name: "Sandeep Verma", text: "The cardiac team at Umang Hospital is exceptional. The surgery was seamless and the post-op care was world-class.", rating: 5 },
                { name: "Meena Gupta", text: "I highly recommend the neuro department. Their diagnostic accuracy and compassion made a huge difference in my recovery.", rating: 5 }
              ].map((review, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">{review.name.charAt(0)}</div>
                    <span className="font-bold text-slate-900 text-sm">{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <section className="section-padding bg-white border-t border-gray-100">
         <div className="container-custom max-w-4xl px-6">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0f172a] text-center mb-12 lg:mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {[
                  { q: "Can I book a same-day appointment?", a: "Yes, if slots are available, you can book same-day appointments. Look for the 'Today' badge." },
                  { q: "Do you offer second opinions online?", a: "Absolutely. Most of our specialists are available for video consultations specifically for second opinions." },
                  { q: "How do I cancel or reschedule?", a: "You can manage your bookings through the Patient Portal or by calling our helpline." }
               ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-gray-100 text-left">
                     <h4 className="font-bold text-base lg:text-lg text-[#0f172a] mb-2 flex items-center gap-3"><HelpCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" /> {faq.q}</h4>
                     <p className="text-gray-500 text-sm lg:text-base ml-7 lg:ml-8 leading-relaxed">{faq.a}</p>
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
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
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
