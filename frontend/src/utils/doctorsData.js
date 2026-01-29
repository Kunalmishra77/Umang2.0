import { getRandomDoctor } from './imageAssets';

const depts = [
  { name: 'Cardiac Sciences', color: 'text-rose-400', id: 'cardiac' },
  { name: 'Neuro Sciences', color: 'text-violet-400', id: 'neuro' },
  { name: 'Orthopaedics', color: 'text-sky-400', id: 'ortho' },
  { name: 'Gastroenterology', color: 'text-amber-400', id: 'gastro' },
  { name: 'Oncology', color: 'text-emerald-400', id: 'oncology' },
  { name: 'Pediatrics', color: 'text-pink-400', id: 'pediatrics' },
  { name: 'General Surgery', color: 'text-blue-400', id: 'surgery' },
  { name: 'Nephrology', color: 'text-teal-400', id: 'nephrology' },
  { name: 'Pulmonology', color: 'text-cyan-400', id: 'pulmonology' },
  { name: 'Urology', color: 'text-indigo-400', id: 'urology' }
];

const firstNames = [
  'Arjun', 'Sarah', 'Vikram', 'Priya', 'Robert', 'Emily', 'Ankit', 'Neha', 'Manmohan', 
  'Rohit', 'Sahil', 'Shubham', 'Aditi', 'Raj', 'Sonia', 'Karan', 'Pooja', 'Amit', 
  'Suresh', 'Anita', 'Deepak', 'Meera', 'Rakesh', 'Sunita', 'Vivek', 'Riya'
];
const femaleNames = ['Sarah', 'Priya', 'Emily', 'Neha', 'Aditi', 'Sonia', 'Pooja', 'Anita', 'Meera', 'Sunita', 'Riya'];

const lastNames = [
  'Sharma', 'Johnson', 'Singh', 'Patel', 'Wilson', 'Chen', 'Gupta', 'Kumar', 'Arora', 
  'Anand', 'Yadav', 'Kapoor', 'Verma', 'Reddy', 'Nair', 'Malhotra', 'Bhatia', 'Saxena',
  'Joshi', 'Mehta', 'Chopra', 'Desai', 'Jain', 'Agarwal', 'Mishra', 'Pandey'
];

export const doctors = Array.from({ length: 60 }).map((_, i) => {
  const dept = depts[i % depts.length];
  const firstName = firstNames[i % firstNames.length];
  const lastName = lastNames[(i + Math.floor(i / firstNames.length)) % lastNames.length];
  const isFemale = femaleNames.includes(firstName);
  
  return {
    id: i + 1,
    name: `Dr. ${firstName} ${lastName}`,
    dept: dept.name,
    deptId: dept.id,
    deptColor: dept.color,
    role: i % 8 === 0 ? 'Director & Head' : (i % 3 === 0 ? 'Senior Consultant' : 'Consultant'),
    exp: `${8 + (i % 25)} Years`,
    image: getRandomDoctor(isFemale ? 'female' : 'male'),
    rating: (4.5 + (i % 5) * 0.1).toFixed(1),
    cases: 2000 + (i * 123),
    loc: i % 3 === 0 ? 'Gurugram' : (i % 3 === 1 ? 'Delhi NCR' : 'Noida'),
    about: `Dr. ${firstName} ${lastName} is a renowned specialist in ${dept.name} with over ${8 + (i % 25)} years of experience. Dedicated to providing comprehensive care and advanced treatment protocols.`,
    tags: ['Certified', 'Board Member', 'Top Specialist', 'Gold Medalist', 'Award Winner'].slice(0, 1 + (i % 4)),
    nextSlot: i % 2 === 0 ? 'Today' : 'Tomorrow'
  };
});
