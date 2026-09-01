'use client';

import React, { useState } from 'react';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '@/data/HomeData';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);

  const currentQuestions = FAQ_ITEMS[activeCategory] || [];

  const handleToggleQuestion = (index: number) => {
    setOpenItemIndex((prev) => (prev === index ? null : index));
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setOpenItemIndex(0); // auto-open first question in new category
  };

  return (
    <section className="relative py-28 px-8 max-[600px]:py-20 max-[600px]:px-5 bg-background text-text overflow-hidden" aria-label="Frequently Asked Questions">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-[1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/banners/faq-bg.jpg"
          alt="Luxury hands wearing fine gold and diamond rings"
          className="w-full h-full object-cover object-[center_40%] opacity-15"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf8]/95 to-[#fafaf8]/92" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-[0.78rem] font-medium tracking-[0.3em] uppercase text-accent mb-3.5">
            HELP & ADVICE
          </p>
          <h2 className="font-sans text-[clamp(2.2rem,3.8vw,3.5rem)] font-light text-text">
            <em className="font-serif italic font-normal">Frequently</em> Asked Questions
          </h2>
        </div>

        {/* Floating Card with Sidebar Categories and Accordion */}
        <div className="bg-surface text-text rounded-[20px] border border-border shadow-[0_15px_45px_rgba(0,0,0,0.04)] grid grid-cols-[280px_1fr] max-[900px]:grid-cols-1 overflow-hidden min-h-[420px]">
          {/* Categories Sidebar */}
          <div className="bg-background-secondary border-r max-[900px]:border-r-0 max-[900px]:border-b border-border p-10 max-[900px]:p-6 flex flex-col max-[900px]:flex-row max-[900px]:overflow-x-auto gap-2" role="tablist" aria-label="FAQ Categories">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`relative flex items-center w-full max-[900px]:w-auto max-[900px]:whitespace-nowrap px-4 py-3.5 rounded-[10px] border-none font-sans text-[0.9rem] text-left cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-surface text-text font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.03)] before:content-[\'\'] before:absolute before:left-0 before:top-[20%] before:h-[60%] before:w-[3px] before:rounded-[4px] before:bg-accent max-[900px]:before:left-[20%] max-[900px]:before:top-auto max-[900px]:before:bottom-0 max-[900px]:before:w-[60%] max-[900px]:before:h-[3px]'
                      : 'bg-transparent text-text-muted font-normal hover:text-text hover:bg-hover'
                  }`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Questions Accordion Area */}
          <div className="p-10 max-[900px]:p-6 flex flex-col gap-4" role="tabpanel">
            {currentQuestions.map((item, idx) => {
              const isOpen = openItemIndex === idx;
              return (
                <div key={idx} className="border-b border-border pb-4 last:border-b-0">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between text-left bg-transparent border-none py-3 font-sans text-[1.05rem] font-medium text-text cursor-pointer transition-colors duration-300 hover:text-accent"
                    onClick={() => handleToggleQuestion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-350 shrink-0 ml-4 ${
                        isOpen
                          ? 'rotate-180 bg-text text-white'
                          : 'bg-background-secondary text-text'
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-luxury ${
                      isOpen
                        ? 'max-h-[250px] opacity-100 py-2 pb-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-sans text-[0.92rem] font-light leading-[1.7] text-text-muted m-0">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
