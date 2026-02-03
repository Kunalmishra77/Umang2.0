import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, MapPin, Clock, Users, ArrowRight, Heart, 
  Video, CheckCircle, Search 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: "Free Heart Checkup Camp",
    category: "Health Camp",
    date: "Feb 14, 2026",
    time: "09:00 AM - 04:00 PM",
    location: "Umang Hospital, Main Atrium",
    desc: "Comprehensive cardiac screening including ECG and consultation with senior cardiologists. Open to all ages.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Blood Donation Drive",
    category: "Community",
    date: "Feb 20, 2026",
    time: "10:00 AM - 05:00 PM",
    location: "Sector 56 Community Center",
    desc: "Join us in saving lives. Every donor receives a certificate and health checkup voucher.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Diabetes Awareness Webinar",
    category: "Webinar",
    date: "Mar 05, 2026",
    time: "06:00 PM - 07:30 PM",
    location: "Online (Zoom)",
    desc: "Expert talk on managing diabetes through lifestyle changes and diet. Q&A session included.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600"
  }
];

const pastEvents = [
  { title: "World Cancer Day Run", date: "Feb 04, 2026" },
  { title: "Senior Citizen Yoga Workshop", date: "Jan 25, 2026" },
  { title: "Child Nutrition Seminar", date: "Jan 10, 2026" }
];

const Events = () => {
  const [filter, setFilter] = useState('All');

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Events & Health Camps | Umang Hospital</title>
        <meta name="description" content="Join our upcoming health camps, webinars, and community events. Stay healthy and informed with Umang Hospital." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=2000" 
            alt="Community Event" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 py-12 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 text-pink-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Users className="w-4 h-4" /> Community & Wellness
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Engaging for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">Healthier Tomorrow.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              From free health screenings to educational seminars, we are committed to building a healthier community together.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('upcoming').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 rounded-full bg-white text-[#0f172a] font-bold hover:bg-pink-50 transition-all flex items-center gap-2">
                Find an Event <Search className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Upcoming Events */}
      <section id="upcoming" className="py-12 lg:py-10 bg-gray-50">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-4">Upcoming Events</h2>
                  <p className="text-gray-500 text-lg">Mark your calendars for these health initiatives.</p>
               </div>
               
               <div className="flex gap-2 mt-6 md:mt-0">
                  {['All', 'Health Camp', 'Webinar', 'Community'].map((cat) => (
                     <button 
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${filter === cat ? 'bg-[#005580] text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               {upcomingEvents.filter(e => filter === 'All' || e.category === filter).map((event) => (
                  <motion.div 
                     key={event.id}
                     whileHover={{ y: -10 }}
                     className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover-lift transition-all group flex flex-col"
                  >
                     <div className="h-64 relative overflow-hidden">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#005580] uppercase tracking-wide">
                           {event.category}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                           <div className="text-2xl font-bold font-serif">{event.date.split(' ')[0]} {event.date.split(' ')[1].replace(',', '')}</div>
                        </div>
                     </div>
                     
                     <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-[#0f172a] mb-4">{event.title}</h3>
                        
                        <div className="space-y-3 mb-6 text-sm text-gray-600">
                           <div className="flex items-center gap-3">
                              <Clock className="w-4 h-4 text-pink-500" /> {event.time}
                           </div>
                           <div className="flex items-center gap-3">
                              <MapPin className="w-4 h-4 text-pink-500" /> {event.location}
                           </div>
                        </div>
                        
                        <p className="text-gray-500 mb-8 flex-1 leading-relaxed text-sm">{event.desc}</p>

                        <button className="w-full h-12 rounded-xl border-2 border-[#005580] text-[#005580] font-bold hover:bg-[#005580] hover:text-white transition-all flex items-center justify-center gap-2">
                           Register Now <ArrowRight className="w-4 h-4" />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Past Events Gallery */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-12 text-center">Past Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {pastEvents.map((event, i) => (
                  <div key={i} className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-[4/3]">
                     <img src={[
                       "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
                       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
                       "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
                     ][i % 3]} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                     <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-xs font-bold opacity-80 mb-1">{event.date}</p>
                        <h4 className="text-xl font-bold">{event.title}</h4>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Newsletter CTA */}
      <section className="py-12 lg:py-10 bg-pink-50 text-center">
         <div className="container-custom max-w-2xl">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-4">Never Miss an Update</h2>
            <p className="text-gray-600 mb-8">
               Subscribe to our newsletter to get notified about upcoming free health camps and seminars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <input type="email" placeholder="Enter your email" className="h-14 px-6 rounded-xl border border-gray-200 w-full focus:border-pink-500 outline-none" />
               <button className="h-14 px-8 rounded-xl bg-pink-500 text-white font-bold hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-200">
                  Subscribe
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Events;
