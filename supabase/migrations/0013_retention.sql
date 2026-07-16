-- ============================================================================
-- Data retention: auto-delete old rows so the DB stays small. After 0012.
--   • leads       older than 6 months  (daily 02:30)
--   • page_views  older than 6 months  (daily 02:40 — analytics grows fastest)
-- Uses pg_cron (available on Supabase).
-- ============================================================================

create extension if not exists pg_cron;

-- Re-schedule idempotently (unschedule if already present, ignore if not).
do $$ begin perform cron.unschedule('purge-old-leads'); exception when others then null; end $$;
select cron.schedule(
  'purge-old-leads',
  '30 2 * * *',
  $$delete from public.leads where created_at < now() - interval '6 months'$$
);

do $$ begin perform cron.unschedule('purge-old-page-views'); exception when others then null; end $$;
select cron.schedule(
  'purge-old-page-views',
  '40 2 * * *',
  $$delete from public.page_views where ts < now() - interval '6 months'$$
);
