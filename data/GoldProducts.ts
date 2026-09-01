/**
 * 18k Solid Gold Creations Catalog
 */
import { Product } from '@/types/product';

export const GOLD_PRODUCTS: Product[] = [
  {
    id: 'gold-aurora-bangle',
    title: 'Aura Solid Gold Torque Bangle',
    subtitle: '18k Hand-Finished Yellow Gold',
    category: 'gold',
    availabilityStatus: 'Available in Salon',
    statusBadge: 'Atelier Available',
    tagline: 'A sculptural torque bangle in brushed and mirror-polished solid gold.',
    image: '/images/collection/gold-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=900&auto=format&fit=crop',
    gallery: [
      '/images/collection/gold-jewelry.jpg',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    ],
    storyParagraphs: [
      'Sculpted from a single solid ingot of 18-karat recycled yellow gold, the Aura Torque Bangle balances raw architectural weight with ergonomic wrist contouring.',
      'Alternating bands of hand-brushed satin and high-gloss mirror polish catch the ambient light from every angle, punctuated by a discrete diamond signature embedded on the inner rim.',
      'Engineered for a lifetime of daily wear without compromising on haute joaillerie sophistication.',
    ],
  },
  {
    id: 'gold-solis-necklace',
    title: 'Solis Graduated Gold Choker',
    subtitle: '18k Polished Rose & Yellow Gold',
    category: 'gold',
    availabilityStatus: 'Available for Commission',
    statusBadge: 'Signature Piece',
    tagline: 'An architectural choker designed to drape like liquid gold.',
    image: '/images/collection/gold-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=900&auto=format&fit=crop',
    gallery: [
      '/images/collection/gold-jewelry.jpg',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    ],
    storyParagraphs: [
      'The Solis choker is an engineering triumph composed of individually articulated 18k gold segments that flex naturally to the curvature of the collarbone.',
      'Contrasting warm yellow gold with soft rosy undertones, this piece embodies modern luxury that transitions seamlessly from daylight meetings to gala evenings.',
      'Hand-finished with a discreet push-button safety clasp integrated invisibly into the terminal link.',
    ],
  },
  {
    id: 'gold-eternity-signet',
    title: 'Empress Fluted Gold Signet Ring',
    subtitle: '18k Heavyweight Yellow Gold',
    category: 'gold',
    availabilityStatus: 'In Stock',
    statusBadge: 'Atelier Classic',
    tagline: 'A bold, contemporary reinterpretation of the historic royal signet.',
    image: '/images/collection/gold-jewelry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop',
    gallery: [
      '/images/collection/gold-jewelry.jpg',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop',
    ],
    storyParagraphs: [
      'Drawing inspiration from neoclassical architecture, the Empress signet features sculpted lateral fluting and a substantial, reassuring hand weight.',
      'A delicate rim of micropavé diamonds catches light with subtle radiance, framing the polished gold surface ready for bespoke family crest engraving.',
      'Cast solid rather than hollow for unprecedented durability and tactile satisfaction.',
    ],
  },
];

export default GOLD_PRODUCTS;
