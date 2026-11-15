import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import documents from '@/data/e-meterlink-legal.json';

type DocumentSlug = keyof typeof documents;
type PageProps = { params: Promise<{ document: string }> };

function isDocumentSlug(value: string): value is DocumentSlug {
  return Object.prototype.hasOwnProperty.call(documents, value);
}

export function generateStaticParams() {
  return Object.keys(documents).map((document) => ({ document }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { document } = await params;
  if (!isDocumentSlug(document)) return {};
  return { title: `${documents[document].split('\n')[0].replace(/^# /, '')} | Takumi Enami Portfolio` };
}

export default async function LegalPage({ params }: PageProps) {
  const { document } = await params;
  if (!isDocumentSlug(document)) notFound();

  const blocks = documents[document].trim().split(/\n\s*\n/);

  return (
    <section className="section">
      <div className="container legal-document">
        <Link href="/products/e-meterlink" className="button button--secondary">← E-MeterLinkに戻る</Link>
        <p className="legal-document__notice">開発中のアプリに関する文書です。制定日は公開時に確定予定です。</p>
        <article>
          {blocks.map((block, index) => {
            if (block.startsWith('# ')) return <h1 key={index}>{block.slice(2)}</h1>;
            if (block.startsWith('## ')) return <h2 key={index}>{block.slice(3)}</h2>;
            if (/^\d+\. /.test(block)) {
              return <ol key={index}>{block.split('\n').map((item) => <li key={item}>{item.replace(/^\d+\. /, '')}</li>)}</ol>;
            }
            if (block.includes('https://takumienami.com/')) {
              return <p key={index}>Webサイト：<a href="https://takumienami.com/">https://takumienami.com/</a></p>;
            }
            return <p key={index}>{block}</p>;
          })}
        </article>
        <Link href="/#contact" className="button button--secondary">Contactフォームへ</Link>
      </div>
    </section>
  );
}
