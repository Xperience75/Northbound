import { NextResponse } from "next/server";
import { studio } from "@/lib/studio";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimitMap = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recent = (rateLimitMap.get(ip) ?? []).filter((ts) => ts > windowStart);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitMap.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseOptionalField(
  value: unknown,
  maxLength: number,
  label: string
): { value: string; error?: string } {
  if (value === undefined || value === null) {
    return { value: "" };
  }
  if (typeof value !== "string") {
    return { value: "", error: `Invalid ${label} value.` };
  }
  const trimmed = value.trim();
  if (trimmed.length > maxLength) {
    return {
      value: "",
      error: `${label} must be ${maxLength} characters or fewer.`,
    };
  }
  return { value: trimmed };
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please wait a few minutes or email us directly.",
      },
      { status: 429 }
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const payload = raw as Record<string, unknown>;

  // Silently accept honeypot triggers without invoking email delivery
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  if (name.length < 2 || name.length > 120) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name (2–120 characters)." },
      { status: 400 }
    );
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!email || email.length > 200 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";
  if (message.length < 5 || message.length > 5000) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Please tell us a bit more about your project (5–5000 characters).",
      },
      { status: 400 }
    );
  }

  const companyCheck = parseOptionalField(payload.company, 150, "Company");
  if (companyCheck.error) {
    return NextResponse.json(
      { ok: false, error: companyCheck.error },
      { status: 400 }
    );
  }

  const serviceCheck = parseOptionalField(payload.service, 100, "Service");
  if (serviceCheck.error) {
    return NextResponse.json(
      { ok: false, error: serviceCheck.error },
      { status: 400 }
    );
  }

  const budgetCheck = parseOptionalField(payload.budget, 100, "Budget");
  if (budgetCheck.error) {
    return NextResponse.json(
      { ok: false, error: budgetCheck.error },
      { status: 400 }
    );
  }

  const company = companyCheck.value;
  const service = serviceCheck.value;
  const budget = budgetCheck.value;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not configured");
    return NextResponse.json(
      {
        ok: false,
        error:
          "Direct email delivery is not configured yet. Please use your email app or copy your inquiry details below.",
      },
      { status: 503 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || studio.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Northbound Studio <onboarding@resend.dev>";

  const safeSubjectName = name.replace(/[\r\n]+/g, " ");
  const safeSubjectCompany = company.replace(/[\r\n]+/g, " ");
  const subject = `New project inquiry — ${safeSubjectName}${
    safeSubjectCompany ? ` (${safeSubjectCompany})` : ""
  }`;

  const text = [
    "New project inquiry received via northbound.studio",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Service: ${service || "Not specified"}`,
    `Budget: ${budget || "Not specified"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const escapedHtmlMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  const html = `
    <div style="background-color:#f5f4ef;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#14171c;">
      <div style="max-width:600px;margin:0 auto;background-color:#0e1117;color:#f0f0ed;border:1px solid #22252a;border-top:4px solid #d87c58;border-radius:12px;padding:32px;">
        <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#8b929e;">Northbound Studio · Inquiry</p>
        <h1 style="margin:0 0 24px;font-size:24px;font-weight:500;color:#ffffff;">New Project Inquiry</h1>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:8px 0;color:#8b929e;width:120px;vertical-align:top;">Name</td>
            <td style="padding:8px 0;color:#ffffff;font-weight:500;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#8b929e;vertical-align:top;">Email</td>
            <td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#d87c58;text-decoration:none;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#8b929e;vertical-align:top;">Company</td>
            <td style="padding:8px 0;color:#f0f0ed;">${escapeHtml(company || "Not provided")}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#8b929e;vertical-align:top;">Service</td>
            <td style="padding:8px 0;color:#f0f0ed;">${escapeHtml(service || "Not specified")}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#8b929e;vertical-align:top;">Budget</td>
            <td style="padding:8px 0;color:#f0f0ed;">${escapeHtml(budget || "Not specified")}</td>
          </tr>
        </table>
        <div style="margin-top:24px;padding-top:20px;border-top:1px solid #22252a;">
          <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#8b929e;">Project Details</p>
          <div style="font-size:15px;line-height:1.6;color:#e4e6eb;">${escapedHtmlMessage}</div>
        </div>
      </div>
    </div>
  `.trim();

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errorBody = await resendRes.text().catch(() => "");
      console.error("[contact] Resend API error:", resendRes.status, errorBody);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't send your inquiry right now. Please try again or use the fallback options below.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend request failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your inquiry right now. Please try again or use the fallback options below.",
      },
      { status: 502 }
    );
  }
}
