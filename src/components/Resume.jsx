import { FileText, Download, Calendar, User, Code2 } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="relative z-10 bg-[#020c08]">
      <div className="max-w-6xl mx-auto px-[5vw] py-28 text-center">

        {/* Section header */}
        <p className="reveal font-mono text-xs text-green-matrix tracking-[5px] mb-3">// 05 — RESUME</p>
        <h2 className="reveal font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[2px] text-[#c8ffe8] mb-4 relative inline-block after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-green-matrix after:to-blue-matrix">
          MY RESUME
        </h2>

        <p className="reveal text-[#5a9e7a] font-body text-base max-w-[520px] mx-auto mt-8 mb-14 leading-relaxed">
          Download my resume to explore my experience, skills, and achievements in detail.
        </p>

        {/* Resume card */}
        <div className="reveal max-w-md mx-auto border border-green-matrix/20 bg-[#061410] p-10 relative overflow-hidden group transition-all duration-300 hover:border-green-matrix/50 hover:shadow-[0_0_60px_rgba(0,255,136,0.07)]">

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-matrix/60" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-matrix/60" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-matrix/60" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-matrix/60" />

          {/* Glow behind icon */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-28 bg-green-matrix/10 rounded-full blur-2xl pointer-events-none" />

          {/* File icon */}
          <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-6 border border-green-matrix/30 bg-green-matrix/5 group-hover:border-green-matrix/60 group-hover:bg-green-matrix/10 transition-all duration-300">
            <FileText size={28} className="text-green-matrix" />
            {/* Animated ping */}
            <span className="absolute inset-0 border border-green-matrix/20 animate-ping" style={{ animationDuration: '2.5s' }} />
          </div>

          {/* Name */}
          <h3 className="font-display text-xl font-bold text-[#c8ffe8] tracking-[2px] mb-2">
            KRITHIK US
          </h3>

          {/* Meta info */}
          <div className="space-y-1.5 mb-8">
            <div className="flex items-center justify-center gap-2 font-mono text-xs text-[#5a9e7a] tracking-wide">
              <Code2 size={12} className="text-green-matrix" />
              MERN Stack &amp; Backend Developer
            </div>
           
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-matrix/30 to-transparent mb-8" />

          {/* Download button */}
          <a
            href="/Krithik_Resume(FS).pdf"
            download="Krithik_US_Resume.pdf"
            className="btn-fill btn-green relative z-0 w-full flex items-center justify-center gap-3 font-mono text-xs tracking-[3px] px-6 py-4 border border-green-matrix text-green-matrix no-underline transition-colors duration-300"
          >
            <Download size={15} />
            DOWNLOAD RESUME
          </a>

          {/* File meta */}
          <div className="flex items-center justify-center gap-1.5 mt-4 font-mono text-[10px] text-[#3a6e52] tracking-[2px]">
            <Calendar size={10} />
            PDF &bull; LAST UPDATED: FEB 2026
          </div>
        </div>

        {/* Side note */}
        <p className="reveal font-mono text-[11px] text-[#3a6e52] tracking-[2px] mt-8">
          &gt; ALSO AVAILABLE ON{' '}
          <a
            href="https://www.linkedin.com/in/krithik-u-s-a545a4326/"
            className="text-blue-matrix hover:text-green-matrix transition-colors no-underline"
             target="_blank"
          >
            LINKEDIN
          </a>
        </p>

      </div>
    </section>
  )
}
