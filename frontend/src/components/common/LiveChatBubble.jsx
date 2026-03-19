import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';

const quickReplies = [
  { label: 'Book Appointment', href: '/doctors', type: 'link' },
  { label: 'Emergency', href: `tel:${siteConfig.contacts.emergency.replace(/\s/g, '')}`, type: 'external' },
  { label: 'Health Packages', href: '/services/health-checkup', type: 'link' },
  { label: 'Contact Us', href: '/contact', type: 'link' },
];

const LiveChatBubble = () => {
  const [isReady, setIsReady] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  // Mount delay
  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  // Toast after mount (once per session)
  useEffect(() => {
    if (!isReady) return;
    const seen = sessionStorage.getItem('chat_toast_seen');
    if (seen) return;
    const t = setTimeout(() => setShowToast(true), 2500);
    return () => clearTimeout(t);
  }, [isReady]);

  // Auto-hide toast
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => {
      setShowToast(false);
      sessionStorage.setItem('chat_toast_seen', '1');
    }, 8000);
    return () => clearTimeout(t);
  }, [showToast]);

  // Close on route change
  useEffect(() => {
    setIsExpanded(false);
  }, [location]);

  const handleToastClick = () => {
    setShowToast(false);
    sessionStorage.setItem('chat_toast_seen', '1');
    setIsExpanded(true);
  };

  const dismissToast = (e) => {
    e.stopPropagation();
    setShowToast(false);
    sessionStorage.setItem('chat_toast_seen', '1');
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I need help with...')}`;

  if (!isReady) return null;

  return (
    <div className="fixed right-5 md:right-6 bottom-[78px] md:bottom-[90px] z-[39] flex flex-col items-end gap-3">
      <AnimatePresence>
        {/* ── Expanded Chat Panel ── */}
        {isExpanded && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-[300px] sm:w-[320px] bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18)] border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-[13px]">Umang Support</p>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-white/60 text-[10px] font-medium">Typically replies instantly</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsExpanded(false)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <X className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              {/* Bot message */}
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-3.5 h-3.5 text-primary-600" />
                </div>
                <div className="bg-gray-50 rounded-2xl rounded-tl-md px-4 py-2.5">
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    Hi! 👋 How can we help you today?
                  </p>
                </div>
              </div>

              {/* Quick reply pills */}
              <div className="pl-9 flex flex-wrap gap-1.5">
                {quickReplies.map((qr) => {
                  const cls = "px-3 py-1.5 rounded-full border border-primary-200 text-primary-600 text-[11px] font-bold hover:bg-primary-50 transition-colors inline-flex items-center gap-1";
                  if (qr.type === 'external') {
                    return (
                      <a key={qr.label} href={qr.href} className={cls}>
                        {qr.label}
                      </a>
                    );
                  }
                  return (
                    <Link key={qr.label} to={qr.href} onClick={() => setIsExpanded(false)} className={cls}>
                      {qr.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Input with WhatsApp redirect */}
            <div className="px-4 pb-4">
              <p className="text-[10px] text-gray-400 text-center mb-2">Our team responds via WhatsApp</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-[12px] hover:bg-[#20bd5a] transition-colors shadow-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Continue on WhatsApp
              </a>
            </div>
          </motion.div>
        )}

        {/* ── Toast Notification ── */}
        {showToast && !isExpanded && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className="cursor-pointer group"
            onClick={handleToastClick}
          >
            <button onClick={dismissToast}
              className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm">
              <X className="w-3 h-3 text-gray-500" />
            </button>
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-2xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-lg transition-shadow max-w-[240px]">
              <div className="relative shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-800 leading-tight">Need help finding a doctor?</p>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">Tap to chat <ArrowRight className="w-2.5 h-2.5 inline" /></p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Persistent FAB ── */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 relative ${
          isExpanded
            ? 'bg-gray-800 shadow-gray-800/20'
            : 'bg-gradient-to-br from-primary-600 to-primary-700 shadow-primary-600/30 hover:shadow-primary-600/50'
        }`}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Online dot */}
        {!isExpanded && (
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
};

export default LiveChatBubble;
