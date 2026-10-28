# Supabase proxy for umanghospitals.in

Some Indian ISPs DNS-hijack `*.supabase.co`, so browsers on those networks cannot
reach the Supabase project directly ("Failed to fetch" on the admin login, lead
forms and CMS content). This Vercel project is a pass-through rewrite to the
Supabase project; the frontend's `VITE_SUPABASE_URL` points here instead.

It forwards every path, method and header unchanged (anon key, user JWT). It
holds no secrets. Deploy: `vercel deploy --prod` from this folder.

Longer term, a Supabase custom domain (e.g. `api.umanghospitals.in`) can replace it.
