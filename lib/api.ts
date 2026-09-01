import { Product } from '@/types/product';
import { PRODUCTS, getProductById } from '@/data/Products';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchProducts(category?: string): Promise<Product[]> {
  try {
    if (!API_BASE) {
      return getLocalProducts(category);
    }

    const endpoint = category && category !== 'all' 
      ? `${API_BASE}/api/products?category=${encodeURIComponent(category)}`
      : `${API_BASE}/api/products`;

    const res = await fetch(endpoint, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`API returned status ${res.status}, falling back to static catalog.`);
      return getLocalProducts(category);
    }

    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : getLocalProducts(category);
  } catch (err) {
    console.warn('Network error reaching backend API, using local product catalog:', err);
    return getLocalProducts(category);
  }
}

export async function fetchProductById(id: string): Promise<Product | undefined> {
  try {
    if (!API_BASE) {
      return getProductById(id);
    }

    const res = await fetch(`${API_BASE}/api/products/${encodeURIComponent(id)}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return getProductById(id);
    }

    const data = await res.json();
    return data || getProductById(id);
  } catch (err) {
    console.warn(`Could not fetch product ${id} from API:`, err);
    return getProductById(id);
  }
}

function getLocalProducts(category?: string): Product[] {
  if (!category || category === 'all') {
    return PRODUCTS;
  }
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
