import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">
                Umang<span className="text-primary-500">Hospital</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Umang Hospital is a 150-bedded super speciality hospital in Gurugram, where care and expertise unite. 
              We're committed to your well-being with world-class healthcare facilities.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Patients */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">For Patients</h5>
            <ul className="space-y-3">
              {[
                { name: 'Search for Doctors', path: '/doctors' },
                { name: 'Login', path: '/login' },
                { name: 'Register', path: '/register' },
                { name: 'Request Appointment', path: '/appointments/request' },
                { name: 'Patient Dashboard', path: '/patients' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center gap-2 hover:text-primary-500 transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Doctors */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">For Doctors</h5>
            <ul className="space-y-3">
              {[
                { name: 'Appointments', path: '/login' },
                { name: 'Chat', path: '/login' },
                { name: 'Login', path: '/login' },
                { name: 'Register', path: '/register' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center gap-2 hover:text-primary-500 transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <p>Umang Hospital, Gurugram,<br /> Haryana, India</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <p>+91 8929733551</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <p>info@umanghospitals.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 Umang Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms and Conditions</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
