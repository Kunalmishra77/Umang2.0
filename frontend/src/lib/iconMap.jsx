import {
  Heart, Brain, Bone, Activity, Scissors, Wind, Home, Video, Pill,
  Stethoscope, Baby, Eye, Ear, Microscope, HeartPulse, Syringe, Bed,
  Ambulance, ShieldCheck, Droplet, Zap,
} from 'lucide-react';

// Map icon NAME (stored in the DB) → lucide component used on the site.
// Keeps the CMS free of React components while preserving the design.
export const ICONS = {
  Heart, Brain, Bone, Activity, Scissors, Wind, Home, Video, Pill,
  Stethoscope, Baby, Eye, Ear, Microscope, HeartPulse, Syringe, Bed,
  Ambulance, ShieldCheck, Droplet, Zap,
};

export const ICON_NAMES = Object.keys(ICONS);

// Resolve an icon: pass through a component (static data), or map a name string.
export const resolveIcon = (icon, fallback = Stethoscope) =>
  typeof icon === 'string' ? (ICONS[icon] || fallback) : (icon || fallback);
