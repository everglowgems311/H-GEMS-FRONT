'use client';

import React, { useState } from 'react';
import WhatsAppInput from './WhatsAppInput';
import { DEFAULT_COUNTRY } from '@/data/countries';
import { Country } from '@/types/inquiry';
import {
  validateName,
  validateEmail,
  validateWhatsApp,
  validateQuery,
  validateMessage,
} from '@/utils/validation';
import { submitContactInquiry } from '@/services/inquiryService';

const QUERY_OPTIONS = [
  'General Inquiry',
  'Product Information',
  'Pricing',
  'Customization',
  'Availability',
  'Appointment',
  'Other',
];

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    whatsapp_raw: '',
    query: '',
    message: '',
  });

  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitError) setSubmitError('');
  };

  const handlePhoneChange = (number: string, country?: Country) => {
    setFormData((prev) => ({ ...prev, whatsapp_raw: number }));
    if (country) {
      setSelectedCountry(country);
    }
    if (errors.whatsapp_number) {
      setErrors((prev) => ({ ...prev, whatsapp_number: '' }));
    }
    if (submitError) setSubmitError('');
  };

  const validateAll = () => {
    const newErrors: Record<string, string> = {};

    const firstNameErr = validateName(formData.first_name, 'First Name');
    if (firstNameErr) newErrors.first_name = firstNameErr;

    const lastNameErr = validateName(formData.last_name, 'Last Name');
    if (lastNameErr) newErrors.last_name = lastNameErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateWhatsApp(formData.whatsapp_raw);
    if (phoneErr) newErrors.whatsapp_number = phoneErr;

    const queryErr = validateQuery(formData.query);
    if (queryErr) newErrors.query = queryErr;

    const msgErr = validateMessage(formData.message);
    if (msgErr) newErrors.message = msgErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    const fullWhatsAppNumber = `${selectedCountry.dialCode} ${formData.whatsapp_raw.trim()}`;

    const submissionPayload = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email.trim(),
      whatsapp_number: fullWhatsAppNumber,
      query: formData.query.trim(),
      message: formData.message.trim(),
    };

    const result = await submitContactInquiry(submissionPayload);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitSuccess(true);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        whatsapp_raw: '',
        query: '',
        message: '',
      });
      setErrors({});
    } else {
      setSubmitError(result.error || 'Something went wrong. Please try again.');
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-surface border border-border rounded-[16px] p-10 max-[600px]:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] text-center py-12 px-6 animate-[heroHeaderFade_0.3s_ease-out]">
        <div className="w-16 h-16 rounded-full bg-background-secondary border border-border flex items-center justify-center mx-auto mb-6 text-accent">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-[1.8rem] text-text mb-3">
          Thank you for your enquiry.
        </h3>
        <p className="font-sans text-[0.92rem] text-text-muted leading-[1.6] mb-8 max-w-[440px] mx-auto">
          We have received your request and will get back to you shortly.
        </p>
        <button
          type="button"
          className="w-full max-w-[320px] mx-auto bg-text text-white border border-text rounded-[10px] py-3.5 px-6 font-sans text-[0.88rem] font-medium tracking-[0.04em] text-center cursor-pointer transition-all duration-200 hover:bg-[#35373b] hover:border-[#35373b] hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(32,33,36,0.18)]"
          onClick={() => setSubmitSuccess(false)}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border rounded-[16px] p-10 max-[600px]:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <h3 className="font-serif text-[1.6rem] text-text mb-1">
          General Inquiry
        </h3>

        {submitError && (
          <div
            role="alert"
            className="p-3.5 bg-red-50 border border-red-200 rounded-md text-red-700 text-[0.85rem] font-sans"
          >
            {submitError}
          </div>
        )}

        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4">
          {/* First Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact_first_name"
              className="text-[0.76rem] tracking-[0.1em] uppercase text-text-muted font-sans font-medium"
            >
              First Name <span className="text-accent">*</span>
            </label>
            <input
              id="contact_first_name"
              name="first_name"
              type="text"
              required
              disabled={isSubmitting}
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.first_name)}
              aria-describedby={errors.first_name ? 'contact_first_name_err' : undefined}
              className={`bg-background-secondary border rounded-md px-3.5 py-2.5 text-text font-sans text-[0.88rem] outline-none transition-colors duration-300 focus:border-accent focus:bg-surface ${
                errors.first_name ? 'border-red-500 ring-1 ring-red-500/30' : 'border-border'
              }`}
            />
            {errors.first_name && (
              <span id="contact_first_name_err" className="text-[0.76rem] text-red-500 font-sans">
                {errors.first_name}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact_last_name"
              className="text-[0.76rem] tracking-[0.1em] uppercase text-text-muted font-sans font-medium"
            >
              Last Name <span className="text-accent">*</span>
            </label>
            <input
              id="contact_last_name"
              name="last_name"
              type="text"
              required
              disabled={isSubmitting}
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.last_name)}
              aria-describedby={errors.last_name ? 'contact_last_name_err' : undefined}
              className={`bg-background-secondary border rounded-md px-3.5 py-2.5 text-text font-sans text-[0.88rem] outline-none transition-colors duration-300 focus:border-accent focus:bg-surface ${
                errors.last_name ? 'border-red-500 ring-1 ring-red-500/30' : 'border-border'
              }`}
            />
            {errors.last_name && (
              <span id="contact_last_name_err" className="text-[0.76rem] text-red-500 font-sans">
                {errors.last_name}
              </span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact_email"
            className="text-[0.76rem] tracking-[0.1em] uppercase text-text-muted font-sans font-medium"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact_email"
            name="email"
            type="email"
            required
            disabled={isSubmitting}
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact_email_err' : undefined}
            className={`bg-background-secondary border rounded-md px-3.5 py-2.5 text-text font-sans text-[0.88rem] outline-none transition-colors duration-300 focus:border-accent focus:bg-surface ${
              errors.email ? 'border-red-500 ring-1 ring-red-500/30' : 'border-border'
            }`}
          />
          {errors.email && (
            <span id="contact_email_err" className="text-[0.76rem] text-red-500 font-sans">
              {errors.email}
            </span>
          )}
        </div>

        {/* WhatsApp Number with Country Code */}
        <WhatsAppInput
          id="contact_whatsapp"
          name="whatsapp_number"
          value={formData.whatsapp_raw}
          onChange={handlePhoneChange}
          onCountryChange={(c) => setSelectedCountry(c)}
          error={errors.whatsapp_number}
          disabled={isSubmitting}
        />

        {/* Query Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact_query"
            className="text-[0.76rem] tracking-[0.1em] uppercase text-text-muted font-sans font-medium"
          >
            Inquiry Topic <span className="text-accent">*</span>
          </label>
          <select
            id="contact_query"
            name="query"
            required
            disabled={isSubmitting}
            value={formData.query}
            onChange={handleChange}
            aria-invalid={Boolean(errors.query)}
            aria-describedby={errors.query ? 'contact_query_err' : undefined}
            className={`bg-background-secondary border rounded-md px-3.5 py-2.5 text-text font-sans text-[0.88rem] outline-none transition-colors duration-300 focus:border-accent focus:bg-surface ${
              errors.query ? 'border-red-500 ring-1 ring-red-500/30' : 'border-border'
            }`}
          >
            <option value="" disabled>
              Select your inquiry 
            </option>
            {QUERY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.query && (
            <span id="contact_query_err" className="text-[0.76rem] text-red-500 font-sans">
              {errors.query}
            </span>
          )}
        </div>

        {/* Custom Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact_message"
            className="text-[0.76rem] tracking-[0.1em] uppercase text-text-muted font-sans font-medium"
          >
            How can we assist you? <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact_message"
            name="message"
            rows={4}
            required
            disabled={isSubmitting}
            placeholder="Tell us how we can help you..."
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact_message_err' : undefined}
            className={`bg-background-secondary border rounded-md px-3.5 py-2.5 text-text font-sans text-[0.88rem] outline-none transition-colors duration-300 focus:border-accent focus:bg-surface ${
              errors.message ? 'border-red-500 ring-1 ring-red-500/30' : 'border-border'
            }`}
          />
          {errors.message && (
            <span id="contact_message_err" className="text-[0.76rem] text-red-500 font-sans">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-text text-white border border-text rounded-md font-sans text-[0.82rem] font-semibold tracking-[0.12em] uppercase cursor-pointer mt-2 transition-all duration-400 ease-luxury hover:bg-[#35373b] hover:border-[#35373b] hover:shadow-[0_4px_14px_rgba(32,33,36,0.18)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'SEND ENQUIRY'}
        </button>
      </form>
    </div>
  );
}
