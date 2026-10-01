/* ------------------------------------------------------------------
   Slot para tu foto.

   Cómo llenarlo:
   1. Deja la imagen en `public/` (ej. `public/foto.jpg`).
   2. En `src/data/site.ts`, pon `photo: { src: '/foto.jpg', alt: '...' }`.

   Recomendaciones para la foto:
   - Vertical o casi (por ejemplo 3:4). El marco es `aspect-[4/5]`.
   - El encuadre del torso o la cara. No una selfie de lejos.
   - Fondo liso o con poca información detrás.
   - JPG o WebP. Debajo de ~200 KB para que no pese.
   - `alt` describe a la persona, no la composición.

   while `null`, el sitio muestra un marco vacío con la misma
   retícula técnica del fondo. Nada inventado.
------------------------------------------------------------------- */

import type { SiteMeta, ContactLink } from '../types'

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
      'Estudiante de secundaria en Xalapa, Veracruz. Programación, matemáticas y física. Homelab, automatización y cosas que construyo para entender cómo funcionan.',
    locale: 'es_MX',
  } satisfies SiteMeta,

  /* ----------------------------------------------------------------
     Foto del inicio. `null` = marco vacío (estado inicial).
     Alt: ej. 'Alexander López'.
  ---------------------------------------------------------------- */
  photo: { src: '/xan.jpg', alt: 'Alexander López' },

  /* ----------------------------------------------------------------
     Pendientes: rellenar con datos reales.
  ---------------------------------------------------------------- */
  githubUrl: "https://github.com/lc-xander",
  email: "xanderlopezculebro@gmail.com",
}

export const contact: ContactLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    hint: 'Código de los proyectos y los scripts.',
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
