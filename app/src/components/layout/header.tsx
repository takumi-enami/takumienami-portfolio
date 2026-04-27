import Link from 'next/link';

import { Container } from '@/components/ui/container';

const navItems = [
  { href: '/#profile', label: 'Profile' },
  { href: '/#skills', label: 'Skills' },
  { href: '/products', label: 'Products' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link href="/" className="site-header__brand">
            Takumi Enami
          </Link>
          <nav className="site-header__nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
