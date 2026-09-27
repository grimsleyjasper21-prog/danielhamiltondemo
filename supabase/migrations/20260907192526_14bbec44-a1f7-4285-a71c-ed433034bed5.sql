CREATE TABLE public.demos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id UUID NOT NULL DEFAULT auth.uid(),
  slug TEXT NOT NULL UNIQUE,
  business_name TEXT NOT NULL DEFAULT 'New demo',
  template TEXT NOT NULL DEFAULT 'beauty_wellness_v1',
  status TEXT NOT NULL DEFAULT 'draft',
  config JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX demos_owner_idx ON public.demos (owner_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.demos TO authenticated;
GRANT SELECT ON public.demos TO anon;
GRANT ALL ON public.demos TO service_role;

ALTER TABLE public.demos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners manage their demos" ON public.demos FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Visitors can read shareable demos" ON public.demos FOR SELECT TO anon
  USING (status IN ('draft', 'public'));

CREATE OR REPLACE FUNCTION public.demos_touch_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER demos_updated_at BEFORE UPDATE ON public.demos
  FOR EACH ROW EXECUTE FUNCTION public.demos_touch_updated_at();

CREATE TABLE public.demo_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  demo_id UUID NOT NULL REFERENCES public.demos(id) ON DELETE CASCADE,
  mode TEXT NOT NULL DEFAULT 'demo',
  reference TEXT NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.demo_bookings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.demo_bookings TO authenticated;
GRANT ALL ON public.demo_bookings TO service_role;

ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record a demo booking" ON public.demo_bookings FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Demo owners can read their bookings" ON public.demo_bookings FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.demos d WHERE d.id = demo_id AND d.owner_id = auth.uid()));