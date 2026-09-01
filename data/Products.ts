/**
 * Curated Luxury Jewelry Catalog
 * Aggregates Gold, Silver, and Diamond / Gemstone collections.
 */
import { Product } from '@/types/product';
import { GOLD_PRODUCTS } from './GoldProducts';
import { SILVER_PRODUCTS } from './SilverProducts';
import { DIAMOND_PRODUCTS, GEMSTONE_PRODUCTS } from './DiamondProducts';

export { GOLD_PRODUCTS } from './GoldProducts';
export { SILVER_PRODUCTS } from './SilverProducts';
export { DIAMOND_PRODUCTS, GEMSTONE_PRODUCTS } from './DiamondProducts';

export const PRODUCTS: Product[] = [
  ...DIAMOND_PRODUCTS,
  ...GOLD_PRODUCTS,
  ...SILVER_PRODUCTS,
];

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
};

export const getProductsByCategory = (cat?: string): Product[] => {
  if (!cat || cat === 'all') return PRODUCTS;
  if (cat === 'diamond' || cat === 'gemstones' || cat === 'gemstone') {
    return DIAMOND_PRODUCTS;
  }
  if (cat === 'gold') {
    return GOLD_PRODUCTS;
  }
  if (cat === 'silver') {
    return SILVER_PRODUCTS;
  }
  return PRODUCTS.filter((p) => p.category === cat);
};

export default PRODUCTS;
