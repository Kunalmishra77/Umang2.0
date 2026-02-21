import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, MapPin, Calendar, Clock, Award, Shield, 
  User, ChevronRight, BookOpen, Heart, ThumbsUp, 
  MessageSquare, Activity, GraduationCap, CheckCircle2 
} from 'lucide-react';
import { doctors } from '../../utils/doctorsData';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';
import { siteConfig } from '../../config/siteConfig';
import SeoHead from '../../components/common/SeoHead';

const DoctorProfile = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const doc = useMemo(() => doctors.find(d => d.id === parseInt(id)) || doctors[0], [id]);

  // Dates for booking (Next 3 days)
  const dates = [
    { day: 'Today', date: '20 Feb' },
    { day: 'Tomorrow', date: '21 Feb' },
    { day: 'Sun', date: '22 Feb' }
  ];

  const slots = ['10:00 AM', '10:30 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:30 PM', '04:00 PM', '05:00 PM'];

  return (
    <div className="bg-white min-h-screen pb-20">
      <SeoHead 
        title={`${doc.name} | ${doc.dept} Specialist`} 
        description={`${doc.name} is a ${doc.role} at Umang Hospital with ${doc.exp} experience. Specializing in ${doc.tags.join(', ')}.`}
        canonical={`/doctor/${id}`}
      />

      {/* 1. Profile Hero */}
      <section className="bg-brand-dark pt-32 pb-24 relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
         </div>
         
         <div className="container-custom relative z-10">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
               {/* Image */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="relative w-64 h-64 md:w-80 md:h-80 shrink-0"
               >
                  <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20" />
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover rounded-[3rem] border-4 border-white/10 shadow-2xl relative z-10" />
                  <div className="absolute -bottom-4 -right-4 bg-white text-brand-dark px-5 py-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-100">
                     <Star className="w-5 h-5 text-yellow-400 fill-current" />
                     <div>
                        <p className="font-bold text-lg leading-none">{doc.rating}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Patient Rating</p>
                     </div>
                  </div>
               </motion.div>

               {/* Info */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="text-center md:text-left text-white"
               >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                     {doc.dept}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight">{doc.name}</h1>
                  <p className="text-xl lg:text-2xl text-primary-100/80 mb-8 font-light max-w-2xl">{doc.role}</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
                     <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary-400" /> {doc.exp} Experience
                     </div>
                     <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-primary-400" /> Verified Faculty
                     </div>
                     <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-400" /> NABH Accredited
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. Content Layout */}
      <div className="container-custom -mt-12 relative z-20">
         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-8">
               
               {/* About & Expertise */}
               <div className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-premium border border-gray-100">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-brand-dark mb-6">Professional Biography</h3>
                  <p className="text-gray-600 leading-relaxed text-lg lg:text-xl font-light mb-10 italic">
                    "{doc.about || `Dr. ${doc.name.split(' ').pop()} is a dedicated specialist in ${doc.dept} with a focus on delivering high-quality, patient-centered care. With over ${doc.exp} of experience, they have handled complex cases with clinical excellence.`}"
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-primary-500" /> Clinical Expertise
                      </h4>
                      <ul className="space-y-4">
                        {(doc.tags || ['General Consultation', 'Clinical Diagnosis', 'Patient Management']).map((tag, i) => (
                          <li key={i} className="flex items-center gap-3 text-brand-dark font-bold text-sm lg:text-base">
                            <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary-500" /> Education
                      </h4>
                      <ul className="space-y-4">
                        <li className="text-gray-600 text-sm lg:text-base">
                          <span className="font-bold text-brand-dark block">Super Specialization</span>
                          Fellowship in {doc.dept}
                        </li>
                        <li className="text-gray-600 text-sm lg:text-base">
                          <span className="font-bold text-brand-dark block">Medical Degree</span>
                          MBBS, MD/MS from Premium Institute
                        </li>
                      </ul>
                    </div>
                  </div>
               </div>

               {/* Timeline / Milestones */}
               <div className="bg-slate-50 p-10 lg:p-12 rounded-[3rem] border border-gray-100">
                  <h3 className="text-2xl font-bold text-brand-dark mb-10">Career Milestones</h3>
                  <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                    {[
                      { year: 'Present', title: `Senior Consultant at ${siteConfig.shortName}`, desc: `Leading the ${doc.dept} department with advanced clinical protocols.` },
                      { year: 'Previous', title: 'Consultant Specialist', desc: 'Managed high-volume OPD and complex surgical procedures at renowned tertiary care centers.' },
                      { year: 'Early Career', title: 'Medical Residency', desc: 'Intensive training in emergency medicine and specialized clinical rotations.' }
                    ].map((item, i) => (
                      <div key={i} className="relative pl-10 group">
                        <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-primary-500 group-hover:scale-110 transition-transform z-10" />
                        <span className="text-xs font-black text-primary-600 uppercase tracking-widest mb-1 block">{item.year}</span>
                        <h4 className="text-lg lg:text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Patient Reviews */}
               <div className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-soft border border-gray-100">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-bold text-brand-dark">Patient Experiences</h3>
                    <div className="flex items-center gap-2 text-yellow-500">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { name: 'Rajesh Sharma', text: 'Very professional and explained the treatment path clearly. Highly satisfied with the recovery.' },
                      { name: 'Anita Verma', text: 'Dr. is very compassionate and patient. The entire staff at Umang was very helpful.' }
                    ].map((rev, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-gray-100 italic text-gray-600 text-sm leading-relaxed">
                        "{rev.text}"
                        <span className="block mt-4 font-bold text-brand-dark not-italic text-xs uppercase tracking-widest">— {rev.name}</span>
                      </div>
                    ))}
                  </div>
               </div>

            </div>

            {/* Sidebar Booking */}
            <div className="lg:col-span-4">
               <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 sticky top-32 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-full -mr-12 -mt-12" />
                  
                  <h3 className="text-xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                     <Calendar className="w-6 h-6 text-primary-600" /> Book Appointment
                  </h3>

                  {/* Date Selector */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                     {dates.map((d, i) => (
                        <button 
                           key={i}
                           onClick={() => setSelectedDate(i)}
                           className={`py-4 rounded-2xl text-center border-2 transition-all flex flex-col items-center justify-center ${
                              selectedDate === i 
                                ? 'bg-brand-dark text-white border-brand-dark shadow-xl' 
                                : 'border-gray-100 text-gray-500 hover:border-primary-200 hover:bg-primary-50/30'
                           }`}
                        >
                           <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{d.day}</span>
                           <span className="font-black text-sm">{d.date}</span>
                        </button>
                     ))}
                  </div>

                  {/* Slot Grid */}
                  <div className="mb-10">
                     <div className="flex justify-between items-center mb-4">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Available Slots</p>
                        <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Active
                        </p>
                     </div>
                     <div className="grid grid-cols-2 gap-3">
                        {slots.slice(0, 6).map((slot, i) => (
                           <button 
                              key={i}
                              onClick={() => setSelectedSlot(i)}
                              className={`py-3 rounded-xl text-xs font-black transition-all border ${
                                 selectedSlot === i 
                                   ? 'bg-primary-600 text-white border-primary-600 shadow-lg' 
                                   : 'bg-gray-50 text-gray-600 border-transparent hover:border-primary-200'
                              }`}
                           >
                              {slot}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-4">
                    <Link 
                       to={`/booking/${doc.id}`} 
                       className="w-full py-5 bg-primary-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-primary-700 shadow-xl shadow-primary-900/20 transition-all active:scale-[0.98]"
                    >
                       Confirm Slot <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a 
                      href={`tel:${siteConfig.contacts.main}`}
                      className="w-full py-5 bg-slate-50 text-brand-dark rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 border border-gray-100 hover:bg-white hover:shadow-md transition-all"
                    >
                      <Phone className="w-4 h-4" /> {siteConfig.contacts.main}
                    </a>
                  </div>
                  
                  <p className="text-center text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-widest leading-relaxed">
                     * No prepayment required. <br />Consultation fees applicable at hospital.
                  </p>
               </div>
            </div>

         </div>
      </div>

      {/* 3. Research & Publications (New Section) */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary-600 rounded-[4rem] rotate-3 opacity-10" />
              <div className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-2xl relative z-10 border border-gray-100">
                <BookOpen size={60} className="text-primary-500 mb-8 opacity-40" />
                <h3 className="text-3xl font-serif font-bold text-brand-dark mb-6">Medical Research & Publications</h3>
                <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">
                  Dr. {doc.name.split(' ').pop()} is actively involved in clinical research and has contributed to several international medical journals in the field of {doc.dept}.
                </p>
                <div className="space-y-4">
                  {[
                    "Analysis of outcomes in complex procedures",
                    "New clinical pathways for critical recovery",
                    "Impact of technology on diagnostic precision"
                  ].map((pub, i) => (
                    <div key={i} className="flex items-center gap-4 text-brand-dark font-bold text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary-500" /> {pub}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading 
                eyebrow="Academic Focus" 
                title="Continuous Medical <span class='text-primary-600'>Evolution.</span>" 
                description="Our specialists stay at the forefront of global medical advancements to ensure you receive the most modern treatment protocols available."
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-3xl shadow-soft">
                  <p className="text-3xl font-black text-primary-600 mb-1">10+</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Published Papers</p>
                </div>
                <div className="p-6 bg-white rounded-3xl shadow-soft">
                  <p className="text-3xl font-black text-primary-600 mb-1">25+</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Conferences</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Quality Care Band */}
      <section className="py-12 bg-primary-600 text-white overflow-hidden relative">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Shield size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold">Safe & Ethical Clinical Practice</h4>
                <p className="text-primary-100 text-sm opacity-80">Following NABH guidelines for every patient interaction.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 border-r border-white/10">
                <p className="text-2xl font-black">99%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Success Rate</p>
              </div>
              <div className="text-center px-6">
                <p className="text-2xl font-black">5k+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Procedures</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Clinical Hours FAQ */}
      <Section>
        <Container className="max-w-4xl">
          <SectionHeading 
            eyebrow="Guidelines" 
            title="OPD & Consultation FAQ" 
            centered
          />
          <div className="space-y-4">
            {[
              { q: "What should I bring for my first consultation?", a: "Please bring all your past medical reports, current medications, and a valid photo ID. If you have insurance, keep the e-card handy." },
              { q: "Is follow-up consultation free?", a: "Standard follow-up is free within 7 days of the primary consultation. Beyond that, a nominal follow-up fee may apply." },
              { q: "Can I consult via video?", a: "Yes, Dr. is available for video second opinions between 5:00 PM and 6:00 PM on weekdays." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-gray-100 text-left hover:bg-white hover:shadow-soft transition-all">
                <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                  <HelpCircle size={20} className="text-primary-600 shrink-0" /> {faq.q}
                </h4>
                <p className="text-gray-600 pl-9 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Final CTA */}
      <section className="section-padding bg-brand-dark text-white relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Secure your slot with <br /><span className="text-primary-400">{doc.name}</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">Early intervention leads to better clinical outcomes. Book your appointment today at Umang Superspeciality Hospital.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to={`/booking/${doc.id}`} className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-base shadow-xl hover:bg-primary-500 transition-all flex items-center justify-center gap-3">
                Book Instant Appointment <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                Inquire for Travel <MessageSquare size={20} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default DoctorProfile;
