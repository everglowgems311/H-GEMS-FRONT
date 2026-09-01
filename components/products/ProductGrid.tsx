'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductsByCategory } from '@/data/Products';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

export interface ProductGridProps {
  category?: string;
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

export default function ProductGrid({
  category = 'all',
  title = 'Featured Creations',
  subtitle = 'Exquisite pieces handcrafted with timeless precision',
  showFilters = false,
}: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const router = useRouter();

  const products = getProductsByCategory(selectedCategory);

  const handleSelectProduct = (prod: Product) => {
    router.push(`/products/${prod.id}`);
  };

  return (
    <section className="py-20 px-8 max-[600px]:py-14 max-[600px]:px-5 bg-background relative" aria-label="Fine Jewelry Catalog">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[0.76rem] font-medium tracking-[0.35em] indent-[0.35em] text-accent uppercase mb-3">
            HAUTE JOAILLERIE
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] font-normal text-text mb-3">
            {title}
          </h2>
          <p className="font-sans text-[0.95rem] text-text-muted max-w-[600px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Optional Category Filter Pills */}
        {showFilters && (
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {['all', 'gold', 'silver', 'gemstone'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`font-sans text-[0.8rem] font-medium tracking-[0.08em] uppercase px-5 py-2 rounded-full cursor-pointer transition-all duration-400 ease-luxury ${
                  selectedCategory === cat
                    ? 'bg-text border border-text text-white shadow-[0_4px_12px_rgba(32,33,36,0.15)]'
                    : 'bg-surface border border-border text-text-muted shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:bg-hover hover:border-accent-cool hover:text-text'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all'
                  ? 'All Collections'
                  : cat === 'gemstone'
                  ? 'Gemstones & Diamonds'
                  : `${cat.charAt(0).toUpperCase() + cat.slice(1)} Jewelry`}
              </button>
            ))}
          </div>
        )}

        {/* 3-Column Luxury Product Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] max-[600px]:grid-cols-1 gap-8 max-[600px]:gap-6 mb-18">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onInquire={handleSelectProduct}
            />
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="bg-background-secondary border border-border rounded-[16px] p-10 max-[900px]:p-8 max-[900px]:flex-col max-[900px]:text-center flex items-center gap-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center text-accent shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.03)]" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 8.5 12 15 22 8.5 12 2" />
              <polygon points="12 22 2 15.5 12 15 22 15.5 12 22" />
            </svg>
          </div>
          <div className="grow">
            <h3 className="font-serif text-[1.45rem] font-medium text-text mb-1.5">
              Bespoke Atelier Commission
            </h3>
            <p className="font-sans text-[0.88rem] text-text-muted leading-[1.6] m-0">
              Looking for a custom gemstone, unique gold alloy, or private consultation? Our master jewellers create customized one-of-a-kind heirlooms upon request.
            </p>
          </div>
          <button
            type="button"
            className="w-full sm:w-auto font-sans text-[0.8rem] max-[400px]:text-[0.75rem] font-medium tracking-[0.08em] sm:tracking-[0.12em] uppercase text-white bg-text border border-text px-6 sm:px-7 py-3.5 rounded-full cursor-pointer text-center shrink-0 transition-all duration-400 ease-luxury shadow-[0_4px_14px_rgba(32,33,36,0.15)] hover:bg-[#35373b] hover:border-[#35373b] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(32,33,36,0.22)] active:scale-[0.98]"
            onClick={() => router.push('/contact?type=bespoke')}
          >
            Request Private Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
