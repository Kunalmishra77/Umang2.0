import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, Activity, Home, Pill, Video, Phone, 
  Shield, Heart, ArrowRight, Clock, 
  Users, Award, HelpCircle, CheckCircle2 
} from 'lucide-react';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section, SectionHeading, Card } from '../../components/ui/Layout';
import SeoHead from '../../components/common/SeoHead';
import { siteConfig } from '../../config/siteConfig';

const services = [
  {
    icon: Stethoscope,
    title: "Second Opinion",
    slug: "second-opinion",
    desc: "Get expert validation on your diagnosis and treatment plan from our top specialists.",
    color: "bg-blue-50 text-blue-600",
    img: ASSETS.CONSULTATION
  },
  {
    icon: Activity,
    title: "Lab Test & Diagnostic",
    slug: "lab-test-diagnostic",
    desc: "State-of-the-art diagnostic services with accurate and timely reporting.",
    color: "bg-green-50 text-green-600",
    img: ASSETS.LAB
  },
  {
    icon: Home,
    title: "Home Care",
    slug: "home-care",
    desc: "Professional healthcare services delivered in the comfort of your home.",
    color: "bg-purple-50 text-purple-600",
    img: ASSETS.NURSE_CARE
  },
  {
    icon: Pill,
    title: "Buy Medicines",
    slug: "buy-medicines",
    desc: "24/7 Pharmacy with home delivery options for your convenience.",
    color: "bg-orange-50 text-orange-600",
    img: ASSETS.PHARMACY
  },
  {
    icon: Video,
    title: "Telemedicine",
    slug: "telemedicine",
    desc: "Virtual consultations with our specialists from anywhere in the world.",
    color: "bg-indigo-50 text-indigo-600",
    img: ASSETS.TELEMEDICINE
  },
  {
    icon: Phone,
    title: "Emergency",
    slug: "emergency",
    desc: "24/7 Emergency and Trauma care with advanced life support systems.",
    color: "bg-red-50 text-red-600",
    img: ASSETS.AMBULANCE
  },
  {
    icon: Shield,
    title: "Health Checkup",
    slug: "health-checkup",
    desc: "Comprehensive preventive health checkup packages for all age groups.",
    color: "bg-teal-50 text-teal-600",
    img: ASSETS.HEALTH_CHECKUP
  },
  {
    icon: Heart,
    title: "Elder Care",
    slug: "elder-care",
    desc: "Specialized geriatric care focusing on the unique needs of senior citizens.",
    color: "bg-rose-50 text-rose-600",
    img: ASSETS.GERIATRICS
  }
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      <SeoHead 
        title="Our Services" 
        description="Comprehensive healthcare solutions from 24/7 emergency to home care and advanced diagnostics at Umang Hospital."
        canonical="/services"
      />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden text-center lg:text-left">
        <div className="absolute inset-0 z-0">
           <img 
             src={ASSETS.HOSPITAL_EXTERIOR} 
             alt="Services Hero" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="hero-overlay-radial" />
        </div>
        
        <Container className="relative z-10 pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Support Services</span>
            <h1 className="text-white mb-6">Clinical <span className="text-primary-400 italic">Excellence.</span></h1>
            <p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              Comprehensive healthcare solutions designed around your needs, from preventive care to 24/7 emergency support and home care.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. Service Statistics Row */}
      <div className="bg-primary-600 py-8 lg:py-10 relative overflow-hidden border-y border-white/5">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { label: "Annual Patients", value: "50,000+" },
              { label: "Home Visits", value: "5,000+" },
              { label: "Lab Tests", value: "100,000+" },
              { label: "Service Rating", value: "4.9/5" }
            ].map((stat, i) => (
              <div key={i} className="space-y-0.5">
                <p className="text-xl lg:text-3xl font-serif font-bold tracking-tight">{stat.value}</p>
                <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-primary-100/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. Main Service Grid */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeading 
            eyebrow="Specialized Care" 
            title="Our Core Offerings" 
            description="Explore our wide range of medical and support services tailored for your well-being."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={service.slug === 'lab-test-diagnostic' ? '/services/lab-test-diagnostic' : `/services/${service.slug}`}
                  className="block h-full bg-white rounded-[2.5rem] shadow-soft hover:shadow-premium border border-slate-100 group overflow-hidden transition-all duration-500"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 left-6">
                       <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm`}>
                         <service.icon size={20} />
                       </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm lg:text-base mb-8 font-medium line-clamp-2">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-primary-600 font-bold text-[10px] uppercase tracking-widest gap-2 group-hover:gap-3 transition-all">
                       Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Why Choose Our Services */}
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <SectionHeading 
                eyebrow="The Umang Advantage" 
                title="Service Integrity & Quality" 
                description="We don't just provide services; we provide peace of mind. Every service is governed by strict clinical and administrative protocols."
              />
              <div className="grid gap-8">
                {[
                  { title: "24/7 Availability", desc: "Critical services like Pharmacy and Emergency are operational round-the-clock.", icon: Clock },
                  { title: "Home Care Support", desc: "Expert medical care delivered at your doorstep with hospital-grade precision.", icon: Home },
                  { title: "Certified Staff", desc: "All our technicians and paramedics are certified and undergo regular training.", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary-50 rounded-[4rem] -rotate-3 -z-10" />
              <img src={ASSETS.NURSE_CARE} alt="Quality Care" className="rounded-[4rem] shadow-2xl w-full h-[550px] object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Our Process Section */}
      <Section className="bg-brand-dark text-white overflow-hidden">
        <Container>
          <SectionHeading 
            eyebrow="Workflow" 
            title="How Our Services Work" 
            centered 
            dark
          />
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-0" />
            {[
              { title: "Inquiry", desc: "Contact us via website or phone." },
              { title: "Validation", desc: "Expert review of your requirement." },
              { title: "Execution", desc: "Prompt service delivery." },
              { title: "Feedback", desc: "Continuous care follow-up." }
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10">
                <div className="w-24 h-24 bg-brand-dark rounded-full border-4 border-primary-500 flex items-center justify-center text-2xl font-black text-white mx-auto mb-8 shadow-[0_0_30px_rgba(14,165,233,0.3)] group-hover:bg-primary-600 transition-all">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Service FAQ */}
      <Section className="bg-slate-50">
        <Container className="max-w-4xl">
          <SectionHeading 
            eyebrow="Help Desk" 
            title="Service Related FAQs" 
            centered
          />
          <div className="space-y-4">
            {[
              { q: "Are home care services covered by insurance?", a: "Most home care services are out-of-pocket, but post-surgical home recovery may be covered depending on your specific policy." },
              { q: "How long does it take to get lab results?", a: "Routine tests are delivered within 4-6 hours. Specialized molecular tests may take 24-48 hours." },
              { q: "Do you provide medicines for home delivery?", a: "Yes, our pharmacy provides 24/7 delivery within a 5km radius of the hospital." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 text-left">
                <h4 className="font-bold text-brand-dark flex items-center gap-4 mb-4 text-lg">
                  <HelpCircle size={20} className="text-primary-600 shrink-0" /> {faq.q}
                </h4>
                <p className="text-slate-600 pl-9 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Quality Standards */}
      <Section>
        <Container>
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="lg:w-2/3">
                <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">NABH Aligned Care Protocols</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                  Every service at Umang is delivered following the highest national accreditation standards. We ensure patient safety, data privacy, and ethical clinical practices across all service verticals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"><CheckCircle2 size={14} className="text-green-400" /> Clinical Audit</span>
                  <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"><CheckCircle2 size={14} className="text-green-400" /> Patient Feedback</span>
                  <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"><CheckCircle2 size={14} className="text-green-400" /> Expert Review</span>
                </div>
              </div>
              <div className="lg:w-1/3 text-center">
                <Award size={80} className="text-primary-400 mx-auto mb-6 opacity-50" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-200">ISO 9001:2015 Certified</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Final CTA */}
      <section className="section-padding bg-brand-dark text-white relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Need specialized <br /><span className="text-primary-400">assistance?</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Our care coordinators are available 24/7 to help you choose the right service for your needs.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-base shadow-xl hover:bg-primary-500 transition-all flex items-center justify-center gap-3">
              Talk to Care Desk <ArrowRight size={20} />
            </Link>
            <a href={`tel:${siteConfig.contacts.main}`} className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              {siteConfig.contacts.main}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services;
