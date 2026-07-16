import React from 'react';
import CollectionAdmin from './CollectionAdmin';

const config = {
  table: 'faqs',
  title: 'FAQs',
  subtitle: 'Questions shown in the homepage FAQ section.',
  primaryField: 'question',
  secondaryField: 'answer',
  defaults: { question: '', answer: '', category: '', is_published: true, sort_order: 0 },
  fields: [
    { name: 'question', label: 'Question', type: 'text' },
    { name: 'answer', label: 'Answer', type: 'textarea' },
    { name: 'category', label: 'Category (optional)', type: 'text' },
    { name: 'sort_order', label: 'Order (0 = first)', type: 'number' },
    { name: 'is_published', label: 'Published', type: 'checkbox', hint: 'Show on the website' },
  ],
};

export default function AdminFaqs() { return <CollectionAdmin config={config} />; }
