import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { profile } from '@/data/profile';

export function ProfileSection() {
  return (
    <section id="profile" className="section">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Profile" title="現場に合わせて、無理なく使える仕組みを整える。" />
        </Reveal>
        <div className="profile-grid">
          <Reveal className="card profile-card">
            <p className="profile-card__role">{profile.role}</p>
            <p className="profile-card__lead">{profile.lead}</p>
            <div className="chip-list">
              {profile.highlights.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="profile-body" delay={120}>
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="profile-career">
              <h3>{profile.career.heading}</h3>
              <ul>
                {profile.career.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
