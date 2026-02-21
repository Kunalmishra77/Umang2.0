import { 
  HeartPulse, Microscope, User, Pill, Heart, Brain, Bone, Activity, 
  Hospital, Clock, Users, MessageSquare, Phone, ShieldCheck, Zap, Award,
  Stethoscope, Thermometer, Truck, Globe, Briefcase, Star, HelpCircle, Baby, Shield, Smartphone
} from 'lucide-react';

export const navConfig = {
  mainNav: [
    {
      title: 'Services',
      href: '/services',
      groups: [
        {
          id: 'emergency',
          title: 'Emergency & Trauma',
          icon: HeartPulse,
          href: '/services/emergency',
          preview: {
            title: 'Critical Care Excellence',
            desc: '24/7 Level-1 Trauma response with specialized ICU units and advanced life support.',
            bullets: ['Level-1 Trauma Center', '52-Bed Smart ICU', 'Cardiac Ambulances', '24/7 Intensivist'],
            image: '/assets/services/advanced-life-support.png',
            tag: 'Emergency',
            cta: { label: 'Get Help', href: '/services/emergency' }
          }
        },
        {
          id: 'diagnostics',
          title: 'Diagnostic Services',
          icon: Microscope,
          href: '/services/lab-test-diagnostic',
          preview: {
            title: 'Precision Diagnostics',
            desc: 'NABL accredited labs providing accurate results with region-first 3 Tesla MRI.',
            bullets: ['3T MRI', '128 Slice CT', 'Automated Pathology', 'Non-Invasive Cardiac'],
            image: '/assets/services/diagnostic-lab/Radiology & Imaging.png',
            tag: 'Diagnostics',
            cta: { label: 'Book Test', href: '/services/lab-test-diagnostic' }
          }
        },
        {
          id: 'pharmacy',
          title: 'Pharmacy & Wellness',
          icon: Pill,
          href: '/services/buy-medicines',
          preview: {
            title: 'Wellness & Medicine',
            desc: '24/7 doorstep delivery of genuine medications and professional pharmacist support.',
            bullets: ['Doorstep Delivery', 'Cold Chain Supply', 'Genuine Meds', '24/7 Open'],
            image: '/assets/Home/pharmacy.jpeg',
            tag: 'Pharmacy',
            cta: { label: 'Order Online', href: '/services/buy-medicines' }
          }
        },
        {
          id: 'homecare',
          title: 'Home Care Services',
          icon: User,
          href: '/services/home-care',
          preview: {
            title: 'Hospital at Home',
            desc: 'Bringing clinical expertise to your doorstep with nursing and physiotherapy.',
            bullets: ['ICU at Home', 'Home Nursing', 'Physiotherapy', 'Doctor Visits'],
            image: '/assets/Home/home-care.jpg',
            tag: 'Home Care',
            cta: { label: 'Inquire Now', href: '/services/home-care' }
          }
        },
        {
          id: 'telemedicine',
          title: 'Telemedicine Hub',
          icon: Phone,
          href: '/services/telemedicine',
          preview: {
            title: 'Digital Consultation',
            desc: 'Connect with top specialists via secure video calls from anywhere.',
            bullets: ['Instant Connect', 'Expert Opinion', 'Digital Rx', 'Safe & Secure'],
            image: '/assets/Home/telemedicene.jpeg',
            tag: 'Digital',
            cta: { label: 'Book Call', href: '/services/telemedicine' }
          }
        }
      ]
    },
    {
      title: 'Specialities',
      href: '/specialities',
      groups: [
        {
          id: 'cardiac',
          title: 'Cardiac Sciences',
          icon: Heart,
          href: '/specialities/cardiology',
          preview: {
            title: 'The Heart Center',
            desc: 'Advanced interventional cardiology and cardiothoracic surgery unit.',
            bullets: ['Cath Lab', 'Bypass Surgery', 'Heart Failure', 'Pediatric Cardiac'],
            image: '/assets/Home/cardiac-sciences.png',
            tag: 'Cardiac',
            cta: { label: 'View Doctors', href: '/doctors?dept=cardiac' }
          }
        },
        {
          id: 'neuro',
          title: 'Neuro Sciences',
          icon: Brain,
          href: '/specialities/neuro',
          preview: {
            title: 'Brain & Spine Unit',
            desc: 'Management of complex stroke, epilepsy, and spinal disorders.',
            bullets: ['Stroke Care', 'Neurosurgery', 'Spine Clinic', 'Neuro-Physio'],
            image: '/assets/Home/neuro-sciences.png',
            tag: 'Neuro',
            cta: { label: 'View Doctors', href: '/doctors?dept=neuro' }
          }
        },
        {
          id: 'ortho',
          title: 'Orthopaedics & Joint',
          icon: Bone,
          href: '/specialities/ortho',
          preview: {
            title: 'Bone & Joint Care',
            desc: 'Center for robotic joint replacement and sports injury rehabilitation.',
            bullets: ['Knee/Hip Replace', 'Sports Medicine', 'Trauma Care', 'Arthroscopy'],
            image: '/assets/Home/orthopaedics-joint-replacement.png',
            tag: 'Ortho',
            cta: { label: 'View Doctors', href: '/doctors?dept=ortho' }
          }
        },
        {
          id: 'gastro',
          title: 'Gastroenterology',
          icon: Activity,
          href: '/specialities/gastro',
          preview: {
            title: 'Digestive Health',
            desc: 'Pioneering liver transplant and advanced endoscopic care.',
            bullets: ['Liver Clinic', 'Endoscopy Unit', 'GI Surgery', 'Cancer Care'],
            image: '/assets/Home/gastroenterology.png',
            tag: 'Gastro',
            cta: { label: 'View Doctors', href: '/doctors?dept=gastro' }
          }
        },
        {
          id: 'oncology',
          title: 'Oncology (Cancer)',
          icon: Shield,
          href: '/specialities/oncology',
          preview: {
            title: 'Cancer Institute',
            desc: 'Multi-modality evidence-based cancer treatments and screening.',
            bullets: ['Surgical Oncology', 'Chemotherapy', 'Pain Mgmt', 'Support Care'],
            image: '/assets/About/super-speciality-beacon.png',
            tag: 'Oncology',
            cta: { label: 'View Doctors', href: '/doctors?dept=oncology' }
          }
        }
      ]
    },
    {
      title: 'Infrastructure',
      href: '/infrastructure',
      groups: [
        {
          id: 'ots',
          title: 'Modular OT Suites',
          icon: Award,
          href: '/infrastructure/ot',
          preview: {
            title: 'Surgical Excellence',
            desc: 'ISO Class 5 modular operating theatres ensuring zero-infection safety.',
            bullets: ['HEPA Filter', 'Robotic Suite', 'Pre-Op Lounge', 'Recovery Bay'],
            image: '/assets/Home/general-surgery.png',
            tag: 'Surgery',
            cta: { label: 'OT Tech', href: '/infrastructure/ot' }
          }
        },
        {
          id: 'icu',
          title: 'Smart ICU Hub',
          icon: Zap,
          href: '/infrastructure/icu',
          preview: {
            title: 'Critical Care Unit',
            desc: '52-bed advanced ICU with 1:1 nursing and specialized monitoring.',
            bullets: ['SICU / CCU', 'Ventilators', 'Dialysis ready', 'Central Station'],
            image: '/assets/services/icu-infrastructure/Advance ICU.png',
            tag: 'ICU',
            cta: { label: 'ICU Details', href: '/infrastructure/icu' }
          }
        },
        {
          id: 'rooms',
          title: 'Patient Rooms',
          icon: Hospital,
          href: '/infrastructure/rooms',
          preview: {
            title: 'Healing Comfort',
            desc: 'Range of luxury suites and deluxe rooms for patient comfort.',
            bullets: ['Presidential Suite', 'Deluxe Room', 'Twin Sharing', 'General Ward'],
            image: '/assets/About/100-Beds.jpg',
            tag: 'Wards',
            cta: { label: 'View Rooms', href: '/infrastructure/rooms' }
          }
        },
        {
          id: 'radio',
          title: 'Radiology Wing',
          icon: Microscope,
          href: '/infrastructure/radiology',
          preview: {
            title: 'High-End Imaging',
            desc: 'Equipped with region-first 3 Tesla MRI and 128 slice CT Scan.',
            bullets: ['3 Tesla MRI', '128 Slice CT', 'Digital X-Ray', 'Color Doppler'],
            image: '/assets/services/diagnostic-lab/Radiology & Imaging.png',
            tag: 'Imaging',
            cta: { label: 'Tech Specs', href: '/infrastructure/radiology' }
          }
        },
        {
          id: 'amenities',
          title: 'Patient Amenities',
          icon: Clock,
          href: '/infrastructure/cafeteria',
          preview: {
            title: 'Support Services',
            desc: '24/7 assistance including cafeteria, parking and help desk.',
            bullets: ['Basement Parking', '24/7 Cafeteria', 'Global Help Desk', 'Prayer Room'],
            image: '/assets/Home/hero11.jpeg',
            tag: 'Services',
            cta: { label: 'More Services', href: '/infrastructure/cafeteria' }
          }
        }
      ]
    },
    {
      title: 'Team',
      href: '/team',
      groups: [
        {
          id: 'doctors',
          title: 'Our Specialists',
          icon: Users,
          href: '/doctors',
          preview: {
            title: 'Medical Faculty',
            desc: 'Over 100+ board certified senior consultants and surgeons.',
            bullets: ['Find Doctor', 'Profile Access', 'Expertise list', 'Visiting Staff'],
            image: '/assets/About/Dr. Rakesh Gupta.png',
            tag: 'Faculty',
            cta: { label: 'Find a Doctor', href: '/doctors' }
          }
        },
        {
          id: 'lead',
          title: 'Leadership',
          icon: Award,
          href: '/team/leadership',
          preview: {
            title: 'Board of Directors',
            desc: 'The visionary leadership team guiding Umang Hospital excellence.',
            bullets: ['Director Message', 'Medical Board', 'Vision/Mission', 'Quality Hub'],
            image: '/assets/About/Dr. Rakesh Gupta.png',
            tag: 'Leadership',
            cta: { label: 'View Board', href: '/team/leadership' }
          }
        },
        {
          id: 'nurse',
          title: 'Nursing Staff',
          icon: Heart,
          href: '/team/nursing',
          preview: {
            title: 'Compassionate Care',
            desc: 'Dedicated nursing force trained in critical care and protocols.',
            bullets: ['NICU Experts', 'ICU Nursing', 'OT Technicians', 'Home Care'],
            image: '/assets/Home/home-care.jpg',
            tag: 'Nursing',
            cta: { label: 'Join Team', href: '/team/nursing' }
          }
        },
        {
          id: 'admin',
          title: 'Support Staff',
          icon: User,
          href: '/team',
          preview: {
            title: 'Admin Support',
            desc: 'Our non-clinical staff ensures smooth hospital operations 24/7.',
            bullets: ['Help Desk', 'Patient Care', 'Facility Mgmt', 'TPA Desk'],
            image: '/assets/Home/hero11.jpeg',
            tag: 'Admin',
            cta: { label: 'Contact Admin', href: '/contact' }
          }
        },
        {
          id: 'careers',
          title: 'Careers Hub',
          icon: Briefcase,
          href: '/careers',
          preview: {
            title: 'Join Our Team',
            desc: 'Explore career opportunities for medical and non-clinical roles.',
            bullets: ['Current Openings', 'Doctors Portal', 'Nursing Vacancy', 'Internships'],
            image: '/assets/Home/hero11.jpeg',
            tag: 'Careers',
            cta: { label: 'Apply Now', href: '/careers' }
          }
        }
      ]
    },
    {
      title: 'Patients',
      href: '/patient-corner',
      groups: [
        {
          id: 'portal',
          title: 'Patient Portal',
          icon: Smartphone,
          href: '/patients',
          preview: {
            title: 'Digital Health',
            desc: 'Securely manage your appointments, reports and medical history.',
            bullets: ['Download Reports', 'Book Appointments', 'Online Payments', 'Tele-Consultation'],
            image: '/assets/About/about-main.png',
            tag: 'Portal',
            cta: { label: 'Login Now', href: '/patients' }
          }
        },
        {
          id: 'stories',
          title: 'Patient Stories',
          icon: MessageSquare,
          href: '/patient-corner/patient-stories',
          preview: {
            title: 'Success Journeys',
            desc: 'Read about the life-changing recoveries of our patients.',
            bullets: ['Heart Recovery', 'Neuro Success', 'Ortho Stories', 'Child Health'],
            image: '/assets/Home/Health-Checkup.jpg',
            tag: 'Stories',
            cta: { label: 'Read More', href: '/patient-corner/patient-stories' }
          }
        },
        {
          id: 'rights',
          title: 'Rights & Policy',
          icon: Shield,
          href: '/patient-experience',
          preview: {
            title: 'Visitor Policy',
            desc: 'Guidelines for patients and visitors to ensure a safe environment.',
            bullets: ['Patient Rights', 'Billing Policy', 'Safety Guide', 'Accreditations'],
            image: '/assets/About/about-main.png',
            tag: 'Policy',
            cta: { label: 'View Rights', href: '/patient-experience' }
          }
        },
        {
          id: 'insurance',
          title: 'Insurance & TPA',
          icon: Award,
          href: '/cashless-insurance',
          preview: {
            title: 'Cashless Help',
            desc: 'Network of empaneled insurance partners and TPA assistance.',
            bullets: ['GIPSA Group', 'Corporate TPA', 'Claim Process', 'Documents'],
            image: '/assets/services/cashless-insurance.png',
            tag: 'Insurance',
            cta: { label: 'View Panel', href: '/cashless-insurance' }
          }
        },
        {
          id: 'hub',
          title: 'Inquiry Hub',
          icon: HelpCircle,
          href: '/contact/inquiry-hub',
          preview: {
            title: 'Help Desk',
            desc: 'Centralized desk for international and domestic inquiries.',
            bullets: ['Visa Support', 'Interpreter', 'Travel Guide', 'Room Booking'],
            image: '/assets/About/a-global-medical.png',
            tag: 'Support',
            cta: { label: 'Submit Query', href: '/contact/inquiry-hub' }
          }
        }
      ]
    },
    {
      title: 'Contact',
      href: '/contact',
      groups: [
        {
          id: 'main',
          title: 'General Support',
          icon: Phone,
          href: '/contact',
          preview: {
            title: 'Reception Desk',
            desc: 'Contact our main reception for general inquiries and help.',
            bullets: ['Reception 24/7', 'Directions', 'Feedback', 'Admin Desk'],
            image: '/assets/Home/hero11.jpeg',
            tag: 'Contact',
            cta: { label: 'Get Help', href: '/contact' }
          }
        },
        {
          id: 'er',
          title: 'Emergency 24/7',
          icon: HeartPulse,
          href: '/contact/emergency',
          preview: {
            title: 'Immediate Help',
            desc: 'Reach our emergency response team for critical support.',
            bullets: ['Helpline 24/7', 'Ambulance Hub', 'Blood Bank', 'Pharmacy Help'],
            image: '/assets/services/advanced-life-support.png',
            tag: 'Emergency',
            cta: { label: 'Call Now', href: '/contact/emergency' }
          }
        },
        {
          id: 'whatsapp',
          title: 'WhatsApp Help',
          icon: MessageSquare,
          href: 'https://wa.me/918929733550',
          preview: {
            title: 'Digital Connect',
            desc: 'Fastest way to get answers via WhatsApp chat assistance.',
            bullets: ['Report Help', 'Booking Chat', 'Price Check', 'Quick Help'],
            image: '/assets/Home/hero11.jpeg',
            tag: 'Chat',
            cta: { label: 'Start Chat', href: 'https://wa.me/918929733550' }
          }
        },
        {
          id: 'maps',
          title: 'Google Maps',
          icon: Globe,
          href: 'https://maps.google.com',
          preview: {
            title: 'Find Campus',
            desc: 'Navigate to our Building No. 306, Pataudi Road campus.',
            bullets: ['Parking Info', 'Bus Access', 'Train Station', 'Airport Link'],
            image: '/assets/Home/hero11.jpeg',
            tag: 'Maps',
            cta: { label: 'Directions', href: 'https://maps.google.com' }
          }
        },
        {
          id: 'media',
          title: 'Media Center',
          icon: Microscope,
          href: '/media-center',
          preview: {
            title: 'News & Media',
            desc: 'Connect with our media desk for press releases and events.',
            bullets: ['Press Release', 'Media Gallery', 'Event Inquire', 'News Archive'],
            image: '/assets/About/a-global-medical.png',
            tag: 'Media',
            cta: { label: 'Enter Media', href: '/media-center' }
          }
        }
      ]
    }
  ]
};
