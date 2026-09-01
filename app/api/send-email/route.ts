import { NextResponse } from "next/server";
import { MailServer } from "@/lib/mailer";
import { getProductById } from "@/data/Products";

/**
 * Basic HTML escaping helper to prevent HTML injection in emails
 */
function escapeHtml(str?: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email?: string): boolean {
  if (!email || typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim()) && email.length <= 254;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request payload.",
        },
        { status: 400 }
      );
    }

    const { type, data, productId } = body;

    if (!type || !["contact", "product"].includes(type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid inquiry type specified.",
        },
        { status: 400 }
      );
    }

    if (!data || typeof data !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Inquiry data is required.",
        },
        { status: 400 }
      );
    }

    const firstName = typeof data.first_name === "string" ? data.first_name.trim() : "";
    const lastName = typeof data.last_name === "string" ? data.last_name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const whatsapp = typeof data.whatsapp_number === "string" ? data.whatsapp_number.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";
    const query = typeof data.query === "string" ? data.query.trim() : "";

    // Validation
    if (!firstName || firstName.length < 2 || firstName.length > 100) {
      return NextResponse.json(
        { success: false, message: "Valid first name is required (2-100 characters)." },
        { status: 400 }
      );
    }

    if (!lastName || lastName.length < 2 || lastName.length > 100) {
      return NextResponse.json(
        { success: false, message: "Valid last name is required (2-100 characters)." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!whatsapp || whatsapp.length < 6 || whatsapp.length > 30) {
      return NextResponse.json(
        { success: false, message: "A valid WhatsApp number is required." },
        { status: 400 }
      );
    }

    if (!message || message.length < 5 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Message must be between 5 and 5000 characters." },
        { status: 400 }
      );
    }

    if (type === "contact" && (!query || query.length < 2 || query.length > 100)) {
      return NextResponse.json(
        { success: false, message: "Please select an inquiry topic." },
        { status: 400 }
      );
    }

    const recipient = process.env.SMTP_USER;
    if (!recipient) {
      console.error("❌ SMTP_USER environment variable is missing.");
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your inquiry right now. Please try again.",
        },
        { status: 500 }
      );
    }

    const nowFormatted = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "UTC",
    }) + " (UTC)";

    let subject = "";
    let textBody = "";
    let htmlBody = "";

    const customerFullName = `${firstName} ${lastName}`;
    const safeName = escapeHtml(customerFullName);
    const safeEmail = escapeHtml(email);
    const safeWhatsApp = escapeHtml(whatsapp);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
    const safeDate = escapeHtml(nowFormatted);

    if (type === "contact") {
      const safeQuery = escapeHtml(query);
      subject = `New Contact Inquiry - ${query || "Everglow Gems"}`;

      textBody = `New Contact Inquiry

CUSTOMER INFORMATION

Name: ${customerFullName}
Email: ${email}
WhatsApp: ${whatsapp}

Query:
${query}

Message:
${message}

Submitted At:
${nowFormatted}
`;

      htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f6f2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #202124;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f6f2; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e8e6e1; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.04);">
          <!-- Header -->
          <tr>
            <td style="background-color: #202124; padding: 32px 36px; text-align: center;">
              <h1 style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 26px; color: #ffffff; letter-spacing: 0.12em; text-transform: uppercase;">EVERGLOW GEMS</h1>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #c5a97a; letter-spacing: 0.25em; text-transform: uppercase;">Haute Joaillerie Atelier</p>
            </td>
          </tr>

          <!-- Banner -->
          <tr>
            <td style="padding: 28px 36px 12px 36px; border-bottom: 1px solid #f0eee9;">
              <span style="display: inline-block; background-color: #f3efe6; color: #8a7346; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px;">General Inquiry</span>
              <h2 style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 22px; color: #202124;">New Customer Inquiry</h2>
            </td>
          </tr>

          <!-- Customer Details -->
          <tr>
            <td style="padding: 24px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">Customer Name</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 500; color: #202124;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">Email Address</p>
                    <p style="margin: 0; font-size: 15px; color: #202124;"><a href="mailto:${safeEmail}" style="color: #8a7346; text-decoration: none;">${safeEmail}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">WhatsApp Number</p>
                    <p style="margin: 0; font-size: 15px; color: #202124;">${safeWhatsApp}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">Inquiry Topic</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 500; color: #202124;">${safeQuery}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 8px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">Client Message</p>
                    <div style="background-color: #faf9f6; border: 1px solid #e8e6e1; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #333333;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Info -->
          <tr>
            <td style="background-color: #faf9f6; padding: 20px 36px; border-top: 1px solid #e8e6e1; font-size: 12px; color: #8a8d93; text-align: center;">
              Submitted at: <strong>${safeDate}</strong> via Everglow Gems Atelier Web Portal
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
    } else {
      // Product inquiry
      const verifiedProduct = productId ? getProductById(productId) : undefined;
      const rawProductName = verifiedProduct?.title || verifiedProduct?.name || data.product_name || "Bespoke Jewelry Piece";
      const productRef = verifiedProduct?.id || productId || "N/A";
      const productSubtitle = verifiedProduct?.subtitle || verifiedProduct?.material || "";
      const productImage = verifiedProduct?.image || "";

      subject = `New Product Inquiry - ${rawProductName}`;

      textBody = `New Product Inquiry

PRODUCT INFORMATION

Product: ${rawProductName}
Reference: ${productRef}
${productSubtitle ? `Details: ${productSubtitle}\n` : ""}
CUSTOMER INFORMATION

Name: ${customerFullName}
Email: ${email}
WhatsApp: ${whatsapp}

MESSAGE

${message}

Submitted At:
${nowFormatted}
`;

      const safeProductName = escapeHtml(rawProductName);
      const safeProductRef = escapeHtml(productRef);
      const safeSubtitle = escapeHtml(productSubtitle);

      htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f6f2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #202124;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f6f2; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e8e6e1; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.04);">
          <!-- Header -->
          <tr>
            <td style="background-color: #202124; padding: 32px 36px; text-align: center;">
              <h1 style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 26px; color: #ffffff; letter-spacing: 0.12em; text-transform: uppercase;">EVERGLOW GEMS</h1>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #c5a97a; letter-spacing: 0.25em; text-transform: uppercase;">Haute Joaillerie Atelier</p>
            </td>
          </tr>

          <!-- Banner -->
          <tr>
            <td style="padding: 28px 36px 12px 36px; border-bottom: 1px solid #f0eee9;">
              <span style="display: inline-block; background-color: #f3efe6; color: #8a7346; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px;">Product Inquiry</span>
              <h2 style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 22px; color: #202124;">Piece Inquiry: ${safeProductName}</h2>
            </td>
          </tr>

          <!-- Product Box -->
          <tr>
            <td style="padding: 20px 36px 12px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf9f6; border: 1px solid #e8e6e1; border-radius: 8px; padding: 16px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">Inquired Creation</p>
                    <p style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 18px; font-weight: 600; color: #202124;">${safeProductName}</p>
                    ${safeSubtitle ? `<p style="margin: 4px 0 0 0; font-size: 13px; color: #8a7346;">${safeSubtitle}</p>` : ""}
                    <p style="margin: 8px 0 0 0; font-size: 12px; color: #666666;">Reference ID: <code>${safeProductRef}</code></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer Details -->
          <tr>
            <td style="padding: 12px 36px 24px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">Customer Name</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 500; color: #202124;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">Email Address</p>
                    <p style="margin: 0; font-size: 15px; color: #202124;"><a href="mailto:${safeEmail}" style="color: #8a7346; text-decoration: none;">${safeEmail}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">WhatsApp Number</p>
                    <p style="margin: 0; font-size: 15px; color: #202124;">${safeWhatsApp}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 8px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8d93;">Client Message</p>
                    <div style="background-color: #faf9f6; border: 1px solid #e8e6e1; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #333333;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Info -->
          <tr>
            <td style="background-color: #faf9f6; padding: 20px 36px; border-top: 1px solid #e8e6e1; font-size: 12px; color: #8a8d93; text-align: center;">
              Submitted at: <strong>${safeDate}</strong> via Everglow Gems Atelier Web Portal
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
    }

    const mailer = new MailServer();

    const result = await mailer.sendMail({
      to: recipient,
      subject,
      text: textBody,
      html: htmlBody,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully.",
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("❌ Email API route error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your inquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
