

# Dev District — Modern Software Agency Website

## Overview
A bold, black-and-white, ultra-minimal single-page website for Dev District, inspired by Stripe/Linear/Vercel aesthetics with Gen Z confidence. The uploaded image inspires the bento-grid layout style and editorial typography approach.

## Pages & Sections

### 1. Sticky Header
- "Dev District" logo in bold sans-serif
- Nav links: Home, Services, Portfolio, Case Studies, Testimonials, Contact
- Minimal underline hover animation, transparent/blur background on scroll

### 2. Hero Section
- Oversized bold headline: "We Build Digital Products That Scale."
- Clean subtext paragraph
- Two CTA buttons: "Start a Project" (white on black) and "View Work" (outlined)
- Full viewport height, high contrast black/white

### 3. Services Section
- 6 services in a responsive grid (3×2 desktop, 1 column mobile)
- Thin-bordered minimal cards with icon, title, and one-line description
- Services: Web App Dev, Mobile App Dev, AI Integration, MVP Development, UI/UX Design, Product Strategy

### 4. Portfolio Section
- Bento-style grid layout (inspired by the reference image)
- Grayscale project thumbnails with hover title/description reveal
- 4-6 placeholder projects with smooth hover transitions

### 5. Case Studies Section
- 3 case study cards in Problem → Solution → Impact format
- Bold typographic layout, alternating light/dark sections

### 6. Testimonials Section
- Stacked/carousel quotes with fade transitions
- Client name + role, minimal design, no photos
- Large quotation marks as design element

### 7. Contact Section
- Bold heading: "Let's Build Something Big"
- Centered form: Name, Email, Company, Project Details, Submit button
- Clean black/white form styling

### 8. Footer
- Dev District text, quick links, email, social icons
- Minimal copyright line

## Design System
- **Colors**: Pure black (#000), white (#FFF), grays for depth
- **Typography**: Inter or similar clean sans-serif, oversized headings (clamp-based responsive)
- **Spacing**: Generous whitespace, strong vertical rhythm
- **Interactions**: Smooth scroll navigation, subtle hover animations, fade-in on scroll (intersection observer)
- **Responsive**: Mobile-first, fully responsive grid layouts

## Technical Approach
- Single-page app with smooth scroll to sections
- Framer Motion for scroll animations and micro-interactions
- Lucide icons for service cards and social links
- All content hardcoded (no backend needed)

