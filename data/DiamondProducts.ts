/**
 * Rare Natural Gemstones & Diamond Creations Catalog
 */
import { Product } from '@/types/product';

export const DIAMOND_PRODUCTS: Product[] = [
  {
    id: 'rhodolite-ring-gold-diamonds',
    title: 'Rhodolite ring in yellow gold with diamonds',
    subtitle: '18k Yellow Gold & Natural Rhodolite Garnet',
    category: 'gemstone',
    availabilityStatus: 'Bespoke Atelier Piece',
    statusBadge: 'Sold — Available on Bespoke Order',
    tagline: 'A ring of exquisite depth and elegance.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    fallbackImage: '/images/collection/gemstones.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    ],
    storyParagraphs: [
      'At the heart of this exclusive rhodolite ring shines an intensely red rhodolite; its velvety nuances between wine red and cherry hue creating a powerful presence. Masterfully cut, the gemstone impresses with its remarkable, deep brilliance.',
      'The rhodolite is set in radiant yellow gold. A band delicately adorned with sparkling diamonds lends the design additional brilliance and completes this haute joaillerie piece with a timeless, luxurious appeal.',
      'A statement ring for stylish individuals — emotional, refined, and of lasting value.',
    ],
  },
  {
    id: 'gemstone-emerald-solitaire',
    title: 'Verdant Royal Colombian Emerald Ring',
    subtitle: '3.40ct Untreated Emerald & Trapezoid Diamonds',
    category: 'gemstone',
    availabilityStatus: 'One-of-a-Kind Masterpiece',
    statusBadge: 'Collector Gemstone',
    tagline: 'An exceptional Muzo emerald radiating intense velvety green fire.',
    image: '/images/collection/gemstones.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    gallery: [
      '/images/collection/gemstones.jpg',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    ],
    storyParagraphs: [
      'Sourced from the historic Muzo mine in Colombia, this 3.40-carat emerald displays the rare "jardin" and deep, saturated green color prized by royalty and gemstone connoisseurs.',
      'Flanked by two custom-cut trapezoid diamond shoulders set in pure Platinum 950, with delicate 18k yellow gold eagle-claw prongs securing the emerald to accentuate its natural warmth.',
      'Accompanied by dual certification dossiers from the Swiss Gemmological Institute (SSEF) and GIA.',
    ],
  },
  {
    id: 'gemstone-diamond-eternity',
    title: 'Grand Brilliant Diamond Tennis Necklace',
    subtitle: '12.50ct Total Weight E/F VS Diamonds',
    category: 'gemstone',
    availabilityStatus: 'Available for Commission',
    statusBadge: 'Haute Joaillerie',
    tagline: 'A cascading collar of individually certified brilliant-cut diamonds.',
    image: '/images/collection/gemstones.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=900&auto=format&fit=crop',
    gallery: [
      '/images/collection/gemstones.jpg',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    ],
    storyParagraphs: [
      'Each diamond in this extraordinary Riviera necklace is hand-selected and graduated to ensure fluid optical movement and uninterrupted fire around the neckline.',
      'Set in ultra-low-profile 4-prong baskets engineered to maximize light penetration while preventing flipping during wear.',
      'Double-safety concealed lock provides discreet security for peace of mind.',
    ],
  },
];

export const GEMSTONE_PRODUCTS = DIAMOND_PRODUCTS;

export default DIAMOND_PRODUCTS;
