CREATE POLICY "Studio users manage demo assets" ON storage.objects FOR ALL TO authenticated
  USING (bucket_id = 'demo-assets' AND owner = auth.uid())
  WITH CHECK (bucket_id = 'demo-assets' AND owner = auth.uid());