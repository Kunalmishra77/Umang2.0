import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 pt-16 lg:pt-28 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background - Adjusted for mobile */}
      <div className="absolute top-0 left-1/4 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-primary-900/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-cyan-900/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 lg:mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 lg:pr-12 text-center sm:text-left">
            <Link to="/" className="inline-block mb-6 lg:mb-8 group">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                Umang<span className="text-primary-500">Hospital</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed font-light text-base lg:text-lg max-w-md mx-auto sm:mx-0">
              Umang Hospital is a 150-bedded super speciality hospital in Gurugram, where care and expertise unite. 
              Committed to your well-being with world-class facilities.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
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
                  className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="lg:col-span-2 sm:pl-4 lg:pl-8 text-left">
            <h5 className="text-base lg:text-lg font-bold text-white mb-6 lg:mb-8 border-l-4 border-primary-500 pl-4">For Patients</h5>
            <ul className="space-y-3 lg:space-y-4">
              {[
                { name: 'Find a Doctor', path: '/doctors' },
                { name: 'Book Appointment', path: '/doctors' },
                { name: 'Cashless Insurance', path: '/cashless-insurance' },
                { name: 'ICU Infrastructure', path: '/infrastructure/icu' },
                { name: 'Patient Experience', path: '/patient-experience' },
                { name: 'Health Library', path: '/health-library' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="inline-flex items-center gap-2 hover:text-primary-400 transition-colors group text-sm lg:text-base font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="lg:col-span-2 text-left">
            <h5 className="text-base lg:text-lg font-bold text-white mb-6 lg:mb-8 border-l-4 border-primary-500 pl-4">Quick Connect</h5>
            <ul className="space-y-3 lg:space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Team', path: '/team' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Inquiry Hub', path: '/contact/inquiry-hub' },
                { name: 'Sitemap', path: '/sitemap' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="inline-flex items-center gap-2 hover:text-primary-400 transition-colors group text-sm lg:text-base font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-4 text-left">
            <h5 className="text-base lg:text-lg font-bold text-white mb-6 lg:mb-8 border-l-4 border-primary-500 pl-4">Contact Info</h5>
            <div className="space-y-5 lg:space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                   <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-base mb-1">Main Campus</p>
                  <p className="text-sm lg:text-base text-gray-400 leading-relaxed max-w-[280px]">Saraswati Enclave, Sector 10B, Sector 37, Gurugram, Haryana 122004</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                   <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-base mb-0.5">Emergency Line</p>
                  <p className="text-gray-400 font-medium text-sm lg:text-base">+91 89297 33550</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                   <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-base mb-0.5">Support Email</p>
                  <p className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors truncate max-w-[250px] lg:max-w-none">Umanghospitalgurugram@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 flex items-center gap-1 flex-wrap justify-center font-medium">
            &copy; 2026 Umang Hospital. Developed by <a href="https://ai-agentix.com/" target="_blank" rel="noopener noreferrer" className="text-primary-400 font-bold ml-1 hover:text-primary-300 transition-colors">AI AGENTiX</a>. Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse mx-1" /> in India.
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-[12px] font-bold uppercase tracking-widest">
            <Link to="/terms" className="text-gray-500 hover:text-primary-400 transition-colors">Terms</Link>
            <Link to="/privacy-policy" className="text-gray-500 hover:text-primary-400 transition-colors">Privacy</Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-primary-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
