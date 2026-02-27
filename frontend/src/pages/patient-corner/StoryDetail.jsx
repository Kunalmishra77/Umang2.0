import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Quote, Heart, Star, Share2, MessageCircle, ArrowRight } from 'lucide-react';

const StoryDetail = () => {
  const { id } = useParams();

  // Mock data for a patient story
  const story = {
    name: "Vikram Malhotra",
    age: "45",
    condition: "Cardiac Bypass",
    quote: "I was given a second chance at life. The care I received was beyond medical; it was personal.",
    fullStory: "It started with a mild chest pain during my morning walk. I thought it was just acidity, but my wife insisted we visit Umang Hospital. Within minutes of arrival, the emergency team diagnosed a major blockage...",
    experience: "From the nursing staff to the senior surgeons, everyone was incredibly supportive. The technology they used was state-of-the-art, but it was the human touch that made the difference.",
    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=1200"
  };

  return (
    <div className="bg-white min-h-screen pt-16 pb-12">
      <Helmet>
        <title>{story.name}'s Recovery | Patient Stories</title>
      </Helmet>

      <div className="container-custom max-w-4xl">
        <Link to="/patient-corner/patient-stories" className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Stories
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="relative rounded-[3rem] overflow-hidden mb-12 shadow-2xl h-[500px]">
            <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
              <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block w-fit">
                {story.condition}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                {story.name}'s Victory
              </h1>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <section>
                <Quote className="w-12 h-12 text-pink-100 mb-6 fill-current" />
                <p className="text-2xl font-serif normal text-[#0f172a] leading-relaxed">
                  "{story.quote}"
                </p>
              </section>

              <section className="text-gray-600 leading-relaxed text-lg space-y-6">
                <h3 className="text-2xl font-bold text-[#0f172a]">The Journey</h3>
                <p>{story.fullStory}</p>
                <h3 className="text-2xl font-bold text-[#0f172a]">The Umang Experience</h3>
                <p>{story.experience}</p>
              </section>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="bg-pink-50 p-8 rounded-[2rem] border border-pink-100 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-pink-500 shadow-sm">
                    <Heart className="w-8 h-8 fill-current" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] text-xl mb-2">Feeling Inspired?</h4>
                  <p className="text-sm text-gray-500 mb-6">Share this story with someone who needs a ray of hope today.</p>
                  <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-pink-500 shadow-sm transition-all"><Share2 className="w-5 h-5" /></button>
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-pink-500 shadow-sm transition-all"><MessageCircle className="w-5 h-5" /></button>
                  </div>
                </div>

                <Link to="/contact" className="block p-8 rounded-[2rem] bg-[#0f172a] text-white text-center group hover:bg-[#005580] transition-all">
                  <h4 className="font-bold text-xl mb-2">Start Your Own Journey</h4>
                  <p className="text-sm text-gray-400 mb-6 group-hover:text-blue-200 transition-colors">Book a consultation with our experts.</p>
                  <span className="inline-flex items-center gap-2 font-bold text-pink-400 group-hover:gap-3 transition-all">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryDetail;
