import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, UserCheck, Home, Smile, Activity, Clock, 
  Phone, Calendar, CheckCircle, ArrowRight, Sun, Shield, HelpCircle, Star, Smartphone, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';
import SeoHead from '../../components/common/SeoHead';
import { siteConfig } from '../../config/siteConfig';

const services = [
  {
    icon: UserCheck,
    title: "Assisted Living",
    desc: "Compassionate support for daily activities like bathing, dressing, and mobility, helping seniors maintain their dignity and independence.",
    features: ["24/7 Caregiver Support", "Personal Hygiene Assistance", "Mobility Aid"]
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    desc: "Specialized care for conditions like Diabetes, Hypertension, and Arthritis, with regular vitals monitoring and medication management.",
    features: ["Vitals Monitoring", "Medication Administration", "Dietary Planning"]
  },
  {
    icon: Heart,
    title: "Dementia & Alzheimer's Care",
    desc: "A safe, structured environment with memory care activities designed to reduce anxiety and improve cognitive function.",
    features: ["Memory Games", "Wandering Prevention", "Emotional Support"]
  },
  {
    icon: Sun,
    title: "Palliative Care",
    desc: "Focusing on relief from symptoms and stress of serious illness, improving quality of life for both the patient and the family.",
    features: ["Pain Management", "Psychological Support", "Family Counseling"]
  },
  {
    icon: Home,
    title: "Post-Hospitalization Care",
    desc: "Bridge the gap between hospital and home with professional nursing care to ensure a smooth and speedy recovery.",
    features: ["Wound Dressing", "Physiotherapy", "Doctor Tele-consults"]
  },
  {
    icon: Smile,
    title: "Companionship",
    desc: "Combating loneliness with social interaction, engaging conversations, and accompaniment for walks or appointments.",
    features: ["Social Engagement", "Recreational Activities", "Escort to Visits"]
  }
];

const carePlans = [
  {
    title: "Basic Support",
    desc: "For seniors who need mild assistance.",
    features: ["Day Care (8 Hrs)", "Vitals Check", "Medication Reminder", "Companionship"]
  },
  {
    title: "Comprehensive Care",
    desc: "Full-time support for higher needs.",
    features: ["24/7 Live-in Caregiver", "Personal Hygiene", "Mobility Assistance", "Weekly Doctor Visit"],
    popular: true
  },
  {
    title: "Specialized ICU",
    desc: "Critical care setup at home.",
    features: ["ICU Nurse (24/7)", "Equipment Rental", "Daily Doctor Consult", "Physiotherapy"]
  }
];

const ElderCare = () => {
  const [activeTab, setActiveTab] = useState('care');

  return (
    <div className="bg-white min-h-screen">
      <SeoHead 
        title="Elder Care Services" 
        description="Compassionate geriatric care for seniors. Assisted living, dementia care, and medical support at home."
        canonical="/services/elder-care"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[600px] flex items-center bg-[#fff7ed] overflow-hidden py-12 lg:py-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-3/4 h-full bg-[#ffedd5] rounded-bl-[15rem] z-0" />
          <img 
            src={ASSETS.GERIATRICS} 
            alt="Senior Citizen Care" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[85%] object-cover rounded-l-[4rem] shadow-2xl z-10 hidden lg:block"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-widest text-xs mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span>Geriatric Excellence</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">
              Aging with <br />
              <span className="text-orange-500">Dignity & Grace.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
              We understand that every senior has a unique story. Our holistic care plans are designed to honor their journey while providing the medical and emotional support they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => document.getElementById('care-plans').scrollIntoView({ behavior: 'smooth' })} className="h-16 px-8 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 hover:shadow-xl transition-all flex items-center justify-center gap-2 shadow-orange-900/20">
                View Care Plans <ArrowRight className="w-5 h-5" />
              </button>
              <button className="h-16 px-8 rounded-full bg-white border border-orange-200 text-orange-600 font-bold hover:bg-orange-50 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Talk to an Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: GERIATRIC IMPACT STATS */}
      <div className="bg-orange-500 py-8 lg:py-10 text-white overflow-hidden relative border-y border-white/5">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { label: "Seniors Cared For", value: "2,500+" },
              { label: "Certified Staff", value: "150+" },
              { label: "Avg Stay Home", value: "12 Mos" },
              { label: "Response Time", value: "<15 Mins" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-xl lg:text-3xl font-serif font-bold tracking-tight mb-1">{stat.value}</p>
                <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-orange-100/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 2. Comprehensive Services Grid */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-24">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Holistic Senior Care</h2>
               <p className="text-gray-500 text-xl leading-relaxed">
                  Beyond just medical attention, we focus on the emotional, social, and physical well-being of our elderly patients.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {services.map((service, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-orange-200 hover-lift transition-all group relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100%] -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                     
                     <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm">
                           <service.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                        <p className="text-gray-500 text-base leading-relaxed mb-8">{service.desc}</p>
                        <ul className="space-y-3">
                           {service.features.map((feat, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-400 uppercase tracking-wide">
                                 <CheckCircle className="w-4 h-4 text-orange-500" /> {feat}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: SENIOR STORIES (NEW SECTION 11) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Stories of Dignity</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Mr. Sharma", age: "72", text: "The care and companionship provided by Umang nurses made my recovery from hip surgery so much easier. They are like family.", img: ASSETS.USER_AVATAR },
              { name: "Mrs. Gupta", age: "68", text: "Having an ICU setup at home was a blessing for my mother. The technology and medical oversight were top-notch.", img: ASSETS.USER_AVATAR }
            ].map((story, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex gap-8 items-start group hover:shadow-lg transition-all">
                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center shrink-0 border-4 border-white shadow-md">
                  <Star className="text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-600 text-lg normal mb-6">"{story.text}"</p>
                  <h4 className="font-bold text-brand-dark text-xl">{story.name}, {story.age} Yrs</h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Care Plans Section */}
      <section id="care-plans" className="py-32 bg-gray-50">
         <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] text-center mb-20">Tailored Care Packages</h2>
            
            <div className="grid lg:grid-cols-3 gap-10 items-center">
               {carePlans.map((plan, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -5 }}
                     className={`relative p-10 pt-16 rounded-[3rem] ${plan.popular ? 'bg-[#0f172a] text-white shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 shadow-lg border border-gray-100'}`}
                  >
                     {plan.popular && (
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg whitespace-nowrap">
                           Recommended
                        </div>
                     )}
                     <h3 className="text-2xl font-bold mb-2 text-center lg:text-left">{plan.title}</h3>
                     <p className={`text-sm mb-8 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
                     
                     <ul className="space-y-5 mb-10">
                        {plan.features.map((feat, idx) => (
                           <li key={idx} className="flex items-center gap-4">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-white/10 text-orange-400' : 'bg-orange-50 text-orange-600'}`}>
                                 <CheckCircle className="w-4 h-4" />
                              </div>
                              <span className="font-medium">{feat}</span>
                           </li>
                        ))}
                     </ul>

                     <Link to="/services/booking/elder-care" className={`w-full h-14 rounded-xl font-bold transition-all flex items-center justify-center shadow-lg ${plan.popular ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-900/20' : 'bg-gray-100 hover:bg-gray-200 text-[#0f172a]'}`}>
                        Enquire for Plan
                     </Link>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Why Choose Us (Empathy Focus) */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-orange-50 rounded-full blur-[100px] opacity-50" />
               <img 
                  src={ASSETS.NURSE_CARE} 
                  alt="Caregiver Holding Hand" 
                  className="relative rounded-[3rem] shadow-2xl border-8 border-white z-10 hover:scale-[1.02] transition-transform duration-700 object-cover object-top h-[550px] w-full"
               />
            </div>
            
            <div>
               <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-bold text-sm mb-6">
                  The Umang Difference
               </div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8">More than Caregivers, We are Family.</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Our selection process for caregivers focuses not just on medical expertise, but on empathy, patience, and integrity. We treat your loved ones with the same respect and attention we would give to our own parents.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8">
                  <Link to="/patient-experience" className="flex items-start gap-4 group block">
                     <Shield className="w-8 h-8 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                     <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-orange-600 transition-colors">Background Verified</h4>
                        <p className="text-sm text-gray-500">Police verified & medically certified staff.</p>
                     </div>
                  </Link>
                  <Link to="/contact" className="flex items-start gap-4 group block">
                     <Clock className="w-8 h-8 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                     <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-orange-600 transition-colors">Reliability Guarantee</h4>
                        <p className="text-sm text-gray-500">Immediate replacement in case of absence.</p>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION: GERIATRIC SPECIALISTS (NEW SECTION 12) */}
      <Section className="bg-slate-900 text-white">
        <Container>
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <img src={ASSETS.ABOUT_DIRECTOR} alt="Geriatric Team" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-4 block">Medical Board</span>
              <h2 className="text-4xl font-serif font-bold mb-6">Expert Oversight by <br /><span className="text-orange-400 normal">Senior Specialists.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                Our elder care programs are medically supervised by senior consultants who specialize in geriatric medicine, ensuring that every medical decision is based on expert clinical judgement.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-bold text-white">20+</h4>
                  <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-1">Specialists</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white">100%</h4>
                  <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-1">Medical Safety</p>
                </div>
              </div>
              <Link to="/doctors" className="h-14 px-8 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 inline-flex">
                Meet the Team <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. CTA Section */}
      <section className="py-12 lg:py-10 bg-[#0f172a] text-white text-center">
         <div className="container-custom max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Not sure what's best for your parent?</h2>
            <p className="text-xl text-gray-400 font-light mb-10">
               Schedule a free home assessment visit. Our geriatric experts will evaluate the medical and lifestyle needs to recommend the perfect care plan.
            </p>
            <div className="flex justify-center gap-6">
               <Link to="/services/booking/elder-care" className="h-16 px-10 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-orange-500/20">
                  Book Free Assessment
               </Link>
            </div>
         </div>
      </section>

      {/* SECTION: CARE EQUIPMENT */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Medical Support</span>
              <h2 className="section-title">Home Care <br /><span className="text-orange-500">Equipment.</span></h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                We provide a range of medical equipment on rental or purchase to support senior care at home, ensuring a safe and clinical environment for your loved ones.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Hospital Beds", desc: "Manual & Electric multi-function beds.", path: "/infrastructure/rooms" },
                  { title: "Oxygen Support", desc: "Concentrators and cylinders available 24/7.", path: "/services/emergency" },
                  { title: "Vitals Monitors", desc: "Digital devices for blood pressure and SpO2.", path: "/infrastructure/icu" },
                  { title: "Mobility Aids", desc: "Wheelchairs, walkers, and support bars.", path: "/patient-experience" }
                ].map((item, i) => (
                  <Link to={item.path} key={i} className="p-6 bg-slate-50 rounded-2xl border border-gray-100 group hover:border-orange-200 transition-all block">
                    <h4 className="font-bold text-brand-dark mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={ASSETS.SVC_ICU_ADVANCE} alt="Equipment" className="rounded-[4rem] shadow-2xl w-full h-[450px] object-cover border-8 border-orange-50" />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: MONITORING APP (NEW SECTION 13) */}
      <Section className="bg-orange-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">Stay Connected with <br /><span className="text-orange-500 normal">Umang Care App.</span></h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                Remotely monitor your parent's vitals, track caregiver attendance, and get daily health summaries from our doctors. Peace of mind, anywhere.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="h-14 px-8 bg-black text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-3">
                  <Smartphone size={20} /> Play Store
                </button>
                <button className="h-14 px-8 border border-black/20 rounded-xl font-bold hover:bg-black/5 transition-all flex items-center gap-3">
                  <Smartphone size={20} /> App Store
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-orange-100">
                <Users size={64} className="text-orange-500 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-brand-dark mb-2">5000+ Families</h4>
                <p className="text-sm text-gray-500">Trust our app for daily elderly care updates.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: GERIATRIC FAQ */}
      <Section className="bg-gray-50">
        <Container className="max-w-4xl">
          <SectionHeading 
            eyebrow="Help Desk" 
            title="Elder Care FAQ" 
            centered
          />
          <div className="space-y-4">
            {[
              { q: "How do you select your caregivers?", a: "Every caregiver undergoes a multi-stage screening, including background verification, clinical skills assessment, and empathy-based interviewing." },
              { q: "Can we get a replacement if we are not satisfied?", a: "Yes, we prioritize patient comfort. If there is a mismatch in compatibility, we provide a replacement within 24-48 hours." },
              { q: "Do care plans include doctor visits?", a: "Our comprehensive care plans include weekly or bi-weekly home visits by a general physician to monitor progress." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-left hover:border-orange-300 transition-all group">
                <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                  <HelpCircle size={20} className="text-orange-500 shrink-0 group-hover:scale-110 transition-transform" /> {faq.q}
                </h4>
                <p className="text-slate-600 pl-9 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to provide the <br /><span className="text-orange-400 normal">best for your parents?</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Get expert guidance on our care packages and find the right support system for your family.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/services/booking/elder-care" className="px-10 py-5 bg-orange-500 text-white rounded-full font-bold text-base shadow-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-orange-900/20">
              Request a Consultation <ArrowRight size={20} />
            </Link>
            <a href={`tel:${siteConfig.contacts.main}`} className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              Talk to Expert: {siteConfig.contacts.main}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ElderCare;
