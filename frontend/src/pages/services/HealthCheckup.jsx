import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, Heart, Shield, Clock, User, CheckCircle, 
  ArrowRight, FileText, Smartphone, Calendar, HelpCircle, Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';
import SeoHead from '../../components/common/SeoHead';
import { siteConfig } from '../../config/siteConfig';

const packages = [
  {
    id: 1,
    title: "Basic Health Check",
    subtitle: "Essential screening for young adults",
    tests: "40+ Parameters",
    color: "bg-blue-50 border-blue-100",
    icon: Activity,
    features: ["Complete Blood Count (CBC)", "Blood Sugar (Fasting)", "Lipid Profile (Cholesterol)", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Urine Routine"]
  },
  {
    id: 2,
    title: "Executive Full Body",
    subtitle: "Comprehensive analysis for 30+",
    tests: "75+ Parameters",
    color: "bg-green-50 border-green-100",
    icon: Shield,
    popular: true,
    features: ["All Basic Tests", "Thyroid Profile (T3, T4, TSH)", "Vitamin D & B12", "HbA1c (3 Month Sugar)", "ECG & Chest X-Ray", "Doctor Consultation"]
  },
  {
    id: 3,
    title: "Premium Heart Check",
    subtitle: "Dedicated cardiac assessment",
    tests: "60+ Parameters",
    color: "bg-red-50 border-red-100",
    icon: Heart,
    features: ["All Executive Tests", "2D Echo / TMT", "Cardiac Risk Markers", "Homocysteine", "Pulmonary Function Test", "Cardiologist Consult"]
  },
  {
    id: 4,
    title: "Senior Citizen Care",
    subtitle: "Specialized geriatric screening",
    tests: "85+ Parameters",
    color: "bg-orange-50 border-orange-100",
    icon: User,
    features: ["All Executive Tests", "Bone Health Profile", "Prostate / Pap Smear", "Eye & Dental Checkup", "Audiometry", "Geriatric Consult"]
  }
];

const HealthCheckup = () => {
  return (
    <div className="bg-white min-h-screen">
      <SeoHead 
        title="Preventive Health Checkups" 
        description="Book comprehensive full body checkups at Umang Hospital. Includes blood tests, cardiac screening, and expert doctor consultation."
        canonical="/services/health-checkup"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[600px] flex items-center bg-[#005580] overflow-hidden py-12 lg:py-8">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.SVC_INVEST_HEALTH} 
            alt="Health Checkup" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005580] via-[#005580]/90 to-transparent" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-cyan-300 font-bold uppercase tracking-widest text-xs mb-8">
              <Activity className="w-4 h-4" /> Preventive Care
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Invest in your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Future Self.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-12 max-w-xl">
              Lifestyle diseases are silent. Early detection is your best defense. Our comprehensive health packages are designed to give you a complete picture of your well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })} className="h-16 px-10 rounded-full bg-white text-[#005580] font-bold text-lg hover-lift hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl">
                View Packages <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-blue-200">Book via Call</p>
                  <p className="font-bold text-lg">{siteConfig.contacts.emergency}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[80px]" />
             <img 
               src={ASSETS.HEALTH_CHECKUP} 
               alt="Doctor Reviewing Reports" 
               className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white/5 rotate-2 hover:rotate-0 transition-transform duration-700" 
             />
          </motion.div>
        </div>
      </section>

      {/* SECTION: SCREENING IMPACT STATS */}
      <div className="bg-[#030712] py-10 md:py-12 text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
            {[
              { label: "Annual Screenings", value: "25,000+" },
              { label: "Early Detections", value: "1,200+" },
              { label: "Satisfaction", value: "98.5%" },
              { label: "Report Time", value: "24 Hrs" }
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

      {/* 2. Packages Section */}
      <section id="packages" className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">Curated Health Packages</h2>
               <p className="text-gray-500 text-xl leading-relaxed">
                  Tailored screening plans for every age, gender, and lifestyle. Choose the one that fits you best.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
               {packages.map((pkg) => (
                  <motion.div 
                     key={pkg.id}
                     whileHover={{ y: -8 }}
                     className={`bg-white rounded-[2.5rem] overflow-hidden border ${pkg.color} shadow-sm hover:shadow-xl transition-all relative flex flex-col group`}
                  >
                     {pkg.popular && (
                        <div className="absolute top-6 right-6 bg-[#005580] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg z-10">
                           Most Popular
                        </div>
                     )}
                     
                     <div className="p-10 flex-1">
                        <div className="flex items-start gap-6 mb-8">
                           <div className={`w-16 h-16 rounded-2xl ${pkg.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                              <pkg.icon className="w-8 h-8 text-[#0f172a]" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-bold text-[#0f172a] mb-1 group-hover:text-primary-600 transition-colors">{pkg.title}</h3>
                              <p className="text-gray-500">{pkg.subtitle}</p>
                           </div>
                        </div>

                        <div className="mb-8">
                           <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Package Includes</span>
                           <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                              {pkg.features.map((feat, idx) => (
                                 <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> {feat}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <div className="bg-gray-50 p-8 border-t border-gray-100 flex items-center justify-between">
                        <div>
                           <p className="text-green-600 text-lg font-bold">{pkg.tests}</p>
                           <p className="text-gray-400 text-xs uppercase tracking-widest font-black">Comprehensive screening</p>
                        </div>
                        <Link to="/services/booking/health-checkup" className="h-14 px-8 rounded-xl bg-[#0f172a] text-white font-bold hover:bg-[#005580] transition-all shadow-lg flex items-center justify-center gap-2">
                           Book Package
                        </Link>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: SCREENING TECHNOLOGY (NEW SECTION 11) */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">High-End Screening Tech</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "AI-ECG Analysis", desc: "Detection of arrhythmia with 99% accuracy.", icon: Activity, path: "/specialities/cardiology" },
              { title: "Digital Radiography", desc: "Ultra-low dose X-rays for internal imaging.", icon: Shield, path: "/infrastructure/radiology" },
              { title: "Automated Path-Lab", desc: "Robotic sample processing for zero human error.", icon: Microscope, path: "/services/lab-test-diagnostic" }
            ].map((tech, i) => (
              <Link to={tech.path} key={i} className="text-center group block">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                  <tech.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-primary-600 transition-colors">{tech.title}</h4>
                <p className="text-gray-500 text-sm px-6">{tech.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Process Section */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-blue-50 rounded-[3rem] -rotate-3" />
                  <img 
                     src={ASSETS.SVC_LAB_PROCESS} 
                     alt="Lab Process" 
                     className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                  />
               </div>
               
               <div>
                  <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-12">Seamless Experience</h2>
                  <div className="space-y-12">
                     {[
                        { title: "Book Appointment", desc: "Select a package and choose a convenient time slot for home collection or hospital visit.", path: "/services/health-checkup/book" },
                        { title: "Sample Collection", desc: "Our trained phlebotomists collect samples following strict hygiene and safety protocols.", path: "/services/lab-test-diagnostic" },
                        { title: "Smart Reporting", desc: "Detailed digital reports are shared via email and WhatsApp within 12-24 hours.", path: "/patient-corner/patient-information-literature" },
                        { title: "Doctor Review", desc: "Get a free tele-consultation with our experts to understand your report findings.", path: "/services/telemedicine" }
                     ].map((step, i) => (
                        <Link to={step.path} key={i} className="flex gap-6 group block">
                           <div className="w-12 h-12 rounded-full border-2 border-[#005580] flex items-center justify-center text-[#005580] font-bold text-xl shrink-0 group-hover:bg-[#005580] group-hover:text-white transition-all shadow-sm">
                              {i + 1}
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-primary-600 transition-colors">{step.title}</h4>
                              <p className="text-gray-500 leading-relaxed text-lg">{step.desc}</p>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Why Prevention Matters */}
      <section className="py-32 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Why wait for symptoms?</h2>
            <p className="text-2xl text-gray-300 font-light mb-12 leading-relaxed">
               70% of lifestyle diseases are preventable if detected early. Regular health checkups are the most effective way to monitor your vital parameters and stay ahead of chronic conditions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
               {[
                 { title: "Early Detection", desc: "Identify risk factors before they become complications.", icon: FileText, path: "/patient-experience" },
                 { title: "Long-term Wellness", desc: "Preventive care ensures sustained health and vitality.", icon: Shield, path: "/patient-experience" },
                 { title: "Better Quality of Life", desc: "Active monitoring leads to healthier lifestyle choices.", icon: Heart, path: "/patient-experience" }
               ].map((item, i) => (
                 <Link to={item.path} key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 group block hover:bg-white/20 transition-all">
                    <item.icon className="w-10 h-10 text-cyan-300 mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: SCREENING SPECIALISTS (NEW SECTION 12) */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img src={ASSETS.ABOUT_DIRECTOR} alt="Specialists" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 h-[500px] object-cover object-top" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Medical Board</span>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6">Expert Review by <br /><span className="text-primary-600 normal">Senior Consultants.</span></h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Health checkups at Umang are not just about reports. Every package includes a mandatory review by our senior consultants to guide you on the right path to wellness.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-brand-dark">50+</h4>
                  <p className="text-xs text-gray-400 uppercase font-black tracking-widest mt-1">Specialists</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-dark">100%</h4>
                  <p className="text-xs text-gray-400 uppercase font-black tracking-widest mt-1">Review Rate</p>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/doctors" className="btn-primary">View Specialists</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION: SCREENING FAQ */}
      <Section className="bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30 -mr-48 -mt-48" />
        <Container>
          <div className="text-center mb-20 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 mb-4 block">Help Center</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark">Screening <span className="text-primary-600 normal">FAQ.</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
            {[
              { q: "Is home collection available for all packages?", a: "Yes, all our primary health checkup packages include the option for home sample collection by certified phlebotomists across Gurugram." },
              { q: "How long should I fast before the tests?", a: "A minimum of 10-12 hours of overnight fasting is required for accurate blood sugar and lipid profile results. You can drink water during this period." },
              { q: "Can I customize a health package?", a: "Absolutely. You can add specific tests to any existing package based on your doctor's advice or personal health concerns. Our desk can guide you on combinations." },
              { q: "How soon will I receive my reports?", a: "Digital reports are typically shared via Email and WhatsApp within 12-24 hours. Physical copies can be collected from the dispatch counter." },
              { q: "Is doctor consultation included in all?", a: "Yes, all our executive and premium packages include a mandatory review and consultation with a senior physician to discuss findings." },
              { q: "Do you accept insurance for checkups?", a: "Many corporate insurance plans cover preventive health checkups. Please check with our TPA desk for your specific plan eligibility." }
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
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Take charge of <br /><span className="text-primary-400 normal">your health today.</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Early screening is the first step towards a longer, healthier life. Book your package now and get a expert review.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/services/booking/health-checkup" className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-base shadow-xl hover:bg-primary-500 transition-all flex items-center justify-center gap-3 shadow-primary-900/20">
              Book Your Package <ArrowRight size={20} />
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

export default HealthCheckup;
