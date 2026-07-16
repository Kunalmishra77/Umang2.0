# Umang Hospitals — Production Deployment Plan

**Domain:** umanghospitals.in (registrar: GoDaddy) · **Hosting:** Cloud Indian Server (DirectAdmin / Linux / Apache)
**Status:** Proposal for approval. **Do not overwrite the live site until staging is verified.**

> ⚠️ I cannot access your GoDaddy / DirectAdmin / server from here. This plan + the
> hardened build artifacts are ready; the hosting, DNS, and SSL steps must be run by
> you (or with credentials in a secure session), following the exact steps below.

---

## 0. The single most important fact — architecture changed

The project is now **Supabase-native** (Laravel was retired). That means:

- **Frontend** = a static React build (`dist/`) — plain HTML/CSS/JS files.
- **Backend / DB / Auth / Storage / APIs** = **Supabase (cloud)** — nothing runs on your server.
- Your Cloud/DirectAdmin hosting only has to **serve static files** via Apache.

➡️ **No PHP app, no Node server, no queue workers, no cron on the hosting.** This removes ~80% of the classic deployment risk. The many Laravel/queue/PHP requirements in the brief **no longer apply**.

---

## 1. Hosting Audit Report

From your screenshots I can confirm: **DirectAdmin control panel, Linux, Apache, docroot `domains/umanghospitals.in/public_html`, email on-server (Maildir/imap), a prior build already uploaded.** Please confirm the rest from DirectAdmin:

| Item | How to check (DirectAdmin) | Needed for static SPA? |
|---|---|---|
| OS / Web server | Already: Linux + Apache ✅ | Apache is perfect |
| PHP version | Not required (no PHP app) | ❌ not needed |
| Node version | Not required (build is done locally) | ❌ not needed |
| Storage free | Files → disk usage | ~50–100 MB is plenty |
| RAM / CPU | Static serving is trivial | any plan works |
| SSL | SSL Certificates panel (Let's Encrypt) | ✅ required |
| DNS records | GoDaddy DNS (see §8) | ✅ |
| Email config | Maildir present → keep MX/SPF/DKIM | ✅ must preserve |
| Cron jobs | Not required | ❌ |
| DB engine | N/A — Supabase is the DB | ❌ |
| Backups | DirectAdmin → Create/Restore Backup | ✅ required |
| Apache modules | need `mod_rewrite, mod_headers, mod_deflate, mod_expires` | ✅ (standard on DirectAdmin) |

**Verdict:** the hosting is fully capable of serving this app. It just needs the static build + a good `.htaccess` + SSL.

---

## 2. Compatibility Report

| Requirement | Status |
|---|---|
| React frontend (static) | ✅ Apache serves `dist/` |
| Node build process | ✅ Runs on your machine / CI, **not** the server |
| Laravel / PHP / queues / cron | ⚪ Not applicable (Supabase-native) |
| SPA routing | ✅ via `.htaccess` rewrite (included) |
| HTTPS | ✅ Let's Encrypt in DirectAdmin |
| Env variables | ✅ Baked into the build at build time (`VITE_*`). No server env needed |
| File/image uploads | ✅ Supabase Storage (`media` bucket) |
| APIs / Auth / DB | ✅ Supabase cloud |

**Only incompatibility risk:** if the hosting disables `mod_headers`/`mod_deflate`/`mod_expires`, the security-headers/compression/caching blocks are skipped (site still works). They're standard on DirectAdmin.

---

## 3. Deployment Architecture

```
        Visitor ──HTTPS──▶  www.umanghospitals.in  (GoDaddy DNS → server IP)
                               │
                     Apache (DirectAdmin, public_html)
                       • serves static dist/ (index.html + /assets/*)
                       • .htaccess: HTTPS+www redirect, SPA fallback,
                         301s, security headers, gzip, caching
                               │
                     Browser runs the React app
                               │  supabase-js (anon key, RLS)
                               ▼
                    Supabase (ap-south-1, Mumbai)
             Postgres + Auth + Storage + Edge Functions (notify-lead)
```

**Env at build time (baked into JS):** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (rotated). The **service_role key is never in the frontend** — only in the Edge Function.

---

## 4. Database Architecture (already live)

Supabase project `lqydjmrktkehzuxarszg` (Mumbai). 13 tables, all with **Row Level Security**:
`leads · profiles · offers · site_content · hero_slides · doctors · specialities · services · testimonials · faqs · gallery · page_views` (+ `admin_top_pages`/`admin_view_stats` functions, `media` storage bucket).
Migrations `0001`–`0012` are versioned in `supabase/migrations/`. Auth = email/password (admin role). Notifications = `notify-lead` Edge Function (email/WhatsApp).

**Backups:** enable Supabase daily backups (Dashboard → Database → Backups; PITR on Pro). Migrations in git are the schema-as-code backup.

### Self-hosted Postgres vs Supabase (Phase 7 question)
| | Supabase (recommended) | Self-hosted Postgres on the Cloud server |
|---|---|---|
| Auth, Storage, RLS, REST, Realtime, Edge Functions | Built-in | Build/maintain yourself |
| Backups / PITR | Managed | Your responsibility |
| Scaling, patching, security | Managed | Your responsibility |
| Works with shared DirectAdmin | Yes (external) | Usually not (needs VPS/root, ports) |
| Effort | Low | High |
**Recommendation: stay on Supabase.** Self-hosting only makes sense on a dedicated VPS with a dedicated DevOps owner; it would mean rebuilding auth/storage/RLS/functions from scratch. Not worth it here.

---

## 5. Deployment Checklist (phased, minimal downtime)

**Prep (no impact on live site)**
1. ☐ Rotate the exposed Supabase keys (service_role + DB password). Get the **new anon key**.
2. ☐ Set `frontend/.env.local` (or CI env): `VITE_SUPABASE_URL`, new `VITE_SUPABASE_ANON_KEY`.
3. ☐ `cd frontend && npm ci && npm run build` → produces `dist/` (includes `.htaccess`, `robots.txt`, `sitemap.xml`).
4. ☐ Confirm `dist/assets/*` contains the Supabase URL (build is connected).

**Staging (verify before touching live)**
5. ☐ Create a staging target: a subdomain `staging.umanghospitals.in` in DirectAdmin (own docroot) **or** a temporary Vercel/Netlify deploy of `dist/`.
6. ☐ Upload `dist/` contents there. Point staging DNS (or use the Vercel URL).
7. ☐ Run the **Phase 14 test list** (below) on staging. Fix anything. Re-verify.

**Go live (small, reversible window)**
8. ☐ **Back up** current `public_html` (DirectAdmin → Create Backup, and/or download a zip). Verify the backup.
9. ☐ Upload the new `dist/` contents into `public_html` (replace). Keep the backup zip handy.
10. ☐ Confirm `.htaccess` is present in `public_html`.
11. ☐ Hard-refresh + run the smoke test (home, a deep route, a form, `/admin/login`).
12. ☐ Submit the new `sitemap.xml` in Google Search Console.

**Rollback ready at every step** (see §6).

---

## 6. Rollback Plan
- **Before go-live:** you have a verified backup zip of the old `public_html`.
- **If the new site misbehaves:** in DirectAdmin, delete the new files and **restore the backup** (or re-upload the old zip). Because it's static files, rollback is a 2-minute file swap — no DB migration to undo (Supabase is unaffected).
- **DNS-level rollback:** if you changed DNS, revert the A record to the old value (TTL permitting). Keep the old server/site intact until 48h of stable new-site traffic.

---

## 7. SEO Migration Checklist
- ☑ `robots.txt` fixed (blocks `/admin`, removed dead routes). *(done in repo)*
- ☑ `sitemap.xml` regenerated with correct slugs + new pages. *(done in repo)*
- ☑ 301 redirects for old `.html` URLs in `.htaccess` (Pulmonology, General Surgery, index). *(done — extend with any other old URLs you know of)*
- ☑ Canonical, meta title/description, Open Graph, Twitter cards, JSON-LD — present via `SeoHead`.
- ☐ **Get the old site's URL list** (from Search Console "Pages" or old sitemap) and add a 301 for any that changed. **No old indexed URL should 404.**
- ☐ Verify favicon + apple-touch-icon load.
- ☐ Confirm one canonical host (we force **www**; make sure GoDaddy/Search Console property matches).

---

## 8. DNS Configuration Guide (GoDaddy)
Point the domain at the hosting (get the server IP from DirectAdmin → "Server Information"/"IP").
| Type | Host | Value | Note |
|---|---|---|---|
| A | @ | `<server IP>` | root domain |
| A or CNAME | www | `<server IP>` / `@` | we canonicalize to www |
| MX | @ | (existing mail host) | **do not change** — keep email working |
| TXT (SPF) | @ | existing `v=spf1 …` | keep |
| TXT (DKIM) | selector._domainkey | existing | keep |
| TXT (DMARC) | _dmarc | existing / `v=DMARC1; p=none;` | keep/add |
- Lower the A-record **TTL to 600s a day before** cutover for a fast rollback.
- If you instead deploy to Vercel/Netlify, use their provided A/CNAME targets and leave MX/SPF/DKIM untouched.

---

## 9. SSL Configuration Guide (DirectAdmin)
1. DirectAdmin → **SSL Certificates** → "Let's Encrypt" → include `umanghospitals.in` + `www` → issue.
2. Enable "Force SSL/HTTPS redirect" (also enforced in `.htaccess`).
3. HSTS is set in `.htaccess` (2-year, includeSubDomains, preload) — only after you've confirmed HTTPS works everywhere.
4. Fix any mixed-content: all our asset URLs are relative/https, Supabase is https — should be clean.

---

## 10. Post-Deployment Verification Checklist (Phase 14)
- ☐ Home + every top nav page loads (no 404 / blank).
- ☐ A deep route works on **direct load + refresh** (SPA rewrite OK), e.g. `/specialities/cardiac`.
- ☐ HTTP → HTTPS redirect; non-www → www redirect; padlock shows.
- ☐ Submit each form (Hero consult, Contact, Appointment, Cashless) → row appears in `/admin` Leads.
- ☐ `/admin/login` works; dashboard shows data; edits reflect on the site.
- ☐ Images load (Supabase + `/assets`); no broken images.
- ☐ Mobile responsive; no horizontal scroll.
- ☐ View-source shows meta/canonical/OG/JSON-LD; `robots.txt` + `sitemap.xml` reachable.
- ☐ No console errors; no mixed-content warnings.
- ☐ Lighthouse ≥ 90 (Perf/A11y/Best-Practices/SEO) — the build already does code-split, lazy routes, WebP, hashed-asset caching.
- ☐ Submit sitemap in Google Search Console; request indexing for the home page.

---

## Two deployment-target options (pick one)
- **A — Existing DirectAdmin hosting** (what you have): upload `dist/` to `public_html`. Simple, uses current infra + email. Apache serves static via the included `.htaccess`. **Recommended given your setup.**
- **B — Vercel/Netlify** (static host + CDN): better global performance, atomic deploys, auto-HTTPS, instant rollback. Point GoDaddy DNS at their target; keep MX/SPF/DKIM on GoDaddy/DirectAdmin. Consider later for performance.

Either way the app + Supabase are identical; only where the static files live changes.
