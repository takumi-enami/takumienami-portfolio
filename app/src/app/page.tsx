import { ContactSection } from '@/components/home/contact-section';
import { HeroSection } from '@/components/home/hero-section';
import { ProductsSection } from '@/components/home/products-section';
import { ProfileSection } from '@/components/home/profile-section';
import { SkillsSection } from '@/components/home/skills-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
      <ProductsSection />
      <ContactSection />
    </>
  );
}
