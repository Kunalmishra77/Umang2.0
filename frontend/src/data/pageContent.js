import { Stethoscope, Activity, Home, Pill, Video, Phone, ShieldCheck, Heart, BookOpen, Cpu, GraduationCap, Calendar, Download, User, PenTool, Mic, Lightbulb, Newspaper, Radio, FileText } from 'lucide-react';

export const pageContent = {
  // SERVICES
  'second-opinion': {
    title: "Second Opinion",
    category: "Services",
    icon: Stethoscope,
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    description: "When it comes to your health, certainty is everything. Our Second Opinion service connects you with world-leading specialists to review your diagnosis and treatment plan.",
    features: [
      "Review by Senior Consultants",
      "Detailed Report Analysis",
      "Video Consultation Options",
      "Treatment Plan Validation",
      "Peace of Mind"
    ],
    content: `
      <h3>Why Seek a Second Opinion?</h3>
      <p>A second medical opinion can be a game-changer. It provides confirmation of a diagnosis, offers alternative treatment perspectives, and ensures you are on the right path to recovery. At Umang Hospital, our multidisciplinary board of experts reviews complex cases to provide comprehensive insights.</p>
      
      <h3>Our Process</h3>
      <p>We have streamlined the process to be as stress-free as possible. Simply upload your reports, and our team will assign the most relevant specialist to your case. Within 48 hours, you will receive a detailed assessment and an opportunity to discuss the findings directly with the doctor.</p>
    `
  },
  'lab-test-diagnostic': {
    title: "Lab Test & Diagnostics",
    category: "Services",
    icon: Activity,
    heroImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
    description: "Precision diagnostics powered by advanced technology. Accurate results, delivered quickly.",
    features: [
      "NABL Accredited Labs",
      "Home Sample Collection",
      "24/7 Operational",
      "Digital Reports",
      "Advanced Imaging (MRI, CT, PET)"
    ],
    content: `
      <h3>State-of-the-art Technology</h3>
      <p>Our diagnostic center is equipped with the latest generation of medical imaging and pathology equipment. From routine blood tests to complex genetic profiling, we ensure the highest level of accuracy in every report.</p>
      
      <h3>Patient-Centric Approach</h3>
      <p>We understand that waiting for results can be anxious. That's why we prioritize speed without compromising quality. Most routine test results are available within 4-6 hours via our secure online portal.</p>
    `
  },
  'home-care': {
    title: "Home Care Services",
    category: "Services",
    icon: Home,
    heroImage: "https://images.unsplash.com/photo-1584515933487-9dca71d603a1?auto=format&fit=crop&q=80",
    description: "Bringing hospital-quality care to the comfort and safety of your home.",
    features: [
      "ICU Setup at Home",
      "Physiotherapy Visits",
      "Nursing Care",
      "Post-Surgical Care",
      "Elderly Companionship"
    ],
    content: `
      <h3>Healing at Home</h3>
      <p>Research shows that patients recover faster in familiar surroundings. Our Home Care division bridges the gap between hospital and home, providing professional medical support for patients who are bedridden, elderly, or recovering from major surgeries.</p>
      
      <h3>Customized Care Plans</h3>
      <p>Every patient is unique. Our care managers work with your primary doctor to design a personalized home care plan that covers medication management, vitals monitoring, and rehabilitation exercises.</p>
    `
  },
  'buy-medicines': {
    title: "Pharmacy & Medicines",
    category: "Services",
    icon: Pill,
    heroImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80",
    description: "Genuine medicines from trusted sources, delivered 24/7 to your doorstep.",
    features: [
      "24/7 Home Delivery",
      "Genuine Medicine Guarantee",
      "Prescription Refill Reminders",
      "Cold Chain Storage",
      "Expert Pharmacist Advice"
    ],
    content: `
      <h3>Your Trusted Pharmacy</h3>
      <p>Umang Pharmacy is committed to providing only 100% genuine medications. We maintain strict quality controls and storage conditions to ensure the efficacy of every drug we dispense.</p>
      
      <h3>Convenience First</h3>
      <p>Upload your prescription via our app or website, and our team will verify and dispatch your medicines immediately. We also offer specialized medication counseling to help you understand dosage and side effects.</p>
    `
  },
  'telemedicine': {
    title: "Telemedicine",
    category: "Services",
    icon: Video,
    heroImage: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80",
    description: "Consult with top specialists from anywhere in the world via secure video calls.",
    features: [
      "HD Video Consultations",
      "Digital Prescriptions",
      "Secure Health Records",
      "Multi-specialty Access",
      "Follow-up Ease"
    ],
    content: `
      <h3>Healthcare Without Borders</h3>
      <p>Distance should not be a barrier to quality healthcare. Our Telemedicine platform connects you with Umang Hospital's top specialists, whether you are in a remote village or a different country.</p>
      
      <h3>Seamless Experience</h3>
      <p>Book an appointment, consult via high-definition video, and receive your digital prescription instantly. It's the perfect solution for second opinions, routine follow-ups, and minor ailments.</p>
    `
  },
  'emergency': {
    title: "Emergency & Trauma",
    category: "Services",
    icon: Phone,
    heroImage: "https://images.unsplash.com/photo-1516574187841-693018f33663?auto=format&fit=crop&q=80",
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
    title: "Preventive Health Checkups",
    category: "Services",
    icon: ShieldCheck,
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
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
  'elder-care': {
    title: "Elder Care (Geriatrics)",
    category: "Services",
    icon: Heart,
    heroImage: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?auto=format&fit=crop&q=80",
    description: "Compassionate, specialized care tailored to the unique needs of senior citizens.",
    features: [
      "Geriatric Assessment",
      "Dementia Care",
      "Fall Prevention Program",
      "Palliative Care",
      "Social Support Groups"
    ],
    content: `
      <h3>Aging with Dignity</h3>
      <p>Our Geriatrics department focuses on optimizing function and quality of life for older adults. We address complex health needs, including chronic disease management, mobility issues, and cognitive health.</p>
    `
  },

  // HEALTH LIBRARY
  'treatments': {
    title: "Medical Treatments",
    category: "Health Library",
    icon: Stethoscope,
    heroImage: "https://images.unsplash.com/photo-1551076882-68b47d82a8da?auto=format&fit=crop&q=80",
    description: "A comprehensive guide to the medical and surgical procedures performed at Umang Hospital.",
    features: ["Surgical Procedures", "Non-Invasive Therapies", "Rehabilitation Protocols", "Pre-op Guides", "Recovery Timelines"],
    content: `<h3>Understanding Your Treatment</h3><p>Knowledge reduces anxiety. In this section, we provide detailed, easy-to-understand explanations of various treatments, from angioplasty to knee replacement. Learn about the procedure, risks, benefits, and what to expect during recovery.</p>`
  },
  'technologies': {
    title: "Advanced Technologies",
    category: "Health Library",
    icon: Cpu,
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?auto=format&fit=crop&q=80",
    description: "Explore the cutting-edge medical technology that powers our clinical excellence.",
    features: ["Robotic Surgery", "AI in Diagnostics", "Linear Accelerators", "3D Printing", "Smart ICUs"],
    content: `<h3>Innovation in Healthcare</h3><p>We believe in staying ahead of the curve. Our hospital invests in the latest medical technologies to improve precision and patient outcomes. Discover how robotic assistants and AI algorithms are revolutionizing surgery and diagnosis at Umang.</p>`
  },
  'ailments': {
    title: "Ailments & Conditions",
    category: "Health Library",
    icon: BookOpen,
    heroImage: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80",
    description: "Encyclopedia of symptoms, causes, and treatments for common and rare diseases.",
    features: ["Symptom Checker", "Disease Guides", "Prevention Tips", "Risk Factors", "When to see a Doctor"],
    content: `<h3>Knowledge is Power</h3><p>Browse our extensive library of medical conditions. Whether you are researching a chronic illness like diabetes or an acute condition like appendicitis, our medically reviewed articles provide reliable information you can trust.</p>`
  },
  'knowledge-center': {
    title: "Knowledge Center",
    category: "Health Library",
    icon: GraduationCap,
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    description: "Resources for medical professionals, students, and health enthusiasts.",
    features: ["CME Programs", "Case Studies", "Medical Journals", "Research Papers", "Webinars"],
    content: `<h3>For the Medical Community</h3><p>Umang Hospital is also an academic institution. Access our repository of clinical case studies, research publications, and recorded lectures from our Continuous Medical Education (CME) sessions.</p>`
  },
  'events': {
    title: "Events & Workshops",
    category: "Health Library",
    icon: Calendar,
    heroImage: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80",
    description: "Upcoming health camps, seminars, and community outreach programs.",
    features: ["Health Camps", "Blood Donation Drives", "Marathons", "Health Talks", "Support Group Meetings"],
    content: `<h3>Engaging the Community</h3><p>Stay updated with our calendar of events. We regularly organize free health checkup camps, awareness walks, and expert talks on topics like heart health, cancer awareness, and mental well-being.</p>`
  },
  'downloads': {
    title: "Patient Downloads",
    category: "Health Library",
    icon: Download,
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    description: "Essential forms, brochures, and guides for your hospital visit.",
    features: ["Admission Forms", "Insurance Checklists", "Hospital Map", "Patient Rights Policy", "Diet Charts"],
    content: `<h3>Easy Access</h3><p>Save time at the hospital by downloading and filling out necessary forms in advance. You can also find helpful brochures about our departments and patient guides to help you navigate your stay.</p>`
  },

  // PATIENT CORNER
  'patient-stories': {
    title: "Patient Stories",
    category: "Patient Corner",
    icon: User,
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    description: "Inspiring journeys of recovery and resilience from our patients.",
    features: ["Video Testimonials", "Written Reviews", "Before/After", "Recovery Diaries", "Interviews"],
    content: `<h3>Voices of Hope</h3><p>Read real stories from people who have overcome immense health challenges. These narratives not only highlight our clinical success but also the indomitable human spirit. Share your own story to inspire others.</p>`
  },
  'blogs': {
    title: "Health Blogs",
    category: "Patient Corner",
    icon: PenTool,
    heroImage: "https://images.unsplash.com/photo-1499750310159-52f0f83ad497?auto=format&fit=crop&q=80",
    description: "Tips, trends, and medical insights from our expert doctors.",
    features: ["Lifestyle Tips", "Disease Awareness", "Diet & Nutrition", "Mental Health", "Parenting Guides"],
    content: `<h3>Stay Informed</h3><p>Our blog covers a wide range of topics, from simple lifestyle changes to boost immunity to in-depth explanations of complex surgeries. Curated by our doctors, these articles are your daily dose of health wisdom.</p>`
  },
  'podcasts': {
    title: "Umang Health Podcast",
    category: "Patient Corner",
    icon: Mic,
    heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80",
    description: "Tune in to expert discussions on health, wellness, and medical breakthroughs.",
    features: ["Doctor Interviews", "Q&A Sessions", "Health Myths Busted", "Patient Spotlights", "Wellness Series"],
    content: `<h3>Listen on the Go</h3><p>Prefer listening over reading? Our podcast series brings you conversations with top specialists. We discuss common health concerns, debunk myths, and share actionable advice for a healthier life.</p>`
  },
  'patient-information-literature': {
    title: "Patient Information",
    category: "Patient Corner",
    icon: FileText,
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    description: "Detailed guides and brochures for patient education.",
    features: ["Disease Booklets", "Post-discharge Care", "Medication Guides", "Exercise Pamphlets", "Nutrition Handbooks"],
    content: `<h3>Empowering Patients</h3><p>We believe that an educated patient recovers better. Access our library of information leaflets and booklets designed to help you understand your condition and manage your health effectively at home.</p>`
  },
  'breakthrough-cases': {
    title: "Breakthrough Cases",
    category: "Patient Corner",
    icon: Lightbulb,
    heroImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80",
    description: "Highlighting complex and rare medical cases successfully treated at Umang.",
    features: ["Rare Surgeries", "Complex Diagnoses", "Multi-organ Transplants", "Emergency Saves", "Innovation in Care"],
    content: `<h3>Medical Miracles</h3><p>Explore case studies of patients who came to us with little hope and left with a new lease on life. These cases demonstrate our team's ability to handle the most challenging medical scenarios with expertise and compassion.</p>`
  },

  // MEDIA CENTER
  'press-release': {
    title: "Press Releases",
    category: "Media Center",
    icon: Newspaper,
    heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80",
    description: "Official announcements and news from Umang Hospital.",
    features: ["Hospital News", "New Launches", "Partnerships", "Awards & Accolades", "Corporate Updates"],
    content: `<h3>Official News</h3><p>Keep up with the latest developments at Umang Group of Hospitals. From the inauguration of new wings to strategic partnerships and national awards, find all our official statements here.</p>`
  },
  'media-coverage': {
    title: "Media Coverage",
    category: "Media Center",
    icon: Video,
    heroImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80",
    description: "Umang Hospital in the news - print, digital, and broadcast.",
    features: ["Newspaper Articles", "TV Features", "Online Mentions", "Magazine Interviews", "Doctor Quotes"],
    content: `<h3>In the Spotlight</h3><p>See what the media is saying about us. We are frequently featured in leading national dailies and news channels for our clinical achievements and contributions to public health.</p>`
  },
  'newsletters': {
    title: "Newsletters",
    category: "Media Center",
    icon: Mail,
    heroImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80",
    description: "Our monthly health digest delivered to your inbox.",
    features: ["Monthly Editions", "Health Tips", "Doctor Columns", "Event Recaps", "Subscription"],
    content: `<h3>Umang Pulse</h3><p>Subscribe to our monthly newsletter, 'Umang Pulse'. It's packed with seasonal health tips, updates from our departments, and inspiring stories from our community.</p>`
  },
  'media-connect': {
    title: "Media Connect",
    category: "Media Center",
    icon: Radio,
    heroImage: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80",
    description: "Resources and contacts for journalists and media professionals.",
    features: ["Media Kit", "Spokesperson Contact", "Image Gallery", "Fact Sheet", "Interview Requests"],
    content: `<h3>For the Press</h3><p>Are you a journalist looking for expert medical opinion or information about our hospital? Connect with our corporate communications team for prompt responses, high-resolution assets, and interview scheduling.</p>`
  }
};
