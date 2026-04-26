import type { Metadata } from 'next';

import { ProductCard } from '@/components/products/product-card';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { productsByNewest } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products | Takumi Enami Portfolio',
  description: '現場で使いながら育ててきた業務アプリと制作物の一覧です。',
};

export default function ProductsPage() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="制作物の一覧"
            description="入力、確認、整理の流れに手を入れながら更新してきたプロダクトを、新しい順にまとめています。"
          />
        </Reveal>
        <div className="products-grid">
          {productsByNewest.map((product, index) => (
            <Reveal key={product.slug} delay={index * 80}>
              <ProductCard product={product} isLatest={index === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
