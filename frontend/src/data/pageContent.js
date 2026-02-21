import { ASSETS } from '../utils/imageAssets';
import { siteConfig } from '../config/siteConfig';

export const pageContent = {
  'infrastructure/ot': {
    title: 'Advanced Modular Operation Theatres',
    subtitle: 'Zero-Infection Surgical Suites',
    heroImage: ASSETS.OT,
    description: 'Our hospital features state-of-the-art modular operation theatres designed to perform complex surgeries with maximum precision and safety.',
    sections: [
      { type: 'stats', data: [
        { label: 'Suites', value: '03' },
        { label: 'Air Quality', value: 'Class 100' },
        { label: 'Success Rate', value: '99%' },
        { label: 'Safety', value: 'NABH Gold' }
      ]},
      { type: 'features', title: 'Surgical Excellence', items: [
        { title: 'Laminar Air Flow', desc: 'Ensures a sterile environment by directing air away from the surgical site.' },
        { title: 'Pendant Systems', desc: 'Ceiling-mounted pendants for medical gases and power.' },
        { title: 'Anti-Static Flooring', desc: 'Preventing electrical interference during procedures.' },
        { title: 'Advanced Imaging', desc: 'Integrated C-arm and endoscopic camera systems.' }
      ]},
      { type: 'text-image', title: 'Precision in Every Procedure', text: 'Our OTs are equipped with high-definition surgical lights and ergonomic tables compatible with all major surgical disciplines.', image: ASSETS.ROBOTIC_SURGERY },
      { type: 'features', title: 'Technology Stack', items: [
        { title: 'Harmonic Scalpel', desc: 'Ultrasonic technology for precise cutting and coagulation.' },
        { title: 'Intra-op Imaging', desc: 'Real-time 3D imaging for complex neuro and ortho cases.' },
        { title: 'Smart Ventilators', desc: 'Advanced life support within the surgical suite.' },
        { title: 'C-Arm (High Res)', desc: 'Mobile X-ray system for minimally invasive guidance.' }
      ]},
      { type: 'text-image', title: 'Infection Control Protocols', text: 'We follow a strict triple-buffer entry system and chemical sterilization for all surgical instruments.', image: ASSETS.ABOUT_NABH },
      { type: 'highlights', title: 'Operational Highlights', items: ['24/7 Availability', 'Specialized Anesthesia Team', 'Immediate ICU Transfer', 'Digital Record Keeping', 'Recovery Bay Access', 'HEPA Air Flow'] },
      { type: 'testimonials', items: [
        { name: 'Dr. Vikram Sethi', role: 'Director', text: 'The infrastructure here allows us to perform high-stakes surgeries with complete confidence.' }
      ]},
      { type: 'stats', data: [
        { label: 'Air Changes', value: '25+/Hour' },
        { label: 'Pressure', value: 'Positive' },
        { label: 'Uptime', value: '100%' },
        { label: 'Staffing', value: 'ACLS Trained' }
      ]},
      { type: 'faq', items: [
        { q: 'What is a modular OT?', a: 'A modular OT is a prefabricated unit with integrated systems for sterile air and data management.' },
        { q: 'Are OTs available for emergency surgeries?', a: 'Yes, we have a dedicated emergency OT ready 24/7 for trauma cases.' }
      ]}
    ]
  },
  'infrastructure/rooms': {
    title: 'Patient Rooms & Wards',
    subtitle: 'Healing in Comfort',
    heroImage: ASSETS.PATIENT_ROOM,
    description: 'Accommodation options designed to provide a restful and healing environment for our patients.',
    sections: [
      { type: 'stats', data: [
        { label: 'Total Beds', value: '150' },
        { label: 'Suite Types', value: '05' },
        { label: 'Service', value: '24/7' },
        { label: 'Hygiene', value: '100%' }
      ]},
      { type: 'grid', title: 'Accommodation Options', items: [
        { title: 'Presidential Suite', desc: 'Luxurious two-room suite with private lounge and kitchenette.' },
        { title: 'Deluxe Room', desc: 'Spacious private room with modern amenities and attender bed.' },
        { title: 'Twin Sharing', desc: 'Cost-effective semi-private rooms with shared washroom.' },
        { title: 'General Ward', desc: 'Well-ventilated wards with centralized nursing support.' }
      ]},
      { type: 'features', title: 'Room Amenities', items: [
        { title: 'Nurse Call System', desc: 'Instant communication with the nursing station.' },
        { title: 'Customized Meals', desc: 'Dietician-approved meals served in-room.' },
        { title: 'Smart Entertainment', desc: 'LED TVs with multiple channels for relaxation.' },
        { title: 'High-Speed Wi-Fi', desc: 'Connectivity for patients and family members.' }
      ]},
      { type: 'text-image', title: 'Hygienic and Safe Environment', text: 'Our rooms undergo deep cleaning twice daily using hospital-grade disinfectants to ensure zero infection risk.', image: ASSETS.ABOUT_100_BEDS },
      { type: 'stats', data: [
        { label: 'Nursing Ratio', value: '1:4' },
        { label: 'Cleaning', value: '2x Daily' },
        { label: 'Room Service', value: '24/7' },
        { label: 'Air Filtered', value: 'Yes' }
      ]},
      { type: 'features', title: 'Additional Services', items: [
        { title: 'Laundry Service', desc: 'Managed clothing care for long-stay patients.' },
        { title: 'Guest Bed', desc: 'Comfortable stay options for one attender.' },
        { title: 'Valet Parking', desc: 'Stress-free vehicle management for families.' },
        { title: 'Spiritual Room', desc: 'Access to quiet prayer and meditation zones.' }
      ]},
      { type: 'faq', items: [
        { q: 'Is there a limit on visitors?', a: 'Only two visitors are allowed per patient during visiting hours (4 PM - 7 PM).' },
        { q: 'Are meals included?', a: 'Patient meals are included as per the doctor\'s recommendation. Guest meals can be ordered.' }
      ]}
    ]
  },
  'infrastructure/radiology': {
    title: 'Radiology & Imaging Wing',
    subtitle: 'High-Precision Diagnostics',
    heroImage: ASSETS.MRI_SCAN,
    description: 'Equipped with the region\'s first 3 Tesla wide-bore MRI and 128 slice CT scan for rapid and accurate diagnosis.',
    sections: [
      { type: 'stats', data: [
        { label: 'MRI Tech', value: '3.0 Tesla' },
        { label: 'CT Slices', value: '128 Slice' },
        { label: 'Reporting', value: '24/7' },
        { label: 'Accuracy', value: '99.9%' }
      ]},
      { type: 'features', title: 'Imaging Technologies', items: [
        { title: '3.0T Wide-Bore MRI', desc: 'Non-claustrophobic design with AI-assisted high-resolution imaging.' },
        { title: '128 Slice CT Scan', desc: 'Ultrafast scanning with 40% lower radiation dosage for patient safety.' },
        { title: 'Digital X-Ray', desc: 'Instant high-quality digital radiographs for immediate review.' },
        { title: 'Color Doppler', desc: 'Advanced blood flow imaging for cardiac and vascular health.' }
      ]},
      { type: 'text-image', title: 'Rapid Diagnostic Reporting', text: 'Our radiology department is linked to a centralized PACS system, allowing specialists to view images instantly from any part of the hospital.', image: ASSETS.CT_SCAN },
      { type: 'highlights', title: 'Patient Safety', items: ['Lead-shielded zones', 'Low-dose protocols', 'Certified radiographers', 'Quiet MRI technology', 'Quick turnaround', 'Digital reports'] },
      { type: 'faq', items: [
        { q: 'Do I need a prior appointment?', a: 'Most X-rays and routine scans are walk-in. MRI and CT scans require a prior appointment.' },
        { q: 'How soon can I get reports?', a: 'Routine reports are typically ready within 4-6 hours. Urgent cases are prioritized.' }
      ]}
    ]
  },
  'infrastructure/ambulance': {
    title: 'Ambulance & Emergency Fleet',
    subtitle: 'Life-Saving Mobility',
    heroImage: ASSETS.AMBULANCE,
    description: 'Our advanced life support ambulances are mobile ICUs, equipped to handle any critical medical emergency during transit.',
    sections: [
      { type: 'stats', data: [
        { label: 'Response', value: '< 15 Mins' },
        { label: 'ALCS Fleet', value: '05 Units' },
        { label: 'Staffing', value: 'Paramedic' },
        { label: 'Coverage', value: 'NCR Wide' }
      ]},
      { type: 'features', title: 'On-Board Equipment', items: [
        { title: 'Portable Ventilator', desc: 'Advanced respiratory support for patients in transit.' },
        { title: 'Defibrillator', desc: 'Immediate cardiac intervention capability during emergencies.' },
        { title: 'Oxygen Support', desc: 'Centralized medical gas system within the ambulance.' },
        { title: 'GPS Tracking', desc: 'Real-time monitoring and coordination with the hospital ER.' }
      ]},
      { type: 'text-image', title: 'Golden Hour Protocols', text: 'Our emergency team is trained to initiate treatment protocols as soon as the ambulance reaches the patient, maximizing survival odds.', image: ASSETS.AMBULANCE },
      { type: 'highlights', title: 'Fleet Features', items: ['ACLS Certified', '24/7 Availability', 'Inter-hospital transfer', 'Trauma-ready kits', 'On-call doctor', 'Smart Dispatch'] },
      { type: 'faq', items: [
        { q: 'How to book an ambulance?', a: 'Call our emergency helpline at +91 89297 33551 for immediate dispatch.' },
        { q: 'Is the service available outside Gurugram?', a: 'Yes, we provide long-distance transfers across the NCR region.' }
      ]}
    ]
  },
  'infrastructure/help-desk': {
    title: '24/7 Patient Help Desk',
    subtitle: 'At Your Service',
    heroImage: ASSETS.RECEPTION,
    description: 'Our dedicated patient coordination team is here to assist you with admissions, billing, and general hospital inquiries.',
    sections: [
      { type: 'stats', data: [
        { label: 'Uptime', value: '24/7' },
        { label: 'Languages', value: 'Multi' },
        { label: 'Avg Wait', value: '< 5 Mins' },
        { label: 'Rating', value: '4.9/5' }
      ]},
      { type: 'features', title: 'Help Desk Services', items: [
        { title: 'Admission Guide', desc: 'Seamless paperwork and room allocation for new patients.' },
        { title: 'Billing Queries', desc: 'Transparent explanation of clinical costs and insurance claims.' },
        { title: 'International Desk', desc: 'Concierge services for patients traveling from outside India.' },
        { title: 'General Inquiries', desc: 'Help with hospital directions, timings, and specialist availability.' }
      ]},
      { type: 'text-image', title: 'Digital Help Portal', text: 'You can also reach our desk via WhatsApp or our online inquiry hub for remote assistance.', image: ASSETS.ABOUT_MAIN },
      { type: 'highlights', title: 'Quick Links', items: ['Insurance Desk', 'TPA Help', 'Visitor Pass', 'Room Upgrade', 'Feedback Desk', 'Discharge Hub'] },
      { type: 'faq', items: [
        { q: 'Where is the help desk located?', a: 'The main help desk is located at the ground floor reception, visible from the entrance.' },
        { q: 'Can I get help with insurance?', a: 'Yes, we have a dedicated TPA desk right next to the help desk for all claim queries.' }
      ]}
    ]
  }
};
