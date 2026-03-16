import { ExternalLink, Github, ChevronRight } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-[#040f0a]">
      <div className="max-w-6xl mx-auto px-[5vw] py-28">
        <p className="reveal font-mono text-xs text-green-matrix tracking-[5px] mb-3">// 03 — WORK</p>
        <h2 className="reveal font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[2px] text-[#c8ffe8] mb-16 relative inline-block after:absolute after:bottom-[-10px] after:left-0 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-green-matrix after:to-blue-matrix">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${i + 1} project-card border border-green-matrix/15 bg-[#061410] p-8 relative overflow-hidden group`}
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-matrix to-blue-matrix scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* Bottom-right glow */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-matrix/5 rounded-full blur-2xl pointer-events-none" />

              {/* Project number */}
              <div className="font-display text-[4rem] font-black text-green-matrix/07 leading-none mb-3 select-none">
                {project.id}
              </div>

              {/* Title */}
              <h3 className="font-display text-[1rem] font-bold text-[#c8ffe8] tracking-[1px] mb-3 leading-snug">
                {project.title.toUpperCase()}
              </h3>

              {/* Short desc */}
              <p className="text-[#5a9e7a] font-body text-[0.92rem] leading-relaxed mb-4">
                {project.short}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[#5a9e7a] font-body text-[0.88rem]">
                    <ChevronRight size={13} className="text-green-matrix mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.68rem] text-green-matrix border border-green-matrix/25 px-2.5 py-1 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5 pt-4 border-t border-green-matrix/10">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[13px] text-blue-matrix hover:text-green-matrix tracking-[2px] no-underline transition-colors"
                >
                  <ExternalLink size={13} />
                  LIVE
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[13px] text-[#5a9e7a] hover:text-green-matrix tracking-[2px] no-underline transition-colors"
                >
                  <Github size={13} />
                  SOURCE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
