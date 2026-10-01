import { site } from '../../data/site'
import { Reveal } from '../ui'

/**
 * Marco para la foto del inicio.
 *
 * Cómo llenarlo:
 * 1. Deja la imagen en `public/` (ej. `public/xan.jpg`).
 * 2. En `src/data/site.ts`, pon `photo: { src: '/xan.jpg', alt: '...' }`.
 *
 * Si `site.photo` es `null`, muestra un espacio vacío con la misma
 * retícula técnica del fondo. Nunca inventa una silueta o un avatar.
 */
export function Portrait() {
  const photo = site.photo

  return (
    /*
      Ancho FIJO en todos los breakpoints (`w-* shrink-0`). Nunca
      `flex-1` ni `max-w-none`: la foto debe mantener su proporción
      4:5 y no competir con el espacio del texto.
    */
    <Reveal className="w-36 shrink-0 sm:w-44 lg:w-52">
      <figure className="flex flex-col gap-3">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[10px] border border-line bg-surface">
          {photo ? (
            <img
              src={photo.src}
              alt={photo.alt}
              width={640}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="size-full object-cover"
            />
          ) : (
            /* Estado vacío: misma retícula, sin adornos. */
            <div
              aria-hidden
              className="size-full opacity-[0.35]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          )}

          {/* Filete de acento en el borde superior */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/40"
          />
        </div>

        <figcaption className="label-mono">
          {photo ? site.shortName : 'foto pendiente'}
        </figcaption>
      </figure>
    </Reveal>
  )
}
