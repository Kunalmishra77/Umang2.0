import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, User, Clock, Calendar, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();

  // Mock data
  const blog = {
    title: "10 Superfoods to Boost Your Immunity This Winter",
    author: "Dt. Suman Verma",
    date: "Jan 25, 2026",
    category: "Nutrition",
    readTime: "5 min read",
    content: `
      <p class="mb-4">As winter approaches, our immune system often takes a hit. Incorporating the right foods into your diet can make a significant difference. Here are 10 superfoods recommended by our nutrition experts...</p>
      <h3 class="text-xl font-bold mb-2">1. Turmeric</h3>
      <p class="mb-4">Contains curcumin, which has powerful anti-inflammatory and antioxidant effects.</p>
      <h3 class="text-xl font-bold mb-2">2. Ginger</h3>
      <p class="mb-4">Helps decrease inflammation and can help reduce a sore throat and other inflammatory illnesses.</p>
      <p>...</p>
    `
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{blog.title} | Umang Blogs</title>
      </Helmet>

      <div className="container-custom max-w-3xl">
        <Link to="/patient-corner/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#005580] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>

        <span className="text-xs font-bold text-[#005580] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
          {blog.category}
        </span>
        
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" /> {blog.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {blog.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {blog.readTime}
          </div>
          <button className="ml-auto flex items-center gap-2 hover:text-[#005580]">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>

        <div className="prose prose-lg prose-blue text-gray-600 mb-12" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogDetail;
