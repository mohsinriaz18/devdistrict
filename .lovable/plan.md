## Overview
Add motion and life across the homepage, fix the "4–6 wks" stat wrapping, replace testimonial copy with the real client quotes, and wire the Start a Project form to email submissions to **mohsinriaz.work@gmail.com** via a Lovable Cloud edge function (using the built-in Lovable Emails infrastructure).

---

## 1. Make the UI feel alive (animations everywhere)

Currently most sections only animate once on scroll-in and stay static. We'll layer in continuous, lightweight motion that keeps the B&W minimalist aesthetic intact.

### Hero (`Hero.tsx`)
- Headline: split "We Build Digital / Products That Scale." into per-word reveals with a subtle floating loop on the last word ("Scale.") using `animate-[float_4s_ease-in-out_infinite]`.
- "Only 2 slots left" pill: keep ping dot, add gentle horizontal shimmer across the pill border.
- CTAs: add infinite arrow nudge (`animate-[nudge_2.2s_ease-in-out_infinite]`) on the primary "Start a Project" arrow.
- Add a soft floating background element (large outlined circle) drifting slowly behind the hero text — pure CSS keyframe, B&W only.

### Stats / Numbers (`Stats.tsx`)
- **Animate numbers counting up** from 0 → final value when the section enters the viewport (custom hook with `requestAnimationFrame`, ~1.5s ease-out).
- Each stat card gets a subtle hover lift + underline-grow on the label.
- **Fix wrapping:** change "4–6 wks" to render on one line. Apply `whitespace-nowrap` to the value `<p>` and shrink the upper clamp slightly for that one card so it always fits one line on mobile (`clamp(2.25rem, 6vw, 5rem)` for the wks stat).

### Services (`Services.tsx`)
- Section heading words ("Built to Ship. Designed to Win.") fade-in word-by-word with stagger.
- Active accordion item: icon does a slow continuous pulse-scale loop while open.
- Tag chips: stagger-fade in with a tiny rise when the panel opens (already partially there — strengthen).

### Process / Roadmap (`Process.tsx`)
- After the road line draws in, add a constantly traveling "pulse dot" that slides left→right along the line (infinite loop, 6s).
- Each milestone node: gentle continuous pulse ring (B&W ripple) so the roadmap visibly "breathes."
- Step icons: rotate-on-hover micro-interaction.

### Case Studies (`CaseStudies.tsx`)
- Each row slides + fades in with a slight horizontal parallax as the user scrolls (using framer-motion `useScroll` + `useTransform`).

### Testimonials (`Testimonials.tsx`)
- Avatar gets a slow continuous rotation of an outlined ring around it.
- Quote text fade-up on slide change (already present — extend with letter-by-letter reveal for the first sentence).

### Portfolio / CtaBand
- Marquee-style horizontal scroll for the portfolio thumbnails on hover (subtle).
- CtaBand: animated diagonal stripe pattern slowly drifting in the background.

### Global keyframes
Add to `tailwind.config.ts` and `index.css`:
- `float` (gentle vertical bob)
- `nudge` (right-arrow nudge)
- `shimmer` (border light sweep)
- `travel` (left→right pulse along a line)
- `pulse-ring` (expanding ring)

All keyframes pure B&W, GPU-friendly (`transform` / `opacity` only), and respect `prefers-reduced-motion` via a global `@media (prefers-reduced-motion: reduce)` override that disables infinite loops.

---

## 2. Fix "4–6 wks" wrapping in Stats
Apply `whitespace-nowrap` to the value and a slightly smaller `clamp()` so it never breaks across two lines on any breakpoint.

---

## 3. Real testimonial quotes (`Testimonials.tsx`)

Replace existing quotes with the user-provided copy, keep BotAgent unchanged:

1. **BotAgent** — *(unchanged)* "The team built our drag-and-drop bot generator from scratch and shipped it in record time. It changed how founders launch agents." — Founder, BotAgent
2. **ShipAfrika** — "It was really great working with this team! They did an exceptional job and delivered exactly what I was looking for. They understood the task and professionally delivered within the prescribed timeframe. I would highly recommend them!!" — Founder, ShipAfrika
3. **Copilot** — "Dev District team was extremely professional, responsive, and easy to work with. They understood exactly what I needed and delivered high-quality content that matched my brand perfectly. Highly recommend if you're looking for someone reliable and creative!" — Co-founder, Copilot
4. **Xecutor** — "Loved working with Dev District team. They are very detail-oriented and friendly to work with. They not only worked on the scope I had in mind but also gave guidelines to improve the app. Highly recommended." — CTO, Xecutor
5. **Resumedia** — "Best team I've ever worked with — very professional, very fast, and very dedicated. I've never met such kind people before. Thank you for the great work, I'm looking forward to the future with you!" — CEO, Resumedia

Names stay as the existing fictional founder names tied to each brand. Keep current slider, dots, auto-advance, colorful avatars.

---

## 4. Wire Start a Project form to email mohsinriaz.work@gmail.com

The form currently just shows a toast. We'll make it actually deliver every submission to your inbox.

### Approach: Lovable Cloud + Lovable Emails (built-in, zero-config)
1. **Enable Lovable Cloud** on the project (required for edge functions and email infra).
2. **Set up an email sender domain** via the email setup dialog (one-click; needed before any email can send out).
3. Create a new edge function `send-project-inquiry` that:
   - Validates the payload server-side with Zod (mirrors the client schema).
   - Sends a nicely formatted HTML email to `mohsinriaz.work@gmail.com` with all fields (Name, Email, Phone, Budget, Service, Description, plus timestamp).
   - Sets `reply_to` to the submitter's email so you can reply directly from Gmail.
   - Returns `{ ok: true }` on success.
4. **Also persist** every submission to a new `project_inquiries` table in Lovable Cloud (so nothing is lost if email ever fails — you'll have a backup log).
   - Columns: `id`, `name`, `email`, `phone`, `budget`, `looking_for`, `description`, `created_at`.
   - RLS: only service role can read; public can insert via the edge function only.
5. Update `StartProjectModal.tsx` `handleSubmit` to call the edge function via `supabase.functions.invoke('send-project-inquiry', { body: data })` instead of the current `setTimeout`. Show real success/error toasts based on response.

> Because this requires enabling Lovable Cloud and provisioning an email sender domain, after you approve this plan I'll first prompt you to set up the email sender domain (one-click button in chat), then build everything above.

---

## Technical Notes
- Animations rely on Tailwind keyframes + framer-motion only — no new dependencies.
- Number count-up: small custom `useCountUp` hook in `src/hooks/`.
- `prefers-reduced-motion` honored globally via a CSS media query in `index.css`.
- Edge function: standard Lovable Cloud pattern, JWT not required (public form), CORS enabled, Zod validation, rate limit by IP (in-memory; sufficient for a contact form).
- Email goes through Lovable's queued email infrastructure (auto-retry, DLQ, rate-limit safe).
- Form submissions also stored in `project_inquiries` as a backup audit log.

## Files Affected
- `src/components/Hero.tsx` — word reveals, floating bg, arrow nudge
- `src/components/Stats.tsx` — count-up numbers, fix "4–6 wks" wrap
- `src/components/Services.tsx` — heading word stagger, active-icon pulse
- `src/components/Process.tsx` — traveling pulse dot, breathing nodes
- `src/components/CaseStudies.tsx` — scroll parallax
- `src/components/Testimonials.tsx` — new quotes, avatar ring, text reveal
- `src/components/CtaBand.tsx` — drifting stripes
- `src/components/Portfolio.tsx` — hover marquee
- `src/components/StartProjectModal.tsx` — call edge function
- `src/hooks/useCountUp.ts` — new
- `tailwind.config.ts` + `src/index.css` — new keyframes + reduced-motion guard
- `supabase/functions/send-project-inquiry/index.ts` — new edge function
- New DB migration — `project_inquiries` table + RLS
