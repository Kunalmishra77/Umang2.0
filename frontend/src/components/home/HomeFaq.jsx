import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { kbContent } from '../../content/kbContent';
import { Link } from 'react-router-dom';

const HomeFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqs = kbContent.home.faqs;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50/50 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side: Sticky Info */}
          <div className="lg:w-1/3 lg:sticky" style={{ top: 'calc(var(--header-h) + 2rem)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Help Desk</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4 sm:mb-6 leading-tight">
                Frequently Asked <span className="text-primary-600 normal">Questions.</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                Quick answers to common queries regarding our services, facility, and patient care protocols.
              </p>
            </motion.div>

            {/* Progress indicator */}
            <div className="hidden lg:flex items-center gap-4 mb-8">
              <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  animate={{ width: `${((activeIndex !== null ? activeIndex : 0) + 1) / faqs.length * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className="text-[11px] font-bold text-gray-400">
                {(activeIndex !== null ? activeIndex : 0) + 1}/{faqs.length}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-primary-900/5 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

              <h3 className="text-xl font-bold text-brand-dark mb-6 relative z-10">Need more help?</h3>

              <div className="space-y-5 relative z-10">
                <a href="tel:+918588072727" className="flex items-center gap-4 group/item p-3 -m-3 rounded-2xl hover:bg-primary-50/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center group-hover/item:scale-110 transition-transform shadow-lg shadow-primary-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">24/7 Helpline</p>
                    <p className="font-bold text-brand-dark">+91 85880 72727</p>
                  </div>
                </a>

                <a href="https://wa.me/918588072727" className="flex items-center gap-4 group/item p-3 -m-3 rounded-2xl hover:bg-green-50/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center group-hover/item:scale-110 transition-transform shadow-lg shadow-green-200">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">WhatsApp Support</p>
                    <p className="font-bold text-brand-dark">Chat with us</p>
                  </div>
                </a>

                <div className="pt-5 border-t border-gray-100">
                  <Link to="/contact" className="w-full py-4 bg-gray-50 hover:bg-brand-dark hover:text-white text-brand-dark rounded-2xl font-bold text-center transition-all block text-sm">
                    Contact Support
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Stepped Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isActive = activeIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div
                      className={`border rounded-2xl sm:rounded-[2rem] overflow-hidden transition-all duration-500 ${
                        isActive
                          ? 'border-primary-200 bg-white shadow-lg shadow-primary-900/5'
                          : 'border-gray-100 bg-white/50 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <button
                        onClick={() => setActiveIndex(isActive ? null : i)}
                        className="w-full flex items-center justify-between p-4 sm:p-6 lg:p-8 text-left outline-none"
                      >
                        <span className="flex items-center gap-4 flex-1 pr-4">
                          {/* Step number */}
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-200'
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className={`font-bold text-base lg:text-lg transition-colors ${
                            isActive ? 'text-primary-600' : 'text-brand-dark'
                          }`}>
                            {faq.q}
                          </span>
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isActive ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-100 text-gray-400'
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="px-6 lg:px-8 pb-8 pt-0">
                              <div className="pl-12 relative">
                                {/* Animated line connector */}
                                <motion.div
                                  initial={{ scaleY: 0 }}
                                  animate={{ scaleY: 1 }}
                                  transition={{ duration: 0.5, delay: 0.1 }}
                                  className="absolute left-[15px] top-0 bottom-4 w-0.5 bg-gradient-to-b from-primary-200 to-transparent rounded-full origin-top"
                                />
                                <motion.p
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.15 }}
                                  className="text-gray-600 leading-relaxed text-sm lg:text-base pt-2"
                                >
                                  {faq.a}
                                </motion.p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
            >
              <div>
                <h4 className="font-bold text-xl mb-1">Still searching for answers?</h4>
                <p className="text-gray-400 text-sm">Download our complete patient guide for detailed information.</p>
              </div>
              <Link to="/patient-experience" className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 rounded-full font-bold transition-all whitespace-nowrap text-sm shadow-lg flex items-center gap-2">
                Download Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
