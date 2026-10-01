import { contact, site } from '../../data/site'
import { Container, Section, SectionHeading } from '../layout'
import { Icon, Pending, Reveal } from '../ui'

function ContactItem({
  link,
}: {
  link: (typeof contact)[number]
}) {
  const available = link.href !== null

  return (
    <li>
      {available ? (
        <a
          href={link.href!}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noreferrer noopener' : undefined}
          className="group/card card-rule flex items-center gap-4 rounded-[8px] border border-line bg-surface/80 px-5 py-5 transition-colors hover:border-line-hi focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span className="card-rule-after pointer-events-none" aria-hidden />
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-line bg-bg-soft text-muted transition-colors group-hover/card:text-accent">
            <Icon name={link.icon} className="size-4.5" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="text-base font-medium text-ink">{link.label}</span>
            <span className="text-sm text-muted">{link.hint}</span>
          </span>
          <Icon
            name="arrow"
            className="size-4 shrink-0 text-faint transition-transform group-hover/card:translate-x-0.5 group-hover/card:text-accent motion-reduce:transition-none"
          />
        </a>
      ) : (
        <div className="flex items-center gap-4 rounded-[8px] border border-dashed border-line bg-surface/40 px-5 py-5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-line bg-bg-soft text-faint">
            <Icon name={link.icon} className="size-4.5" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="flex flex-wrap items-center gap-2">
              <span className="text-base font-medium text-muted">
                {link.label}
              </span>
              <Pending />
            </span>
            <span className="text-sm text-faint">{link.hint}</span>
          </span>
        </div>
      )}
    </li>
  )
}

export function Contact() {
  const available = contact.filter((c) => c.href !== null)
  const pending = contact.filter((c) => c.href === null)

  return (
    <Section
      id="contacto"
      aria-labelledby="contacto-title"
      className="border-t border-line/40"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <SectionHeading overline="06 — Contacto" title="Escríbeme" />
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-6">
              <p className="text-pretty text-base leading-relaxed text-muted">
                Si quieres hablar de un proyecto, una idea o un problema de
                matemáticas, escríbeme. También acepto que me muestres algo que
                estés construyendo.
              </p>

              <ul className="flex flex-col gap-3">
                {available.map((c) => (
                  <ContactItem key={c.id} link={c} />
                ))}
              </ul>

              {pending.length > 0 ? (
                <Reveal>
                  <div className="flex flex-col gap-3">
                    <p className="label-mono">Aún sin configurar</p>
                    <ul className="flex flex-col gap-3">
                      {pending.map((c) => (
                        <ContactItem key={c.id} link={c} />
                      ))}
                    </ul>
                    <p className="text-xs text-faint">
                      Estos datos todavía no se han añadido. Se habilitan al
                      escribirlos en <span className="font-mono">src/data/site.ts</span>.
                    </p>
                  </div>
                </Reveal>
              ) : null}

              <p className="text-xs text-faint">
                {site.shortName} · {site.location}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
