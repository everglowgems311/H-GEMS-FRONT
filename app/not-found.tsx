'use client';

import React from 'react';
import Link from 'next/link';
import SectionHero from '@/components/common/SectionHero';
import Footer from '@/components/layout/Footer';
import HERO_DATA from '@/data/heroData';

export default function NotFound() {
  return (
    <main className="w-full bg-background min-h-screen">
      {/* Common SectionHero */}
      <SectionHero
        {...HERO_DATA.notFound}
      />

      <section className="py-24 px-8 text-center max-w-[700px] mx-auto">
        <h2 className="font-serif text-[2.5rem] text-text mb-4">
          This Creation Is Beyond Reach
        </h2>
        <p className="font-sans text-[0.95rem] text-text-muted leading-[1.7] mb-10">
          The page or piece you are searching for might have been retired or moved. Allow our concierge to guide you back to our current fine jewelry collections.
        </p>
        <Link
          href="/"
          className="font-sans text-[0.8rem] font-medium tracking-[0.12em] uppercase text-white bg-text border border-text px-7 py-3.5 rounded-full cursor-pointer whitespace-nowrap inline-flex items-center justify-center transition-all duration-400 ease-luxury shadow-[0_4px_14px_rgba(32,33,36,0.15)] hover:bg-[#35373b] hover:border-[#35373b] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(32,33,36,0.22)]"
        >
          <span>Return to Salon Home</span>
        </Link>
      </section>

      {/* Common Footer */}
      <Footer />
    </main>
  );
}
