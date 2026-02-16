import { ASSETS } from '../utils/imageAssets';

export const specialitiesData = {
  'cardiac': {
    title: "Cardiac Sciences (Cardiology & Cardiothoracic Care)",
    subtitle: "Advanced Heart Care Center",
    desc: "Our Centre of Excellence for Cardiac Sciences is renowned for its comprehensive care, from prevention to advanced interventional procedures. We treat the most complex heart conditions with precision and compassion.",
    img: ASSETS.CARDIAC,
    procedures: [
      "Angiography & Angioplasty (PTCA)",
      "Coronary Artery Bypass Graft (CABG)",
      "Valve Replacement & Repair (TAVR/TAVI)",
      "Pacemaker & ICD Implantation",
      "Pediatric Cardiac Surgery",
      "Heart Failure Management"
    ],
    tech: [
      { title: "Philips Azurion 7 Cath Lab", desc: "For high-precision interventional procedures." },
      { title: "3D Echocardiography", desc: "Real-time advanced cardiac imaging." },
      { title: "ECMO Support", desc: "Extracorporeal Membrane Oxygenation for critical care." }
    ],
    faq: [
      { q: "What is the golden hour in heart attack?", a: "The first hour after a heart attack is critical. Immediate treatment within this window significantly increases survival rates." },
      { q: "Do you perform minimally invasive heart surgery?", a: "Yes, we specialize in minimally invasive cardiac surgeries (MICS) for faster recovery." }
    ]
  },
  'neuro': {
    title: "Neuro Sciences (Neurology & Neurosurgery)",
    subtitle: "Brain & Spine Excellence",
    desc: "Dedicated to the diagnosis and treatment of complex neurological disorders. Our team of neurosurgeons and neurologists provides world-class care for brain tumors, stroke, and spine conditions.",
    img: ASSETS.NEURO,
    procedures: [
      "Brain Tumor Excision",
      "Stroke Management (Thrombolysis)",
      "Spine Surgery (MISS)",
      "Epilepsy Surgery",
      "Deep Brain Stimulation (DBS)",
      "Aneurysm Coiling & Clipping"
    ],
    tech: [
      { title: "Neuro-Navigation System", desc: "Precision guidance for brain surgeries." },
      { title: "Advanced MRI (3T)", desc: "High-resolution brain and spine imaging." },
      { title: "Stroke ICU", desc: "Dedicated intensive care for stroke patients." }
    ],
    faq: [
      { q: "What are the signs of a stroke?", a: "Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency." },
      { q: "Do you treat migraines?", a: "Yes, we offer comprehensive management plans for chronic migraines and headaches." }
    ]
  },
  'ortho': {
    title: "Orthopaedics & Joint Replacement",
    subtitle: "Joint & Bone Care",
    desc: "Restoring mobility and quality of life. Our Orthopaedics department specializes in joint replacements, sports injuries, and complex trauma management using the latest robotic-assisted techniques.",
    img: ASSETS.ORTHO,
    procedures: [
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "Arthroscopic Sports Surgery",
      "Complex Trauma Surgery",
      "Spine Deformity Correction",
      "Shoulder Replacement"
    ],
    tech: [
      { title: "Robotic Joint Replacement", desc: "Mako robotic arm for precision surgery." },
      { title: "Computer Navigation", desc: "Ensures perfect alignment of implants." },
      { title: "Bone Densitometry (DEXA)", desc: "For osteoporosis screening and management." }
    ],
    faq: [
      { q: "How long is the recovery after knee replacement?", a: "Most patients start walking with support the next day and return to normal activities within 4-6 weeks." },
      { q: "Do you treat sports injuries?", a: "Yes, we have a specialized sports medicine division for athletes." }
    ]
  },
  'gastro': {
    title: "Gastroenterology",
    subtitle: "Digestive & Liver Care",
    desc: "Comprehensive care for digestive, liver, and pancreatic disorders. We offer advanced endoscopic procedures and hepatobiliary surgeries.",
    img: ASSETS.GASTRO,
    procedures: [
      "Endoscopy & Colonoscopy",
      "ERCP (Stone Removal)",
      "Liver Transplant",
      "Bariatric (Weight Loss) Surgery",
      "GI Cancer Surgery",
      "Hepatitis Management"
    ],
    tech: [
      { title: "SpyGlass Cholangioscopy", desc: "Direct visualization of bile ducts." },
      { title: "FibroScan", desc: "Non-invasive liver stiffness measurement." },
      { title: "High-Definition Endoscopy", desc: "For early cancer detection." }
    ],
    faq: [
      { q: "Is endoscopy painful?", a: "It is performed under sedation, so you will not feel any pain during the procedure." },
      { q: "Do you treat fatty liver?", a: "Yes, we offer lifestyle counseling and medical management for fatty liver disease." }
    ]
  },
  'pulmonology': {
    title: "Pulmonology & Respiratory Medicine",
    subtitle: "Breath of Life",
    desc: "Expert care for all respiratory conditions. From asthma and COPD to interstitial lung diseases and sleep disorders, our pulmonologists help you breathe easier.",
    img: ASSETS.PULMONOLOGY,
    procedures: [
      "Bronchoscopy",
      "Thoracoscopy",
      "Sleep Study (Polysomnography)",
      "PFT (Pulmonary Function Test)",
      "Lung Cancer Screening",
      "Allergy Testing"
    ],
    tech: [
      { title: "EBUS (Endobronchial Ultrasound)", desc: "For minimally invasive staging of lung cancer." },
      { title: "Sleep Lab", desc: "State-of-the-art facility for sleep disorder diagnosis." },
      { title: "Advanced Ventilators", desc: "For critical respiratory support." }
    ],
    faq: [
      { q: "What is a sleep study?", a: "It monitors your sleep patterns, breathing, and oxygen levels overnight to diagnose sleep apnea." },
      { q: "How do you treat COPD?", a: "We offer pulmonary rehabilitation, medication management, and oxygen therapy." }
    ]
  },
  'surgery': {
    title: "General & Laparoscopic Surgery",
    subtitle: "Minimally Invasive Surgery",
    desc: "Our General Surgery department performs a wide range of procedures, focusing on laparoscopic and minimally invasive techniques for faster recovery and minimal scarring.",
    img: ASSETS.OT,
    procedures: [
      "Laparoscopic Cholecystectomy (Gallbladder)",
      "Hernia Repair",
      "Appendectomy",
      "Thyroid Surgery",
      "Breast Surgery",
      "Trauma Surgery"
    ],
    tech: [
      { title: "4K Laparoscopy System", desc: "Crystal clear visualization for safe surgery." },
      { title: "Harmonic Scalpel", desc: "For precise cutting and coagulation." },
      { title: "Laser Surgery", desc: "For piles, fissures, and fistulas." }
    ],
    faq: [
      { q: "What is laparoscopic surgery?", a: "It is a keyhole surgery performed through small incisions, resulting in less pain and faster recovery." },
      { q: "How long do I need to stay in the hospital?", a: "For most laparoscopic procedures, patients are discharged within 24-48 hours." }
    ]
  },
  'urology': {
    title: "Urology & Andrology",
    subtitle: "Kidney & Urinary Care",
    desc: "Specialized care for urinary tract and reproductive health. We treat kidney stones, prostate issues, and urological cancers with advanced laser and robotic techniques.",
    img: ASSETS.UROLOGY,
    procedures: [
      "Laser Lithotripsy (Kidney Stones)",
      "TURP (Prostate Surgery)",
      "Uro-Oncology Surgery",
      "Reconstructive Urology",
      "Andrology & Infertility",
      "Kidney Transplant"
    ],
    tech: [
      { title: "Holmium Laser (100W)", desc: "Powerful laser for stone pulverization." },
      { title: "Urodynamics Lab", desc: "For evaluating bladder function." },
      { title: "Flexible Ureteroscopy", desc: "For accessing difficult stones." }
    ],
    faq: [
      { q: "What is the treatment for kidney stones?", a: "Small stones may pass with medication. Larger stones are treated with laser lithotripsy or shockwave therapy." },
      { q: "Do you treat male infertility?", a: "Yes, we offer comprehensive evaluation and treatment for male reproductive health." }
    ]
  },
  'oncology': {
    title: "Medical & Surgical Oncology",
    subtitle: "Cancer Care Excellence",
    desc: "Our Oncology department provides comprehensive cancer care, including chemotherapy, targeted therapy, and precision surgical oncology, with a focus on holistic healing.",
    img: ASSETS.RADIOLOGY,
    procedures: [
      "Chemotherapy & Immunotherapy",
      "Surgical Tumor Excision",
      "Breast Cancer Surgery",
      "GI & Hepato-biliary Oncology",
      "Preventive Screening",
      "Palliative Oncology"
    ],
    tech: [
      { title: "Day Care Chemotherapy", desc: "Comfortable environment for infusion therapy." },
      { title: "Precision Histopathology", desc: "Accurate tumor staging and molecular analysis." },
      { title: "Robotic Surgical Oncology", desc: "Minimally invasive cancer surgeries." }
    ],
    faq: [
      { q: "What is immunotherapy?", a: "It is a type of cancer treatment that helps your immune system fight cancer." },
      { q: "Do you offer cancer screening?", a: "Yes, we have specialized screening packages for breast, cervical, and oral cancers." }
    ]
  },
  'internal': {
    title: "Internal Medicine",
    subtitle: "Comprehensive Adult Care",
    desc: "The foundation of healthcare at Umang. Our Internal Medicine department manages chronic illnesses, infectious diseases, and complex multi-system disorders with a preventive approach.",
    img: ASSETS.SVC_GENERAL_MEDICINE,
    procedures: [
      "Management of Diabetes & Hypertension",
      "Infectious Disease Treatment",
      "Geriatric (Elderly) Care",
      "Preventive Health Checkups",
      "Critical Care Consultation",
      "Lifestyle Counseling"
    ],
    tech: [
      { title: "Point-of-Care Diagnostics", desc: "Rapid bedside testing for immediate results." },
      { title: "Digital Vitals Monitoring", desc: "Real-time tracking of patient health parameters." },
      { title: "Advanced Pathology Lab", desc: "24/7 NABL certified diagnostic support." }
    ],
    faq: [
      { q: "How often should I get a health checkup?", a: "Adults above 30 should get a comprehensive health screening at least once a year." },
      { q: "Do you manage chronic lifestyle diseases?", a: "Yes, we specialize in long-term management of diabetes, thyroid disorders, and hypertension." }
    ]
  },
  'nephrology': {
    title: "Nephrology",
    subtitle: "Kidney Health & Dialysis",
    desc: "Dedicated to the prevention, diagnosis, and treatment of kidney diseases. Our state-of-the-art dialysis unit and transplant program offer hope and healing.",
    img: ASSETS.DIALYSIS,
    procedures: [
      "Hemodialysis",
      "Peritoneal Dialysis",
      "Kidney Biopsy",
      "Kidney Transplant Care",
      "Critical Care Nephrology",
      "Hypertension Management"
    ],
    tech: [
      { title: "Online HDF Machines", desc: "For better toxin removal during dialysis." },
      { title: "CRRT", desc: "Continuous Renal Replacement Therapy for critical patients." },
      { title: "RO Water Plant", desc: "Ensures ultra-pure water for dialysis." }
    ],
    faq: [
      { q: "What is dialysis?", a: "It is a procedure to remove waste and excess fluid from the blood when the kidneys stop working properly." },
      { q: "How can I prevent kidney disease?", a: "Control blood pressure and diabetes, stay hydrated, and avoid over-the-counter painkillers." }
    ]
  },
  'pain-management': {
    title: "Pain Management",
    subtitle: "Relief & Rehabilitation",
    desc: "Chronic pain can significantly impact quality of life. Our Pain Management clinic offers multidisciplinary care to diagnose, treat, and manage chronic pain conditions using advanced interventional techniques and holistic therapies.",
    img: ASSETS.RECEPTION,
    procedures: [
      "Interventional Pain Procedures",
      "Nerve Blocks & Epidural Injections",
      "Radiofrequency Ablation",
      "Spinal Cord Stimulation",
      "Myofascial Trigger Point Therapy",
      "Cancer Pain Management"
    ],
    tech: [
      { title: "C-Arm Fluoroscopy", desc: "Real-time imaging for precise injection placement." },
      { title: "Radiofrequency Generator", desc: "For targeted nerve ablation therapy." }
    ],
    faq: [
      { q: "What conditions do you treat?", a: "We treat back pain, neck pain, sciatica, arthritis, neuropathic pain, and cancer-related pain." },
      { q: "Is pain management surgery?", a: "Most treatments are minimally invasive procedures or non-surgical therapies, distinct from major surgery." }
    ]
  },
  'gynecology': {
    title: "Gynecology & Obstetrics",
    subtitle: "Women's Health Excellence",
    desc: "Comprehensive care for women at every stage of life. From adolescence to menopause, our expert gynecologists provide personalized treatment for reproductive health, maternity care, and gynecological surgeries.",
    img: ASSETS.CONSULTATION,
    procedures: [
      "Normal & High-Risk Delivery",
      "Laparoscopic Hysterectomy",
      "Infertility Treatment",
      "PCOS/PCOD Management",
      "Menopause Clinic",
      "Gynecological Oncology Screening"
    ],
    tech: [
      { title: "4D Ultrasound", desc: "Detailed imaging for fetal monitoring and diagnostics." },
      { title: "Colposcopy", desc: "For early detection of cervical cancer." },
      { title: "Laparoscopic Suite", desc: "Minimally invasive gynecological surgeries." }
    ],
    faq: [
      { q: "Do you handle high-risk pregnancies?", a: "Yes, our team is equipped to manage complex pregnancies with a fully backed NICU." },
      { q: "What is minimally invasive hysterectomy?", a: "It involves removing the uterus through small incisions, leading to less pain and faster recovery compared to open surgery." }
    ]
  },
  'physiotherapy': {
    title: "Physiotherapy & Rehabilitation",
    subtitle: "Restoring Movement & Strength",
    desc: "Our physiotherapy department works closely with orthopedics and neurology teams to help patients recover faster. We offer customized rehabilitation programs for post-surgery recovery, sports injuries, and chronic mobility issues.",
    img: ASSETS.NURSE_CARE,
    procedures: [
      "Post-Operative Rehabilitation",
      "Sports Injury Management",
      "Neuro-Rehabilitation (Stroke/Spine)",
      "Manual Therapy",
      "Electrotherapy",
      "Geriatric Rehabilitation"
    ],
    tech: [
      { title: "Laser Therapy Unit", desc: "Advanced laser for pain relief and tissue healing." },
      { title: "Ultrasound Therapy", desc: "For treating deep tissue injuries." },
      { title: "Gait Training Lab", desc: "Specialized equipment to improve walking and balance." }
    ],
    faq: [
      { q: "Do I need a referral for physiotherapy?", a: "While a referral is helpful, you can also consult our physiotherapists directly for assessment." },
      { q: "How long is a typical session?", a: "Sessions usually last between 45 to 60 minutes, depending on the personalized treatment plan." }
    ]
  }
};


