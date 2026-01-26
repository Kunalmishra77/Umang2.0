import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import SpecialitiesSection from '../components/home/SpecialitiesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PremiumDoctors from '../components/home/PremiumDoctors';
import AppointmentCTA from '../components/home/AppointmentCTA';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Umang Superspeciality Hospital | World-Class Healthcare in Gurugram</title>
        <meta name="description" content="Umang Hospital offers advanced medical care with a patient-centric approach. Book appointments with top doctors in Cardiology, Neurology, and more." />
      </Helmet>

      <main className="overflow-x-hidden">
        <HeroSection />
        <SpecialitiesSection />
        <WhyChooseUs />
        <PremiumDoctors />
        <Testimonials />
        <AppointmentCTA />
      </main>
    </>
  );
}
export default Home;
