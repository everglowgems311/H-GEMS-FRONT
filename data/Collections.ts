import { CollectionItem } from '@/types/product';

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'silver-jewelry',
    title: 'Silver Jewelry',
    subtitle: '925 Sterling & Rhodium Finish',
    description: 'Timeless sterling silver creations with contemporary grace.',
    image: '/images/collection/silver-jewelry.jpg',
    category: 'silver',
    path: '/silver',
  },
  {
    id: 'gold-jewelry',
    title: 'Gold Jewelry',
    subtitle: '18k Solid Gold & Warm Radiance',
    description: 'Exquisite 18k yellow, white, and rose gold masterworks.',
    image: '/images/collection/gold-jewelry.jpg',
    category: 'gold',
    path: '/gold',
  },
  {
    id: 'gemstones',
    title: 'Rare Gemstones & Diamonds',
    subtitle: 'Certified Diamonds & Colored Gems',
    description: 'Brilliant diamonds, sapphires, emeralds, and natural gems.',
    image: '/images/collection/gemstones.jpg',
    category: 'gemstone',
    path: '/gemstones',
  },
];
