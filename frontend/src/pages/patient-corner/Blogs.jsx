import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search, User, Clock, ArrowRight, Mail, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS, getRandomDoctor } from '../../utils/imageAssets';

const categories = ["All", "Wellness", "Nutrition", "Mental Health", "Cardiology", "Pediatrics", "Oncology", "Neurology", "Orthopedics"];

// Helper to generate 50+ realistic blog posts
const generateBlogs = () => {
  const baseBlogs = [
    { title: "Superfoods for Immunity", cat: "Nutrition", img: ASSETS.BLOG_FOOD },
    { title: "Managing Anxiety Daily", cat: "Mental Health", img: ASSETS.BLOG_KNEE }, // Reusing knee for generic health or update later
    { title: "Heart Attack vs Cardiac Arrest", cat: "Cardiology", img: ASSETS.HEART_TRANSPLANT },
    { title: "Screen Time & Kids", cat: "Pediatrics", img: ASSETS.NURSE_CARE },
    { title: "Early Signs of Cancer", cat: "Oncology", img: ASSETS.RADIOLOGY },
    { title: "Post-Stroke Recovery", cat: "Neurology", img: ASSETS.NEURO },
    { title: "Preventing Knee Pain", cat: "Orthopedics", img: ASSETS.ORTHO_KNEE },
    { title: "Yoga for Stress Relief", cat: "Wellness", img: ASSETS.BLOG_FOOD },
    { title: "Balanced Diet Plans", cat: "Nutrition", img: ASSETS.BLOG_FOOD },
    { title: "Sleep Hygiene 101", cat: "Wellness", img: ASSETS.SLEEP_STUDY },
  ];

  let allBlogs = [];
  for (let i = 0; i < 50; i++) {
    const base = baseBlogs[i % baseBlogs.length];
    allBlogs.push({
      id: i + 1,
      title: `${base.title} - Part ${Math.floor(i / 10) + 1}`,
      author: `Dr. Expert ${i + 1}`,
      date: `Jan ${20 + (i % 10)}, 2026`,
      category: base.cat,
      readTime: `${5 + (i % 5)} min read`,
      img: base.img,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    });
  }
  return allBlogs;
};

const blogs = generateBlogs();

const authors = [
  { name: "Dr. Rajesh Kumar", role: "Cardiologist", articles: 12, img: getRandomDoctor('male') },
  { name: "Dt. Suman Verma", role: "Nutritionist", articles: 25, img: getRandomDoctor('female') },
  { name: "Dr. Ananya Singh", role: "Psychiatrist", articles: 18, img: getRandomDoctor('female') }
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredBlogs = blogs.filter(blog => 
    (activeCategory === 'All' || blog.category === activeCategory) &&
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>Health Blogs & Articles | Umang Hospital</title>
        <meta name="description" content="Expert health tips, medical news, and wellness advice from Umang Hospital's specialists." />
      </Helmet>

      {/* 1. Featured Article Hero */}
      <section className="relative min-h-[500px] flex items-center bg-[#f0fdf4] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#dcfce7] rounded-bl-[15rem]" />
        </div>
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Featured Story</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] mb-6 leading-tight">
                 The Science of Sleep: Why It Matters
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                 Quality sleep is the foundation of good health. Explore how sleep cycles affect your brain, heart, and immunity.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold text-gray-500 mb-8">
                 <span className="flex items-center gap-2"><User className="w-4 h-4" /> Dr. S. Gupta</span>
                 <span>•</span>
                 <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 10 min read</span>
              </div>
              <button className="h-14 px-8 rounded-full bg-[#005580] text-white font-bold hover:bg-[#004466] transition-all shadow-lg flex items-center gap-2">
                 Read Full Article <ArrowRight className="w-4 h-4" />
              </button>
           </motion.div>
           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <img 
                 src={ASSETS.SLEEP_STUDY} 
                 alt="Sleep" 
                 className="rounded-[3rem] shadow-2xl w-full object-cover h-[400px]" 
              />
           </motion.div>
        </div>
      </section>

      {/* 2. Trending Now */}
      <section className="py-24 bg-white border-b border-gray-100">
         <div className="container-custom">
            <div className="flex items-center gap-3 mb-12 text-[#0f172a]">
               <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
                  <TrendingUp className="w-6 h-6" />
               </div>
               <h2 className="text-3xl font-bold font-serif">Trending Now</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
               {blogs.slice(0, 3).map((blog, i) => (
                  <motion.div 
                     key={i} 
                     whileHover={{ x: 10 }}
                     className="flex gap-6 items-start group cursor-pointer"
                  >
                     <div className="text-5xl font-serif font-black text-gray-100 group-hover:text-red-100 transition-colors">0{i+1}</div>
                     <div>
                        <h4 className="font-bold text-xl text-[#0f172a] mb-2 group-hover:text-[#005580] transition-colors leading-tight">{blog.title}</h4>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                           <Clock className="w-3 h-3" /> {blog.readTime}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Filter & Search */}
      <section className="py-16 bg-white sticky top-20 z-30 border-b border-gray-100 shadow-sm backdrop-blur-md bg-white/90">
         <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 no-scrollbar">
               {categories.map(cat => (
                  <motion.button 
                     key={cat}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => { setActiveCategory(cat); setVisibleCount(9); }}
                     className={`px-8 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all border-2 ${activeCategory === cat ? 'bg-[#005580] border-[#005580] text-white shadow-xl shadow-blue-900/20' : 'bg-white border-gray-100 text-gray-500 hover:border-blue-200 hover:text-[#005580]'}`}
                  >
                     {cat}
                  </motion.button>
               ))}
            </div>
            <div className="relative w-full md:w-96 group">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#005580] transition-colors" />
               <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full h-14 pl-14 pr-6 rounded-full border-2 border-gray-100 focus:border-[#005580] outline-none text-base transition-all bg-gray-50/50 focus:bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
         </div>
      </section>

      {/* 4. Main Article Grid */}
      <section className="py-32 bg-gray-50/50">
         <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
               {filteredBlogs.slice(0, visibleCount).map((blog) => (
                  <motion.div 
                     key={blog.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -15 }}
                     className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border border-gray-100"
                  >
                     <div className="h-64 overflow-hidden relative">
                        <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-[#005580] uppercase tracking-[0.2em] shadow-lg">
                           {blog.category}
                        </div>
                     </div>
                     <div className="p-10 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-6 uppercase tracking-widest">
                           <span>{blog.date}</span>
                           <span className="w-1 h-1 rounded-full bg-gray-300" />
                           <span>{blog.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0f172a] mb-6 group-hover:text-[#005580] transition-colors line-clamp-2 leading-tight">
                           <Link to={`/patient-corner/blogs/${blog.id}`}>{blog.title}</Link>
                        </h3>
                        <p className="text-gray-500 leading-relaxed mb-10 flex-1 text-lg line-clamp-3">{blog.summary}</p>
                        <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-[#005580] group-hover:text-white transition-all duration-500">
                                 <User className="w-5 h-5" />
                              </div>
                              <span className="text-sm font-bold text-gray-700 truncate w-32">{blog.author}</span>
                           </div>
                           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Link to={`/patient-corner/blogs/${blog.id}`} className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#005580] group-hover:text-white group-hover:border-[#005580] transition-all duration-300 shadow-sm">
                                 <ArrowRight className="w-6 h-6" />
                              </Link>
                           </motion.div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
            
            {visibleCount < filteredBlogs.length && (
               <div className="text-center mt-20">
                  <motion.button 
                     whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => setVisibleCount(prev => prev + 9)}
                     className="px-12 py-4 bg-white border-2 border-gray-100 rounded-full text-[#0f172a] font-bold text-lg hover:border-[#005580] hover:text-[#005580] transition-all shadow-sm"
                  >
                     Explore More Articles
                  </motion.button>
               </div>
            )}
         </div>
      </section>

      {/* 5. Editor's Picks */}
      <section className="py-24 bg-[#0f172a] text-white">
         <div className="container-custom">
            <div className="flex items-center gap-3 mb-12">
               <Star className="w-6 h-6 text-yellow-400 fill-current" />
               <h2 className="text-3xl font-serif font-bold">Editor's Picks</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
               {blogs.slice(5, 7).map((blog, i) => (
                  <div key={i} className="flex gap-6 items-center group cursor-pointer">
                     <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                        <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                     </div>
                     <div>
                        <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2 block">{blog.category}</span>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{blog.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                           <Clock className="w-3 h-3" /> {blog.readTime}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Meet the Authors */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-16 text-center">Meet Our Medical Writers</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {authors.map((author, i) => (
                  <div key={i} className="text-center group">
                     <div className="relative w-40 h-40 mx-auto mb-6">
                        <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
                        <img src={author.img} alt={author.name} className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg" />
                     </div>
                     <h3 className="text-lg font-bold text-[#0f172a]">{author.name}</h3>
                     <p className="text-[#005580] text-sm font-medium mb-2">{author.role}</p>
                     <p className="text-gray-400 text-xs">{author.articles} Articles Published</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Newsletter */}
      <section className="py-24 bg-[#005580] text-white text-center">
         <div className="container-custom max-w-2xl">
            <Mail className="w-12 h-12 text-cyan-300 mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold mb-4">Health in Your Inbox</h2>
            <p className="text-blue-100 mb-8 text-lg">
               Join 50,000+ subscribers. Get the latest health tips, medical news, and exclusive offers delivered weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 p-2 rounded-2xl border border-white/20">
               <input type="email" placeholder="Enter your email address" className="flex-1 h-12 bg-transparent px-4 outline-none text-white placeholder-blue-200" />
               <button className="h-12 px-8 rounded-xl bg-white text-[#005580] font-bold hover:bg-cyan-50 transition-all">
                  Subscribe
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Blogs;