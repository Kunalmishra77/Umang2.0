-- ============================================================================
-- Phase 3 (content): Testimonials + FAQs. Public reads published rows; staff
-- manage everything. Run after 0005.
-- ============================================================================

-- Testimonials -----------------------------------------------------------------
create table if not exists public.testimonials (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  text         text not null,
  loc          text,
  dept         text,
  rating       int not null default 5 check (rating between 1 and 5),
  image_url    text,
  is_published boolean not null default true,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- FAQs -------------------------------------------------------------------------
create table if not exists public.faqs (
  id           uuid primary key default gen_random_uuid(),
  question     text not null,
  answer       text not null,
  category     text,
  is_published boolean not null default true,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- shared updated_at triggers
drop trigger if exists testimonials_set_updated_at on public.testimonials;
create trigger testimonials_set_updated_at before update on public.testimonials
  for each row execute function public.set_updated_at();
drop trigger if exists faqs_set_updated_at on public.faqs;
create trigger faqs_set_updated_at before update on public.faqs
  for each row execute function public.set_updated_at();

-- RLS: public reads published; staff manage all --------------------------------
do $$
declare t text;
begin
  foreach t in array array['testimonials','faqs'] loop
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
