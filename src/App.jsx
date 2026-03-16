import { useEffect } from 'react'
import MatrixRain from './components/MatrixRain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import Resume from './components/Resume'
import DevWorkflow from './components/Devworkflow'

export default function App() {
  useScrollReveal()

  // Re-run scroll reveal after route changes / re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-bg font-body overflow-x-hidden">
      {/* Matrix rain canvas background */}
      <MatrixRain />

      {/* Fixed nav */}
      <Navbar />

      {/* Main content — all sections sit above the canvas via z-10 */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <DevWorkflow/>
        <Resume/>
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
