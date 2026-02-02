import { Stethoscope, Activity, Home, Pill, Video, Phone, ShieldCheck, Heart, BookOpen, Cpu, GraduationCap, Calendar, Download, User, PenTool, Mic, Lightbulb, Newspaper, Radio, FileText, Mail } from 'lucide-react';

export const pageContent = {
  // SERVICES - VERIFIED & AUDITED
  'lab-test-diagnostic': {
    title: "Diagnostics, Imaging & Pathology",
    category: "Services",
    icon: Activity,
    heroImage: "/assets/images/lab-diagnostics-mri.jpg",
    description: "Precision diagnostics powered by advanced technology. Accurate results, delivered quickly.",
    features: [
      "NABL Accredited Labs",
      "CT Scan & MRI",
      "Pathology & Blood Tests",
      "Digital Reports",
      "Advanced Imaging"
    ],
    content: `
      <h3>State-of-the-art Technology</h3>
      <p>Our diagnostic center is equipped with the latest generation of medical imaging and pathology equipment. From routine blood tests to complex genetic profiling, we ensure the highest level of accuracy in every report.</p>
      
      <h3>Patient-Centric Approach</h3>
      <p>We understand that waiting for results can be anxious. That's why we prioritize speed without compromising quality. Most routine test results are available within 4-6 hours via our secure online portal.</p>
    `
  },
  'buy-medicines': {
    title: "Pharmacy",
    category: "Services",
    icon: Pill,
    heroImage: "/assets/images/service-pharmacy.jpg",
    description: "Genuine medicines from trusted sources, delivered 24/7 to your doorstep.",
    features: [
      "24/7 Availability",
      "Genuine Medicine Guarantee",
      "Prescription Refill Reminders",
      "Cold Chain Storage",
      "Expert Pharmacist Advice"
    ],
    content: `
      <h3>Your Trusted Pharmacy</h3>
      <p>Umang Pharmacy is committed to providing only 100% genuine medications. We maintain strict quality controls and storage conditions to ensure the efficacy of every drug we dispense.</p>
    `
  },
  'emergency': {
    title: "Emergency & Trauma (24/7)",
    category: "Services",
    icon: Phone,
    heroImage: "/assets/images/service-ambulance.jpg",
    description: "Round-the-clock emergency care backed by rapid response teams and advanced life support.",
    features: [
      "24/7 ACLS Ambulances",
      "Dedicated Trauma Center",
      "Stroke & Heart Attack Ready",
      "Poison Control Center",
      "Disaster Management Team"
    ],
    content: `
      <h3>Every Second Counts</h3>
      <p>Our Emergency Department is staffed by fellowship-trained emergency physicians and nurses 24/7. We follow international triage protocols to ensure that critical patients receive immediate attention.</p>
      
      <h3>Advanced Life Support</h3>
      <p>Our fleet of GPS-enabled ambulances is equipped with portable ventilators and defibrillators, acting as 'ICUs on wheels' to stabilize patients during transport.</p>
    `
  },
  'health-checkup': {
    title: "Preventive Health Check-ups",
    category: "Services",
    icon: ShieldCheck,
    heroImage: "/assets/images/service-health-checkup.jpg",
    description: "Invest in your health today for a better tomorrow with our comprehensive screening packages.",
    features: [
      "Customized Packages",
      "Same-day Reports",
      "Lifestyle Counseling",
      "Cardiac Profiling",
      "Cancer Screening"
    ],
    content: `
      <h3>Prevention is Better Than Cure</h3>
      <p>Lifestyle diseases are on the rise. Our health checkup packages are designed to detect silent health issues early, when they are most treatable. From basic screenings to comprehensive full-body scans, we have a package for every age and risk profile.</p>
    `
  },
  'critical-care': {
    title: "ICU / NICU / PICU",
    category: "Services",
    icon: Activity,
    heroImage: "/assets/images/infrastructure-icu.jpg",
    description: "[CONTENT REQUIRED FROM UMANG HOSPITAL]",
    features: [
      "[CONTENT REQUIRED FROM UMANG HOSPITAL]"
    ],
    content: `
      <h3>[CONTENT REQUIRED FROM UMANG HOSPITAL]</h3>
      <p>[CONTENT REQUIRED FROM UMANG HOSPITAL]</p>
    `
  },
  'ipd-opd': {
    title: "Inpatient & Outpatient Services",
    category: "Services",
    icon: Home,
    heroImage: "/assets/images/hospital-reception.jpg",
    description: "[CONTENT REQUIRED FROM UMANG HOSPITAL]",
    features: [
      "[CONTENT REQUIRED FROM UMANG HOSPITAL]"
    ],
    content: `
      <h3>[CONTENT REQUIRED FROM UMANG HOSPITAL]</h3>
      <p>[CONTENT REQUIRED FROM UMANG HOSPITAL]</p>
    `
  },

  // HEALTH LIBRARY
  'treatments': {
    title: "Medical Treatments",
    category: "Health Library",
    icon: Stethoscope,
    heroImage: "/assets/images/infrastructure-ot.jpg",
    description: "A comprehensive guide to the medical and surgical procedures performed at Umang Hospital.",
    features: ["Surgical Procedures", "Non-Invasive Therapies", "Rehabilitation Protocols", "Pre-op Guides", "Recovery Timelines"],
    content: `<h3>Understanding Your Treatment</h3><p>Knowledge reduces anxiety. In this section, we provide detailed, easy-to-understand explanations of various treatments, from angioplasty to knee replacement. Learn about the procedure, risks, benefits, and what to expect during recovery.</p>`
  },
  'technologies': {
    title: "Advanced Technologies",
    category: "Health Library",
    icon: Cpu,
    heroImage: "/assets/images/lab-diagnostics-mri.jpg",
    description: "Explore the cutting-edge medical technology that powers our clinical excellence.",
    features: ["Robotic Surgery", "AI in Diagnostics", "Linear Accelerators", "3D Printing", "Smart ICUs"],
    content: `<h3>Innovation in Healthcare</h3><p>We believe in staying ahead of the curve. Our hospital invests in the latest medical technologies to improve precision and patient outcomes. Discover how robotic assistants and AI algorithms are revolutionizing surgery and diagnosis at Umang.</p>`
  },
  'ailments': {
    title: "Ailments & Conditions",
    category: "Health Library",
    icon: BookOpen,
    heroImage: "/assets/images/doctor-consultation.jpg",
    description: "Encyclopedia of symptoms, causes, and treatments for common and rare diseases.",
    features: ["Symptom Checker", "Disease Guides", "Prevention Tips", "Risk Factors", "When to see a Doctor"],
    content: `<h3>Knowledge is Power</h3><p>Browse our extensive library of medical conditions. Whether you are researching a chronic illness like diabetes or an acute condition like appendicitis, our medically reviewed articles provide reliable information you can trust.</p>`
  },
  'knowledge-center': {
    title: "Knowledge Center",
    category: "Health Library",
    icon: GraduationCap,
    heroImage: "/assets/images/knowledge-center-cme.jpg",
    description: "Resources for medical professionals, students, and health enthusiasts.",
    features: ["CME Programs", "Case Studies", "Medical Journals", "Research Papers", "Webinars"],
    content: `<h3>For the Medical Community</h3><p>Umang Hospital is also an academic institution. Access our repository of clinical case studies, research publications, and recorded lectures from our Continuous Medical Education (CME) sessions.</p>`
  },
  'events': {
    title: "Events & Workshops",
    category: "Health Library",
    icon: Calendar,
    heroImage: "/assets/images/event-health-camp.jpg",
    description: "Upcoming health camps, seminars, and community outreach programs.",
    features: ["Health Camps", "Blood Donation Drives", "Marathons", "Health Talks", "Support Group Meetings"],
    content: `<h3>Engaging the Community</h3><p>Stay updated with our calendar of events. We regularly organize free health checkup camps, awareness walks, and expert talks on topics like heart health, cancer awareness, and mental well-being.</p>`
  },
  'downloads': {
    title: "Patient Downloads",
    category: "Health Library",
    icon: Download,
    heroImage: "/assets/images/hospital-reception.jpg",
    description: "Essential forms, brochures, and guides for your hospital visit.",
    features: ["Admission Forms", "Insurance Checklists", "Hospital Map", "Patient Rights Policy", "Diet Charts"],
    content: `<h3>Easy Access</h3><p>Save time at the hospital by downloading and filling out necessary forms in advance. You can also find helpful brochures about our departments and patient guides to help you navigate your stay.</p>`
  },

  // PATIENT CORNER
  'patient-stories': {
    title: "Patient Stories",
    category: "Patient Corner",
    icon: User,
    heroImage: "/assets/images/patient-room.jpg",
    description: "Inspiring journeys of recovery and resilience from our patients.",
    features: ["Video Testimonials", "Written Reviews", "Before/After", "Recovery Diaries", "Interviews"],
    content: `<h3>Voices of Hope</h3><p>Read real stories from people who have overcome immense health challenges. These narratives not only highlight our clinical success but also the indomitable human spirit. Share your own story to inspire others.</p>`
  },
  'blogs': {
    title: "Health Blogs",
    category: "Patient Corner",
    icon: PenTool,
    heroImage: "/assets/images/knowledge-center-cme.jpg",
    description: "Tips, trends, and medical insights from our expert doctors.",
    features: ["Lifestyle Tips", "Disease Awareness", "Diet & Nutrition", "Mental Health", "Parenting Guides"],
    content: `<h3>Stay Informed</h3><p>Our blog covers a wide range of topics, from simple lifestyle changes to boost immunity to in-depth explanations of complex surgeries. Curated by our doctors, these articles are your daily dose of health wisdom.</p>`
  },
  'podcasts': {
    title: "Umang Health Podcast",
    category: "Patient Corner",
    icon: Mic,
    heroImage: "/assets/images/media-press-meet.jpg",
    description: "Tune in to expert discussions on health, wellness, and medical breakthroughs.",
    features: ["Doctor Interviews", "Q&A Sessions", "Health Myths Busted", "Patient Spotlights", "Wellness Series"],
    content: `<h3>Listen on the Go</h3><p>Prefer listening over reading? Our podcast series brings you conversations with top specialists. We discuss common health concerns, debunk myths, and share actionable advice for a healthier life.</p>`
  },
  'patient-information-literature': {
    title: "Patient Information",
    category: "Patient Corner",
    icon: FileText,
    heroImage: "/assets/images/hospital-reception.jpg",
    description: "Detailed guides and brochures for patient education.",
    features: ["Disease Booklets", "Post-discharge Care", "Medication Guides", "Exercise Pamphlets", "Nutrition Handbooks"],
    content: `<h3>Empowering Patients</h3><p>We believe that an educated patient recovers better. Access our library of information leaflets and booklets designed to help you understand your condition and manage your health effectively at home.</p>`
  },
  'breakthrough-cases': {
    title: "Breakthrough Cases",
    category: "Patient Corner",
    icon: Lightbulb,
    heroImage: "/assets/images/infrastructure-icu.jpg",
    description: "Highlighting complex and rare medical cases successfully treated at Umang.",
    features: ["Rare Surgeries", "Complex Diagnoses", "Multi-organ Transplants", "Emergency Saves", "Innovation in Care"],
    content: `<h3>Medical Miracles</h3><p>Explore case studies of patients who came to us with little hope and left with a new lease on life. These cases demonstrate our team's ability to handle the most challenging medical scenarios with expertise and compassion.</p>`
  },

  // MEDIA CENTER
  'press-release': {
    title: "Press Releases",
    category: "Media Center",
    icon: Newspaper,
    heroImage: "/assets/images/media-press-meet.jpg",
    description: "Official announcements and news from Umang Hospital.",
    features: ["Hospital News", "New Launches", "Partnerships", "Awards & Accolades", "Corporate Updates"],
    content: `<h3>Official News</h3><p>Keep up with the latest developments at Umang Group of Hospitals. From the inauguration of new wings to strategic partnerships and national awards, find all our official statements here.</p>`
  },
  'media-coverage': {
    title: "Media Coverage",
    category: "Media Center",
    icon: Video,
    heroImage: "/assets/images/media-press-meet.jpg",
    description: "Umang Hospital in the news - print, digital, and broadcast.",
    features: ["Newspaper Articles", "TV Features", "Online Mentions", "Magazine Interviews", "Doctor Quotes"],
    content: `<h3>In the Spotlight</h3><p>See what the media is saying about us. We are frequently featured in leading national dailies and news channels for our clinical achievements and contributions to public health.</p>`
  },
  'newsletters': {
    title: "Newsletters",
    category: "Media Center",
    icon: Mail,
    heroImage: "/assets/images/hospital-building-exterior.jpg",
    description: "Our monthly health digest delivered to your inbox.",
    features: ["Monthly Editions", "Health Tips", "Doctor Columns", "Event Recaps", "Subscription"],
    content: `<h3>Umang Pulse</h3><p>Subscribe to our monthly newsletter, 'Umang Pulse'. It's packed with seasonal health tips, updates from our departments, and inspiring stories from our community.</p>`
  },
  'media-connect': {
    title: "Media Connect",
    category: "Media Center",
    icon: Radio,
    heroImage: "/assets/images/media-press-meet.jpg",
    description: "Resources and contacts for journalists and media professionals.",
    features: ["Media Kit", "Spokesperson Contact", "Image Gallery", "Fact Sheet", "Interview Requests"],
    content: `<h3>For the Press</h3><p>Are you a journalist looking for expert medical opinion or information about our hospital? Connect with our corporate communications team for prompt responses, high-resolution assets, and interview scheduling.</p>`
  }
};

