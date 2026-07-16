import React from 'react';
import CollectionAdmin from './CollectionAdmin';

const config = {
  table: 'testimonials',
  title: 'Testimonials',
  subtitle: 'Patient stories shown on the homepage.',
  primaryField: 'name',
  secondaryField: 'text',
  imageField: 'image_url',
  defaults: { name: '', text: '', loc: '', dept: '', rating: 5, image_url: '', is_published: true, sort_order: 0 },
  fields: [
    { name: 'name', label: 'Patient name', type: 'text' },
    { name: 'text', label: 'Testimonial', type: 'textarea' },
    { name: 'loc', label: 'Location', type: 'text' },
    { name: 'dept', label: 'Department', type: 'text' },
    { name: 'rating', label: 'Rating (1–5)', type: 'number' },
    { name: 'image_url', label: 'Photo (optional)', type: 'image' },
    { name: 'sort_order', label: 'Order (0 = first)', type: 'number' },
    { name: 'is_published', label: 'Published', type: 'checkbox', hint: 'Show on the website' },
  ],
};

export default function AdminTestimonials() { return <CollectionAdmin config={config} />; }
