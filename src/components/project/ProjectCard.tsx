import type { Project } from '../../types'
import { Card, Icon, Pending, Reveal, StatusChip, Tag } from '../ui'

export function ProjectCard({ project }: { project: Project }) {
  const isPending = project.status === 'por-documentar'

  return (
    <Card as="article" className="gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-medium tracking-tight text-ink">
            {project.name}
          </h3>
          <div className="flex items-center gap-2">
            <StatusChip status={project.status} />
          </div>
        </div>
        <span className="label-mono pt-1">{String(project.order).padStart(2, '0')}</span>
      </div>

      {project.summary ? (
        <p className="text-pretty text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
      ) : (
        <p className="text-pretty text-sm leading-relaxed text-faint">
          Descripción pendiente de documentar.
        </p>
      )}

      {project.stack.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex items-center justify-between gap-4 pt-2">
        {isPending ? (
          <Pending text="Detalles pendientes" />
        ) : (
          <a
            href={`#proyecto/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 rounded-[4px] text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Ver detalle
            <Icon
              name="arrow"
              className="size-3.5 transition-transform group-hover/link:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0"
            />
          </a>
        )}
      </div>
    </Card>
  )
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {projects.map((p) => (
        <Reveal key={p.slug} className="h-full">
          <ProjectCard project={p} />
        </Reveal>
      ))}
    </div>
  )
}
