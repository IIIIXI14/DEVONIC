
-- Create a table for storing contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_idea TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for portfolio projects
CREATE TABLE public.portfolio_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  tech_stack TEXT[],
  project_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for service packages
CREATE TABLE public.service_packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  starting_price INTEGER NOT NULL,
  features TEXT[],
  category TEXT NOT NULL, -- 'website', 'app', 'custom'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for testimonials
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  project_type TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for blog posts (optional for future use)
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  tags TEXT[],
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for contact submissions (public read for admin, insert for everyone)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact form" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Allow reading contact submissions (for admin dashboard in future)
CREATE POLICY "Public read access to contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (true);

-- Enable RLS for other tables with public read access
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio, services, and testimonials
CREATE POLICY "Public read access to portfolio" 
  ON public.portfolio_projects 
  FOR SELECT 
  USING (true);

CREATE POLICY "Public read access to services" 
  ON public.service_packages 
  FOR SELECT 
  USING (true);

CREATE POLICY "Public read access to testimonials" 
  ON public.testimonials 
  FOR SELECT 
  USING (true);

CREATE POLICY "Public read access to blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (published = true);

-- Insert some initial data
INSERT INTO public.service_packages (name, description, starting_price, features, category) VALUES
('Basic Website', 'Perfect for small businesses and startups', 5000, 
 ARRAY['2-3 Pages (Home, About, Contact)', 'Responsive Design', 'Contact Form', 'Basic SEO', 'Mobile Optimized'], 'website'),
('Advanced Website', 'Feature-rich websites with custom functionality', 15000, 
 ARRAY['Custom Design', 'E-commerce Integration', 'CMS Integration', 'Advanced SEO', 'Payment Gateway', 'Admin Dashboard'], 'website'),
('Basic App', 'Cross-platform mobile app with essential features', 14999, 
 ARRAY['Flutter/React Native', 'User Authentication', 'Basic Dashboard', 'Firebase/Supabase Backend', 'Push Notifications'], 'app'),
('Advanced App', 'Complex mobile applications with advanced features', 30000, 
 ARRAY['Multiple Screens', 'Complex Database', 'API Integrations', 'Real-time Features', 'Payment Integration', 'Admin Panel'], 'app');

INSERT INTO public.portfolio_projects (title, description, tech_stack, featured) VALUES
('GymKhanna', 'A comprehensive fitness app for gym management and workout tracking', 
 ARRAY['Flutter', 'Firebase', 'Dart', 'REST APIs'], true),
('FarmAgroTech', 'IoT-based agriculture monitoring and management system', 
 ARRAY['React Native', 'IoT', 'Python', 'MongoDB', 'Arduino'], true);

INSERT INTO public.testimonials (client_name, company, message, rating, project_type, is_featured) VALUES
('Rahul Sharma', 'FitnessPro Gym', 'DEVONIC delivered an amazing gym management app that transformed our business operations.', 5, 'Mobile App', true),
('Priya Patel', 'AgroTech Solutions', 'The IoT integration they built for our farm monitoring system exceeded our expectations.', 5, 'IoT Application', true);
