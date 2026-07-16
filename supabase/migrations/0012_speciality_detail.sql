-- ============================================================================
-- Rich speciality detail fields (for /specialities/:slug pages). After 0011.
-- ============================================================================
alter table public.specialities
  add column if not exists subtitle          text,
  add column if not exists description       text,
  add column if not exists approach          text,
  add column if not exists recovery          text,
  add column if not exists emergency_callout text,
  add column if not exists statistics        jsonb not null default '[]'::jsonb,
  add column if not exists procedures        jsonb not null default '[]'::jsonb,
  add column if not exists tech              jsonb not null default '[]'::jsonb,
  add column if not exists success_stories   jsonb not null default '[]'::jsonb,
  add column if not exists related_services  jsonb not null default '[]'::jsonb,
  add column if not exists bullets           jsonb not null default '[]'::jsonb,
  add column if not exists faq               jsonb not null default '[]'::jsonb;
