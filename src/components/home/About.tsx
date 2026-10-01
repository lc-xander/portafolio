import { site } from '../../data/site'
import { Container, Section, SectionHeading } from '../layout'
import { Reveal } from '../ui'

export function About() {
  const { heading, paragraphs } = site.about

  return (
    <Section
      id="sobre"
      aria-labelledby="sobre-title"
      className="border-t border-line/40"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <SectionHeading overline="05 — Sobre mí" title={heading} />
          </Reveal>

          <Reveal className="flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-pretty text-base leading-relaxed text-muted"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
