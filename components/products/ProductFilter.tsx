'use client';

import React from 'react';

export interface ProductFilterProps {
  categories?: string[];
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function ProductFilter({
  categories = ['all', 'gold', 'silver', 'gemstone'],
  activeCategory = 'all',
  onSelectCategory,
}: ProductFilterProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12 flex-wrap" role="tablist" aria-label="Product Categories">
      {categories.map((cat) => {
        const label =
          cat === 'all'
            ? 'All Collections'
            : cat === 'gemstone'
            ? 'Gemstones & Diamonds'
            : `${cat.charAt(0).toUpperCase() + cat.slice(1)} Jewelry`;

        const isActive = activeCategory === cat;

        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`font-sans text-[0.8rem] font-medium tracking-[0.08em] uppercase px-5 py-2 rounded-full cursor-pointer transition-all duration-400 ease-luxury ${
              isActive
                ? 'bg-text border border-text text-white shadow-[0_4px_12px_rgba(32,33,36,0.15)]'
                : 'bg-surface border border-border text-text-muted shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:bg-hover hover:border-accent-cool hover:text-text'
            }`}
            onClick={() => onSelectCategory && onSelectCategory(cat)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
