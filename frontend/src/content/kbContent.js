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
    }
  },
  about: {
    story: {
      title: "Our Legacy of Healing",
      content: `Established in 2010, ${siteConfig.name} has grown from a visionary clinic to a premier ${siteConfig.stats.beds}-bedded superspeciality tertiary care hospital. Located in the heart of Gurugram, we have served thousands of patients with a focus on ethical practices and clinical brilliance.`
    },
    mission: "To provide advanced, ethical, and compassionate healthcare that is accessible and affordable, with personalized treatment and excellent outcomes.",
    vision: "We seek to be a leader in providing high-quality services to our patients and define the standards of excellence for healthcare in India.",
    values: ["Patient-First Care", "Integrity & Ethics", "Clinical Excellence", "Compassion", "Innovation"]
  },
  // Re-exporting or moving pageContent items here
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
    // ... more to be added
  }
};
