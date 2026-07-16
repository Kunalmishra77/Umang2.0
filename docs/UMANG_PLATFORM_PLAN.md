# Umang Hospital — Platform Audit, Architecture & Roadmap

Status: **Proposal for approval.** No backend/CMS code will be built until you approve Phase 2+.
Frontend: React 18 + Vite + Tailwind v4, deployed on Vercel.
Existing backend: Laravel + SQLite (see recommendation to retire).

---

## 1. Audit Report (grounded in the current code)

### Already fixed in this session
- **Typography unified to two families** — Playfair Display (headings, `font-serif`) + Figtree (body, `font-sans`). Montserrat removed from the font load and stack.
- **Italics removed** site-wide (only 2 usages existed; font load no longer requests italics).
- **Headings normalized** — every homepage section heading on one scale; ~16 interior-page headings across all page dirs given the serif heading font; 4 non-monotonic size bugs fixed.
- **Navbar** — larger CTA + logo, taller/premium sticky bar sized to the logo, correct `--header-h` offsets.
- **Footer logo** — dark-optimized PNG (transparent bg, colored icon, white text).
- **Hero H1** — resized so no slide wraps to an extra line.
- **About page** — root-caused (dead preview server during rebuild, not a code bug; chunk serves HTTP 200) and hardened with `lazyWithRetry` so the "Failed to fetch dynamically imported module" error self-recovers after redeploys/network blips.

### Open issues found
| # | Severity | Issue | Root cause | Fix |
|---|----------|-------|-----------|-----|
| 1 | 🔴 Critical | **Forms capture no data in production** | `VITE_API_URL` defaults to `http://localhost:8000/api`; on the live site the browser POSTs to the visitor's own localhost | Point forms at Supabase (Phase 2) |
| 2 | 🔴 Critical | **Secrets exposed** (service_role, DB password, Vercel token) | Pasted in chat; `.env.local` committed | Rotate all; RLS + Edge Functions; gitignore `.env*` |
| 3 | 🟠 High | **No lead notifications** | Laravel `MAIL_MAILER=log`; nothing emailed/messaged | Email/WhatsApp on new lead (Phase 2) |
| 4 | 🟠 High | **SQLite not production-safe** | Ephemeral file; lost on serverless redeploys | Move to Supabase Postgres |
| 5 | 🟠 High | **All content hardcoded** | Copy/images/doctors/FAQs live in JSX + `siteConfig` | CMS-drive it (Phase 3) |
| 6 | 🟡 Medium | Lazy-route fragility after deploys | No retry on dynamic import | ✅ Fixed (`lazyWithRetry`) |
| 7 | 🟡 Medium | Large JS chunk warnings | No `manualChunks` | Vendor splitting (Phase 5) |
| 8 | 🟡 Medium | No RLS / auth / audit logs | No real backend security layer | Phase 2 security |
| 9 | 🟢 Low | Full-site route/console/responsive sweep not yet automated | — | Playwright route-crawler (Phase 1) |

> Note: a claimed exhaustive "every page, every breakpoint, no console error" pass needs an automated crawler run (Playwright) — I'll wire one so it's evidence-backed, not asserted.

---

## 2. Recommended Architecture — Supabase-native

**Decision: retire the Laravel + SQLite backend; make Supabase the single backend** (Postgres + Auth + Storage + Edge Functions + RLS). This directly serves the goal of "no code changes/redeploys for content" and removes a whole server to secure.

```
┌────────────── Browser (React/Vite on Vercel) ──────────────┐
│  Public site      → supabase-js (ANON key)                  │
│    • read published content (RLS: public SELECT)            │
│    • INSERT leads   (RLS: anon INSERT-only, no SELECT)      │
│  Admin panel /admin → Supabase Auth (email+password)        │
│    • RLS gates every read/write to role = 'admin'/'editor'  │
└───────────────┬─────────────────────────────┬───────────────┘
                │                             │
        Supabase Postgres (RLS)      Supabase Storage (buckets)
                │                             │  media/, offers/, doctors/
        Supabase Edge Functions (service_role, server-only)
          • lead notifications (email/WhatsApp)
          • image compression on upload
          • analytics ingest, rate limiting, spam checks
```

- **anon key** ships to the browser; safe **only because RLS denies everything by default**.
- **service_role** lives **only** inside Edge Functions.

---

## 3. Database Schema (Supabase Postgres)

Content + operations tables (abbreviated; every table gets `id uuid pk`, `created_at`, `updated_at`):

- `leads` — name, phone, email, message, source_page, type (callback/appointment/contact/insurance), speciality, status (new/contacted/converted/closed), notes, created_at. **RLS: anon INSERT only; admin full.**
- `profiles` — user_id → role (admin/editor/viewer). Drives RLS + admin access.
- `site_content` — key/section JSONB (hero, about, footer, contact, social, SEO) — generic editable content store.
- `doctors`, `specialities`, `departments`, `facilities`, `testimonials`, `faqs`, `services`, `clinics` — structured content, each with `is_published`, `sort_order`.
- `offers` — is_enabled, title, description, image_url, cta_text, cta_type (page/url/whatsapp/popup), cta_value, starts_at, ends_at. **Default: none enabled.**
- `media_assets` — path, folder, mime, width/height, size, alt.
- `page_views` — path, referrer, device, country, session_id, ts (analytics ingest).
- `audit_logs` — actor, action, table, record_id, diff, ip, ts.

All content tables: **public SELECT only where `is_published = true`; INSERT/UPDATE/DELETE only for admin/editor.**

---

## 4. Admin Panel (CMS) Architecture

- Protected route group `/admin/*` in the same React app (guarded by Supabase session + `role`), matching the site's design system (Playfair/Figtree, teal/orange).
- Modules: **Dashboard** (leads/appointments/visitors summary, quick actions, notifications) · **Leads** (table, status, notes, export) · **Content** (hero, about, services, doctors, facilities, departments, testimonials, FAQs, gallery, contact, footer, social, SEO) · **Offers** (the dynamic banner module — disabled by default) · **Media Library** (upload/replace/delete/folders/search, auto-compress) · **Analytics** · **Settings/Users/Roles**.
- Everything reads/writes Supabase tables → **content changes go live instantly, zero redeploy.**

---

## 5. Security Architecture

- **RLS on every table**, default-deny; policies per role. anon = INSERT leads + SELECT published content only.
- **Auth**: Supabase email/password for staff; strong password policy; no public sign-up for admin.
- **service_role** only in Edge Functions; never in `VITE_` env.
- **Edge Functions** handle: notifications, uploads/compression, analytics, spam/rate-limit — with input validation + output sanitization.
- **Spam/abuse**: honeypot + rate limiting + (optional) Turnstile/hCaptcha on public forms; duplicate-submission guard.
- **HTTP security headers** via Vercel (`CSP`, `X-Frame-Options: DENY` (clickjacking), `X-Content-Type-Options`, `Referrer-Policy`, HSTS).
- **Protected admin routes** client + server (RLS is the real gate; UI guard is convenience).
- **Audit logging** of all admin mutations; **secure cookies**; open-redirect-safe CTA handling; file-upload validation (mime/size/dimensions).
- Threats mapped: SQLi (parameterized/PostgREST), XSS (React escaping + sanitize rich fields), CSRF (token-based, SameSite), SSRF/command-injection (no arbitrary server exec; Edge Functions validate), brute force (rate limit + lockout), privilege escalation (RLS role checks), sensitive-data exposure (least-privilege keys).

---

## 6. API Architecture

- **Reads/writes**: PostgREST via `supabase-js` (auto-secured by RLS) — no hand-written CRUD API.
- **Privileged/side-effect ops**: typed Edge Functions (`/functions/v1/notify-lead`, `/functions/v1/upload-media`, `/functions/v1/track-view`).
- Frontend service layer `src/lib/supabase.js` + typed data hooks (`useLeads`, `useContent`, `useOffers`, …) replacing the current axios/Laravel calls.

---

## 7. Folder Structure (target)

```
frontend/src/
  lib/            supabase client, auth, guards
  features/
    leads/  content/  offers/  media/  analytics/  auth/   (hooks + api + types per feature)
  admin/          admin panel routes + components (design-system matched)
  pages/ components/ ...   (public site, largely unchanged)
supabase/
  migrations/     SQL schema + RLS policies
  functions/      edge functions (notify-lead, upload-media, track-view)
  seed.sql        initial content pulled from current siteConfig/JSX
```

---

## 8. Analytics — recommendation

Full analytics (unique visitors, bounce rate, session duration, country, device, sources) is best served by a privacy-friendly product (**Plausible / Umami / GA4**) rather than reinventing it. Proposal: embed Plausible/Umami for the rich metrics, plus a lightweight `page_views` table for a native "top pages / trend" widget in the admin dashboard. (You already have GTM installed, which can host this.)

---

## 9. Implementation Roadmap (phased, priority-ordered)

| Phase | Scope | Outcome | Rough effort |
|-------|-------|---------|--------------|
| **1. Stabilize & audit** | Playwright route+console+responsive crawler; fix any real 404/blank/overflow; security headers; gitignore/rotate secrets | Verified-green site, evidence report | ~1–2 days |
| **2. Supabase backend + Leads** ⭐ | Schema + RLS + Auth; wire all forms → `leads`; validation, dup-guard, spam; lead notifications; **retire localhost API** | **Forms actually capture + notify** | ~3–5 days |
| **3. Admin panel + CMS** | `/admin` (auth+roles), Dashboard, Leads mgmt, Content modules, **Offers module**, Media library | Content editable, zero redeploy | ~1–2 weeks |
| **4. Analytics** | Plausible/Umami embed + native top-pages widget | Traffic dashboard | ~2–3 days |
| **5. Perf & polish** | manualChunks, image optimization/lazyload audit, Lighthouse (perf/a11y/SEO), caching | Premium performance | ~2–3 days |

⭐ = highest business value (stops losing leads).

---

## 10. Decisions I need from you before Phase 2

1. **Retire Laravel and go Supabase-native?** (recommended) — or keep Laravel as an API layer?
2. **Admin auth**: Supabase email/password for staff — OK? Who are the initial admin user(s)?
3. **Lead notifications**: email, WhatsApp, or both? Which address/number?
4. **Analytics**: OK to use Plausible/Umami/GA4 for the heavy metrics (vs. fully custom)?
5. **Scope/sequence**: start with Phase 1+2 (stabilize + real lead capture) and treat the full CMS (Phase 3) as the next milestone? This is a multi-week build, so I recommend shipping in these increments rather than all at once.

Once you confirm, I'll start at Phase 1 and implement phase-by-phase, keeping the site stable and building the secure Supabase layer (using rotated keys stored only in the right places).
