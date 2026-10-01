import { featuredProjects } from '../../data/projects'
import { site } from '../../data/site'
import { Container, Section, SectionHeading } from '../layout'
import { Reveal } from '../ui'
import { ProjectCard } from '../project/ProjectCard'

export function Projects() {
  return (
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
  )
}
