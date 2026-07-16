-- ============================================================================
-- Retention window = 3 MONTHS.
-- Leads: MANUAL admin decision (download-then-delete or delete-only) via the
--        admin panel banner — so remove the automatic purge cron for leads.
-- page_views: auto-purge after 3 months (analytics only, no decision needed).
-- Also allow staff to DELETE leads (needed for the admin retention actions).
-- After 0013.
-- ============================================================================

do $$ begin perform cron.unschedule('purge-old-leads'); exception when others then null; end $$;

do $$ begin perform cron.unschedule('purge-old-page-views'); exception when others then null; end $$;
select cron.schedule(
  'purge-old-page-views',
  '40 2 * * *',
  $$delete from public.page_views where ts < now() - interval '3 months'$$
);

drop policy if exists "staff delete leads" on public.leads;
create policy "staff delete leads"
  on public.leads for delete to authenticated
  using (public.get_my_role() in ('admin','editor'));
