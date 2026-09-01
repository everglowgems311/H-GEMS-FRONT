export type ProductCategory = 'gold' | 'silver' | 'gemstone' | 'diamond' | 'all';

export interface Product {
  id: string;
  _id?: string;
  title: string;
  name?: string;
  subtitle?: string;
  material?: string;
  category: string;
  availabilityStatus?: string;
  statusBadge?: string;
  badge?: string;
  tagline?: string;
  description?: string;
  image: string;
  fallbackImage?: string;
  gallery?: string[];
  storyParagraphs?: string[];
  price?: number | string;
  createdAt?: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  path: string;
}
