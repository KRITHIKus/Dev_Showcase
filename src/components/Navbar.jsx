import { useState, useEffect } from 'react'
import { Menu, X, Terminal, Home, User, Zap, FolderOpen, Briefcase, GitBranch, FileText, Mail } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Workflow', 'Resume', 'Contact']

const DOCK_ITEMS = [
  { id: 'hero',       icon: Home },
  { id: 'about',      icon: User },
  { id: 'skills',     icon: Zap },
  { id: 'projects',   icon: FolderOpen },
  { id: 'experience', icon: Briefcase },
  { id: 'workflow',   icon: GitBranch },
  { id: 'resume',     icon: FileText },
  { id: 'contact',    icon: Mail },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── DESKTOP: Traditional top navbar ── */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-green-matrix/15'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-display text-sm text-green-matrix tracking-[3px] no-underline"
          >
            <Terminal size={16} className="text-green-matrix" />
            KUS
          </a>
          <ul className="flex items-center gap-8 list-none">
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
        </div>
      </nav>

      {/* ── MOBILE: Top bar with hamburger (kept for logo + drawer) ── */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-green-matrix/15'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-display text-sm text-green-matrix tracking-[3px] no-underline"
          >
            <Terminal size={16} className="text-green-matrix" />
            KUS
          </a>
        
        </div>
       
      </nav>

      {/* ── MOBILE ONLY: Floating bottom dock — icons only, blur background ── */}
      <style>{`
        @keyframes dockUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .dock-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          border: none;
          background: blur;
          border-radius: 9999px;
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24'%3E%3Cpolygon points='2,2 2,18 7,13 10,20 13,19 10,12 16,12' fill='%2300cfff' stroke='%23001833' stroke-width='1'/%3E%3Ccircle cx='18' cy='18' r='4' fill='%2300ff88' opacity='0.8'/%3E%3C/svg%3E") 2 2, pointer;
          color: #5a9e7a;
          transition: color 0.2s ease, background 0.2s ease, transform 0.18s ease;
          flex: 1;
          width: 100%;
          position: relative;
        }
        .dock-btn:hover {
          color: #00ff88;
          transform: translateY(-2px);
        }
        .dock-btn.dock-active {
          color: #00ff88;
        }
        .dock-btn.dock-active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 6px #00ff88;
        }
      `}</style>

      <nav
        className="md:hidden"
        aria-label="Mobile floating dock"
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9998,
          width: 'calc(100vw - 32px)',
          animation: 'dockUp 0.5s 0.3s cubic-bezier(.4,0,.2,1) both',
        }}
      >
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            listStyle: 'none',
            margin: 0,
            padding: '4px 6px',
            background: 'rgba(2, 12, 8, 0.45)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(0,255,136,0.12)',
            borderRadius: '20px',
            boxShadow:
              '0 0 0 1px rgba(0,255,136,0.04) inset, 0 8px 32px rgba(0,0,0,0.45), 0 0 18px rgba(0,255,136,0.03)',
          }}
        >
          {DOCK_ITEMS.map(({ id, icon: Icon }) => {
            const isActive = active === id
            return (
              <li key={id} style={{ flex: 1 }}>
                <button
                  className={`dock-btn${isActive ? ' dock-active' : ''}`}
                  onClick={() => scrollTo(id)}
                  aria-label={id}
                  title={id}
                >
                  <Icon
                    size={18}
                    strokeWidth={isActive ? 2 : 1.5}
                    style={{
                      filter: isActive ? 'drop-shadow(0 0 5px #00ff88)' : 'none',
                      transition: 'filter 0.2s ease',
                    }}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}