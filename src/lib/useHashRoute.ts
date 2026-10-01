/* ------------------------------------------------------------------
   Router hash propio: #/, #proyectos, #proyecto/<slug>, etc.
   Ligero (sin librería), predecible y funciona bien en Vercel (static).

   Regla: un cambio de hash es la única forma de navegar entre listado
   y detalle. Esto deja el historial y los enlaces compartibles.

   Uso:
   - const { route, params } = useHashRoute()
   - route === 'home' | 'proyectos' | 'proyecto' | 'experimentos' | ...
------------------------------------------------------------------- */
import { useCallback, useEffect, useMemo, useState } from 'react'

export type Route =
  | 'home'
  | 'proyectos'
  | 'experimentos'
  | 'aprendiendo'
  | 'matematicas'
  | 'sobre'
  | 'contacto'
  | 'proyecto'
  | 'unknown'

interface ProjectRouteParams {
  slug: string | null
}

function parseHash(h: string): { route: Route; params: ProjectRouteParams } {
  const raw = h.startsWith('#') ? h.slice(1) : h
  const path = raw.replace(/\/+/g, '/').replace(/\/$/, '') || ''

  // #proyecto/optiplex-homelab
  if (path.startsWith('proyecto/')) {
    const slug = path.slice('proyecto/'.length)
    if (slug && /^[a-z0-9-]+$/.test(slug)) {
      return { route: 'proyecto', params: { slug } }
    }
    return { route: 'proyecto', params: { slug: null } }
  }

  switch (path) {
    case '':
    case '/':
    case 'home':
      return { route: 'home', params: { slug: null } }
    case 'proyectos':
      return { route: 'proyectos', params: { slug: null } }
    case 'experimentos':
      return { route: 'experimentos', params: { slug: null } }
    case 'aprendiendo':
      return { route: 'aprendiendo', params: { slug: null } }
    case 'matematicas':
      return { route: 'matematicas', params: { slug: null } }
    case 'sobre':
      return { route: 'sobre', params: { slug: null } }
    case 'contacto':
      return { route: 'contacto', params: { slug: null } }
    default:
      return { route: 'unknown', params: { slug: null } }
  }
}

export function useHashRoute() {
  const [hash, setHash] = useState<string>(() => window.location.hash ?? '')

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash ?? '')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const parsed = useMemo(() => parseHash(hash), [hash])
  const go = useCallback((to: string) => {
    const target = to.startsWith('#') ? to : `#${to.replace(/^#/, '')}`
    if (window.location.hash !== target) {
      window.location.hash = target
    } else {
      // Forzar actualización si es el mismo hash (click repetido)
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    }
  }, [])

  const home = useCallback(() => go(''), [go])
  const proyectos = useCallback(() => go('#proyectos'), [go])
  const experimentos = useCallback(() => go('#experimentos'), [go])
  const aprendiendo = useCallback(() => go('#aprendiendo'), [go])
  const matematicas = useCallback(() => go('#matematicas'), [go])
  const sobre = useCallback(() => go('#sobre'), [go])
  const contacto = useCallback(() => go('#contacto'), [go])
  const proyecto = useCallback((slug: string) => go(`#proyecto/${slug}`), [go])

  return {
    hash,
    ...parsed,
    go,
    home,
    proyectos,
    experimentos,
    aprendiendo,
    matematicas,
    sobre,
    contacto,
    proyecto,
  }
}
