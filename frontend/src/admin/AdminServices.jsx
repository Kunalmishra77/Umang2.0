import React from 'react';
import CollectionAdmin from './CollectionAdmin';

const config = {
  table: 'services',
  title: 'Services',
  subtitle: 'Cards shown in the homepage services section.',
  primaryField: 'title',
  secondaryField: 'description',
  imageField: 'image_url',
  defaults: { title: '', path: '', description: '', icon: 'Home', image_url: '', accent: 'from-primary-400 to-primary-600', bg: 'bg-primary-50', is_published: true, sort_order: 0 },
  fields: [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'path', label: 'Link (e.g. /services/telemedicine)', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'icon', label: 'Icon (Home, Video, Pill, Activity, Stethoscope…)', type: 'text' },
    { name: 'image_url', label: 'Image', type: 'image' },
    { name: 'accent', label: 'Accent gradient (e.g. from-primary-400 to-primary-600)', type: 'text' },
    { name: 'bg', label: 'Background (e.g. bg-primary-50)', type: 'text' },
    { name: 'sort_order', label: 'Order (0 = first)', type: 'number' },
    { name: 'is_published', label: 'Published', type: 'checkbox', hint: 'Show on the website' },
  ],
};

export default function AdminServices() { return <CollectionAdmin config={config} />; }
