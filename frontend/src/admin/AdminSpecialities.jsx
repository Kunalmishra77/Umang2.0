import React from 'react';
import CollectionAdmin from './CollectionAdmin';

const config = {
  table: 'specialities',
  title: 'Specialities',
  subtitle: 'Centres of Excellence / departments.',
  primaryField: 'name',
  secondaryField: 'tagline',
  imageField: 'image_url',
  defaults: { name: '', short_name: '', slug: '', category: 'medical', icon: 'Heart', tagline: '', stat: '', stat_label: '', image_url: '', accent: 'from-primary-500 to-primary-700', is_published: true, featured: false, sort_order: 0 },
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
  ],
};

export default function AdminSpecialities() { return <CollectionAdmin config={config} />; }
