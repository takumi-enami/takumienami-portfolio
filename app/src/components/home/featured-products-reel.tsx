'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type PointerEvent } from 'react';

import type { Product } from '@/data/products';

type FeaturedProductsReelProps = {
  products: Product[];
};

export function FeaturedProductsReel({ products }: FeaturedProductsReelProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const dragStateRef = useRef({
    active: false,
    pointerId: -1,
    moved: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const updateActiveIndex = () => {
      const railRect = rail.getBoundingClientRect();
      const railCenter = railRect.left + railRect.width / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - railCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex(nearestIndex);
    };

    updateActiveIndex();

    rail.addEventListener('scroll', updateActiveIndex, { passive: true });
    window.addEventListener('resize', updateActiveIndex);

    return () => {
      rail.removeEventListener('scroll', updateActiveIndex);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, [products.length]);

  const scrollToIndex = (index: number) => {
    const rail = railRef.current;
    const card = cardRefs.current[index];

    if (!rail || !card) {
      return;
    }

    const left = card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2;

    rail.scrollTo({
      left,
      behavior: 'smooth',
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    dragStateRef.current = {
      active: true,
      pointerId: event.pointerId,
      moved: false,
      startX: event.clientX,
      startScrollLeft: rail.scrollLeft,
    };

    setIsDragging(true);
    rail.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    const dragState = dragStateRef.current;

    if (!rail || !dragState.active) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    dragStateRef.current.moved = dragStateRef.current.moved || Math.abs(deltaX) > 6;
    rail.scrollLeft = dragState.startScrollLeft - deltaX;
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    const dragState = dragStateRef.current;

    if (!rail || !dragState.active) {
      return;
    }

    if (rail.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }

    dragStateRef.current = {
      active: false,
      pointerId: -1,
      moved: false,
      startX: 0,
      startScrollLeft: 0,
    };
    setIsDragging(false);
  };

  return (
    <div className="products-reel">
      <div className="products-reel__header">
        <div>
          <p className="products-reel__eyebrow">Featured Flow</p>
          <h3>最新プロダクトから全体像へ</h3>
        </div>
        <div className="products-reel__actions" aria-label="制作物の移動">
          <button
            type="button"
            className="product-gallery__nav"
            onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
            aria-label="前の制作物を見る"
          >
            ←
          </button>
          <button
            type="button"
            className="product-gallery__nav"
            onClick={() => scrollToIndex(Math.min(activeIndex + 1, products.length - 1))}
            aria-label="次の制作物を見る"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className={`products-reel__rail${isDragging ? ' is-dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        {products.map((product, index) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className={`products-reel__card${index === activeIndex ? ' is-active' : ''}`}
            aria-label={`${product.title} の詳細を見る`}
            onClick={(event) => {
              if (dragStateRef.current.moved) {
                event.preventDefault();
              }
            }}
          >
            <div className="products-reel__image">
              <Image
                src={product.coverImage}
                alt={product.title}
                fill
                sizes="(max-width: 900px) 80vw, 420px"
              />
            </div>
            <div className="products-reel__body">
              <div className="products-reel__meta">
                <span className="product-card__category">{product.category}</span>
                {index === 0 ? <span className="product-badge">NEW</span> : null}
              </div>
              <h4>{product.title}</h4>
              <p>{product.shortDescription}</p>
              <p className="products-reel__problem">解決したこと: {product.problemSolved}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
