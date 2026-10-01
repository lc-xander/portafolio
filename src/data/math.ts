import type { AcademicItem } from '../types'

/* ------------------------------------------------------------------
   MATEMÁTICAS

   Solo lo que está confirmado. Nada inventado.

   Fechas tal cual: "agosto 2026 – febrero 2027"
   Logro: "4.º lugar en Olimpiada de Matemáticas, etapa zona"
------------------------------------------------------------------- */

export const mathItems: AcademicItem[] = [
  {
    id: 'mateclub-2026',
    title: 'Miembro del MateClub',
    place: 'Universidad Veracruzana',
    context: 'MateClub',
    period: 'agosto 2026 – febrero 2027',
    note: 'Resolución de problemas y preparación para competencias.',
  },
  {
    id: 'olimpiada-zona',
    title: '4.º lugar en Olimpiada de Matemáticas',
    place: 'Olimpiada de Matemáticas',
    context: 'Etapa zona',
    note: 'El dato es el que se ha confirmado. No se incluyen otras posiciones o etapas adicionales.',
  },
]
