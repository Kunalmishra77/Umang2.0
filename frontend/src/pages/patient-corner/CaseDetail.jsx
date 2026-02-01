import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, User, Award, Microscope, CheckCircle, Calendar, Share2, Printer, ArrowRight } from 'lucide-react';

const CaseDetail = () => {
  const { id } = useParams();

  // Mock data for a breakthrough case
  const caseData = {
    title: "Rare Pediatric Heart Transplant",
    category: "Cardiology",
    doctor: "Dr. S. K. Gupta",
    date: "November 2025",
    tech: "ECMO Support & Advanced Bridging Therapy",
    patientAge: "4 Years",
    condition: "Dilated Cardiomyopathy",
    history: "The patient was referred to Umang Hospital in critical condition with failing heart function. Standard treatments were no longer effective...",
    procedure: "A donor heart became available via the National Organ Transplant Protocol. The 6-hour surgery involved complex vascular reconstruction...",
    outcome: "Post-operative recovery was monitored in our specialized Cardiac ICU. The patient showed remarkable resilience, walking within 10 days...",
    img: "https://images.unsplash.com/photo-1551076882-68b47d82a8da?auto=format&fit=crop&q=80&w=1200"
  };

  return (
    <div className="bg-white min-h-screen pt-16 pb-12">
      <Helmet>
        <title>{caseData.title} | Breakthrough Cases</title>
      </Helmet>

      <div className="container-custom max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <Link to="/patient-corner/breakthrough-cases" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#005580] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Cases
          </Link>
          <div className="flex gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#005580] transition-all"><Share2 className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#005580] transition-all"><Printer className="w-5 h-5" /></button>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="bg-yellow-500 text-[#0f172a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            {caseData.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">
            {caseData.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 py-8 border-y border-gray-100">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Lead Doctor</p>
              <p className="font-bold text-[#0f172a]">{caseData.doctor}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Patient Age</p>
              <p className="font-bold text-[#0f172a]">{caseData.patientAge}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Technology</p>
              <p className="font-bold text-[#0f172a]">{caseData.tech.split(' ')[0]}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Date</p>
              <p className="font-bold text-[#0f172a]">{caseData.date}</p>
            </div>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
            <img src={caseData.img} alt={caseData.title} className="w-full h-[450px] object-cover" />
          </div>

          <div className="space-y-12 text-gray-600 leading-relaxed">
            <section>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Background & History</h3>
              <p className="text-lg">{caseData.history}</p>
            </section>

            <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-[#005580] mb-4 flex items-center gap-3">
                <Microscope className="w-6 h-6" /> The Procedure
              </h3>
              <p className="text-lg text-blue-900/80">{caseData.procedure}</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" /> Clinical Outcome
              </h3>
              <p className="text-lg">{caseData.outcome}</p>
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-100 text-center">
            <h4 className="text-xl font-bold text-[#0f172a] mb-6">Want to learn more about our Cardiology expertise?</h4>
            <Link to="/specialities/cardiac" className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-[#005580] text-white font-bold hover:bg-[#004466] shadow-xl transition-all">
              Explore Department <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseDetail;
