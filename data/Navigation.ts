import { NavItem } from '@/types/navigation';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'gold-jewelry', label: 'Gold Jewelry', path: '/gold' },
  { id: 'silver-jewelry', label: 'Silver Jewelry', path: '/silver' },
  { id: 'gemstones', label: 'Gemstones', path: '/gemstones' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const CONSULTATION_ITEM: NavItem = {
  id: 'consultation',
  label: 'Personal Consultation',
  path: '/contact',
};

export const LEGAL_ITEMS: NavItem[] = [
  { id: 'privacy', label: 'Privacy Policy', path: '/privacy' },
  { id: 'terms', label: 'Terms & Conditions', path: '/terms' },
  { id: 'imprint', label: 'Imprint', path: '/imprint' },
];
