/**
 * Centralized Hero Configuration for All Pages
 * Single source of truth for Hero titles, eyebrows, descriptions, images, and CTA settings.
 */
import { HeroConfig } from '@/types/navigation';

export const HERO_DATA: Record<string, HeroConfig> = {
  home: {
    id: 'home',
    eyebrow: 'LUXURY FINE JEWELRY',
    title: 'Creations with an eye for detail.',
    description: 'Unique jewelry pieces that highlight your personality.',
    image: '/images/hero/hero-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'H-GEMS Haute Joaillerie Luxury Collection',
    variant: 'home', // 100vh
    showActions: true,
    primaryCtaText: 'Discover Collections',
    secondaryCtaText: 'Personal Consultation',
  },

  gold: {
    id: 'gold',
    eyebrow: 'COLLECTION',
    title: 'Gold Jewelry',
    description: 'Timeless elegance crafted to shine in pure 18k solid gold.',
    image: '/images/collection/gold-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1600&auto=format&fit=crop',
    imageAlt: '18k Solid Gold Handcrafted Jewelry Collection',
    variant: 'home',
    showActions: false,
  },

  silver: {
    id: 'silver',
    eyebrow: 'COLLECTION',
    title: 'Silver Jewelry',
    description: 'Cool elegance for every day, cast in 925 sterling silver.',
    image: '/images/collection/silver-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1600&auto=format&fit=crop',
    imageAlt: '925 Sterling Silver Artisan Collection',
    variant: 'home',
    showActions: false,
  },

  gemstones: {
    id: 'gemstones',
    eyebrow: 'COLLECTION',
    title: 'Gemstones & Diamonds',
    description: 'Rare beauty in every natural detail, certified GIA & IGI.',
    image: '/images/collection/gemstones.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Rare Natural Gemstones and Certified Diamonds',
    variant: 'home',
    showActions: false,
  },

  about: {
    id: 'about',
    eyebrow: 'OUR STORY',
    title: 'About Us',
    description: 'Discover the story, craftsmanship and passion behind our jewelry atelier.',
    image: '/images/banners/about-model.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'H-GEMS Atelier Heritage and Craftsmanship',
    variant: 'home',
    showActions: false,
  },

  contact: {
    id: 'contact',
    eyebrow: 'GET IN TOUCH',
    title: 'Contact Us',
    description: 'We would love to hear from you and help you find or commission the perfect piece.',
    image: '/images/banners/faq-bg.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'H-GEMS Private Concierge & Consultation',
    variant: 'home',
    showActions: false,
  },

  privacy: {
    id: 'privacy',
    eyebrow: 'LEGAL & PRIVACY',
    title: 'Privacy Policy',
    description: 'How we protect your confidential information and privacy with utmost discretion.',
    image: '/images/hero/hero-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Privacy Policy Information',
    variant: 'home',
    showActions: false,
  },

  terms: {
    id: 'terms',
    eyebrow: 'TERMS OF SERVICE',
    title: 'Terms & Conditions',
    description: 'Our commitment to excellence, authentic hallmarking, and client care.',
    image: '/images/hero/hero-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Terms and Conditions Information',
    variant: 'home',
    showActions: false,
  },

  imprint: {
    id: 'imprint',
    eyebrow: 'LEGAL NOTICE',
    title: 'Imprint',
    description: 'Company identification, registered trademark information, and regulatory details.',
    image: '/images/hero/hero-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Legal Imprint Information',
    variant: 'home',
    showActions: false,
  },

  notFound: {
    id: 'notFound',
    eyebrow: '404 ERROR',
    title: 'Page Not Found',
    description: 'The requested piece or page could not be found. Allow us to guide you back.',
    image: '/images/hero/hero-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Page Not Found',
    variant: 'home',
    showActions: false,
  },
};

export default HERO_DATA;
