import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight, CheckCircle, Phone, Calendar } from 'lucide-react';
import { pageContent } from '../data/pageContent';

const DynamicSubPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const data = pageContent[slug];

  // If slug doesn't exist, we might want to show 404 or redirect.
  // For now, let's redirect to home or a parent page if data is missing.
  if (!data) {
    return <Navigate to="/" replace />;
  }

  // Find other items in the same category for the sidebar
  const relatedItems = Object.entries(pageContent)
    .filter(([key, item]) => item.category === data.category && key !== slug)
    .map(([key, item]) => ({ key, ...item }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>{data.title} | Umang Hospital</title>
        <meta name="description" content={data.description} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#005580]/90 via-[#005580]/70 to-transparent" />
        <div className="container-custom relative h-full flex flex-col justify-center text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-blue-200 font-bold uppercase tracking-widest text-xs mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span>{data.category}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{data.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-3xl leading-tight">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-blue max-w-none mb-12"
            >
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </motion.div>

            {/* Key Features Grid */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Key Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#005580] to-[#0088cc] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2">Ready to get started?</h3>
                  <p className="text-blue-100">Book an appointment or contact us for more information.</p>
                </div>
                <div className="flex gap-4 shrink-0">
                  <Link to="/doctors" className="bg-white text-[#005580] px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Book Now
                  </Link>
                  <Link to="/contact" className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Contact Us
                  </Link>
                </div>
              </div>
              
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 p-6 sticky top-24">
              <h4 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                More in {data.category}
              </h4>
              <div className="space-y-2">
                {relatedItems.map((item) => (
                  <Link 
                    key={item.key}
                    to={`/${item.category.toLowerCase().replace(/\s+/g, '-')}/${item.key}`}
                    className={`block p-3 rounded-lg transition-all group ${
                      location.pathname.includes(item.key) 
                        ? 'bg-blue-50 text-[#005580] font-bold' 
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{item.title}</span>
                      {location.pathname.includes(item.key) && <ArrowRight className="w-4 h-4" />}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#005580] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">Need Assistance?</h5>
                <p className="text-sm text-gray-500 mb-4">Our support team is available 24/7 to help you.</p>
                <a href="tel:+918929733551" className="text-[#005580] font-bold text-lg hover:underline">
                  +91 89297 33551
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DynamicSubPage;
