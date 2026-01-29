import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Play, Quote, Star, MessageCircle, Heart, ArrowRight, Users, Activity, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const stories = [
  {
    id: 1,
    name: "Vikram Malhotra",
    age: "45",
    condition: "Cardiac Bypass",
    quote: "I was given a second chance at life. The care I received was beyond medical; it was personal.",
    img: ASSETS.HEART_TRANSPLANT,
    video: true
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    age: "32",
    condition: "High-Risk Pregnancy",
    quote: "The doctors held my hand through the toughest months. Today, I hold my healthy baby because of them.",
    img: ASSETS.SNEHA_KAPOOR,
    video: false
  },
  {
    id: 3,
    name: "Amit Verma",
    age: "58",
    condition: "Knee Replacement",
    quote: "I walked out of the hospital on my own feet. The robotic surgery technology here is miraculous.",
    img: ASSETS.ORTHO_KNEE,
    video: true
  }
];

const writtenStories = [
  {
    id: 4,
    title: "Overcoming Stage 3 Cancer",
    patient: "Radhika M.",
    summary: "A journey of resilience, advanced immunotherapy, and the unwavering support of the Oncology team.",
    category: "Oncology"
  },
  {
    id: 5,
    title: "My Road to Recovery after Stroke",
    patient: "Suresh D.",
    summary: "How rapid emergency response and rehabilitation helped Suresh regain his mobility and speech.",
    category: "Neurology"
  },
  {
    id: 6,
    title: "Life After Kidney Transplant",
    patient: "Meera K.",
    summary: "Living a full, active life thanks to a successful transplant and post-operative care program.",
    category: "Transplant"
  }
];

const PatientStories = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Patient Stories & Testimonials | Umang Hospital</title>
        <meta name="description" content="Read inspiring stories of recovery and hope from patients treated at Umang Hospital." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.SNEHA_KAPOOR} 
            alt="Happy Patient" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 text-pink-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Heart className="w-4 h-4 fill-current" /> Stories of Hope
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Healing is a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">Shared Journey.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Real people, real struggles, and real victories. Discover how our patients overcame their health challenges to live fuller lives.
            </p>
            
            <button onClick={() => document.getElementById('share-story').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 rounded-full bg-white text-[#0f172a] font-bold hover:bg-pink-50 transition-all flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Share Your Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Video Stories */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-20 text-center">Voices of Recovery</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
               {stories.map((story) => (
                  <motion.div 
                     key={story.id}
                     whileHover={{ 
                        y: -15,
                        boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.15)"
                     }}
                     className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 group"
                  >
                     <div className="h-72 relative overflow-hidden">
                        <img src={story.img} alt={story.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        {story.video && (
                           <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div 
                                 whileHover={{ scale: 1.2, rotate: 5 }}
                                 whileTap={{ scale: 0.9 }}
                                 className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300"
                              >
                                 <Play className="w-8 h-8 fill-current ml-1" />
                              </motion.div>
                           </div>
                        )}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur text-[#0f172a] text-xs px-4 py-1.5 rounded-full font-bold shadow-lg">
                           {story.condition}
                        </div>
                     </div>
                     
                     <div className="p-10">
                        <Quote className="w-10 h-10 text-pink-100 mb-6 fill-current group-hover:text-pink-200 transition-colors" />
                        <p className="text-gray-600 italic mb-8 text-xl leading-relaxed transition-colors group-hover:text-gray-900">"{story.quote}"</p>
                        
                        <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
                           <motion.div 
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 font-bold shadow-inner border border-pink-100"
                           >
                              {story.name[0]}
                           </motion.div>
                           <div>
                              <h4 className="font-bold text-lg text-[#0f172a] group-hover:text-pink-600 transition-colors">{story.name}</h4>
                              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Patient • Age: {story.age}</p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Stats of Success */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
         <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-12 text-center divide-x divide-pink-200">
               {[
                  { label: "Happy Patients", val: "50k+", icon: Heart },
                  { label: "Successful Surgeries", val: "12k+", icon: Activity },
                  { label: "Patient Rating", val: "4.9/5", icon: Star },
                  { label: "Recovery Rate", val: "98%", icon: ThumbsUp }
               ].map((stat, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="p-4"
                  >
                     <h3 className="text-5xl md:text-6xl font-serif font-bold text-pink-600 mb-3">{stat.val}</h3>
                     <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Written Journeys */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-16">In-Depth Journeys</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {writtenStories.map((story) => (
                  <Link to={`/patient-corner/patient-stories/${story.id}`} key={story.id} className="group block">
                     <motion.div 
                        whileHover={{ scale: 1.03, borderColor: "#fbcfe8" }}
                        className="border border-gray-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-pink-50/20 hover:shadow-2xl h-full flex flex-col"
                     >
                        <span className="text-[10px] font-bold text-pink-500 uppercase tracking-[0.2em] mb-4 block">{story.category}</span>
                        <h3 className="text-2xl font-bold text-[#0f172a] mb-6 group-hover:text-pink-600 transition-colors leading-tight">{story.title}</h3>
                        <p className="text-gray-500 leading-relaxed mb-10 flex-1 text-lg">{story.summary}</p>
                        <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                           <span className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors">{story.patient}</span>
                           <motion.div 
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                              className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center"
                           >
                              <ArrowRight className="w-5 h-5 text-pink-600" />
                           </motion.div>
                        </div>
                     </motion.div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Support Community */}
      <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
         <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-serif font-bold mb-6">You Are Not Alone</h2>
               <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                  Join our patient support groups to connect with others who have walked the same path. Share experiences, get advice, and find emotional support.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                        <Users className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Cancer Support Group</h4>
                        <p className="text-sm text-gray-400">Every Saturday, 10 AM</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Heart className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Cardiac Rehabilitation</h4>
                        <p className="text-sm text-gray-400">Monthly Meetups</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 text-center">
               <h3 className="text-2xl font-bold mb-4">Join a Group</h3>
               <p className="text-gray-300 mb-8">Register to receive meeting links and updates.</p>
               <input type="email" placeholder="Your Email Address" className="w-full h-12 bg-white/20 rounded-xl px-4 text-white placeholder-gray-400 border border-white/10 mb-4 outline-none focus:border-pink-500 transition-all" />
               <button className="w-full h-12 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700 transition-all">
                  Join Community
               </button>
            </div>
         </div>
      </section>

      {/* 6. Share Your Story CTA */}
      <section id="share-story" className="py-24 bg-white text-center border-t border-gray-100">
         <div className="container-custom max-w-3xl">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6 fill-current animate-spin-slow" />
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-6">Your Story Can Inspire Others</h2>
            <p className="text-xl text-gray-500 font-light mb-10">
               Have you or a loved one been treated at Umang Hospital? Share your experience to give hope and courage to those starting their journey.
            </p>
            <form className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-left">
               <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                     <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Name</label>
                     <input type="text" className="w-full h-12 bg-white rounded-xl px-4 text-gray-900 border border-gray-200 focus:border-pink-400 outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div>
                     <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Email</label>
                     <input type="email" className="w-full h-12 bg-white rounded-xl px-4 text-gray-900 border border-gray-200 focus:border-pink-400 outline-none transition-all" placeholder="Your Email" />
                  </div>
               </div>
               <div className="mb-8">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Your Message</label>
                  <textarea rows="4" className="w-full bg-white rounded-xl p-4 text-gray-900 border border-gray-200 focus:border-pink-400 outline-none transition-all resize-none" placeholder="Share your experience..."></textarea>
               </div>
               <button className="w-full h-14 bg-[#0f172a] text-white rounded-xl font-bold hover:bg-[#005580] transition-all shadow-lg">
                  Submit Story
               </button>
            </form>
         </div>
      </section>

    </div>
  );
};

export default PatientStories;