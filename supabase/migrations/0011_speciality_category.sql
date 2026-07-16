-- ============================================================================
-- Add category to specialities (used by the /specialities listing filter).
-- After 0010.
-- ============================================================================
alter table public.specialities add column if not exists category text default 'medical';

update public.specialities set category = 'surgical' where slug in ('cardiac','neuro','ortho','urology','surgery','oncology');
update public.specialities set category = 'medical'  where slug in ('gastro','pulmonology','gynecology');
update public.specialities set category = 'support'  where slug in ('icu');
