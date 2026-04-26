import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { productsByNewest } from '@/data/products';

export function HeroSection() {
  const latestProducts = productsByNewest.slice(0, 3);

  return (
    <section className="hero section">
      <Container>
        <div className="hero__layout">
          <div className="hero__content">
            <span className="hero__eyebrow hero-copy">Field Worker / Engineer</span>
            <h1 className="hero__title hero-copy">現場課題を、使える形にする。</h1>
            <p className="hero__description hero-copy">
              現場で詰まりやすい作業を観察し、入力、確認、整理の流れごとアプリに落とし込んでいます。
              単発の作品一覧ではなく、運用しながら磨いているプロダクト群としてまとめています。
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
          <div className="hero__visual card" aria-label="最近つくったプロダクト">
            <div className="hero__visual-header">
              <p className="hero__visual-title">最近つくったもの</p>
              <p className="hero__visual-caption">
                現場から生まれた業務アプリを、新しい順に3件だけ並べています。
              </p>
            </div>

            <div className="hero__visual-grid">
              {latestProducts.map((product, index) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="hero__preview-card">
                  <div className="hero__preview-meta">
                    <span className="hero__preview-category">{product.category}</span>
                    {index === 0 ? <span className="product-badge">NEW</span> : null}
                  </div>
                  <div className="hero__preview-body">
                    <h2>{product.title}</h2>
                    <p>{product.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="#products" className="hero__all-link">
              すべての制作物を見る
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
