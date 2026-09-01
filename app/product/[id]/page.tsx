'use client';

import React from 'react';
import ProductDetailPage from '@/app/products/[id]/page';

export default function LegacyProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ProductDetailPage params={params} />;
}
