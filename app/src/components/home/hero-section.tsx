import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { latestProductSlug, productsByNewest } from '@/data/products';

export function HeroSection() {
  const [latestProduct, ...otherProducts] = productsByNewest;

  return (
    <section className="hero section">
      <Container>
        <div className="hero__layout">
          <div className="hero__content">
            <span className="hero__eyebrow hero-copy">Field Worker / Engineer</span>
            <h1 className="hero__title hero-copy">現場課題を、使える形にする。</h1>
            <p className="hero__description hero-copy">
              現場で詰まりやすい作業を観察し、入力、確認、整理の流れごとアプリに落とし込んでいます。
              単発の作品ではなく、運用しながら磨いているプロダクト群としてまとめています。
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
              <p className="hero__visual-caption">現場から生まれた業務アプリを、新しい順に並べています。</p>
            </div>

            {latestProduct ? (
              <Link href={`/products/${latestProduct.slug}`} className="hero__lead-card">
                <div className="hero__lead-image">
                  <Image
                    src={latestProduct.coverImage}
                    alt={latestProduct.title}
                    fill
                    sizes="(max-width: 960px) 100vw, 420px"
                  />
                </div>
                <div className="hero__lead-body">
                  <div className="hero__preview-meta">
                    <span className="hero__preview-category">{latestProduct.category}</span>
                    {latestProduct.slug === latestProductSlug ? <span className="product-badge">NEW</span> : null}
                  </div>
                  <h2>{latestProduct.title}</h2>
                  <p>{latestProduct.shortDescription}</p>
                </div>
              </Link>
            ) : null}

            <div className="hero__visual-grid">
              {otherProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="hero__preview-card">
                  <div className="hero__preview-image">
                    <Image
                      src={product.coverImage}
                      alt={product.title}
                      fill
                      sizes="(max-width: 960px) 100vw, 220px"
                    />
                  </div>
                  <div className="hero__preview-body">
                    <span className="hero__preview-category">{product.category}</span>
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
