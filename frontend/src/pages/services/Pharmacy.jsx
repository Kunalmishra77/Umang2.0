import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, Upload, ShieldCheck, Clock, Truck, Plus, Minus, 
  ShoppingBag, CheckCircle, Smartphone, ArrowRight, Star, Heart, 
  HelpCircle, ChevronDown, Leaf
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const categories = [
  { name: "Prescription", slug: "prescription", img: ASSETS.PHARMACY },
  { name: "Diabetes Care", slug: "diabetes-care", img: ASSETS.DIABETIC_CARE },
  { name: "Cardiac Care", slug: "cardiac-care", img: ASSETS.BP_MONITOR },
  { name: "Mother & Baby", slug: "mother-baby", img: ASSETS.NURSE_CARE },
  { name: "Devices", slug: "devices", img: ASSETS.BP_MONITOR },
  { name: "Personal Care", slug: "personal-care", img: ASSETS.PERSONAL_CARE }
];

const bestSellers = [
  { id: 1, name: "Accu-Chek Active Strips", pack: "50 Strips", price: 850, oldPrice: 975, img: ASSETS.DIABETIC_CARE },
  { id: 2, name: "Omron BP Monitor", pack: "1 Unit", price: 2100, oldPrice: 2400, img: ASSETS.BP_MONITOR },
  { id: 3, name: "Multivitamin Complex", pack: "60 Tabs", price: 499, oldPrice: 650, img: ASSETS.MULTIVITAMIN },
  { id: 4, name: "N95 Face Masks", pack: "Pack of 5", price: 299, oldPrice: 400, img: ASSETS.PERSONAL_CARE }
];

const faqs = [
  { q: "Is a prescription mandatory?", a: "Yes, for Schedule H and H1 drugs, a valid prescription from a registered medical practitioner is mandatory. OTC products can be bought without one." },
  { q: "How do I return a product?", a: "We have a 7-day return policy for damaged or incorrect items. Please contact support within 48 hours of delivery." },
  { q: "Do you deliver internationally?", a: "Currently, we deliver only within India. International shipping is coming soon." }
];

const Pharmacy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-12">
      <Helmet>
        <title>Online Pharmacy | Umang Hospital</title>
        <meta name="description" content="Order genuine medicines and healthcare products online. 24/7 delivery, prescription upload, and cold chain storage." />
      </Helmet>

      {/* 1. Hero with Prescription Upload */}
      <section className="bg-[#005580] text-white pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-cyan-300 font-bold uppercase tracking-widest text-xs mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Genuine Medicines</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Your Health Delivered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Safely & Quickly.</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-10">
              Skip the pharmacy queue. Upload your prescription, and our pharmacists will verify and dispatch your medicines instantly.
            </p>
            
            <div className="flex gap-8 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-cyan-300" />
                </div>
                <span>24/7 Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Truck className="w-4 h-4 text-cyan-300" />
                </div>
                <span>Home Delivery</span>
              </div>
            </div>
          </div>

          {/* Upload Card */}
          <div className="bg-white text-gray-900 rounded-[2.5rem] p-8 shadow-2xl relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#0f172a]">Quick Order</h3>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Flat 15% OFF
              </div>
            </div>
            
            <Link to="/services/buy-medicines/prescription-upload" className="border-2 border-dashed border-gray-300 rounded-2xl h-40 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-5 h-5 text-[#005580]" />
              </div>
              <p className="font-bold text-gray-600 group-hover:text-[#005580]">Upload Prescription</p>
              <p className="text-xs text-gray-400 mt-1">PDF, JPG, or PNG (Max 5MB)</p>
            </Link>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-gray-200"></div>
              <span className="text-xs font-bold text-gray-400 uppercase">OR</span>
              <div className="h-[1px] flex-1 bg-gray-200"></div>
            </div>

            <div className="mt-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search medicines (e.g. Paracetamol)" 
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#005580] outline-none font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category */}
      <section className="py-16 container-custom -mt-16 relative z-20">
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <Link 
                to={`/services/buy-medicines/category/${cat.slug}`}
                key={i} 
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-[#005580] transition-all">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-bold text-gray-600 group-hover:text-[#005580] transition-colors">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Best Sellers */}
      <section className="py-16 container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Best Sellers</h2>
            <p className="text-gray-500">Most popular health products chosen by our patients.</p>
          </div>
          <Link to="/services/buy-medicines/all-products" className="text-[#005580] font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="h-48 relative bg-gray-50 rounded-xl overflow-hidden mb-4 p-6 flex items-center justify-center">
                <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                  <motion.div whileTap={{ scale: 1.2 }}>♥</motion.div>
                </button>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.pack}</p>
              </div>
              
              <div className="flex items-end justify-between mt-4">
                <div>
                  <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
                  <p className="text-lg font-bold text-[#0f172a]">₹{product.price}</p>
                </div>
                <button 
                  onClick={addToCart}
                  className="w-10 h-10 bg-[#005580] text-white rounded-xl flex items-center justify-center hover:bg-[#004466] active:scale-95 transition-all shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Trusted Brands Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-custom">
          <h3 className="text-center text-lg font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Pfizer', 'Cipla', 'Sun Pharma', 'Abbott', 'GSK', 'Dr. Reddy'].map((brand, i) => (
              <span key={i} className="text-2xl font-serif font-bold text-[#0f172a]">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Health Essentials Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-12">Health Essentials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Vitamin D: Why you need it", category: "Nutrition", img: ASSETS.BLOG_FOOD },
              { title: "Managing Diabetes at Home", category: "Chronic Care", img: ASSETS.DIABETIC_CARE },
              { title: "Best Skincare Routine", category: "Wellness", img: ASSETS.PERSONAL_CARE }
            ].map((article, i) => (
              <Link to="/patient-corner/blogs" key={i} className="group cursor-pointer">
                <div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#005580] uppercase tracking-wide">
                    {article.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#005580] transition-colors">{article.title}</h3>
                <span className="text-sm text-gray-500 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Steps */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center text-[#0f172a] mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />
            
            {[
              { title: "Upload Prescription", desc: "Upload a photo of your prescription or search for medicines." },
              { title: "Pharmacist Verification", desc: "Our qualified pharmacists check your order for safety and accuracy." },
              { title: "Doorstep Delivery", desc: "Get your medicines delivered within 24 hours in temperature-controlled boxes." }
            ].map((step, i) => (
              <div key={i} className="text-center bg-white">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm text-[#005580] font-bold text-2xl">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-[#0f172a] mb-2">{step.title}</h4>
                <p className="text-gray-500 max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#0f172a]">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeAccordion === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Mobile App CTA */}
      <section className="py-20 bg-[#0f172a] text-white overflow-hidden relative">
        <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Order Faster with <br />the Umang App</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-md">
              Track orders, set refill reminders, and consult doctors on the go. Download now for exclusive app-only discounts.
            </p>
            <div className="flex gap-4">
              <button className="h-14 px-6 rounded-xl bg-white text-[#0f172a] font-bold flex items-center gap-3 hover:bg-gray-100 transition-all">
                <Smartphone className="w-6 h-6" /> App Store
              </button>
              <button className="h-14 px-6 rounded-xl bg-transparent border border-white/20 text-white font-bold flex items-center gap-3 hover:bg-white/10 transition-all">
                <Smartphone className="w-6 h-6" /> Play Store
              </button>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />
            <img 
              src={ASSETS.TELEMEDICINE} 
              alt="Mobile App" 
              className="relative z-10 rounded-3xl border-8 border-[#1e293b] shadow-2xl rotate-[-5deg] hover:rotate-0 transition-all duration-500" 
            />
          </div>
        </div>
      </section>

      {/* Sticky Cart Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="w-14 h-14 bg-[#005580] text-white rounded-full shadow-2xl flex items-center justify-center relative">
          <ShoppingBag className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

    </div>
  );
};

export default Pharmacy;
