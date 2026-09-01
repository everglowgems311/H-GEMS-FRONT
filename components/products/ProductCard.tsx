'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';

export interface ProductCardProps {
  product: Product;
  onInquire?: (product: Product) => void;
  buttonText?: string;
}

export default function ProductCard({
  product,
  onInquire,
  buttonText = 'To the Product',
}: ProductCardProps) {
  if (!product) return null;

  const {
    id,
    title,
    subtitle,
    badge,
    image,
    fallbackImage,
    description,
  } = product;

  const displayDescription =
    description ||
    (subtitle
      ? `${subtitle} — crafted for everyday luxury and timeless elegance.`
      : 'Timeless precious materials with artisan finishing — crafted for everyday elegance.');

  return (
    <article
      className="group bg-surface rounded-[20px] overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-400 ease-luxury relative border border-border hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] hover:border-accent-cool"
      id={`product-${id}`}
    >
      {/* Top Image Studio Frame */}
      <Link href={`/products/${id}`} className="block relative w-full h-[260px] bg-background-secondary overflow-hidden flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury block group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            if (fallbackImage && e.currentTarget.src !== fallbackImage) {
              e.currentTarget.src = fallbackImage;
            }
          }}
        />
        {badge && (
          <span className="absolute top-3.5 left-3.5 z-[2] font-sans text-[0.68rem] font-medium tracking-[0.12em] uppercase text-text bg-white/94 border border-border px-2.5 py-1 rounded-full backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            {badge}
          </span>
        )}
      </Link>

      {/* White Card Body */}
      <div className="bg-surface p-7 max-[600px]:p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-[1.55rem] font-semibold leading-[1.25] text-text mb-3.5 tracking-[-0.01em]">
          <Link href={`/products/${id}`} className="hover:text-accent transition-colors">
            {title}
          </Link>
        </h3>
        <p className="font-sans text-[0.88rem] font-normal leading-[1.6] text-text-muted mb-6 flex-grow">
          {displayDescription}
        </p>

        {onInquire ? (
          <button
            type="button"
            className="w-full bg-text text-white border border-text rounded-[10px] py-3.5 px-6 font-sans text-[0.88rem] font-medium tracking-[0.04em] text-center cursor-pointer transition-all duration-200 hover:bg-[#35373b] hover:border-[#35373b] hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(32,33,36,0.18)] active:translate-y-0 box-border"
            onClick={() => onInquire(product)}
            aria-label={`View details and inquire about ${title}`}
          >
            {buttonText}
          </button>
        ) : (
          <Link
            href={`/products/${id}`}
            className="w-full bg-text text-white border border-text rounded-[10px] py-3.5 px-6 font-sans text-[0.88rem] font-medium tracking-[0.04em] text-center cursor-pointer transition-all duration-200 hover:bg-[#35373b] hover:border-[#35373b] hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(32,33,36,0.18)] active:translate-y-0 box-border block"
            aria-label={`View details and inquire about ${title}`}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </article>
  );
}
