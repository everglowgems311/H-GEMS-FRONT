'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import HERO_DATA from '@/data/heroData';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="w-full bg-background min-h-screen">
      {/* 1. Common Hero Component configured for About */}
      <SectionHero
        {...HERO_DATA.about}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onLogoClick={() => router.push('/')}
      />

      {/* 2. Atelier Story Introduction */}
      <section className="py-22 px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-14 items-center">
          <div>
            <p className="font-sans text-[0.75rem] tracking-[0.35em] text-accent uppercase mb-3">
              HERITAGE & DISCIPLINE
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] text-text leading-[1.2] mb-6">
              Crafted in Germany, Revered <em className="font-serif italic font-normal">Globally</em>
            </h2>
            <p className="font-sans text-[0.94rem] text-text-muted leading-[1.75] mb-5">
              Founded on the belief that fine jewelry should be timeless rather than transient, H-GEMS operates as a private atelier where traditional goldsmithing meets avant-garde precision engineering.
            </p>
            <p className="font-sans text-[0.94rem] text-text-muted leading-[1.75]">
              Every creation begins not on an assembly line, but at a master bench in Munich, where hours of hand-filing, stone-setting under 40x magnification, and meticulous polishing bring raw precious metals to life.
            </p>
          </div>

          <div className="relative rounded-[20px] overflow-hidden border border-border shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/banners/about-model.jpg"
              alt="Master craftsman working at the jeweler bench"
              className="w-full h-auto block object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop';
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#fafaf8]/95 to-transparent p-6">
              <p className="font-serif italic text-[1.1rem] text-text m-0">
                &ldquo;True luxury is tactile—you feel the density, warmth, and perfection in every contour.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars of Excellence */}
      <section className="py-22 px-8 bg-background-secondary border-t border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[0.75rem] tracking-[0.35em] text-accent uppercase mb-2.5">
              CORE COMMITMENTS
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.8rem)] text-text">
              Our Atelier Principles
            </h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            <div className="bg-surface border border-border rounded-[16px] p-10 max-[600px]:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <span className="text-[1.8rem] text-accent block mb-4">✦</span>
              <h3 className="font-serif text-[1.35rem] text-text mb-3">
                Conflict-Free & Certified
              </h3>
              <p className="font-sans text-[0.88rem] text-text-muted leading-[1.65] m-0">
                100% Kimberley Process certified diamonds and ethically mined colored gems with complete laboratory provenance.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-[16px] p-10 max-[600px]:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <span className="text-[1.8rem] text-accent block mb-4">✦</span>
              <h3 className="font-serif text-[1.35rem] text-text mb-3">
                Heirloom Metallics
              </h3>
              <p className="font-sans text-[0.88rem] text-text-muted leading-[1.65] m-0">
                Cast exclusively with recycled 18k solid gold and 950 Platinum, engineered to preserve brilliance across generations.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-[16px] p-10 max-[600px]:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <span className="text-[1.8rem] text-accent block mb-4">✦</span>
              <h3 className="font-serif text-[1.35rem] text-text mb-3">
                Bespoke Atelier Service
              </h3>
              <p className="font-sans text-[0.88rem] text-text-muted leading-[1.65] m-0">
                Direct access to master goldsmiths for one-of-a-kind engagement rings, redesigns, and commemorative commissions.
              </p>
            </div>
          </div>
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
