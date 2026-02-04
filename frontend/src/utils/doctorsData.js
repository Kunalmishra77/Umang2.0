import doctorsList from '../data/doctors.json';

// Department colors mapping
const deptColors = {
  'cardiac': 'text-rose-400',
  'neuro': 'text-violet-400',
  'ortho': 'text-sky-400',
  'gastro': 'text-amber-400',
  'surgery': 'text-blue-400',
  'nephrology': 'text-teal-400',
  'pulmonology': 'text-cyan-400',
  'urology': 'text-indigo-400',
  'gynecology': 'text-pink-500',
  'physiotherapy': 'text-green-500',
  'pain-management': 'text-orange-500',
  'ent': 'text-yellow-500', // Added for ENT
  'general-medicine': 'text-emerald-500' // Added for Gen Med
};

export const doctors = doctorsList.map(doc => ({
  ...doc,
  dept: doc.specialty,
  deptId: doc.specialtyId,
  deptColor: deptColors[doc.specialtyId] || 'text-blue-400'
}));