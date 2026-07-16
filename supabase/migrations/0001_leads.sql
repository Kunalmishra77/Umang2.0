-- ============================================================================
-- Umang Hospital — Phase 2: Lead capture
-- Run this in Supabase → SQL Editor (or via `supabase db push`).
-- Creates a single unified leads table for every public form, with RLS that
-- lets anonymous visitors INSERT a lead but NEVER read leads back.
-- ============================================================================

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  type         text not null check (type in ('callback','appointment','contact','insurance')),
  name         text not null,
  phone        text not null,
  email        text,
  message      text,
  speciality   text,
  source_page  text,
  extra        jsonb not null default '{}'::jsonb,   -- department, preferred_date, inquiry_type, etc.
  status       text not null default 'new' check (status in ('new','contacted','converted','closed')),
  notes        text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);
create index if not exists leads_type_idx        on public.leads (type);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security: default-deny, then allow only public inserts.
-- Reading/updating leads is done from the admin panel with an authenticated
-- admin role (added in Phase 3) or the service_role key (server-side only).
-- ---------------------------------------------------------------------------
alter table public.leads enable row level security;

drop policy if exists "public can submit a lead" on public.leads;
create policy "public can submit a lead"
  on public.leads for insert
  to anon, authenticated
  with check (true);

-- NOTE: no SELECT/UPDATE/DELETE policy for anon → visitors cannot read or
-- modify leads. service_role (Edge Functions / admin API) bypasses RLS.
