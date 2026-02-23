import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Home, Heart, Activity, UserCheck, Clock, ShieldCheck, 
  Phone, Calendar, CheckCircle, ArrowRight, Star, ChevronDown,
  Wind, Zap, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section } from '../../components/ui/Layout';

const services = [
  {
    icon: Activity,
    title: "ICU at Home",
    desc: "Critical care setup with ventilators, monitors, and 24/7 specialized nursing staff for patients requiring intensive monitoring.",
    features: ["Advanced Life Support", "Critical Care Nurses", "Daily Doctor Tele-rounds"]
  },
  {
    icon: UserCheck,
    title: "Nursing Care",
    desc: "Compassionate nursing support for post-surgical care, wound dressing, injection administration, and elderly care.",
    features: ["12/24 Hour Shifts", "Post-operative Support", "Medication Management"]
  },
  {
    icon: Heart,
    title: "Physiotherapy",
    desc: "Expert physiotherapists visiting your home to help with rehabilitation, pain management, and mobility improvement.",
    features: ["Orthopedic Rehab", "Neurological Rehab", "Geriatric Fitness"]
  },
  {
    icon: ShieldCheck,
    title: "Elderly Care",
    desc: "Holistic support for seniors including companionship, hygiene assistance, and vitals monitoring.",
    features: ["Assisted Living", "Dementia Care", "Fall Prevention"]
  },
  {
    icon: Clock,
    title: "Medical Equipment",
    desc: "Rent or buy hospital-grade equipment like oxygen concentrators, hospital beds, and wheelchairs.",
    features: ["Quick Delivery", "Installation & Demo", "Sanitized Equipment"]
  },
  {
    icon: Calendar,
    title: "Doctor Visits",
    desc: "Scheduled home visits by general physicians and specialists for routine checkups and consultations.",
    features: ["General Health Check", "Chronic Disease Mgmt", "Palliative Care"]
  }
];

const faqs = [
  { q: "Is the nursing staff certified?", a: "Yes, all our nurses are qualified, background-verified, and trained in critical care protocols." },
  { q: "How quickly can you set up an ICU at home?", a: "We can deploy a complete ICU setup within 12-24 hours depending on the equipment requirements." },
  { q: "Do you offer short-term care?", a: "Yes, we offer flexible plans ranging from a single visit to long-term monthly packages." }
];

const HomeCare = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Home Care Services | Umang Hospital</title>
        <meta name="description" content="Professional hospital-like care at home. ICU setup, nursing, physiotherapy, and medical equipment rental services." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[600px] flex items-center bg-[#f0f9ff] overflow-hidden py-12 lg:py-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-[#e0f2fe] rounded-bl-[10rem] z-0" />
          <img
            src={ASSETS.NURSE_CARE}
            alt="Nurse with Patient" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[74%] object-cover rounded-l-[3rem] shadow-2xl z-10 hidden lg:block"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 text-[#005580] font-bold uppercase tracking-widest text-xs mb-6">
              <Home className="w-4 h-4" />
              <span>Hospital Expertise at Home</span>
            </div>
            <h1 className="font-serif font-bold text-[#0f172a] mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Healing begins where the <br />
              <span className="text-[#005580]">Heart belongs.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed mb-7">
              Bring world-class medical care to the comfort of your home. From ICU setups to compassionate nursing, we are by your side.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md">
               <h3 className="font-bold text-[#0f172a] mb-4 text-lg">Request a Call Back</h3>
               <div className="space-y-4">
                  <input type="text" placeholder="Patient Name" className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#005580] outline-none text-base" />
                  <input type="tel" placeholder="Phone Number" className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#005580] outline-none text-base" />
                  <Link to="/services/booking/home-care" className="w-full h-12 bg-[#005580] text-white rounded-xl font-bold hover:bg-[#004466] transition-all shadow-lg flex items-center justify-center gap-2 text-base">
                     Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: CARE IMPACT STATS (NEW SECTION 2) */}
      <div className="bg-[#030712] py-10 md:py-12 text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
            {[
              { label: "Home ICUs Setup", value: "500+" },
              { label: "Recovery Rate", value: "94%" },
              { label: "Certified Staff", value: "200+" },
              { label: "Years Excellence", value: "15+" }
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-4 bg-primary-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-3xl lg:text-4xl font-serif font-bold mb-2 tracking-tighter text-white group-hover:text-primary-400 transition-colors duration-500">{stat.value}</p>
                <div className="flex flex-col items-center">
                  <div className="h-[1px] w-5 bg-primary-600/40 mb-3 group-hover:w-10 transition-all duration-700" />
                  <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-300 transition-colors">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      {/* 2. Services Grid (NOW SECTION 3) */}
      <section className="section-padding bg-white">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-4">Comprehensive Home Care</h2>
               <p className="text-gray-500 text-lg lg:text-xl"> Tailored medical services designed to promote recovery and well-being in a familiar environment.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {services.map((service, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#005580] flex items-center justify-center mb-6 group-hover:bg-[#005580] group-hover:text-white transition-colors">
                        <service.icon className="w-7 h-7" />
                     </div>
                     <h3 className="text-xl lg:text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#005580] transition-colors">{service.title}</h3>
                     <p className="text-gray-600 text-base leading-relaxed mb-6">{service.desc}</p>
                     <ul className="space-y-2">
                        {service.features.map((feat, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wide">
                              <CheckCircle className="w-3 h-3 text-green-500" /> {feat}
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: SPECIALIZED REHABILITATION (NEW SECTION 4) */}
      <Section className="bg-slate-50 overflow-hidden relative">
        <Container>
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <div className="lg:w-7/12">
              <span className="text-[#005580] font-bold uppercase tracking-widest text-sm mb-4 block">Recovery Experts</span>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-8 leading-tight">Specialized Post-Op <br /><span className="text-[#005580] italic">Rehabilitation.</span></h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                Recovery doesn't end at discharge. Our specialized rehab programs help you regain mobility and strength after complex surgeries or neurological events.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "Neuro Rehabilitation", desc: "Expert care for stroke and spinal injury recovery.", path: "/specialities/neuro" },
                  { title: "Cardiac Rehab", desc: "Monitored exercise and diet plans post heart surgery.", path: "/specialities/cardiac" },
                  { title: "Orthopedic Rehab", desc: "Physiotherapy for joint replacements and fractures.", path: "/specialities/ortho" }
                ].map((item, i) => (
                  <Link to={item.path} key={i} className="p-6 bg-white rounded-2xl border border-gray-100 flex gap-5 items-center group hover:shadow-md transition-all block">
                    <div className="w-12 h-12 bg-blue-50 text-[#005580] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#005580] group-hover:text-white transition-all">
                      <Heart size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark group-hover:text-[#005580] transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-5/12">
              <img src={ASSETS.ABOUT_MAIN} alt="Rehab" className="rounded-[4rem] shadow-2xl border-8 border-white w-full max-h-[550px] object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: MEDICAL EQUIPMENT RENTAL (NEW SECTION 5) */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#005580] font-bold uppercase tracking-widest text-xs mb-4 block">Support Infrastructure</span>
            <h2 className="text-4xl font-serif font-bold text-brand-dark">Clinical Equipment Rental</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Oxygen Concentrator", icon: Wind, status: "Available Now" },
              { name: "Hospital Beds", icon: Home, status: "In Stock" },
              { name: "Suction Machines", icon: Activity, status: "Ready to Ship" },
              { name: "Cardiac Monitors", icon: Zap, status: "Limited Stock" }
            ].map((eq, i) => (
              <Link to="/contact/inquiry-hub" key={i} className="group block">
                <div className="p-8 bg-gray-50 rounded-[2.5rem] text-center border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all h-full">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                    <eq.icon className="text-[#005580]" size={28} />
                  </div>
                  <h4 className="font-bold text-[#0f172a] mb-2 group-hover:text-blue-600 transition-colors">{eq.name}</h4>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{eq.status}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Enquire Now <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Process Steps (NOW SECTION 6) */}
      <section className="section-padding bg-gray-50">
         <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-16 text-center">How It Works</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
               <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10" />
               
               {[
                  { title: "Consultation", desc: "Speak with our care manager to discuss needs.", path: "/contact" },
                  { title: "Assessment", desc: "Our team conducts a home assessment visit.", path: "/contact" },
                  { title: "Care Plan", desc: "Customized care plan created by doctors.", path: "/doctors" },
                  { title: "Service Start", desc: "Care delivery begins with regular monitoring.", path: "/services/booking/home-care" }
               ].map((step, i) => (
                  <Link to={step.path} key={i} className="text-center relative bg-gray-50 group block">
                     <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-xl font-bold text-[#005580] mx-auto mb-6 shadow-sm relative z-10 group-hover:bg-[#005580] group-hover:text-white transition-all">
                        {i + 1}
                     </div>
                     <h4 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#005580] transition-colors">{step.title}</h4>
                     <p className="text-base text-gray-500 px-4">{step.desc}</p>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: CARE APP PROMO (NEW SECTION 7) */}
      <Section className="bg-[#0f172a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Monitor Care in <br /><span className="text-blue-400">Real-Time.</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Track nurse vitals logging, caregiver attendance, and daily doctor reports directly through the Umang Care app. Transparency at your fingertips.
              </p>
              <div className="flex gap-6">
                <button className="h-14 px-8 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all">Google Play</button>
                <button className="h-14 px-8 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all">App Store</button>
              </div>
            </div>
            <div className="lg:w-1/2 text-center">
              <div className="inline-block p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem]">
                <Smartphone size={64} className="text-blue-400 mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-2">Verified Logs</h4>
                <p className="text-sm text-gray-400">Hourly vitals update for ICU patients.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: EXPERT NURSING TEAM (NEW SECTION 8) */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img src={ASSETS.NURSE_CARE} alt="Nursing Team" className="rounded-[3rem] shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Medical Professionals</span>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6">Staffed by Certified <br /><span className="text-blue-600 italic">ICU Nurses.</span></h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Our nursing team is not just compassionate but highly skilled. Every home care nurse undergoes rigorous clinical training and background verification before deployment.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-brand-dark">200+</h4>
                  <p className="text-xs text-gray-400 uppercase font-bold mt-1">Caregivers</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-dark">24/7</h4>
                  <p className="text-xs text-gray-400 uppercase font-bold mt-1">Expert Backup</p>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/team/nursing" className="btn-primary">Meet Nursing Team</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. FAQ & CTA (NOW SECTION 9 & 10) */}
      <Section className="bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30 -mr-48 -mt-48" />
        <Container>
          <div className="text-center mb-20 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 mb-4 block">Help Center</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark">Home Care <span className="text-primary-600 italic">FAQ.</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
            {[
              { q: "Is the nursing staff certified?", a: "Yes, all our nurses are qualified, background-verified, and trained in critical care protocols to ensure hospital-standard care at home." },
              { q: "How quickly can you set up an ICU at home?", a: "We can deploy a complete ICU setup within 12-24 hours depending on the equipment requirements and medical urgency." },
              { q: "Do you offer short-term care?", a: "Yes, we offer flexible plans ranging from a single visit for dressing or injections to long-term monthly nursing packages." },
              { q: "Is doctor supervision available?", a: "Absolutely. All our home care patients are under the supervision of a hospital consultant who conducts daily digital rounds." },
              { q: "Can I rent equipment separately?", a: "Yes, we have a large inventory of medical equipment available for direct rental or purchase without mandatory nursing service." },
              { q: "What areas do you cover?", a: "We provide comprehensive home care services across Gurugram and the wider NCR region with dedicated field supervisors." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <h4 className="font-bold text-brand-dark flex items-start gap-6 mb-4 text-xl group-hover:text-primary-600 transition-colors">
                  <span className="w-10 h-10 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-600 font-black text-sm group-hover:bg-primary-600 group-hover:text-white transition-all">?</span>
                  {faq.q}
                </h4>
                <div className="pl-16">
                  <p className="text-slate-500 text-lg font-light leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-blue-50 rounded-[2.5rem] p-8 md:p-12 text-center border border-blue-100 shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full -mr-16 -mt-16" />
             <div className="w-16 h-16 bg-[#005580] rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-200">
                <Phone className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Need immediate assistance?</h3>
             <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg">Our Home Care coordinators are available 24/7 to answer your queries and arrange urgent care within 4-12 hours.</p>
             <a href="tel:+918588072727" className="inline-flex items-center gap-2 px-10 py-5 bg-[#005580] text-white rounded-full font-bold shadow-xl hover:bg-[#004466] hover-lift transition-all">
                Speak to Care Manager
             </a>
          </div>
        </Container>
      </Section>

      {/* SECTION: FINAL COMMITMENT (NEW SECTION 11) */}
      <section className="section-padding bg-brand-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Star size={48} className="text-yellow-400 mx-auto mb-8 fill-current animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">Trust the Legacy of <br /><span className="text-blue-400">Compassionate Care.</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">We don't just provide medical support; we build a sanctuary of healing right in your home. Your comfort is our clinical priority.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-base shadow-xl flex items-center gap-3 hover:scale-105 transition-all">
                                 Visit Main Hospital              </Link>
              <Link to="/about" className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/5 transition-all flex items-center gap-3">
                Our Healing Story
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};

export default HomeCare;
