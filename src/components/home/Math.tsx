import { mathItems } from '../../data/math'
import { Container, Section, SectionHeading } from '../layout'
import { Reveal } from '../ui'

export function Math() {
  return (
    <Section
      id="matematicas"
      aria-labelledby="matematicas-title"
      className="border-t border-line/40"
    >
      <Container>
        <Reveal>
          <SectionHeading
            overline="04 — Matemáticas"
            title="Lo que he demostrado"
            lead="Las matemáticas siempre han sido parte de esto. Esta es la parte que se puede medir."
          />
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {mathItems.map((m) => (
            <Reveal as="li" key={m.id}>
              <div className="card-rule relative flex h-full flex-col gap-3 rounded-[8px] border border-line bg-surface/80 px-5 py-5">
                <span className="card-rule-after pointer-events-none" aria-hidden />
                <p className="label-mono">{m.place}</p>
                <h3 className="text-pretty text-lg font-medium leading-snug tracking-tight text-ink">
                  {m.title}
                </h3>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                  {m.context ? (
                    <span className="label-mono rounded-full border border-line bg-bg-soft px-2 py-1.5">
                      {m.context}
                    </span>
                  ) : null}
                  {m.period ? (
                    <span className="label-mono rounded-full border border-line bg-bg-soft px-2 py-1.5">
                      {m.period}
                    </span>
                  ) : null}
                </div>
                {m.note ? (
                  <p className="text-pretty text-xs leading-relaxed text-faint">
                    {m.note}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-muted">
            Me interesan sobre todo la resolución de problemas y las
            matemáticas aplicadas a la programación: entender el algoritmo,
            por qué funciona y qué pasa en los casos que nadie menciona.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
