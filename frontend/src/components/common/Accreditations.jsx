import React from 'react';
import { Container, Section } from '../ui/Layout';
import { ShieldCheck, Award, Heart, Activity } from 'lucide-react';

const Accreditations = () => {
  const items = [
    { icon: ShieldCheck, title: "NABH Accredited", desc: "National Accreditation Board for Hospitals & Healthcare Providers." },
    { icon: Activity, title: "NABL Certified", desc: "National Accreditation Board for Testing and Calibration Laboratories." },
    { icon: Award, title: "JCI Standards", desc: "Strict adherence to Joint Commission International care protocols." },
    { icon: Heart, title: "ISO 9001:2015", desc: "International standard for quality management systems." }
  ];

  return (
    <Section className="bg-white border-y border-gray-100">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                <item.icon size={32} />
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[20ch]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Accreditations;
