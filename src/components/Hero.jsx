import { Mail, Phone, Linkedin, Github, Globe, ArrowDown } from 'lucide-react'
import { personalInfo, typingPhrases } from '../data/portfolio'
import { useTyping } from '../hooks/useTyping'

export default function Hero() {
  const typed = useTyping(typingPhrases)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start px-[8vw] pt-28 pb-16 overflow-hidden z-10"
    >
      {/* Glow orbs */}
      <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-matrix/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-green-matrix/5 blur-[100px] pointer-events-none" />

      {/* Tag line */}
      <p
        className="font-mono text-xs text-green-matrix tracking-[5px] mb-5 opacity-0 animate-fadeUp"
        style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}
      >
        // MERN STACK &amp; BACKEND DEVELOPER
      </p>

      {/* Name with glitch */}
      <h1
        className="glitch font-display text-[clamp(3rem,9vw,7.5rem)] font-black leading-none tracking-[4px] mb-6 opacity-0 animate-fadeUp bg-gradient-to-r from-green-matrix to-blue-matrix bg-clip-text text-transparent"
        data-text={personalInfo.name.toUpperCase()}
        style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}
      >
        {personalInfo.name.toUpperCase()}
      </h1>

      {/* Typing */}
      <div
        className="font-mono text-[clamp(1rem,2.5vw,1.35rem)] text-blue-matrix mb-6 min-h-[2em] opacity-0 animate-fadeUp"
        style={{ animationFillMode: 'forwards', animationDelay: '0.8s' }}
      >
        &gt; {typed}
        <span className="inline-block w-[2px] h-[1.1em] bg-green-matrix ml-1 align-middle animate-blink" />
      </div>

      {/* Summary */}
      <p
        className="max-w-[600px] text-[#5a9e7a] font-body text-base leading-relaxed mb-10 opacity-0 animate-fadeUp"
        style={{ animationFillMode: 'forwards', animationDelay: '1.1s' }}
      >
        {personalInfo.summary}
      </p>

      {/* CTA buttons */}
      <div
        className="flex gap-4 flex-wrap mb-10 opacity-0 animate-fadeUp"
        style={{ animationFillMode: 'forwards', animationDelay: '1.3s' }}
      >
        <a
          href="#projects"
          className="btn-fill btn-green relative z-0 font-mono text-xs tracking-[2px] px-7 py-3.5 border border-green-matrix text-green-matrix no-underline"
        >
          VIEW PROJECTS
        </a>
        <a
          href="#contact"
          className="btn-fill btn-blue relative z-0 font-mono text-xs tracking-[2px] px-7 py-3.5 border border-blue-matrix text-blue-matrix no-underline"
        >
          CONTACT ME
        </a>
      </div>

      {/* Contact chips */}
      <div
        className="flex flex-wrap gap-3 opacity-0 animate-fadeUp"
        style={{ animationFillMode: 'forwards', animationDelay: '1.5s' }}
      >
        {[
          { icon: <Mail size={13} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
          { icon: <Phone size={13} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
          { icon: <Linkedin size={13} />, label: 'LinkedIn', href: personalInfo.linkedin },
          { icon: <Github size={13} />, label: 'GitHub', href: personalInfo.github },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-[11px] text-[#5a9e7a] border border-green-matrix/20 px-3.5 py-1.5 tracking-wide hover:border-green-matrix hover:text-green-matrix transition-all duration-200 no-underline"
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="font-mono text-[13px] text-[#5a9e7a] tracking-widest">SCROLL</span>
        <ArrowDown size={18} className="text-green-matrix animate-bounce" />
      </div>
    </section>
  )
}
