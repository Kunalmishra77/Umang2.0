import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, ChevronDown } from 'lucide-react';
import { kbContent } from '../../content/kbContent';

const HomeFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <span className="section-subtitle">Help Desk</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-lg font-light">Quick answers to common queries regarding our services and facility.</p>
        </div>

        <div className="space-y-4">
          {kbContent.home.faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-[2rem] overflow-hidden bg-gray-50/50 hover:bg-white transition-colors">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left outline-none"
              >
                <span className="font-bold text-brand-dark text-base lg:text-lg pr-8 flex items-center gap-4">
                  <HelpCircle className="w-5 h-5 text-primary-500 shrink-0" />
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'bg-primary-600 text-white rotate-180' : 'bg-white text-gray-400'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 lg:px-8 pb-8 pt-0 text-gray-600 leading-relaxed text-sm lg:text-base border-t border-gray-100/50 mt-2">
                      <p className="pl-9">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
