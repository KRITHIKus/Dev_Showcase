import { Mail, Phone, Linkedin, Github, Globe, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: 'EMAIL',
    value: 'krithikus2004@gmail.com',
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: 'PHONE',
    value: '+91 8618570153',
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LINKEDIN',
    value: 'Krithik US',
    href: personalInfo.linkedin,
  },
  {
    icon: <Github size={18} />,
    label: 'GITHUB',
    value: 'krithikus',
    href: personalInfo.github,
  },
 
]

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-[#040f0a]">
      <div className="max-w-6xl mx-auto px-[5vw] py-28 text-center">
        <p className="reveal font-mono text-xs text-green-matrix tracking-[5px] mb-3">// 05 — CONTACT</p>
        <h2 className="reveal font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[2px] text-[#c8ffe8] mb-4 relative inline-block after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-green-matrix after:to-blue-matrix">
          GET IN TOUCH
        </h2>

        <p className="reveal text-[#5a9e7a] font-body text-base max-w-[500px] mx-auto mt-8 mb-14 leading-relaxed">
          Open to entry-level backend and full-stack opportunities. Let's build something great together.
        </p>

        {/* Contact cards */}
        <div className="reveal flex flex-wrap justify-center gap-4 mb-14">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-green-matrix/15 bg-[#061410] px-6 py-4 no-underline group transition-all duration-300 hover:border-green-matrix/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,255,136,0.07)]"
            >
              <span className="text-green-matrix/60 group-hover:text-green-matrix transition-colors">
                {item.icon}
              </span>
              <div className="text-left">
                <div className="font-mono text-[10px] text-[#5a9e7a] tracking-[2px]">{item.label}</div>
                <div className="font-body font-semibold text-[#c8ffe8] text-sm">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-fill btn-green relative z-0 inline-flex items-center gap-3 font-mono text-xs tracking-[2px] px-8 py-4 border border-green-matrix text-green-matrix no-underline"
          >
            <Send size={14} />
            SEND A MESSAGE
          </a>
        </div>
      </div>
    </section>
  )
}
