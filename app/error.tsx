'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Next.js application error caught by boundary:', error);
  }, [error]);

  return (
    <main className="w-full min-h-screen bg-background text-text flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-[500px] bg-surface border border-border rounded-[20px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
        <span className="text-[2.2rem] text-accent block mb-4">✦</span>
        <h2 className="font-serif text-[1.8rem] mb-3 text-text">
          An Unexpected Moment Occurred
        </h2>
        <p className="font-sans text-[0.9rem] text-text-muted mb-8 leading-[1.6]">
          We apologize for the inconvenience. Our atelier systems are designed to ensure seamless experience. Please try refreshing the page or return to the main gallery.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="bg-text text-white px-6 py-3 rounded-full font-sans text-[0.8rem] font-medium tracking-wider uppercase hover:bg-[#35373b] transition-colors cursor-pointer"
          >
            Retry Experience
          </button>
          <Link
            href="/"
            className="bg-background-secondary border border-border text-text px-6 py-3 rounded-full font-sans text-[0.8rem] font-medium tracking-wider uppercase hover:bg-hover transition-colors"
          >
            Salon Home
          </Link>
        </div>
      </div>
    </main>
  );
}
