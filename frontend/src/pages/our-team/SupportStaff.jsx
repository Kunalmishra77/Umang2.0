import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Users, ShieldCheck, Clock, Award, Heart, CheckCircle2,
  Phone, Calendar, Globe, MapPin, Search, Star, MessageSquare, Zap,
  FileText, Activity, Truck, User, HelpCircle
} from 'lucide-react';import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';
import { siteConfig } from '../../config/siteConfig';

const SupportStaff = () => {
  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>Support Staff & Admin Team | {siteConfig.name}</title>
        <meta name="description" content="Meet the dedicated non-clinical team ensuring smooth hospital operations and patient care at Umang Hospital." />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.RECEPTION || ASSETS.HOSPITAL_EXTERIOR} 
            alt="Support Team" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="hero-overlay-radial" />
        </div>
        <Container className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
              Operations & Care
            </span>
            <h1 className="text-white mb-6 leading-tight text-4xl md:text-6xl lg:text-5xl font-serif font-bold">Engine of <span className="text-primary-400 normal">Excellence.</span></h1>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              Our 200+ dedicated support staff members work behind the scenes to ensure every patient journey is seamless, safe, and stress-free.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. STATS OVERLAY */}
      <div className="bg-[#030712] py-10 md:py-12 text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
            {[
              { label: 'Total Support', value: '200+', icon: Users },
              { label: 'Dept. Groups', value: '12', icon: ShieldCheck },
              { label: 'Response', value: '< 5 Min', icon: Clock },
              { label: 'Uptime', value: '24/7', icon: Award }
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
      </div>

      {/* 3. ADMINISTRATION FOCUS */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-premium relative z-10">
                <img src={ASSETS.RECEPTION} alt="Admin Desk" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-dark p-8 rounded-3xl shadow-2xl z-20 max-w-[320px] border border-white/10 hidden md:block">
                <h4 className="text-primary-400 font-bold mb-2">Zero-Wait Admissions</h4>
                <p className="text-xs text-slate-300 leading-relaxed">Our front-office team is trained to complete inpatient admissions in under 15 minutes.</p>
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <SectionHeading 
                eyebrow="Administrative Pillars" 
                title="Management That <span class='text-primary-600'>Empowers Care.</span>" 
                description="The success of clinical outcomes relies heavily on the efficiency of non-clinical management. We prioritize transparency and speed."
              />
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Admission Hub", desc: "Seamless paperwork & room allocation.", icon: User },
                  { title: "Billing Desk", desc: "Transparent and error-free accounting.", icon: FileText },
                  { title: "TPA Helpdesk", desc: "Insurance approval coordination 24/7.", icon: ShieldCheck },
                  { title: "Concierge", desc: "Personalized assistance for VIP care.", icon: Heart }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. FACILITY MANAGEMENT HUB */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeading 
            eyebrow="Infrastructure Support" 
            title="Beyond Clinical Walls" 
            description="Our facility management team ensures that every square inch of Umang Hospital is sterile, functional, and safe."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Biomedical Team", desc: "Ensuring 100% uptime for life-saving ventilators and monitors.", icon: Activity, path: "/infrastructure" },
              { title: "Sanitization Hub", desc: "Deep cleaning protocols adhering to ISO-Class infection control.", icon: ShieldCheck, path: "/patient-experience" },
              { title: "Logistics Fleet", desc: "Managing ambulance dispatch and medicine supply chain.", icon: Truck, path: "/services/emergency" }
            ].map((unit, i) => (
              <Link key={i} to={unit.path} className="block group">
                <Card className="h-full group-hover:border-primary-100 transition-all duration-500 text-center !p-10 bg-white shadow-soft group-hover:shadow-premium">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                    <unit.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-4 group-hover:text-primary-600 transition-colors">{unit.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{unit.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION: OPERATIONAL EXCELLENCE (NEW) */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <img src={ASSETS.ABOUT_BEACON} alt="Operations" className="rounded-[3rem] shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="Behind the Scenes" 
                title="Operational <span class='text-primary-600'>Vanguard.</span>" 
                description="Our non-clinical operations are powered by advanced HMIS (Hospital Management Information Systems) to ensure paperless efficiency."
              />
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Smart Inventory", desc: "Real-time drug tracking." },
                  { title: "Digital Billing", desc: "100% transparent records." },
                  { title: "AI Scheduling", desc: "Optimized OT utilization." },
                  { title: "Feedback Loop", desc: "Instant response system." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-premium transition-all">
                    <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-black tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: ADMIN QUALITY (NEW) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <SectionHeading 
                eyebrow="Non-Clinical Quality" 
                title="Benchmarks of <span class='text-primary-600'>Efficiency.</span>" 
                description="We monitor every administrative metric from admission time to cafeteria hygiene to ensure a 5-star experience."
              />
              <div className="space-y-4">
                {["Avg Admission: 12 Mins", "Insurance Clearance: < 2 Hrs", "100% sterile cafeteria", "99% billing accuracy"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span className="font-bold text-sm text-slate-700 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
               <img src={ASSETS.RECEPTION} alt="Admin Quality" className="rounded-[3rem] shadow-2xl w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. GUEST RELATIONS & INTERNATIONAL */}
      <Section className="bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">International Support</span>
              <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8">World-Class <span className="normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Hospitality.</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
                Our guest relations team assists international patients with visa processing, airport transfers, and multi-language interpretation services.
              </p>
              <div className="space-y-6">
                {['Dedicated Interpreter Desk', 'Medical Visa Invitation Hub', 'Airport Transfer Coordination', 'Post-Discharge Follow-up Care'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="text-primary-400 w-5 h-5" />
                    <span className="font-bold text-sm text-slate-300 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={ASSETS.ABOUT_GLOBAL} alt="Global Desk" className="rounded-[3rem] shadow-2xl grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 border-[20px] border-white/5 rounded-[3rem] scale-105 -z-10" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. SECURITY & SAFETY BENCHMARKS */}
      <Section className="bg-white">
        <Container>
          <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group border border-slate-100">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[100px] opacity-20 -mr-48 -mt-48" />
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-4 block">Safety Standards</span>
                <h2 className="text-4xl font-serif font-bold text-brand-dark leading-tight">Patient Safety is <br /><span className="text-primary-600 normal">Non-Negotiable.</span></h2>
              </div>
              <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl active:scale-95">
                Report Safety Issue
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Surveillance', desc: '24/7 CCTV Monitoring of all public zones.', icon: Search },
                { label: 'Access Control', desc: 'Biometric entry for critical units.', icon: ShieldCheck },
                { label: 'Fire Safety', desc: 'Automated sprinkler & detection systems.', icon: Zap },
                { label: 'Rapid Response', desc: 'Quick evacuation protocols in place.', icon: Phone }
              ].map((item, i) => (
                <div key={i} className="text-left">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-brand-dark mb-2">{item.label}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. DIETARY & NUTRITION TEAM */}
      <Section className="bg-white pt-0">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="Clinical Nutrition" 
                title="Healing Through <span class='text-primary-600'>Proper Nutrition.</span>" 
                description="Our team of FSSAI-certified nutritionists work with doctors to design therapeutic diets tailored to each patient's clinical needs."
              />
              <ul className="space-y-4 mb-10">
                {['Diabetic Specific Meals', 'Heart-Healthy Cardiac Diets', 'Renal Low-Protein Plans', 'Post-Op Liquid Nutrition'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                    <CheckCircle2 className="text-green-500 w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/infrastructure/cafeteria" className="btn-outline">Visit Cafeteria Hub</Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary-100 rounded-full blur-[80px] opacity-30" />
              <img src={ASSETS.HOSPITAL_EXTERIOR} alt="Nutrition" className="rounded-[3rem] shadow-2xl relative z-10 h-[400px] w-full object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. CAREER GROWTH & TRAINING */}
      <Section className="bg-slate-900 text-white">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-6">Empowering Our <span className="text-primary-400 normal">Workforce.</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              We believe in continuous learning. Our staff participates in regular workshops, simulation drills, and soft-skill training programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Skill Workshops', desc: 'Monthly training on advanced hospital software and clinical tech.' },
              { title: 'Soft Skills', desc: 'Empathy-based communication training for all front-desk teams.' },
              { title: 'Safety Drills', desc: 'Quarterly mock-drills for fire, disaster, and emergency response.' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all">
                <Star className="text-primary-400 w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION: PATIENT ADVOCACY HUB (NEW) */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <img src={ASSETS.ABOUT_GLOBAL} alt="Patient Advocacy" className="rounded-[3rem] shadow-2xl w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="Your Voice Matters" 
                title="The Patient <span class='text-primary-600'>Advocacy Hub.</span>" 
                description="Our dedicated patient advocates are here to listen to your feedback, resolve concerns, and ensure that your experience at Umang Hospital exceeds expectations."
              />
              <div className="space-y-6">
                {[
                  { title: "24/7 Feedback Desk", desc: "Share your experience via digital terminals or in-person." },
                  { title: "Grievance Redressal", desc: "Rapid resolution of any administrative or non-clinical issues." },
                  { title: "Patient Rights Guide", desc: "Empowering you with information regarding your care." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                      <Star size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. STAFF RECOGNITION (TESTIMONIALS) */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Voices of Umang" title="Our Support Heroes" centered />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Amit Sharma', role: 'Head of Operations', text: 'Ensuring that clinical teams have everything they need to save lives is what drives our admin group every day.' },
              { name: 'Priya Verma', role: 'Patient Relation Manager', text: 'Seeing a patient smile during their discharge is the ultimate reward for our coordination team.' }
            ].map((item, i) => (
              <Card key={i} className="!p-12 !rounded-[3rem] bg-slate-50 border-none shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                <MessageSquare className="w-10 h-10 text-primary-200 mb-6" />
                <p className="text-lg normal text-slate-600 mb-8 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">{item.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{item.name}</h4>
                    <p className="text-[10px] font-black uppercase text-primary-600 tracking-widest">{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. FINAL CTA HUB */}
      <Section className="bg-brand-dark text-white relative overflow-hidden py-12 lg:py-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container className="text-center relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Need Admin <span className="text-primary-400 normal">Help?</span></h2>
          <p className="text-slate-400 text-base lg:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">Our administrative coordinators are available 24/7 to assist with your queries.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
            <a href="tel:+918588072727" className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-base hover:bg-primary-700 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
              <Phone size={20} className="group-hover:rotate-12 transition-transform" /> 85880 72727
            </a>
            <Link to="/contact" className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
              <Calendar size={20} /> Get Support
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default SupportStaff;
