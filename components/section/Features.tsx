import React from 'react';
import { FEATURES_DATA } from '@/data/HomeData';

export default function Features() {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'diamond-ring':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="14" r="7" />
            <path d="M12 2l3 4-3 3-3-3z" />
          </svg>
        );
      case 'gem':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="6 3 18 3 22 9 12 22 2 9" />
            <line x1="2" y1="9" x2="22" y2="9" />
            <line x1="10" y1="3" x2="8" y2="9" />
            <line x1="14" y1="3" x2="16" y2="9" />
            <line x1="12" y1="22" x2="8" y2="9" />
            <line x1="12" y1="22" x2="16" y2="9" />
          </svg>
        );
      case 'gold-bars':
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
    }
  };

  return (
    <section className="py-24 px-8 max-[960px]:py-18 max-[960px]:px-6 bg-background text-text relative overflow-hidden" aria-label="Our Values and Craftsmanship">
      <div className="max-w-[1280px] mx-auto grid grid-cols-3 max-[960px]:grid-cols-1 max-[960px]:max-w-[500px] gap-12 max-[960px]:gap-8">
        {FEATURES_DATA.map((feature) => (
          <div
            key={feature.id}
            className="group flex flex-col items-center text-center p-10 max-[600px]:p-8 rounded-[20px] bg-surface border border-border shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-400 ease-luxury relative hover:-translate-y-1.5 hover:border-accent-cool hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
          >
            <div
              className="w-16 h-16 rounded-full bg-background-secondary border border-border flex items-center justify-center mb-7 text-accent transition-all duration-400 group-hover:bg-text group-hover:text-white group-hover:border-text group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(32,33,36,0.15)]"
              aria-hidden="true"
            >
              {renderIcon(feature.icon)}
            </div>
            <h3 className="font-sans text-[1.1rem] font-medium tracking-[0.08em] text-text uppercase mb-3.5">
              {feature.title}
            </h3>
            <p className="font-sans text-[0.9rem] font-light leading-[1.7] text-text-muted max-w-[320px] mx-auto">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
