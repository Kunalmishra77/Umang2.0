import { ASSETS } from '../utils/imageAssets';

export const specialitiesData = {
  'cardiac': {
    title: "Cardiology and Cardiac Sciences",
    subtitle: "Advanced Heart Care Center",
    desc: "Comprehensive heart care with state-of-the-art cath lab, invasive and non-invasive cardiology, emergency cardiac care, and cardiac surgery coordination. Our facility is equipped for 24×7 life-saving interventional procedures.",
    img: ASSETS.CARDIAC,
    category: "surgical",
    procedures: [
      "Coronary Angiography (Diagnostic)",
      "Angioplasty with Stenting (PTCA)",
      "24×7 Emergency Angioplasty",
      "Pacemaker Implantation",
      "Heart Failure Management",
      "Cardiac Surgery Coordination"
    ],
    tech: [
      { title: "Super-Specialty Cath Lab", desc: "Equipped with advanced imaging for emergency stenting." },
      { title: "2D Echocardiography", desc: "Detailed heart chamber and valve assessment." },
      { title: "Treadmill Test (TMT)", desc: "Monitoring heart response to physical stress." }
    ],
    bullets: ["24/7 Cath Lab", "Emergency Angioplasty", "Dedicated 7-bed CCU"],
    emergencyCallout: "Severe chest pain, crushing sensation, or pain radiating to arm/jaw? Call +91 89297 33551 immediately.",
    faq: [
      { q: "Do you have heart specialists available 24/7?", a: "Yes, our cardiologists are available round-the-clock for emergency angioplasty and critical cardiac care." },
      { q: "What is Angiography?", a: "It is a diagnostic test to check if heart arteries have blockages, typically taking 20-45 minutes." }
    ]
  },
  'neuro': {
    title: "Neurology and Neurosurgery",
    subtitle: "Brain & Spine Excellence",
    desc: "Diagnosis and treatment of complex neurological disorders affecting the brain, spine, and nervous system. We follow rapid-response stroke protocols and provide 24×7 neuro-trauma care.",
    img: ASSETS.NEURO,
    category: "surgical",
    procedures: [
      "Brain Tumor Excision",
      "Stroke Management (Thrombolysis)",
      "Spine Surgery (MISS)",
      "Head Injury & Trauma Management",
      "Epilepsy Surgery",
      "Deep Brain Stimulation (DBS)"
    ],
    tech: [
      { title: "24×7 CT Scan", desc: "Rapid diagnostics for stroke and trauma." },
      { title: "Neuro-Trauma ICU", desc: "Specialized monitoring for critical neuro patients." },
      { title: "Operating Theatres", desc: "Equipped for complex brain and spine surgeries." }
    ],
    bullets: ["24/7 Neuro-Trauma Care", "Stroke Protocol", "MISS Spine Surgery"],
    faq: [
      { q: "What are the signs of a stroke?", a: "Look for sudden weakness on one side, face drooping, or slurred speech. Call emergency immediately." },
      { q: "Do you perform brain surgery?", a: "Yes, our neurosurgeons perform both elective and emergency brain and spine surgeries." }
    ]
  },
  'ortho': {
    title: "Orthopedics and Trauma",
    subtitle: "Joint & Bone Care",
    desc: "Comprehensive bone, joint, and musculoskeletal care with advanced surgical capabilities and rehabilitation. We provide 24×7 trauma care for fractures and major accidents.",
    img: ASSETS.ORTHO,
    category: "surgical",
    procedures: [
      "Total Knee Replacement (TKR)",
      "Hip Replacement (THR)",
      "Arthroscopic Joint Surgery",
      "Complex Fracture Management",
      "Spine Surgery",
      "Sports Medicine"
    ],
    tech: [
      { title: "Modular OT Suites", desc: "Modular theatres with laminar flow for infection control." },
      { title: "Digital X-Ray", desc: "Instant high-clarity imaging for bone injuries." },
      { title: "Physiotherapy Unit", desc: "Customized post-operative recovery programs." }
    ],
    bullets: ["24/7 Trauma Surgery", "Robotic Joint Replacement", "Sports Injury Clinic"],
    faq: [
      { q: "Do you have emergency fracture care?", a: "Yes, orthopedic surgeons are available 24/7 for immediate stabilization and surgery." },
      { q: "How long is recovery after TKR?", a: "Most patients start walking with support the next day and regain mobility within weeks." }
    ]
  },
  'gastro': {
    title: "Gastroenterology",
    subtitle: "Digestive & Liver Care",
    desc: "Diagnosis and treatment of diseases affecting the digestive system, liver, and pancreas. We offer both medical and advanced surgical gastroenterology options.",
    img: ASSETS.GASTRO,
    category: "medical",
    procedures: [
      "UGI Endoscopy & Colonoscopy",
      "Polypectomy",
      "Laparoscopic Appendix Surgery",
      "Surgery for Piles/Fissure/Fistula",
      "Hepatitis & Liver Management",
      "Bariatric Surgery (To Verify)"
    ],
    tech: [
      { title: "High-Def Endoscopy", desc: "Advanced visualization for accurate biopsies." },
      { title: "FibroScan", desc: "Non-invasive liver health assessment." },
      { title: "Laparoscopic Suite", desc: "Minimally invasive GI surgeries." }
    ],
    bullets: ["Endoscopy & Colonoscopy", "Liver Care Unit", "Laparoscopic GI Surgery"],
    faq: [
      { q: "Is endoscopy painful?", a: "The procedure is performed under sedation, ensuring zero pain and minimal discomfort." },
      { q: "Do you treat jaundice?", a: "Yes, we provide comprehensive diagnosis and management for all types of liver diseases." }
    ]
  },
  'pulmonology': {
    title: "Pulmonology",
    subtitle: "Lung and Respiratory Care",
    desc: "Expert care for respiratory conditions and lung diseases. Our department provides advanced diagnostics and critical respiratory support in our ICUs.",
    img: ASSETS.PULMONOLOGY,
    category: "medical",
    procedures: [
      "Spirometry (PFT)",
      "Bronchoscopy",
      "Thoracoscopy",
      "Sleep Study (To Verify)",
      "Post-COVID Lung Care",
      "Ventilator Support"
    ],
    tech: [
      { title: "Advanced Ventilators", desc: "Life support systems in our ICU units." },
      { title: "Nebulization Unit", desc: "Rapid relief for asthma and COPD exacerbations." },
      { title: "24/7 Emergency Imaging", desc: "Chest X-ray and CT for breathing emergencies." }
    ],
    bullets: ["PFT & Bronchoscopy", "Asthma & COPD Clinic", "24/7 Oxygen Support"],
    faq: [
      { q: "When should I see a pulmonologist?", a: "Consult if you have chronic cough, shortness of breath, or suspected tuberculosis." },
      { q: "Do you have ventilators?", a: "Yes, our ICUs are fully equipped with advanced mechanical ventilators." }
    ]
  },
  'urology': {
    title: "Urology and Nephrology",
    subtitle: "Kidney & Urinary Care",
    desc: "Comprehensive care for kidney, urinary tract, and male reproductive system disorders. We specialize in laser treatments for stones and prostate issues.",
    img: ASSETS.UROLOGY,
    category: "surgical",
    procedures: [
      "Laser Kidney Stone Removal (RIRS/URS)",
      "TURP (Prostate Surgery)",
      "UTI & Kidney Infection Treatment",
      "Dialysis (24×7 - To Verify)",
      "Uro-Oncology",
      "Urethroplasty"
    ],
    tech: [
      { title: "Holmium Laser", desc: "Precision laser for pulverizing stones." },
      { title: "Cystoscopy", desc: "Direct visualization of the bladder and urethra." },
      { title: "KUB Ultrasound", desc: "Specialized imaging for the renal system." }
    ],
    bullets: ["Laser Stone Removal", "Prostate Clinic", "24/7 Dialysis Support"],
    faq: [
      { q: "How are kidney stones treated?", a: "We offer minimally invasive laser treatments like RIRS for faster recovery." },
      { q: "Do you treat prostate enlargement?", a: "Yes, we perform advanced TURP and laser prostatectomies." }
    ]
  },
  'surgery': {
    title: "General and Laparoscopic Surgery",
    subtitle: "Minimally Invasive Care",
    desc: "Surgical treatment of abdominal, breast, thyroid, and soft tissue conditions using modern minimally invasive techniques for faster recovery.",
    img: ASSETS.OT,
    category: "surgical",
    procedures: [
      "Laparoscopic Gallbladder Removal",
      "Hernia Repair (Mesh)",
      "Appendectomy",
      "Thyroid & Breast Surgery",
      "Piles/Fissure/Fistula Surgery",
      "24×7 Emergency Surgeries"
    ],
    tech: [
      { title: "Laminar Flow OTs", desc: "Ensuring zero-infection environments." },
      { title: "HEPA Filtration", desc: "Highest standards of surgical safety." },
      { title: "4K Laparoscopy", desc: "Ultra-high definition surgical visualization." }
    ],
    bullets: ["Modular OTs", "Laparoscopic Expertise", "24/7 Emergency Surgery"],
    faq: [
      { q: "What are the benefits of laparoscopic surgery?", a: "Smaller incisions, less pain, faster discharge, and minimal scarring." },
      { q: "Are emergency surgeries available?", a: "Yes, one operation theatre is reserved 24×7 for emergency surgical cases." }
    ]
  },
  'gynecology': {
    title: "Obstetrics and Gynecology",
    subtitle: "Women's Health Excellence",
    desc: "Comprehensive reproductive health care and gynecological services. From high-risk pregnancy management to advanced laparoscopic surgeries.",
    img: ASSETS.CONSULTATION,
    category: "medical",
    procedures: [
      "Antenatal & Post-natal Care",
      "Normal & C-Section Delivery",
      "High-Risk Pregnancy Management",
      "Laparoscopic Hysterectomy",
      "PCOD/PCOS Management",
      "Infertility Treatment (IUI)"
    ],
    tech: [
      { title: "4D Ultrasound", desc: "Advanced foetal monitoring and diagnostics." },
      { title: "Colposcopy", desc: "Early detection of gynecological cancers." },
      { title: "Foetal Medicine", desc: "Specialized monitoring for high-risk babies." }
    ],
    bullets: ["Normal & High-Risk Delivery", "Laparoscopic Gynae Surgery", "Infertility Clinic"],
    faq: [
      { q: "Do you have a NICU?", a: "NICU status is currently being verified. For high-risk births, please discuss with our medical team." },
      { q: "Do you handle menstrual problems?", a: "Yes, we provide specialized clinics for irregular periods, PCOD, and menopause." }
    ]
  },
  'icu': {
    title: "Critical Care Medicine / ICU",
    subtitle: "Intensive Monitoring & Life Support",
    desc: "Advanced 52-bed ICU infrastructure bringing expertise and technology together for patients who need minute-by-minute observation and life support.",
    img: ASSETS.SVC_ICU_ADVANCE,
    category: "support",
    procedures: [
      "Ventilator Support",
      "Multi-Organ Failure Management",
      "Post-Major Surgery Recovery",
      "Sepsis & Infection Control",
      "Continuous Hemodynamic Monitoring",
      "Emergency Resuscitation"
    ],
    tech: [
      { title: "High-End Ventilators", desc: "Precision respiratory support." },
      { title: "Central Monitoring", desc: "Continuous vitals tracking for every bed." },
      { title: "Intensivist Coverage", desc: "24×7 critical care doctor presence." }
    ],
    bullets: ["52 ICU Beds", "24/7 Intensivist", "Advanced Ventilators"],
    faq: [
      { q: "What is the ICU visiting policy?", a: "Visiting is restricted to 2 short sessions per day to ensure patient safety and infection control." },
      { q: "How many beds are in your ICU?", a: "We have a total of 52 ICU beds, including specialized SICU and CCU units." }
    ]
  }
};
