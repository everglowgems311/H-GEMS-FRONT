export interface ContactInquiryPayload {
  first_name: string;
  last_name: string;
  email: string;
  whatsapp_number: string;
  query: string;
  message: string;
}

export interface ProductInquiryPayload {
  first_name: string;
  last_name: string;
  email: string;
  whatsapp_number: string;
  product_id: string;
  product_name: string;
  product_image?: string;
  message: string;
}

export interface InquiryResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}
