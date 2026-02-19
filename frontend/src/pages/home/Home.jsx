import React from 'react';
import SeoHead from '../../components/common/SeoHead';
import HeroSection from '../../components/home/HeroSection';
import HospitalVideoSection from '../../components/home/HospitalVideoSection';
import SpecialitiesSection from '../../components/home/SpecialitiesSection';
import ServicesSection from '../../components/home/ServicesSection';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import PremiumDoctors from '../../components/home/PremiumDoctors';
import MedicalUpgrades from '../../components/home/MedicalUpgrades';
import AppointmentCTA from '../../components/home/AppointmentCTA';
import Testimonials from '../../components/home/Testimonials';
import { motion, useScroll, useSpring } from 'framer-motion';

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
        <HospitalVideoSection />
        <SpecialitiesSection />
        <ServicesSection />
        <WhyChooseUs />
        <PremiumDoctors />
        <MedicalUpgrades />
        <Testimonials />
        <AppointmentCTA />
      </main>
    </>
  );
}
export default Home;
