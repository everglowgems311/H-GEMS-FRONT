'use client';

import React, { useState } from 'react';

export interface ProductGalleryProps {
  images?: string[];
  title?: string;
}

export default function ProductGallery({ images = [], title = 'Piece Gallery' }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-5" aria-label={title}>
      <div className="w-full aspect-square rounded-[20px] overflow-hidden bg-background-secondary border border-border shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activeIndex]}
          alt={`${title} view ${activeIndex + 1}`}
          className="w-full h-full object-cover object-center transition-transform duration-600 ease-luxury block hover:scale-105"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto py-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-[72px] h-[72px] rounded-xl overflow-hidden border p-0 cursor-pointer bg-background-secondary shrink-0 transition-all duration-250 ${
                idx === activeIndex
                  ? 'border-text opacity-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
                  : 'border-border opacity-80 hover:opacity-100 hover:-translate-y-0.5 hover:border-accent'
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover block" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
