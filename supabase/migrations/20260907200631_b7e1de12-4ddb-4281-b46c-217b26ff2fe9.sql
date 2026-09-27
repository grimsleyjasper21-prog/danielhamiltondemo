CREATE TABLE public.demo_edits (
  id uuid primary key default gen_random_uuid(),
  demo_id uuid not null references public.demos(id) on delete cascade,
  owner_id uuid not null default auth.uid(),
  prompt text not null default '',
  previous_config jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
GRANT SELECT, INSERT, DELETE ON public.demo_edits TO authenticated;
GRANT ALL ON public.demo_edits TO service_role;
ALTER TABLE public.demo_edits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owners manage their edit history" ON public.demo_edits FOR ALL TO authenticated USING (owner_id = auth.uid()) WITH CHECK (owner_id = auth.uid());
CREATE INDEX demo_edits_demo_idx ON public.demo_edits(demo_id, created_at DESC);