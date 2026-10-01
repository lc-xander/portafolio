import { featuredProjects } from '../../data/projects'
import { sortedExperiments } from '../../data/experiments'
import { site } from '../../data/site'
import { Container, Section, SectionHeading } from '../layout'
import { Reveal } from '../ui'
import { ProjectCard } from '../project/ProjectCard'

export function Projects() {
  return (
    <>
      <Section id="proyectos" aria-labelledby="proyectos-title">
        <Container>
          <Reveal>
            <SectionHeading
              overline="01 — Proyectos"
              title="Lo que he construido"
              lead={site.projectsCallout}
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {featuredProjects.map((p) => (
              <Reveal key={p.slug} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id="experimentos"
        aria-labelledby="experimentos-title"
        className="border-t border-line/40"
      >
        <Container>
          <Reveal>
            <SectionHeading
              overline="02 — Experimentos"
              title="Experimentos y scripts"
              lead="Pruebas pequeñas, scripts sueltos y cosas que hice para ver si funcionaban. No todos llegan a ser proyectos."
            />
          </Reveal>

          {sortedExperiments.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sortedExperiments.map((p) => (
                <Reveal key={p.slug} className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="rounded-[8px] border border-dashed border-line bg-surface/40 px-5 py-10 text-center">
                <p className="text-sm text-muted">
                  Aún no hay experimentos publicados.
                </p>
                <p className="mt-1 text-xs text-faint">
                  Esta sección se llena sola cuando agregues el primer
                  experimento.
                </p>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>
    </>
  )
}
