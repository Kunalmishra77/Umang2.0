import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Pill, Search, ShoppingBag, Clock, ShieldCheck, 
  Truck, ArrowRight, Phone, MessageCircle, ChevronRight,
  HeartPulse, Thermometer, User, Filter, X, Zap, Upload
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';

const categories = [
  { id: 'cardiac', name: 'Cardiac Care', icon: HeartPulse, slug: 'cardiac-care', img: ASSETS.PHARMA_CARDIAC },
  { id: 'diabetes', name: 'Diabetes', icon: Activity, slug: 'diabetes-care', img: ASSETS.PHARMA_DIABETES },
  { id: 'personal', name: 'Personal Care', icon: User, slug: 'personal-care', img: ASSETS.PHARMA_PERSONAL_CARE },
  { id: 'devices', name: 'Medical Devices', icon: Zap, slug: 'medical-devices', img: ASSETS.PHARMA_DEVICES },
  { id: 'baby', name: 'Mother & Baby', icon: Pill, slug: 'mother-baby', img: ASSETS.PHARMA_MOTHER_BABY }
];

const featuredProducts = [
  { id: 1, name: "Accu-Chek Active Strips", pack: "50 Strips", img: ASSETS.PROD_ACCU_CHEK },
  { id: 2, name: "Omron BP Monitor", pack: "1 Unit", img: ASSETS.PHARMA_DEVICES },
  { id: 3, name: "Multivitamin Complex", pack: "60 Tabs", img: ASSETS.PROD_MULTIVITAMIN },
  { id: 4, name: "N95 Face Masks", pack: "Pack of 5", img: ASSETS.PROD_N95_MASK }
];

const Pharmacy = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white min-h-screen pt-12">
      <Helmet>
        <title>24/7 Pharmacy & Medical Store | Umang Hospital</title>
        <meta name="description" content="100% genuine medications available round-the-clock. Doorstep delivery and professional pharmacist support." />
      </Helmet>

      {/* 1. Hero Section - Modern & Clean */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#f1f5f9] -skew-x-12 translate-x-20" />
          <img 
            src={ASSETS.PHARMA_PRESCRIPTION} 
            alt="Pharmacy" 
            className="absolute right-10 top-1/2 -translate-y-1/2 w-[40%] h-auto max-h-[80%] object-contain z-10 hidden lg:block drop-shadow-2xl"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] mb-8">
              <ShieldCheck className="w-4 h-4" /> 100% Genuine Medicines
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0f172a] mb-8 leading-tight">
              Your Health, <br />
              <span className="text-blue-600 font-medium italic">Delivered.</span>
            </h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
              From essential chronic medications to critical emergency drugs, Umang Pharmacy ensures 24/7 availability with strict cold-chain maintenance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/services/buy-medicines/prescription-upload" className="h-16 px-10 rounded-2xl bg-[#0f172a] text-white font-bold text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-xl">
                <Upload className="w-5 h-5" /> Upload Prescription
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400">Order on Call</p>
                  <p className="font-bold text-lg text-[#0f172a]">89297 33550</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Search & Trust Badges */}
      <section className="py-12 lg:py-10 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
               {[
                  { icon: Clock, title: "24/7 Available", desc: "Always open for emergencies" },
                  { icon: ShieldCheck, title: "100% Genuine", desc: "Verified manufacturer supply" },
                  { icon: Truck, title: "Express Delivery", desc: "Within 2-4 hours in Gurugram" },
                  { icon: User, title: "Expert Support", desc: "Registered pharmacists only" }
               ].map((item, i) => (
                  <div key={i} className="text-center group">
                     <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <item.icon className="w-7 h-7" />
                     </div>
                     <h4 className="font-bold text-[#0f172a] mb-1">{item.title}</h4>
                     <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
               ))}
            </div>

            <div className="max-w-4xl mx-auto relative mb-32">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
               <input 
                  type="text" 
                  placeholder="Search for medicines, wellness products or health devices..."
                  className="w-full h-20 pl-16 pr-8 rounded-3xl bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold text-xl transition-all shadow-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
         </div>
      </section>

      {/* 3. Shop by Category */}
      <section className="py-32 bg-gray-50">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-16">
               <h2 className="text-4xl font-serif font-bold text-[#0f172a]">Shop by Category</h2>
               <Link to="/services/buy-medicines/all-products" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  View All <ArrowRight className="w-5 h-5" />
               </Link>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
               {categories.map((cat) => (
                  <Link key={cat.id} to={`/services/buy-medicines/category/${cat.slug}`} className="group">
                     <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] p-8 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100">
                        <div className="w-full aspect-square rounded-2xl bg-gray-50 mb-6 overflow-hidden">
                           <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h4 className="font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors">{cat.name}</h4>
                     </motion.div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Featured Products */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-16">Top Wellness Picks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {featuredProducts.map((product) => (
                  <motion.div 
                     key={product.id}
                     whileHover={{ y: -8 }}
                     className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl transition-all group"
                  >
                     <div className="w-full aspect-square bg-gray-50 rounded-[2rem] mb-6 overflow-hidden relative">
                        <img src={product.img} alt={product.name} className="w-full h-full object-cover mix-blend-multiply p-4" />
                        <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-all">
                           <HeartPulse className="w-5 h-5" />
                        </button>
                     </div>
                     <h4 className="font-bold text-[#0f172a] mb-1 line-clamp-1">{product.name}</h4>
                     <p className="text-xs text-gray-400 mb-6">{product.pack}</p>
                     
                     <div className="flex items-center justify-between">
                        <button className="h-12 w-full rounded-xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2">
                           View Details
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Quick Upload Banner */}
      <section className="py-12 lg:py-10 container-custom">
         <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
            
            <div className="lg:w-1/2 relative z-10">
               <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Can't find your <br />medicine?</h2>
               <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                  Just upload your prescription and our pharmacists will find it for you and arrange for delivery.
               </p>
               <Link to="/services/buy-medicines/prescription-upload" className="h-16 px-10 rounded-2xl bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3 shadow-xl">
                  <Upload className="w-6 h-6" /> Upload & Order Now
               </Link>
            </div>

            <div className="lg:w-1/2 relative">
               <img 
                  src={ASSETS.PHARMA_ORDER_FASTER} 
                  alt="Order Faster" 
                  className="relative z-10 rounded-[3rem] shadow-2xl rotate-3 scale-110"
               />
            </div>
         </div>
      </section>

    </div>
  );
};

export default Pharmacy;
