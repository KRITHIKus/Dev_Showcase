import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react'
import { personalInfo, education } from '../data/portfolio'

const stats = [
  { icon: <Code2 size={20} />, num: '3+', label: 'PROJECTS' },
  { icon: <Briefcase size={20} />, num: '1', label: 'INTERNSHIP' },
  { icon: <GraduationCap size={20} />, num: 'BCA', label: '2022–2025' },
  { icon: <MapPin size={20} />, num: 'BLR', label: 'BENGALURU' },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-[#040f0a]">
      <div className="max-w-6xl mx-auto px-[5vw] py-28">
        {/* Section header */}
        <p className="reveal font-mono text-xs text-green-matrix tracking-[5px] mb-3">// 01 — ABOUT</p>
        <h2 className="reveal font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[2px] text-[#c8ffe8] mb-16 relative inline-block after:absolute after:bottom-[-10px] after:left-0 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-green-matrix after:to-blue-matrix">
          ABOUT ME
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal space-y-5">
         <p className="text-[#5a9e7a] font-body text-[1.08rem] leading-relaxed">
  I'm a <span className="text-green-matrix font-semibold">MERN Stack Developer</span> based in Bengaluru with a strong focus on backend development. I primarily work with Node.js and Express to build REST APIs and backend services that power modern web applications.
</p>

<p className="text-[#5a9e7a] font-body text-[1.08rem] leading-relaxed">
  My work involves designing API endpoints, handling authentication, managing server-side logic, and structuring MongoDB databases for reliable data handling. On the frontend, I use React to build simple and responsive interfaces when needed.
</p>

<p className="text-[#5a9e7a] font-body text-[1.08rem] leading-relaxed">
  I’ve also experimented with integrating external APIs and building small backend services using Python and Flask for ML-based features. Currently, I’m looking for an <span className="text-green-matrix font-semibold">entry-level backend or MERN developer role</span> where I can contribute to real projects and continue improving my engineering skills.
</p>


            {/* Education block */}
            <div className="mt-8 border border-green-matrix/15 bg-[#061410] p-5">
              <div className="flex items-center gap-3 mb-1">
                <GraduationCap size={16} className="text-green-matrix" />
                <span className="font-mono text-xs text-green-matrix tracking-[3px]">EDUCATION</span>
              </div>
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="font-display text-lg text-[#c8ffe8] tracking-wide mt-2">{e.degree}</p>
                  <p className="font-mono text-sm text-[#5a9e7a] mt-1">{e.institution} — {e.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="reveal grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group border border-green-matrix/15 bg-[#061410] p-6 relative overflow-hidden transition-all duration-300 hover:border-green-matrix/50 hover:-translate-y-1"
              >
                <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-green-matrix to-blue-matrix" />
                <div className="text-green-matrix/60 group-hover:text-green-matrix transition-colors mb-3">
                  {s.icon}
                </div>
                <div className="font-display text-3xl font-bold text-green-matrix">{s.num}</div>
                <div className="font-mono text-[11px] text-[#5a9e7a] tracking-[2px] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
