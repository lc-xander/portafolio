import type { SiteMeta, ContactLink } from '../types'

/* ------------------------------------------------------------------
   Identidad, copy de la portada y contacto.

   >>> TODO: completa estos datos <<<
   - `site.githubUrl`  → tu usuario de GitHub
   - `site.email`      → tu correo
   - `contact[]`       → href de GitHub y del correo

   Mientras estén en `null` la sección de contacto los muestra como
   "pendiente", no como un enlace roto ni como texto inventado.
------------------------------------------------------------------- */

export const site = {
  fullName: 'Alexander López',
  shortName: 'Xander',
  role: 'Estudiante',
  location: 'Xalapa, Veracruz, México',
  /** Subtítulos del inicio. Se muestran como lista, no como titular gigante. */
  topics: ['Programación', 'Matemáticas', 'Física'],

  /**
   * Párrafo del inicio. Natural, en primera persona, sin frases
   * corporativas ni superlativos.
   */
  intro:
    'Me gusta aprender construyendo cosas y entender cómo funcionan por dentro. Paso buena parte de mi tiempo programando, resolviendo problemas de matemáticas y montando un servidor propio en un OptiPlex viejo para ver cómo se comportan las cosas en la práctica.',

  /** Frase corta bajo el CTA del inicio. */
  tagline: 'Construyo para entender.',

  /** Frase que abre la llamada visual hacia los proyectos. */
  projectsCallout:
    'Lo que hay aquí son cosas que existen y que puedo explicar de punta a punta.',

  about: {
    heading: 'Sobre mí',
    paragraphs: [
      'Soy estudiante de secundaria en Xalapa, Veracruz. Me interesan la programación, las matemáticas y la física, sobre todo por la parte de entender los porqués.',
      'Mi forma de aprender es construyendo. Si algo me interesa, eventualmente termino armando un proyecto que lo use: un servidor propio, un script, un experimento. Es más lento que leer la documentación, pero se queda mucho mejor.',
      'Este sitio es mi bitácora: lo que he hecho, lo que estoy aprendiendo y lo que todavía no he terminado.',
    ],
  },

  meta: {
    title: 'Alexander López — Programación y Matemáticas',
    description:
      'Estudiante de secundaria en Xalapa, Veracruz. Programación, matemáticas y física. Homelab, automatización y experimentos que construyo para entender cómo funcionan las cosas.',
    locale: 'es_MX',
  } satisfies SiteMeta,

  /* ----------------------------------------------------------------
     Pendientes: rellenar con datos reales.
  ---------------------------------------------------------------- */
  githubUrl: null as string | null,
  email: null as string | null,
}

export const contact: ContactLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    hint: 'Código de los experimentos y los scripts.',
    href: site.githubUrl,
    external: true,
    icon: 'github',
  },
  {
    id: 'email',
    label: 'Correo',
    hint: 'Para escribirme directamente.',
    href: site.email ? `mailto:${site.email}` : null,
    external: false,
    icon: 'mail',
  },
]

/* ------------------------------------------------------------------
   Añade aquí más redes o enlaces cuando los tengas.
   Ejemplo:
   {
     id: 'x',
     label: 'X',
     hint: 'Notas cortas sobre lo que estoy leyendo.',
     href: 'https://x.com/tu_usuario',
     external: true,
     icon: 'link',
   }
------------------------------------------------------------------- */
