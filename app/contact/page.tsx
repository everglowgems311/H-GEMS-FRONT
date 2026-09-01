'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import ContactInquiryForm from '@/components/inquiry/ContactInquiryForm';
import HERO_DATA from '@/data/heroData';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="w-full bg-background min-h-screen">
      {/* 1. Common Hero Component configured for Contact */}
      <SectionHero
        {...HERO_DATA.contact}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onLogoClick={() => router.push('/')}
      />

      {/* 2. Contact & Consultation Section */}
      <section className="py-22 px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-18">
          {/* Left Column: Atelier Concierge Details */}
          <div>
            <p className="font-sans text-[0.75rem] tracking-[0.35em] text-accent uppercase mb-3">
              PRIVATE CLIENT CONCIERGE
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,3rem)] text-text leading-[1.2] mb-6">
              Private Appointments & <em className="font-serif italic font-normal">Bespoke</em> Commissions
            </h2>
            <p className="font-sans text-[0.94rem] text-text-muted leading-[1.7] mb-10">
              Whether you wish to experience a private showing in our Munich salon, discuss a bespoke gemstone engagement piece, or request worldwide insured delivery, our private concierge is at your service.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-background-secondary border border-border flex items-center justify-center text-accent shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[0.85rem] text-text tracking-[0.1em] uppercase mb-1">
                    Salon & Studio
                  </h4>
                  <p className="font-sans text-[0.88rem] text-text-muted m-0">
                    Maximilian Street 42, 80539 Munich, Germany
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-background-secondary border border-border flex items-center justify-center text-accent shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[0.85rem] text-text tracking-[0.1em] uppercase mb-1">
                    Telephone Concierge
                  </h4>
                  <p className="font-sans text-[0.88rem] text-text-muted m-0">
                    +49 (0) 89 2109 4500 (Mon – Sat: 10:00 – 19:00 CET)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-background-secondary border border-border flex items-center justify-center text-accent shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[0.85rem] text-text tracking-[0.1em] uppercase mb-1">
                    Private Inquiries
                  </h4>
                  <p className="font-sans text-[0.88rem] text-text-muted m-0">
                    concierge@h-gems.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: General Inquiry Form */}
          <div>
            <ContactInquiryForm />
          </div>
        </div>
      </section>

      {/* 3. Common Footer */}
      <Footer />

      {/* Navigation Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
}
