import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
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
          <span className="product-card__category">{product.category}</span>
          <h3>{product.title}</h3>
          <p>{product.shortDescription}</p>
          <span className="product-card__cta">詳細を見る</span>
        </div>
      </Link>
    </article>
  );
}
