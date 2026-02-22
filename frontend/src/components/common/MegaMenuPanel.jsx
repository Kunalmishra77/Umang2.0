import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Activity, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MegaMenuPanel = ({ item, closeMenu }) => {
  const [activeGroupId, setActiveGroupId] = useState(item.groups?.[0]?.id || '');
  const navigate = useNavigate();

  if (!item) return null;

  const activeGroup = useMemo(() => 
    item.groups?.find(g => g.id === activeGroupId) || item.groups?.[0]
  , [item.groups, activeGroupId]);

  const handleCategoryClick = (e, href) => {
    if (href) {
      if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        navigate(href);
      }
      closeMenu();
    }
  };

  return (
    <div className="bg-white shadow-[0_30px_100px_-15px_rgba(0,102,204,0.2)] border border-primary-100 overflow-hidden flex flex-col md:flex-row w-full h-[320px]">
      
      {/* COLUMN 1: NAVIGATION SIDEBAR */}
      <div className="w-[230px] bg-primary-50/20 border-r border-primary-50 flex flex-col shrink-0">
        <div className="p-3 border-b border-primary-100/50 flex items-center justify-between">
           <div className="flex items-center gap-2 text-[8px] font-black text-primary-600 uppercase tracking-[0.2em]">
              <Sparkles className="w-2.5 h-2.5" /> SELECTION
           </div>
        </div>
        
        <div className="flex-1 overflow-y-auto no-scrollbar py-2 px-2 space-y-0.5 custom-scrollbar">
          {item.groups?.map((group) => {
            const Icon = group.icon || Activity;
            const isActive = activeGroupId === group.id;
            return (
              <div
                key={group.id}
                onMouseEnter={() => setActiveGroupId(group.id)}
                onClick={(e) => handleCategoryClick(e, group.href)}
                className={`w-full flex items-center justify-between px-3.5 py-2 rounded-lg transition-all duration-300 relative group cursor-pointer ${
                  isActive ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 translate-x-1' : 'text-slate-500 hover:text-primary-600 hover:bg-white'
                }`}
              >
                <span className="flex items-center gap-2.5 relative z-10">
                   <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-white' : 'text-primary-300'}`} />
                   <span className="text-[12px] font-bold tracking-tight">{group.title}</span>
                </span>
                <ChevronRight size={12} className={`relative z-10 transition-transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`} />
              </div>
            );
          })}
        </div>

        <Link to={item.href} onClick={closeMenu} className="p-3 bg-primary-50/50 hover:bg-primary-100 border-t border-primary-100 text-center transition-colors">
           <span className="text-[9px] font-black text-primary-700 uppercase tracking-widest flex items-center justify-center gap-2">Full Directory <ArrowRight size={10} /></span>
        </Link>
      </div>

      {/* COLUMN 2: CENTER RICH CONTENT (Optimized Size & Fit) */}
      <div 
        className="flex-1 bg-white relative overflow-hidden flex flex-col cursor-pointer group/center"
        onClick={() => handleCategoryClick(null, activeGroup?.href)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroupId}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full p-6 lg:p-8 flex flex-col"
          >
            <div className="mb-4">
               <div className="flex items-center gap-2 mb-2">
                  <div className="h-0.5 w-6 bg-primary-600 rounded-full group-hover/center:w-10 transition-all duration-500" />
                  <span className="text-[9px] font-black text-primary-600 uppercase tracking-widest">Specialized Insight</span>
               </div>
               <h4 className="text-xl lg:text-2xl font-serif font-bold text-slate-900 mb-2 tracking-tight leading-tight group-hover/center:text-primary-700 transition-colors">
                  {activeGroup?.preview?.title}
               </h4>
               <p className="text-slate-500 text-[12px] leading-relaxed max-w-xl font-medium line-clamp-3">
                  {activeGroup?.preview?.desc}
               </p>
            </div>

            {/* KEY HIGHLIGHTS / BULLETS - Tightened Grid */}
            <div className="mt-auto pt-4 border-t border-primary-50">
               <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {activeGroup?.preview?.bullets?.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-4.5 h-4.5 rounded-full bg-primary-50 flex items-center justify-center shrink-0 group-hover/center:bg-primary-100 transition-colors">
                          <CheckCircle2 size={11} className="text-primary-600" />
                        </div>
                        <span className="text-[12px] font-bold text-slate-700 leading-none">
                          {bullet}
                        </span>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* COLUMN 3: RIGHT VISUAL SPOTLIGHT (Compact) */}
      <div className="hidden lg:flex w-[250px] bg-primary-50/30 shrink-0 p-6 flex flex-col relative overflow-hidden border-l border-primary-50">
         <AnimatePresence mode="wait">
            <motion.div 
              key={activeGroupId}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col relative z-10"
            >
               <div className="relative aspect-video mb-4 rounded-xl overflow-hidden shadow-lg border border-white group/img shrink-0">
                  <img 
                     src={activeGroup?.preview?.image} 
                     alt="Visual" 
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-950/10 group-hover/img:bg-transparent transition-colors" />
               </div>

               <div className="mb-4">
                  <div className="flex items-center gap-1 mb-1.5">
                     {[1,2,3,4,5].map(i => <Star key={i} size={7} className="fill-primary-400 text-primary-400" />)}
                  </div>
                  <h5 className="font-black text-[8px] text-primary-600 uppercase tracking-widest mb-1">{activeGroup?.preview?.tag} OVERVIEW</h5>
                  <h4 className="text-[14px] font-bold text-slate-900 leading-tight line-clamp-2">
                     {activeGroup?.title}
                  </h4>
               </div>
               
               {activeGroup?.href && (
                 activeGroup.href.startsWith('http') ? (
                   <a 
                     href={activeGroup.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={closeMenu}
                     className="mt-auto py-2 bg-primary-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg text-center hover:bg-primary-700 transition-all shadow-lg active:scale-95 shadow-primary-600/20"
                   >
                     Explore Details
                   </a>
                 ) : (
                   <Link 
                     to={activeGroup.href}
                     onClick={closeMenu}
                     className="mt-auto py-2 bg-primary-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg text-center hover:bg-primary-700 transition-all shadow-lg active:scale-95 shadow-primary-600/20"
                   >
                     Explore Details
                   </Link>
                 )
               )}
            </motion.div>
         </AnimatePresence>
         
         <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

    </div>
  );
};

export default MegaMenuPanel;
