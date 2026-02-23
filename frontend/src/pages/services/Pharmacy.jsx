import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SeoHead from '../../components/common/SeoHead';
import { 
  Pill, Search, ShoppingBag, Clock, ShieldCheck, 
  Truck, ArrowRight, Phone, MessageCircle, ChevronRight,
  HeartPulse, Thermometer, User, Filter, X, Zap, Upload, Activity,
  Smartphone, Award, HelpCircle, Star, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/imageAssets';
import api from '../../services/api';
import { Container, Section, SectionHeading } from '../../components/ui/Layout';

const iconMap = {
  'cardiac-care': HeartPulse,
  'diabetes-care': Activity,
  'personal-care': User,
  'medical-devices': Zap,
  'mother-baby': Pill
};

const Pharmacy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catsRes, featRes] = await Promise.all([
          api.get('/medicines/categories'),
          api.get('/medicines/featured')
        ]);
        setCategories(catsRes.data);
        setFeaturedProducts(featRes.data);
      } catch (error) {
        console.error("Failed to fetch pharmacy data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SeoHead 
        title="24/7 Pharmacy & Medical Store" 
        description="100% genuine medications available round-the-clock at Umang Hospital. Doorstep delivery and professional pharmacist support."
        canonical="/services/buy-medicines"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[600px] flex items-center bg-[#f8fafc] overflow-hidden py-12 lg:py-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#f1f5f9] -skew-x-12 translate-x-20" />
          <img 
            src={ASSETS.PHARMA_PRESCRIPTION} 
            alt="Pharmacy" 
            className="absolute right-10 top-1/2 -translate-y-1/2 w-[40%] h-auto max-h-[80%] object-contain z-10 hidden lg:block drop-shadow-2xl"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
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
                  <p className="font-bold text-lg text-[#0f172a]">{siteConfig.contacts.whatsapp}</p>
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
                     <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                        <item.icon className="w-7 h-7" />
                     </div>
                     <h4 className="font-bold text-[#0f172a] mb-1">{item.title}</h4>
                     <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
               ))}
            </div>

            <div className="max-w-4xl mx-auto relative">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
               <input 
                  type="text" 
                  placeholder="Search for medicines..."
                  className="w-full h-20 pl-16 pr-8 rounded-3xl bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold text-xl transition-all shadow-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
         </div>
      </section>

      {/* 3. Shop by Category */}
      <section className="py-20 bg-gray-50 mt-20">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-16 px-4">
               <h2 className="text-4xl font-serif font-bold text-[#0f172a]">Shop by Category</h2>
               <Link to="/services/buy-medicines/all-products" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  View All <ArrowRight className="w-5 h-5" />
               </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
               {categories.map((cat) => (
                  <Link key={cat.id} to={`/services/buy-medicines/category/${cat.slug}`} className="group">
                     <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] p-8 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100">
                        <div className="w-full aspect-square rounded-2xl bg-gray-50 mb-6 overflow-hidden">
                           <img src={cat.image || ASSETS.PHARMA_CARDIAC} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h4 className="font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors text-sm">{cat.name}</h4>
                     </motion.div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Featured Products */}
      <section className="py-20 bg-white">
         <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-[#0f172a] mb-16 px-4">Top Wellness Picks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
               {featuredProducts.map((product) => (
                  <motion.div 
                     key={product.id}
                     whileHover={{ y: -8 }}
                     className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl transition-all group"
                  >
                     <div className="w-full aspect-square bg-gray-50 rounded-[2rem] mb-6 overflow-hidden relative">
                        <img src={product.image || ASSETS.PROD_MULTIVITAMIN} alt={product.name} className="w-full h-full object-cover mix-blend-multiply p-4" />
                        <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-all shadow-sm">
                           <HeartPulse className="w-5 h-5" />
                        </button>
                     </div>
                     <h4 className="font-bold text-[#0f172a] mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">{product.name}</h4>
                     <p className="text-xs text-gray-400 mb-6">{product.pack_size}</p>
                     <Link to={`/services/buy-medicines/category/all-wellness`} className="h-12 w-full rounded-xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2">
                        View Details
                     </Link>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION: COLD CHAIN QUALITY (NEW SECTION 11) */}
      <Section className="bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="lg:w-1/2">
              <span className="text-blue-200 font-black uppercase tracking-widest text-[10px] mb-4 block">Quality Assurance</span>
              <h2 className="text-4xl font-serif font-bold mb-8">Unmatched Cold Chain <br />Integrity.</h2>
              <p className="text-blue-50 text-lg font-light leading-relaxed mb-10">
                Temperature-sensitive medicines like insulin and vaccines require precise handling. Our pharmacy uses specialized IoT-monitored refrigeration and insulated delivery packs to ensure 100% efficacy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "IoT Sensors", desc: "Real-time temp monitoring" },
                  { label: "Power Backup", desc: "Double redundancy systems" },
                  { label: "Insulated Kits", desc: "For doorstep deliveries" },
                  { label: "Audit Logs", desc: "Hourly temperature checks" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 border border-white/10 p-4 rounded-2xl">
                    <h4 className="font-bold text-white mb-1">{item.label}</h4>
                    <p className="text-blue-200 text-[10px] uppercase font-black">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={ASSETS.PHARMA_CARDIAC} alt="Cold Chain" className="rounded-[3rem] shadow-2xl border-8 border-white/5" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Process Section */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeading eyebrow="How it Works" title="3 Simple Steps to Get Your Meds" centered />
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Upload / Search", desc: "Upload your prescription or search for medicines directly.", icon: Search, path: "/services/buy-medicines/prescription-upload" },
              { title: "Expert Review", desc: "Our pharmacists verify the order and ensure right dosage.", icon: ShieldCheck, path: "/contact" },
              { title: "Fast Delivery", desc: "Get your medicines delivered at your door within 4 hours.", icon: Truck, path: "/services/buy-medicines/all-products" }
            ].map((step, i) => (
              <Link to={step.path} key={i} className="relative text-center group block">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg text-blue-600 border-4 border-blue-50 group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed px-6">{step.desc}</p>
                {i < 2 && <ArrowRight className="hidden lg:block absolute top-10 -right-6 text-gray-200" size={32} />}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Specialized Medications */}
      <Section className="bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-100 rounded-[4rem] rotate-3 -z-10" />
              <img src={ASSETS.PHARMA_CARDIAC} alt="Specialized" className="rounded-[4rem] shadow-2xl w-full h-[500px] object-cover" />
            </div>
            <div className="lg:w-1/2">
              <span className="section-subtitle">Critical Care Care</span>
              <h2 className="section-title">Specialized Critical & <br />Chronic Medication.</h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                We maintain stock of life-saving emergency drugs, oncology medications, and specialized cardiac drugs that are often hard to find at local retail stores.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Strict Cold Chain Maintenance", path: "/infrastructure" },
                  { label: "Storage as per Global Standards", path: "/patient-experience" },
                  { label: "Verified Manufacturer Sourcing", path: "/about" }
                ].map((item, i) => (
                  <Link to={item.path} key={i} className="flex items-center gap-4 font-bold text-slate-800 group block">
                    <CheckCircle className="text-green-500 group-hover:scale-125 transition-transform" size={20} /> 
                    <span className="group-hover:text-blue-600 transition-colors">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Quick Upload Banner */}
      <section className="py-12 lg:py-10 container-custom">
         <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
            <div className="lg:w-1/2 relative z-10">
               <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Can't find your medicine?</h2>
               <p className="text-xl text-blue-100 mb-12">Just upload your prescription and our pharmacists will find it for you.</p>
               <Link to="/services/buy-medicines/prescription-upload" className="h-16 px-10 rounded-2xl bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3 shadow-xl">
                  <Upload className="w-6 h-6" /> Upload & Order Now
               </Link>
            </div>
            <div className="lg:w-1/2 relative">
               <img src={ASSETS.PHARMA_ORDER_FASTER} alt="Order" className="relative z-10 rounded-[3rem] shadow-2xl rotate-3 scale-110" />
            </div>
         </div>
      </section>

      {/* 8. App Promo */}
      <Section className="bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Manage health on the go with <span className="text-blue-400">Umang Care App.</span></h2>
              <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">Refill prescriptions, track deliveries, and consult doctors—all from your smartphone.</p>
              <div className="flex flex-wrap gap-6">
                <button className="h-16 px-8 bg-white text-black rounded-2xl flex items-center gap-4 hover:scale-105 transition-all shadow-lg">
                  <Smartphone /> <div><p className="text-[10px] font-bold opacity-60">GET IT ON</p><p className="text-lg font-bold leading-none">Google Play</p></div>
                </button>
                <button className="h-16 px-8 border border-white/20 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-all">
                  <Smartphone /> <div><p className="text-[10px] font-bold opacity-60">DOWNLOAD ON</p><p className="text-lg font-bold leading-none">App Store</p></div>
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
               <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] text-center">
                  <Award size={48} className="text-blue-400 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold mb-2">99% Delivery Rate</h4>
                  <p className="text-slate-400 text-sm">Successfully delivered 50,000+ orders across Gurugram last year.</p>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. FAQ Section */}
      <Section className="bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        <Container>
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] mb-6">
              <HelpCircle className="w-4 h-4" /> Pharmacy Support
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0f172a] mb-6">Pharmacy <span className="text-blue-600 italic">FAQs</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Get quick answers to common questions about medication delivery, genuine sourcing, and cold-chain maintenance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { q: "Is home delivery available for all medicines?", a: "Yes, we deliver all genuine medicines. Some critical or restricted drugs may require a physical prescription verification at the time of delivery." },
              { q: "How long does the delivery take?", a: "Orders placed within Gurugram are typically delivered within 2-4 hours. Chronic medicine refills can also be scheduled." },
              { q: "Do you maintain cold-chain for insulin?", a: "Absolutely. We use specialized insulated containers and cold-gel packs to ensure temperature-sensitive drugs remain effective." },
              { q: "Can I return unused medications?", a: "Unopened medicines in their original packaging can be returned within 7 days with a valid bill, except for refrigerated items." },
              { q: "Do you accept insurance for pharmacy?", a: "Yes, for inpatients and certain outpatient insurance plans, we facilitate direct cashless settlements for medicines." },
              { q: "Is a prescription mandatory for all orders?", a: "Prescription is mandatory for all scheduled drugs and high-end antibiotics to ensure patient safety and legal compliance." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Pill size={20} />
                </div>
                <h4 className="font-bold text-lg text-[#0f172a] mb-4 leading-tight group-hover:text-blue-600 transition-colors">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. Commitment CTA */}
      <Section className="bg-blue-600 text-white text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Trust Umang for your <br />clinical pharmacy needs.</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">Our registered pharmacists are available 24/7 to guide you with the right dosage and usage information.</p>
            <div className="flex justify-center gap-6">
              <a href="tel:8588072727" className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-base shadow-xl flex items-center gap-3 hover:scale-105 transition-all">
                <Phone size={20} /> Speak to Pharmacist
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>

    </div>
  );
};

export default Pharmacy;
