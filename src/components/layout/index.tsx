import React from 'react'
import { cn } from '../../lib/cn'

export function Container({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export function Section({
  id,
  children,
  className,
  ...rest
}: {
  id?: string
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-24 py-16 sm:py-20 md:py-24', className)}
      {...rest}
    >
      {children}
    </section>
  )
}

export function SectionHeading({
  overline,
  title,
  lead,
}: {
  overline?: string
  title: string
  lead?: string
}) {
  return (
    <header className="mb-10 flex flex-col gap-4 sm:mb-12">
      {overline ? (
        <p className="label-mono self-start">{overline}</p>
      ) : null}
      <h2 className="text-balance text-2xl font-medium tracking-tight text-ink sm:text-3xl md:text-[2rem] md:leading-[1.08]">
        {title}
      </h2>
      {lead ? (
        <p className="max-w-2xl text-pretty text-sm text-muted sm:text-base">
          {lead}
        </p>
      ) : null}
    </header>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line/60 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-ink">Alexander López — Xander</p>
          <p className="text-xs text-muted">
            Estudiante de secundaria en Xalapa, Veracruz. Construido con React,
            Vite, TypeScript y Tailwind CSS.
          </p>
        </div>
        <p className="label-mono">© {year}</p>
      </Container>
    </footer>
  )
}
