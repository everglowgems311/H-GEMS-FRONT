'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHero from '@/components/common/SectionHero';
import Collections from '@/components/section/Collections';
import ProductGrid from '@/components/products/ProductGrid';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import { CollectionItem } from '@/types/product';

export default function CollectionsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleSelectCollection = (col: CollectionItem) => {
    router.push(col.path || `/collections/${col.category}`);
  };

  return (
    <main className="w-full bg-background min-h-screen">
      <SectionHero
        eyebrow="EXCLUSIVE ATELIER"
        title="Fine Jewelry Collections"
        description="Explore our hand-curated collections of 18k Solid Gold, 925 Sterling Silver, and Rare Certified Gemstones."
        image="/images/collection/gold-jewelry.jpg"
        fallbackImage="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onLogoClick={() => router.push('/')}
      />

      <Collections onSelectCollection={handleSelectCollection} />

      <ProductGrid
        category="all"
        title="Complete Master Collection"
        subtitle="Every piece is sculpted with precision and hallmarked for authenticity."
        showFilters={true}
      />

      <Footer />

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
}
