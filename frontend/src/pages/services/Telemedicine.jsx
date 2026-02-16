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
  Laptop
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
  { name: 'General Fever', icon: '🌡️', waiting: '7 min' },
  { name: 'Heart Symptoms', icon: '❤️', waiting: '10 min' },
  { name: 'Neuro Consult', icon: '🧠', waiting: '12 min' },
  { name: 'Joint Pain', icon: '🦴', waiting: '9 min' },
  { name: 'Respiratory', icon: '🫁', waiting: '8 min' },
  { name: 'Digestive Care', icon: '🩺', waiting: '11 min' }
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

      <section className="relative section-padding overflow-hidden bg-[#f0f9ff]">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-[#e0f2fe] rounded-br-[8rem]" />
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-20 grid lg:grid-cols-2 panel-inner-gap items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-[#005580] font-bold uppercase tracking-widest text-xs mb-4">
              <Wifi className="w-4 h-4 animate-pulse" />
              <span>Live Video Consultation</span>
            </div>
            <h1 className="font-serif font-bold text-[#0f172a] mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4.3rem)' }}>
              Expert Care, <br />
              <span className="text-[#005580]">Anytime, Anywhere.</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed mb-7 max-w-2xl">
              Skip travel and waiting room delays. Connect with Umang specialists through secure HD video for consultation, guidance, and follow-up.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/services/telemedicine/consult" className="h-11 px-6 rounded-xl bg-[#005580] text-white font-bold hover:brightness-110 transition-all flex items-center gap-2">
                <Video className="w-4 h-4" /> Start Consultation
              </Link>
              <button className="h-11 px-6 rounded-xl bg-white border border-blue-100 text-[#005580] font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Book for Later
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative">
            <div className="relative z-10 bg-white rounded-[2rem] shadow-2xl p-4 border border-gray-100 max-w-md mx-auto hover-card">
              <div className="relative h-[420px] rounded-[1.5rem] overflow-hidden">
                <img src={ASSETS.TELEMEDICINE} alt="Doctor on call" className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Live Consultation
                </div>
              </div>
              <div className="pt-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-[#0f172a]">Telemedicine Desk</h3>
                  <p className="text-xs text-gray-500">Secure consultation flow</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-200">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-8 text-center">Consult for Common Symptoms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {specialties.map((spec) => (
              <Link to="/services/telemedicine/consult" key={spec.name} className="group">
                <div className="bg-white card-pad rounded-2xl border border-gray-100 shadow-sm hover-card text-center h-full">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform inline-block">{spec.icon}</div>
                  <h3 className="font-bold text-[#0f172a] mb-1 text-sm">{spec.name}</h3>
                  <p className="text-[10px] font-bold text-green-600 bg-green-50 inline-block px-2 py-0.5 rounded-full">Wait: {spec.waiting}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8 gap-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-2">Available Doctors</h2>
              <p className="text-gray-500">Connect with specialists currently available online.</p>
            </div>
            <Link to="/doctors" className="text-[#005580] font-bold hidden md:flex items-center gap-2 hover:gap-3 transition-all">
              View All Doctors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {doctors.map((doc) => (
              <div key={doc.id} className="bg-white card-pad rounded-[1.5rem] border border-gray-100 hover-card flex gap-4 items-center">
                <div className="relative shrink-0">
                  <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                  {doc.online && <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#0f172a] text-base truncate">{doc.name}</h3>
                  <p className="text-xs text-gray-500 truncate">{doc.spec}</p>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 mt-1">
                    <span className="flex items-center gap-1 text-yellow-500"><Star className="w-3 h-3 fill-current" /> {doc.rating}</span>
                    <span>{doc.exp} Exp</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Link to="/services/telemedicine/consult" className={`flex-1 py-2 rounded-lg text-[11px] font-bold text-center ${doc.online ? 'bg-[#005580] text-white hover:brightness-110' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                      {doc.online ? 'Call Now' : 'Offline'}
                    </Link>
                    <button className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
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
                    { icon: ShieldCheck, title: 'Secure & Private', desc: 'Encrypted consultation flow aligned with telemedicine standards.' },
                    { icon: FileText, title: 'Digital Prescriptions', desc: 'Prescription shared immediately after consultation.' },
                    { icon: Clock, title: 'Flexible Scheduling', desc: 'Book consultations across weekdays and weekends.' }
                  ].map((feat) => (
                    <div key={feat.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0">
                        <feat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{feat.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
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

      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center mb-8">Patient Stories</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((test) => (
              <div key={test.name} className="bg-white card-pad rounded-2xl shadow-sm border border-blue-100 relative">
                <div className="text-4xl text-blue-200 absolute top-4 left-4">"</div>
                <p className="text-gray-600 mb-5 relative z-10 text-sm">{test.text}</p>
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
    </div>
  );
};

export default Telemedicine;
