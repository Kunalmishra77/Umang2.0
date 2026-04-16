import React from 'react';
import SeoHead from '../../components/common/SeoHead';
import HeroSection from '../../components/home/HeroSection';
import EventHighlights from '../../components/home/EventHighlights';

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
        <EventHighlights />
        <HospitalVideoSection />
        <SpecialitiesSection />
        <ServicesSection />
        <HealthPackagesPreview />
        <WhyChooseUs />
        <PremiumDoctors />
        <MedicalUpgrades />
        <Testimonials />
        <HomeFaq />
        <AppointmentCTA />
      </main>
    </>
  );
}
export default Home;
