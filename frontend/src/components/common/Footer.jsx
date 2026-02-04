import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 pt-12 lg:pt-28 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <Link to="/" className="inline-block mb-8 group">
              <span className="text-3xl font-serif font-bold text-white tracking-tight">
                Umang<span className="text-primary-500">Hospital</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
              Umang Hospital is a 100-bedded super speciality hospital in Gurugram, where care and expertise unite. 
              We're committed to your well-being with world-class healthcare facilities.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Instagram, href: "https://instagram.com" }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href} 
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="lg:col-span-2 lg:pl-8">
            <h5 className="text-lg font-bold text-white mb-8">For Patients</h5>
            <ul className="space-y-4">
              {[
                { name: 'Find a Doctor', path: '/doctors' },
                { name: 'Book Appointment', path: '/appointments/request' },
                { name: 'Patient Portal', path: '/login' },
                { name: 'Health Checkups', path: '/services/health-checkup' },
                { name: 'Patient Stories', path: '/patient-corner/patient-stories' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="inline-flex items-center gap-2 hover:text-primary-400 transition-colors group text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-bold text-white mb-8">For Doctors</h5>
            <ul className="space-y-4">
              {[
                { name: 'Doctor Login', path: '/login' },
                { name: 'Join Our Team', path: '/careers' },
                { name: 'Refer a Patient', path: '/contact' },
                { name: 'Clinical Research', path: '/research' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="inline-flex items-center gap-2 hover:text-primary-400 transition-colors group text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-4">
            <h5 className="text-lg font-bold text-white mb-8">Contact Us</h5>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                   <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Umang Hospital</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Saraswati Enclave, Sector 10B, Sector 37,<br /> Gurugram, Haryana 122004</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                   <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-white font-bold tracking-wide">+91 89297 33550</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                   <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-gray-300 hover:text-white transition-colors">Umanghospitalgurugram@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            &copy; 2025 Umang Hospital. Made with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> in India.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <Link to="/terms" className="text-gray-500 hover:text-primary-400 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-primary-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
