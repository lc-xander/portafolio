import { site } from '../../data/site'
import { Reveal } from '../ui'

/**
 * Marco para la foto del inicio.
 *
 * Si `site.photo` es `null`, muestra un espacio vacío con la misma
 * retícula técnica del fondo, para que el layout no salte cuando
 * agregues la imagen. Nunca inventa una silueta o un avatar.
 */
export function Portrait() {
  const photo = site.photo

  return (
    <Reveal className="w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-none">
      <figure className="flex flex-col gap-3">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[10px] border border-line bg-surface">
          {photo ? (
            <img
              src={photo.src}
              alt={photo.alt}
              loading="eager"
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
