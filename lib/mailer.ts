import nodemailer, { Transporter } from "nodemailer";

export interface MailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  replyTo?: string;
}

export class MailServer {
  private transporter: Transporter;
  private defaultFrom: string;

  constructor() {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error(
        "SMTP_USER and SMTP_PASS must be set in environment variables"
      );
    }

    this.defaultFrom = process.env.SMTP_USER;

    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  /** Check if SMTP connection works */
  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log("✅ SMTP Server is ready to take messages");
      return true;
    } catch (err) {
      console.error("❌ SMTP Connection failed:", err);
      return false;
    }
  }

  /** Send an email */
  async sendMail(options: MailOptions) {
    const mailOptions = {
      from: options.from || this.defaultFrom,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      replyTo: options.replyTo,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("📧 Mail sent:", info.messageId);
      return info;
    } catch (err) {
      console.error("❌ Error sending mail:", err);
      throw err;
    }
  }
}
