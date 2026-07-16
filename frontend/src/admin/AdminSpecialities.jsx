import React from 'react';
import CollectionAdmin from './CollectionAdmin';

const config = {
  table: 'specialities',
  title: 'Specialities',
  subtitle: 'Centres of Excellence / departments.',
  primaryField: 'name',
  secondaryField: 'tagline',
  imageField: 'image_url',
  defaults: { name: '', short_name: '', slug: '', category: 'medical', icon: 'Heart', tagline: '', stat: '', stat_label: '', image_url: '', accent: 'from-primary-500 to-primary-700', is_published: true, featured: false, sort_order: 0, subtitle: '', description: '', approach: '', recovery: '', emergency_callout: '', bullets: [], procedures: [], related_services: [], statistics: [], tech: [], success_stories: [], faq: [] },
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'short_name', label: 'Short name', type: 'text' },
    { name: 'slug', label: 'Slug (e.g. cardiac)', type: 'text' },
    { name: 'category', label: 'Category', type: 'select', options: ['surgical', 'medical', 'support'] },
    { name: 'icon', label: 'Icon (Heart, Brain, Bone, Wind, Scissors…)', type: 'text' },
    { name: 'tagline', label: 'Tagline', type: 'textarea' },
    { name: 'stat', label: 'Stat (e.g. 5000+)', type: 'text' },
    { name: 'stat_label', label: 'Stat label (e.g. Procedures)', type: 'text' },
    { name: 'image_url', label: 'Image', type: 'image' },
    { name: 'accent', label: 'Accent gradient (e.g. from-rose-500 to-red-600)', type: 'text' },
    { name: 'sort_order', label: 'Order (0 = first)', type: 'number' },
    { name: 'featured', label: 'Feature on homepage', type: 'checkbox', hint: 'Show in the homepage Centres of Excellence section' },
    { name: 'is_published', label: 'Published', type: 'checkbox', hint: 'Show on the website' },

    // --- Detail page content (/specialities/:slug) ---
    { name: 'subtitle', label: 'Detail: subtitle', type: 'text' },
    { name: 'description', label: 'Detail: description', type: 'textarea' },
    { name: 'approach', label: 'Detail: our approach', type: 'textarea' },
    { name: 'recovery', label: 'Detail: recovery / after-care', type: 'textarea' },
    { name: 'emergency_callout', label: 'Detail: emergency callout', type: 'textarea' },
    { name: 'bullets', label: 'Detail: highlights (one per line)', type: 'lines' },
    { name: 'procedures', label: 'Detail: procedures (one per line)', type: 'lines' },
    { name: 'related_services', label: 'Detail: related services (one per line)', type: 'lines' },
    { name: 'statistics', label: 'Detail: statistics — JSON [{"label","value"}]', type: 'json' },
    { name: 'tech', label: 'Detail: technology — JSON [{"title","desc"}]', type: 'json' },
    { name: 'success_stories', label: 'Detail: success stories — JSON [{"patient","condition","story"}]', type: 'json' },
    { name: 'faq', label: 'Detail: FAQ — JSON [{"q","a"}]', type: 'json' },
  ],
};

export default function AdminSpecialities() { return <CollectionAdmin config={config} />; }
