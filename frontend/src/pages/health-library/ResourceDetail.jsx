import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FileText, ArrowLeft, Download, User, Calendar, Tag } from 'lucide-react';

const ResourceDetail = () => {
  const { id } = useParams();

  // Mock data fetching based on ID
  const resource = {
    title: "Complex Neuro-intervention in Acute Stroke",
    author: "Dr. R.K. Mehta",
    date: "Jan 15, 2026",
    type: "Case Study",
    content: `
      <p class="mb-4"><strong>Abstract:</strong> This case study explores the efficacy of mechanical thrombectomy in a 65-year-old patient presenting with a large vessel occlusion in the M1 segment of the Middle Cerebral Artery (MCA). The patient arrived within the golden hour window, and rapid intervention led to complete recanalization (TICI 3) and significant neurological recovery.</p>
      <h3 class="text-xl font-bold mb-2">Introduction</h3>
      <p class="mb-4">Acute ischemic stroke remains a leading cause of disability worldwide. Mechanical thrombectomy has revolutionized the treatment of large vessel occlusions...</p>
      <h3 class="text-xl font-bold mb-2">Clinical Presentation</h3>
      <p class="mb-4">The patient presented with left-sided hemiplegia and global aphasia. NIHSS score at admission was 18...</p>
      <h3 class="text-xl font-bold mb-2">Intervention</h3>
      <p class="mb-4">Under general anesthesia, femoral access was obtained. A stent retriever combined with aspiration was used...</p>
      <h3 class="text-xl font-bold mb-2">Outcome</h3>
      <p class="mb-4">Post-procedure angiography showed complete restoration of blood flow. The patient was discharged on day 5 with an NIHSS score of 2.</p>
    `,
    tags: ["Neurology", "Stroke", "Intervention"]
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{resource.title} | Umang Knowledge Center</title>
      </Helmet>

      <div className="container-custom max-w-4xl">
        <Link to="/health-library/knowledge-center" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#005580] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Library
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-bold text-[#005580] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            {resource.type}
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0f172a] mb-6 leading-tight">
            {resource.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#005580]" /> {resource.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#005580]" /> {resource.date}
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#005580]" /> {resource.tags.join(', ')}
            </div>
          </div>

          <div className="prose prose-lg prose-blue text-gray-600 mb-12" dangerouslySetInnerHTML={{ __html: resource.content }} />

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-[#0f172a] mb-1">Download Full Paper</h4>
              <p className="text-sm text-gray-500">Access the complete dataset and high-res images.</p>
            </div>
            <button className="h-12 px-8 rounded-xl bg-[#005580] text-white font-bold flex items-center gap-2 hover:bg-[#004466] transition-all shadow-lg">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourceDetail;
