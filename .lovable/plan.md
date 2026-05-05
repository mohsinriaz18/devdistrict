## Goal
Replace the current Lovable Emails queue path in the `send-project-inquiry` edge function with Resend so every "Start a Project" submission is emailed to **mohsinriaz.work@gmail.com**.

## Steps

### 1. Connect Resend
- Use the Resend connector. You'll be prompted to either link an existing Resend account or create a new connection (Lovable handles the OAuth/API-key handshake).
- Once connected, `RESEND_API_KEY` and `LOVABLE_API_KEY` become available as env vars in edge functions automatically — no manual secret entry required.

### 2. Update `supabase/functions/send-project-inquiry/index.ts`
- Remove the `enqueue_email` RPC path (Lovable Emails queue).
- Keep:
  - CORS headers
  - Zod validation
  - Insert into `project_inquiries` table (backup log — never lose a lead)
- Add a Resend send call through the connector gateway:
  - `POST https://connector-gateway.lovable.dev/resend/emails`
  - Headers: `Authorization: Bearer ${LOVABLE_API_KEY}`, `X-Connection-Api-Key: ${RESEND_API_KEY}`
  - Body:
    - `from`: `Dev District <onboarding@resend.dev>` (Resend's shared sandbox sender — works immediately, no domain verification needed). Note: `onboarding@resend.dev` can only send TO the email address that owns the Resend account until you verify your own domain.
    - `to`: `["mohsinriaz.work@gmail.com"]`
    - `reply_to`: submitter's email (so you can reply directly from Gmail)
    - `subject`: `New Project Inquiry — {name}`
    - `html`: same nicely formatted HTML table currently used (Name, Email, Phone, Budget, Looking For, Description, timestamp)
- Return `{ ok: true, emailSent, saved }`. Log Resend errors but still return success if the row was saved (so leads aren't lost).

### 3. Redeploy
- Deploy `send-project-inquiry`. The frontend (`StartProjectModal.tsx`) already calls this function — no client changes needed.

### 4. Sender domain (optional, recommended later)
- The shared `onboarding@resend.dev` sender works for sending to your own inbox immediately.
- To send from `hello@devdistrict.com` (or similar) and to any recipient, you'll later need to verify a domain in your Resend dashboard. For now, this isn't required because mail only goes to your own address.

## Files Affected
- `supabase/functions/send-project-inquiry/index.ts` — swap email path to Resend gateway call
- (No changes to `StartProjectModal.tsx`, `project_inquiries` table, RLS, or `supabase/config.toml`)

## Out of Scope
- Auth emails / branded transactional emails to end-users
- Domain verification in Resend (can be done later in your Resend dashboard)
- Removing the `project_inquiries` backup table
