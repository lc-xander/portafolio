import React from 'react'
import type { ProjectStatus, LearningStatus } from '../../types'
import { PROJECT_STATUS_LABEL, LEARNING_STATUS_LABEL } from '../../types'
import { cn } from '../../lib/cn'

/* ------------------------------------------------------------------
   UI base mínima. Sin extras, sin librerías, sin animaciones
   innecesarias. Cada componente resuelve un problema concreto.
------------------------------------------------------------------- */

/* ------------------------------- Pending ------------------------------- */

export function Pending({ text = 'Por documentar' }: { text?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-[4px] border border-line bg-surface px-1.5 py-0.5 text-[11px] leading-none text-faint"
      aria-label={text}
    >
      <span className="block size-1.5 rounded-full border border-faint/60" />
      {text}
    </span>
  )
}

/* ------------------------------ StatusChip ----------------------------- */

export function StatusChip({ status }: { status: ProjectStatus }) {
  const label = PROJECT_STATUS_LABEL[status]

  const tone =
    status === 'operativo'
      ? 'border-emerald-400/40 text-emerald-300/90 bg-emerald-400/10'
      : status === 'en-desarrollo'
        ? 'border-accent/40 text-accent bg-accent/10'
        : status === 'pausado'
          ? 'border-amber-400/40 text-amber-300/90 bg-amber-400/10'
          : 'border-line text-faint bg-surface'

  return (
    <span
      className={cn(
        'label-mono inline-flex items-center rounded-full border px-2 py-1.5',
        tone,
      )}
    >
      {label}
    </span>
  )
}

export function LearningStatusChip({ status }: { status: LearningStatus }) {
  const label = LEARNING_STATUS_LABEL[status]

  return (
    <span className="label-mono inline-flex items-center rounded-full border border-line bg-surface px-2 py-1.5 text-faint">
      {label}
    </span>
  )
}

/* --------------------------------- Tag --------------------------------- */

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-mono inline-flex items-center rounded-[4px] border border-line bg-surface px-1.75 py-1 text-faint">
      {children}
    </span>
  )
}

/* --------------------------------- Card -------------------------------- */

export function Card({
  as: As = 'article',
  className,
  children,
  ...rest
}: {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <As
      className={cn(
        'group/card card-rule relative flex h-full flex-col rounded-[8px] border border-line bg-surface/80 px-5 py-5 backdrop-blur-[1px] transition-colors duration-120 ease-out hover:border-line-hi focus-within:border-line-hi',
        className,
      )}
      {...rest}
    >
      <span className="card-rule-after pointer-events-none" aria-hidden />
      {children}
    </As>
  )
}

/* ------------------------------- Reveal ------------------------------- */

export function Reveal({
  children,
  as: As = 'div',
  className,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLElement>) {
  const ref = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      ;(el as HTMLElement | null)?.setAttribute('data-reveal', 'visible')
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.setAttribute('data-reveal', 'visible')
            obs.unobserve(el)
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -16px 0px',
      },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <As ref={ref} data-reveal className={className} {...rest}>
      {children}
    </As>
  )
}

/* ------------------------------- Icon --------------------------------- */
/* SVG inline y accesibles. Sin iconfont. */

export function Icon({
  name,
  className,
}: {
  name: 'github' | 'mail' | 'link' | 'arrow' | 'close'
  className?: string
}) {
  switch (name) {
    case 'github':
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.49v-1.72c-2.78.61-3.37-1.38-3.37-1.38-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.61.07-.61 1 .07 1.52 1.05 1.52 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
      )
    case 'mail':
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    case 'link':
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      )
    case 'arrow':
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )
    case 'close':
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      )
    default:
      return null
  }
}
