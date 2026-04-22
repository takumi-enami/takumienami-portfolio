import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui/container';

const appPreviews = [
  {
    src: '/images/sample-record-screen-1.svg',
    alt: '作業記録アプリの画面',
    title: '作業記録アプリ',
    point: '現場入力を最短動線で設計',
  },
  {
    src: '/images/building-material-screen-1.svg',
    alt: '資材管理アプリの画面',
    title: '資材管理アプリ',
    point: '在庫と持ち出し状況を即時共有',
  },
  {
    src: '/images/label-print-screen-1.svg',
    alt: 'ラベル印刷アプリの画面',
    title: 'ラベル印刷アプリ',
    point: '手作業を減らす現場運用フロー',
  },
];

export function HeroSection() {
  return (
    <section className="hero section">
      <Container>
        <div className="hero__layout">
          <div className="hero__content">
            <span className="hero__eyebrow hero-copy">Field Worker / Engineer</span>
            <h1 className="hero__title hero-copy">現場作業者 × エンジニアの二刀流</h1>
            <p className="hero__description hero-copy">
              現場で働きながら、課題を自らアプリとして解決しています。
              使う側と作る側の両方を担い、運用に耐える業務アプリを実装します。
            </p>
            <div className="button-row hero-copy hero__cta-row">
              <Link href="/products" className="button button--primary">
                制作物を見る
              </Link>
              <Link href="https://github.com/takumienami" className="button button--secondary" target="_blank" rel="noreferrer">
                GitHubを見る
              </Link>
            </div>
          </div>
          <div className="hero__visual card" aria-label="業務アプリ画面プレビュー">
            <p className="hero__visual-title">現場から生まれた業務アプリ</p>
            <div className="hero__visual-grid">
              {appPreviews.map((preview) => (
                <article key={preview.title} className="hero__preview-card">
                  <div className="hero__preview-image">
                    <Image src={preview.src} alt={preview.alt} fill sizes="(max-width: 960px) 100vw, 280px" />
                  </div>
                  <div className="hero__preview-body">
                    <h2>{preview.title}</h2>
                    <p>{preview.point}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
