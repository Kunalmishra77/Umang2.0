# Supabase setup — Umang Hospital (Phase 2: Lead capture)

Everything here is server/config; no secret values are committed. Do these steps
with your **rotated** keys.

## 1. Create the database schema
Supabase Dashboard → **SQL Editor** → run, in order:
1. `migrations/0001_leads.sql` — `leads` table + RLS (anon can INSERT only).
2. `migrations/0002_leads_spam_guard.sql` — duplicate/flood protection.

## 2. Point the frontend at Supabase
Set these as **Vercel → Project → Settings → Environment Variables** (and in a
local `frontend/.env.local` for dev):
```
VITE_SUPABASE_URL      = https://<your-project>.supabase.co
VITE_SUPABASE_ANON_KEY = <rotated anon public key>
```
Redeploy. The public forms (Hero consultation, General Appointment, Contact,
Inquiry Hub, Cashless Insurance, Service Booking) now write to `leads`.

## 3. Lead notifications (email + WhatsApp)
Deploy the Edge Function:
```
supabase functions deploy notify-lead
```
Set its secrets (only the channels you want will fire):
```
# Email via Resend
supabase secrets set RESEND_API_KEY=...  NOTIFY_EMAIL_TO=reception@umang...  NOTIFY_EMAIL_FROM="Umang <leads@yourdomain>"
# WhatsApp via Twilio
supabase secrets set TWILIO_ACCOUNT_SID=... TWILIO_AUTH_TOKEN=... TWILIO_WHATSAPP_FROM=whatsapp:+14155238886 NOTIFY_WHATSAPP_TO=whatsapp:+91XXXXXXXXXX
# Optional shared secret (also add as the webhook header below)
supabase secrets set WEBHOOK_SECRET=<random-string>
```

Fire it on every new lead — Dashboard → **Database → Webhooks** → Create:
- Table: `public.leads`, Events: **INSERT**
- Type: **Supabase Edge Function** → `notify-lead`
- (If you set `WEBHOOK_SECRET`) add HTTP header `x-webhook-secret: <same value>`

## Security notes
- `anon` key is safe in the browser **only because RLS is enabled**. Never put
  the `service_role` key or DB password in `VITE_*` / frontend code.
- Rotate the keys that were shared in chat before going live.

## Not yet migrated (separate phases)
- **Patient portal** (login/register/dashboard, `BookAppointmentPatient`) — needs
  Supabase Auth + `appointments` table (dedicated phase).
- **Event Registration** form has unbound inputs — needs state wiring before it
  can capture leads.
- **Admin panel / CMS** — Phase 3.
