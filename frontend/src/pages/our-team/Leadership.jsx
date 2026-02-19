import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Award, Star, Linkedin, Mail, ChevronRight, ShieldCheck, 
  Heart 
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
        <title>Leadership Team | {siteConfig.name}</title>
        <meta name="description" content="Meet the visionary leaders and department heads who drive clinical excellence at Umang Hospital." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.ABOUT_BANNER} 
            alt="Leadership Team" 
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
            <h1 className="text-white mb-6 leading-tight">Driving the <span className="text-primary-400 italic">Future of Healthcare.</span></h1>
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
                <p className="text-sm font-bold italic leading-relaxed">"Healthcare is a sacred covenant between the healer and the healed."</p>
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
                <Card className="h-full !p-0 overflow-hidden border-none shadow-soft group-hover:shadow-premium transition-all duration-500">
                  <div className="h-72 overflow-hidden relative">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                      <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-all">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-all">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <div className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mb-2 font-mono">{doc.dept}</div>
                    <h3 className="text-lg font-bold text-brand-dark mb-4">{doc.name}</h3>
                    <Link to={`/doctor/${doc.id}`} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2 hover:text-primary-600 transition-colors">
                      View Profile <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Board Values */}
      <Section>
        <Container>
           <div className="grid lg:grid-cols-3 gap-8">
              {[
                { title: "Patient Safety", desc: "Zero-compromise approach to surgical and clinical protocols.", icon: ShieldCheck },
                { title: "Academic Rigour", desc: "Continuous medical education and evidence-based practice.", icon: Award },
                { title: "Ethical Care", desc: "Transparent communication and value-based healthcare delivery.", icon: Heart }
              ].map((val, idx) => (
                <Card key={idx} className="!p-10 flex flex-col items-center text-center group bg-white hover:bg-slate-50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <val.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{val.desc}</p>
                </Card>
              ))}
           </div>
        </Container>
      </Section>
    </div>
  );
};

export default Leadership;
