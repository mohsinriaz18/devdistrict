## Plan: SendGrid email delivery for Start a Project (and Contact) form

### What you'll provide (I'll request as secrets after approval)
1. **SENDGRID_API_KEY** — from https://app.sendgrid.com/settings/api_keys (Mail Send → Full Access)
2. **SENDGRID_FROM_EMAIL** — a verified Single Sender address from https://app.sendgrid.com/settings/sender_auth/senders
3. **INQUIRY_RECIPIENT_EMAIL** — inbox where leads should land

### Implementation steps

1. **Rewrite `supabase/functions/send-project-inquiry/index.ts`**
   - Keep CORS, Zod validation, and the `project_inquiries` DB insert (lead backup).
   - Extend Zod schema with optional `source: "start-project" | "contact"` (defaults to `start-project`).
   - Replace the Resend gateway call with a direct SendGrid Web API v3 call:
     - `POST https://api.sendgrid.com/v3/mail/send`
     - `Authorization: Bearer ${SENDGRID_API_KEY}`
     - Body: `personalizations[].to`, `from` (verified sender), `reply_to` (submitter), `subject`, `content[].value` (HTML).
   - Subject prefix changes by source: `New Project Inquiry — {name}` or `New Contact Message — {name}`.
   - Always return `{ ok: true, saved, emailSent, emailError }` if the row was saved (never lose a lead).

2. **Wire the Contact section to the same function**
   - View `src/components/Contact.tsx`. If it already has a form, hook its submit handler to `supabase.functions.invoke("send-project-inquiry", { body: { ...fields, source: "contact" } })` with toast feedback.
   - If the contact section currently only shows static info (no form), I'll add a compact form (name, email, message) using the same styling as `StartProjectModal`, sending `source: "contact"` with sensible defaults for unused fields (`phone: "—"`, `budget: "n/a"`, `lookingFor: "Contact"`).

3. **Deploy**
   - `deploy_edge_functions(["send-project-inquiry"])`.
   - Test with `curl_edge_functions` and verify in `edge_function_logs` + your inbox.

### Why SendGrid Web API, not raw SMTP
Supabase Edge Functions (Deno Deploy) block outbound TCP on SMTP ports. SendGrid's HTTPS Web API uses the same API key and gives identical deliverability — the standard serverless path.

### Notes
- Resend connector stays connected but unused. Remove later if you want.
- Single Sender (one verified email) works immediately. To send from `hello@devdistrict.com`, you'd later add SendGrid Domain Authentication (DNS records) — not part of this change.