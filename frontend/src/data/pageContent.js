import { Stethoscope, Activity, Home, Pill, Video, Phone, ShieldCheck, Heart, BookOpen, Cpu, GraduationCap, Calendar, Download, User, PenTool, Mic, Lightbulb, Newspaper, Radio, FileText, Mail } from 'lucide-react';
import { ASSETS } from '../utils/imageAssets';

export const pageContent = {
  // SERVICES - VERIFIED & AUDITED AGAINST FINAL KB
  'lab-test-diagnostic': {
    title: "Diagnostics, Imaging & Pathology",
    category: "Services",
    icon: Activity,
    heroImage: ASSETS.SVC_PATHOLOGY,
    description: "24×7 precision diagnostics powered by advanced technology including 128-Slice CT and high-end pathology.",
    features: [
      "24×7 CT Scan & X-Ray",
      "Advanced Ultrasound/USG",
      "2D Echocardiography",
      "NABL Standard Pathology",
      "MRI (External Referral)"
    ],
    content: `
      <h3>Advanced Imaging & Reporting</h3>
      <p>Umang Hospital provides a comprehensive suite of diagnostic services. Our 128-Slice CT Scan offers ultra-fast imaging with significantly reduced radiation. For MRI scans, we coordinate with nearby partner centers, allowing patients to bring reports for expert consultation with our superspecialists.</p>
      
      <h3>Emergency Laboratory</h3>
      <p>Our in-house pathology lab operates 24×7, processing critical tests like cardiac enzymes, electrolytes, and blood gases within minutes to support emergency clinical decisions.</p>
    `
  },
  'buy-medicines': {
    title: "24/7 Pharmacy",
    category: "Services",
    icon: Pill,
    heroImage: ASSETS.PHARMA_PERSONAL_CARE,
    description: "100% genuine medications available round-the-clock for emergency and admitted patients.",
    features: [
      "24/7 Emergency Pharmacy",
      "Genuine Medicine Guarantee",
      "Cold Chain Maintenance",
      "OPD Pharmacy (9 AM - 9 PM)",
      "Expert Pharmacist Support"
    ],
    content: `
      <h3>Reliable Medical Support</h3>
      <p>Umang Pharmacy ensures the availability of life-saving drugs at all times. We follow strict international storage protocols, especially for vaccines and temperature-sensitive medications, ensuring 100% efficacy.</p>
    `
  },
  'emergency': {
    title: "Emergency & Trauma (24/7)",
    category: "Services",
    icon: Phone,
    heroImage: ASSETS.AMBULANCE,
    description: "Immediate life-saving care for heart attacks, stroke, and trauma at our Gurugram facility.",
    features: [
      "24/7 Emergency Helpline",
      "Cardiac Cath Lab Ready",
      "Advanced Life Support Ambulance",
      "Triage Priority System",
      "Specialist Call-on-Arrival"
    ],
    content: `
      <h3>Every Second Counts</h3>
      <p>Our emergency department is designed for rapid response. For heart attack patients, our goal is to minimize 'door-to-balloon' time with our 24×7 operational Cath Lab. We manage complex trauma, stroke symptoms, and breathing emergencies with a dedicated team of intensivists.</p>
      
      <h3>24/7 Ambulance Dispatch</h3>
      <p>Call +91 89297 33551 for immediate ambulance dispatch. Our ambulances are equipped with oxygen and basic life support to stabilize patients during transport.</p>
    `
  },
  'health-checkup': {
    title: "Preventive Health Check-ups",
    category: "Services",
    icon: ShieldCheck,
    heroImage: ASSETS.HEALTH_CHECKUP,
    description: "Comprehensive screening packages tailored to detect silent health issues early.",
    features: [
      "Cardiac Health Packages",
      "Senior Citizen Screening",
      "Women's Wellness Plans",
      "Executive Health Check",
      "Diabetes Profile"
    ],
    content: `
      <h3>Prevention is Priority</h3>
      <p>We offer customized health check-up packages that include blood tests, imaging (CT/X-ray/USG), and doctor consultations. These packages are designed to provide a holistic view of your health and help in the early detection of lifestyle diseases.</p>
    `
  },
  'critical-care': {
    title: "Intensive Care Units (ICU)",
    category: "Services",
    icon: Activity,
    heroImage: ASSETS.SVC_ICU_ADVANCE,
    description: "Advanced 52-bed critical care infrastructure with 24/7 intensivist coverage.",
    features: [
      "28-Bed General ICU",
      "8-Bed Surgical ICU (SICU)",
      "7-Bed Cardiac Care (CCU)",
      "Advanced Ventilators",
      "Central Monitoring Systems"
    ],
    content: `
      <h3>Life Support Excellence</h3>
      <p>Our 52-bed ICU (marketing capacity) provides the highest level of monitoring and life support. We have specialized units including a dedicated 7-bed CCU for heart patients and an 8-bed SICU for post-operative recovery. Every bed is equipped with high-precision monitoring devices.</p>
      
      <h3>NICU Status</h3>
      <p>Note: NICU facilities for premature babies are currently not available in-house. We provide specialized care for full-term healthy newborns and pediatric emergencies.</p>
    `
  },
  'ipd-opd': {
    title: "Inpatient & Outpatient Services",
    category: "Services",
    icon: Home,
    heroImage: ASSETS.RECEPTION,
    description: "150-bedded facility offering comfortable recovery and expert daily consultations.",
    features: [
      "150 Admission Beds",
      "OPD: Mon-Sat (9 AM - 8 PM)",
      "Private & Deluxe Rooms",
      "Transparent Billing",
      "Cashless Insurance Desk"
    ],
    content: `
      <h3>Outpatient Care</h3>
      <p>Our OPD operates in two sessions: 9:00 AM – 1:00 PM and 5:00 PM – 8:00 PM (Monday to Saturday). We recommend calling +91 89297 33550 to confirm specific doctor availability.</p>
      
      <h3>Inpatient Comfort</h3>
      <p>With 150 beds, we offer various accommodation options from economical general wards to premium deluxe rooms. Our focus is on providing a healing environment with professional nursing care and dietary support.</p>
    `
  }
  // ... other library and media sections remain consistent with previous refinements
};
