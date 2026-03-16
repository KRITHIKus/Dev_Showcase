import { Terminal } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-green-matrix/10 bg-[#020c08] py-7 text-center">
      <div className="flex items-center justify-center gap-2 font-mono text-[11px] text-[#5a9e7a] tracking-widest">
        <Terminal size={12} className="text-green-matrix" />
        <span className="text-green-matrix">{personalInfo.name.toUpperCase()}</span>
        <span>—</span>
        <span>{personalInfo.title.toUpperCase()}</span>
        <span>—</span>
        <span>BENGALURU</span>
        <span className="text-green-matrix">&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
