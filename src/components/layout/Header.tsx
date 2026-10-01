import React from 'react'
import { useHashRoute } from '../../lib/useHashRoute'
import { cn } from '../../lib/cn'
import { Container } from '../layout'

const LINKS = [
  { label: 'Proyectos', to: '#proyectos' },
  { label: 'Experimentos', to: '#experimentos' },
  { label: 'Aprendiendo', to: '#aprendiendo' },
  { label: 'Matemáticas', to: '#matematicas' },
  { label: 'Sobre mí', to: '#sobre' },
  { label: 'Contacto', to: '#contacto' },
] as const

function NavLink({
  label,
  to,
  active,
  onClick,
}: {
  label: string
  to: string
  active: boolean
  onClick?: () => void
}) {
  return (
    <a
      href={to}
      onClick={onClick}
      className={cn(
        'relative inline-flex items-center px-2 py-2 text-sm transition-colors hover:text-ink focus-visible:text-ink',
        active ? 'text-ink' : 'text-muted',
      )}
    >
      {label}
      {active ? (
        <span
          className="absolute inset-x-1 -bottom-0.5 h-px bg-accent/70"
          aria-hidden
        />
      ) : null}
    </a>
  )
}

export function Header() {
  const { hash, route } = useHashRoute()
  const [open, setOpen] = React.useState(false)

  // Cierra el menú al cambiar de ruta
  React.useEffect(() => {
    setOpen(false)
  }, [hash])

  // Bloquea scroll cuando el menú móvil está abierto
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Activo por sección (soporta home y anclas)
  const isActive = (to: string) => {
    const h = hash.replace(/^#/, '')
    const t = to.replace(/^#/, '')

    if (t === '') return h === '' || h === 'home'
    if (t === 'proyectos') return h === 'proyectos' || route === 'proyecto'
    if (t === 'experimentos') return h === 'experimentos'
    if (t === 'aprendiendo') return h === 'aprendiendo'
    if (t === 'matematicas') return h === 'matematicas'
    if (t === 'sobre') return h === 'sobre'
    if (t === 'contacto') return h === 'contacto'
    return h === t
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/60 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="group inline-flex items-center gap-2.5 rounded-[4px] px-1 py-1 focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Ir a inicio"
        >
          <span className="flex size-7 items-center justify-center rounded-[6px] border border-line bg-surface">
            <svg
              aria-hidden
              viewBox="0 0 32 32"
              className="size-4"
              role="img"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.6 10.5 7.6 16l5 5.5" />
                <path d="M19.4 10.5 24.4 16l-5 5.5" />
              </g>
              <circle cx="16" cy="16" r="1.7" fill="currentColor" />
            </svg>
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-medium leading-tight tracking-tight text-ink">
              Alexander López
            </span>
            <span className="label-mono">Estudiante · Programación · Matemáticas</span>
          </span>
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              label={l.label}
              to={l.to}
              active={isActive(l.to)}
            />
          ))}
        </nav>

        {/* Botón móvil */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[6px] border border-line bg-surface px-2.5 py-2 text-sm text-ink transition-colors hover:border-line-hi focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </Container>

      {/* Panel móvil */}
      {open ? (
        <div className="fixed inset-0 z-40 bg-bg/90 backdrop-blur md:hidden">
          <Container className="flex h-full flex-col justify-center py-6">
            <nav
              id="mobile-nav"
              className="flex flex-col items-center gap-2"
              aria-label="Navegación móvil"
            >
              {LINKS.map((l) => (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'inline-flex w-full max-w-xs items-center justify-center rounded-[8px] border px-4 py-3 text-base transition-colors',
                    isActive(l.to)
                      ? 'border-line-hi bg-surface-hi text-ink'
                      : 'border-line bg-surface text-muted hover:text-ink',
                  )}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
