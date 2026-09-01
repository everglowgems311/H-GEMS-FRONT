/**
 * Inquiry API Service
 * Handles submission of General Contact Inquiries and Product-Specific Inquiries
 * via the Next.js App Router API route (/api/send-email).
 */

import {
  ContactInquiryPayload,
  ProductInquiryPayload,
  InquiryResponse,
  EmailApiRequestBody,
} from '@/types/inquiry';

/**
 * Submit general contact inquiry
 */
export async function submitContactInquiry(
  data: ContactInquiryPayload
): Promise<InquiryResponse> {
  try {
    const payload: EmailApiRequestBody = {
      type: 'contact',
      data: {
        first_name: data.first_name?.trim(),
        last_name: data.last_name?.trim(),
        email: data.email?.trim(),
        whatsapp_number: data.whatsapp_number?.trim(),
        query: data.query?.trim(),
        message: data.message?.trim(),
      },
    };

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const resData = await response.json().catch(() => ({}));

    if (!response.ok || !resData.success) {
      return {
        success: false,
        error: resData.message || 'Unable to send your inquiry right now. Please try again.',
      };
    }

    return {
      success: true,
      data: resData,
      message: resData.message || 'Thank you! Your inquiry has been sent successfully.',
      messageId: resData.messageId,
    };
  } catch (err) {
    console.error('Contact inquiry network error:', err);
    return {
      success: false,
      error: 'Unable to send your inquiry right now. Please try again.',
    };
  }
}

/**
 * Submit product-specific inquiry
 */
export async function submitProductInquiry(
  data: ProductInquiryPayload
): Promise<InquiryResponse> {
  try {
    const payload: EmailApiRequestBody = {
      type: 'product',
      productId: data.product_id,
      data: {
        first_name: data.first_name?.trim(),
        last_name: data.last_name?.trim(),
        email: data.email?.trim(),
        whatsapp_number: data.whatsapp_number?.trim(),
        product_name: data.product_name,
        message: data.message?.trim(),
      },
    };

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const resData = await response.json().catch(() => ({}));

    if (!response.ok || !resData.success) {
      return {
        success: false,
        error: resData.message || 'Unable to send your inquiry right now. Please try again.',
      };
    }

    return {
      success: true,
      data: resData,
      message: resData.message || 'Thank you! Your product inquiry has been sent successfully.',
      messageId: resData.messageId,
    };
  } catch (err) {
    console.error('Product inquiry network error:', err);
    return {
      success: false,
      error: 'Unable to send your inquiry right now. Please try again.',
    };
  }
}
