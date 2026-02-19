# CHANGELOG - UMANG HOSPITAL WEBSITE REVAMP

## Phase 0: Safety & Documentation
- **Created `docs/` folder** with baseline reports: `KB_COMPLIANCE_REPORT.md`, `SEO_REPORT.md`, `PERF_REPORT.md`.
- **Established git branch** `ui-seo-perf-master` for high-quality refactor.

## Phase 1: Data Locking
- **Standardized `siteConfig.js`**: Verified phone numbers, addresses, and bed counts (150 total, 52 ICU).
- **Created `kbContent.js`**: Reusable marketing and story copy for all pages.
- **Replaced hardcoded claims** across `Home`, `About`, `Specialities`, and `Header`.

## Phase 2: Backend Integration
- **Migrations & Models**: Created `callback_requests`, `appointment_requests`, and `contact_inquiries` tables.
- **Controllers**: Implemented `LeadController` for secure guest lead submission.
- **API (Laravel)**: Added `/api/callback`, `/api/appointment-request`, and `/api/contact-inquiry` POST routes.
- **Frontend (React)**: Created `useLeadForm` hook and `leadApi` for unified form handling (axios).
- **Form Updates**: `InquiryHub.jsx`, `GeneralAppointment.jsx`, `Contact.jsx`, and `HeroSection.jsx` now submit to real backend.

## Phase 3: SEO System
- **SeoHead Component**: Centralized meta management (Title, Meta Description, OG, Twitter).
- **JSON-LD Schema**: Automated `Hospital` schema injection for all routes.
- **Crawling Optimization**: Added `robots.txt` and `sitemap.xml` for search engine visibility.

## Phase 4: Mobile Performance
- **Hero Optimization**: Disabled background videos on mobile/tablet (1024px cutoff).
- **Mobile Image Loop**: Replaced video with a cinematic, light image transition loop.
- **Asset Loading**: Enforced `loading="eager"` for Hero LCP and `loading="lazy"` for secondary assets.

## Phase 5: Responsive Lock
- **Header Refactor**: Stabilized heights (Desktop/Mobile/Scroll) to prevent layout shifts.
- **Vertical Centering**: Fixed logo/nav alignment within the header container.
- **Spacing rhythm**: Unified `MainLayout` top-padding with dynamic CSS variables.

## Phase 6: Image System
- **Image Registry**: Created `getUniqueImage` utility to prevent visual repetition.
- **Fallback Logic**: Established a pool of high-quality hospital assets for missing/placeholder items.

## Phase 7: UI Polish
- **Glassmorphism**: Enhanced Hero inquiry form with ultra-premium glass effects.
- **Micro-interactions**: Added loading spinners and success states to all forms.
- **Accessibility**: Improved form label contrast and button focus states.
