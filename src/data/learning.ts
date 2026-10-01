import type { LearningItem } from '../types'

/* ------------------------------------------------------------------
   ACTUALMENTE APRENDIENDO

   Sin porcentajes, sin estrellas, sin barras de progreso, sin niveles.
   El estado es texto y describe la relación con el tema, no un grado.

   Para actualizarlo: edita el texto, o agrega/quita entradas.
   Reordena con `order` (menor = más arriba).
------------------------------------------------------------------- */

export const learning: LearningItem[] = [
  {
    id: 'python',
    title: 'Python',
    source: 'freeCodeCamp',
    status: 'certificacion-en-proceso',
    tag: 'Certificación',
    note: 'Recorrido de certificación en curso. Es el lenguaje en el que más escribo fuera de la secundaria.',
    order: 1,
  },
  {
    id: 'matematicas-mateclub',
    title: 'Matemáticas',
    source: 'MateClub · Universidad Veracruzana',
    status: 'practica',
    tag: 'UV',
    note: 'Preparación y trabajo de matemáticas con el MateClub.',
    order: 2,
  },
  {
    id: 'homelab',
    title: 'Linux y homelab',
    source: 'Servidor propio',
    status: 'practica',
    tag: 'Autoestudio',
    note: 'Aprendo administrando el OptiPlex que administra el primer proyecto de este sitio.',
    order: 3,
  },
  {
    id: 'ai-agents',
    title: 'Agentes de IA',
    source: 'Hugging Face',
    status: 'curso',
    tag: 'Hugging Face',
    note: 'Aprendiendo cómo se construyen y cómo se comportan los agentes.',
    order: 4,
  },
  {
    id: 'transformers',
    title: 'Transformers e IA local',
    source: 'Modelos pequeños',
    status: 'explorando',
    tag: 'Local',
    note: 'Experimento con modelos pequeños y ejecución local.',
    order: 5,
  },
]

export const sortedLearning = [...learning].sort((a, b) => a.order - b.order)
