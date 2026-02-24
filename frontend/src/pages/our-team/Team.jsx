import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Award, Heart, UserPlus, Linkedin, 
  Mail, ChevronRight, Quote, Star, ShieldCheck, Activity, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';
import { ASSETS } from '../../utils/imageAssets';
import CountUp from '../../components/utils/CountUp';
import { Container } from '../../components/ui/Layout';

// Filter data
const leadership = doctors.filter(d => d.role.includes('Director'));
const heads = doctors.filter(d => d.role.includes('Head') && !d.role.includes('Director'));
const consultants = doctors.filter(d => d.role === 'Senior Consultant').slice(0, 8);

const Team = () => {
  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Medical Faculty - Visionaries of Umang Hospital</title>
        <meta name="description" content="Meet the medical experts, directors, and compassionate nursing staff behind Umang Hospital's success." />
      </Helmet>

      {/* SECTION 1: HERO - THE VISIONARIES */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.SURGERY_TEAM} 
            alt="Medical Faculty" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 font-bold uppercase tracking-[0.3em] text-xs mb-6">
              World-Class Faculty
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              The Minds Behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">The Miracles.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Meet the distinguished board of directors, department heads, and specialists who define clinical excellence at Umang Hospital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: LEADERSHIP BOARD */}
      <section className="py-12 lg:py-10 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-50 rounded-[3rem] z-0" />
              <img 
                src={ASSETS.DIRECTOR} 
                alt="Medical Director" 
                className="relative z-10 w-full aspect-[4/5] object-cover object-top rounded-[2.5rem] shadow-2xl border-8 border-white" 
              />
              <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-gray-100 hidden md:block">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-sm font-bold text-gray-800">"Healthcare is not just a profession, it is a sacred covenant between the healer and the healed."</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-[#005580]" />
                <span className="font-bold text-gray-400 uppercase tracking-widest text-sm">Leadership Profile</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-2">Dr. Vikram Sethi</h2>
              <p className="text-[#005580] font-bold text-lg mb-8">Group Medical Director & Founder</p>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  With over 35 years of experience in Cardiothoracic Surgery, Dr. Sethi has been the driving force behind Umang's rise as a global healthcare destination. His vision of "Ethical Precision" governs every procedure performed at our facility.
                </p>
                <p>
                  He is a recipient of the prestigious Padma Shri award and serves on the board of several international medical councils.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-[#0f172a]">
                    <CountUp to={35} suffix="+" />
                  </h4>
                  <p className="text-sm text-gray-500">Years Exp.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#0f172a]">
                    <CountUp to={10000} suffix="+" />
                  </h4>
                  <p className="text-sm text-gray-500">Surgeries</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#0f172a]">
                    <CountUp to={50} suffix="+" />
                  </h4>
                  <p className="text-sm text-gray-500">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES (NEW) */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Our Foundation</span>
            <h2 className="text-4xl font-serif font-bold mt-3">The Umang Philosophy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clinical Excellence", desc: "Rigorous adherence to international medical protocols and safety standards.", icon: Award },
              { title: "Patient Centricity", desc: "Every decision is made keeping the patient's well-being at the core.", icon: Heart },
              { title: "Ethical Transparency", desc: "Honest communication regarding diagnosis, treatment, and costs.", icon: ShieldCheck }
            ].map((v, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <v.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h4 className="text-2xl font-bold mb-4">{v.title}</h4>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DEPARTMENT HEADS (HODs) */}
      <section className="py-12 lg:py-10 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#005580] font-bold uppercase tracking-widest text-xs">Pillars of Excellence</span>
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mt-3">Heads of Department</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heads.slice(0, 4).map((doc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-[#0f172a] transition-all">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-[#0f172a] transition-all">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-1">{doc.name}</h3>
                  <p className={`text-sm font-bold mb-4 ${doc.deptColor.replace('text-', 'text-opacity-80 text-')}`}>{doc.dept}</p>
                  <Link to={`/doctor/${doc.id}`} className="text-sm font-bold text-gray-400 hover:text-[#005580] flex items-center justify-center gap-1 transition-colors">
                    View Profile <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MEDICAL BOARD (NEW) */}
      <section className="py-12 lg:py-10 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-4 block">Institutional Governance</span>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6">The Medical Advisory <span className="text-primary-600 italic">Council.</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our clinical decisions are guided by a board of senior medical experts who ensure that Umang Hospital remains at the forefront of medical ethics and innovation.
              </p>
              <div className="space-y-4">
                {["Monthly Clinical Audits", "Mortality & Morbidity Reviews", "Infection Control Surveillance", "Bio-Ethics Committee"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600" />
                    <span className="font-bold text-sm text-slate-700 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={ASSETS.ABOUT_GLOBAL} alt="Medical Board" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: SENIOR CONSULTANTS SLIDER/GRID */}
      <section className="py-12 lg:py-10 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#0f172a]">Senior Consultants</h2>
              <p className="text-gray-500 mt-2">Specialists with over 15 years of clinical experience.</p>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-[#0f172a] font-bold hover:bg-[#0f172a] hover:text-white transition-all">
              View Full Directory <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {consultants.map((doc, i) => (
              <Link key={i} to={`/doctor/${doc.id}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:shadow-lg transition-all border border-gray-100 group">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#0f172a] truncate group-hover:text-[#005580] transition-colors">{doc.name}</h4>
                  <p className="text-xs text-gray-500 truncate">{doc.dept}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs font-bold text-green-600">
                    <Star className="w-3 h-3 fill-current" /> {doc.rating}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: RESEARCH & PUBLICATIONS (NEW) */}
      <section className="py-12 lg:py-10 bg-white">
        <div className="container-custom">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">Academic <br />Excellence.</h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Our faculty is deeply involved in clinical research and academic publications, bringing the latest medical breakthroughs from global journals directly to our patients' bedsides.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-4xl font-bold mb-1">500+</h4>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Papers Published</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold mb-1">20+</h4>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Global CMEs</p>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Link to="/health-library/knowledge-center" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl">
                  Knowledge Center <ArrowRight size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: NURSING & SUPPORT (The Heart) */}
      <section className="py-12 lg:py-10 bg-[#005580] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#004466] transform skew-x-12 translate-x-20 z-0" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-rose-400 fill-current animate-pulse" />
                <span className="font-bold text-blue-200 uppercase tracking-widest text-sm">The Heart of Healthcare</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nursing Faculty</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Behind every successful surgery and every recovered patient is the tireless dedication of our nursing staff. They are the ones who hold your hand at 3 AM and cheer for your first steps.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-4xl font-bold mb-1">
                    <CountUp to={500} suffix="+" />
                  </h4>
                  <p className="text-blue-200 text-sm">Qualified Nurses</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold mb-1">1:1</h4>
                  <p className="text-blue-200 text-sm">ICU Patient Ratio</p>
                </div>
              </div>
              <Link to="/team/nursing" className="inline-flex items-center gap-2 text-rose-300 font-bold hover:text-white transition-colors">
                Meet Nursing Staff <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-rose-500 rounded-[3rem] opacity-20" />
              <img 
                src={ASSETS.NURSE_CARE} 
                alt="Nursing Staff" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full object-cover object-top h-[400px] sm:h-[500px]" 
              />
              <div className="absolute -bottom-8 left-4 sm:-left-8 bg-white text-[#0f172a] p-6 sm:p-8 rounded-2xl shadow-xl z-20 max-w-[280px] sm:max-w-xs">
                <Quote className="w-8 h-8 text-rose-400 mb-4 fill-current" />
                <p className="font-bold italic">"Compassion is the only language we speak fluently."</p>
                <p className="text-xs font-bold text-gray-400 mt-2 uppercase">- Sister Mary, Head Nurse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: QUALITY ASSURANCE (NEW) */}
      <section className="py-12 lg:py-10 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a]">Quality Assurance</h2>
            <p className="text-gray-500 mt-3">Commitment to zero-infection and error-free clinical delivery.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "NABH Accredited", icon: ShieldCheck },
              { label: "JCI Protocols", icon: Award },
              { label: "Patient Safety", icon: Heart },
              { label: "Infection Control", icon: Activity }
            ].map((q, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-xl transition-all">
                <q.icon className="w-12 h-12 text-[#005580] mx-auto mb-4" />
                <h4 className="font-bold text-[#0f172a]">{q.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: INTERNATIONAL FACULTY (NEW) */}
      <section className="py-12 lg:py-10 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img src={ASSETS.ABOUT_MAIN} alt="International Faculty" className="rounded-[3rem] shadow-2xl" />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Global Medical <span className="text-primary-600 italic">Partnerships.</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Umang Hospital collaborates with leading medical institutions across the UK, USA, and Germany for knowledge exchange and advanced surgical workshops.
              </p>
              <div className="flex flex-wrap gap-4">
                {["UK Royal Colleges", "Cleveland Clinic Network", "German Robotic Surgery Hub"].map((tag, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold border border-blue-100 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: JOIN THE FACULTY (CTA) */}
      <section className="py-12 lg:py-10 bg-white text-center">
        <div className="container-custom max-w-3xl">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 text-[#005580]">
            <UserPlus className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Join Our Mission</h2>
          <p className="text-gray-500 text-lg mb-10">
            Are you passionate about saving lives? We are always looking for talented doctors, nurses, and paramedical staff to join the Umang family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/careers" className="h-14 px-10 rounded-full bg-[#0f172a] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#005580] transition-all shadow-lg">
              View Current Openings
            </Link>
            <Link to="/contact" className="h-14 px-10 rounded-full border-2 border-gray-200 text-[#0f172a] font-bold flex items-center justify-center gap-2 hover:border-[#0f172a] transition-all">
              Contact HR
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
