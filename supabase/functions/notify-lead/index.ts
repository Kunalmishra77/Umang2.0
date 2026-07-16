// Supabase Edge Function: notify-lead
// Triggered by a Database Webhook on INSERT into public.leads.
// Sends an email (Resend) and/or a WhatsApp message (Twilio) to staff.
// Each channel is OPTIONAL — it only fires if its env secrets are set, so you
// can enable email first and add WhatsApp later without code changes.
//
// Configure secrets (Dashboard → Edge Functions → notify-lead → Secrets, or
//   `supabase secrets set KEY=value`):
//   Email (Resend):   RESEND_API_KEY, NOTIFY_EMAIL_TO, NOTIFY_EMAIL_FROM
//   WhatsApp (Twilio):TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN,
//                     TWILIO_WHATSAPP_FROM (e.g. whatsapp:+14155238886),
//                     NOTIFY_WHATSAPP_TO   (e.g. whatsapp:+91XXXXXXXXXX)
//   Shared (optional):WEBHOOK_SECRET  — if set, the webhook must send header
//                     `x-webhook-secret` with the same value.

// deno-lint-ignore-file no-explicit-any
Deno.serve(async (req: Request) => {
  try {
    if (req.method !== "POST") {
      return json({ error: "Method not allowed" }, 405);
    }

    // Optional shared-secret check (set the same value on the DB webhook header)
    const secret = Deno.env.get("WEBHOOK_SECRET");
    if (secret && req.headers.get("x-webhook-secret") !== secret) {
      return json({ error: "Unauthorized" }, 401);
    }

    const payload = await req.json().catch(() => ({}));
    // Supabase webhook shape: { type, table, record, ... }; also accept a raw lead.
    const lead = payload?.record ?? payload;
    if (!lead || !lead.name || !lead.phone) {
      return json({ error: "Invalid lead payload" }, 400);
    }

    const line = (k: string, v: unknown) =>
      v ? `${k}: ${String(v)}\n` : "";
    const extra = lead.extra && typeof lead.extra === "object" ? lead.extra : {};
    const extraLines = Object.entries(extra)
      .filter(([, v]) => v !== null && v !== "" && v !== undefined)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const subject = `New ${lead.type || "lead"} — ${lead.name}`;
    const body =
      `New enquiry from the website\n\n` +
      line("Type", lead.type) +
      line("Name", lead.name) +
      line("Phone", lead.phone) +
      line("Email", lead.email) +
      line("Speciality", lead.speciality) +
      line("Message", lead.message) +
      line("Source page", lead.source_page) +
      (extraLines ? `\n${extraLines}\n` : "") +
      line("Received", lead.created_at);

    const results: Record<string, string> = {};

    // ---- Email via Resend --------------------------------------------------
    const resendKey = Deno.env.get("RESEND_API_KEY");
    const emailTo = Deno.env.get("NOTIFY_EMAIL_TO");
    const emailFrom = Deno.env.get("NOTIFY_EMAIL_FROM");
    if (resendKey && emailTo && emailFrom) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: emailTo.split(",").map((s) => s.trim()),
          subject,
          text: body,
        }),
      });
      results.email = r.ok ? "sent" : `failed ${r.status}`;
    } else {
      results.email = "skipped (not configured)";
    }

    // ---- WhatsApp via Twilio ----------------------------------------------
    const sid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const token = Deno.env.get("TWILIO_AUTH_TOKEN");
    const waFrom = Deno.env.get("TWILIO_WHATSAPP_FROM");
    const waTo = Deno.env.get("NOTIFY_WHATSAPP_TO");
    if (sid && token && waFrom && waTo) {
      const form = new URLSearchParams({ From: waFrom, To: waTo, Body: body });
      const r = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(`${sid}:${token}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: form.toString(),
        },
      );
      results.whatsapp = r.ok ? "sent" : `failed ${r.status}`;
    } else {
      results.whatsapp = "skipped (not configured)";
    }

    return json({ ok: true, results });
  } catch (err) {
    return json({ error: String(err) }, 500);
  }
});

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
