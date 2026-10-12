import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { productsByNewest } from '@/data/products';

export function HeroSection() {
  return (
    <section className="hero section">
      <Container>
        <div className="hero__layout">
          <div className="hero__content">
            <span className="hero__eyebrow hero-copy">Field Worker / Engineer</span>
            <h1 className="hero__title hero-copy"><span>現場課題を、</span><span>使える形にする。</span></h1>
            <p className="hero__description hero-copy">
              現場で詰まりやすい作業を観察し、入力、確認、整理の流れごとアプリに落とし込んでいます。
              単発の作品一覧ではなく、運用しながら磨いているプロダクト群としてまとめています。
            </p>
            <div className="button-row hero-copy hero__cta-row">
              <Link href="/products" className="button button--primary">
                制作物を見る
              </Link>
            </div>
          </div>
          <div className="hero__visual card" aria-label="最近つくったプロダクト">
            <div className="hero__visual-header">
              <p className="hero__visual-title">最近つくったもの</p>
              <p className="hero__visual-caption">
                現場の困りごとから生まれたプロダクトを、新しい順に紹介します。
              </p>
            </div>

            <div className="hero__visual-grid">
              {productsByNewest.map((product, index) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className={`hero__preview-card${index === 0 ? ' hero__preview-card--latest' : ''}`}>
                  <div className="hero__preview-image">
                    <Image src={product.coverImage} alt="" fill sizes="(max-width: 640px) 88px, 112px" />
                  </div>
                  <div className="hero__preview-body">
                    <div className="hero__preview-meta">
                      <span className="hero__preview-category">{product.category}</span>
                      {index === 0 ? <span className="product-badge">NEW</span> : null}
                    </div>
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
