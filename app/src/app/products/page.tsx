import type { Metadata } from 'next';

import { ProductCard } from '@/components/products/product-card';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products | Takumi Enami Portfolio',
  description: '制作した業務支援アプリや改善ツールの一覧です。',
};

export default function ProductsPage() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="制作したプロダクト一覧"
            description="実務フローの改善や管理業務の効率化を目的に設計したアプリをまとめています。"
          />
        </Reveal>
        <div className="products-grid">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
