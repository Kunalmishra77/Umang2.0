-- ============================================================================
-- Phase 2: spam / duplicate protection for public lead inserts.
--   1. Silently skip accidental exact-duplicate submits (double-click) within
--      2 minutes — no error shown to the visitor.
--   2. Block flooding: reject if the same phone submits > 8 leads in an hour.
-- Run after 0001_leads.sql.
-- ============================================================================

create or replace function public.guard_lead_insert()
returns trigger language plpgsql as $$
declare
  recent_dup int;
  flood int;
begin
  -- flood guard (abuse)
  select count(*) into flood
  from public.leads
  where phone = new.phone
    and created_at > now() - interval '1 hour';
  if flood >= 8 then
    raise exception 'rate_limited' using errcode = 'check_violation';
  end if;

  -- exact-duplicate guard (double submit) → skip silently
  select count(*) into recent_dup
  from public.leads
  where phone = new.phone
    and type = new.type
    and coalesce(message,'') = coalesce(new.message,'')
    and created_at > now() - interval '2 minutes';
  if recent_dup > 0 then
    return null; -- cancels this insert without raising an error
  end if;

  return new;
end; $$;

drop trigger if exists leads_guard_insert on public.leads;
create trigger leads_guard_insert
  before insert on public.leads
  for each row execute function public.guard_lead_insert();
