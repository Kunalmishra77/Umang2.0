import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Share2, Printer, Download, User, Tag } from 'lucide-react';

const PressReleaseDetail = () => {
  const { id } = useParams();

  // Mock data for a press release
  const release = {
    title: "Umang Hospital Inaugurates Advanced Robotic Surgery Wing",
    date: "Jan 25, 2026",
    category: "New Launch",
    author: "Hospital Communications Bureau",
    content: `
      <p class="mb-6 text-xl text-gray-600 font-light leading-relaxed">GURUGRAM, INDIA – Umang Hospital today announced the official opening of its state-of-the-art Robotic Surgery Wing, featuring the latest generation Da Vinci Xi surgical system.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-[#0f172a]">A Milestone in Minimally Invasive Care</h3>
      <p class="mb-6 leading-relaxed">The inauguration was presided over by the Group Medical Director, who emphasized the hospital's commitment to bringing global medical standards to the region. The new system allows surgeons to perform complex procedures with unprecedented precision and control.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-[#0f172a]">Patient Benefits</h3>
      <p class="mb-6 leading-relaxed">Robotic-assisted surgery offers significant advantages for patients, including smaller incisions, reduced blood loss, shorter hospital stays, and a faster return to normal daily activities.</p>
      
      <p class="mb-6 leading-relaxed italic border-l-4 border-[#005580] pl-6 py-2 bg-gray-50">"This technology is a game-changer for complex oncology and urological procedures. Our team has undergone rigorous training to master this platform," said the Head of Surgery.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-[#0f172a]">About Umang Hospital</h3>
      <p class="mb-6 leading-relaxed">Umang Hospital is a leading multi-speciality healthcare provider committed to excellence in patient care, clinical research, and medical education.</p>
    `,
    img: "https://images.unsplash.com/photo-1551076882-68b47d82a8da?auto=format&fit=crop&q=80&w=1200"
  };

  return (
    <div className="bg-white min-h-screen pt-16 pb-12">
      <Helmet>
        <title>{release.title} | Official Press Release</title>
      </Helmet>

      <div className="container-custom max-w-4xl">
        <div className="flex justify-between items-center mb-12">
          <Link to="/media-center/press-release" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#005580] transition-colors font-bold">
            <ArrowLeft className="w-4 h-4" /> Newsroom
          </Link>
          <div className="flex gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#005580] transition-all"><Share2 className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#005580] transition-all"><Printer className="w-5 h-5" /></button>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-bold text-[#005580] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
            {release.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">
            {release.title}
          </h1>

          <div className="flex flex-wrap gap-8 py-6 border-y border-gray-100 mb-12 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" /> {release.date}
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <User className="w-4 h-4" /> {release.author}
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
            <img src={release.img} alt="Hero" className="w-full h-[500px] object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: release.content }} />

          <div className="mt-20 bg-gray-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Media Contact</h3>
                <p className="text-gray-400">For further information and interview requests.</p>
             </div>
             <div className="flex gap-4">
                <a href="mailto:pr@umanghospitals.in" className="h-14 px-8 rounded-xl bg-blue-600 text-white font-bold flex items-center gap-2 hover:bg-blue-700 transition-all">
                   <Download className="w-4 h-4" /> Download PDF
                </a>
                <Link to="/media-center/media-connect" className="h-14 px-8 rounded-xl bg-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/20 transition-all border border-white/10">
                   Contact PR
                </Link>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PressReleaseDetail;
