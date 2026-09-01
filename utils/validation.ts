/**
 * Form Validation Utilities for Inquiry Forms
 */

export const validateName = (name?: string, fieldLabel = 'This field'): string => {
  if (!name || typeof name !== 'string' || !name.trim()) {
    return `${fieldLabel} is required.`;
  }
  if (name.trim().length < 2) {
    return `${fieldLabel} must be at least 2 characters.`;
  }
  return '';
};

export const validateEmail = (email?: string): string => {
  if (!email || typeof email !== 'string' || !email.trim()) {
    return 'Email address is required.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address.';
  }
  return '';
};

export const validateWhatsApp = (phone?: string): string => {
  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return 'WhatsApp number is required.';
  }
  // Strip spaces, dashes, parentheses
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 6 || digits.length > 15) {
    return 'Please enter a valid WhatsApp phone number (6-15 digits).';
  }
  return '';
};

export const validateQuery = (query?: string): string => {
  if (!query || typeof query !== 'string' || !query.trim() || query === 'default' || query === '') {
    return 'Please select a query topic.';
  }
  return '';
};

export const validateMessage = (message?: string): string => {
  if (!message || typeof message !== 'string' || !message.trim()) {
    return 'Custom message is required.';
  }
  if (message.trim().length < 5) {
    return 'Please enter at least 5 characters in your message.';
  }
  return '';
};
