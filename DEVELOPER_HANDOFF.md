# Umang Superspeciality Hospital — Developer Handoff Guide

**Project:** Umang Superspeciality Hospital Website  
**Live URL:** https://umang2-0.vercel.app  
**Repository:** https://github.com/Kunalmishra77/Umang2.0  
**Prepared for:** Umang Hospital Development Team  

---

## 1. Project Overview

This is the official website for **Umang Superspeciality Hospital, Gurugram**. It consists of:

| Layer | Technology | Status |
|---|---|---|
| Frontend | React 18 + Vite + Tailwind CSS | Live on Vercel |
| Backend | Laravel 11 (PHP) | Built, not yet deployed |
| Database | SQLite (default) / MySQL (production) | Migrations ready |

The frontend is fully functional and deployed. The backend is built and ready for deployment — it provides an API for doctors, appointments, CMS data, and lead generation (callbacks, contact inquiries).

---

## 2. Directory Structure

```
Umang2.0/
├── frontend/               # React/Vite frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components (home, layout, common, etc.)
│   │   ├── pages/          # Page-level components (Home, About, Doctors, etc.)
│   │   ├── data/           # Static JSON fallback data (doctors.json, etc.)
│   │   ├── utils/          # Utilities (imageAssets.js, doctorsData.js)
│   │   ├── config/         # Site-wide configuration (siteConfig.js)
│   │   ├── content/        # CMS-style content (kbContent.js)
│   │   └── hooks/          # Custom React hooks
│   ├── public/
│   │   ├── UmangNew/       # 18 branded department images (with Umang logo)
│   │   ├── UmangLatest/    # Real hospital infrastructure photos
│   │   ├── Umang-real/     # Additional real photos (ICU, OT, etc.)
│   │   └── assets/         # Legacy images and videos
│   ├── .env                # Frontend environment variables
│   └── vite.config.js
│
├── backend/                # Laravel 11 PHP backend
│   ├── app/Http/Controllers/Api/  # API controllers
│   ├── database/migrations/       # All DB table definitions
│   ├── routes/api.php             # All API endpoint definitions
│   └── .env.example               # Environment template
│
├── vercel.json             # Vercel deployment configuration
└── DEVELOPER_HANDOFF.md    # This file
```

---

## 3. Frontend Setup (Local Development)

### Prerequisites
- Node.js 18+ and npm
- Git

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Kunalmishra77/Umang2.0.git
cd Umang2.0/frontend

# 2. Install dependencies
npm install

# 3. Create environment file
# Create a file named .env in the frontend/ directory:
echo "VITE_API_URL=http://localhost:8000/api" > .env

# 4. Start the development server
npm run dev
# App runs at: http://localhost:5173
```

### Build for Production

```bash
cd frontend
npm run build
# Output goes to: frontend/dist/
```

### Key Frontend Files

| File | Purpose |
|---|---|
| `src/config/siteConfig.js` | Hospital name, phone numbers, bed count, ICU stats, timings |
| `src/content/kbContent.js` | Page content, stats, FAQs, milestones |
| `src/utils/imageAssets.js` | Centralized image path registry (all images referenced here) |
| `src/data/doctors.json` | Fallback doctor data (used when backend API is unavailable) |

> **Important:** All site-wide changes (phone numbers, bed count, timings, etc.) should be made in `siteConfig.js`. This file is the single source of truth for hospital configuration.

---

## 4. Backend Setup (Local Development)

### Prerequisites
- PHP 8.2+
- Composer
- SQLite (built into PHP) or MySQL 8.0+

### Steps

```bash
# 1. Navigate to backend directory
cd Umang2.0/backend

# 2. Install PHP dependencies
composer install

# 3. Create environment file from template
cp .env.example .env

# 4. Generate application key (required)
php artisan key:generate

# 5. Run database migrations
php artisan migrate

# 6. (Optional) Seed with sample data
php artisan db:seed

# 7. Start the development server
php artisan serve
# API runs at: http://localhost:8000
# API base URL: http://localhost:8000/api
```

### Database Configuration

**SQLite (default — easiest for local dev):**

The `.env.example` already has SQLite configured. No additional setup needed. The database file is created automatically at `database/database.sqlite`.

**MySQL (recommended for production):**

Edit `backend/.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=umang_hospital
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
```

Then run: `php artisan migrate`

### Database Tables

| Table | Description |
|---|---|
| `doctors` | Doctor profiles (name, specialty, experience, bio) |
| `specialities` | Medical departments and specialties |
| `appointments` | Patient appointment records |
| `hospital_stats` | Dynamic stats (bed count, ICU beds, etc.) |
| `icu_units` | ICU unit breakdown (General, SICU, CCU) |
| `insurance_companies` | Empanelled insurance companies |
| `tpas` | Third-party administrators |
| `site_notices` | Announcements and notices |
| `callback_requests` | Patient callback form submissions |
| `appointment_requests` | Appointment booking form submissions |
| `contact_inquiries` | General contact form submissions |
| `pages` | CMS-managed page content |

---

## 5. API Endpoints Reference

Base URL: `http://localhost:8000/api` (local) or your deployed backend URL.

### Public Endpoints (No Authentication Required)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/doctors` | List all doctors |
| GET | `/doctors/{id}` | Get single doctor by ID |
| GET | `/specialities` | List all specialties |
| GET | `/stats` | Hospital statistics |
| GET | `/icu` | ICU unit details |
| GET | `/icu-units/{slug}` | Specific ICU unit |
| GET | `/insurance-companies` | Empanelled insurance companies |
| GET | `/tpas` | Empanelled TPAs |
| GET | `/site-notices` | All site notices |
| GET | `/site-notices/{key}` | Single notice by key |
| GET | `/pages/{slug}` | CMS page content by slug |
| POST | `/callback` | Submit callback request |
| POST | `/appointment-request` | Submit appointment request |
| POST | `/contact-inquiry` | Submit contact form |
| POST | `/insurance-inquiry` | Submit insurance inquiry |

### Authenticated Endpoints (Requires Sanctum Token)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/appointments` | Patient's appointments |
| POST | `/appointments` | Book new appointment |
| DELETE | `/appointments/{id}` | Cancel appointment |
| GET | `/patient/profile` | Patient profile |
| PUT | `/patient/profile` | Update patient profile |
| PUT | `/admin/pages/{id}` | Admin: update page content |
| PUT | `/admin/stats` | Admin: update hospital stats |

---

## 6. Frontend–Backend Integration

The frontend fetches data from the backend API using the `VITE_API_URL` environment variable. If the API is unavailable, it falls back to static JSON files in `src/data/`.

### How to Point Frontend to Your Backend

Edit `frontend/.env`:
```env
# Local development
VITE_API_URL=http://localhost:8000/api

# Production (after deploying backend)
VITE_API_URL=https://api.yourdomain.com/api
```

---

## 7. Deployment Guide

### 7A. Frontend Deployment (Vercel — Already Live)

The frontend is deployed at **https://umang2-0.vercel.app** via Vercel.

**To redeploy after changes:**
```bash
cd Umang2.0
git add .
git commit -m "your changes"
git push origin main
# Vercel auto-deploys on push to main
```

**To link a custom domain on Vercel:**
1. Go to [vercel.com](https://vercel.com) → Project → Settings → Domains
2. Add your domain (e.g., `www.umanghospital.com`)
3. Update your domain's DNS:
   - Add a `CNAME` record: `www` → `cname.vercel-dns.com`
   - Or for root domain (`@`): use Vercel's provided A record IPs

**Environment variable for production API on Vercel:**
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add: `VITE_API_URL` = `https://api.yourdomain.com/api`

### 7B. Backend Deployment

The Laravel backend needs a PHP hosting environment. Recommended options:

**Option 1: DigitalOcean / AWS EC2 (VPS)**
```bash
# On your server (Ubuntu/Debian):
sudo apt install php8.2 php8.2-mbstring php8.2-xml php8.2-sqlite3 php8.2-mysql
sudo apt install composer nginx

# Clone and setup
git clone https://github.com/Kunalmishra77/Umang2.0.git
cd Umang2.0/backend
composer install --no-dev --optimize-autoloader
cp .env.example .env
php artisan key:generate
php artisan migrate --force

# Configure Nginx to point to backend/public/
```

**Option 2: Shared Hosting (cPanel)**
- Upload `backend/` folder contents to your hosting
- Point domain/subdomain to `backend/public/`
- Set environment variables via cPanel or `.env` file
- Run migrations via SSH terminal

**Option 3: Laravel Forge + DigitalOcean (Easiest managed option)**
- Use [Laravel Forge](https://forge.laravel.com) for one-click server provisioning

### 7C. Recommended Production Architecture

```
User Browser
     │
     ▼
[Vercel CDN] ──── serves React frontend ──── www.umanghospital.com
     │
     │ (API calls)
     ▼
[PHP Server / VPS] ──── Laravel backend ──── api.umanghospital.com
     │
     ▼
[MySQL Database]
```

**DNS Setup for Custom Domain:**
| Record Type | Name | Value |
|---|---|---|
| CNAME | www | cname.vercel-dns.com |
| A | @ | 76.76.21.21 (Vercel IP) |
| CNAME | api | your-backend-server-ip or hostname |

---

## 8. Important Configuration After Deployment

### Update Frontend API URL
In Vercel Environment Variables:
```
VITE_API_URL = https://api.yourdomain.com/api
```

### Update Backend `.env` for Production
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://api.yourdomain.com

DB_CONNECTION=mysql
DB_HOST=your-db-host
DB_DATABASE=umang_hospital
DB_USERNAME=your-db-user
DB_PASSWORD=your-secure-password

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=umanghospitalgurugram@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_FROM_ADDRESS=umanghospitalgurugram@gmail.com
MAIL_FROM_NAME="Umang Superspeciality Hospital"
```

### Enable CORS for Frontend Domain
In `backend/config/cors.php`, ensure your frontend domain is allowed:
```php
'allowed_origins' => ['https://www.umanghospital.com', 'https://umang2-0.vercel.app'],
```

---

## 9. What Is Currently Implemented

### Frontend (Complete)
- Home page with hero, services, doctor panel, events, upgrades, testimonials, FAQ
- About page (hospital story, Capt. Umang Bharadwaj history, timeline, leadership)
- Doctors page with search and department filter
- Specialties page with 14+ departments
- Individual specialty detail pages
- Services pages (Lab & Diagnostics, ICU, Pharmacy)
- Appointment booking form
- Contact page with Google Maps
- WhatsApp float button
- Responsive design (mobile, tablet, desktop)
- All images replaced with Umang-branded images (logo visible)

### Backend (Built, Needs Deployment)
- Doctor CRUD API
- Specialty listing API
- Lead generation (callback, appointment, contact, insurance inquiry)
- CMS API (pages, stats, notices)
- Insurance company and TPA listing
- ICU unit details
- Patient authentication via Laravel Sanctum

### Not Yet Implemented
- **Patient login/registration UI** — backend is ready, frontend not connected
- **Admin dashboard** — backend admin routes exist, no frontend admin panel
- **Email notifications** — SMTP not configured; form submissions are stored in DB only
- **SMS/WhatsApp alerts** — not implemented
- **Online payment gateway** — not implemented
- **Real-time doctor availability** — static data currently

---

## 10. Key Contact & Credentials

| Item | Value |
|---|---|
| Hospital Email | umanghospitalgurugram@gmail.com |
| Emergency Phone | +91 85880 72727 |
| GitHub Repo | https://github.com/Kunalmishra77/Umang2.0 |
| Vercel Project | https://vercel.com (login with GitHub) |
| Live Frontend | https://umang2-0.vercel.app |

---

## 11. Quick Reference — Common Tasks

| Task | Where to Do It |
|---|---|
| Change phone number | `frontend/src/config/siteConfig.js` → `contacts.emergency` |
| Change bed count / ICU count | `frontend/src/config/siteConfig.js` → `stats` |
| Update OPD timings | `frontend/src/config/siteConfig.js` → `timings.opd` |
| Add/edit a doctor | `frontend/src/data/doctors.json` (static) or via backend API |
| Add a new image | Place in `frontend/public/UmangNew/`, register in `frontend/src/utils/imageAssets.js` |
| Edit About page content | `frontend/src/pages/about/About.jsx` |
| Edit home page events | `frontend/src/components/home/EventHighlights.jsx` |
| Edit home page milestones | `frontend/src/content/kbContent.js` → `about.milestones` |
| Deploy to Vercel | `git push origin main` (auto-deploys) |

---

*Last updated: June 2026*
