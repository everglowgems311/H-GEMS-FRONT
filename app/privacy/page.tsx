'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import HERO_DATA from '@/data/heroData';

export default function PrivacyPolicyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="w-full bg-background min-h-screen">
      {/* Common SectionHero */}
      <SectionHero
        {...HERO_DATA.privacy}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onLogoClick={() => router.push('/')}
      />

      <section className="py-22 px-8 max-w-[900px] mx-auto">
        <div className="bg-surface border border-border rounded-[16px] p-12 max-[600px]:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          <h2 className="font-serif text-[2.2rem] text-text mb-6">
            Data Protection & Client Privacy Policy
          </h2>

          <p className="font-sans text-[0.94rem] text-text-muted leading-[1.75] mb-6">
            At H-GEMS Fine Jewelry, we hold client confidentiality and discretion with the utmost importance. This Privacy Statement governs the collection, processing, and protection of personal data provided through our website, bespoke inquiry forms, and private consultations.
          </p>

          <h3 className="font-serif text-[1.4rem] text-accent mt-8 mb-3">
            1. Collection of Personal Data
          </h3>
          <p className="font-sans text-[0.9rem] text-text-muted leading-[1.7] m-0">
            We only collect personal information that you voluntarily provide when booking private appointments, requesting bespoke quotations, or subscribing to our Privé Newsletter. This includes your name, email, contact telephone number, and sizing or design preferences.
          </p>

          <h3 className="font-serif text-[1.4rem] text-accent mt-8 mb-3">
            2. Confidentiality & Third-Party Disclosure
          </h3>
          <p className="font-sans text-[0.9rem] text-text-muted leading-[1.7] m-0">
            We never sell, rent, or trade your personal information. Data is exclusively shared with certified logistics partners solely for executing insured armored transport of jewelry pieces.
          </p>

          <h3 className="font-serif text-[1.4rem] text-accent mt-8 mb-3">
            3. Contact for Inquiries
          </h3>
          <p className="font-sans text-[0.9rem] text-text-muted leading-[1.7] m-0">
            If you have questions regarding data privacy or wish to request data erasure, please contact our data privacy officer at <strong>privacy@h-gems.com</strong>.
          </p>
        </div>
      </section>

      {/* Common Footer */}
      <Footer />

      {/* Navigation Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
}
