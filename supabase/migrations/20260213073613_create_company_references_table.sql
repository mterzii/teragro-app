/*
  # Create company references table

  1. New Tables
    - `company_references`
      - `id` (uuid, primary key) - Unique identifier for each reference
      - `name` (text) - Company or organization name
      - `category` (text) - Category or sector (e.g., "Tarım & İnşaat", "Otomotiv & Lojistik", "Kamu")
      - `logo_url` (text) - URL to the company logo image
      - `display_order` (integer) - Order for displaying references
      - `created_at` (timestamptz) - Timestamp when the reference was created

  2. Security
    - Enable RLS on `company_references` table
    - Add policy for public read access (references are public information)
*/

CREATE TABLE IF NOT EXISTS company_references (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  logo_url text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE company_references ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view company references"
  ON company_references
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample data
INSERT INTO company_references (name, category, logo_url, display_order) VALUES
  ('IOLIN', 'Tarım & İnşaat', 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=200', 1),
  ('GÜNEY ÇELİK', 'Otomotiv & Lojistik', 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=200', 2),
  ('YÜREĞİR BELEDİYESİ', 'Kamu', 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=200', 3),
  ('AKSA ENERJİ', 'Enerji', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200', 4),
  ('TURKCELL', 'Teknoloji', 'https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg?auto=compress&cs=tinysrgb&w=200', 5),
  ('KONYA ŞEKER', 'Gıda', 'https://images.pexels.com/photos/6646027/pexels-photo-6646027.jpeg?auto=compress&cs=tinysrgb&w=200', 6),
  ('THY', 'Havacılık', 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=200', 7),
  ('ANADOLU EFES', 'İçecek', 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=200', 8),
  ('MIGROS', 'Perakende', 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=200', 9),
  ('BORUSAN', 'Holding', 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=200', 10),
  ('ARÇELİK', 'Beyaz Eşya', 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=200', 11),
  ('VESTEL', 'Elektronik', 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=200', 12),
  ('TAV HAVALİMANLARI', 'Havacılık', 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=200', 13),
  ('DOĞUŞ OTOMOTİV', 'Otomotiv', 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=200', 14),
  ('PEGASUS', 'Havacılık', 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=200', 15),
  ('BİM', 'Perakende', 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=200', 16),
  ('ŞOK MARKETLER', 'Perakende', 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=200', 17),
  ('FORD OTOSAN', 'Otomotiv', 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=200', 18),
  ('TOFAŞ', 'Otomotiv', 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=200', 19),
  ('ASELSAN', 'Savunma', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200', 20)
ON CONFLICT DO NOTHING;