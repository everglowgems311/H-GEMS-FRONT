'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NAV_ITEMS, LEGAL_ITEMS } from '@/data/Navigation';
import { NavItem } from '@/types/navigation';

export interface FooterProps {
  onNavigate?: (item: NavItem) => void;
}

/**
 * Common Reusable Footer Component
 * Shared across all pages of the H-GEMS luxury website.
 */
export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const router = useRouter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (item: NavItem) => {
    if (onNavigate) {
      onNavigate(item);
    } else {
      router.push(item.path);
    }
  };

  return (
    <footer className="bg-[#E9EBEA] text-text rounded-[36px] max-[650px]:rounded-[24px] px-10 pt-22 pb-8 max-[650px]:px-6 max-[650px]:pt-16 max-[650px]:pb-8 relative overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.04)] m-8 border-t border-border" aria-label="Site Footer">
      <div className="max-w-[1320px] mx-auto grid grid-cols-[1.4fr_1fr_1.1fr_1.5fr] max-[1024px]:grid-cols-2 max-[650px]:grid-cols-1 gap-16 max-[1024px]:gap-12 max-[650px]:gap-10 pb-18 border-b border-[#202124]/10">
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 no-underline text-text mb-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="EG&Co. Everglow Gems"
              className="h-14 w-auto object-contain block transition-transform duration-350 ease-luxury group-hover:scale-105"
            />
          </Link>
          <p className="font-sans text-[0.88rem] font-light leading-[1.7] text-text-muted mb-7 max-w-[320px]">
            Bespoke fine jewelry, handcrafted with certified natural diamonds, rare colored gems, and 18k solid gold.
          </p>
          <div className="flex gap-3">
            <a
              href="#instagram"
              className="w-[38px] h-[38px] rounded-full bg-surface border border-border flex items-center justify-center text-text transition-all duration-350 cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:bg-text hover:text-white hover:border-text hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(32,33,36,0.15)]"
              aria-label="Instagram"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#pinterest"
              className="w-[38px] h-[38px] rounded-full bg-surface border border-border flex items-center justify-center text-text transition-all duration-350 cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:bg-text hover:text-white hover:border-text hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(32,33,36,0.15)]"
              aria-label="Pinterest"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="4" x2="12" y2="20" />
                <circle cx="12" cy="12" r="8" />
              </svg>
            </a>
            <a
              href="#facebook"
              className="w-[38px] h-[38px] rounded-full bg-surface border border-border flex items-center justify-center text-text transition-all duration-350 cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:bg-text hover:text-white hover:border-text hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(32,33,36,0.15)]"
              aria-label="Facebook"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Menu Column */}
        <div>
          <h3 className="font-sans text-[0.95rem] font-medium tracking-[0.15em] uppercase text-text mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[1.5px] after:bg-accent">
            Navigation
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="font-sans text-[0.88rem] font-light text-text-muted no-underline bg-transparent border-none cursor-pointer p-0 text-left transition-all duration-300 hover:text-text hover:translate-x-1"
                  onClick={() => handleLinkClick(item)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-sans text-[0.95rem] font-medium tracking-[0.15em] uppercase text-text mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[1.5px] after:bg-accent">
            Studio & Contact
          </h3>
          <div className="flex flex-col gap-4 font-sans text-[0.88rem] font-light text-text-muted leading-[1.6]">
            <div className="flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-[3px]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Maximilian Street 42, 80539 Munich, Germany</span>
            </div>
            <div className="flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-[3px]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+49 (0) 89 2109 4500</span>
            </div>
            <div className="flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-[3px]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>concierge@h-gems.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="font-sans text-[0.95rem] font-medium tracking-[0.15em] uppercase text-text mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[1.5px] after:bg-accent">
            Exclusive Newsletter
          </h3>
          <p className="font-sans text-[0.88rem] font-light leading-[1.65] text-text-muted mb-5">
            Subscribe for bespoke invitations, private preview releases, and gemological insights.
          </p>
          <form className="flex gap-2 relative max-[650px]:flex-col" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              className="grow bg-surface border border-border rounded-full py-3.5 px-5 font-sans text-[0.85rem] text-text outline-none transition-colors duration-300 focus:border-accent focus:bg-surface"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-text text-white border border-text rounded-full px-6 max-[650px]:py-3.5 font-sans text-[0.8rem] font-medium tracking-[0.12em] uppercase cursor-pointer transition-all duration-350 hover:bg-accent hover:border-accent hover:text-text hover:shadow-[0_4px_18px_rgba(201,181,138,0.18)]"
            >
              Join
            </button>
          </form>
          {subscribed && (
            <p className="text-text text-[0.82rem] mt-2">
              Thank you for subscribing to our private circle.
            </p>
          )}
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-[1320px] mx-auto pt-8 flex items-center justify-between max-[650px]:flex-col max-[650px]:gap-4 max-[650px]:text-center font-sans text-[0.78rem] text-text-muted">
        <p className="m-0">&copy; {new Date().getFullYear()} EVERGLOW GEMS All rights reserved.</p>
        <div className="flex gap-6">
          {LEGAL_ITEMS.map((legal) => (
            <button
              key={legal.id}
              type="button"
              className="text-text-muted no-underline bg-transparent border-none cursor-pointer p-0 transition-colors duration-300 hover:text-text"
              onClick={() => handleLinkClick(legal)}
            >
              {legal.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
