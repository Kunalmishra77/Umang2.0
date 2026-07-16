import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SeoHead from '../../components/common/SeoHead';
import { usePublished } from '../../lib/useCollection';

const Gallery = () => {
  const images = usePublished('gallery', []);
  const [category, setCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(images.map((i) => i.category).filter(Boolean)))];
  const shown = category === 'All' ? images : images.filter((i) => i.category === category);

  return (
    <div className="bg-white min-h-screen">
      <SeoHead title="Gallery | Umang Superspeciality Hospital" description="A look inside Umang Superspeciality Hospital — our facilities, teams and moments." canonical="/gallery" />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-subtitle">Gallery</span>
            <h1 className="section-title">Inside Umang Hospital</h1>
            <p className="text-gray-500 text-sm sm:text-base">A glimpse of our facilities, teams, and the moments that define our care.</p>
          </div>

          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((c) => (
                <button key={c} onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${category === c ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {c}
                </button>
              ))}
            </div>
          )}

          {shown.length === 0 ? (
            <div className="text-center text-gray-400 py-20">Gallery images coming soon.</div>
          ) : (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
              {shown.map((img, i) => (
                <motion.figure key={img.id || i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 group">
                  <img src={img.image_url} alt={img.caption || 'Gallery image'} loading="lazy"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {img.caption && <figcaption className="p-3 text-sm text-gray-600">{img.caption}</figcaption>}
                </motion.figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
