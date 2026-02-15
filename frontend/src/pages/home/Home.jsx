import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/home/HeroSection';
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
      <Helmet>
        <title>Umang Superspeciality Hospital | World-Class Healthcare in Gurugram</title>
        <meta name="description" content="Umang Hospital offers advanced medical care with a patient-centric approach. Book appointments with top doctors in Cardiology, Neurology, and more." />
      </Helmet>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[200]"
        style={{ scaleX }}
      />

      <main className="overflow-x-hidden relative">
        <HeroSection />
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
