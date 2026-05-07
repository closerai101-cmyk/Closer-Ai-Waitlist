-- CloserAI waitlist schema
-- Run once against the direct connection string:
--   psql "$SUPABASE_DB_URL" -v ON_ERROR_STOP=1 -f scripts/waitlist_schema.sql

begin;

create extension if not exists citext;
create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id          uuid primary key default gen_random_uuid(),
  full_name   text not null check (char_length(trim(full_name)) between 2 and 120),
  email       citext not null unique check (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'),
  country     char(2) check (country ~ '^[A-Z]{2}$'),
  created_at  timestamptz not null default now()
);

create index if not exists waitlist_signups_created_at_idx
  on public.waitlist_signups (created_at desc);

alter table public.waitlist_signups enable row level security;

revoke all on public.waitlist_signups from anon, authenticated;

grant insert (full_name, email, country) on public.waitlist_signups to anon;

drop policy if exists "anon_insert_waitlist" on public.waitlist_signups;
create policy "anon_insert_waitlist"
  on public.waitlist_signups
  for insert
  to anon
  with check (true);

commit;
