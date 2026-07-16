import React from 'react';
import CollectionAdmin from './CollectionAdmin';

const config = {
  table: 'hero_slides',
  title: 'Hero Slides',
  subtitle: 'The rotating banner at the top of the homepage.',
  primaryField: 'heading1',
  secondaryField: 'tag',
  imageField: 'image_url',
  defaults: { tag: '', heading1: '', heading2: '', description: '', image_url: '', cta_label: 'Book Appointment', cta_to: '/doctors', accent: '#1E97B2', is_published: true, sort_order: 0 },
  fields: [
    { name: 'tag', label: 'Eyebrow tag', type: 'text' },
    { name: 'heading1', label: 'Headline line 1', type: 'text' },
    { name: 'heading2', label: 'Headline line 2', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'image_url', label: 'Background image', type: 'image' },
    { name: 'cta_label', label: 'Button text', type: 'text' },
    { name: 'cta_to', label: 'Button link (e.g. /doctors)', type: 'text' },
    { name: 'accent', label: 'Accent color (hex, e.g. #1E97B2)', type: 'text' },
    { name: 'sort_order', label: 'Order (0 = first)', type: 'number' },
    { name: 'is_published', label: 'Published', type: 'checkbox', hint: 'Show on the website' },
  ],
};

export default function AdminHero() { return <CollectionAdmin config={config} />; }
