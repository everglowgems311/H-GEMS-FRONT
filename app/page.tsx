'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import Features from '@/components/section/Features';
import AboutPreview from '@/components/section/AboutPreview';
import Collections from '@/components/section/Collections';
import FAQ from '@/components/section/FAQ';
import Reviews from '@/components/section/Reviews';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import HERO_DATA from '@/data/heroData';
import { CollectionItem } from '@/types/product';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleDiscoverClick = () => {
    const colSection = document.getElementById('collections-section');
    if (colSection) {
      colSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultationClick = () => {
    router.push('/contact?type=consultation');
  };

  const handleStoryClick = () => {
    router.push('/about');
  };

  const handleSelectCollection = (col: CollectionItem) => {
    router.push(col.path || `/collections/${col.category}`);
  };

  const handleViewAllCollections = () => {
    router.push('/collections');
  };

  return (
    <main className="w-full bg-background min-h-screen">
      {/* 1. Common Hero Section with Home Configuration */}
      <SectionHero
        {...HERO_DATA.home}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onDiscoverClick={handleDiscoverClick}
        onConsultationClick={handleConsultationClick}
        onLogoClick={() => router.push('/')}
      />

      {/* 2. Features Section (3 Luxury Pillars) */}
      <Features />

      {/* 3. About / Brand Story Section */}
      <AboutPreview onStoryClick={handleStoryClick} />

      {/* 4. Collections Section (Silver, Gold, Gemstones) */}
      <Collections
        onSelectCollection={handleSelectCollection}
        onViewAllClick={handleViewAllCollections}
      />

      {/* 5. FAQ Section */}
      <FAQ />

      {/* 6. Reviews Section (Moments of Joy) */}
      <Reviews />

      {/* 7. Common Footer */}
      <Footer />

      {/* Luxury Navigation Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
}
