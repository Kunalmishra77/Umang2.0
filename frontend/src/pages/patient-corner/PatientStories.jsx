import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Play, Quote, Star, MessageCircle, Heart, ArrowRight, 
  Users, Activity, ThumbsUp, Calendar, MapPin, Search,
  Award, ShieldCheck, HeartPulse, UserCheck, HelpCircle, Mail, Globe, Clock,
  ChevronRight, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';

const stories = [
  {
    id: 1,
    name: "Vikram Malhotra",
    age: "45",
    condition: "Cardiac Bypass",
    quote: "I was given a second chance at life. The care I received was beyond medical; it was personal.",
    img: ASSETS.HEART_TRANSPLANT,
    video: true,
    dept: "Cardiology"
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    age: "32",
    condition: "High-Risk Pregnancy",
    quote: "The doctors held my hand through the toughest months. Today, I hold my healthy baby because of them.",
    img: ASSETS.SNEHA_KAPOOR,
    video: false,
    dept: "Obstetrics"
  },
  {
    id: 3,
    name: "Amit Verma",
    age: "58",
    condition: "Knee Replacement",
    quote: "I walked out of the hospital on my own feet. The robotic surgery technology here is miraculous.",
    img: ASSETS.ORTHO_KNEE,
    video: true,
    dept: "Orthopaedics"
  }
];

const PatientStories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Oncology', 'Cardiac', 'Neuro', 'Ortho', 'Transplant', 'Mother & Child'];

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Patient Stories & Testimonials | Umang Hospital</title>
        <meta name="description" content="Read inspiring stories of recovery and hope from patients treated at Umang Hospital." />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ASSETS.SNEHA_KAPOOR} alt="Happy Patient" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]" />
        </div>
        <Container className="relative z-10 py-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 text-pink-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Heart className="w-4 h-4 fill-current" /> Stories of Hope
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              Healing is a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300 italic">Shared Journey.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12 max-w-2xl">
              Real people, real struggles, and real victories. Discover how our patients overcame their health challenges through clinical excellence and human spirit.
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={() => document.getElementById('share-story').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 rounded-full bg-white text-[#0f172a] font-bold hover:bg-pink-50 transition-all flex items-center gap-2 shadow-xl active:scale-95">
                <MessageCircle className="w-5 h-5" /> Share Your Story
              </button>
              <Link to="/doctors" className="h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                Find Your Specialist <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. SUCCESS STATS (ENHANCED) */}
      <div className="bg-[#030712] py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Success Stories', val: '12,000+', icon: UserCheck },
              { label: 'Patient Satisfaction', val: '98%', icon: ThumbsUp },
              { label: 'Google Rating', val: '4.9/5', icon: Star },
              { label: 'Global Patients', val: '15+', icon: Globe }
            ].map((stat, i) => (
              <div key={i} className="group">
                <stat.icon className="w-8 h-8 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-serif font-bold text-white mb-1">{stat.val}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. STORY CATEGORY FILTER */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${selectedCategory === cat ? 'bg-[#0f172a] text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-pink-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. FEATURED VIDEO STORIES */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Voices of Recovery" title="Featured Video Testimonials" centered />
          <div className="grid md:grid-cols-3 gap-10">
            {stories.map((story) => (
              <motion.div key={story.id} whileHover={{ y: -10 }} className="group">
                <Card className="h-full !p-0 overflow-hidden border-none shadow-soft group-hover:shadow-premium transition-all duration-500">
                  <div className="h-64 relative overflow-hidden">
                    <img src={story.img} alt={story.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors" />
                    {story.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 cursor-pointer">
                          <Play size={24} className="fill-current ml-1" />
                        </div>
                      </div>
                    )}
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-pink-600">
                      {story.dept}
                    </span>
                  </div>
                  <div className="p-8">
                    <Quote className="w-8 h-8 text-pink-100 mb-4 fill-current" />
                    <p className="text-slate-600 italic mb-8 leading-relaxed font-medium">"{story.quote}"</p>
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                      <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center font-bold text-pink-600">{story.name[0]}</div>
                      <div>
                        <h4 className="font-bold text-brand-dark">{story.name}</h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Age: {story.age}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. STORY OF THE MONTH (OPTIMIZED BALANCE) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="bg-white rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-premium flex flex-col lg:grid lg:grid-cols-12">
            <div className="lg:col-span-5 h-[300px] lg:h-auto relative overflow-hidden">
              <img src={ASSETS.ABOUT_GLOBAL} alt="Monthly Highlight" className="w-full h-full object-cover lg:absolute lg:inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-pink-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 inline-block">Highlight</span>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold">Miracle of Sector 55</h3>
              </div>
            </div>
            <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center bg-white">
              <span className="text-pink-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Patient Victory</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-6 leading-tight">A 100-Day Battle <br />Against All Odds.</h2>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-8 font-light max-w-xl">
                Meet Rajesh Khanna, a stroke survivor who arrived at our ER with zero mobility. Through 3 months of intensive neurological care and rehabilitation, he recently walked out of our facility unassisted.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-sm transition-all">
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Clinical Team</p>
                  <p className="font-bold text-brand-dark text-sm">Neuro Sciences</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-sm transition-all">
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Assisted Tech</p>
                  <p className="font-bold text-brand-dark text-sm">AI-Stroke Imaging</p>
                </div>
              </div>
              <button className="btn-primary !w-max !py-4 !px-10">Read Full Case Study</button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. WRITTEN JOURNEYS GRID */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
            <SectionHeading eyebrow="Written Testimonials" title="Healing Transcends Medicine" className="!mb-0" />
            <Link to="/patient-corner/breakthrough-cases" className="text-pink-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
              Explore Medical Cases <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link key={i} to={`/patient-corner/patient-stories/${i}`} className="group">
                <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-premium group-hover:border-pink-100 transition-all duration-500 h-full flex flex-col">
                  <span className="text-[10px] font-black uppercase text-pink-500 tracking-[0.2em] mb-6 block">Neurology Recovery</span>
                  <h4 className="text-2xl font-bold text-brand-dark mb-6 leading-tight">"The hospital that treats you like family, not just a file."</h4>
                  <p className="text-slate-500 leading-relaxed font-light mb-10 flex-grow">How the compassionate nursing staff and advanced stroke protocols gave me my life back after a critical emergency.</p>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <span className="font-bold text-brand-dark">Amitabh S.</span>
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-pink-600 group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. SUPPORT COMMUNITIES (NEW) */}
      <Section className="bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px]" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-pink-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Support Network</span>
              <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8">You Are Never <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-200">Alone.</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
                Recovery doesn't end at discharge. Join our specialized support groups to connect with fellow survivors, share experiences, and receive ongoing emotional guidance from experts.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Cancer Support Circle', info: 'Every 2nd Saturday' },
                  { label: 'Cardiac Rehab Group', info: 'Monthly Wellness Meet' },
                  { label: 'New Mothers Hub', info: 'Weekly Interactive Sessions' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-all">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.label}</h4>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 lg:p-16 rounded-[4rem] text-center">
               <HeartPulse className="w-16 h-16 text-pink-400 mx-auto mb-8 animate-pulse" />
               <h3 className="text-3xl font-serif font-bold mb-4">Join Our Community</h3>
               <p className="text-slate-400 mb-10 font-light">Get updates about upcoming meetups, clinical webinars, and stories of hope directly in your inbox.</p>
               <div className="space-y-4">
                  <input type="email" placeholder="Your Email Address" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white outline-none focus:ring-2 focus:ring-pink-500 transition-all" />
                  <button className="w-full h-14 bg-pink-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-pink-500 shadow-xl shadow-pink-900/20 active:scale-95 transition-all">Register for Meetup</button>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. RECOVERY TIMELINE (NEW) */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Clinical Path" title="The Roadmap to Wellness" centered />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Triage', desc: 'Rapid assessment and specialized admission.', step: '01' },
              { title: 'Precision Care', desc: 'Evidence-based treatment protocols.', step: '02' },
              { title: 'Nursing Hub', desc: 'Round-the-clock compassionate monitoring.', step: '03' },
              { title: 'Safe Home', desc: 'Post-discharge follow-up and rehab.', step: '04' }
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center text-2xl font-black text-slate-300 mx-auto mb-6 group-hover:bg-pink-50 group-hover:text-pink-600 transition-all duration-500">
                  {s.step}
                </div>
                <h4 className="font-bold text-brand-dark mb-2">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. MEDICAL TEAM BEHIND THE MIRACLES (NEW) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="The Caregivers" 
                title="Expertise Powered by <span class='text-pink-600'>Compassion.</span>" 
                description="Our doctors are not just medical specialists; they are partners in your healing journey. We treat every patient like family."
              />
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Board Certified', icon: Award },
                  { label: 'Patient First', icon: Heart },
                  { label: 'Safe Protocols', icon: ShieldCheck },
                  { label: 'Continuous Care', icon: Clock }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <item.icon className="w-5 h-5 text-pink-500" />
                    <span className="font-bold text-sm text-brand-dark">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/doctors" className="btn-outline mt-10 !w-full lg:!w-max">Meet All Specialists</Link>
            </div>
            <div className="lg:w-1/2 relative">
               <img src={ASSETS.ABOUT_BEACON} alt="Medical Team" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                  <p className="text-sm font-bold text-slate-700 italic leading-relaxed">"Surgery saves the body, but compassion saves the soul."</p>
                  <p className="text-[10px] font-black uppercase text-pink-600 mt-2 tracking-widest">- Clinical Director</p>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. HOPE NEWSLETTER (NEW) */}
      <Section className="bg-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">A Monthly Dose of Hope.</h2>
              <p className="text-pink-100 text-xl font-light">Receive curated recovery stories and health tips from our experts every month.</p>
            </div>
            <div className="flex-1 max-w-md w-full">
               <div className="bg-white/10 backdrop-blur-md p-2 rounded-[2rem] flex items-center border border-white/20">
                  <input type="email" placeholder="Your Email" className="bg-transparent flex-1 px-6 outline-none text-white placeholder-pink-200" />
                  <button className="h-14 w-14 rounded-[1.5rem] bg-white text-pink-600 flex items-center justify-center shadow-xl hover:bg-pink-50 transition-all">
                    <Mail size={24} />
                  </button>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 11. STORY SUBMISSION FAQ (NEW) */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Sharing Your Experience" centered />
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { q: 'Will my identity be public?', a: 'Only if you wish. We can share stories anonymously or using initials if you prefer privacy.' },
                { q: 'Can I include a photo?', a: 'Yes, photos or videos help inspire others, but they are completely optional.' },
                { q: 'How long should the story be?', a: 'It can be a short quote or a detailed journey. Our team will help format it for the website.' },
                { q: 'Can I share on behalf of a relative?', a: 'Absolutely. Many of our most touching stories come from family caregivers.' }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all bg-slate-50/50">
                  <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-3"><HelpCircle className="text-pink-500 w-5 h-5" /> {faq.q}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 12. SHARE YOUR STORY FORM (ENHANCED) */}
      <section id="share-story" className="py-24 bg-slate-50 overflow-hidden">
         <Container>
            <div className="flex flex-col lg:flex-row gap-20 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">Become a Beacon <br />of <span className="text-pink-600 italic">Hope.</span></h2>
                  <p className="text-xl text-slate-500 leading-relaxed mb-10 font-light">Your recovery is a testament to the human spirit and clinical excellence. By sharing your story, you might give someone the courage they need to start their own healing journey.</p>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                     <p className="text-sm font-bold text-slate-700 mb-4">Direct Support Line</p>
                     <div className="flex items-center gap-4 text-pink-600 font-black text-xl">
                        <Smartphone className="w-6 h-6" /> +91 85880 72727
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full">
                  <form className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-premium relative">
                     <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                           <input type="text" className="w-full h-14 bg-slate-50 border-none rounded-2xl px-6 text-brand-dark font-bold outline-none focus:ring-2 focus:ring-pink-500/20 transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact No.</label>
                           <input type="text" className="w-full h-14 bg-slate-50 border-none rounded-2xl px-6 text-brand-dark font-bold outline-none focus:ring-2 focus:ring-pink-500/20 transition-all" placeholder="+91" />
                        </div>
                     </div>
                     <div className="space-y-2 mb-8">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Victory Story</label>
                        <textarea rows="4" className="w-full bg-slate-50 border-none rounded-2xl p-6 text-brand-dark font-bold outline-none focus:ring-2 focus:ring-pink-500/20 transition-all resize-none" placeholder="How was your experience at Umang Hospital?"></textarea>
                     </div>
                     <button className="w-full h-16 bg-brand-dark text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl active:scale-95">Submit My Story</button>
                  </form>
               </div>
            </div>
         </Container>
      </section>

      {/* FINAL CTA (REDUCED SIZE) */}
      <Section className="bg-white text-center py-20 border-t border-slate-100">
        <Container>
          <Heart className="w-10 h-10 text-pink-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-brand-dark mb-6">Ready to Start Your <br />Recovery?</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 font-light">Consult with Northern India's most distinguished medical faculty and begin your own story of healing today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/appointments/request" className="px-8 py-4 bg-[#0f172a] text-white rounded-xl font-bold text-base hover:bg-pink-600 transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
              <Calendar size={20} className="group-hover:rotate-12 transition-transform" /> Book Appointment
            </Link>
            <a href="tel:+918588072727" className="px-8 py-4 border-2 border-slate-100 text-brand-dark rounded-xl font-bold text-base hover:bg-slate-50 transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
              <Smartphone size={20} /> Get Call Back
            </a>
          </div>
        </Container>
      </Section>

    </div>
  );
};

export default PatientStories;
