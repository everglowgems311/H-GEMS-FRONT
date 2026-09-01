'use client';

import React from 'react';
import Link from 'next/link';

export interface SectionHeroProps {
  eyebrow?: string;
  title?: string;
  titleEditorial?: string;
  description?: string;
  image?: string;
  fallbackImage?: string;
  imageAlt?: string;
  variant?: 'home' | 'inner';
  showActions?: boolean;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  isMenuOpen?: boolean;
  onToggleMenu?: () => void;
  onDiscoverClick?: () => void;
  onConsultationClick?: () => void;
  onLogoClick?: () => void;
}

export default function SectionHero({
  eyebrow = 'LUXURY FINE JEWELRY',
  title = 'Creations with an eye for detail.',
  titleEditorial,
  description = 'Unique jewelry pieces that highlight your personality.',
  image = '/images/hero/hero-jewelry.jpg',
  fallbackImage = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
  imageAlt = 'H-GEMS Luxury Fine Jewelry',
  variant = 'inner',
  showActions = false,
  primaryCtaText = 'Discover Collections',
  secondaryCtaText = 'Personal Consultation',
  isMenuOpen = false,
  onToggleMenu,
  onDiscoverClick,
  onConsultationClick,
  onLogoClick,
}: SectionHeroProps) {
  const isHomeVariant = variant === 'home';

  const renderTitle = () => {
    if (titleEditorial) {
      return (
        <h1 className="mb-5 text-white leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <span className="block font-sans text-[clamp(1.85rem,4.2vw,3.6rem)] font-light tracking-[-0.01em] text-[#f5f5f7] mb-[0.1em]">
            {title}
          </span>
          <span className="block font-serif text-[clamp(2.4rem,5.8vw,5rem)] italic font-normal tracking-[0.01em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {titleEditorial}
          </span>
        </h1>
      );
    }

    if (typeof title === 'string' && title.includes('\n')) {
      const parts = title.split('\n');
      return (
        <h1 className="mb-5 text-white leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <span className="block font-sans text-[clamp(1.85rem,4.2vw,3.6rem)] font-light tracking-[-0.01em] text-[#f5f5f7] mb-[0.1em]">
            {parts[0]}
          </span>
          <span className="block font-serif text-[clamp(2.4rem,5.8vw,5rem)] italic font-normal tracking-[0.01em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {parts[1]}
          </span>
        </h1>
      );
    }

    return (
      <h1 className="mb-5 text-white leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        <span className="block font-serif text-[clamp(2.3rem,5.2vw,4.5rem)] font-normal tracking-[0.02em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {title}
        </span>
      </h1>
    );
  };

  return (
    <section
      className={`relative w-full flex flex-col justify-between items-center overflow-hidden bg-[#1A1C1E] box-border ${
        isHomeVariant
          ? 'h-screen min-h-[640px] min-h-[100svh]'
          : 'h-[65vh] min-h-[460px] max-h-[680px] max-[900px]:h-[58vh] max-[900px]:min-h-[400px] max-[600px]:h-[52vh] max-[600px]:min-h-[360px]'
      }`}
      aria-label={`${title} Introduction`}
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-[center_30%] scale-[1.03] animate-[heroSubtleZoom_14s_cubic-bezier(0.25,1,0.5,1)_forwards] will-change-transform"
          loading={isHomeVariant ? 'eager' : 'lazy'}
          onError={(e) => {
            if (fallbackImage && e.currentTarget.src !== fallbackImage) {
              e.currentTarget.src = fallbackImage;
            }
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 45%, rgba(26, 28, 30, 0.2) 0%, rgba(26, 28, 30, 0.52) 85%), linear-gradient(180deg, rgba(26, 28, 30, 0.5) 0%, rgba(26, 28, 30, 0.15) 35%, rgba(26, 28, 30, 0.35) 70%, rgba(26, 28, 30, 0.75) 100%)',
          }}
        />
      </div>

      {/* Top Header: Centered Brand Logo & Top-Right Circular Menu Button */}
      <header className="relative z-10 w-full max-w-[1600px] mx-auto px-10 py-9 max-[900px]:px-6 max-[900px]:py-7 max-[600px]:px-4 max-[600px]:py-5 flex items-center justify-center box-border animate-[heroHeaderFade_1s_cubic-bezier(0.22,1,0.36,1)_forwards]">
        <Link
          href="/"
          className="group inline-flex flex-col items-center no-underline text-white select-none cursor-pointer transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px]"
          onClick={onLogoClick}
          aria-label="EG&Co. Everglow Gems Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="EG&Co. Everglow Gems"
            className="h-[130px] max-w-[220px] object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] transition-all duration-350 block group-hover:scale-104 group-hover:drop-shadow-[0_4px_18px_rgba(201,181,138,0.35)]"
          />
        </Link>

        {/* Circular Menu Button (Top Right) */}
        <button
          type="button"
          className={`group absolute right-10 top-1/2 -translate-y-1/2 max-[900px]:right-6 max-[600px]:right-4 w-[50px] h-[50px] max-[900px]:w-[44px] max-[900px]:h-[44px] max-[600px]:w-[40px] max-[600px]:h-[40px] rounded-full border backdrop-blur-md flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0 text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-400 ease-luxury active:scale-95 ${
            isMenuOpen
              ? 'bg-[#fafaf8]/50 border-accent'
              : 'bg-[#fafaf8]/22 border-white/35 hover:bg-[#fafaf8]/40 hover:border-accent hover:-translate-y-1/2 hover:scale-105 hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)]'
          }`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={onToggleMenu}
        >
          <span
            className={`block w-5 h-[1.5px] bg-white rounded-[2px] transition-all duration-400 origin-center ${
              isMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white rounded-[2px] transition-all duration-400 origin-center ${
              isMenuOpen
                ? 'opacity-0 scale-x-0 w-5'
                : 'w-5 group-hover:w-[14px]'
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white rounded-[2px] transition-all duration-400 origin-center ${
              isMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      {/* Hero Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[920px] px-6 max-[900px]:px-5 my-auto box-border animate-[heroContentAscend_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards]">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-3.5 mb-5">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-accent" aria-hidden="true" />
            <p className="font-sans text-[0.78rem] max-[600px]:text-[0.7rem] font-medium tracking-[0.38em] max-[600px]:tracking-[0.28em] indent-[0.38em] uppercase text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {eyebrow}
            </p>
            <span className="w-8 h-[1px] bg-gradient-to-r from-accent to-transparent" aria-hidden="true" />
          </div>
        )}

        {/* Main Headline */}
        {renderTitle()}

        {/* Supporting Description */}
        {description && (
          <p className="font-sans text-[clamp(0.95rem,1.35vw,1.12rem)] max-[600px]:text-[0.9rem] font-light leading-[1.65] text-white/90 max-w-[580px] mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] mb-9">
            {description}
          </p>
        )}

        {/* CTA Actions (Home or configurable) */}
        {showActions && (
          <div className="flex items-center justify-center gap-8 max-[900px]:gap-5 max-[600px]:flex-col max-[600px]:w-full flex-wrap mt-8">
            <button
              type="button"
              className="group relative inline-flex items-center justify-center gap-2.5 px-9 py-4 max-[600px]:min-w-[250px] max-[600px]:px-6 max-[600px]:py-3.5 bg-white/12 text-white font-sans text-[0.85rem] max-[600px]:text-[0.78rem] font-medium tracking-[0.16em] uppercase rounded-full border border-white/45 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-400 ease-luxury shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-white hover:text-text hover:border-white hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(255,255,255,0.3),0_4px_15px_rgba(0,0,0,0.3)] whitespace-nowrap"
              onClick={onDiscoverClick}
            >
              <span className="relative z-10">{primaryCtaText}</span>
              <span
                className="relative z-10 inline-flex items-center text-accent transition-all duration-400 group-hover:text-text group-hover:rotate-45 group-hover:scale-115"
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 3h12l4 6-10 12L2 9z" />
                  <path d="M10 3l-2 6" />
                  <path d="M14 3l2 6" />
                  <path d="M2 9h20" />
                  <path d="M12 21l-4-12" />
                  <path d="M12 21l4-12" />
                </svg>
              </span>
            </button>

            <button
              type="button"
              className="relative inline-flex items-center py-2.5 px-1 max-[600px]:py-1.5 bg-transparent text-white/90 font-sans text-[0.85rem] max-[600px]:text-[0.78rem] font-medium tracking-[0.16em] uppercase cursor-pointer transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[1px] after:bg-white/40 after:transition-all after:duration-400 hover:after:bg-accent hover:after:h-[1.5px] hover:after:shadow-[0_0_8px_var(--color-accent)]"
              onClick={onConsultationClick}
            >
              {secondaryCtaText}
            </button>
          </div>
        )}
      </div>

      {/* Hero Bottom Spacer */}
      <div
        className={`w-full pointer-events-none ${
          isHomeVariant ? 'h-10' : 'h-6'
        }`}
        aria-hidden="true"
      />
    </section>
  );
}
