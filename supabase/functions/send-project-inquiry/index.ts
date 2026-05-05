import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(30),
  budget: z.string().min(1).max(50),
  lookingFor: z.string().min(1).max(100),
  description: z.string().trim().min(10).max(1000),
});

const RECIPIENT = "mohsinriaz.work@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ ok: false, error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = parsed.data;
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // 1) Persist to DB (backup log — never lose a lead)
    const { error: dbError } = await supabase.from("project_inquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      budget: data.budget,
      looking_for: data.lookingFor,
      description: data.description,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
    }

    // 2) Send email via Resend through the connector gateway
    let emailSent = false;
    let emailError: string | null = null;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      emailError = "Email service not configured";
      console.error(emailError);
    } else {
      try {
        const html = `
          <div style="font-family:Inter,Arial,sans-serif;color:#111;max-width:600px;margin:auto;padding:24px;">
            <h2 style="margin:0 0 16px;font-size:22px;">New Project Inquiry — Dev District</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 0;color:#666;width:140px;">Name</td><td><strong>${escapeHtml(data.name)}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#666;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;">Phone</td><td>${escapeHtml(data.phone)}</td></tr>
              <tr><td style="padding:8px 0;color:#666;">Budget</td><td>${escapeHtml(data.budget)}</td></tr>
              <tr><td style="padding:8px 0;color:#666;">Looking For</td><td>${escapeHtml(data.lookingFor)}</td></tr>
            </table>
            <h3 style="margin:24px 0 8px;font-size:16px;">Project Description</h3>
            <p style="white-space:pre-wrap;line-height:1.6;background:#f7f7f7;padding:16px;border-radius:6px;">${escapeHtml(data.description)}</p>
            <p style="margin-top:24px;font-size:12px;color:#999;">Submitted ${new Date().toUTCString()}</p>
          </div>
        `;

        const resp = await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: "Dev District <onboarding@resend.dev>",
            to: [RECIPIENT],
            reply_to: data.email,
            subject: `New Project Inquiry — ${data.name}`,
            html,
          }),
        });

        const respBody = await resp.text();
        if (!resp.ok) {
          emailError = `Resend ${resp.status}: ${respBody}`;
          console.error("Resend send failed:", emailError);
        } else {
          emailSent = true;
          console.log("Resend send ok:", respBody);
        }
      } catch (e) {
        emailError = e instanceof Error ? e.message : String(e);
        console.error("Resend exception:", emailError);
      }
    }

    return new Response(
      JSON.stringify({ ok: true, emailSent, saved: !dbError, emailError }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("send-project-inquiry error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
