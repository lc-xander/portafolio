import { sortedLearning } from '../../data/learning'
import { Container, Section, SectionHeading } from '../layout'
import { LearningStatusChip, Reveal, Tag } from '../ui'

export function Learning() {
  return (
    <Section id="aprendiendo" aria-labelledby="aprendiendo-title">
      <Container>
        <Reveal>
          <SectionHeading
            overline="03 — Actualmente aprendiendo"
            title="En qué estoy ahora"
            lead="Lo que estoy estudiando en este momento. Sin barras de progreso ni niveles: solo qué es y en qué punto está."
          />
        </Reveal>

        <ul className="flex flex-col divide-y divide-line/70 border-y border-line/70">
          {sortedLearning.map((item) => (
            <Reveal as="li" key={item.id} className="py-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
                <div className="flex flex-col gap-2 md:min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base font-medium tracking-tight text-ink">
                      {item.title}
                    </h3>
                    {item.tag ? <Tag>{item.tag}</Tag> : null}
                  </div>
                  <p className="text-pretty text-sm leading-relaxed text-muted">
                    {item.note}
                  </p>
                  <p className="text-xs text-faint">
                    Fuente: <span className="font-mono">{item.source}</span>
                  </p>
                </div>
                <div className="shrink-0 md:pt-0.5">
                  <LearningStatusChip status={item.status} />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-6 text-xs text-faint">
            Esta lista se actualiza conforme cambian mis prioridades. Las
            certificaciones aparecen solo cuando están terminadas.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
