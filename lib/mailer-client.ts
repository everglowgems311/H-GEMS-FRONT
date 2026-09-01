/**
 * Client-safe mail helper for Everglow Gems.
 * Sends inquiry requests to the server-side API route (/api/send-email).
 * Note: Never contains or exposes SMTP credentials.
 */

export interface SendInquiryClientPayload {
  type: 'contact' | 'product';
  productId?: string;
  data: {
    first_name: string;
    last_name: string;
    email: string;
    whatsapp_number: string;
    country_code?: string;
    query?: string;
    message: string;
    product_name?: string;
  };
}

export async function sendInquiryClient(payload: SendInquiryClientPayload) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Unable to send your inquiry right now. Please try again.');
  }

  return data;
}
