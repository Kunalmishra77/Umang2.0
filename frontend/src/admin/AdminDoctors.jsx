import React from 'react';
import CollectionAdmin from './CollectionAdmin';

const config = {
  table: 'doctors',
  title: 'Doctors',
  subtitle: 'Manage the medical team shown across the site.',
  primaryField: 'name',
  secondaryField: 'dept',
  imageField: 'image_url',
  defaults: { name: '', dept: '', dept_slug: '', role: 'Consultant', exp: '', gender: '', image_url: '', about: '', loc: 'Umang Hospital, Gurugram', rating: 4.8, is_published: true, sort_order: 0 },
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'dept', label: 'Department', type: 'text' },
    { name: 'dept_slug', label: 'Department slug (e.g. cardiac)', type: 'text' },
    { name: 'role', label: 'Designation', type: 'text' },
    { name: 'exp', label: 'Experience (e.g. 10+ Years)', type: 'text' },
    { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] },
    { name: 'image_url', label: 'Photo', type: 'image' },
    { name: 'about', label: 'About', type: 'textarea' },
    { name: 'loc', label: 'Location', type: 'text' },
    { name: 'rating', label: 'Rating (e.g. 4.8)', type: 'number' },
    { name: 'sort_order', label: 'Order (0 = first)', type: 'number' },
    { name: 'is_published', label: 'Published', type: 'checkbox', hint: 'Show on the website' },
  ],
};

export default function AdminDoctors() { return <CollectionAdmin config={config} />; }
