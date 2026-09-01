import React from 'react';
import ProductGrid from '../products/ProductGrid';

export default function FeaturedProducts() {
  return (
    <ProductGrid
      category="all"
      title="Master Atelier Selections"
      subtitle="Selected one-of-a-kind jewelry creations currently available for private salon viewing."
      showFilters={true}
    />
  );
}
