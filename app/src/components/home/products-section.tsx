import Link from 'next/link';

import { ProductCard } from '@/components/products/product-card';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { productsByNewest } from '@/data/products';

export function ProductsSection() {
  const latestProducts = productsByNewest.slice(0, 3);

  return (
    <section className="section" id="products">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="現場で磨かれながら進化しているプロダクト"
            description="最新の3件を絞って掲載しています。入力、確認、整理の流れをどう改善したかが伝わるように、現場課題と解決内容が見える形で並べています。"
          />
        </Reveal>

        <div className="products-grid">
          {latestProducts.map((product, index) => (
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
