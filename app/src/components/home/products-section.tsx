import Link from 'next/link';

import { FeaturedProductsReel } from '@/components/home/featured-products-reel';
import { ProductCard } from '@/components/products/product-card';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { productsByNewest } from '@/data/products';

export function ProductsSection() {
  return (
    <section className="section" id="products">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="現場で磨かれながら進化しているプロダクト"
            description="現場の入力、確認、整理を少しずつ改善してきたプロダクトを、新しい順に紹介します。"
          />
        </Reveal>

        <FeaturedProductsReel products={productsByNewest} />

        <h3 className="products-section__all-title">すべての制作物</h3>
        <div className="products-grid">
          {productsByNewest.map((product, index) => (
            <Reveal key={product.slug} delay={index * 100}>
              <ProductCard product={product} isLatest={index === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="products-section__footer" delay={220}>
          <Link href="/products" className="button button--secondary">
            すべての制作物を見る
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
