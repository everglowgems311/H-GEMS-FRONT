'use client';

import React, { useState, useRef, useEffect } from 'react';
import { COUNTRIES, DEFAULT_COUNTRY } from '@/data/countries';
import { Country } from '@/types/inquiry';

export interface WhatsAppInputProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: string, country?: Country) => void;
  onCountryChange?: (country: Country) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function WhatsAppInput({
  id = 'whatsapp_number',
  name = 'whatsapp_number',
  value = '',
  onChange,
  onCountryChange,
  error = '',
  required = true,
  disabled = false,
}: WhatsAppInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  const filteredCountries = COUNTRIES.filter((c) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchQuery('');
    if (onCountryChange) {
      onCountryChange(country);
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const sanitized = rawVal.replace(/[^\d\s-]/g, '');
    if (onChange) {
      onChange(sanitized, selectedCountry);
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full relative">
      <label
        htmlFor={id}
        className="text-[0.76rem] tracking-[0.1em] uppercase text-text-muted font-sans font-medium"
      >
        WhatsApp Number {required && <span className="text-accent">*</span>}
      </label>

      <div
        className={`flex rounded-md border bg-surface transition-all duration-250 ${
          error
            ? 'border-red-500 ring-1 ring-red-500/30'
            : 'border-border focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/20'
        }`}
        ref={dropdownRef}
      >
        {/* Country Code Trigger Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="flex items-center gap-1.5 px-3 py-2.5 bg-background-secondary border-r border-border text-text font-sans text-[0.88rem] cursor-pointer hover:bg-hover transition-colors select-none shrink-0"
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
          aria-label="Select Country Code"
        >
          <span className="text-base leading-none">{selectedCountry.flag}</span>
          <span className="font-medium text-[0.84rem] text-text">{selectedCountry.dialCode}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-text-muted transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* WhatsApp Phone Number Input */}
        <input
          id={id}
          name={name}
          type="tel"
          disabled={disabled}
          required={required}
          value={value}
          onChange={handleNumberChange}
          placeholder="98765 43210"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="grow px-3.5 py-2.5 bg-transparent font-sans text-[0.88rem] text-text outline-none placeholder:text-text-muted/60"
        />

        {/* Country Selector Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-[100%] left-0 z-50 mt-1.5 w-[310px] max-w-[90vw] bg-surface border border-border rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.12)] p-2 flex flex-col gap-1.5 max-h-[300px] animate-[heroHeaderFade_0.15s_ease-out]">
            {/* Search Country Input */}
            <div className="p-1">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code..."
                className="w-full bg-background-secondary border border-border rounded-md px-3 py-1.5 text-[0.82rem] font-sans text-text outline-none focus:border-accent"
              />
            </div>

            {/* List of Countries */}
            <ul
              role="listbox"
              className="overflow-y-auto max-h-[220px] list-none p-0 m-0 flex flex-col gap-0.5"
            >
              {filteredCountries.length === 0 ? (
                <li className="p-3 text-center text-text-muted text-[0.82rem] font-sans">
                  No country found
                </li>
              ) : (
                filteredCountries.map((c) => (
                  <li key={c.code}>
                    <button
                      type="button"
                      onClick={() => handleCountrySelect(c)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-md text-[0.84rem] font-sans transition-colors cursor-pointer border-none bg-transparent ${
                        selectedCountry.code === c.code
                          ? 'bg-background-secondary font-medium text-accent'
                          : 'text-text hover:bg-hover'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="text-base leading-none">{c.flag}</span>
                        <span className="truncate">{c.name}</span>
                      </div>
                      <span className="text-text-muted text-[0.8rem] ml-2 shrink-0">
                        {c.dialCode}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>

      {error && (
        <span id={`${id}-error`} className="text-[0.76rem] text-red-500 font-sans mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
}
