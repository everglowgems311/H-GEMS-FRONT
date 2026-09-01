'use client';

import React from 'react';
import Link from 'next/link';

export interface AboutPreviewProps {
  onStoryClick?: () => void;
}

export default function AboutPreview({ onStoryClick }: AboutPreviewProps) {
  return (
    <section className="py-24 px-8 pb-32 max-[1024px]:py-20 max-[1024px]:px-6 bg-surface text-text relative" aria-label="Brand Philosophy and Story">
      <div className="max-w-[1240px] mx-auto grid grid-cols-[1.1fr_1fr] max-[1024px]:grid-cols-1 gap-22 max-[1024px]:gap-14 items-center">
        {/* Left Image with Translucent Quote Overlay */}
        <div className="group relative rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-background-secondary border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/banners/about-model.jpg"
            alt="Haute Joaillerie diamond tennis bracelet"
            className="w-full h-full min-h-[520px] max-[1024px]:min-h-[400px] max-h-[600px] object-cover block transition-transform duration-800 ease-luxury group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop';
            }}
          />
          <div className="absolute bottom-7 left-7 right-7 p-6 max-[600px]:p-4 bg-[#fafaf8]/92 border border-border backdrop-blur-md rounded-[16px] text-text shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <p className="font-serif text-[1.15rem] italic leading-[1.45] text-text m-0">
              &ldquo;Perfection is not when there is nothing more to add, but when nothing can be taken away.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Story Content */}
        <div className="flex flex-col items-start">
          <p className="font-sans text-[0.78rem] font-medium tracking-[0.3em] uppercase text-accent mb-5">
            OUR PHILOSOPHY
          </p>
          <h2 className="font-sans text-[clamp(2.2rem,3.5vw,3.25rem)] font-normal leading-[1.15] text-text mb-8 tracking-[-0.01em]">
            Art, that you can <em className="font-serif italic font-normal text-text">wear.</em>
          </h2>
          <p className="font-sans text-[0.95rem] font-light leading-[1.8] text-text-muted mb-6">
            In our atelier, jewelry is more than an accessory—it is a sculpted statement of character, emotion, and individuality. Every gemstone is hand-selected for its rare fire and character, set in timeless precious metals with meticulous precision.
          </p>
          <p className="font-sans text-[0.95rem] font-light leading-[1.8] text-text-muted mb-6">
            From the initial artistic sketch to the final polish, our master goldsmiths unite age-old traditions with modern aesthetics, creating heirloom pieces destined to be treasured across generations.
          </p>
          {onStoryClick ? (
            <button
              type="button"
              className="group inline-flex items-center gap-2.5 mt-4 font-sans text-[0.88rem] font-medium tracking-[0.14em] uppercase text-text relative pb-1 transition-all duration-400 ease-luxury hover:text-accent hover:translate-x-1 cursor-pointer bg-transparent border-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-accent after:transition-all after:duration-350 hover:after:h-[2px]"
              onClick={onStoryClick}
            >
              <span>Discover our story</span>
              <svg
                width="16"
                height="16"
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
              href="/about"
              className="group inline-flex items-center gap-2.5 mt-4 font-sans text-[0.88rem] font-medium tracking-[0.14em] uppercase text-text relative pb-1 transition-all duration-400 ease-luxury hover:text-accent hover:translate-x-1 cursor-pointer bg-transparent border-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-accent after:transition-all after:duration-350 hover:after:h-[2px]"
            >
              <span>Discover our story</span>
              <svg
                width="16"
                height="16"
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
      </div>
    </section>
  );
}
