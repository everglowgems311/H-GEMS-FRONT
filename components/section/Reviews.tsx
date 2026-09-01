import React from 'react';
import { REVIEWS_DATA } from '@/data/HomeData';

export default function Reviews() {
  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="py-26 px-8 pb-32 max-[650px]:py-18 max-[650px]:px-6 bg-surface text-text relative overflow-hidden" aria-label="Customer Reviews and Testimonials">
      <div className="text-center mb-16">
        <p className="font-sans text-[0.78rem] font-medium tracking-[0.3em] uppercase text-accent mb-3">
          AUTHENTIC EXPERIENCES
        </p>
        <h2 className="font-sans text-[clamp(2.2rem,3.8vw,3.5rem)] font-normal text-text">
          Moments of <em className="font-serif italic font-normal text-text">Joy</em>
        </h2>
      </div>

      <div className="max-w-[1320px] mx-auto grid grid-cols-4 max-[1100px]:grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:max-w-[440px] gap-7">
        {REVIEWS_DATA.map((review) => (
          <article
            key={review.id}
            className="group relative bg-background border border-border rounded-[20px] p-9 max-[600px]:p-7 flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-400 ease-luxury hover:-translate-y-1.5 hover:bg-surface hover:border-accent-cool hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
          >
            <span className="absolute top-5 right-6 font-serif text-[3.5rem] leading-none text-border select-none pointer-events-none" aria-hidden="true">
              &ldquo;
            </span>
            <div className="flex gap-1 text-accent mb-5" aria-label={`${review.rating} out of 5 stars`}>
              {renderStars(review.rating)}
            </div>
            <p className="font-sans text-[0.9rem] font-light leading-[1.7] text-text-muted mb-7 grow">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="flex flex-col border-t border-border pt-4">
              <span className="font-sans text-[0.92rem] font-semibold text-text">
                {review.name}
              </span>
              <div className="flex items-center justify-between mt-1">
                <span className="font-sans text-[0.78rem] text-text-muted">
                  {review.location}
                </span>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 font-sans text-[0.72rem] font-medium text-accent" title="Verified Purchase">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
