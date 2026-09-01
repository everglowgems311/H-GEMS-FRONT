'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import HERO_DATA from '@/data/heroData';

export default function ImprintPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="w-full bg-background min-h-screen">
      {/* Common SectionHero */}
      <SectionHero
        {...HERO_DATA.imprint}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onLogoClick={() => router.push('/')}
      />

      <section className="py-22 px-8 max-w-[900px] mx-auto">
        <div className="bg-surface border border-border rounded-[16px] p-12 max-[600px]:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          <h2 className="font-serif text-[2.2rem] text-text mb-6">
            Impressum / Legal Notice
          </h2>

          <p className="font-sans text-[0.94rem] text-text-muted leading-[1.75] mb-6">
            Information pursuant to Section 5 of the German Telemedia Act (TMG):
          </p>

          <h3 className="font-serif text-[1.4rem] text-accent mt-8 mb-3">
            H-GEMS Fine Jewelry GmbH
          </h3>
          <p className="font-sans text-[0.9rem] text-text-muted leading-[1.7] m-0">
            Maximilian Street 42<br />
            80539 Munich, Germany<br /><br />
            <strong>Managing Director:</strong> Master Goldsmith Atelier Management<br />
            <strong>Commercial Register:</strong> District Court of Munich, HRB 284910<br />
            <strong>VAT Identification Number:</strong> DE 348 912 840<br />
            <strong>Telephone:</strong> +49 (0) 89 2109 4500<br />
            <strong>Email:</strong> concierge@h-gems.com
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
