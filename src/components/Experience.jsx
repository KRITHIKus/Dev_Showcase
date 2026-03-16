import { Award, ChevronRight, Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 bg-[#020c08]">
      <div className="max-w-6xl mx-auto px-[5vw] py-28">
        <p className="reveal font-mono text-xs text-green-matrix tracking-[5px] mb-3">// 04 — EXPERIENCE</p>
        <h2 className="reveal font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[2px] text-[#c8ffe8] mb-16 relative inline-block after:absolute after:bottom-[-10px] after:left-0 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-green-matrix after:to-blue-matrix">
          EXPERIENCE
        </h2>

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <div key={i} className="reveal relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-green-matrix/15 ml-[5px]" />
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-green-matrix shadow-[0_0_12px_#00ff88]" />

              <div className="ml-12 border border-green-matrix/15 bg-[#061410] p-8 relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-matrix/3 rounded-full blur-3xl" />

                {/* Meta row */}
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-matrix tracking-[3px]">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#5a9e7a] tracking-[2px]">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-[#c8ffe8] tracking-[1px] mb-1">
                  {exp.role.toUpperCase()}
                </h3>
                <p className="font-mono text-xs text-green-matrix tracking-[3px] mb-6">{exp.company}</p>

                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[#5a9e7a] font-body text-[0.95rem] leading-relaxed">
                      <ChevronRight size={14} className="text-green-matrix mt-1 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Certificate link */}
                <a
                  href={exp.cert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-mono text-[11px] text-blue-matrix hover:text-green-matrix tracking-[2px] no-underline transition-colors border border-blue-matrix/25 hover:border-green-matrix/40 px-4 py-2"
                >
                  <Award size={13} />
                  VIEW CERTIFICATE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
