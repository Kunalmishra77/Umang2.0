# UMANG SUPERSPECIALITY HOSPITAL - WEBSITE MASTER BLUEPRINT (A-Z)

**Document Version:** 1.0  
**Date:** February 13, 2026  
**Status:** CLIENT REVIEW READY  
**Architect:** Senior Content Strategist & Healthcare Architect

---

## 1. GLOBAL ELEMENTS (Site-Wide)

### Header
- **Purpose:** Primary navigation and emergency access.
- **Section Name:** Primary Header
- **Content:** 
  - Logo: `umang.svg` (High-resolution vector)
  - Navigation: Home, About, Specialties (Dropdown), Services (Dropdown), Team (Dropdown), Patients (Dropdown), Contact.
  - Emergency CTA: "Emergency: +91 89297 33550"
  - Action Button: "Book Appointment" (Routes to `/doctors`)
- **Type:** Static
- **Image:** `umang.svg` (Vector Logo)

### Footer
- **Purpose:** Trust signals, legal compliance, and SEO navigation.
- **Section Name:** Dynamic Site Footer
- **Content:**
  - **Brand Column:** Umang Hospital summary text + Social Icons (FB, TW, LI, IG).
  - **Quick Links:** Find a Doctor, Patient Stories, Careers, Cashless Insurance.
  - **Contact Details:** Saraswati Enclave, Sector 10B, Gurugram | +91 89297 33550 | Umanghospitalgurugram@gmail.com
  - **Legal:** Terms of Service, Privacy Policy, Sitemap.
  - **Disclaimer:** "© 2025 Umang Hospital. Made with Heart in India."
- **Type:** Static / Dynamic (Links)

---

## 2. HOMEPAGE

| Section | Purpose | Content | Type | Image/Video Requirement |
|:---|:---|:---|:---|:---|
| **Section 1: Hero** | Brand Impact | Headline: "World-Class Healthcare", Sub: "Gurugram's leading 100-bedded facility." | Static | **Video:** `umang-hospital-tour-27sec.mp4` (Muted Loop) \| **Img:** `hero-hospital-exterior.jpg` |
| **Section 2: Stats** | Proof of Scale | 100+ Beds, 30+ Specialists, 24/7 Emergency, 15+ Years Exp. | **Dynamic (DB)** | Icons: `icon-bed.svg`, `icon-doctor.svg`, `icon-emergency.svg` |
| **Section 3: Specialties** | Medical Depth | Grid: Cardiac, Neuro, Ortho, Gastro, Pulmo, etc. | Static | `speciality-[slug].jpg` (High-quality clinical shots) |
| **Section 4: Infrastructure** | Tech Trust | ICU Overview: 12 Advance ICU, 4 SICU, 4 CCU. | **Dynamic (DB)** | `icu-room-1.jpg`, `icu-equipment.jpg` |
| **Section 5: Doctors** | Personal Trust | High-performing doctor cards with experience badges. | **Dynamic (DB)** | `doctor-[name].jpg` (Professional Portraits) |
| **Section 6: Insurance** | Convenience | Snapshot of major insurance logos + GIPSA mention. | **Dynamic (DB)** | `insurance-logos-grid.png` |
| **Section 7: Testimonials**| Social Proof | Patient feedback quotes and ratings. | Static | `patient-smile.jpg` |
| **Section 8: Final CTA** | Conversion | "Ready to experience the Umang difference? Book Now." | Static | Gradient background with noise overlay. |

---

## 3. ABOUT PAGE

- **Section 1: Cinematic Hero:** Headline: "Legacy of Excellence." \| Image: `about-building.jpg`
- **Section 2: Purpose:** Mission & Vision cards. \| Icon: `mission-vision-icon.svg`
- **Section 3: Hospital Story:** Detailed history (Seeded content: 150-bedded facility, established 2010).
- **Section 4: Leadership:** Profiles of Medical Director & Founder (Dr. Rakesh Gupta). \| Image: `director-profile.jpg`
- **Section 5: Quality:** NABH & NABL accreditation badges. \| Status: **Verified.**

---

## 4. SPECIALTIES (Individual Clinical Pages)

- **Layout:** Unified cinematic layout.
- **Section 1: Specialty Banner:** `speciality-banner-[name].jpg` (Parallax).
- **Section 2: About Specialty:** Deep dive into clinical philosophy.
- **Section 3: Procedures:** Bulleted list of surgeries/treatments (e.g., Angioplasty, TKR).
- **Section 4: Technology:** Unique machines (e.g., 3 Tesla MRI, 128 Slice CT).
- **Section 5: FAQ:** Common patient queries regarding recovery and risks.
- **Section 6: Doctors:** Related specialists from that department (Filtered).

---

## 5. DOCTORS PAGE

- **Search & Filter:** Dynamic filtering by Specialty, Gender, and Experience.
- **Doctor Cards:** Professional image, Specialty, Experience (>15 years), "Book Now" Button.
- **Profile Page:**
  - Image: `doctor-profile-[name].jpg`
  - Details: Qualification, Experience, Expertise, OPD Timings (On-Call).

---

## 6. INFRASTRUCTURE PAGE

- **Section 1: Visual Tour:** Interactive hotspots on facility images.
- **Section 2: Intensive Care:** Deep dive into Advance ICU, SICU, CCU. \| Img: `icu-room.jpg`
- **Section 3: Operation Theatres:** Details on Modular OTs. \| Img: `ot-room.jpg`
- **Section 4: Diagnostics & Radiology:** Cath Lab, 3T MRI, CT Scan. \| Img: `cath-lab.jpg`, `xray-room.jpg`

---

## 7. CASHLESS INSURANCE PAGE

- **Section 1: Cinematic Banner:** "Hassle-Free Healthcare."
- **Section 2: Search Interface:** Real-time search for 15+ companies.
- **Section 3: GIPSA Breakdown:** Highlighting Oriental, National, New India, United.
- **Section 4: TPA Index:** List of all 11 TPAs (Medi Assist, FHPL, Vidal, etc.).
- **Section 5: Legal Disclaimers:** Exact text sourced from client MOUs (Dynamic).
- **Section 6: Inquiry Modal:** Lead capture for patient insurance assistance.

---

## 8. PATIENT EXPERIENCE PAGE

- **Section 1: Patient Journey:** From Admission to Discharge walkthrough.
- **Section 2: Amenities:** Deluxe rooms, waiting lounges, dietary services. \| Img: `patient-room.jpg`
- **Section 3: Google Reviews:** Live carousel of Google reviews.
- **Section 4: Visitation Policy:** Timings and safety protocols.

---

## 9. CAREERS PAGE

- **Purpose:** Talent acquisition.
- **Content:** 
  - HR Contact: 9599406068
  - Email: umanghospitalgurugram@gmail.com
  - Categories: Nursing, Front Office, Clinical, Tech.
  - Action: "Apply via WhatsApp / Email"

---

## 10. LEGAL & COMPLIANCE

- **Pages:** Privacy Policy, Terms of Service, Consent Forms, Data Retention.
- **Layout:** High-fidelity typography, sticky side-navigation, legally verified badges.
- **Type:** Dynamic (Managed via `/cms/` routes).

---

## 11. SEO & BLOG STRATEGY

- **Keywords:** Targeted from `keywords.csv` (e.g., "Best hospital in Gurugram", "Trauma Centre Pataudi Road").
- **Blog Categories:** Health Tips, Medical Breakthroughs, Hospital News.
- **SEO Elements:** Every page includes SEO Title, Description, and Image Alt Tags (mapped from `image_submission.csv`).

---

## 12. MEDIA & EVENTS

- **Press Releases:** Official hospital announcements.
- **Media Coverage:** Snippets from national news/print media.
- **CME Hub:** Archives of Continuous Medical Education sessions.

---

## 13. FINAL IMAGE INVENTORY TABLE

| File Name | Page | Section | Required? | Status |
|:---|:---|:---|:---|:---|
| `umang.svg` | Global | Header/Favicon | YES | ✅ Completed |
| `hero-hospital-exterior.jpg` | Home | Hero | YES | ⏳ Pending High-Res |
| `speciality-cardiac.jpg` | Specialties | Cardiac Sciences | YES | ✅ Available |
| `icu-equipment.jpg` | Infrastructure| ICU Detail | YES | ✅ Available |
| `insurance-logos-grid.png` | Cashless | Grid Section | YES | ⏳ Designing |
| `director-profile.jpg` | About | Leadership | YES | ✅ Available |
| `ot-room.jpg` | Infrastructure| OT Section | YES | ✅ Available |

---

## 14. VIDEO PLACEMENT DECISION

**Recommendation: Option A – Hero Background.**

**Rationale:**
Umang Hospital is a premium Superspeciality facility. High-end healthcare users expect immediate visual validation of infrastructure.
- **UX Strategy:** Use `umang-hospital-tour-27sec.mp4` as a muted, autoplay background loop behind the main headline.
- **Fallback:** If internet is slow, `hero-hospital-exterior.jpg` will load instantly.
- **Secondary Use:** Embed the same video in the "Patient Experience" section with audio enabled for a full virtual tour experience.

---
**END OF MASTER BLUEPRINT**
