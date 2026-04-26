import Image from 'next/image';
import Link from 'next/link';

import { featuredProducts } from '@/data/products';
import { Container } from '@/components/ui/container';

export function HeroSection() {
  return (
    <section className="hero section">
      <Container>
        <div className="hero__layout">
          <div className="hero__content">
            <span className="hero__eyebrow hero-copy">Field Worker / Engineer</span>
            <h1 className="hero__title hero-copy">現場作業者×エンジニアの二刀流</h1>
            <p className="hero__description hero-copy">
              現場で働きながら、課題を自らアプリとして解決しています。使う側と作る側の両方を担い、
              運用に耐える業務アプリを実装します。
            </p>
            <div className="button-row hero-copy hero__cta-row">
              <Link href="/products" className="button button--primary">
                制作物を見る
              </Link>
              <Link
                href="https://github.com/takumienami"
                className="button button--secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHubを見る
              </Link>
            </div>
          </div>
          <div className="hero__visual card" aria-label="業務アプリのプレビュー">
            <p className="hero__visual-title">現場から生まれた業務アプリ</p>
            <div className="hero__visual-grid">
              {featuredProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="hero__preview-card">
                  <div className="hero__preview-image">
                    <Image
                      src={product.coverImage}
                      alt={product.title}
                      fill
                      sizes="(max-width: 960px) 100vw, 280px"
                    />
                  </div>
                  <div className="hero__preview-body">
                    <h2>{product.title}</h2>
                    <p>{product.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
