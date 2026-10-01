import type { Project } from '../types'

/* ------------------------------------------------------------------
   EXPERIMENTOS

   Proyectos chicos, scripts y pruebas que no justifican una página
   individual pero que sí son parte del trabajo.

   Para agregar uno: añade un objeto al array. Nada más.
   Campos en `null` / `[]` = pendientes.

   >>> TODO: esta lista está vacía a propósito. El primer experimento
   que agregues es el paso más fácil: copia la forma de abajo y
   rellénala con algo real. Deja el array vacío hasta entonces; es
   preferible un espacio en blanco a contenido inventado.
------------------------------------------------------------------- */

export const experiments: Project[] = [
  /* Ejemplo de forma (descomenta y rellena con algo real):

  {
    slug: 'mi-script',
    name: 'Nombre real',
    kind: 'experimento',
    status: 'operativo',
    order: 1,
    summary: 'Una o dos líneas sobre qué hace.',
    problem: 'Por qué lo hice.',
    contribution: 'Qué escribí.',
    learnings: ['Qué entendí al hacerlo.'],
    stack: ['Python'],
    meta: [{ label: 'Lenguaje', value: 'Python' }],
    links: [],
    screenshots: [],
  },
  */
]

export const sortedExperiments = [...experiments].sort((a, b) => a.order - b.order)
