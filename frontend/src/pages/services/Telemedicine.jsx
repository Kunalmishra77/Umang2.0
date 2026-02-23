import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Video,
  Calendar,
  Clock,
  ShieldCheck,
  Wifi,
  MessageSquare,
  Mic,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  HelpCircle,
  Laptop,
  Thermometer,
  Heart,
  Brain,
  Bone,
  Wind,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors as allDoctors } from '../../utils/doctorsData';
import { ASSETS } from '../../utils/imageAssets';

const doctors = allDoctors.slice(0, 3).map((doc) => ({
  id: doc.id,
  name: doc.name,
  spec: doc.specialty || doc.dept,
  exp: doc.exp,
  rating: doc.rating,
  img: doc.image,
  online: doc.id % 2 !== 0
}));

const specialties = [
  { name: 'General Fever', icon: Thermometer, waiting: '7 min', color: 'bg-orange-50 text-orange-600' },
  { name: 'Heart Symptoms', icon: Heart, waiting: '10 min', color: 'bg-red-50 text-red-600' },
  { name: 'Neuro Consult', icon: Brain, waiting: '12 min', color: 'bg-purple-50 text-purple-600' },
  { name: 'Joint Pain', icon: Bone, waiting: '9 min', color: 'bg-blue-50 text-blue-600' },
  { name: 'Respiratory', icon: Wind, waiting: '8 min', color: 'bg-cyan-50 text-cyan-600' },
  { name: 'Digestive Care', icon: Activity, waiting: '11 min', color: 'bg-emerald-50 text-emerald-600' }
];

const testimonials = [
  { name: 'Riya Kapoor', text: 'The video quality was excellent and I received my prescription instantly after the consultation.', rating: 5 },
  { name: 'Vikram Singh', text: 'Tele-consultation saved me a hospital visit for follow-up and helped me continue treatment on time.', rating: 5 }
];

const Telemedicine = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Telemedicine & Online Consultation | Umang Hospital</title>
        <meta name="description" content="Consult top doctors online via secure video call. Get digital prescriptions and follow-up care from the comfort of your home." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[600px] flex items-center bg-[#f0f9ff] overflow-hidden py-12 lg:py-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-[#e0f2fe] rounded-br-[8rem]" />
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-20 grid lg:grid-cols-2 panel-inner-gap items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-primary-600 font-bold uppercase tracking-widest text-xs mb-4">
              <Wifi className="w-4 h-4 animate-pulse" />
              <span>Live Video Consultation</span>
            </div>
            <h1 className="font-serif font-bold text-brand-dark mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4.3rem)' }}>
              Expert Care, <br />
              <span className="text-primary-600">Anytime, Anywhere.</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed mb-7 max-w-2xl">
              Skip travel and waiting room delays. Connect with Umang specialists through secure HD video for consultation, guidance, and follow-up.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/services/telemedicine/consult" className="h-11 px-6 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all flex items-center gap-2 shadow-lg shadow-primary-900/10">
                <Video className="w-4 h-4" /> Start Consultation
              </Link>
              <button className="h-11 px-6 rounded-xl bg-white border border-primary-100 text-primary-600 font-bold hover:bg-primary-50 transition-all flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Book for Later
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative">
            <div className="relative z-10 bg-white rounded-[2rem] shadow-2xl p-4 border border-gray-100 max-w-md mx-auto hover-card">
              <div className="relative h-[420px] rounded-[1.5rem] overflow-hidden">
                <img src={ASSETS.TELEMEDICINE} alt="Doctor on call" className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-4 left-4 bg-brand-dark/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs flex items-center gap-2 border border-white/10">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Live Consultation Active
                </div>
              </div>
              <div className="pt-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-brand-dark">Telemedicine Desk</h3>
                  <p className="text-xs text-gray-500">Secure consultation flow</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-200">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: DIGITAL STATS (NEW SECTION 2) */}
      <div className="bg-[#030712] py-10 md:py-12 text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
            {[
              { label: "Online Consults", value: "15,000+" },
              { label: "Digital Rx Issued", value: "12,000+" },
              { label: "Avg. Wait Time", value: "<10 Mins" },
              { label: "Patient Rating", value: "4.8/5" }
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-4 bg-primary-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-3xl lg:text-4xl font-serif font-bold mb-2 tracking-tighter text-white group-hover:text-primary-400 transition-colors duration-500">{stat.value}</p>
                <div className="flex flex-col items-center">
                  <div className="h-[1px] w-5 bg-primary-600/40 mb-3 group-hover:w-10 transition-all duration-700" />
                  <p className="text-[11px] lg:text-[12px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-300 transition-colors">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-10 text-center">Consult for Common Symptoms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((spec) => (
              <Link to="/services/telemedicine/consult" key={spec.name} className="group">
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all text-center h-full flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl ${spec.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                     <spec.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2 text-sm lg:text-base group-hover:text-primary-600 transition-colors">{spec.name}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 inline-block px-3 py-1 rounded-full mt-auto">Wait: {spec.waiting}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS (NEW SECTION 4) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <span className="section-subtitle">Process</span>
            <h2 className="section-title">3 Steps to Expert Advice</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-primary-100 -z-0" />
            {[
              { title: "Select Specialist", desc: "Choose from our panel of 50+ available specialists.", icon: User },
              { title: "Secure Video Call", desc: "Consult via HD video link sent to your WhatsApp/Email.", icon: Video },
              { title: "Digital Prescription", desc: "Receive your signed RX instantly on your dashboard.", icon: FileText }
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg text-primary-600 border-4 border-primary-50 group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed px-6">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8 gap-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-2">Available Doctors</h2>
              <p className="text-gray-500">Connect with specialists currently available online.</p>
            </div>
            <Link to="/doctors" className="text-[#005580] font-bold hidden md:flex items-center gap-2 hover:gap-3 transition-all">
              View All Doctors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {doctors.map((doc) => (
              <div key={doc.id} className="bg-white card-pad rounded-[1.5rem] border border-gray-100 hover-card flex gap-4 items-center">
                <Link to={`/doctor/${doc.id}`} className="relative shrink-0 block">
                  <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                  {doc.online && <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />}
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/doctor/${doc.id}`} className="font-bold text-[#0f172a] text-base truncate block hover:text-primary-600 transition-colors">{doc.name}</Link>
                  <p className="text-xs text-gray-500 truncate">{doc.spec}</p>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 mt-1">
                    <span className="flex items-center gap-1 text-yellow-500"><Star className="w-3 h-3 fill-current" /> {doc.rating}</span>
                    <span>{doc.exp} Exp</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Link to="/services/telemedicine/consult" className={`flex-1 py-2 rounded-lg text-[11px] font-bold text-center ${doc.online ? 'bg-[#005580] text-white hover:brightness-110 transition-all shadow-sm' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                      {doc.online ? 'Call Now' : 'Offline'}
                    </Link>
                    <button className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="bg-[#0f172a] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose Digital Care?</h2>
                <div className="space-y-5">
                  {[
                    { icon: ShieldCheck, title: 'Secure & Private', desc: 'Encrypted consultation flow aligned with telemedicine standards.', path: "/patient-experience" },
                    { icon: FileText, title: 'Digital Prescriptions', desc: 'Prescription shared immediately after consultation.', path: "/patient-corner/patient-information-literature" },
                    { icon: Clock, title: 'Flexible Scheduling', desc: 'Book consultations across weekdays and weekends.', path: "/contact" }
                  ].map((feat) => (
                    <Link to={feat.path} key={feat.title} className="flex gap-4 group block">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                        <feat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1 group-hover:text-primary-400 transition-colors">{feat.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white text-gray-900 rounded-[1.5rem] p-6 shadow-2xl max-w-sm mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#005580]">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Digital RX</h4>
                      <p className="text-xs text-gray-500">Issued by doctor</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-5">
                    <div className="h-2 bg-gray-100 rounded w-3/4" />
                    <div className="h-2 bg-gray-100 rounded w-full" />
                    <div className="h-2 bg-gray-100 rounded w-5/6" />
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src="/umang.svg" alt="Umang logo" className="h-5 w-auto opacity-60" />
                      <span className="text-xs font-bold text-gray-400">Signed Digitally</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CARE APP PROMO (NEW SECTION 8) */}
      <Section className="bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Everything you need in <br /><span className="text-blue-400">One Place.</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Track prescriptions, book follow-ups, and chat with care managers directly through the Umang Care app. 
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="h-14 px-8 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                  <Smartphone size={20} /> Play Store
                </button>
                <button className="h-14 px-8 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                  <Smartphone size={20} /> App Store
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] text-center max-w-sm mx-auto">
                <Smartphone size={64} className="text-blue-400 mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-2">98% Success</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Highly rated by 5000+ users for video stability and ease of use.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-brand-dark text-center mb-8">Patient Stories</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((test) => (
              <div key={test.name} className="bg-white card-pad rounded-2xl shadow-sm border border-blue-100 relative">
                <div className="text-4xl text-blue-200 absolute top-4 left-4 select-none">"</div>
                <p className="text-gray-600 mb-5 relative z-10 text-sm italic">{test.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-[#005580]">{test.name[0]}</div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">{test.name}</h4>
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(test.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TELEMEDICINE FAQ (NEW SECTION 10) */}
      <Section className="bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[120px] opacity-30 -mr-48 -mt-48" />
        <Container>
          <div className="text-center mb-20 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 mb-4 block">Help Center</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark">Telemedicine <span className="text-primary-600 italic">FAQ.</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
            {[
              { q: "Is digital prescription valid at pharmacies?", a: "Yes, our digital prescriptions are signed by registered doctors and are legally valid at all pharmacies across India as per IT Act 2000." },
              { q: "What if I experience technical issues during call?", a: "Our support team is on standby. If a call drops, the doctor will attempt to call you back, or we will reschedule instantly at no extra cost." },
              { q: "Can I use telemedicine for emergency cases?", a: "Telemedicine is NOT for life-threatening emergencies. Please call our 24/7 ER at 89297 33551 for immediate ambulance dispatch." },
              { q: "How do I join the video consultation?", a: "Once your appointment is confirmed, you'll receive a secure link via SMS and Email. Just click the link to join—no app download required." },
              { q: "Can I choose my preferred doctor?", a: "Yes, you can browse through our list of available specialists and choose the consultant who best fits your medical needs." },
              { q: "Are consultations private and secure?", a: "Absolutely. We use end-to-end encrypted video platforms that comply with global healthcare data privacy standards (HIPAA)." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <h4 className="font-bold text-brand-dark flex items-start gap-6 mb-4 text-xl group-hover:text-primary-600 transition-colors">
                  <span className="w-10 h-10 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-600 font-black text-sm group-hover:bg-primary-600 group-hover:text-white transition-all">?</span>
                  {faq.q}
                </h4>
                <div className="pl-16">
                  <p className="text-slate-500 text-lg font-light leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Requirements</h3>
          <div className="flex flex-wrap justify-center gap-5 text-gray-500 text-sm">
            <div className="flex items-center gap-2"><Wifi className="w-5 h-5 text-[#005580]" /> Stable Internet (4G/WiFi)</div>
            <div className="flex items-center gap-2"><Laptop className="w-5 h-5 text-[#005580]" /> Smartphone or Laptop</div>
            <div className="flex items-center gap-2"><Mic className="w-5 h-5 text-[#005580]" /> Working Mic & Camera</div>
            <div className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-[#005580]" /> Need Help? Call Support</div>
          </div>
        </div>
      </section>

      {/* SECTION: FINAL CTA (NEW SECTION 12) */}
      <section className="section-padding bg-primary-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 animate-pulse" />
        <Container className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to consult <br /><span className="text-primary-200">a specialist?</span></h2>
          <p className="text-primary-50 text-lg mb-12 max-w-2xl mx-auto">Get expert medical advice from the comfort of your home. Your health is just one video call away.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/services/telemedicine/consult" className="px-10 py-5 bg-white text-primary-600 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-all">
              Book Video Consult
            </Link>
            <a href={`tel:${siteConfig.contacts.main}`} className="px-10 py-5 border border-white/20 rounded-full font-bold text-base hover:bg-white/5 transition-all">
              Call Support Desk
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Telemedicine;
