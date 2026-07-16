-- ============================================================================
-- Phase 3: Site content store (CMS). A simple key → JSONB store the public site
-- reads (with static fallbacks) and staff edit from the admin panel. Run after 0004.
-- Extensible: add new keys (hero, about, sections...) without schema changes.
-- ============================================================================

create table if not exists public.site_content (
  key        text primary key,
  value      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

drop trigger if exists site_content_set_updated_at on public.site_content;
create trigger site_content_set_updated_at
  before update on public.site_content
  for each row execute function public.set_updated_at();

alter table public.site_content enable row level security;

drop policy if exists "public reads content" on public.site_content;
create policy "public reads content"
  on public.site_content for select to anon, authenticated using (true);

drop policy if exists "staff writes content" on public.site_content;
create policy "staff writes content"
  on public.site_content for all to authenticated
  using (public.get_my_role() in ('admin','editor'))
  with check (public.get_my_role() in ('admin','editor'));

-- Seed current values (from the site's config) so the panel starts populated.
insert into public.site_content (key, value) values
  ('contact', jsonb_build_object(
      'emergency', '+91 85880 72727',
      'whatsapp',  '+91 85880 72727',
      'email',     'umanghospitalgurugram@gmail.com',
      'address',   'Building No. 306, Opposite Radha Swami Satsang Bhawan, Pataudi Road, Civil Lines, Gurugram – 122001, Haryana, India'
  )),
  ('social', jsonb_build_object(
      'facebook','', 'instagram','', 'linkedin','', 'twitter','', 'youtube',''
  )),
  ('footer', jsonb_build_object('about_text','')),
  ('seo', jsonb_build_object('title','', 'description',''))
on conflict (key) do nothing;
