import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Plus, Filter } from 'lucide-react';
import { Container, Section, Card } from '../../components/ui/Layout';
import { siteConfig } from '../../config/siteConfig';

// Mock Data for demonstration
const productsData = {
  'prescription': [
    { id: 101, name: "Amoxycillin 500mg", pack: "Strip of 10", price: 120, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" },
    { id: 102, name: "Paracetamol 650mg", pack: "Strip of 15", price: 30, img: "https://images.unsplash.com/photo-1616671285410-09502197946a?auto=format&fit=crop&q=80&w=400" },
    { id: 103, name: "Atorvastatin 10mg", pack: "Strip of 10", price: 180, img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400" },
  ],
  'diabetes-care': [
    { id: 201, name: "Accu-Chek Active", pack: "50 Strips", price: 850, img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400" },
    { id: 202, name: "Sugar Free Gold", pack: "500 Pellets", price: 280, img: "https://images.unsplash.com/photo-1616671285410-09502197946a?auto=format&fit=crop&q=80&w=400" },
  ],
  'cardiac-care': [
    { id: 301, name: "Omron BP Monitor", pack: "HEM-7120", price: 2100, img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=400" },
  ]
};

const PharmacyCategory = () => {
  const { slug } = useParams();
  const products = slug ? (productsData[slug] || productsData['prescription']) : productsData['prescription'];
  const categoryName = slug 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Pharmacy Category';

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>{categoryName} | {siteConfig.shortName} Pharmacy</title>
      </Helmet>

      <Section className="relative">
        <Container>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            <Link to="/services/buy-medicines" className="hover:text-primary-600 transition-colors">Pharmacy</Link>
            <span>/</span>
            <span className="text-slate-600">{categoryName}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft sticky top-32">
                <div className="flex items-center gap-3 mb-8 text-brand-dark font-bold border-b border-slate-50 pb-4">
                  <Filter size={18} className="text-primary-600" /> Filters
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Price Range</h4>
                    <div className="space-y-3 text-sm text-slate-600 font-medium">
                      <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" /> Under ₹100</label>
                      <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" /> ₹100 - ₹500</label>
                      <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" /> ₹500 - ₹1000</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-10">{categoryName}</h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:border-primary-100 flex flex-col h-full">
                    <div className="h-48 relative bg-slate-50 rounded-2xl overflow-hidden mb-6 p-6 flex items-center justify-center">
                      <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-bold text-brand-dark leading-tight line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-slate-500 font-semibold">{product.pack}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-50">
                      <p className="text-xl font-bold text-brand-dark">₹{product.price}</p>
                      <button className="w-11 h-11 bg-primary-600 text-white rounded-xl flex items-center justify-center hover:bg-primary-700 active:scale-95 transition-all shadow-md shadow-primary-900/10">
                        <Plus size={20} />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default PharmacyCategory;
