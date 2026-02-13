/*
  # Create Product Categories Table

  1. New Tables
    - `product_categories`
      - `id` (uuid, primary key)
      - `name` (text) - Product name like "Premium Fungisit", "Fungisit"
      - `category_type` (text) - Either "zirai_ilac" or "gubre"
      - `description` (text) - Product description
      - `icon_name` (text) - Lucide icon name to use
      - `display_order` (integer) - Order for display
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `product_categories` table
    - Add policy for public read access (products are publicly viewable)
*/

CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category_type text NOT NULL CHECK (category_type IN ('zirai_ilac', 'gubre')),
  description text NOT NULL,
  icon_name text NOT NULL DEFAULT 'Package',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view product categories"
  ON product_categories
  FOR SELECT
  TO public
  USING (true);