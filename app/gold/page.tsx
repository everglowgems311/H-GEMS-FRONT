'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import ProductGrid from '@/components/products/ProductGrid';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import HERO_DATA from '@/data/heroData';

export default function GoldPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="w-full bg-background min-h-screen">
      {/* 1. Common Hero Component configured for Gold */}
      <SectionHero
        {...HERO_DATA.gold}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onLogoClick={() => router.push('/')}
      />

      {/* 2. Gold Jewelry Catalog */}
      <ProductGrid
        category="gold"
        title="18k Solid Gold Creations"
        subtitle="Meticulously cast in 18-karat yellow, white, and rose gold alloys for incomparable warmth and weight."
      />

      {/* 3. Gold Craftsmanship Section */}
      <section className="py-22 px-8 bg-background-secondary border-t border-b border-border">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="font-sans text-[0.75rem] tracking-[0.35em] text-accent uppercase mb-3">
            PRECIOUS METALLURGY
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-text mb-5">
            18k Solid Gold & Recycled Ethics
          </h2>
          <p className="font-sans text-[0.94rem] text-text-muted leading-[1.75] max-w-[750px] mx-auto mb-10">
            Every gold creation is cast from 100% certified recycled gold (750/1000 purity), alloyed in-house to achieve rich, enduring color tones that never tarnish and feel substantial on the skin.
          </p>
          <button
            type="button"
            className="w-full sm:w-auto font-sans text-[0.8rem] max-[400px]:text-[0.75rem] font-medium tracking-[0.08em] sm:tracking-[0.12em] uppercase text-white bg-text border border-text px-6 sm:px-7 py-3.5 rounded-full cursor-pointer text-center inline-flex items-center justify-center transition-all duration-400 ease-luxury shadow-[0_4px_14px_rgba(32,33,36,0.15)] hover:bg-[#35373b] hover:border-[#35373b] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(32,33,36,0.22)] active:scale-[0.98]"
            onClick={() => router.push('/contact?type=bespoke-gold')}
          >
            <span>Book Gold Bespoke Session</span>
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
