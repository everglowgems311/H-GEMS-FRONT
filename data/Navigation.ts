import { NavItem } from '@/types/navigation';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  {
    id: 'collection',
    label: 'Collection',
    path: '/collections',
    children: [
      { id: 'gold', label: 'Gold', path: '/gold' },
      { id: 'silver', label: 'Silver', path: '/silver' },
      { id: 'diamond', label: 'Diamond', path: '/gemstones' },
    ],
  },
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
