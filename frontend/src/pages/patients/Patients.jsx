import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, ShieldCheck, Calendar, FileText, 
  CreditCard, MessageSquare, ArrowRight, Download, 
  Lock, Zap, Heart, Activity, CheckCircle2, Info, Phone
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';
import { ASSETS } from '../../utils/imageAssets';
import SeoHead from '../../components/common/SeoHead';

const Patients = () => {
  const navigate = useNavigate();

  const portalFeatures = [
    { title: 'Digital Reports', desc: 'Access and download your lab reports instantly as they are ready.', icon: FileText, path: '/patients/lab-reports' },
    { title: 'Book Appointments', desc: 'Schedule consultations with specialists without waiting in queues.', icon: Calendar, path: '/patients/book-appointment' },
    { title: 'Online Payments', desc: 'Securely pay your hospital bills and view transaction history.', icon: CreditCard, path: '/patients/billing' },
    { title: 'Health Timeline', desc: 'A chronological view of your entire medical history at Umang.', icon: Activity, path: '/patients' },
    { title: 'Tele-Consultation', desc: 'Connect with your doctor via secure video call from home.', icon: Smartphone, path: '/services/telemedicine' },
    { title: 'Prescription Hub', desc: 'Digital records of all your current and past medications.', icon: Zap, path: '/patients' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SeoHead 
        title="Patient Portal - Digital Healthcare Access" 
        description="Manage your appointments, download lab reports, and pay bills online through the Umang Hospital Patient Portal."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ASSETS.ABOUT_MAIN} alt="Patient Care" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
        </div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <ShieldCheck size={14} /> 256-Bit Encrypted Portal
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                Your Health, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 normal">In Your Hands.</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl leading-relaxed font-light mb-12">
                Empowering you with instant access to medical records, appointments, and billing. Experience healthcare that moves at the speed of life.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/login" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl hover:scale-105 active:scale-95">
                  Access Portal
                </Link>
                <Link to="/register" className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                  Create Account
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="hidden lg:block relative">
               <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
               <img src={ASSETS.ROBOTIC_SURGERY} alt="Digital Portal" className="relative z-10 rounded-[4rem] shadow-2xl border-8 border-white/5" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. STATS BAR */}
      <div className="bg-[#030712] py-10 text-white border-b border-white/5 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Users', value: '50k+' },
              { label: 'Reports Downloaded', value: '200k+' },
              { label: 'App Rating', value: '4.8/5' },
              { label: 'Secure Servers', value: '100%' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-serif font-bold text-blue-400 mb-1">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. CORE FEATURES GRID */}
      <Section className="bg-white">
        <Container>
          <SectionHeading 
            eyebrow="Portal Capabilities" 
            title="Everything You Need, <span class='text-blue-600'>One Login.</span>" 
            description="Our patient portal is designed to be your primary touchpoint for all non-emergency hospital services."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portalFeatures.map((f, i) => (
              <Link key={i} to={f.path}>
                <Card className="h-full !p-10 border-none bg-slate-50 hover:bg-white hover:shadow-premium transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <f.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-4">{f.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-light mb-6">{f.desc}</p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 flex items-center gap-2">
                    Explore Feature <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. SECURITY FOCUS */}
      <Section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
               <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl relative z-10">
                  <Lock className="w-16 h-16 text-blue-400 mb-8 mx-auto" />
                  <h3 className="text-3xl font-serif font-bold text-center mb-10">Data Sovereignty.</h3>
                  <div className="space-y-6">
                    {['HIPAA Compliant Cloud Storage', 'End-to-End Report Encryption', 'Multi-Factor Login Authentication', 'Regular Third-Party Audits'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5">
                        <CheckCircle2 className="text-blue-400 w-5 h-5" />
                        <span className="font-bold text-sm text-slate-300 uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Your Privacy is Sacred</span>
              <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8">Bank-Grade <br /><span className="normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Data Protection.</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
                We understand that medical data is highly personal. Umang Hospital utilizes advanced cybersecurity protocols to ensure that your records are accessible only to you and your authorized treating doctors.
              </p>
              <button className="btn-primary !px-10 !py-5">Read Data Policy</button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. USER JOURNEY / WORKFLOW */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Getting Started" title="Access Your Health in <span class='text-blue-600'>3 Steps.</span>" centered />
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-blue-50 -z-0" />
            {[
              { title: 'Register', desc: 'Use your Patient ID or mobile number to create your digital account.' },
              { title: 'Verify', desc: 'Verify your identity through a secure OTP sent to your phone.' },
              { title: 'Explore', desc: 'Access your entire clinical history from our unified dashboard.' }
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center text-3xl font-black text-blue-600 mx-auto mb-8 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-4">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed px-6">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. MOBILE APP PROMO */}
      <Section className="bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8 leading-tight">Healthcare <br />on the Go.</h2>
              <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed">Download the Umang Health App for an even more seamless experience. Carry your medical records in your pocket.</p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-blue-50 transition-all">
                  <Smartphone size={20} /> App Store
                </button>
                <button className="px-10 py-5 bg-[#0f172a] text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-black transition-all">
                  <Zap size={20} /> Google Play
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative flex justify-center">
               <div className="relative w-72 h-[600px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-3xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
                  <div className="p-6 pt-12 space-y-6">
                     <div className="w-12 h-12 bg-blue-600 rounded-xl" />
                     <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                     <div className="h-4 w-full bg-white/10 rounded-full" />
                     <div className="grid grid-cols-2 gap-4 pt-8">
                        <div className="h-24 bg-white/5 rounded-2xl" />
                        <div className="h-24 bg-white/5 rounded-2xl" />
                        <div className="h-24 bg-white/5 rounded-2xl" />
                        <div className="h-24 bg-white/5 rounded-2xl" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. TESTIMONIALS */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeading eyebrow="User Feedback" title="What Our Patients <span class='text-blue-600'>Say.</span>" centered />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Sanjay Sharma', text: 'I can download my reports sitting at home within minutes of them being ready. The convenience is unmatched.' },
              { name: 'Meena Gupta', text: 'Managing my elderly mother\'s prescriptions and appointments has become so easy through the Umang portal.' }
            ].map((t, i) => (
              <Card key={i} className="!p-12 border-none shadow-sm group hover:shadow-premium transition-all duration-500 bg-white">
                <p className="text-xl normal text-slate-600 mb-8 leading-relaxed font-light">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">{t.name[0]}</div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. FAQ SECTION */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Common Portal Questions" centered />
            <div className="space-y-4">
              {[
                { q: 'How do I find my Patient ID?', a: 'Your Patient ID is mentioned on your billing receipt, prescription, and hospital ID card.' },
                { q: 'Are my lab reports available for lifetime?', a: 'Yes, once logged in, you can view your entire diagnostic history dating back to your first visit.' },
                { q: 'Can I pay bills for family members?', a: 'Yes, you can link family IDs to your primary account for unified management and payments.' }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all">
                  <h4 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-4">
                    <Info className="text-blue-600 w-5 h-5" /> {faq.q}
                  </h4>
                  <p className="text-slate-500 leading-relaxed font-medium pl-9">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. PORTAL UPDATES (NEWS) */}
      <Section className="bg-slate-50 pt-0">
        <Container>
          <div className="bg-brand-dark rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-4 block">System Update v4.2</span>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Introducing Smart Health <br />Trends & Analytics.</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                Now view your health progress through interactive charts. Track parameters like HbA1c, Cholesterol, and BP trends over time to manage your wellness better.
              </p>
              <button className="text-white font-bold border-b border-white/20 pb-1 hover:border-blue-400 transition-all">Explore Analytics Hub</button>
            </div>
            <div className="lg:w-1/3 text-center">
               <div className="inline-block p-8 bg-white/5 border border-white/10 rounded-full animate-bounce">
                  <Activity className="w-16 h-16 text-blue-400" />
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. FINAL CTA HUB */}
      <Section className="bg-[#0f172a] text-white text-center relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container className="relative z-10">
          <h2 className="text-4xl lg:text-8xl font-serif font-bold mb-10 leading-tight">Ready to <span className="text-blue-400 normal">Log In?</span></h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">Join thousands of patients who have switched to a smarter way of managing their healthcare.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/login" className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group">
              Access Dashboard <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <a href="tel:+918588072727" className="px-12 py-6 border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-4 hover:scale-105 active:scale-95">
              <Phone size={24} /> Portal Support
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Patients;
