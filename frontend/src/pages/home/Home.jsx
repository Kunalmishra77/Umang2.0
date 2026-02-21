import React from 'react';
import SeoHead from '../../components/common/SeoHead';
import HeroSection from '../../components/home/HeroSection';
import AwardsSection from '../../components/home/AwardsSection';
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
import Accreditations from '../../components/common/Accreditations';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';
import { ASSETS } from '../../utils/imageAssets';
import { ArrowRight, Globe, Users, Shield, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalOutreach = () => (
  <Section className="bg-brand-dark text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-[120px] -mr-48 -mt-48" />
    <Container>
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <SectionHeading 
            eyebrow="Global Presence" 
            title="A Premier Medical <span class='text-primary-400'>Destination.</span>" 
            description="We serve patients from over 30 countries, providing seamless medical journeys with our dedicated international patient desk."
          />
          <div className="grid grid-cols-2 gap-8 mt-10">
            {[
              { icon: Globe, label: "30+ Countries", desc: "Global patient network" },
              { icon: Users, label: "Interpreter Desk", desc: "Multi-language support" },
              { icon: Shield, label: "Visa Support", desc: "Hassle-free documentation" },
              { icon: HeartPulse, label: "Remote Care", desc: "Post-discharge follow-ups" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <item.icon className="text-primary-400 w-8 h-8" />
                <h4 className="font-bold text-lg">{item.label}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <img src={ASSETS.ABOUT_GLOBAL} alt="Global" className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover" />
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
            <p className="text-primary-600 font-black text-4xl mb-1">10k+</p>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">International Patients</p>
          </div>
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
        <Accreditations />
        <AwardsSection />
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
