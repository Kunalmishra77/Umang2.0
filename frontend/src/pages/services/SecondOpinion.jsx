import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, Upload, Video, CheckCircle, ArrowRight, ShieldCheck, 
  Activity, Clock, User, MessageCircle, ChevronDown, Plus 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const features = [
  {
    icon: ShieldCheck,
    title: "Diagnostic Certainty",
    desc: "Confirm your diagnosis with our board of senior consultants to avoid misdiagnosis."
  },
  {
    icon: Activity,
    title: "Treatment Validation",
    desc: "Ensure your prescribed treatment plan is the most effective and least invasive option."
  },
  {
    icon: Clock,
    title: "Rapid Response",
    desc: "Receive a comprehensive medical report within 48 hours of submitting your documents."
  },
  {
    icon: Video,
    title: "Virtual Consultation",
    desc: "Discuss the findings face-to-face with the specialist via a secure video call."
  }
];

const steps = [
  { id: 1, title: "Upload Reports", desc: "Share your medical history and test results securely." },
  { id: 2, title: "Expert Review", desc: "Our multidisciplinary board analyzes your case." },
  { id: 3, title: "Consultation", desc: "Connect with the specialist to discuss the opinion." },
  { id: 4, title: "Final Report", desc: "Receive a detailed roadmap for your treatment." }
];

const SecondOpinion = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Second Opinion | Umang Hospital</title>
        <meta name="description" content="Get expert validation on your medical diagnosis and treatment plan from Umang Hospital's top specialists." />
      </Helmet>

      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[600px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.CONSULTATION} 
            alt="Doctor Consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005580] via-[#005580]/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-blue-200 font-bold uppercase tracking-widest text-xs mb-4">
              <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">Umang Services</span>
              <span className="w-12 h-[1px] bg-blue-200"></span>
              <span>Expert Review</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Certainty in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Every Decision.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-10 border-l-4 border-cyan-400 pl-6">
              When it comes to complex health conditions, a second opinion isn't just an option—it's a vital step towards the right cure.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('request-form').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 rounded-full bg-white text-[#005580] font-bold text-sm hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                Get Second Opinion <ArrowRight className="w-4 h-4" />
              </button>
              <button className="h-14 px-8 rounded-full bg-transparent border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
                <Video className="w-4 h-4" /> Watch How it Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Value Proposition Grid */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-4">Why seek a Second Opinion?</h2>
            <p className="text-gray-500 text-lg">Medical science is complex. Getting confirmation from a top-tier specialist can change your diagnosis, treatment plan, and prognosis.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#005580] flex items-center justify-center mb-6 group-hover:bg-[#005580] group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Process Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-8">Seamless Digital Process</h2>
              <div className="space-y-8 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-100" />

                {steps.map((step) => (
                  <div 
                    key={step.id} 
                    className={`relative flex gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeStep === step.id ? 'bg-blue-50 border border-blue-100' : 'hover:bg-gray-50'}`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 relative z-10 transition-colors ${activeStep === step.id ? 'bg-[#005580] text-white shadow-lg shadow-blue-200' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                      {step.id}
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold mb-1 transition-colors ${activeStep === step.id ? 'text-[#005580]' : 'text-gray-900'}`}>{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-3 transform" />
              <div className="relative bg-white rounded-[3rem] shadow-2xl p-2 border border-gray-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    src={[
                      ASSETS.UPLOAD_REPORT,
                      ASSETS.SURGERY_TEAM,
                      ASSETS.TELEMEDICINE,
                      ASSETS.CONSULTATION
                    ][activeStep - 1]}
                    alt="Process Step" 
                    className="rounded-[2.5rem] w-full h-[500px] object-cover"
                  />
                </AnimatePresence>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-xs uppercase tracking-wider text-gray-500">Step {activeStep}</span>
                  </div>
                  <p className="font-bold text-[#0f172a] text-sm">
                    {[
                      "Secure Document Upload",
                      "Multi-specialty Board Review",
                      "1-on-1 Specialist Video Call",
                      "Comprehensive Care Plan"
                    ][activeStep - 1]}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Request Form Section */}
      <section id="request-form" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-5/12">
              <h2 className="text-4xl font-serif font-bold mb-6">Start Your Review</h2>
              <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                Take the first step towards certainty. Fill out the form, upload your reports, and let our experts guide you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">100% Secure & Confidential</h4>
                    <p className="text-xs text-gray-400">HIPAA Compliant Platform</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">48-Hour Turnaround</h4>
                    <p className="text-xs text-gray-400">Priority Review Process</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12">
              <div className="bg-white text-gray-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                {formStep === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Patient Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                        <input type="text" className="w-full h-12 border-b-2 border-gray-200 focus:border-[#005580] outline-none font-medium bg-transparent" placeholder="Enter patient name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                        <input type="tel" className="w-full h-12 border-b-2 border-gray-200 focus:border-[#005580] outline-none font-medium bg-transparent" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">Current Diagnosis</label>
                      <input type="text" className="w-full h-12 border-b-2 border-gray-200 focus:border-[#005580] outline-none font-medium bg-transparent" placeholder="e.g. Coronary Artery Disease" />
                    </div>
                    <div className="pt-4">
                      <button onClick={() => setFormStep(2)} className="w-full h-14 bg-[#005580] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] transition-all">
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Upload Reports</h3>
                    <p className="text-sm text-gray-500">Please attach relevant medical reports (PDF, JPG, DICOM).</p>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl h-48 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                        <Upload className="w-6 h-6 text-[#005580]" />
                      </div>
                      <p className="font-bold text-gray-700">Click to Upload</p>
                      <p className="text-xs text-gray-400 mt-1">or drag and drop files here</p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button onClick={() => setFormStep(1)} className="flex-1 h-14 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all">
                        Back
                      </button>
                      <button onClick={() => alert('Request Submitted!')} className="flex-[2] h-14 bg-[#005580] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004466] shadow-xl transition-all">
                        Submit Request <CheckCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Specialities Slider (Static for now) */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-serif font-bold text-[#0f172a]">Expertise You Can Trust</h2>
             <Link to="/specialities" className="text-[#005580] font-bold flex items-center gap-2 hover:gap-3 transition-all">View All Specialities <ArrowRight className="w-4 h-4" /></Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             {[
               { name: 'Oncology', img: ASSETS.RADIOLOGY },
               { name: 'Cardiology', img: ASSETS.CARDIAC },
               { name: 'Neurology', img: ASSETS.NEURO },
               { name: 'Orthopedics', img: ASSETS.ORTHO },
               { name: 'Transplants', img: ASSETS.HEART_TRANSPLANT },
               { name: 'Spine Surgery', img: ASSETS.NEURO }
             ].map((spec, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
                   <img src={spec.img} alt={spec.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-1">{spec.name}</h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Get a second opinion from our {spec.name} board.</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SecondOpinion;
