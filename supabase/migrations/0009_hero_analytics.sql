-- ============================================================================
-- Phase 3: Homepage Hero slides + native page-view analytics. After 0008.
-- ============================================================================

-- Hero slides ------------------------------------------------------------------
create table if not exists public.hero_slides (
  id           uuid primary key default gen_random_uuid(),
  tag          text,
  heading1     text,
  heading2     text,
  description  text,
  image_url    text,
  cta_label    text,
  cta_to       text,
  accent       text default '#1E97B2',
  is_published boolean not null default true,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

drop trigger if exists hero_slides_set_updated_at on public.hero_slides;
create trigger hero_slides_set_updated_at before update on public.hero_slides
  for each row execute function public.set_updated_at();

alter table public.hero_slides enable row level security;

drop policy if exists "public reads published hero" on public.hero_slides;
create policy "public reads published hero" on public.hero_slides
  for select to anon, authenticated using (is_published = true);
drop policy if exists "staff reads all hero" on public.hero_slides;
create policy "staff reads all hero" on public.hero_slides
  for select to authenticated using (public.get_my_role() in ('admin','editor'));
drop policy if exists "staff manage hero" on public.hero_slides;
create policy "staff manage hero" on public.hero_slides
  for all to authenticated
  using (public.get_my_role() in ('admin','editor'))
  with check (public.get_my_role() in ('admin','editor'));

-- Page views (analytics) -------------------------------------------------------
create table if not exists public.page_views (
  id         bigint generated always as identity primary key,
  path       text not null,
  referrer   text,
  session_id text,
  device     text,
  ts         timestamptz not null default now()
);
create index if not exists page_views_ts_idx on public.page_views (ts desc);
create index if not exists page_views_path_idx on public.page_views (path);

alter table public.page_views enable row level security;

-- anyone can record a view (INSERT only, no read-back)
drop policy if exists "public records a view" on public.page_views;
create policy "public records a view" on public.page_views
  for insert to anon, authenticated with check (true);
-- staff can read
drop policy if exists "staff reads views" on public.page_views;
create policy "staff reads views" on public.page_views
  for select to authenticated using (public.get_my_role() in ('admin','editor'));

-- Aggregations (security definer, but gated on staff role) ----------------------
create or replace function public.admin_top_pages(days int default 7)
returns table(path text, views bigint)
language sql stable security definer set search_path = public as $$
  select pv.path, count(*)::bigint as views
  from public.page_views pv
  where pv.ts > now() - make_interval(days => days)
    and public.get_my_role() in ('admin','editor')
  group by pv.path
  order by views desc
  limit 12;
$$;

create or replace function public.admin_view_stats(days int default 7)
returns table(total_views bigint, unique_sessions bigint)
language sql stable security definer set search_path = public as $$
  select count(*)::bigint, count(distinct session_id)::bigint
  from public.page_views
  where ts > now() - make_interval(days => days)
    and public.get_my_role() in ('admin','editor');
$$;
