import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <div className="pt-16 pb-16 min-h-screen bg-gray-50">
      <Helmet>
        <title>Terms and Conditions | Umang Hospital</title>
      </Helmet>
      <div className="container-custom mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#0f172a]">Terms and Conditions</h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-gray-600">
          <p>Last updated: January 27, 2026</p>
          
          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Introduction</h2>
            <p>Welcome to Umang Hospital. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. Medical Advice Disclaimer</h2>
            <p>The content on this website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Appointment Booking</h2>
            <p>Appointments booked through our website are subject to doctor availability. We reserve the right to reschedule or cancel appointments in case of emergencies or unforeseen circumstances.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Privacy</h2>
            <p>Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at Umanghospitalgurugram@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
