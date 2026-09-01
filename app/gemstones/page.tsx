'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import ProductGrid from '@/components/products/ProductGrid';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import HERO_DATA from '@/data/heroData';

export default function GemstonesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="w-full bg-background min-h-screen">
      {/* 1. Common Hero Component configured for Gemstones & Diamonds */}
      <SectionHero
        {...HERO_DATA.gemstones}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onLogoClick={() => router.push('/')}
      />

      {/* 2. Gemstones & Diamonds Catalog */}
      <ProductGrid
        category="gemstone"
        title="Rare Natural Gems & Diamonds"
        subtitle="Independently certified by GIA, IGI, SSEF, and Gübelin for uncompromised provenance and rarity."
      />

      {/* 3. Gemological Certification Banner */}
      <section className="py-22 px-8 bg-background-secondary border-t border-b border-border">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="font-sans text-[0.75rem] tracking-[0.35em] text-accent uppercase mb-3">
            GEMOLOGICAL STANDARDS
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-text mb-5">
            Only 1 in 10,000 Natural Gems Meets Our Standard
          </h2>
          <p className="font-sans text-[0.94rem] text-text-muted leading-[1.75] max-w-[750px] mx-auto mb-10">
            From Muzo emeralds to royal Ceylon sapphires and D/Flawless diamonds, our in-house gemologists travel the world to source untreated, conflict-free gemstones with exceptional optical fire.
          </p>
          <button
            type="button"
            className="w-full sm:w-auto font-sans text-[0.8rem] max-[400px]:text-[0.75rem] font-medium tracking-[0.08em] sm:tracking-[0.12em] uppercase text-white bg-text border border-text px-6 sm:px-7 py-3.5 rounded-full cursor-pointer text-center inline-flex items-center justify-center transition-all duration-400 ease-luxury shadow-[0_4px_14px_rgba(32,33,36,0.15)] hover:bg-[#35373b] hover:border-[#35373b] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(32,33,36,0.22)] active:scale-[0.98]"
            onClick={() => router.push('/contact?type=gemstone-sourcing')}
          >
            <span>Commission Rare Gemstone Search</span>
          </button>
        </div>
      </section>

      {/* 4. Common Footer */}
      <Footer />

      {/* Navigation Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
}
