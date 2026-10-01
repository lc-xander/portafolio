import type { Project } from '../types'

/* ------------------------------------------------------------------
   PROYECTOS DESTACADOS

   Para agregar uno: copia la forma de un objeto existente y ponlo
   al final. El sitio lo ordenará por `order` y lo mostrará solo.

   Campos en `null` o `[]` = pendientes. Se muestran como "Por
   documentar". No rellenes con suposiciones.
------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    slug: 'optiplex-homelab',
    name: 'OptiPlex Homelab',
    kind: 'destacado',
    status: 'operativo',
    order: 1,
    summary:
      'Un servidor propio en un OptiPlex con Debian, Docker y varios servicios self-hosted accesibles desde mi red y desde fuera con Tailscale.',

    problem:
      'Quería un lugar donde alojar mis propias cosas y aprender a administrar un servidor de verdad: sistema, red, servicios y problemas que aparecen cuando dejas de theory-crafting y algo se cae a las 11 de la noche.',

    contribution:
      'Armé el servidor, instalé Debian, levanté los servicios con Docker y configuré el acceso remoto con Tailscale.',

    learnings: null,

    stack: [
      'Dell OptiPlex',
      'Debian',
      'Docker',
      'Nextcloud',
      'Immich',
      'Jellyfin',
      'Jellyseerr',
      'Netdata',
      'SSH',
      'Networking',
      'Tailscale',
    ],

    meta: [
      { label: 'Tipo', value: 'Infraestructura personal' },
      { label: 'Base', value: 'Debian' },
      { label: 'Hardware', value: 'Dell OptiPlex' },
      { label: 'Estado', value: 'Operativo' },
    ],

    /* --- TODO: documentar el resto cuando esté listo -------------
       - objetivo / por qué existe (llena `problem`)
       - hardware concreto (modelo, CPU, RAM, disco)
       - servicios y qué hace cada uno
       - arquitectura de la red
       - problemas encontrados y cómo los resolví
       - qué aprendí
       Inserta secciones con la forma `ProjectSection`.            */
    sections: [
      {
        title: 'Qué hace',
        body: [
          'El OptiPlex corre Debian y aloja varios servicios en contenedores de Docker. Cada servicio hace una cosa distinta y se accede a él por su propio nombre de dominio interno.',
        ],
        items: [
          'Nextcloud — archivos y sincronización.',
          'Immich — galería de fotos y respaldos.',
          'Jellyfin — servidor de medios.',
          'Jellyseerr — las peticiones de medios, conectadas a Jellyfin.',
          'Netdata — métricas del servidor en vivo.',
        ],
      },
      {
        title: 'Servicios',
        body: [
          'Cada uno corre aislado en su propio contenedor, con almacenamiento montado desde el host. Netdata es el que más uso: cuando algo se siente raro, ahí está la respuesta.',
        ],
      },
      {
        title: 'Acceso remoto',
        body: [
          'En vez de abrir puertos al público, uso Tailscale para llegar a los servicios desde fuera. Todo el tráfico va por la red privada y el servidor no queda expuesto directamente a internet.',
        ],
      },
    ],

    links: [],
    screenshots: [],

    /* TODO: Añade screenshots cuando las tengas.
       { src: '/media/homelab-1.png', alt: 'Descripción real de la captura', caption: 'Opcional' } */
  },

  /* ----------------------------------------------------------------
     Proyecto de aplicación web. Datos proporcionados por el autor.

     TODO: documentar las secciones largas del detalle
     - arquitectura y flujo de autenticación
     - estructura de la base de datos
     - panel administrativo: qué permite hacer
     - problemas encontrados y cómo se resolvieron
     Inserta objetos con la forma `ProjectSection`.
  ---------------------------------------------------------------- */
  {
    slug: 'mochila',
    name: 'Mochila',
    kind: 'destacado',
    status: 'operativo',
    order: 2,

    summary:
      'Aplicación web para que estudiantes consulten sus horarios semanales, con autenticación, activación de cuentas y un panel administrativo.',

    problem:
      'Facilitar la consulta de horarios de estudiantes y centralizar la gestión de alumnos, grupos, materias, horarios y códigos de activación.',

    contribution:
      'Desarrollé una aplicación full-stack con backend, frontend, autenticación, sesiones, roles de usuario y persistencia de datos en MySQL.',

    learnings: [
      'Desarrollo full-stack: backend, frontend y persistencia de datos en un solo proyecto.',
      'Autenticación y autorización: diferencias entre autenticar a alguien y decidir qué puede ver.',
      'Manejo de sesiones y cookies con express-session.',
      'Hashing de contraseñas con Argon2 en lugar de guardar contraseñas en texto plano.',
      'Bases de datos relacionales con MySQL: modelar entidades y relacionarlas.',
      'Prácticas básicas de seguridad web.',
    ],

    stack: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'Argon2', 'express-session'],

    meta: [
      { label: 'Tipo', value: 'Aplicación web full-stack' },
      { label: 'Estado', value: 'Publicado' },
      { label: 'Repositorio', value: 'GitHub' },
    ],

    sections: [],

    links: [
      {
        label: 'Ver en GitHub',
        url: 'https://github.com/lc-xander/mochilaiep-fullstack',
      },
    ],

    screenshots: [],

    /* TODO: Añade capturas cuando las tengas.
       { src: '/media/mochila-1.png', alt: 'Descripción real', caption: 'Opcional' } */
  },
]

/* Orden estable por `order`, sin mutar el array original. */
export const featuredProjects = [...projects]
  .filter((p) => p.kind === 'destacado')
  .sort((a, b) => a.order - b.order)
