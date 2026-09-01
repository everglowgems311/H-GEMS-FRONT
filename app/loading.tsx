import React from 'react';

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="w-12 h-12 rounded-full border-2 border-accent border-t-transparent animate-spin mb-4" />
      <p className="font-serif italic text-[1.1rem] text-text-muted">
        Refining Everglow Gems atelier view...
      </p>
    </div>
  );
}
