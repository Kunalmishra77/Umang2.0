import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Mock Data (In production, fetch from API)
const data = {
  title: "Cardiac Sciences",
  subtitle: "Comprehensive Heart Care",
  desc: "Our Centre of Excellence for Cardiac Sciences is equipped with the latest technology for non-invasive and interventional cardiac care.",
  img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=2000",
  procedures: [
    "Angiography & Angioplasty", "Pacemaker Implantation", "Bypass Surgery (CABG)", "Valve Replacement"
  ],
  tech: [
    { title: "Cath Lab", desc: "Philips Azurion 7" },
    { title: "ECG/Echo", desc: "Advanced 4D Imaging" }
  ],
  faq: [
    { q: "What are the visiting hours for ICU?", a: "ICU visiting hours are 11:00 AM - 12:00 PM and 5:00 PM - 6:00 PM." },
    { q: "Do you accept insurance?", a: "Yes, we are empanelled with all major TPAs and government schemes." }
  ]
};

const SpecialityDetail = () => {
  const { id } = useParams(); // Use this to fetch real data

  return (
    <div className="bg-white">
      <Helmet>
        <title>{data.title} | Umang Superspeciality Hospital</title>
      </Helmet>

      {/* 1. Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-[#0f172a]">
        <img src={data.img} alt={data.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
        
        <div className="container-custom relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-300 font-bold uppercase tracking-widest text-xs mb-4">
              <Link to="/specialities" className="hover:text-white">Centres of Excellence</Link>
              <ChevronRight className="w-3 h-3" />
              <span>{data.title}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">{data.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">{data.desc}</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview & Procedures */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-8">Key Procedures</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-16">
                {data.procedures.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-8">Advanced Technology</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {data.tech.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900/5 border border-gray-100">
                    <h4 className="text-lg font-bold text-[#005580] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {data.faq.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 flex items-center gap-3 mb-2">
                      <HelpCircle className="w-5 h-5 text-blue-500" /> {item.q}
                    </h4>
                    <p className="text-gray-600 pl-8">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="bg-[#005580] rounded-[2rem] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                  <h3 className="text-2xl font-bold mb-4">Need a Consultation?</h3>
                  <p className="text-blue-100 mb-8 text-sm">Book an appointment with our expert cardiologists today.</p>
                  <Link to="/doctors" className="w-full bg-white text-[#005580] py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                    Find a Doctor <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-600" /> Insurance Partners
                  </h4>
                  <div className="grid grid-cols-3 gap-4 opacity-60">
                    <div className="h-8 bg-gray-200 rounded" />
                    <div className="h-8 bg-gray-200 rounded" />
                    <div className="h-8 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialityDetail;
