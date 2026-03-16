import { useEffect, useRef } from 'react'
import { skills } from '../data/portfolio'

export default function Skills() {
  const barsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-fill')
            fills.forEach((fill) => {
              fill.style.width = fill.dataset.width + '%'
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    if (barsRef.current) observer.observe(barsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative z-10 bg-[#020c08]">
      <div className="max-w-6xl mx-auto px-[5vw] py-28">
        <p className="reveal font-mono text-xs text-green-matrix tracking-[5px] mb-3">// 02 — SKILLS</p>
        <h2 className="reveal font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[2px] text-[#c8ffe8] mb-16 relative inline-block after:absolute after:bottom-[-10px] after:left-0 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-green-matrix after:to-blue-matrix">
          TECHNICAL SKILLS
        </h2>

        <div ref={barsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((cat, ci) => (
            <div
              key={cat.category}
              className={`reveal reveal-delay-${ci + 1} border border-green-matrix/15 bg-[#061410] p-7 transition-all duration-300 hover:border-green-matrix/40 hover:-translate-y-1`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-matrix" />
                <span className="font-mono text-xs text-blue-matrix tracking-[3px]">{cat.category.toUpperCase()}</span>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body font-semibold text-[0.92rem] text-[#c8ffe8]">{skill.name}</span>
                      <span className="font-mono text-[11px] text-green-matrix">{skill.level}%</span>
                    </div>
                    <div className="h-[3px] bg-green-faint rounded-full overflow-hidden">
                      <div
                        className="skill-fill h-full bg-gradient-to-r from-green-matrix to-blue-matrix rounded-full"
                        data-width={skill.level}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
