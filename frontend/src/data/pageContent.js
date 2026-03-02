import { ASSETS } from '../utils/imageAssets';
import { siteConfig } from '../config/siteConfig';

export const pageContent = {
  'infrastructure/ot': {
    title: 'Advanced Modular Operation Theatres',
    subtitle: 'Zero-Infection Surgical Suites',
    heroImage: ASSETS.ROBOTIC_SURGERY,
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
      { type: 'highlights', eyebrow: 'Clinical Precision', title: 'OT Benchmarks.', sideTitle: 'Surgical Vanguard', sideDesc: 'Our modular suites are engineered for zero-infection outcomes and real-time hemodynamic monitoring.', items: ['24/7 Availability', 'Specialized Anesthesia Team', 'Immediate ICU Transfer', 'Digital Record Keeping', 'Recovery Bay Access', 'HEPA Air Flow'] },
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
    description: 'Accommodation options designed to provide a restful and healing environment for our patients, featuring ergonomic design and 24/7 care.',
    sections: [
      { type: 'stats', data: [
        { label: 'Total Beds', value: '150' },
        { label: 'Suite Types', value: '05' },
        { label: 'Service', value: '24/7' },
        { label: 'Hygiene', value: '100%' }
      ]},
      { type: 'grid', title: 'Accommodation Options', items: [
        { title: 'Presidential Suite', desc: 'Luxurious two-room suite with private lounge, kitchenette, and dedicated attender space.' },
        { title: 'Deluxe Room', desc: 'Spacious private room with modern amenities, refrigerator, and attender sofa-bed.' },
        { title: 'Standard Private', desc: 'Comfortable private room with attached washroom and basic electronic controls.' },
        { title: 'Twin Sharing', desc: 'Cost-effective semi-private rooms with shared washroom and individual privacy curtains.' },
        { title: 'Economy Ward', desc: 'Well-ventilated multi-bed wards with centralized nursing support and storage lockers.' },
        { title: 'Day Care Unit', desc: 'Specially designed for short-stay procedures and post-op observation.' },
        { title: 'NICU Suites', desc: 'Neonatal intensive care units with specialized mother-baby bonding zones.' },
        { title: 'Isolation Wing', desc: 'Negative pressure rooms for infectious diseases ensuring maximum safety.' }
      ]},
      { type: 'features', title: 'Room Amenities', items: [
        { title: 'Nurse Call System', desc: 'Instant 24/7 communication link with the dedicated nursing station.' },
        { title: 'Customized Meals', desc: 'Therapeutic and dietician-approved meals served fresh in-room.' },
        { title: 'Smart Entertainment', desc: 'High-definition LED TVs with premium cable and relaxation channels.' },
        { title: 'High-Speed Wi-Fi', desc: 'Seamless high-bandwidth connectivity for patients and families.' }
      ]},
      { type: 'text-image', title: 'Hygienic and Safe Environment', text: 'Our rooms undergo clinical-grade deep cleaning twice daily using hospital-grade disinfectants. Every room is equipped with HEPA-filtered air vents to ensure zero cross-infection risk and a sterile recovery atmosphere.', image: ASSETS.SVC_HYGIENE_BEDS },      { type: 'stats', data: [
        { label: 'Nursing Ratio', value: '1:4' },
        { label: 'Cleaning', value: '2x Daily' },
        { label: 'Oxygen', value: 'Central' },
        { label: 'Air Filtered', value: 'Yes' }
      ]},
      { type: 'highlights', eyebrow: 'Smart Living', title: 'Ward Benchmarks.', sideTitle: 'Comfort Vanguard', sideDesc: 'Every room is designed with ergonomic patient flow and high-tech monitoring to aid clinical recovery.', items: ['Paperless Records', 'In-room Pharmacy Delivery', 'Biometric Access', 'Centralized Monitoring', 'Daily Clinician Rounds', 'In-room Diagnostic Service'] },
      { type: 'text-image', title: 'Ergonomic Patient Beds', text: 'All rooms feature fully-motorized multi-function beds allowing patients to adjust their position for maximum comfort and clinical requirements at the touch of a button.', image: ASSETS.SVC_ICU_ADVANCE },
      { type: 'features', title: 'Additional Services', items: [
        { title: 'Laundry Service', desc: 'Professionally managed clothing care for long-stay patients and attenders.' },
        { title: 'Guest Bed', desc: 'Dedicated stay options within the room for one primary caregiver.' },
        { title: 'Valet Parking', desc: 'Stress-free vehicle management for families during admission.' },
        { title: 'Spiritual Room', desc: 'Access to quiet prayer and meditation zones within the facility.' }
      ]},
      { type: 'highlights', eyebrow: 'Safety First', title: 'Security Benchmarks.', sideTitle: 'Safety Shield', sideDesc: 'Our facility integrates advanced fire detection and anti-skid infrastructure for complete patient security.', items: ['Smoke Detectors', 'Fire Sprinklers', 'Anti-skid Flooring', 'Emergency Power Backup', 'Grab Rails in Toilets', 'Child-safety Locks'] },
      { type: 'text-image', title: 'Family Connect Lounge', text: 'We provide dedicated lounges near wards for families to rest and consult with doctors, ensuring they stay informed about their loved one\'s progress.', image: ASSETS.ABOUT_GLOBAL },
      { type: 'faq', items: [
        { q: 'Is there a limit on visitors?', a: 'Only two visitors are allowed per patient during visiting hours (4 PM - 7 PM) to ensure a quiet healing environment.' },
        { q: 'Are meals included?', a: 'Patient meals are included as per the doctor\'s recommendation and dietician\'s plan. Guest meals can be ordered from our cafeteria.' },
        { q: 'Can I choose my room type?', a: 'Yes, room allocation depends on availability at the time of admission and the type of package chosen.' },
        { q: 'Is 24/7 nursing available?', a: 'Yes, every floor has a dedicated nursing station with 24/7 staffing for immediate assistance.' }
      ]}
    ]
  },
  'infrastructure/radiology': {
    title: 'Radiology & Imaging Wing',
    subtitle: 'High-Precision Diagnostics',
    heroImage: ASSETS.MRI_SCAN,
    description: 'Equipped with the region\'s first 3 Tesla wide-bore MRI and 128 slice CT scan for rapid and accurate diagnosis through high-definition imaging.',
    sections: [
      { type: 'stats', data: [
        { label: 'MRI Tech', value: '3.0 Tesla' },
        { label: 'CT Slices', value: '128 Slice' },
        { label: 'Reporting', value: '24/7' },
        { label: 'Accuracy', value: '99.9%' }
      ]},
      { type: 'features', title: 'Imaging Technologies', items: [
        { title: '3.0T Wide-Bore MRI', desc: 'Non-claustrophobic design with AI-assisted high-resolution imaging for neurological and musculoskeletal scans.' },
        { title: '128 Slice CT Scan', desc: 'Ultrafast scanning with 40% lower radiation dosage for cardiac, pulmonary, and trauma cases.' },
        { title: 'Digital X-Ray', desc: 'Instant high-quality digital radiographs with ultra-low exposure for immediate clinical review.' },
        { title: 'Color Doppler', desc: 'Advanced blood flow imaging using high-frequency sound waves for vascular and cardiac health.' }
      ]},
      { type: 'text-image', title: 'Integrated PACS Network', text: 'Our radiology department is linked to a centralized Picture Archiving and Communication System (PACS), allowing specialists to view images instantly from any part of the hospital, enabling faster clinical decisions.', image: ASSETS.CT_SCAN },
      { type: 'stats', data: [
        { label: 'Radiation', value: 'Low Dose' },
        { label: 'Turnaround', value: '4-6 Hrs' },
        { label: 'Storage', value: 'Digital' },
        { label: 'Uptime', value: '100%' }
      ]},
      { type: 'features', title: 'Specialized Scans', items: [
        { title: 'Cardiac CT Angio', desc: 'Non-invasive visualization of coronary arteries to detect blockages with high precision.' },
        { title: 'Brain Mapping', desc: 'Advanced MRI sequences for detailed neurological evaluation and tumor localization.' },
        { title: 'Whole Body Scans', desc: 'Comprehensive screening for oncology and systemic conditions in a single session.' },
        { title: 'Bone Densitometry', desc: 'Precise measurement of bone mineral density for osteoporosis diagnosis.' }
      ]},
      { type: 'highlights', eyebrow: 'Imaging Mastery', title: 'Precision Hub.', sideTitle: 'Diagnostic Shield', sideDesc: 'We follow ultra-low dose ALARA principles while maintaining highest clinical imaging standards.', items: ['Lead-shielded zones', 'Low-dose protocols', 'Certified radiographers', 'Quiet MRI technology', 'Pregnant patient safety', 'Digital reports'] },
      { type: 'text-image', title: 'Expert Radiologists', text: 'All scans are interpreted by senior consultants with specialization in neuro-radiology, musculoskeletal imaging, and interventional radiology to ensure zero-error reporting.', image: ASSETS.ABOUT_MAIN },
      { type: 'features', title: 'Ultrasonography Wing', items: [
        { title: '4D Ultrasound', desc: 'Real-time 3D imaging for detailed fetal monitoring and obstetric care.' },
        { title: 'Vascular Doppler', desc: 'Evaluation of venous and arterial blood flow for thrombosis detection.' },
        { title: 'FNA & Biopsy', desc: 'Ultrasound-guided procedures for precise tissue sampling and diagnosis.' },
        { title: 'Level 2 Screening', desc: 'Detailed fetal anomaly screening by specialized fetal medicine experts.' }
      ]},
      { type: 'highlights', eyebrow: 'Instant Access', title: 'Digital Benchmarks.', sideTitle: 'Smart Portal', sideDesc: 'Every report is digitally archived and accessible via our centralized PACS network instantly.', items: ['WhatsApp Reports', 'Email Summary', 'Physical Films', 'Portal Download', 'QR Code Access', 'Historical Tracking'] },
      { type: 'text-image', title: 'Interventional Radiology', text: 'We offer image-guided minimally invasive procedures for drainage, stent placement, and tumor ablation, reducing the need for open surgery.', image: ASSETS.SVC_PATHOLOGY },
      { type: 'faq', items: [
        { q: 'Do I need a prior appointment?', a: 'Routine X-rays and ultrasounds are available for walk-ins. MRI and CT scans require a prior appointment for preparation instructions.' },
        { q: 'How soon can I get reports?', a: 'Standard reports are ready within 4-6 hours. Urgent emergency scans are reported within 30-60 minutes.' },
        { q: 'Is there any radiation risk?', a: 'We use the latest low-dose technology and strict ALARA principles to minimize radiation exposure while maintaining diagnostic quality.' },
        { q: 'Can I get reports on WhatsApp?', a: 'Yes, digital links to your reports and images are shared on your registered mobile number automatically.' }
      ]}
    ]
  },
  'infrastructure/amenities': {
    title: 'Hospital Patient Amenities',
    subtitle: 'Beyond Clinical Care',
    heroImage: ASSETS.HOSPITAL_EXTERIOR,
    description: 'Explore the range of non-clinical facilities designed to make your hospital visit seamless, comfortable, and stress-free.',
    sections: [
      { type: 'stats', data: [
        { label: 'Parking', value: '200+' },
        { label: 'Café', value: '24/7' },
        { label: 'Security', value: 'High' },
        { label: 'WiFi', value: 'Free' }
      ]},
      { type: 'grid', title: 'Convenience Facilities', items: [
        { title: '24/7 Pharmacy', desc: 'Fully stocked pharmacy for all your prescription and healthcare needs.' },
        { title: 'Multi-Cuisine Café', desc: 'Fresh, hygienic, and dietitian-approved meals for visitors and staff.' },
        { title: 'Valet Parking', desc: 'Complimentary parking assistance for patients and emergency arrivals.' },
        { title: 'ATM & Banking', desc: 'On-site cash withdrawal facility for immediate financial requirements.' }
      ]},
      { type: 'features', title: 'Digital Amenities', items: [
        { title: 'Free Guest Wi-Fi', desc: 'Stay connected with your loved ones through our high-speed internet.' },
        { title: 'Smart Kiosks', desc: 'Self-help kiosks for bill payment and report collection.' },
        { title: 'Charging Hubs', desc: 'Dedicated mobile and laptop charging stations in all waiting areas.' },
        { title: 'Tele-Health Booth', desc: 'Private booths for remote consultation with family doctors.' }
      ]},
      { type: 'text-image', title: 'Secure Environment', text: 'The entire facility is under 24/7 CCTV surveillance with a dedicated security team patrolling every floor to ensure the safety of patients and their belongings.', image: ASSETS.RECEPTION },
      { type: 'stats', data: [
        { label: 'Elevators', value: '06 Units' },
        { label: 'Air Quality', value: 'Purified' },
        { label: 'Valet', value: 'Yes' },
        { label: 'Power', value: '100% Back' }
      ]},
      { type: 'highlights', eyebrow: 'Guest Relations', title: 'Comfort Benchmarks.', sideTitle: 'Hospitality Shield', sideDesc: 'Our guest services team ensures your non-clinical needs are met with high efficiency and empathy.', items: ['Ample Seating', 'Drinking Water', 'Prayer Room', 'Gift Shop', 'Newspaper Desk', 'Wheelchair Access'] },
      { type: 'text-image', title: 'Dietary Services', text: 'Our specialized kitchen prepares meals under the supervision of clinical nutritionists, catering to specific therapeutic requirements of various ailments.', image: ASSETS.HOSPITAL_EXTERIOR },
      { type: 'features', title: 'Emergency Amenities', items: [
        { title: 'Ambulance Hub', desc: 'Strategic parking for rapid ambulance dispatch within the hospital.' },
        { title: 'Triage Zone', desc: 'Dedicated comfortable waiting for families of trauma patients.' },
        { title: 'Pharmacy Express', desc: 'Quick counter for life-saving emergency medications.' },
        { title: 'RRT Support', desc: 'Rapid response team accessibility from any public amenity zone.' }
      ]},
      { type: 'highlights', eyebrow: 'Sustainability', title: 'Eco Benchmarks.', sideTitle: 'Green Hub', sideDesc: 'We implement solar energy and waste management systems to reduce our environmental footprint.', items: ['Solar Lighting', 'Rainwater Harvesting', 'Waste Segregation', 'Energy Efficient AC', 'Paperless Billing', 'LED Lights'] },
      { type: 'text-image', title: 'Information & Help Desk', text: 'Located at the heart of the lobby, our guest relations team is available 24/7 to guide you through any non-clinical requirements.', image: ASSETS.ABOUT_100_BEDS },
      { type: 'features', title: 'Spiritual & Wellness', items: [
        { title: 'Prayer Room', desc: 'A serene multifaith prayer hall for meditation and spiritual peace.' },
        { title: 'Healing Garden', desc: 'Outdoor green spaces designed to reduce stress and aid mental recovery.' },
        { title: 'Yoga Zone', desc: 'Dedicated space for supervised therapeutic yoga and breathing exercises.' },
        { title: 'Library Corner', desc: 'Access to health literature and light reading for patients and attenders.' }
      ]},
      { type: 'text-image', title: 'Mother & Child Care', text: 'Specialized lactation rooms and child-play zones designed to make the journey easier for young families.', image: ASSETS.USER_AVATAR },
      { type: 'highlights', title: 'Safety Protocols', items: ['Sanitization Hubs', 'Fire Safety Drills', 'Zero-Noise Policy', 'Emergency Buttons', 'CCTV Network', 'Restricted Access'] },
      { type: 'stats', data: [
        { label: 'Security', value: '24/7' },
        { label: 'Cleanliness', value: 'Audit' },
        { label: 'Green Energy', value: '30%' },
        { label: 'Staffing', value: 'Expert' }
      ]},
      { type: 'faq', items: [
        { q: 'Is there a place for prayer?', a: 'Yes, we have a quiet spiritual room located on the 2nd floor for meditation and prayer.' },
        { q: 'Is Wi-Fi free for everyone?', a: 'Yes, we provide complimentary Wi-Fi for all patients and their attenders throughout the hospital.' },
        { q: 'What are the café timings?', a: 'The main cafeteria is operational from 7:00 AM to 11:00 PM, while the 24/7 coffee shop is always open.' },
        { q: 'Is valet parking safe?', a: 'Absolutely. All vehicles are parked in our secure, CCTV-monitored basement by trained professional drivers.' }
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
      { type: 'highlights', eyebrow: 'Golden Hour', title: 'Life Benchmarks.', sideTitle: 'ER Mobility', sideDesc: 'Our ambulances are essentially mobile ICUs with ACLS life-support kit ready for zero-delay response.', items: ['ACLS Certified', '24/7 Availability', 'Inter-hospital transfer', 'Trauma-ready kits', 'On-call doctor', 'Smart Dispatch'] },
      { type: 'faq', items: [
        { q: 'How to book an ambulance?', a: 'Call our emergency helpline at +91 85880 72727 for immediate dispatch.' },
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
      { type: 'highlights', eyebrow: 'Admin Excellence', title: 'Support Benchmarks.', sideTitle: 'Concierge Desk', sideDesc: 'We ensure a paperless and transparent billing experience for every patient visit.', items: ['Insurance Desk', 'TPA Help', 'Visitor Pass', 'Room Upgrade', 'Feedback Desk', 'Discharge Hub'] },
      { type: 'faq', items: [
        { q: 'Where is the help desk located?', a: 'The main help desk is located at the ground floor reception, visible from the entrance.' },
        { q: 'Can I get help with insurance?', a: 'Yes, we have a dedicated TPA desk right next to the help desk for all claim queries.' }
      ]}
    ]
  },
  'infrastructure/cafeteria': {
    title: 'Nutritional Care & Cafeteria',
    subtitle: 'Healthy Dining Options',
    heroImage: ASSETS.HOSPITAL_EXTERIOR,
    description: 'Our multi-cuisine cafeteria provides hygienic, dietitian-approved meals for patients, staff, and visitors, focusing on nutrition as a core component of recovery.',
    sections: [
      { type: 'stats', data: [
        { label: 'Cuisines', value: '03' },
        { label: 'Uptime', value: '24/7' },
        { label: 'Quality', value: 'FSSAI' },
        { label: 'Daily Meals', value: '500+' }
      ]},
      { type: 'features', title: 'Dining Facilities', items: [
        { title: 'Patient Meal Service', desc: 'Specialized therapeutic diets delivered directly to patient rooms under clinical supervision.' },
        { title: 'Visitor Café', desc: 'A wide range of healthy snacks, beverages, and multi-cuisine full meals for guests.' },
        { title: '24/7 Coffee Shop', desc: 'Freshly brewed coffee, herbal teas, and quick healthy bites available round the clock.' },
        { title: 'Staff Dining Hall', desc: 'Dedicated nutritional zone for our clinical and administrative team members.' }
      ]},
      { type: 'grid', title: 'Cuisine Highlights', items: [
        { title: 'Indian Flavors', desc: 'Nutritious dal, seasonal vegetables, and rotis prepared with minimal oil and spices.' },
        { title: 'Continental Choices', desc: 'Grilled proteins, steamed vegetables, and whole-wheat pastas for a light meal.' },
        { title: 'Healthy Salads', desc: 'Fresh, farm-to-table greens and sprouts rich in essential vitamins and minerals.' },
        { title: 'Detox Juices', desc: 'Freshly squeezed fruit and vegetable juices with zero added preservatives.' },
        { title: 'Breakfast Hub', desc: 'High-protein options including oats, eggs, and traditional Indian breakfast items.' },
        { title: 'Dessert Guilt-Free', desc: 'Low-sugar and fruit-based desserts crafted for diabetic-friendly enjoyment.' }
      ]},
      { type: 'text-image', title: 'Our Nutritional Philosophy', text: 'We believe that nutrition is medicine. Our clinical dietitians work closely with doctors to design meal plans that support the physiological recovery of every patient, ensuring the right balance of proteins, carbs, and micronutrients.', image: ASSETS.ABOUT_MAIN },
      { type: 'stats', data: [
        { label: 'Dietitians', value: '05' },
        { label: 'Audit', value: 'Weekly' },
        { label: 'Seating', value: '120+' },
        { label: 'Freshness', value: '100%' }
      ]},
      { type: 'highlights', eyebrow: 'Food Safety', title: 'Hygiene Benchmarks.', sideTitle: 'Quality Hub', sideDesc: 'Our kitchen maintains clinical-grade hygiene standards with FSSAI certified protocols.', items: ['FSSAI Certified', 'RO Water System', 'Chemical Sanitization', 'Daily Quality Logs', 'Pest Control Sync', 'Steam Sterilization'] },
      { type: 'text-image', title: 'Hygienic Mega-Kitchen', text: 'Our kitchen features industrial-grade stainless steel equipment and specialized zones for veg and non-veg preparation to ensure zero cross-contamination and maximum food safety standards.', image: ASSETS.HOSPITAL_EXTERIOR },
      { type: 'features', title: 'Specialized Therapeutic Diets', items: [
        { title: 'Diabetic Plan', desc: 'Low glycemic index meals designed to maintain stable blood sugar levels.' },
        { title: 'Renal Care', desc: 'Specialized low-protein and electrolyte-balanced diets for kidney health.' },
        { title: 'Post-Op Soft Diet', desc: 'Easily digestible, nutrient-dense liquid and semi-solid recovery meals.' },
        { title: 'Cardiac Heart-Healthy', desc: 'Zero-cholesterol, low-sodium meals to support cardiovascular recovery.' }
      ]},
      { type: 'highlights', eyebrow: 'Meal Logistics', title: 'Dining Benchmarks.', sideTitle: 'Operational Hub', sideDesc: 'We utilize digital ordering and bedside delivery to ensure nutrition reaches you fresh.', items: ['In-room QR Ordering', 'Bedside Delivery', 'Nutritional Counseling', 'Live Feedback', 'Digital Payments', 'Tray Sanitization'] },
      { type: 'text-image', title: 'Eco-Friendly Dining', text: 'We utilize biodegradable packaging for room deliveries and implement strict waste segregation and composting for kitchen organic waste.', image: ASSETS.ABOUT_GLOBAL },
      { type: 'features', title: 'Safety Protocols', items: [
        { title: 'Temperature Control', desc: 'All hot meals are served at optimal temperatures using insulated transport carts.' },
        { title: 'Ingredient Sourcing', desc: 'Daily procurement of fresh produce from certified organic and local vendors.' },
        { title: 'Kitchen Audits', desc: 'Random swab testing and hygiene audits conducted by external clinical agencies.' },
        { title: 'Staff Health Checks', desc: 'Mandatory monthly medical screening for all food handling and service staff.' }
      ]},
      { type: 'highlights', eyebrow: 'Extra Support', title: 'Consulting Benchmarks.', sideTitle: 'Expert Guidance', sideDesc: 'Our dietitians provide one-on-one consulting to help families manage long-term recovery diets.', items: ['Calorie Counting', 'Allergen Alerts', 'Personalized Consulting', 'Family Meal Plans', 'Festive Special Menus', 'Hydration Monitoring'] },
      { type: 'faq', items: [
        { q: 'Are outside meals allowed for patients?', a: 'To maintain nutritional balance and hygiene, outside food is strictly prohibited for patients unless cleared by the consultant.' },
        { q: 'Is there a room service option?', a: 'Yes, visitors and attenders can order from the cafeteria menu for in-room delivery via our QR portal.' },
        { q: 'Do you provide specialized diets?', a: 'Absolutely. We have specialized plans for Diabetic, Cardiac, Renal, and Post-Surgical patients managed by dietitians.' },
        { q: 'What are the café timings?', a: 'The main dining hall is open 7:00 AM - 11:00 PM, while the Express Café is operational 24/7.' }
      ]}
    ]
  },
  'infrastructure/parking': {
    title: 'Ample & Secure Parking',
    subtitle: 'Hassle-Free Arrival',
    heroImage: ASSETS.HOSPITAL_EXTERIOR,
    description: 'We offer extensive parking facilities with 24/7 security and valet services for the convenience of our visitors.',
    sections: [
      { type: 'stats', data: [
        { label: 'Spaces', value: '200+' },
        { label: 'Valet', value: 'Yes' },
        { label: 'CCTV', value: '24/7' },
        { label: 'Access', value: 'Entry 1&2' }
      ]},
      { type: 'features', title: 'Parking Services', items: [
        { title: 'Valet Parking', desc: 'Complimentary valet service at the main entrance for all patients.' },
        { title: 'Emergency Access', desc: 'Dedicated clearways for ambulances and emergency vehicle arrival.' },
        { title: '24/7 Security', desc: 'Round-the-clock monitoring and patrolling for vehicle safety.' },
        { title: 'EV Charging', desc: 'Upcoming facility for electric vehicle charging within the premises.' }
      ]},
      { type: 'highlights', eyebrow: 'Vehicle Safety', title: 'Arrival Benchmarks.', sideTitle: 'Security Shield', sideDesc: 'Our parking zones are monitored by AI-enabled CCTV and professional security personnel.', items: ['Valet Hub', 'Emergency Lane', 'CCTV 24/7', 'Fire Safety', 'Clear Signage', 'Reserved Spots'] },
      { type: 'faq', items: [
        { q: 'Is parking free for patients?', a: 'Parking is complimentary for patients and one visitor vehicle per room.' },
        { q: 'Are there disabled parking spots?', a: 'Yes, dedicated parking spots are reserved near the main entrance for differently-abled visitors.' }
      ]}
    ]
  },
  'patient-corner/podcasts': {
    title: 'Health Audio Podcasts',
    subtitle: 'Expert Advice on the Go',
    heroImage: ASSETS.SVC_TELEMEDICINE,
    description: 'Listen to our senior consultants discussing common health issues, preventive care, and medical breakthroughs.',
    sections: [
      { type: 'grid', title: 'Recent Episodes', items: [
        { title: 'Cardiac Health 101', desc: 'Managing blood pressure and cholesterol in your 40s.' },
        { title: 'Diabetes Management', desc: 'Innovative ways to control sugar levels through lifestyle.' },
        { title: 'Pediatric Nutrition', desc: 'Expert tips on building immunity in growing children.' },
        { title: 'Mental Wellness', desc: 'Understanding and managing stress in a high-paced world.' }
      ]}
    ]
  },
  'patient-corner/patient-information-literature': {
    title: 'Patient Education & Guides',
    subtitle: 'Empowering Your Health Journey',
    heroImage: ASSETS.ABOUT_100_BEDS,
    description: 'Comprehensive guides, brochures, and literature to help you understand your medical conditions and treatment paths.',
    sections: [
      { type: 'features', title: 'Knowledge Resources', items: [
        { title: 'Pre-Surgical Guides', desc: 'Step-by-step instructions on how to prepare for your upcoming surgery.' },
        { title: 'Post-Op Recovery', desc: 'Detailed home care protocols to ensure a smooth recovery after discharge.' },
        { title: 'Insurance Manuals', desc: 'Understanding your TPA benefits and claim processes clearly.' },
        { title: 'Condition Leaflets', desc: 'Simplified information on common chronic and acute ailments.' }
      ]}
    ]
  },
  'patient-experience': {
    title: 'Patient Experience & Rights',
    subtitle: 'Excellence in Clinical Care',
    heroImage: ASSETS.ABOUT_NABH,
    description: 'We are committed to providing a safe, transparent, and compassionate environment for every patient and visitor. At Umang, your health and dignity are our highest priorities.',
    sections: [
      { type: 'stats', data: [
        { label: 'Accreditation', value: 'NABH' },
        { label: 'Lab Quality', value: 'NABL' },
        { label: 'Compliance', value: 'JCI' },
        { label: 'Management', value: 'ISO' }
      ]},
      { type: 'features', title: 'Quality Standards', items: [
        { title: 'NABH Accredited', desc: 'Gold standard for quality healthcare in India, ensuring patient safety and high-quality care.' },
        { title: 'NABL Certified', desc: 'National accreditation for our laboratory services, guaranteeing precision in every test.' },
        { title: 'JCI Aligned', desc: 'International patient safety goals and global care protocols implemented across all departments.' },
        { title: 'ISO 9001:2015', desc: 'Certified quality management systems for seamless hospital operations and administration.' }
      ]},
      { type: 'text-image', title: 'Your Rights as a Patient', text: 'Every patient at Umang has the right to receive respectful care, complete information about their treatment, and privacy regarding their medical data. We adhere strictly to the Charter of Patient Rights.', image: ASSETS.ABOUT_100_BEDS },
      { type: 'grid', title: 'The Patient Charter', items: [
        { title: 'Right to Information', desc: 'Know about your diagnosis, treatment options, risks, and expected costs in a language you understand.' },
        { title: 'Right to Consent', desc: 'Provide informed consent before any procedure or surgery after understanding the implications.' },
        { title: 'Right to Privacy', desc: 'Your medical records and personal data are kept confidential and accessed only by authorized personnel.' },
        { title: 'Right to Choice', desc: 'You have the right to seek a second opinion and choose from available treatment alternatives.' },
        { title: 'Right to Quality', desc: 'Receive treatment that meets established clinical benchmarks and safety protocols.' },
        { title: 'Right to Redressal', desc: 'Share your feedback or raise concerns through our dedicated grievance mechanism without fear.' }
      ]},
      { type: 'highlights', eyebrow: 'Charter of Rights', title: 'Ethical Benchmarks.', sideTitle: 'Patient Sovereignty', sideDesc: 'Our clinical ethics board ensures patient autonomy and transparency in every medical decision.', items: ['Informed Consent', 'Privacy Protection', 'Feedback Mechanism', 'Grievance Redressal', 'Transparent Billing', 'Emergency Priority'] },
      { type: 'features', title: 'Patient Responsibilities', items: [
        { title: 'Honest History', desc: 'Provide accurate information about your past illnesses, medications, and allergies.' },
        { title: 'Follow Instructions', desc: 'Adhere to the prescribed treatment plan and follow hospital safety rules.' },
        { title: 'Respect Others', desc: 'Treat medical staff and other patients with respect and maintain a quiet environment.' },
        { title: 'Financial Obligations', desc: 'Ensure timely settlement of bills and coordinate with your insurance provider.' }
      ]},
      { type: 'text-image', title: 'Visitor Policy & Safety', text: 'To ensure a quiet and healing environment, we request all visitors to adhere to our visiting hours and safety guidelines. We limit visitors to two per patient to maintain clinical hygiene.', image: ASSETS.RECEPTION },
      { type: 'grid', title: 'Safety Benchmarks', items: [
        { title: 'Hand Hygiene', desc: 'Strict protocols for staff and visitors to minimize cross-infection risks.' },
        { title: 'Fire Safety', desc: 'Automated detection systems and regular mock drills for rapid evacuation.' },
        { title: 'Safe Surgery', desc: 'WHO surgical safety checklists followed for every procedure.' },
        { title: 'Medication Safety', desc: 'Double-check protocols for drug administration to ensure zero error.' }
      ]},
      { type: 'highlights', eyebrow: 'Clinical Safety', title: 'Quality Audits.', sideTitle: 'Zero Error Hub', sideDesc: 'We conduct monthly clinical audits to ensure 100% adherence to patient safety goals.', items: ['Infection Control', 'BMW Compliance', 'OT Sterility', 'Staff Training', 'Facility Audit', 'Vitals Accuracy'] },
      { type: 'text-image', title: 'Grievance Redressal', text: 'If you are dissatisfied with any aspect of our service, our Patient Advocate is available 24/7 to resolve your concerns. We aim for a resolution within 4 hours for most administrative queries.', image: ASSETS.ABOUT_GLOBAL },
      { type: 'features', title: 'International Patient Rights', items: [
        { title: 'Cultural Respect', desc: 'Right to receive care that respects your cultural and religious beliefs.' },
        { title: 'Interpreter Access', desc: 'Right to access professional translation services for clinical discussions.' },
        { title: 'Visa Support', desc: 'Dedicated assistance for medical visa extensions and local registrations.' },
        { title: 'Remote Follow-up', desc: 'Right to receive detailed discharge summaries for your local doctors back home.' }
      ]},
      { type: 'faq', items: [
        { q: 'How can I share feedback about my experience?', a: 'You can use the feedback forms available at the nursing stations or visit our help desk. Digital feedback can be submitted via our website inquiry hub.' },
        { q: 'Is my medical data secure?', a: 'Yes, we follow strict data protection protocols and HIPAA-aligned security for all patient records using bank-grade encryption.' },
        { q: 'What are the visiting hours?', a: 'General wards: 4 PM to 7 PM. ICU: 11 AM to 12 PM (limited to one person). No children allowed in ICU zones.' },
        { q: 'Can I request a second opinion?', a: 'Absolutely. You have the right to request a consultation with another specialist within or outside our hospital.' }
      ]}
    ]
  },
  'terms': {
    title: 'Terms of Service',
    subtitle: 'Legal Agreement',
    heroImage: ASSETS.HOSPITAL_EXTERIOR,
    description: 'Please read these terms and conditions carefully before using our services.',
    sections: [
      { type: 'highlights', eyebrow: 'Legal Framework', title: 'Policy Benchmarks.', sideTitle: 'Compliance Desk', sideDesc: 'Our legal framework is designed to protect patient interests and ensure transparent service delivery.', items: ['Patient Consent', 'Billing Transparency', 'Service Usage', 'Data Privacy', 'Liability Limits', 'Appointment Policy'] }
    ]
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    subtitle: 'Data Protection',
    heroImage: ASSETS.HOSPITAL_EXTERIOR,
    description: 'We value your privacy and are committed to protecting your personal and medical data.',
    sections: [
      { type: 'highlights', eyebrow: 'Data Governance', title: 'Privacy Benchmarks.', sideTitle: 'Information Hub', sideDesc: 'We utilize bank-grade encryption to ensure your medical records remain confidential and secure.', items: ['Encryption', 'Limited Access', 'No Third-Party Sharing', 'Patient Control', 'Secure Storage', 'Regular Audits'] }
    ]
  },
  'cms/legal-and-compliance': {
    title: 'Legal & Compliance',
    subtitle: 'Ethical Standards',
    heroImage: ASSETS.ABOUT_NABH,
    description: 'Our hospital operates under strict adherence to national and international healthcare laws and ethical guidelines.',
    sections: [
      { type: 'stats', data: [
        { label: 'Licensed', value: 'Yes' },
        { label: 'Compliant', value: '100%' },
        { label: 'Audits', value: 'Quarterly' },
        { label: 'Ethics', value: 'Approved' }
      ]},
      { type: 'highlights', eyebrow: 'Regulatory Oversight', title: 'Quality Benchmarks.', sideTitle: 'Ethics Board', sideDesc: 'Our compliance team performs regular internal audits to ensure 100% adherence to clinical laws.', items: ['NABH Guidelines', 'BMW Rules 2016', 'PCPNDT Act', 'MTP Regulations', 'Narcotic Drug License', 'Fire NOC Status'] }
    ]
  }
};
