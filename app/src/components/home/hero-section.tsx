import Link from 'next/link';

import { Container } from '@/components/ui/container';

export function HeroSection() {
  return (
    <section className="hero section">
      <Container>
        <div className="hero__layout">
          <div className="hero__content">
            <span className="hero__eyebrow hero-copy">Business App Portfolio</span>
            <h1 className="hero__title hero-copy">業務改善の視点から、使えるアプリを形にする。</h1>
            <p className="hero__description hero-copy">
              FlutterFlow、Supabase、FileMaker などを活用し、実務に沿ったアプリ開発と業務改善に取り組んでいます。
            </p>
            <div className="button-row hero-copy">
              <Link href="/products" className="button button--primary">
                作品を見る
              </Link>
              <Link href="/#profile" className="button button--secondary">
                プロフィールへ
              </Link>
            </div>
          </div>
          <div className="hero__panel card">
            <div className="hero__panel-grid">
              <div>
                <span>Focus</span>
                <strong>現場で使い続けられる設計</strong>
              </div>
              <div>
                <span>Approach</span>
                <strong>課題整理から実装まで一貫対応</strong>
              </div>
              <div>
                <span>Stack</span>
                <strong>FlutterFlow / Supabase / Next.js</strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
