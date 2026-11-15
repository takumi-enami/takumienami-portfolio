import Image from 'next/image';

import { SkillChipIcon } from '@/components/home/skill-chip-icon';
import { ProductGallery } from '@/components/products/product-gallery';
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
            <div className="product-detail__intro">
              {product.iconImage ? (
                <div className="product-detail__icon">
                  <Image src={product.iconImage} alt={`${product.title} icon`} fill sizes="88px" />
                </div>
              ) : null}
              <span className="product-detail__category">{product.category}</span>
              {product.status ? <p><span className="product-badge">{product.status}</span></p> : null}
              <h1>{product.title}</h1>
              <p>{product.overview}</p>
              {product.techStack.length ? (
                <div className="chip-list">
                  {product.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      <SkillChipIcon item={tech} />
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
              {product.links?.length ? (
                <div className="product-detail__links">
                  {product.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target={link.url.startsWith('/') ? undefined : '_blank'}
                      rel={link.url.startsWith('/') ? undefined : 'noreferrer'}
                      className="button button--secondary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="card product-detail__cover">
              <Image
                src={product.coverImage}
                alt={product.title}
                fill
                className="product-detail__cover-image"
                style={product.coverImage === product.iconImage ? { objectFit: 'contain' } : undefined}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
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
          {product.device ? (
            <article className="card detail-panel product-device">
              <h2>{product.device.title}</h2>
              <p>{product.device.description}</p>
            </article>
          ) : null}
          <ProductGallery productTitle={product.title} screenshots={product.screenshots} />
        </div>
      </section>
    </div>
  );
}
