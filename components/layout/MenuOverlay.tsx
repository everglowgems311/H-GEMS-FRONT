'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, CONSULTATION_ITEM } from '@/data/Navigation';
import { NavItem } from '@/types/navigation';

export interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
  onNavigate?: (item: NavItem) => void;
}

export default function MenuOverlay({
  isOpen,
  onClose,
  activeItem,
  onNavigate,
}: MenuOverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const effectiveActive = activeItem || (
    NAV_ITEMS.find((n) => n.path === pathname)?.id || 'home'
  );

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: NavItem) => {
    if (onNavigate) {
      onNavigate(item);
    }
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#202124]/40 backdrop-blur-md transition-all duration-400 ease-luxury ${
        isOpen
          ? 'opacity-100 visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div
        className={`relative w-[calc(100%-4rem)] max-[900px]:w-[calc(100%-2.5rem)] max-[600px]:w-[calc(100%-1.25rem)] max-w-[960px] h-[calc(100vh-4.5rem)] max-[900px]:h-[calc(100vh-3rem)] max-[600px]:h-[calc(100vh-1.5rem)] max-h-[720px] max-[900px]:max-h-none min-h-[480px] bg-[#fafaf8]/96 border border-border rounded-[24px] max-[900px]:rounded-[20px] max-[600px]:rounded-[16px] shadow-[0_25px_70px_rgba(0,0,0,0.08),0_4px_20px_rgba(0,0,0,0.04),0_0_0_1px_rgba(201,181,138,0.15)] flex flex-col justify-between p-12 max-[900px]:p-10 max-[600px]:p-5 box-border overflow-y-auto transition-all duration-450 ease-luxury ${
          isOpen
            ? 'scale-100 translate-y-0 opacity-100'
            : 'scale-95 translate-y-3 opacity-0'
        }`}
        ref={panelRef}
      >
        {/* Top Header: Logo Left, Close X Right */}
        <div className="flex items-center justify-between w-full pb-6 max-[600px]:pb-4 border-b border-border">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 no-underline text-text transition-opacity duration-300 hover:opacity-85"
            onClick={() => handleItemClick({ id: 'home', label: 'Home', path: '/' })}
            aria-label="EG&Co. Everglow Gems Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="EG&Co. Everglow Gems"
              className="h-[52px] max-w-[180px] object-contain transition-transform duration-300 block group-hover:scale-105"
            />
          </Link>

          {/* Close 'X' Button */}
          <button
            type="button"
            className="w-11 h-11 max-[600px]:w-[38px] max-[600px]:h-[38px] rounded-full flex items-center justify-center text-text bg-surface border border-border cursor-pointer transition-all duration-400 ease-luxury shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-hover hover:border-accent hover:rotate-90 hover:scale-105 hover:shadow-[0_4px_15px_rgba(201,181,138,0.18)] active:scale-95"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="w-full" aria-label="Main Navigation">
          <ul className="flex flex-col gap-3.5 max-[900px]:gap-2.5 max-[600px]:gap-2 list-none py-7 max-[900px]:py-5 max-[600px]:py-4 m-0">
            {NAV_ITEMS.map((item, index) => {
              const isActive = effectiveActive === item.id || pathname === item.path;
              return (
                <li
                  key={item.id}
                  className="transition-all duration-400 ease-luxury"
                  style={{
                    transitionDelay: isOpen ? `${0.1 + index * 0.04}s` : '0s',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-15px)',
                  }}
                >
                  <Link
                    href={item.path}
                    className={`group inline-flex items-center gap-3 font-sans text-[clamp(1.15rem,2.2vw,1.65rem)] max-[600px]:text-[1.1rem] font-light tracking-[0.04em] text-text no-underline bg-transparent border-none cursor-pointer py-1 transition-all duration-400 ease-luxury hover:text-accent hover:translate-x-2 ${
                      isActive ? 'text-accent font-medium' : ''
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <span
                      className={`inline-block h-[1.5px] bg-accent transition-all duration-350 ease-luxury ${
                        isActive
                          ? 'w-[18px]'
                          : 'w-0 group-hover:w-[18px]'
                      }`}
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Panel Footer: Personal Consultation CTA */}
        <div className="pt-5 border-t border-border flex items-center">
          <Link
            href={CONSULTATION_ITEM.path}
            className="group inline-flex flex-col bg-transparent border-none cursor-pointer py-1.5 font-sans text-[0.95rem] max-[600px]:text-[0.8rem] font-medium tracking-[0.18em] max-[600px]:tracking-[0.14em] uppercase text-text relative transition-all duration-300 hover:text-accent hover:-translate-y-0.5 after:content-[''] after:block after:w-full after:h-[1.5px] after:bg-accent after:mt-1 after:transition-all after:duration-350 after:ease-luxury hover:after:h-[2px] hover:after:shadow-[0_0_8px_var(--color-accent)]"
            onClick={() => handleItemClick(CONSULTATION_ITEM)}
          >
            {CONSULTATION_ITEM.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
