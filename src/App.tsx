import { useEffect } from 'react'
import { featuredProjects } from './data/projects'
import { sortedExperiments } from './data/experiments'
import { useHashRoute } from './lib/useHashRoute'
import { useSeo } from './lib/seo'
import { Footer } from './components/layout'
import { Header } from './components/layout/Header'
import { Hero } from './components/home/Hero'
import { Projects } from './components/home/Projects'
import { Learning } from './components/home/Learning'
import { Math } from './components/home/Math'
import { About } from './components/home/About'
import { Contact } from './components/home/Contact'
import { ProjectDetail } from './components/project/ProjectDetail'

/**
 * Un solo archivo App. La lógica de rutas (hash) vive en `useHashRoute`.
 *
 * Contrato de rutas:
 *   # (o vacío)             → portada completa
 *   #proyectos              → portada, ancla en Proyectos
 *   #experimentos           → portada, ancla en Experimentos
 *   #aprendiendo            → portada, ancla en Aprendiendo
 *   #matematicas            → portada, ancla en Matemáticas
 *   #sobre                  → portada, ancla en Sobre mí
 *   #contacto               → portada, ancla en Contacto
 *   #proyecto/<slug>        → panel de detalle de ese proyecto
 */
export default function App() {
  const { route, params, home, hash } = useHashRoute()

  const allProjects = [...featuredProjects, ...sortedExperiments]
  const activeProject =
    route === 'proyecto' ? allProjects.find((p) => p.slug === params.slug) : null

  // Página completa = portada. Sin título por sección en el <title>.
  useSeo({ title: undefined })

  /* Si el hash apunta a una sección, se smoothly desplaza al entrar. */
  useEffect(() => {
    const anchor = hash.replace(/^#/, '')
    if (!anchor || anchor.startsWith('proyecto/')) return

    const el = document.getElementById(anchor)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  /* Si se pide un proyecto que no existe, se vuelve a la portada. */
  useEffect(() => {
    if (route === 'proyecto' && !activeProject) {
      home()
    }
  }, [route, activeProject, home])

  /* Bloquea scroll de fondo cuando el panel está abierto. */
  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[6px] focus:border focus:border-line-hi focus:bg-surface-hi focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Projects />
        <Learning />
        <Math />
        <About />
        <Contact />
      </main>

      <Footer />

      {activeProject ? <ProjectDetail project={activeProject} /> : null}
    </>
  )
}
