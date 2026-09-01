'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { COLLECTIONS } from '@/data/Collections';
import { CollectionItem } from '@/types/product';

export interface CollectionsProps {
  onSelectCollection?: (col: CollectionItem) => void;
  onViewAllClick?: () => void;
}

export default function Collections({ onSelectCollection, onViewAllClick }: CollectionsProps) {
  const router = useRouter();

  const handleCollectionClick = (col: CollectionItem) => {
    if (onSelectCollection) {
      onSelectCollection(col);
    } else {
      router.push(col.path);
    }
  };

  return (
    <section id="collections-section" className="py-24 px-8 pb-32 max-[960px]:py-18 max-[960px]:px-6 bg-background-secondary text-text relative" aria-label="Our Fine Jewelry Collections">
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <p className="font-sans text-[0.78rem] font-medium tracking-[0.3em] uppercase text-accent mb-4">
          CURATED CREATIONS
        </p>
        <h2 className="font-sans text-[clamp(2.2rem,3.8vw,3.5rem)] font-normal leading-[1.2] text-text">
          <em className="font-serif italic font-normal">Jewelry dreams</em> become reality
        </h2>
      </div>

      {/* 3-Card Grid */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-3 max-[960px]:grid-cols-1 max-[960px]:max-w-[480px] gap-8">
        {COLLECTIONS.map((col) => (
          <div
            key={col.id}
            className="group relative h-[520px] max-[960px]:h-[440px] rounded-[20px] overflow-hidden block text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-[#1a1c1e] border border-border cursor-pointer transition-all duration-500 ease-luxury hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)] hover:border-accent"
            onClick={() => handleCollectionClick(col)}
            role="button"
            tabIndex={0}
            aria-label={`Explore ${col.title} Collection`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCollectionClick(col);
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={col.image}
              alt={col.title}
              className="w-full h-full object-cover transition-transform duration-800 ease-luxury group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#141618]/5 via-[#141618]/25 to-[#141618]/75 flex flex-col justify-end items-center p-10 max-[600px]:p-6 text-center box-border">
              <h3 className="font-sans text-[1.45rem] font-medium tracking-[0.12em] text-white uppercase mb-1.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {col.title}
              </h3>
              <p className="font-sans text-[0.78rem] font-normal tracking-[0.18em] text-accent opacity-0 translate-y-2.5 transition-all duration-400 ease-luxury group-hover:opacity-100 group-hover:translate-y-0">
                {col.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Teaser */}
      <div className="text-center mt-16 flex flex-col items-center gap-3">
        <p className="font-sans text-[0.95rem] font-light text-text-muted">
          Experience customized individual pieces tailored to your style.
        </p>
        {onViewAllClick ? (
          <button
            type="button"
            className="group inline-flex items-center gap-2 font-sans text-[0.88rem] font-medium tracking-[0.14em] uppercase text-text bg-transparent border-none cursor-pointer relative pb-1 transition-all duration-400 ease-luxury hover:text-accent hover:translate-x-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 hover:after:bg-accent"
            onClick={onViewAllClick}
          >
            <span>Explore All Collections</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        ) : (
          <Link
            href="/collections"
            className="group inline-flex items-center gap-2 font-sans text-[0.88rem] font-medium tracking-[0.14em] uppercase text-text bg-transparent border-none cursor-pointer relative pb-1 transition-all duration-400 ease-luxury hover:text-accent hover:translate-x-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 hover:after:bg-accent"
          >
            <span>Explore All Collections</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
}
