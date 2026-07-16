-- ============================================================================
-- Phase 3: Admin auth + roles, and staff access to leads.
-- Run after 0001 / 0002.
-- ============================================================================

-- Staff profiles, 1:1 with auth.users
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  full_name  text,
  role       text not null default 'viewer' check (role in ('admin','editor','viewer')),
  created_at timestamptz not null default now()
);

-- SECURITY DEFINER helper: read the caller's role without tripping RLS recursion.
create or replace function public.get_my_role()
returns text language sql stable security definer set search_path = public as $$
  select role from public.profiles where id = auth.uid();
$$;

-- Auto-create a profile (role 'viewer') whenever an auth user is created.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email))
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- RLS: profiles ---------------------------------------------------------------
alter table public.profiles enable row level security;

drop policy if exists "read own or admin reads all" on public.profiles;
create policy "read own or admin reads all"
  on public.profiles for select to authenticated
  using (id = auth.uid() or public.get_my_role() = 'admin');

drop policy if exists "admin manages profiles" on public.profiles;
create policy "admin manages profiles"
  on public.profiles for all to authenticated
  using (public.get_my_role() = 'admin')
  with check (public.get_my_role() = 'admin');

-- RLS: leads — staff (admin/editor) can read & update; anon still INSERT-only ---
drop policy if exists "staff read leads" on public.leads;
create policy "staff read leads"
  on public.leads for select to authenticated
  using (public.get_my_role() in ('admin','editor'));

drop policy if exists "staff update leads" on public.leads;
create policy "staff update leads"
  on public.leads for update to authenticated
  using (public.get_my_role() in ('admin','editor'))
  with check (public.get_my_role() in ('admin','editor'));

-- ============================================================================
-- After running: create your admin user in Dashboard → Authentication → Users
-- (Add user, set email + password), then promote to admin:
--   update public.profiles set role = 'admin' where id =
--     (select id from auth.users where email = 'you@umang...');
-- ============================================================================
