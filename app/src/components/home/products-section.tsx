import Link from 'next/link';

import { ProductCard } from '@/components/products/product-card';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { featuredProducts } from '@/data/products';

export function ProductsSection() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="課題の整理から設計、実装まで一貫して取り組んだ実績。"
            description="これまでに制作したアプリや改善ツールの一部を紹介します。課題の整理から設計、実装まで一貫して取り組んだものを中心に掲載しています。"
          />
        </Reveal>
        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <Reveal className="products-section__footer" delay={220}>
          <Link href="/products" className="button button--secondary">
            一覧ページへ
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
