-- ============================================================================
-- Phase 3: "Feature on homepage" flag for specialities & services, so the
-- homepage can show a curated subset while the full catalog lives on the
-- listing pages / admin. After 0009.
-- ============================================================================

alter table public.specialities add column if not exists featured boolean not null default false;
alter table public.services    add column if not exists featured boolean not null default false;

-- Seed the homepage-curated set (the original highlights) as featured.
update public.specialities set featured = true where sort_order < 6;
update public.services    set featured = true where sort_order < 4;
