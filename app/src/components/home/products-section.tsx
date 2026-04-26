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
            title="現場で磨かれながら育っているプロダクト群"
            description="入力、確認、整理、共有の詰まりを解きほぐしながら、運用の中で更新してきた制作物です。最新のものから触れられるように、横リールと一覧の両方で見られる構成にしています。"
          />
        </Reveal>

        <Reveal delay={100}>
          <FeaturedProductsReel products={productsByNewest} />
        </Reveal>

        <Reveal className="products-section__subhead" delay={160}>
          <div>
            <p className="products-section__eyebrow">All Works</p>
            <h3>すべての制作物</h3>
          </div>
        </Reveal>

        <div className="products-grid">
          {productsByNewest.map((product, index) => (
            <Reveal key={product.slug} delay={index * 80}>
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
