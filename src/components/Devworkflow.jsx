import {
  Search,
  PenSquare,
  ServerCog,
  Layout,
  FlaskConical,
  Rocket,
  ExternalLink,
} from 'lucide-react'

const stages = [
  {
    num: '01',
    icon: <Search size={20} />,
    title: 'Understand the Problem',
    desc: 'Clarify requirements, identify constraints, and define what the application needs to do before touching the codebase.',
  },
  {
    num: '02',
    icon: <PenSquare size={20} />,
    title: 'Plan & System Design',
    desc: 'Define data models, API contracts, Git branch strategy (dev / main), and folder structure before writing any logic.',
  },
  {
    num: '03',
    icon: <ServerCog size={20} />,
    title: 'Backend & API Development',
    desc: 'Build and test RESTful endpoints with Postman — validating responses, error handling, and status codes at each step.',
  },
  {
    num: '04',
    icon: <Layout size={20} />,
    title: 'Frontend Integration',
    desc: 'Connect the UI to backend APIs, verify data rendering, handle edge cases, and confirm responsiveness across devices.',
  },
  {
    num: '05',
    icon: <FlaskConical size={20} />,
    title: 'Testing & Debugging',
    desc: 'Run full application tests across normal flows, error states, and network conditions before merging dev into main.',
  },
  {
    num: '06',
    icon: <Rocket size={20} />,
    title: 'Deployment & Verification',
    desc: 'Deploy backend as a web service and frontend as a static site, then verify all APIs and UI work correctly in production.',
  },
]

export default function DevWorkflow() {
  return (
    <section id="workflow" className="relative z-10 bg-[#040f0a]">
      <div className="max-w-6xl mx-auto px-[5vw] py-28">

        {/* Header */}
        <p className="reveal font-mono text-xs text-green-matrix tracking-[5px] mb-3">
          // 05 — PROCESS
        </p>
        <h2 className="reveal font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[2px] text-[#c8ffe8] mb-4 relative inline-block after:absolute after:bottom-[-10px] after:left-0 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-green-matrix after:to-blue-matrix">
          DEVELOPMENT WORKFLOW
        </h2>

        <p className="reveal text-[#5a9e7a] font-body text-base leading-relaxed max-w-[580px] mt-8 mb-16">
          A structured process followed on every project — from understanding the requirement
          to verifying a stable production deployment.
        </p>

        {/* Stage grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              className={`reveal reveal-delay-${(i % 3) + 1} group border border-green-matrix/15 bg-[#061410] p-7 relative overflow-hidden transition-all duration-300 hover:border-green-matrix/45 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,255,136,0.06)]`}
            >
              {/* Hover left accent bar */}
              <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-green-matrix/0 via-green-matrix/60 to-green-matrix/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Watermark number */}
              <div className="absolute top-3 right-4 font-display text-[3.8rem] font-black text-green-matrix/[0.09] leading-none select-none pointer-events-none">
                {stage.num}
              </div>

              {/* Icon + step badge */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center justify-center w-10 h-10 border border-green-matrix/25 bg-green-matrix/5 text-green-matrix group-hover:border-green-matrix/50 group-hover:bg-green-matrix/10 transition-all duration-300">
                  {stage.icon}
                </div>
                <span className="font-mono text-[10px] text-[#e9eeeb] tracking-[3px]">
                  STEP {stage.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-[0.8rem] font-bold text-[#c8ffe8] tracking-[1.5px] mb-3 leading-snug">
                {stage.title.toUpperCase()}
              </h3>

              {/* Description */}
              <p className="font-body text-[0.9rem] text-[#5a9e7a] leading-relaxed">
                {stage.desc}
              </p>

              {/* Connector arrow — desktop only, skip last in each row */}
              {i < stages.length - 1 && (i + 1) % 3 !== 0 && (
                <div className="hidden lg:flex absolute -right-[10px] top-1/2 -translate-y-1/2 z-10 items-center">
                  <div className="w-4 h-[1px] bg-green-matrix/25" />
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-green-matrix/35" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="reveal w-full h-[1px] bg-gradient-to-r from-transparent via-green-matrix/20 to-transparent mb-10" />

        {/* DevOps practices strip */}
        <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {[
            { label: 'Version Control', val: 'Git — dev / main' },
            { label: 'API Testing',     val: 'Postman / Insomnia' },
            { label: 'Frontend Deploy', val: 'Render' },
            { label: 'Backend Deploy',  val: 'Render' },
            { label: 'CI Strategy',     val: 'Frequent dev commits' },
            { label: 'Monitoring',      val: 'Manual post-deploy' },
          ].map((item) => (
            <div key={item.label} className="border border-green-matrix/10 bg-[#061410] px-4 py-3 text-center">
              <div className="font-mono text-[9px] text-[#3a6e52] tracking-[2px] mb-1">
                {item.label.toUpperCase()}
              </div>
              <div className="font-body font-semibold text-[0.8rem] text-[#c8ffe8]">
                {item.val}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal flex justify-center">
          <a
            href="https://a2d-blog.onrender.com/dashboard/post/behind-the-software"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill btn-green relative z-0 inline-flex items-center gap-3 font-mono text-xs tracking-[3px] px-8 py-4 border border-green-matrix text-green-matrix no-underline"
          >
            <ExternalLink size={14} />
            VIEW FULL WORKFLOW GUIDE
          </a>
        </div>

      </div>
    </section>
  )
}