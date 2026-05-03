## Content, Copy & Design Updates

### 1. Hero (`Hero.tsx`)
- Add a green blinking signal pill above the eyebrow text: small pulsing green dot + "Only 2 slots left this month" (uppercase, tracked).
- Keep existing layout. Use `animate-pulse` for the dot.

### 2. Stats (`Stats.tsx`)
- Update numbers: `30+ Projects Delivered`, `20+ Clients Worldwide`, `6+ Years of Experience`, `4–6 wks Avg. Delivery Time`.

### 3. Services (`Services.tsx`)
- Replace 6 services with new SEO-rich list (each desc keyword-packed):
  - **MVP Development** — "Launch market-ready MVPs in 4–6 weeks using React, Node, and AI-assisted workflows (Claude + Cursor)."
  - **SaaS Development** — "Scalable multi-tenant SaaS platforms built on React, Node.js, Postgres, and modern cloud infra."
  - **UI/UX Design** — "Conversion-focused product design, design systems, and Figma prototypes for web and mobile."
  - **AI Integration** — "Embed Claude, GPT, RAG pipelines, and AI agents into your product for smarter automation."
  - **Mobile App Development** — "Hybrid and native iOS/Android apps with React Native and Flutter for cross-platform reach."
  - **Project Rescue Services** — "Audit, refactor, and revive stalled or broken codebases with senior engineers."
- Update sub-copy under heading: add "Powered by Claude, Cursor, React, and Node — we ship 2× faster at 50% lower cost than traditional agencies."
- "Get a Quote" button → trigger `useStartProject().open` instead of `#contact` anchor.

### 4. Process / Roadmap (`Process.tsx`)
- Fix text alignment: convert above/below grid items to use a fixed two-row CSS grid (`grid-rows-[1fr_auto_1fr]`) so titles + descriptions sit on the same baseline across all 6 nodes.
- Use absolute-positioned text blocks anchored top/bottom of the node with consistent height — eliminates "text on one line" misalignment.
- Constrain text width to `w-[160px]`, `text-center`, `mx-auto`.

### 5. Case Studies (`CaseStudies.tsx`)
- Replace 3 studies with generic-titled versions of BotAgent, Copilot, ShipAfrika (no project names in headings):
  - **"Drag-and-Drop Bot Builder for Founders"** — manual bot dev took weeks → self-controlled visual agent generator → 10× faster bot deployment.
  - **"All-in-One Travel Planning Platform"** — fragmented trip planning → unified service marketplace → seamless itinerary creation.
  - **"Global Freight Logistics App"** — paperwork-heavy international shipping → web + mobile portal automating documentation → reduced manual ops 70%.

### 6. Pricing (`Pricing.tsx`)
- Starter: `$1,999`, desc "MVPs and lean launches in 4–6 weeks."
- Growth: `$4,999`, features include "Web and mobile builds" (no `+`).
- Custom: unchanged.
- Increase card height: add `min-h-[640px]` and more internal padding.
- Hover effect: `hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`, plus subtle border accent on non-highlighted cards.

### 7. Buttons & CTAs — engaging hover effect
- Add a shared utility hover style across primary/secondary buttons in Hero, Services CTA, Pricing, CtaBand, Header, Contact: `transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0` plus arrow icon `group-hover:translate-x-1` micro-animation.

### 8. Testimonials (`Testimonials.tsx`)
- Keep existing slider design (single quote, big circular avatar).
- Replace quotes/names with project-tied entries (BotAgent, Copilot, Resumedia, Xecutor, ShipAfrika) — author names and roles like "Founder, BotAgent", etc.
- Remove the big quote dashes: drop the `"{quote}"` wrapping quotes.

### 9. Footer (`Footer.tsx`)
- Social icons: keep only Instagram, LinkedIn, Mail.
  - Instagram → `https://www.instagram.com/dev.district?igsh=cDY5ZHBpaGljN2Y0&utm_source=qr`
  - LinkedIn → `https://www.linkedin.com/company/dev-district/`
  - Mail → `mailto:business@devdistrict.io`
- Update tagline: "Build. Ship. Scale." (replace "Modern software development for ambitious teams").
- Add a Contact column with:
  - Email: `business@devdistrict.io` (mailto link)
  - Phone: `+1 (786) 429-9639` as `tel:+17864299639` (clickable to dial on mobile)
  - Address: `7901 4th St N STE 300, St. Petersburg, Florida`
- Update Quick Links email reference to `business@devdistrict.io`.

### 10. Contact section copy (`Contact.tsx`)
- Update displayed email references if any to `business@devdistrict.io`.

## Technical Notes
- Lucide icons: import `Instagram` (replace Twitter/Github usages in footer).
- Reuse `useStartProject()` hook for all "Get a Quote" / "Start a Project" buttons.
- Roadmap fix uses CSS grid with explicit row heights to guarantee node alignment regardless of title/description length.
- All new hover effects rely on Tailwind transition utilities — no new dependencies.
