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
      'Servidor personal en un Dell OptiPlex con Debian, Docker y varios servicios self-hosted.',

    problem:
      'Quería un lugar donde alojar mis propias cosas y aprender administración de sistemas, redes y servicios self-hosted.',

    contribution:
      'Armé el servidor, instalé Debian y levanté los servicios con Docker.',

    learnings: [
      'Administración de Linux con Debian.',
      'Self-hosting y operación de servicios personales.',
      'Redes y acceso remoto mediante SSH.',
      'Almacenamiento con discos SATA.',
      'Contenedores y servicios con Docker.',
      'Configuración de nginx.',
      'Bases de datos con MariaDB.',
      'Diagnóstico de problemas en un servidor.',
    ],

    stack: [
      'Dell OptiPlex',
      'Intel Core i5-2400',
      '8 GB RAM',
      '2x 500 GB SATA HDD',
      'Debian 13',
      'Docker',
      'Nextcloud',
      'Immich',
      'Jellyfin',
      'Jellyseerr',
      'Radarr',
      'qBittorrent',
      'MariaDB',
      'nginx',
      'Netdata',
      'SSH',
      'Networking',
    ],

    meta: [
      { label: 'Tipo', value: 'Infraestructura personal' },
      { label: 'Base', value: 'Debian 13' },
      { label: 'Hardware', value: 'Dell OptiPlex' },
      { label: 'CPU', value: 'Intel Core i5-2400' },
      { label: 'Memoria', value: '8 GB RAM' },
      { label: 'Almacenamiento', value: '2x 500 GB SATA HDD' },
      { label: 'Estado', value: 'Operativo' },
    ],

    sections: [
      {
        title: 'Qué hace',
        body: [
          'El OptiPlex corre Debian 13 y aloja varios servicios en contenedores de Docker.',
        ],
        items: [
          'Nextcloud — archivos y sincronización.',
          'Immich — galería de fotos y respaldos.',
          'Jellyfin — servidor de medios.',
          'Jellyseerr — las peticiones de medios, conectadas a Jellyfin.',
          'Radarr — gestión de películas.',
          'qBittorrent — descargas.',
          'MariaDB — base de datos.',
          'nginx — servidor web y proxy inverso.',
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
          'La administración del servidor se realiza mediante SSH.',
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
      { label: 'Estado', value: 'Operativo' },
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

  },
]

/* Orden estable por `order`, sin mutar el array original. */
export const featuredProjects = [...projects]
  .filter((p) => p.kind === 'destacado')
  .sort((a, b) => a.order - b.order)
