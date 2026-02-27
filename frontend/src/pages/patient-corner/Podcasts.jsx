import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Play, Pause, Mic, Clock, Calendar, Headphones, Share2, Heart, ArrowRight, User, Star, MessageSquare, Radio, Podcast, CheckCircle } from 'lucide-react';
import { ASSETS, getRandomDoctor } from '../../utils/imageAssets';

const episodes = [
  {
    id: 1,
    title: "Understanding Heart Health in Your 40s",
    host: "Dr. Rajesh Kumar",
    role: "Senior Cardiologist",
    duration: "24 min",
    date: "Jan 20, 2026",
    category: "Cardiology",
    img: ASSETS.CARDIAC
  },
  {
    id: 2,
    title: "Mental Wellness: Coping with Stress",
    host: "Dr. Ananya Singh",
    role: "Psychiatrist",
    duration: "18 min",
    date: "Jan 12, 2026",
    category: "Mental Health",
    img: ASSETS.NEURO
  },
  {
    id: 3,
    title: "Diabetes Management & Diet",
    host: "Dt. Suman Verma",
    role: "Clinical Nutritionist",
    duration: "30 min",
    date: "Dec 28, 2025",
    category: "Nutrition",
    img: ASSETS.DIABETIC_CARE
  },
  {
    id: 4,
    title: "The Future of Robotic Surgery",
    host: "Dr. Vikram Sethi",
    role: "Chief Surgeon",
    duration: "45 min",
    date: "Dec 15, 2025",
    category: "Technology",
    img: ASSETS.ROBOTIC_SURGERY
  }
];

const hosts = [
  { name: "Dr. Rajesh Kumar", role: "Cardiology", episodes: 12, img: getRandomDoctor('male') },
  { name: "Dr. Ananya Singh", role: "Psychiatry", episodes: 8, img: getRandomDoctor('female') },
  { name: "Dt. Suman Verma", role: "Nutrition", episodes: 15, img: getRandomDoctor('female') }
];

const reviews = [
  { user: "Amit P.", comment: "Incredibly informative! Helped me understand my father's heart condition better.", rating: 5 },
  { user: "Sneha K.", comment: "Dr. Ananya's voice is so soothing. The anxiety episode was a lifesaver.", rating: 5 },
  { user: "Rahul M.", comment: "Great production quality and very relevant topics. Keep it up!", rating: 4 }
];

const Podcasts = () => {
  const [playing, setPlaying] = useState(null);

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Umang Health Podcasts | Listen & Learn</title>
        <meta name="description" content="Tune in to expert medical advice, health tips, and inspiring stories from Umang Hospital's top doctors." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#1e1b4b] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sound-waves.png')] opacity-10 animate-pulse" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Headphones className="w-4 h-4" /> Listen on the Go
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Health Talk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Unplugged.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12">
              Expert insights, real stories, and medical breakthroughs delivered straight to your ears. Join our community of health-conscious listeners.
            </p>
            
            <div className="flex gap-4">
              <button className="h-14 px-8 rounded-full bg-white text-[#1e1b4b] font-bold hover:bg-purple-50 transition-all flex items-center gap-2 shadow-xl hover-lift hover:scale-105">
                <Play className="w-5 h-5 fill-current" /> Latest Episode
              </button>
              <button className="h-14 px-8 rounded-full bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                Subscribe
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 border border-white/10 shadow-2xl">
                <img 
                  src={ASSETS.PRESS_EVENT} 
                  alt="Podcast Host" 
                  className="w-full aspect-square object-cover rounded-[2rem] mb-6 shadow-lg" 
                />
                <div className="flex items-center justify-between">
                   <div>
                      <h3 className="text-white text-xl font-bold">The Umang Pulse</h3>
                      <p className="text-purple-300 text-sm">Weekly Health Digest</p>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-1 h-8 bg-purple-500 rounded-full animate-[bounce_1s_infinite]"></div>
                      <div className="w-1 h-6 bg-purple-400 rounded-full animate-[bounce_1.2s_infinite]"></div>
                      <div className="w-1 h-10 bg-pink-500 rounded-full animate-[bounce_0.8s_infinite]"></div>
                      <div className="w-1 h-5 bg-blue-500 rounded-full animate-[bounce_1.1s_infinite]"></div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Recent Episodes */}
      <section className="py-12 lg:py-10 bg-gray-50">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-16">
               <div>
                  <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-4">Recent Episodes</h2>
                  <p className="text-gray-500 text-lg">Curated discussions on topics that matter to you.</p>
               </div>
               <button className="text-[#005580] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  View All Episodes <ArrowRight className="w-5 h-5" />
               </button>
            </div>

            <div className="grid gap-8">
               {episodes.map((ep) => (
                  <motion.div 
                     key={ep.id}
                     whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
                     }}
                     className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 transition-all flex flex-col md:flex-row gap-8 items-center group"
                  >
                     <div className="relative w-full md:w-48 h-48 shrink-0 overflow-hidden rounded-2xl">
                        <img src={ep.img} alt={ep.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <button 
                           onClick={() => setPlaying(playing === ep.id ? null : ep.id)}
                           className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                           <motion.div 
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform"
                           >
                              {playing === ep.id ? <Pause className="w-6 h-6 text-[#005580] fill-current" /> : <Play className="w-6 h-6 text-[#005580] fill-current ml-1" />}
                           </motion.div>
                        </button>
                     </div>
                     
                     <div className="flex-1 w-full text-center md:text-left">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                           <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full transition-colors group-hover:bg-blue-600 group-hover:text-white">{ep.category}</span>
                           <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {ep.date}</span>
                           <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ep.duration}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0f172a] mb-2 group-hover:text-[#005580] transition-colors">{ep.title}</h3>
                        <p className="text-gray-500 mb-6">Hosted by <span className="text-gray-900 font-medium">{ep.host}</span> • {ep.role}</p>
                        
                        <div className="flex items-center justify-center md:justify-start gap-4">
                           <motion.button 
                              whileHover={{ scale: 1.05, backgroundColor: "#005580", color: "#ffffff" }}
                              whileTap={{ scale: 0.95 }}
                              className="h-10 px-6 rounded-xl border-2 border-[#005580] text-[#005580] font-bold text-sm transition-all flex items-center gap-2"
                           >
                              <Play className="w-3 h-3 fill-current" /> Play Episode
                           </motion.button>
                           <motion.button 
                              whileHover={{ scale: 1.1, backgroundColor: "#fee2e2", color: "#ef4444" }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 rounded-xl bg-gray-50 text-gray-500 flex items-center justify-center transition-all"
                           >
                              <Heart className="w-4 h-4" />
                           </motion.button>
                           <motion.button 
                              whileHover={{ scale: 1.1, backgroundColor: "#dbeafe", color: "#3b82f6" }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 rounded-xl bg-gray-50 text-gray-500 flex items-center justify-center transition-all"
                           >
                              <Share2 className="w-4 h-4" />
                           </motion.button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Meet the Hosts */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-16 text-center">Meet Our Hosts</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {hosts.map((host, i) => (
                  <div key={i} className="text-center group cursor-pointer">
                     <div className="relative w-48 h-48 mx-auto mb-6">
                        <div className="absolute inset-0 bg-purple-100 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                        <img src={host.img} alt={host.name} className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0f172a] mb-1">{host.name}</h3>
                     <p className="text-purple-600 font-medium text-sm mb-2">{host.role}</p>
                     <p className="text-gray-400 text-xs">{host.episodes} Episodes Released</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Featured Series */}
      <section className="py-12 lg:py-10 bg-[#1e1b4b] text-white">
         <div className="container-custom text-center">
            <Mic className="w-16 h-16 text-purple-400 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl font-serif font-bold mb-6">Want to be a guest?</h2>
            <p className="text-xl text-blue-200 font-light mb-12 max-w-2xl mx-auto">
               Share your recovery story or medical expertise on our show. We love hearing from our community.
            </p>
            <button className="h-16 px-10 rounded-full bg-white text-[#1e1b4b] font-bold text-lg hover:bg-purple-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(168,85,247,0.4)]">
               Share Your Story
            </button>
         </div>
      </section>

      {/* 5. Listener Reviews */}
      <section className="py-12 lg:py-10 bg-purple-50">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-12 text-center">Listener Love</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {reviews.map((review, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100">
                     <div className="flex gap-1 text-yellow-400 mb-4">
                        {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                     </div>
                     <p className="text-gray-600 mb-6 normal">"{review.comment}"</p>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold">
                           {review.user[0]}
                        </div>
                        <span className="font-bold text-[#0f172a]">{review.user}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Subscribe Options */}
      <section className="py-12 lg:py-10 bg-white border-t border-gray-100">
         <div className="container-custom text-center">
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-10">Listen on your favorite platform</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {["Spotify", "Apple Podcasts", "Google Podcasts", "JioSaavn", "Gaana"].map((platform, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <Radio className="w-8 h-8 text-[#0f172a]" />
                     <span className="text-2xl font-serif font-bold text-[#0f172a]">{platform}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Suggest a Topic */}
      <section className="py-12 lg:py-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
         <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-serif font-bold mb-6">What should we talk about next?</h2>
               <p className="text-purple-100 text-lg mb-8">
                  Have a burning health question? Suggest a topic for our next episode, and our experts will cover it.
               </p>
               <div className="flex items-center gap-4 text-sm font-bold">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Expert Answers</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Community Driven</div>
               </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
               <div className="flex gap-4 mb-4">
                  <input type="text" placeholder="Your Name" className="flex-1 h-12 bg-white/20 rounded-xl px-4 text-white placeholder-purple-200 outline-none focus:bg-white/30 transition-all" />
                  <input type="email" placeholder="Your Email" className="flex-1 h-12 bg-white/20 rounded-xl px-4 text-white placeholder-purple-200 outline-none focus:bg-white/30 transition-all" />
               </div>
               <textarea rows="3" placeholder="Suggest a topic..." className="w-full bg-white/20 rounded-xl p-4 text-white placeholder-purple-200 outline-none focus:bg-white/30 transition-all resize-none mb-6"></textarea>
               <button className="w-full h-14 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg flex items-center justify-center gap-2">
                  Submit Suggestion <MessageSquare className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Podcasts;
