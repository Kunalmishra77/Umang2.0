import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div className="pt-16 pb-16 min-h-screen bg-gray-50">
      <Helmet>
        <title>Privacy Policy | Umang Hospital</title>
      </Helmet>
      <div className="container-custom mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#0f172a]">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-gray-600">
          <p>Last updated: January 27, 2026</p>
          
          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you book an appointment, register for an account, or contact us. This may include your name, email address, phone number, and medical history.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to process your appointments, and to communicate with you.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Sharing of Information</h2>
            <p>We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at Umanghospitalgurugram@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
