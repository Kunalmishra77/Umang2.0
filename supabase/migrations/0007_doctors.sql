-- ============================================================================
-- Phase 3 (content): Doctors. Public reads published; staff manage. After 0006.
-- ============================================================================

create table if not exists public.doctors (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  dept         text,
  dept_slug    text,
  role         text,
  exp          text,
  gender       text,
  image_url    text,
  about        text,
  loc          text,
  rating       numeric(2,1),
  is_published boolean not null default true,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

drop trigger if exists doctors_set_updated_at on public.doctors;
create trigger doctors_set_updated_at before update on public.doctors
  for each row execute function public.set_updated_at();

alter table public.doctors enable row level security;

drop policy if exists "public reads published doctors" on public.doctors;
create policy "public reads published doctors" on public.doctors
  for select to anon, authenticated using (is_published = true);

drop policy if exists "staff reads all doctors" on public.doctors;
create policy "staff reads all doctors" on public.doctors
  for select to authenticated using (public.get_my_role() in ('admin','editor'));

drop policy if exists "staff manage doctors" on public.doctors;
create policy "staff manage doctors" on public.doctors
  for all to authenticated
  using (public.get_my_role() in ('admin','editor'))
  with check (public.get_my_role() in ('admin','editor'));
