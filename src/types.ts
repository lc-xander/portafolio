/* ------------------------------------------------------------------
   Tipos del dominio.

   Regla de este proyecto: un campo `null` o un array vacío significa
   "todavía no lo he documentado". La UI lo muestra como pendiente
   explícito. Nunca se rellena con información inventada.

   Para agregar un proyecto: añade un objeto al array en
   `src/data/projects.ts` (o `experiments.ts`). No toques componentes.
------------------------------------------------------------------- */

/** Estado real del proyecto. Nada de porcentajes ni niveles. */
export type ProjectStatus =
  | 'en-desarrollo'
  | 'operativo'
  | 'pausado'
  | 'por-documentar'

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  'en-desarrollo': 'En desarrollo',
  operativo: 'Operativo',
  pausado: 'Pausado',
  'por-documentar': 'Por documentar',
}

/** Bloque de texto largo dentro del detalle de un proyecto. */
export interface ProjectSection {
  title: string
  /** Párrafos. Cada elemento del array es un párrafo. */
  body: string[]
  /** Lista opcional al final de la sección. */
  items?: string[]
}

export interface ProjectLink {
  label: string
  url: string
  /** `interna` = dentro del sitio (más adelante). `externo` = sale del sitio. */
  kind?: 'externo' | 'interna'
}

export interface ProjectScreenshot {
  src: string
  /** `alt` es obligatorio y debe describir el contenido, no el adorno. */
  alt: string
  caption?: string
}

export interface Project {
  slug: string
  name: string
  /** `destacado` = aparece en la sección principal. `experimento` = grid chico. */
  kind: 'destacado' | 'experimento'
  status: ProjectStatus
  /**
   * Una o dos líneas. Es lo que se lee en la card.
   * `null` = todavía sin redactar; la card cae a estado pendiente.
   */
  summary: string | null
  /** Qué problema resuelve o qué resuelve. */
  problem?: string | null
  /** Qué hice yo concretamente. */
  contribution?: string | null
  /** Qué aprendí. */
  learnings?: string[] | null
  /** Etiquetas de tecnología. Nombres propios: se dejan en inglés. */
  stack: string[]
  /** Metadata en pares clave/valor: hardware, periodo, rol... */
  meta: { label: string; value: string }[]
  /** Secciones largas: objetivo, hardware, arquitectura, problemas... */
  sections?: ProjectSection[]
  links: ProjectLink[]
  screenshots: ProjectScreenshot[]
  /** Los destacados se ordenan por `order` ascendente. */
  order: number
}

/* ----------------------------- Aprendizaje ----------------------------- */

/**
 * Estado de aprendizaje. Es texto, no un número.
 * No se usan barras, porcentajes, estrellas ni niveles inventados.
 */
export type LearningStatus =
  | 'certificacion-en-proceso'
  | 'curso'
  | 'explorando'
  | 'practica'

export const LEARNING_STATUS_LABEL: Record<LearningStatus, string> = {
  'certificacion-en-proceso': 'Certificación en proceso',
  curso: 'En curso',
  explorando: 'Explorando',
  practica: 'En práctica',
}

export interface LearningItem {
  id: string
  title: string
  /** Dónde lo estoy aprendiendo. Nombre propio de la fuente. */
  source: string
  status: LearningStatus
  /** Una frase. Sin promesas ni superlativos de folleto. */
  note: string
  /** Etiqueta opcional, ej. "freeCodeCamp". */
  tag?: string
  order: number
}

/* ------------------------------ Logros ------------------------------ */

export interface AcademicItem {
  id: string
  title: string
  place: string
  /** Texto libre y corto, ej. "Etapa zona". */
  context?: string
  /** Periodo en texto, tal cual se decidió publicarlo. */
  period?: string
  note?: string
}

/* ----------------------------- Contacto ----------------------------- */

export interface ContactLink {
  id: string
  label: string
  /** Descripción corta que se muestra debajo del enlace. */
  hint: string
  /**
   * `null` = el dato todavía no se ha proporcionado.
   * La UI muestra un estado "pendiente" en lugar de un enlace roto.
   */
  href: string | null
  /** `true` para que se abra en una pestaña nueva. */
  external?: boolean
  icon: 'github' | 'mail' | 'link'
}

/* ------------------------------- Meta ------------------------------- */

export interface SiteMeta {
  title: string
  description: string
  locale: string
}
