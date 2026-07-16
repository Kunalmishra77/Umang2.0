import React from 'react';
import CollectionAdmin from './CollectionAdmin';

const config = {
  table: 'gallery',
  title: 'Gallery',
  subtitle: 'Images shown on the public gallery page.',
  primaryField: 'caption',
  secondaryField: 'category',
  imageField: 'image_url',
  defaults: { image_url: '', caption: '', category: '', is_published: true, sort_order: 0 },
  fields: [
    { name: 'image_url', label: 'Image', type: 'image' },
    { name: 'caption', label: 'Caption', type: 'text' },
    { name: 'category', label: 'Category (e.g. Facility, Events)', type: 'text' },
    { name: 'sort_order', label: 'Order (0 = first)', type: 'number' },
    { name: 'is_published', label: 'Published', type: 'checkbox', hint: 'Show on the website' },
  ],
};

export default function AdminGallery() { return <CollectionAdmin config={config} />; }
