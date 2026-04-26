import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
  isLatest?: boolean;
};

export function ProductCard({ product, isLatest = false }: ProductCardProps) {
  return (
    <article className="card product-card">
      <Link href={`/products/${product.slug}`} className="product-card__link">
        <div className="product-card__image">
          <Image src={product.coverImage} alt={product.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
        </div>
        <div className="product-card__body">
          {product.iconImage ? (
            <div className="product-app-icon">
              <Image src={product.iconImage} alt={`${product.title} icon`} fill sizes="72px" />
            </div>
          ) : null}
          <div className="product-card__meta">
            <span className="product-card__category">{product.category}</span>
            {isLatest ? <span className="product-badge">NEW</span> : null}
          </div>
          <h3>{product.title}</h3>
          <p>{product.shortDescription}</p>
          <p className="product-card__problem">解決したこと: {product.problemSolved}</p>
          <span className="product-card__cta">詳細を見る</span>
        </div>
      </Link>
    </article>
  );
}
