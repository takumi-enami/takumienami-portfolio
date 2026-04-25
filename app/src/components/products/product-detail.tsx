import Image from 'next/image';

import type { Product } from '@/data/products';

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="product-detail">
      <section className="section product-detail__hero">
        <div className="container">
          <div className="product-detail__hero-grid">
            <div>
              {product.iconImage ? (
                <div className="product-detail__icon">
                  <Image src={product.iconImage} alt={`${product.title} icon`} fill sizes="88px" />
                </div>
              ) : null}
              <span className="product-detail__category">{product.category}</span>
              <h1>{product.title}</h1>
              <p>{product.overview}</p>
              <div className="chip-list">
                {product.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card product-detail__cover">
              <Image src={product.coverImage} alt={product.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section product-detail__body">
        <div className="container">
          <div className="grid-two">
            <article className="card detail-panel">
              <h2>Challenges</h2>
              <ul>
                {product.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="card detail-panel">
              <h2>Solutions</h2>
              <ul>
                {product.solutions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="product-detail__gallery">
            {product.screenshots.map((image, index) => (
              <div key={image} className="card product-detail__shot">
                <Image
                  src={image}
                  alt={`${product.title} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
