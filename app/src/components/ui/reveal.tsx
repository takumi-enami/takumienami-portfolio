'use client';

import { useEffect, useRef, useState, type PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
