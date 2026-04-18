import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__inner">
          <p>Business-focused portfolio built with Next.js and prepared for Cloudflare Pages.</p>
          <p>© {new Date().getFullYear()} Takumi Enami</p>
        </div>
      </Container>
    </footer>
  );
}
