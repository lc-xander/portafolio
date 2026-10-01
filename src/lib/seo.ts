/* ------------------------------------------------------------------
   SEO mínimo y explícito
   - En producción: las meta ya están en index.html.
   - En desarrollo: este hook escribe <title>, meta description y OG
     para que puedas revisar rápidamente los cambios.

   No añade librerías. No inserta JSON-LD inventado.
------------------------------------------------------------------- */
import { useEffect } from 'react'
import { site } from '../data/site'

const DESCRIPTION = site.meta.description
const TITLE = site.meta.title

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOg(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSeo(opts: { title?: string; description?: string } = {}) {
  useEffect(() => {
    const title = opts.title ? `${opts.title} — ${site.fullName}` : TITLE
    const description = opts.description ?? DESCRIPTION

    if (document.title !== title) {
      document.title = title
    }
    setMeta('description', description)
    setOg('og:title', title)
    setOg('og:description', description)
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
  }, [opts.title, opts.description])
}
