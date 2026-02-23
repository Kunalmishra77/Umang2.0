import React from 'react';
import SeoHead from '../../components/common/SeoHead';
import HeroSection from '../../components/home/HeroSection';
import TrustSection from '../../components/home/TrustSection';
import HospitalVideoSection from '../../components/home/HospitalVideoSection';
import SpecialitiesSection from '../../components/home/SpecialitiesSection';
import ServicesSection from '../../components/home/ServicesSection';
import HealthPackagesPreview from '../../components/home/HealthPackagesPreview';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import PremiumDoctors from '../../components/home/PremiumDoctors';
import MedicalUpgrades from '../../components/home/MedicalUpgrades';
import Testimonials from '../../components/home/Testimonials';
import HomeFaq from '../../components/home/HomeFaq';
import AppointmentCTA from '../../components/home/AppointmentCTA';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';
import { ASSETS } from '../../utils/imageAssets';
import { ArrowRight, Globe, Users, Shield, HeartPulse, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalOutreach = () => (
  <Section className="bg-brand-dark text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
    <Container>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="lg:w-[55%]">
          <SectionHeading 
            eyebrow="Global Presence" 
            title="A Premier Medical <span class='text-primary-400'>Destination.</span>" 
            description="Umang Hospital is a preferred healthcare destination for patients worldwide. We offer personalized medical care, dedicated concierge services, and post-discharge follow-ups globally."
            dark
            descriptionMaxWidth="max-w-xl"
            className="mb-12"
          />
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 mt-10">
            {[
              { icon: Globe, label: "30+ Countries", desc: "Serving a diverse global patient network with specialized care." },
              { icon: Users, label: "Interpreter Desk", desc: "Multi-language support for seamless communication during your stay." },
              { icon: Shield, label: "Visa Support", desc: "Complete assistance with medical visa documentation and extensions." },
              { icon: HeartPulse, label: "Remote Care", desc: "Continuing your healing journey with digital follow-ups post-discharge." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap gap-6">
            <Link to="/contact/inquiry-hub" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary-600/20">
              International Desk <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/patient-experience" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-all border border-white/10">
              Patient Guide <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="lg:w-[45%] relative">
          <div className="relative z-10">
            <img src={ASSETS.ABOUT_GLOBAL} alt="Global" className="rounded-[3rem] shadow-2xl w-full h-[600px] object-cover border-4 border-white/5" />
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl hidden xl:block">
              <div className="flex flex-col items-center">
                <p className="text-primary-600 font-black text-5xl mb-1 tracking-tighter">10k+</p>
                <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[12px] whitespace-nowrap">International Patients</p>
                <div className="w-12 h-1 bg-gray-100 mt-4 rounded-full" />
              </div>
            </div>
            
            <div className="absolute top-10 -right-6 bg-primary-600 text-white px-6 py-4 rounded-2xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                <span className="font-bold text-sm tracking-wide">24/7 International Help</span>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full scale-110" />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full scale-125 opacity-30" />
        </div>
      </div>
    </Container>
  </Section>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <SeoHead 
        title="Umang Superspeciality Hospital" 
        description="World-class healthcare in Gurugram. 150-bedded facility with advanced Cardiology, Neurology, Orthopaedics, and 24/7 Emergency care."
        canonical="/"
      />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[200]"
        style={{ scaleX }}
      />

      <main className="overflow-x-hidden relative">
        <HeroSection />
        <TrustSection />
        <HospitalVideoSection />
        <SpecialitiesSection />
        <ServicesSection />
        <HealthPackagesPreview />
        <WhyChooseUs />
        <PremiumDoctors />
        <MedicalUpgrades />
        <GlobalOutreach />
        <Testimonials />
        <HomeFaq />
        <AppointmentCTA />
      </main>
    </>
  );
}
export default Home;
