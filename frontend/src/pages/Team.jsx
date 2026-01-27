import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import DoctorFilter from '../components/doctors/DoctorFilter';
import DoctorCard from '../components/doctors/DoctorCard';
import { doctors } from '../utils/doctorsData';
import { Search } from 'lucide-react';

// Reusing the DoctorSearch logic but with a "Team" header focus
const Team = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Filter for "Directors" or "Heads" to feature them first, or just show all
  const leadership = doctors.filter(d => d.role.includes('Director') || d.role.includes('Head'));
  const otherDoctors = doctors.filter(d => !d.role.includes('Director') && !d.role.includes('Head'));

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Helmet>
        <title>Our Team - Umang Hospital</title>
      </Helmet>

      <section className="bg-[#005580] text-white py-20 px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
         <div className="container-custom relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-4"
            >
              Meet Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-100 text-lg max-w-2xl mx-auto"
            >
              World-class specialists dedicated to your well-being.
            </motion.p>
         </div>
      </section>

      <section className="py-20 px-4">
        <div className="container-custom">
           <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-[#005580] pl-4">Leadership & Heads of Department</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {leadership.slice(0, 6).map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                 ))}
              </div>
           </div>
           
           <div>
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#005580] pl-4">Our Specialists</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {otherDoctors.slice(0, 9).map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
