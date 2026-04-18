import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductDetail } from '@/components/products/product-detail';
import { getProductBySlug, products } from '@/data/products';

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Takumi Enami Portfolio',
    };
  }

  return {
    title: `${product.title} | Takumi Enami Portfolio`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
