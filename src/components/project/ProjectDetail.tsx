import React from 'react'
import type { Project } from '../../types'
import { PROJECT_STATUS_LABEL } from '../../types'
import { site } from '../../data/site'
import { useHashRoute } from '../../lib/useHashRoute'
import { useSeo } from '../../lib/seo'
import { Container } from '../layout'
import { Icon, Pending, StatusChip, Tag } from '../ui'

function Field({
  label,
  value,
}: {
  label: string
  value: string | null | undefined
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="label-mono">{label}</dt>
      <dd className="text-pretty text-sm leading-relaxed text-ink">
        {value ? value : <Pending />}
      </dd>
    </div>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  const { home } = useHashRoute()
  const panelRef = React.useRef<HTMLDivElement>(null)
  const headingRef = React.useRef<HTMLHeadingElement>(null)
  const closeRef = React.useRef<HTMLButtonElement>(null)
  const restoreFocusRef = React.useRef<HTMLElement | null>(null)

  // const isPending = project.status === 'por-documentar'

  useSeo({
    title: project.name,
    description:
      project.summary ?? `Detalles del proyecto ${project.name} de ${site.fullName}.`,
  })

  /* ---------- Esc para cerrar ---------- */
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  /* ---------- Bloqueo de scroll + foco ---------- */
  React.useEffect(() => {
    restoreFocusRef.current = document.activeElement as HTMLElement | null

    const prevOverflow = document.body.style.overflow
    const prevPad = document.body.style.paddingRight
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`

    // El foco va al heading para que un lector de pantalla anuncie el título.
    const id = window.setTimeout(() => headingRef.current?.focus(), 20)

    return () => {
      window.clearTimeout(id)
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPad
      restoreFocusRef.current?.focus?.()
    }
  }, [])

  /* ---------- Trap de foco dentro del panel ---------- */
  function onKeyDownTab(e: React.KeyboardEvent<HTMLDivElement>) {
    const root = panelRef.current
    if (!root) return

    const focusables = root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
    )
    if (focusables.length === 0) return

    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement

    if (e.shiftKey && (active === first || !root.contains(active))) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && active === last) {
      e.preventDefault()
      first.focus()
    }
  }

  function close() {
    home()
  }

  const hasContent =
    project.problem ||
    project.contribution ||
    (project.learnings && project.learnings.length > 0) ||
    (project.sections && project.sections.length > 0)

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onKeyDown={onKeyDownTab}
    >
      {/* Fondo: click para cerrar */}
      <button
        type="button"
        aria-label="Cerrar detalle del proyecto"
        onClick={close}
        className="absolute inset-0 cursor-default bg-bg/80 backdrop-blur-[2px]"
        tabIndex={-1}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative flex h-full w-full max-w-2xl flex-col overflow-y-auto overscroll-contain border-l border-line bg-bg shadow-[-24px_0_60px_-40px_rgba(0,0,0,0.9)]"
      >
        {/* Barra superior fija dentro del panel */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur sm:px-6">
          <span className="label-mono truncate">
            proyecto / {project.slug}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-[6px] border border-line bg-surface px-2.5 py-1.5 text-sm text-muted transition-colors hover:border-line-hi hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Cerrar
            <Icon name="close" className="size-3.5" />
          </button>
        </div>

        <Container className="flex flex-col gap-10 py-10 sm:py-12">
          {/* Encabezado */}
          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <StatusChip status={project.status} />
              {project.meta.map((m) => (
                <span
                  key={m.label}
                  className="label-mono inline-flex items-center rounded-full border border-line bg-surface px-2 py-1.5"
                >
                  {m.label}: {m.value}
                </span>
              ))}
            </div>

            <h1
              id="project-detail-title"
              ref={headingRef}
              tabIndex={-1}
              className="text-balance text-3xl font-medium tracking-[-0.02em] text-ink outline-none sm:text-4xl"
            >
              {project.name}
            </h1>

            {project.summary ? (
              <p className="text-pretty text-base leading-relaxed text-muted">
                {project.summary}
              </p>
            ) : (
              <p className="text-pretty text-base leading-relaxed text-faint">
                Este proyecto todavía no está documentado. Los campos pendientes
                se irán llenando conforme avance.
              </p>
            )}
          </header>

          {/* Links */}
          {project.links.length > 0 ? (
            <nav aria-label="Enlaces del proyecto" className="flex flex-wrap gap-2">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target={l.kind === 'interna' ? undefined : '_blank'}
                  rel={l.kind === 'interna' ? undefined : 'noreferrer noopener'}
                  className="inline-flex items-center gap-1.5 rounded-[8px] border border-line bg-surface px-3.5 py-2 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {l.label}
                  {l.kind !== 'interna' ? (
                    <Icon name="link" className="size-3.5" />
                  ) : null}
                </a>
              ))}
            </nav>
          ) : null}

          {/* Secciones largas */}
          {project.sections?.map((section) => (
            <section key={section.title} className="flex flex-col gap-3">
              <h2 className="text-lg font-medium tracking-tight text-ink">
                {section.title}
              </h2>
              {section.body.map((p, i) => (
                <p key={i} className="text-pretty text-sm leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              {section.items && section.items.length > 0 ? (
                <ul className="mt-1 flex flex-col gap-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-pretty text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-faint" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {/* Problema / Aporte / Aprendizaje */}
          <div className="grid gap-8 sm:grid-cols-2">
            <Field label="Qué problema resuelve" value={project.problem} />
            <Field label="Qué hice" value={project.contribution} />
          </div>

          {project.learnings && project.learnings.length > 0 ? (
            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium tracking-tight text-ink">
                Qué aprendí
              </h2>
              <ul className="flex flex-col gap-2">
                {project.learnings.map((l, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-pretty text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" aria-hidden />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium tracking-tight text-ink">
                Qué aprendí
              </h2>
              <Pending text="Pendiente" />
            </section>
          )}

          {/* Stack */}
          {project.stack.length > 0 ? (
            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium tracking-tight text-ink">Stack</h2>
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Screenshots */}
          {project.screenshots.length > 0 ? (
            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-medium tracking-tight text-ink">
                Capturas
              </h2>
              {project.screenshots.map((shot, i) => (
                <figure key={i} className="flex flex-col gap-2">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-[8px] border border-line bg-surface"
                  />
                  {shot.caption ? (
                    <figcaption className="text-xs text-faint">
                      {shot.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </section>
          ) : null}

          {/* Estado vacío */}
          {!hasContent && project.stack.length === 0 ? (
            <p className="rounded-[8px] border border-line bg-surface/60 px-4 py-3 text-sm text-faint">
              Almosto no hay nada escrito de este proyecto todavía. Es
              intencional: prefiero dejarlo vacío a llenarlo de suposiciones.
            </p>
          ) : null}

          <div className="flex items-center gap-2 pt-2">
            <Pending text={`estado: ${PROJECT_STATUS_LABEL[project.status]}`} />
          </div>
        </Container>
      </div>
    </div>
  )
}
