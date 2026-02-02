export const ASSETS = {
  // Infrastructure
  HOSPITAL_EXTERIOR: '/assets/images/corrected/hospital-building.jpg',
  RECEPTION: '/assets/images/corrected/reception.jpg',
  OT: '/assets/images/corrected/infrastructure-ot.jpg',
  ICU: '/assets/images/corrected/infrastructure-icu.jpg',
  PATIENT_ROOM: '/assets/images/corrected/infrastructure-icu.jpg',
  TWIN_SHARING: '/assets/images/specific/twin-sharing.jpg',
  
  // Services & Departments
  PHARMACY: '/assets/images/corrected/service-pharmacy.jpg',
  AMBULANCE: '/assets/images/service-ambulance.jpg',
  LAB: '/assets/images/corrected/service-lab.jpg',
  DIALYSIS: '/assets/images/department-nephrology.jpg',
  HOME_COLLECTION: '/assets/images/specific/home-collection.jpg',
  UPLOAD_REPORT: '/assets/images/specific/upload-report.jpg',
  
  // Specialties
  CARDIAC: '/assets/images/corrected/specialty-cardiac.jpg',
  NEURO: '/assets/images/corrected/specialty-neuro.jpg',
  ORTHO: '/assets/images/corrected/specialty-ortho.jpg',
  ORTHO_KNEE: '/assets/images/specific/ortho-knee.jpg',
  GASTRO: '/assets/images/corrected/specialty-gastro.jpg',
  PULMONOLOGY: '/assets/images/corrected/specialty-pulmo.jpg',
  CARDIAC_HERO: '/assets/images/specific/cardiac-hero-v3.jpg',
  SLEEP_STUDY: '/assets/images/specific/sleep-study.jpg',
  UROLOGY: '/assets/images/corrected/specialty-urology.jpg',
  RADIOLOGY: '/assets/images/specific/radiology.jpg',
  
  // Technology
  CT_SCAN: '/assets/images/specific/ct-scan.jpg',
  MRI_SCAN: '/assets/images/specific/mri-scan.jpg',
  ROBOTIC_SURGERY: '/assets/images/specific/robotic-surgery.jpg',
  
  // People & Interaction
  DIRECTOR: '/assets/images/director-profile.jpg',
  NURSE_CARE: '/assets/images/nursing-care.jpg',
  CONSULTATION: '/assets/images/doctor-consultation.jpg',
  TELEMEDICINE: '/assets/images/service-telemedicine.jpg',
  HEALTH_CHECKUP: '/assets/images/service-health-checkup.jpg',
  INTERNATIONAL: '/assets/images/international-patients.jpg',
  GERIATRICS: '/assets/images/specific/geriatrics.jpg',
  SURGERY_TEAM: '/assets/images/specific/surgery-team.jpg',
  HEART_TRANSPLANT: '/assets/images/specific/heart-transplant.jpg',
  
  // Pharmacy Products
  DIABETIC_CARE: '/assets/images/specific/diabetic-care.jpg',
  BP_MONITOR: '/assets/images/specific/device-bp.jpg',
  MULTIVITAMIN: '/assets/images/specific/multivitamin.jpg',
  PERSONAL_CARE: '/assets/images/specific/personal-care.jpg',
  
  // Content (Blogs/News)
  BLOG_FOOD: '/assets/images/specific/blog-food.jpg',
  BLOG_KNEE: '/assets/images/specific/blog-knee.jpg',
  PRESS_EVENT: '/assets/images/specific/press-event.jpg',
  SNEHA_KAPOOR: '/assets/images/specific/sneha-kapoor.jpg',
  CAMP: '/assets/images/event-health-camp.jpg',
  CME: '/assets/images/corrected/dr-male-3.jpg',
  
  // Doctors Lists
  DOCTORS_MALE: [
    '/assets/images/corrected/dr-male-1.jpg',
    '/assets/images/corrected/dr-male-2.jpg',
    '/assets/images/corrected/dr-male-3.jpg'
  ],
  DOCTORS_FEMALE: [
    '/assets/images/corrected/dr-female-1.jpg',
    '/assets/images/corrected/dr-female-2.jpg',
    '/assets/images/corrected/dr-female-3.jpg'
  ]
};

export const getRandomDoctor = (gender = 'male') => {
  const docs = gender === 'female' ? ASSETS.DOCTORS_FEMALE : ASSETS.DOCTORS_MALE;
  return docs[Math.floor(Math.random() * docs.length)];
};
