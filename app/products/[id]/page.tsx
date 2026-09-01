'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getProductById } from '@/data/Products';
import Footer from '@/components/layout/Footer';
import MenuOverlay from '@/components/layout/MenuOverlay';
import ProductInquiryForm from '@/components/inquiry/ProductInquiryForm';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const effectiveId = resolvedParams?.id || 'rhodolite-ring-gold-diamonds';
  const product = getProductById(effectiveId);

  // Gallery state
  const images = product?.gallery && product.gallery.length > 0
    ? product.gallery
    : product
    ? [product.image, product.fallbackImage].filter(Boolean) as string[]
    : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [effectiveId]);

  if (!product) {
    return (
      <main className="w-full min-h-screen bg-background text-text flex flex-col items-center justify-center p-8 text-center">
        <h1 className="font-serif text-[2.5rem] mb-4">Creation Not Found</h1>
        <p className="font-sans text-text-muted mb-8 max-w-[500px]">
          The jewelry piece you are looking for is currently unavailable or has been archived.
        </p>
        <Link
          href="/collections"
          className="bg-text text-white px-8 py-3.5 rounded-full uppercase tracking-wider font-sans text-[0.82rem] font-semibold hover:bg-[#35373b] transition-colors"
        >
          Explore All Collections
        </Link>
      </main>
    );
  }

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      router.push(product.category === 'gold' ? '/gold' : product.category === 'silver' ? '/silver' : '/gemstones');
    }
  };

  return (
    <main className="w-full min-h-screen bg-background text-text flex flex-col">
      {/* Top Header Navigation Bar */}
      <header className="w-full bg-[#fafaf8]/95 border-b border-border sticky top-0 z-[100] backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-10 py-5 max-[960px]:px-6 max-[960px]:py-4 flex items-center justify-between">
          {/* Back button */}
          <button
            type="button"
            className="inline-flex items-center gap-2 font-sans text-[0.88rem] font-medium text-text-muted cursor-pointer py-1.5 bg-transparent border-none transition-all duration-250 hover:text-text hover:-translate-x-1"
            onClick={handleBack}
            aria-label="Return to previous collection"
          >
            <span className="text-[1.1rem] leading-none">←</span>
            <span>Back</span>
          </button>

          {/* Centered Brand Logo */}
          <Link
            href="/"
            className="group inline-flex items-center"
            aria-label="EG&Co. Everglow Gems Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="EG&Co. Everglow Gems"
              className="h-[46px] max-w-[160px] object-contain block transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Circular Menu Button */}
          <button
            type="button"
            className={`w-11 h-11 rounded-full flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0 bg-surface border border-border text-text shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all duration-400 ease-luxury hover:bg-hover hover:border-accent ${
              isMenuOpen ? 'border-accent bg-hover' : ''
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span
              className={`block w-5 h-[1.5px] bg-text rounded-[2px] transition-all duration-400 origin-center ${
                isMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text rounded-[2px] transition-all duration-400 origin-center ${
                isMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text rounded-[2px] transition-all duration-400 origin-center ${
                isMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Main Product Showcase Section */}
      <section className="grow py-14 px-10 pb-24 max-[960px]:py-8 max-[960px]:px-6 max-[960px]:pb-16 max-w-[1360px] w-full mx-auto box-border" aria-label={product.title}>
        <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-18 max-[960px]:gap-12 items-start">
          {/* Left Column: Gallery */}
          <div className="flex flex-col gap-5 sticky top-[90px] max-[960px]:static">
            {/* Main Stage Image */}
            <div className="group w-full aspect-square rounded-[20px] overflow-hidden bg-background-secondary border border-border shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[activeImageIndex] || product.image}
                alt={`${product.title} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-600 ease-luxury block group-hover:scale-105"
                onError={(e) => {
                  if (product.fallbackImage && e.currentTarget.src !== product.fallbackImage) {
                    e.currentTarget.src = product.fallbackImage;
                  }
                }}
              />
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex gap-3 max-[600px]:gap-2 overflow-x-auto py-1 px-0.5" role="tablist" aria-label="Product image thumbnails">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeImageIndex}
                    className={`w-[72px] h-[72px] max-[600px]:w-[60px] max-[600px]:h-[60px] rounded-xl overflow-hidden border-[1.5px] p-0 cursor-pointer bg-background-secondary shrink-0 transition-all duration-250 ${
                      idx === activeImageIndex
                        ? 'border-text opacity-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
                        : 'border-border opacity-80 hover:opacity-100 hover:-translate-y-0.5 hover:border-accent'
                    }`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover block"
                      onError={(e) => {
                        if (product.fallbackImage) e.currentTarget.src = product.fallbackImage;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Information & Inquiries */}
          <div className="flex flex-col pt-2">
            {/* Title */}
            <h1 className="font-serif text-[clamp(2rem,3.4vw,2.85rem)] max-[600px]:text-[1.85rem] font-semibold leading-[1.2] text-text mb-3.5 tracking-[-0.01em]">
              {product.title}
            </h1>

            {/* Status Badge */}
            <div className="font-sans text-[0.82rem] font-medium text-accent mb-5 tracking-[0.04em] uppercase">
              {product.statusBadge || 'Available Atelier Masterwork'}
            </div>

            {/* Italic Tagline */}
            {product.tagline && (
              <p className="font-sans text-[0.95rem] text-text-muted mb-5 leading-[1.5]">
                <em>{product.tagline}</em>
              </p>
            )}

            {/* Editorial Story Paragraphs */}
            <div className="flex flex-col gap-4.5 mb-9">
              {product.storyParagraphs && product.storyParagraphs.length > 0 ? (
                product.storyParagraphs.map((para, i) => (
                  <p key={i} className="font-sans text-[0.94rem] leading-[1.75] text-text-muted m-0">{para}</p>
                ))
              ) : (
                <p className="font-sans text-[0.94rem] leading-[1.75] text-text-muted m-0">{product.description}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3.5 mb-12">
              <button
                type="button"
                className="w-full bg-text text-white border border-text rounded-lg py-4 px-7 font-sans text-[0.9rem] font-medium tracking-[0.04em] cursor-pointer flex items-center justify-center gap-2 transition-all duration-250 hover:bg-[#35373b] hover:border-[#35373b] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(32,33,36,0.18)]"
                onClick={() => setIsInquiryOpen(true)}
              >
                <span>Enquiry</span>
                <span className="text-[1rem]" aria-hidden="true">♡</span>
              </button>

              
            </div>
          </div>
        </div>
      </section>

      {/* Product-Specific Inquiry Dialog Modal */}
      {isInquiryOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-[#202124]/45 backdrop-blur-md flex items-center justify-center p-6 animate-[heroHeaderFade_0.3s_ease_forwards]"
          onClick={() => setIsInquiryOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Product Enquiry Modal"
        >
          <div
            className="bg-surface border border-border rounded-[16px] w-full max-w-[540px] p-8 max-[600px]:p-6 relative shadow-[0_24px_60px_rgba(0,0,0,0.12)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border">
              <h3 className="font-serif text-[1.4rem] text-text font-semibold m-0">
                Product Enquiry
              </h3>
              <button
                type="button"
                className="text-text-muted cursor-pointer p-1.5 transition-colors duration-200 hover:text-text bg-transparent border-none rounded-md"
                onClick={() => setIsInquiryOpen(false)}
                aria-label="Close enquiry dialog"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ProductInquiryForm product={product} onClose={() => setIsInquiryOpen(false)} />
          </div>
        </div>
      )}

      {/* Common Footer */}
      <Footer />

      {/* Navigation Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
}
