import { siteConfig } from '../config/siteConfig';

export const kbContent = {
  home: {
    hero: {
      badge: "Trusted Healthcare in Gurugram",
      title: "Care with Passion, Driven by Excellence.",
      subtitle: `Experience Gurugram's most advanced ${siteConfig.stats.beds}-bedded superspeciality facility, engineered for clinical excellence and compassionate healing.`,
      ctaPrimary: "Book Appointment",
      ctaSecondary: "View Specialities"
    },
    stats: [
      { label: "Beds Capacity", value: siteConfig.stats.beds, suffix: "+" },
      { label: "ICU Beds", value: siteConfig.stats.icuBedsMarketing, suffix: "" },
      { label: "Specialities", value: siteConfig.stats.specialties, suffix: "" },
      { label: "Years Excellence", value: siteConfig.stats.experience, suffix: "+" }
    ],
    whyChooseUs: {
      title: "Why Trust Umang Hospital?",
      subtitle: "We combine world-class medical technology with a patient-first approach to ensure the best possible outcomes for you and your family.",
      features: [
        {
          title: "24/7 Emergency & Trauma",
          description: "Round-the-clock readiness for cardiac emergencies, accidents, and critical care needs."
        },
        {
          title: "Advanced Infrastructure",
          description: `${siteConfig.infrastructure.ots} Modular OTs, 128-Slice CT Scan, and Super-Specialty Cath Lab.`
        },
        {
          title: "Superspecialist Team",
          description: `Consultations with ${siteConfig.stats.superspecialists} superspecialists across major medical disciplines.`
        },
        {
          title: "Affordable Excellence",
          description: siteConfig.marketingMessage
        }
      ]
    },
    techHighlights: [
      { title: "128-Slice CT", desc: "Ultra-fast cardiac and whole-body imaging with 80% less radiation." },
      { title: "3 Tesla MRI", desc: "Silent scan technology for high-definition neurological diagnostics." },
      { title: "Robotic OT", desc: "Precision-guided minimally invasive surgical systems." },
      { title: "Digital Labs", desc: "AI-integrated pathology for rapid and accurate reporting." }
    ],
    faqs: [
      { q: "How do I book an appointment?", a: "You can book an appointment online via our website or by calling our 24/7 helpline at +91 85880 72727." },
      { q: "Do you offer cashless insurance?", a: "Yes, we are empanelled with all major insurance companies and TPAs for cashless treatment." },
      { q: "What are the visiting hours?", a: "General visiting hours are from 4:00 PM to 7:00 PM daily. ICU visits are restricted to ensure patient safety." },
      { q: "Are emergency services available 24/7?", a: "Yes, our emergency department and ambulance services are fully operational round-the-clock." }
    ]
  },
  about: {
    story: {
      title: "Our Legacy of Healing",
      content: `Established in 2010, ${siteConfig.name} has grown from a visionary clinic to a premier ${siteConfig.stats.beds}-bedded superspeciality tertiary care hospital. Located in the heart of Gurugram, we have served thousands of patients with a focus on ethical practices and clinical brilliance.`
    },
    mission: "To provide advanced, ethical, and compassionate healthcare that is accessible and affordable, with personalized treatment and excellent outcomes.",
    vision: "We seek to be a leader in providing high-quality services to our patients and define the standards of excellence for healthcare in India.",
    values: [
      { title: "Compassion", desc: "Empathy at every touchpoint; dignity and respect for all patients." },
      { title: "Integrity", desc: "Transparent communication and ethical medical practices." },
      { title: "Excellence", desc: "Commitment to the highest clinical standards and continuous learning." }
    ],
    milestones: [
      { year: "2010", title: "Inception", desc: "Started as a focused care unit with 50 beds." },
      { year: "2015", title: "Expansion", desc: "Upgraded to 100 beds with advanced diagnostic wing." },
      { year: "2020", title: "Superspeciality Status", desc: "Launched dedicated Cardiac and Neuro science departments." },
      { year: "2024", title: "Infrastructure Leap", desc: `Inaugurated the modern ${siteConfig.stats.beds}-bed facility with Robotic OT.` }
    ],
    quality: {
      title: "Quality & Safety Standards",
      desc: "Our clinical protocols are aligned with international benchmarks to ensure maximum patient safety.",
      standards: ["NABH Accredited", "NABL Certified Lab", "JCI Aligned Protocols", "100% HEPA Filtered OTs"]
    },
    philosophy: {
      title: "Patient Care Philosophy",
      desc: "We believe in a holistic healing approach where the patient is at the center of every decision we make."
    }
  },
  services: {
    'lab-test-diagnostic': {
      title: "Diagnostics, Imaging & Pathology",
      description: "24×7 precision diagnostics powered by advanced technology including 128-Slice CT and high-end pathology.",
      features: [
        "24×7 CT Scan & X-Ray",
        "Advanced Ultrasound/USG",
        "2D Echocardiography",
        "NABL Standard Pathology",
        "MRI (External Referral)"
      ]
    }
  }
};
