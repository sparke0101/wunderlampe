/*
  # Create contacts and reservations tables

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `subject` (text, required)
      - `message` (text, required)
      - `status` (text, default 'new')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `reservations`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `date` (date, required)
      - `time` (text, required)
      - `guests` (integer, required)
      - `message` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage data
    - Add policies for anonymous users to insert data
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  guests integer NOT NULL CHECK (guests > 0 AND guests <= 20),
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Create policies for contacts
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create policies for reservations
CREATE POLICY "Anyone can insert reservations"
  ON reservations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all reservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update reservations"
  ON reservations
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reservations_updated_at
  BEFORE UPDATE ON reservations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS contacts_status_idx ON contacts(status);
CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts(email);

CREATE INDEX IF NOT EXISTS reservations_created_at_idx ON reservations(created_at DESC);
CREATE INDEX IF NOT EXISTS reservations_status_idx ON reservations(status);
CREATE INDEX IF NOT EXISTS reservations_date_idx ON reservations(date);
CREATE INDEX IF NOT EXISTS reservations_email_idx ON reservations(email);