import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, ShieldCheck, Quote, Star, Users, Award, 
  CheckCircle2, Clock, Sparkles, Smile, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <h1 className="text-white mb-6 leading-tight">Healing with <span className="text-rose-400 italic">Compassion.</span></h1>
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
                <p className="text-sm font-bold italic leading-relaxed text-slate-700">"Compassion is the only language we speak fluently. We don't just treat symptoms; we care for souls."</p>
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
      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Nursing Professionals", value: "500+", icon: Users },
              { label: "Years Combined Exp.", value: "2500+", icon: Sparkles },
              { label: "ICU Specialization", value: "1:1", icon: ShieldCheck },
              { label: "Patient Satisfaction", value: "98%", icon: Smile }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 text-rose-500">
                  <stat.icon size={28} />
                </div>
                <h3 className="text-3xl font-bold text-brand-dark mb-1">{stat.value}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
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
              { title: "Critical Care Nursing", desc: "Expertise in managing ventilators, multi-organ support, and post-operative monitoring.", icon: Activity },
              { title: "Oncology Nursing", desc: "Specialized care for chemotherapy administration and palliative support.", icon: Heart },
              { title: "Cardiac Care", desc: "Post-Cath Lab and bypass surgery recovery specialists.", icon: Heart }
            ].map((unit, i) => (
              <Card key={i} className="group hover:border-rose-100 transition-all duration-500 text-center !p-10">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all">
                  <unit.icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-4">{unit.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{unit.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-dark text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white mb-6">Experience Care That <span className="text-rose-400 italic">Touches Hearts.</span></h2>
            <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed">
              At Umang, we believe that medicine is what you get, but care is how you feel. Our nurses are here to make sure you feel at home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/doctors" className="btn-primary !bg-rose-600 hover:!bg-rose-700 py-4 px-10 text-sm font-bold shadow-lg shadow-rose-900/20">
                Book a Consultation
              </Link>
              <Link to="/contact" className="btn-outline !border-white/20 hover:!bg-white/10 py-4 px-10 text-sm font-bold">
                Contact Our Team
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default NursingStaff;
