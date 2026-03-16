import { useState, useEffect } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Experience','Workflow','Resume', 'Contact',]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-green-matrix/15'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-display text-sm text-green-matrix tracking-[3px] no-underline"
        >
          <Terminal size={16} className="text-green-matrix" />
          KUS
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="nav-link font-mono text-xs text-[#5a9e7a] hover:text-green-matrix tracking-widest transition-colors duration-200 no-underline"
              >
                {link.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-green-matrix"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-green-matrix/15 px-6 pb-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block font-mono text-xs text-[#5a9e7a] hover:text-green-matrix tracking-widest py-3 border-b border-green-matrix/08 no-underline transition-colors"
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
