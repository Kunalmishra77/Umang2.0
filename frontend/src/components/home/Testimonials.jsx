import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    text: 'Exceptional care during my cardiac surgery. The team was supportive throughout the recovery process. The modular OTs and professional staff made me feel safe and confident.',
    loc: 'Gurugram',
    dept: 'Cardiac Sciences',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    id: 1,
  },
  {
    name: 'Priya Sharma',
    text: 'My mother had a knee replacement here. From pre-operative care to physiotherapy, everything was handled with utmost professionalism. She is walking pain-free now!',
    loc: 'Faridabad',
    dept: 'Orthopaedics',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    id: 2,
  },
  {
    name: 'Vikram Mehta',
    text: "The emergency team saved my father's life during a critical hour. Their rapid response and advanced ICU facilities are truly life-saving. Forever grateful to the doctors.",
    loc: 'Noida',
    dept: 'Emergency & ICU',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    id: 3,
  },
  {
    name: 'Sunita Devi',
    text: 'Best hospital for maternity in Gurugram. The delivery room was well-equipped and the nursing staff was incredibly kind. My baby and I received the best care possible.',
    loc: 'Delhi',
    dept: 'Maternity Care',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    id: 4,
  },
  {
    name: 'Amit Verma',
    text: 'Had a successful laparoscopic surgery. Minimal pain and just 2 days of stay. The doctors explained everything clearly and the billing was completely transparent.',
    loc: 'Gurugram',
    dept: 'General Surgery',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    id: 5,
  },
  {
    name: 'Meena Agarwal',
    text: 'The neurology team diagnosed my chronic headaches that other hospitals missed for years. Dr. Sahil and team provided treatment that changed my life.',
    loc: 'Rewari',
    dept: 'Neuro Sciences',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    id: 6,
  },
  {
    name: 'Deepak Yadav',
    text: 'My father was treated in the ICU for 10 days. The intensivists monitored him round the clock. The 1:1 nursing care and daily family updates gave us so much confidence.',
    loc: 'Jhajjar',
    dept: 'Critical Care',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    id: 7,
  },
  {
    name: 'Kavita Joshi',
    text: 'The health checkup package was thorough and affordable. Reports were digital and the doctor follow-up call was very helpful. Great preventive care initiative by Umang Hospital.',
    loc: 'Sohna',
    dept: 'Health Checkup',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    id: 8,
  },
  {
    name: 'Rohit Taneja',
    text: 'The urology department handled my kidney stone surgery with precision. Painless procedure with laser technology. Discharged the same day! Excellent doctors and staff.',
    loc: 'Gurugram',
    dept: 'Urology',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    id: 9,
  },
  {
    name: 'Anita Rani',
    text: 'I brought my child for a high fever at 2 AM. The paediatric emergency was prompt and caring. Within hours my son was stable. The 24/7 availability is a blessing for parents.',
    loc: 'Manesar',
    dept: 'Paediatrics',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200',
    id: 10,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(nextSlide, 6000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, nextSlide, active]);

  const activeTestimonial = testimonials[active];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content & Featured Testimonial */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full text-primary-600 font-bold uppercase tracking-widest text-xs mb-6">
                <Heart className="w-4 h-4 fill-current" /> Patient Voices
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                Healing Stories <br />
                <span className="text-primary-600 italic font-medium">from the Heart.</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-xl mx-auto lg:mx-0">
                Thousands of patients trust Umang Hospital for their healthcare journey. Here are some of their inspiring stories of recovery.
              </p>
            </motion.div>

            {/* Main Carousel Area */}
            <div className="relative min-h-[420px] sm:min-h-[380px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-blue-900/5 border border-slate-100 relative"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-50 opacity-10 fill-current" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                    ))}
                  </div>

                  <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-10 italic">
                    "{activeTestimonial.text}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={activeTestimonial.image} 
                          alt={activeTestimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-dark">{activeTestimonial.name}</h4>
                      <p className="text-sm font-bold text-primary-600 uppercase tracking-widest">
                        {activeTestimonial.dept} • {activeTestimonial.loc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === active ? 'w-8 bg-primary-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all group"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Side Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-brand-dark rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Exceptional Patient Care</h3>
              <p className="text-slate-400 font-light mb-8 leading-relaxed">
                Our commitment to clinical excellence is reflected in the feedback from our patients. We maintain a 4.9/5 average rating across major platforms.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3">
                  {testimonials.slice(0, 4).map((t, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark overflow-hidden bg-slate-800">
                      <img src={t.image} alt="" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-primary-600 flex items-center justify-center text-[10px] font-bold">
                    +5k
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted by thousands</p>
              </div>
              <Link 
                to="/patient-corner/patient-stories" 
                className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-primary-400 transition-colors group"
              >
                Read all 500+ stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Testimonial Quick Selector */}
            <div className="grid grid-cols-2 gap-4">
              {testimonials.slice(0, 4).map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => goToSlide(i)}
                  className={`p-4 rounded-[1.5rem] border-2 transition-all text-left group ${
                    active === i 
                      ? 'bg-white border-primary-500 shadow-lg shadow-primary-900/5' 
                      : 'bg-white/50 border-transparent hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={t.image} alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className={`text-xs font-bold transition-colors ${active === i ? 'text-primary-700' : 'text-slate-400'}`}>
                      {t.name.split(' ')[0]}
                    </span>
                  </div>
                  <p className={`text-[10px] font-medium leading-tight line-clamp-2 ${active === i ? 'text-slate-600' : 'text-slate-400'}`}>
                    "{t.text}"
                  </p>
                </button>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
                  <span className="text-sm font-bold text-brand-dark">4.9 / 5.0</span>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Google Patient Reviews</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-100" />
              <div>
                <span className="text-sm font-bold text-brand-dark">12,400+</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Surgeries Completed</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-100" />
              <div className="flex items-center gap-2 text-primary-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
