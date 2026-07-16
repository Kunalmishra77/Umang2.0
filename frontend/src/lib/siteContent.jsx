import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { siteConfig } from '../config/siteConfig';

// Static fallbacks — the site renders correctly even before Supabase is set up
// or if a content row is missing. DB values are merged on top of these.
const DEFAULTS = {
  contact: {
    emergency: siteConfig.contacts.emergency,
    whatsapp: siteConfig.contacts.whatsapp,
    email: siteConfig.contacts.email,
    address: siteConfig.locations.main.address,
  },
  social: { facebook: '', instagram: '', linkedin: '', twitter: '', youtube: '' },
  footer: { about_text: '' },
  seo: { title: '', description: '' },
};

const Ctx = createContext(DEFAULTS);

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(DEFAULTS);

  useEffect(() => {
    if (!supabase) return;
    let active = true;
    supabase.from('site_content').select('key,value').then(({ data }) => {
      if (!active || !data) return;
      const merged = { ...DEFAULTS };
      for (const row of data) {
        merged[row.key] = { ...(DEFAULTS[row.key] || {}), ...(row.value || {}) };
      }
      setContent(merged);
    });
    return () => { active = false; };
  }, []);

  return <Ctx.Provider value={content}>{children}</Ctx.Provider>;
}

export const useSiteContent = () => useContext(Ctx);
