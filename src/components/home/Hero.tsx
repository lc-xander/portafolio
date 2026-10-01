import { site } from '../../data/site'
import { Container } from '../layout'
import { Reveal } from '../ui'
import { Portrait } from './Portrait'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/60 pt-20 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28">
      {/* Fondo: retícula técnica muy tenue. Estática, sin animación. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 78%)',
        }}
      />

      <Container>
        {/*
          Dos columnas en desktop: texto a la izquierda, foto a la derecha.
          En móvil y tablet se apila, con la foto al final para no
          empujar el nombre ni el CTA fuera de la primera pantalla.
        */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex min-w-0 flex-1 flex-col">
            <Reveal>
              <p className="label-mono mb-6">
                {site.location} — {site.role}
              </p>
            </Reveal>

            <Reveal>
              <h1 className="text-balance text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl">
                Alexander López
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-5 font-mono text-sm text-muted sm:text-base">
                Estudiante. Programación. Matemáticas.
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {site.intro}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-line-hi bg-surface-hi px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Ver proyectos
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-[8px] border border-line bg-transparent px-5 py-3 text-sm text-muted transition-colors hover:border-line-hi hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Contacto
                </a>
              </div>
            </Reveal>
          </div>

          {/* Foto: columna fija, no se estira para no romper el texto */}
          <div className="flex justify-center lg:pt-1">
            <Portrait />
          </div>
        </div>
      </Container>
    </section>
  )
}
