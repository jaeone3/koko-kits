create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  kit_slug text,
  locale text,
  source text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists events_event_name_idx on public.events (event_name);
create index if not exists events_kit_slug_idx on public.events (kit_slug);
create index if not exists events_created_at_idx on public.events (created_at desc);

alter table public.events enable row level security;

grant all on table public.events to service_role;

-- Per-event-type views for readability in the Supabase Table Editor.

create or replace view public.v_kit_views as
select created_at, kit_slug, source, locale, referrer, user_agent
from public.events
where event_name = 'page_view' and kit_slug is not null
order by created_at desc;

create or replace view public.v_downloads as
select
  created_at,
  kit_slug,
  case when event_name = 'pdf_download_click' then 'PDF' else 'Anki' end as kind,
  locale,
  referrer,
  user_agent
from public.events
where event_name in ('pdf_download_click', 'anki_download_click')
order by created_at desc;

create or replace view public.v_quizzes as
select created_at, kit_slug, event_name as phase, locale, user_agent
from public.events
where event_name in ('quiz_start', 'quiz_complete')
order by created_at desc;

create or replace view public.v_koko_clicks as
select created_at, kit_slug, locale, referrer, user_agent
from public.events
where event_name = 'koko_cta_click'
order by created_at desc;

create or replace view public.v_daily_kpi as
select
  date_trunc('day', created_at at time zone 'Asia/Seoul')::date as day_kst,
  kit_slug,
  count(*) filter (where event_name = 'page_view' and source = 'kit_detail') as page_views,
  count(*) filter (where event_name = 'quiz_start') as quiz_starts,
  count(*) filter (where event_name = 'quiz_complete') as quiz_completes,
  count(*) filter (where event_name = 'pdf_download_click') as pdf_clicks,
  count(*) filter (where event_name = 'anki_download_click') as anki_clicks,
  count(*) filter (where event_name = 'koko_cta_click') as koko_clicks
from public.events
where kit_slug is not null
group by 1, 2
order by 1 desc, 2;

grant select on public.v_kit_views, public.v_downloads, public.v_quizzes, public.v_koko_clicks, public.v_daily_kpi to service_role;
