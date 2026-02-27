import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Award, Star, Linkedin, Mail, ChevronRight, ShieldCheck, 
  Heart, Users, Activity, User, Quote, CheckCircle2, 
  ArrowRight, Phone, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../../utils/doctorsData';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';
import { siteConfig } from '../../config/siteConfig';

const heads = doctors.filter(d => d.role.includes('Head') || d.role.includes('Director'));

const Leadership = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Clinical Leadership | {siteConfig.name}</title>
        <meta name="description" content="Meet the visionary leaders and department heads who drive clinical excellence at Umang Hospital." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.ABOUT_BANNER} 
            alt="Clinical Leadership" 
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
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
              Visionary Leadership
            </span>
            <h1 className="text-white mb-6 leading-tight">Driving the <span className="text-primary-400 normal">Future of Healthcare.</span></h1>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              Our leadership team brings together decades of clinical expertise and strategic vision to redefine medical excellence in Gurugram.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Founder Profile */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-premium border-8 border-white relative z-10">
                <img 
                  src={ASSETS.ABOUT_DIRECTOR} 
                  alt="Medical Director" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-dark text-white p-8 rounded-3xl shadow-2xl z-20 max-w-[240px] border border-white/10 hidden md:block">
                <Star className="w-8 h-8 text-yellow-400 fill-current mb-4 animate-pulse" />
                <p className="text-sm font-bold normal leading-relaxed">"Healthcare is a sacred covenant between the healer and the healed."</p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-primary-600" />
                <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Medical Director & Founder</span>
              </div>
              <h2 className="text-brand-dark mb-4 text-4xl lg:text-5xl font-bold">Dr. Rakesh Gupta</h2>
              <p className="text-primary-600 font-bold text-xl mb-8">MBBS, MS (General Surgery)</p>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-12 font-medium">
                <p>
                  With over 35 years of clinical experience, Dr. Rakesh Gupta is the founding visionary of Umang Superspeciality Hospital. His commitment to bringing high-end surgical precision to Gurugram has transformed the local healthcare landscape.
                </p>
                <p>
                  He specializes in complex laparoscopic procedures and oversees the clinical governance of the hospital, ensuring every patient receives treatment aligned with global safety protocols.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-brand-dark">35+</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Exp.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-dark">15k+</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Surgeries</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-dark">20+</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Department Heads Grid */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeading 
            eyebrow="Clinical Pillars" 
            title="Heads of Department" 
            description="Our HODs are senior specialists who lead their respective clinical domains with academic rigour and compassionate care."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heads.slice(0, 4).map((doc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <Link to={`/doctor/${doc.id}`} className="block h-full">
                  <Card className="h-full !p-0 overflow-hidden border-none shadow-soft group-hover:shadow-premium transition-all duration-500">
                    <div className="h-72 overflow-hidden relative">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-all">
                          <Linkedin className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-all">
                          <Mail className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 text-center">
                      <div className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mb-2 font-mono">{doc.dept}</div>
                      <h3 className="text-lg font-bold text-brand-dark mb-4 group-hover:text-primary-600 transition-colors">{doc.name}</h3>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2 group-hover:text-primary-600 transition-colors">
                        View Career Profile <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. STRATEGIC PILLARS (Vision & Mission) */}
      <Section className="bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Strategic Roadmap</span>
              <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-10 leading-tight">Vision for <br /><span className="normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Better Healing.</span></h2>
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">To be the most trusted healthcare destination in Northern India, known for clinical precision and human compassion.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">Delivering ethical, evidence-based medical care through advanced technology and a patient-first approach.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all">
                  <h4 className="text-2xl font-bold text-primary-400 mb-2">100%</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Ethics Rate</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all">
                  <h4 className="text-2xl font-bold text-primary-400 mb-2">Zero</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Compromise</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all">
                  <h4 className="text-2xl font-bold text-primary-400 mb-2">24/7</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Leadership</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all">
                  <h4 className="text-2xl font-bold text-primary-400 mb-2">Global</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Standards</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. QUALITY HUB & GOVERNANCE */}
      <Section className="bg-white">
        <Container>
          <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group border border-slate-100">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[100px] opacity-30 -mr-48 -mt-48" />
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-4 block">Clinical Governance</span>
                <h2 className="text-4xl font-serif font-bold text-brand-dark leading-tight">The Umang Quality <br /><span className="text-primary-600 normal">Benchmarks.</span></h2>
              </div>
              <Link to="/patient-experience" className="px-8 py-4 bg-brand-dark text-white rounded-2xl font-bold hover:bg-primary-600 transition-all shadow-xl active:scale-95">
                View Quality Reports
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Clinical Audit', desc: 'Monthly review of surgical outcomes.', icon: ShieldCheck },
                { label: 'Patient Safety', desc: 'Strict adherence to JCI safety goals.', icon: Heart },
                { label: 'Nursing Audit', desc: 'Quality control for bedside care.', icon: Users },
                { label: 'Infection Control', desc: 'Class 100 sterile environments.', icon: Activity }
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

      {/* 6. ADVISORY BOARD */}
      <Section className="bg-white pt-0">
        <Container>
          <SectionHeading eyebrow="Expert Guidance" title="Medical Advisory Board" description="A distinguished panel of independent medical experts who guide our clinical innovation and ethical practices." centered />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. S.P. Vats', role: 'Chief Advisor - Oncology', desc: 'Ex-Director of National Cancer Institute with 40+ years experience.' },
              { name: 'Prof. Anil Kumar', role: 'Board Member - Ethics', desc: 'Renowned clinical ethicist and advisor to national medical councils.' },
              { name: 'Dr. Kavita Singh', role: 'Quality Advisor', desc: 'Expert in hospital accreditation and patient safety standards.' }
            ].map((adv, idx) => (
              <Card key={idx} className="!p-10 bg-slate-50 border-none group hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary-600 mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <User size={24} />
                </div>
                <h4 className="text-xl font-bold mb-1">{adv.name}</h4>
                <p className="text-primary-600 text-xs font-bold uppercase tracking-widest mb-4">{adv.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{adv.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. LEADERSHIP QUOTE (Full Width) */}
      <section className="py-24 bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container className="relative z-10 text-center max-w-4xl">
          <Quote className="w-16 h-16 text-primary-500/20 mx-auto mb-10 fill-current" />
          <h3 className="text-2xl md:text-4xl font-serif normal font-bold text-white mb-10 leading-relaxed">
            "Leadership at Umang is not about authority; it is about serving the front-line caregivers so they can focus on what matters most—saving lives."
          </h3>
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-primary-500 rounded-full mb-6" />
            <p className="text-white font-bold text-lg uppercase tracking-widest">The Executive Board</p>
            <p className="text-primary-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Umang Superspeciality Hospital</p>
          </div>
        </Container>
      </section>

      {/* SECTION: ADVISORY COUNCIL (NEW) */}
      <Section className="bg-white">
        <Container>
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-[45%]">
                 <img src={ASSETS.ABOUT_GLOBAL} alt="Advisory Council" className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover" />
              </div>
              <div className="lg:w-[55%]">
                 <SectionHeading 
                   eyebrow="Expert Oversight" 
                   title="Institutional Ethics <span class='text-primary-600'>Committee.</span>" 
                   description="Our leadership is accountable to an independent ethics committee that ensures every clinical trial and research project meets global human safety standards."
                 />
                 <div className="grid grid-cols-2 gap-6">
                    {["Patient Privacy", "Informed Consent", "Data Integrity", "Safety First"].map((tag, idx) => (
                       <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="text-primary-600 w-5 h-5" />
                          <span className="font-bold text-xs text-slate-700 uppercase tracking-widest">{tag}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </Container>
      </Section>

      {/* 8. MILESTONES TIMELINE */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Our Journey" title="Leadership Milestones" centered />
          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              { year: '2010', title: 'The Foundation', desc: 'Inaugurated the initial facility with a vision for specialized cardiac care.' },
              { year: '2018', title: 'Superspeciality Expansion', desc: 'Transformed into a 150-bed multi-specialty hub with region-first tech.' },
              { year: '2024', title: 'Digital Transformation', desc: 'Launched AI-driven ICUs and paperless medical governance systems.' }
            ].map((m, i) => (
              <div key={i} className="flex gap-10 group items-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl lg:text-5xl font-serif font-bold text-primary-600 opacity-20 group-hover:opacity-100 transition-opacity shrink-0">{m.year}</span>
                </div>
                <div className="pb-0">
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{m.title}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-light">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION: ACADEMIC LEADERSHIP (NEW) */}
      <Section className="bg-slate-50">
        <Container>
           <div className="bg-primary-600 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-serif font-bold mb-6 text-white">Academic <br />Leadership.</h2>
                 <p className="text-primary-100 text-lg leading-relaxed mb-10">We foster a culture of research and learning. Our senior faculty members are regular contributors to global medical journals and speakers at international conferences.</p>
                 <div className="flex gap-8">
                    <div>
                       <h4 className="text-4xl font-bold mb-1">500+</h4>
                       <p className="text-primary-200 text-xs font-bold uppercase tracking-widest">Research Papers</p>
                    </div>
                    <div>
                       <h4 className="text-4xl font-bold mb-1">100+</h4>
                       <p className="text-primary-200 text-xs font-bold uppercase tracking-widest">Awards Won</p>
                    </div>
                 </div>
              </div>
              <div className="text-center lg:text-right">
                 <Link to="/health-library/knowledge-center" className="h-16 px-10 rounded-2xl bg-white text-primary-600 font-bold text-lg hover:bg-primary-50 transition-all inline-flex items-center gap-3 shadow-2xl">
                    Knowledge Hub <ArrowRight size={20} />
                 </Link>
              </div>
           </div>
        </Container>
      </Section>

      {/* 9. GLOBAL COLLABORATIONS */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <SectionHeading 
                eyebrow="Global Network" 
                title="International <span class='text-primary-600'>Exchange.</span>" 
                description="Our leadership maintains active knowledge partnerships with international health organizations to ensure our protocols are world-class."
              />
              <div className="grid grid-cols-2 gap-6">
                {['Knowledge Exchange', 'Surgical Workshops', 'Research Sync', 'Tele-Consultation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="font-bold text-sm text-slate-700 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-[45%] relative">
              <img src={ASSETS.ABOUT_GLOBAL} alt="Global Partners" className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover transition-all duration-700" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. FINAL CONTACT HUB */}
      <Section className="bg-brand-dark text-white relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Container className="text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-10 leading-tight">Connect with <span className="text-primary-400 normal">Board.</span></h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">For institutional inquiries, corporate partnerships, or strategic feedback.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="tel:+918588072727" className="px-12 py-6 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group">
              <Phone size={24} className="group-hover:rotate-12 transition-transform" /> Contact Desk
            </a>
            <Link to="/contact" className="px-12 py-6 border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-4 hover:scale-105 active:scale-95">
              <Calendar size={24} /> Get Assistance
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Leadership;
