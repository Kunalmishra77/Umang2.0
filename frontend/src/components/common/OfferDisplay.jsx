import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';

// Renders the highest-priority ENABLED offer (RLS already filters to active,
// in-window rows). Nothing renders when there is no active offer. Dismissals are
// remembered per session so the same offer doesn't keep reappearing.
export default function OfferDisplay() {
  const [offer, setOffer] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    let active = true;
    (async () => {
      const { data } = await supabase
        .from('offers')
        .select('*')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false })
        .limit(1);
      const top = data?.[0];
      if (!active || !top) return;
      if (sessionStorage.getItem(`offer-dismissed-${top.id}`)) { setDismissed(true); return; }
      setOffer(top);
    })();
    return () => { active = false; };
  }, []);

  if (!offer || dismissed) return null;

  const dismiss = () => {
    sessionStorage.setItem(`offer-dismissed-${offer.id}`, '1');
    setDismissed(true);
  };

  const Cta = () => {
    if (!offer.cta_text || offer.cta_type === 'none' || offer.cta_type === 'popup') return null;
    const cls = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary-700 font-bold text-sm hover:gap-3 transition-all';
    const inner = <>{offer.cta_text} <ArrowRight className="w-4 h-4" /></>;
    if (offer.cta_type === 'page') return <Link to={offer.cta_value || '/'} className={cls}>{inner}</Link>;
    if (offer.cta_type === 'whatsapp') {
      const num = (offer.cta_value || '').replace(/\D/g, '');
      return <a href={`https://wa.me/${num}`} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
    }
    return <a href={offer.cta_value || '#'} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  };

  // Popup modal
  if (offer.display === 'popup') {
    return (
      <div className="fixed inset-0 z-[200] grid place-items-center bg-black/60 p-4" onClick={dismiss}>
        <div className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
          <button onClick={dismiss} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 grid place-items-center text-gray-600 hover:bg-white"><X className="w-4 h-4" /></button>
          {offer.image_url && <img src={offer.image_url} alt={offer.title} className="w-full max-h-64 object-cover" />}
          <div className="p-6 text-center">
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">{offer.title}</h3>
            {offer.description && <p className="text-gray-600 mb-5">{offer.description}</p>}
            {offer.cta_text && offer.cta_type !== 'none' && offer.cta_type !== 'popup' && (
              <div className="[&_a]:!bg-primary-600 [&_a]:!text-white [&_a]:mx-auto [&_a]:w-fit"><Cta /></div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Banner strip
  return (
    <div className="relative z-[60] bg-gradient-to-r from-primary-700 to-primary-600 text-white">
      <div className="container-custom py-3 flex items-center gap-4">
        {offer.image_url && (
          <img src={offer.image_url} alt="" className="hidden sm:block w-12 h-12 rounded-lg object-cover shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <p className="font-bold leading-tight truncate">{offer.title}</p>
          {offer.description && <p className="text-white/80 text-sm truncate">{offer.description}</p>}
        </div>
        <Cta />
        <button onClick={dismiss} aria-label="Dismiss" className="w-8 h-8 grid place-items-center rounded-full hover:bg-white/10 shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
