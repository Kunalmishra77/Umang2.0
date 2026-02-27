import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Heart, ShieldCheck, Quote, Star, Users, Award,
  CheckCircle2, Clock, Sparkles, Smile, Activity, ArrowRight, Phone, HelpCircle
} from 'lucide-react';import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';
import { siteConfig } from '../../config/siteConfig';

const NursingStaff = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Nursing Staff | {siteConfig.name}</title>
        <meta name="description" content="Our compassionate nursing staff is the heart of Umang Hospital, providing 24/7 dedicated patient care." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.NURSE_CARE} 
            alt="Nursing Staff" 
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
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
              The Heart of Care
            </span>
            <h1 className="text-white mb-6 leading-tight">Healing with <span className="text-rose-400 normal">Compassion.</span></h1>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              Our 500+ strong nursing team is dedicated to providing round-the-clock compassionate care, ensuring your journey to recovery is comfortable and safe.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-premium relative z-10">
                <img 
                  src={ASSETS.NURSE_CARE} 
                  alt="Nursing Care" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-[320px] border border-slate-100 hidden md:block">
                <Quote className="w-10 h-10 text-rose-400 mb-4 fill-current opacity-40" />
                <p className="text-sm font-bold normal leading-relaxed text-slate-700">"Compassion is the only language we speak fluently. We don't just treat symptoms; we care for souls."</p>
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">- Nursing Director</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <SectionHeading 
                eyebrow="Our Nursing Philosophy" 
                title="Patient-First Nursing Excellence" 
                description="We follow a primary nursing model where dedicated care coordinators ensure continuous monitoring and emotional support for every patient."
              />
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "24/7 Monitoring", desc: "Constant vigilance across all wards and ICUs.", icon: Clock },
                  { title: "1:1 ICU Ratio", desc: "Personalized attention for critical care patients.", icon: Users },
                  { title: "Certified ACLS/BLS", desc: "Every nurse is trained in advanced life support.", icon: Award },
                  { title: "Bedside Empathy", desc: "Focus on emotional well-being and patient comfort.", icon: Heart }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
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

      {/* Stats Section */}
      <Section className="bg-slate-50 py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { label: "Nursing Professionals", value: "500+", icon: Users },
              { label: "Years Combined Exp.", value: "2500+", icon: Sparkles },
              { label: "ICU Specialization", value: "1:1", icon: ShieldCheck },
              { label: "Patient Satisfaction", value: "98%", icon: Smile }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 text-rose-500 border border-rose-100/50">
                  <stat.icon size={22} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-1">{stat.value}</h3>
                <p className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Specialized Nursing Units */}
      <Section>
        <Container>
          <SectionHeading 
            eyebrow="Specialized Units" 
            title="Expertise in Every Ward" 
            description="Our nursing staff is specialized across different medical domains, ensuring tailored care for specific clinical needs."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Critical Care Nursing", desc: "Expertise in managing ventilators, multi-organ support, and post-operative monitoring.", icon: Activity, path: "/infrastructure/icu" },
              { title: "Oncology Nursing", desc: "Specialized care for chemotherapy administration and palliative support.", icon: Heart, path: "/specialities/oncology" },
              { title: "Cardiac Care", desc: "Post-Cath Lab and bypass surgery recovery specialists.", icon: Heart, path: "/specialities/cardiac" }
            ].map((unit, i) => (
              <Link key={i} to={unit.path} className="block group">
                <Card className="h-full group-hover:border-rose-100 transition-all duration-500 text-center !p-10 shadow-soft group-hover:shadow-premium bg-white">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all">
                    <unit.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-4 group-hover:text-rose-600 transition-colors">{unit.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{unit.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. CARE DELIVERY WORKFLOW */}
      <Section className="bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px]" />
        <Container>
          <div className="text-center mb-20">
            <span className="text-rose-400 font-bold uppercase tracking-widest text-[11px] mb-4 block">Our Protocol</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold">Nursing Care <span className="normal text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-100">Workflow.</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-0" />
            {[
              { title: "Triage", desc: "Rapid assessment of clinical severity.", step: "01" },
              { title: "Allocation", desc: "Dedicated nurse assignment (1:1/1:2).", step: "02" },
              { title: "Vitals Hub", desc: "Real-time logging into patient records.", step: "03" },
              { title: "Feedback", desc: "Daily coordination with consultant.", step: "04" }
            ].map((s, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-24 h-24 bg-[#0f172a] rounded-full border-4 border-rose-500 flex items-center justify-center text-2xl font-black text-white mx-auto mb-8 shadow-[0_0_30px_rgba(244,63,94,0.3)] group-hover:bg-rose-600 transition-all">
                  {s.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed px-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. TECHNOLOGY AT BEDSIDE */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="Smart Nursing" 
                title="Technology Meets <span class='text-rose-500'>Compassion.</span>" 
                description="Our nursing teams utilize the latest bedside monitoring and digital charting tools to ensure zero-error medication and treatment delivery."
              />
              <div className="space-y-6">
                {[
                  { title: "Electronic Vitals Charting", desc: "Instant data syncing with physician tablets." },
                  { title: "Barcoded Medication", desc: "Verification of every drug dose before delivery." },
                  { title: "Centralized Monitoring", desc: "Alarms from every bed mirrored at the nursing station." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-1.5 h-12 bg-rose-50 rounded-full group-hover:bg-rose-500 transition-all" />
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-rose-50 rounded-[4rem] rotate-3 -z-10" />
              <img src={ASSETS.SVC_ICU_ADVANCE} alt="Smart Monitoring" className="rounded-[4rem] shadow-2xl w-full h-[500px] object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. CONTINUOUS EDUCATION HUB */}
      <Section className="bg-slate-50">
        <Container>
          <div className="bg-brand-dark rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] -mr-32 -mt-32" />
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="text-rose-400 font-bold uppercase tracking-widest text-[10px] mb-4 block">Skills Mastery</span>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Continuous Training <br />& Simulation Lab.</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                  We maintain a dedicated simulation hub where nurses undergo regular drills for ACLS (Advanced Cardiac Life Support) and specialized trauma response.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Certified BLS", "ACLS Mastery", "IT-Chart Training", "Infection Control"].map((item, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-rose-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Link to="/careers" className="h-16 px-10 rounded-full bg-rose-600 text-white font-bold text-lg hover:bg-rose-700 transition-all inline-flex items-center gap-2 shadow-xl shadow-rose-900/20">
                  Apply to Join Nursing <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. STAFF RECOGNITION (TESTIMONIALS) */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Voices from the Floor" title="Nurse Spotlight" centered />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Sr. Mary Varghese', role: 'Head - Critical Care Nursing', text: 'At Umang, we are empowered to be more than just assistants; we are clinical partners in the patient\'s recovery journey.' },
              { name: 'Sr. Anjali Sharma', role: 'Team Lead - OT', text: 'The level of technology and sterile protocols here is comparable to any global healthcare center I have worked at.' }
            ].map((item, i) => (
              <Card key={i} className="!p-12 !rounded-[3rem] bg-slate-50 border-none shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-100 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Quote className="w-10 h-10 text-rose-200 mb-6 fill-current" />
                <p className="text-lg normal text-slate-600 mb-8 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center font-bold text-rose-600">{item.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{item.name}</h4>
                    <p className="text-[10px] font-black uppercase text-rose-600 tracking-widest">{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION: CARE COORDINATOR NETWORK (NEW) */}
      <Section className="bg-white">
        <Container>
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                 <SectionHeading 
                   eyebrow="Personalized Support" 
                   title="Your Dedicated <span class='text-rose-500'>Care Coordinator.</span>" 
                   description="Every patient is assigned a dedicated nursing coordinator who serves as a bridge between the family and the clinical faculty, ensuring 100% transparency."
                 />
                 <div className="space-y-6">
                    {[
                      { title: "Point of Contact", desc: "One person to handle all your clinical queries." },
                      { title: "Family Counseling", desc: "Regular updates on the patient's recovery progress." },
                      { title: "Home Care Handover", desc: "Detailed orientation before hospital discharge." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all">
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-brand-dark mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2">
                 <img src={ASSETS.ABOUT_MAIN} alt="Care Coordination" className="rounded-[3rem] shadow-2xl w-full h-[400px] lg:h-[500px] object-cover" />
              </div>
           </div>
        </Container>
      </Section>

      {/* 8. NURSING FAQ */}
      <Section className="bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-[120px] opacity-30 -mr-48 -mt-48" />
        <Container>
          <div className="text-center mb-20 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4 block">Help Center</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark">Nursing <span className="text-rose-600 normal">Queries.</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
            {[
              { q: "What is the nurse-patient ratio in the ICU?", a: "To ensure 100% patient safety, we maintain a 1:1 nurse-to-patient ratio for all critical care beds." },
              { q: "Are the nurses trained in emergency response?", a: "Yes, every staff nurse at Umang is ACLS (Advanced Cardiac Life Support) and BLS (Basic Life Support) certified." },
              { q: "How often are nurse rotations performed?", a: "We follow a 3-shift pattern (8 hours each) to ensure our staff remains rested, alert, and capable of high-precision care." },
              { q: "Is specialized home care nursing available?", a: "Absolutely. Our home-care wing provides qualified ICU nurses for home deployments following hospital protocols." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-rose-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <h4 className="font-bold text-brand-dark flex items-start gap-6 mb-4 text-xl group-hover:text-rose-600 transition-colors">
                  <span className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 text-rose-600 font-black text-sm group-hover:bg-rose-600 group-hover:text-white transition-all">?</span>
                  {faq.q}
                </h4>
                <div className="pl-16">
                  <p className="text-slate-500 text-lg font-light leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. NURSING INFRASTRUCTURE GALLERY */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <img src={ASSETS.NURSE_CARE} alt="OT Nursing" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
            <img src={ASSETS.DIRECTOR} alt="Nursing Lead" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
            <img src={ASSETS.ABOUT_GLOBAL} alt="Bedside Care" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
            <img src={ASSETS.SURGERY_TEAM} alt="Teamwork" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
          </div>
        </Container>
      </Section>

      {/* 10. FINAL CTA HUB */}
      <Section className="bg-brand-dark text-white relative overflow-hidden py-12 lg:py-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container className="text-center relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Touch of <span className="text-rose-400 normal">Healing.</span></h2>
          <p className="text-slate-400 text-base lg:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">Our clinical nursing coordinators are available 24/7 to assist with your patient care queries.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
            <a href="tel:+918588072727" className="px-8 py-4 bg-rose-600 text-white rounded-xl font-bold text-base hover:bg-rose-700 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
              <Phone size={20} className="group-hover:rotate-12 transition-transform" /> 85880 72727
            </a>
            <Link to="/careers" className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
              <Users size={20} /> Join Our Team
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default NursingStaff;
