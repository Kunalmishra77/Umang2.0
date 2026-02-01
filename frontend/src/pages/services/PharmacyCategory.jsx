import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag, Plus, ArrowLeft, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const products = productsData[slug] || productsData['prescription']; // Fallback
  const categoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-12">
      <Helmet>
        <title>{categoryName} | Umang Pharmacy</title>
      </Helmet>

      <div className="container-custom">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/services/buy-medicines" className="hover:text-[#005580]">Pharmacy</Link>
          <span>/</span>
          <span className="font-bold text-[#0f172a]">{categoryName}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-[#0f172a] font-bold border-b border-gray-100 pb-4">
                <Filter className="w-5 h-5" /> Filters
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold mb-3">Price Range</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Under ₹100</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> ₹100 - ₹500</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> ₹500 - ₹1000</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Above ₹1000</label>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-3">Brand</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Abbott</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Sun Pharma</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Cipla</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <h1 className="text-3xl font-serif font-bold text-[#0f172a] mb-6">{categoryName}</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="h-48 relative bg-gray-50 rounded-xl overflow-hidden mb-4 p-6 flex items-center justify-center">
                    <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.pack}</p>
                  </div>
                  
                  <div className="flex items-end justify-between mt-4">
                    <div>
                      <p className="text-lg font-bold text-[#0f172a]">₹{product.price}</p>
                    </div>
                    <button className="w-10 h-10 bg-[#005580] text-white rounded-xl flex items-center justify-center hover:bg-[#004466] active:scale-95 transition-all shadow-lg">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCategory;
