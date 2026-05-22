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
