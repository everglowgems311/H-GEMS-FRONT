'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import HERO_DATA from '@/data/heroData';

export default function TermsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="w-full bg-background min-h-screen">
      {/* Common SectionHero */}
      <SectionHero
        {...HERO_DATA.terms}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onLogoClick={() => router.push('/')}
      />

      <section className="py-22 px-8 max-w-[900px] mx-auto">
        <div className="bg-surface border border-border rounded-[16px] p-12 max-[600px]:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          <h2 className="font-serif text-[2.2rem] text-text mb-6">
            Terms & Conditions of Fine Atelier Commissions
          </h2>

          <p className="font-sans text-[0.94rem] text-text-muted leading-[1.75] mb-6">
            Welcome to H-GEMS Fine Jewelry. All bespoke commissions, private viewing appointments, and sales contracts are governed under the following terms of craftsmanship and client relations.
          </p>

          <h3 className="font-serif text-[1.4rem] text-accent mt-8 mb-3">
            1. Authenticity & Hallmarking
          </h3>
          <p className="font-sans text-[0.9rem] text-text-muted leading-[1.7] m-0">
            Every precious piece crafted by H-GEMS bears official German goldsmith hallmarking (750 for 18k Gold, 925 for Sterling Silver, 950 for Platinum) and is accompanied by our lifetime authenticity certificate and gemological dossier (GIA / IGI / SSEF where applicable).
          </p>

          <h3 className="font-serif text-[1.4rem] text-accent mt-8 mb-3">
            2. Bespoke Commissioning Process
          </h3>
          <p className="font-sans text-[0.9rem] text-text-muted leading-[1.7] m-0">
            Custom designs undergo client approval via 3D rendering and wax prototype before casting. Custom pieces tailored to individual specifications are non-refundable once casting commences.
          </p>

          <h3 className="font-serif text-[1.4rem] text-accent mt-8 mb-3">
            3. Lifetime Care & Cleaning
          </h3>
          <p className="font-sans text-[0.9rem] text-text-muted leading-[1.7] m-0">
            All authentic H-GEMS creations include lifetime complimentary ultrasonic cleaning and prong inspection at our Munich atelier.
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
