/**
 * 925 Sterling Silver Creations Catalog
 */
import { Product } from '@/types/product';

export const SILVER_PRODUCTS: Product[] = [
  {
    id: 'silver-lunar-cuff',
    title: 'Lunar Sculpted Silver Cuff',
    subtitle: '925 Sterling Silver & Rhodium Shield',
    category: 'silver',
    availabilityStatus: 'Available',
    statusBadge: 'Atelier Highlight',
    tagline: 'Hand-forged sterling silver radiating deep, cool celestial luster.',
    image: '/images/collection/silver-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop',
    gallery: [
      '/images/collection/silver-jewelry.jpg',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    ],
    storyParagraphs: [
      'Hand-hammered by our silver artisans, the Lunar Cuff combines organic texture with razor-sharp modernist edges.',
      'A multi-micron rhodium shield protects the pure 925 sterling silver against oxidation, ensuring the piece maintains its platinum-white glow for years.',
      'An effortless everyday statement that layers effortlessly with gold or platinum pieces.',
    ],
  },
  {
    id: 'silver-arch-ring',
    title: 'Monolith Geometric Dome Ring',
    subtitle: 'Mirror-Polished 925 Sterling Silver',
    category: 'silver',
    availabilityStatus: 'Available',
    statusBadge: 'Sculptural Design',
    tagline: 'A striking minimalist dome ring with ergonomic tapered comfort.',
    image: '/images/collection/silver-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop',
    gallery: [
      '/images/collection/silver-jewelry.jpg',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    ],
    storyParagraphs: [
      'The Monolith dome ring reflects pure architectural minimalism, creating an uninterrupted surface of mirror-polished sterling silver.',
      'Tapered smoothly underneath the finger to ensure maximum comfort while commanding a bold presence from the top view.',
      'Finished with anti-tarnish noble rhodium for enduring brilliance.',
    ],
  },
];

export default SILVER_PRODUCTS;
