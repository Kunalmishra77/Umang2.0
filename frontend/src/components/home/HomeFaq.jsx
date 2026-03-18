import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, ChevronDown, Phone, MessageSquare, Mail, Clock } from 'lucide-react';
import { kbContent } from '../../content/kbContent';
import { Link } from 'react-router-dom';

const HomeFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Info & Contact Card */}
          <div className="lg:w-1/3 sticky" style={{ top: 'calc(var(--header-h) + 2rem)' }}>
            <div className="mb-10">
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Help Desk
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">
                Frequently Asked <span className="text-primary-600">Questions.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Quick answers to common queries regarding our services, facility, and patient care protocols.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-primary-900/5 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              
              <h3 className="text-xl font-bold text-brand-dark mb-6 relative z-10">Need more help?</h3>
              
              <div className="space-y-6 relative z-10">
                <a href="tel:+918588072727" className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">24/7 Helpline</p>
                    <p className="font-bold text-brand-dark">+91 85880 72727</p>
                  </div>
                </a>

                <a href="https://wa.me/918588072727" className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">WhatsApp Support</p>
                    <p className="font-bold text-brand-dark">Chat with us</p>
                  </div>
                </a>

                <div className="pt-6 border-t border-gray-100 mt-6">
                  <Link to="/contact" className="w-full py-4 bg-gray-50 hover:bg-brand-dark hover:text-white text-brand-dark rounded-2xl font-bold text-center transition-all block">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {kbContent.home.faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-[2rem] overflow-hidden transition-all duration-300 ${activeIndex === i ? 'border-primary-200 bg-white shadow-lg shadow-primary-900/5' : 'border-gray-100 bg-white/50 hover:bg-white'}`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left outline-none"
                >
                  <span className={`font-bold text-base lg:text-lg pr-8 flex items-center gap-4 transition-colors ${activeIndex === i ? 'text-primary-600' : 'text-brand-dark'}`}>
                    <HelpCircle className={`w-5 h-5 shrink-0 ${activeIndex === i ? 'text-primary-600' : 'text-primary-400'}`} />
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 lg:px-8 pb-8 pt-0 text-gray-600 leading-relaxed text-sm lg:text-base border-t border-gray-100/50 mt-2">
                        <div className="pl-9 pt-6 relative">
                          <div className="absolute left-4 top-6 bottom-8 w-0.5 bg-primary-100 rounded-full" />
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <div className="mt-10 p-8 rounded-[2rem] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-xl mb-1">Still searching for answers?</h4>
                <p className="text-gray-400 text-sm">Download our complete patient guide for detailed information.</p>
              </div>
              <Link to="/patient-experience" className="px-8 py-3 bg-primary-600 hover:bg-primary-700 rounded-full font-bold transition-all whitespace-nowrap">
                Download Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
