-- ============================================================================
-- Phase 3 (content): Specialities, Services, Gallery. After 0007.
-- ============================================================================

create table if not exists public.specialities (
  id           uuid primary key default gen_random_uuid(),
  slug         text,
  name         text not null,
  short_name   text,
  icon         text,           -- icon NAME (mapped to a component on the site)
  tagline      text,
  stat         text,
  stat_label   text,
  image_url    text,
  accent       text,           -- tailwind gradient classes, e.g. from-rose-500 to-red-600
  is_published boolean not null default true,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists public.services (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  path         text,
  description  text,
  icon         text,
  image_url    text,
  accent       text,
  bg           text,
  is_published boolean not null default true,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists public.gallery (
  id           uuid primary key default gen_random_uuid(),
  image_url    text not null,
  caption      text,
  category     text,
  is_published boolean not null default true,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

do $$
declare t text;
begin
  foreach t in array array['specialities','services','gallery'] loop
    execute format('drop trigger if exists %1$s_set_updated_at on public.%1$I;', t);
    execute format('create trigger %1$s_set_updated_at before update on public.%1$I
      for each row execute function public.set_updated_at();', t);

    execute format('alter table public.%I enable row level security;', t);

    execute format('drop policy if exists "public reads published %1$s" on public.%1$I;', t);
    execute format($p$create policy "public reads published %1$s" on public.%1$I
      for select to anon, authenticated using (is_published = true);$p$, t);

    execute format('drop policy if exists "staff reads all %1$s" on public.%1$I;', t);
    execute format($p$create policy "staff reads all %1$s" on public.%1$I
      for select to authenticated using (public.get_my_role() in ('admin','editor'));$p$, t);

    execute format('drop policy if exists "staff manage %1$s" on public.%1$I;', t);
    execute format($p$create policy "staff manage %1$s" on public.%1$I
      for all to authenticated
      using (public.get_my_role() in ('admin','editor'))
      with check (public.get_my_role() in ('admin','editor'));$p$, t);
  end loop;
end $$;
