-- ============================================================================
-- Phase 3: Dynamic Offer Management (CMS-driven promo banners).
-- No offer shows by default; the public site only renders enabled, in-window
-- offers. Admin/editor manage everything from the admin panel. Run after 0003.
-- ============================================================================

create table if not exists public.offers (
  id          uuid primary key default gen_random_uuid(),
  is_enabled  boolean not null default false,
  title       text not null,
  description text,
  image_url   text,
  cta_text    text,
  cta_type    text not null default 'page'
              check (cta_type in ('page','url','whatsapp','popup','none')),
  cta_value   text,               -- path (/contact), full URL, or phone for whatsapp
  display     text not null default 'banner' check (display in ('banner','popup')),
  starts_at   timestamptz,
  ends_at     timestamptz,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

drop trigger if exists offers_set_updated_at on public.offers;
create trigger offers_set_updated_at
  before update on public.offers
  for each row execute function public.set_updated_at();

-- RLS: public may read only enabled + in-window offers; staff manage all -------
alter table public.offers enable row level security;

drop policy if exists "public reads active offers" on public.offers;
create policy "public reads active offers"
  on public.offers for select to anon, authenticated
  using (
    is_enabled = true
    and (starts_at is null or starts_at <= now())
    and (ends_at   is null or ends_at   >= now())
  );

drop policy if exists "staff manage offers" on public.offers;
create policy "staff manage offers"
  on public.offers for all to authenticated
  using (public.get_my_role() in ('admin','editor'))
  with check (public.get_my_role() in ('admin','editor'));

-- Staff also need to read disabled/scheduled offers in the admin panel.
drop policy if exists "staff read all offers" on public.offers;
create policy "staff read all offers"
  on public.offers for select to authenticated
  using (public.get_my_role() in ('admin','editor'));

-- ---------------------------------------------------------------------------
-- Storage bucket for offer/media images (public read, staff write).
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "public read media" on storage.objects;
create policy "public read media"
  on storage.objects for select
  using (bucket_id = 'media');

drop policy if exists "staff write media" on storage.objects;
create policy "staff write media"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'media' and public.get_my_role() in ('admin','editor'));

drop policy if exists "staff update media" on storage.objects;
create policy "staff update media"
  on storage.objects for update to authenticated
  using (bucket_id = 'media' and public.get_my_role() in ('admin','editor'));

drop policy if exists "staff delete media" on storage.objects;
create policy "staff delete media"
  on storage.objects for delete to authenticated
  using (bucket_id = 'media' and public.get_my_role() in ('admin','editor'));
