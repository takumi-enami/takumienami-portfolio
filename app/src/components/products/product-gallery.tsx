'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import type { ProductScreenshot } from '@/data/products';

type ProductGalleryProps = {
  productTitle: string;
  screenshots: ProductScreenshot[];
};

type GalleryTab = 'pc' | 'mobile';

const TAB_LABELS: Record<GalleryTab, string> = {
  pc: 'PC',
  mobile: 'Mobile',
};

export function ProductGallery({ productTitle, screenshots }: ProductGalleryProps) {
  const hasPortrait = screenshots.some((image) => image.orientation === 'portrait');
  const [activeTab, setActiveTab] = useState<GalleryTab>(hasPortrait ? 'pc' : 'pc');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const tabbedImages = useMemo(
    () => ({
      pc: screenshots.filter((image) => image.orientation === 'landscape'),
      mobile: screenshots.filter((image) => image.orientation === 'portrait'),
    }),
    [screenshots],
  );

  const availableTabs = (Object.keys(tabbedImages) as GalleryTab[]).filter((tab) => tabbedImages[tab].length > 0);
  const currentImages = tabbedImages[activeTab].length > 0 ? tabbedImages[activeTab] : tabbedImages[availableTabs[0]];
  const clampedIndex = Math.min(activeIndex, Math.max(currentImages.length - 1, 0));
  const activeImage = currentImages[clampedIndex];

  useEffect(() => {
    if (tabbedImages[activeTab].length === 0 && availableTabs[0]) {
      setActiveTab(availableTabs[0]);
      setActiveIndex(0);
    }
  }, [activeTab, availableTabs, tabbedImages]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % currentImages.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + currentImages.length) % currentImages.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [currentImages.length, isLightboxOpen]);

  if (!activeImage) {
    return null;
  }

  const moveToPrevious = () => {
    setActiveIndex((current) => (current - 1 + currentImages.length) % currentImages.length);
  };

  const moveToNext = () => {
    setActiveIndex((current) => (current + 1) % currentImages.length);
  };

  return (
    <>
      <section className="product-gallery">
        <div className="product-gallery__header">
          <div>
            <h2>操作画面</h2>
          </div>
          <div className="product-gallery__actions">
            <button type="button" className="product-gallery__nav" onClick={moveToPrevious} aria-label="Previous image">
              ←
            </button>
            <button type="button" className="product-gallery__nav" onClick={moveToNext} aria-label="Next image">
              →
            </button>
          </div>
        </div>

        {availableTabs.length > 1 ? (
          <div className="product-gallery__tabs" role="tablist" aria-label={`${productTitle} gallery tabs`}>
            {availableTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                className={`product-gallery__tab${tab === activeTab ? ' product-gallery__tab--active' : ''}`}
                aria-selected={tab === activeTab}
                onClick={() => setActiveTab(tab)}
              >
                {TAB_LABELS[tab]}
              </button>
            ))}
          </div>
        ) : null}

        <button
          type="button"
          className={`card product-gallery__stage product-gallery__stage--${activeImage.orientation}`}
          onClick={() => setIsLightboxOpen(true)}
          aria-label={`Open ${productTitle} image`}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="product-gallery__stage-image"
            sizes="(max-width: 900px) 100vw, 72vw"
          />
          <span className="product-gallery__hint">Click to focus</span>
        </button>

        <div className="product-gallery__rail" role="list" aria-label={`${productTitle} screenshots`}>
          {currentImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="listitem"
              className={`product-gallery__thumb${
                index === clampedIndex ? ' product-gallery__thumb--active' : ''
              } product-gallery__thumb--${image.orientation}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`${productTitle} screenshot ${index + 1}`}
              aria-pressed={index === clampedIndex}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="product-gallery__thumb-image"
                sizes="(max-width: 900px) 40vw, 220px"
              />
            </button>
          ))}
        </div>
      </section>

      {isLightboxOpen ? (
        <div className="product-lightbox" role="dialog" aria-modal="true" aria-label={`${productTitle} image viewer`}>
          <button
            type="button"
            className="product-lightbox__backdrop"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close expanded image"
          />
          <div className="product-lightbox__panel">
            <div className="product-lightbox__topbar">
              <p>{activeImage.alt}</p>
              <button type="button" className="product-lightbox__close" onClick={() => setIsLightboxOpen(false)}>
                Close
              </button>
            </div>
            <div className={`product-lightbox__frame product-lightbox__frame--${activeImage.orientation}`}>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="product-lightbox__image"
                sizes="90vw"
              />
            </div>
            <div className="product-lightbox__controls">
              <button type="button" className="product-gallery__nav" onClick={moveToPrevious} aria-label="Previous image">
                ←
              </button>
              <span>
                {clampedIndex + 1} / {currentImages.length}
              </span>
              <button type="button" className="product-gallery__nav" onClick={moveToNext} aria-label="Next image">
                →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
