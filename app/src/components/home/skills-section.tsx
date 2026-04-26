import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SkillChipIcon } from '@/components/home/skill-chip-icon';
import { skillCategories, skillLead, skillNote } from '@/data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="必要な技術を、目的に合わせて静かに組み合わせる。"
            description={skillLead}
          />
        </Reveal>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              className={`card skill-card${category.centerItems ? ' skill-card--centered' : ''}`}
              delay={index * 90}
            >
              <p className="skill-card__title">{category.title}</p>
              <p className="skill-card__description">{category.description}</p>
              <div className="chip-list">
                {category.items.map((item) => (
                  <span key={item} className="chip">
                    <SkillChipIcon item={item} />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="skills-note" delay={180}>
          <p>{skillNote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
