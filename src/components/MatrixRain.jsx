import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコ'
    const fontSize = 17
    let columns = Math.floor(canvas.width / fontSize)
    let drops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(2,12,8,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px "Share Tech Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Gradient: bright at head, fade to dim
        if (drops[i] * fontSize > canvas.height * 0.8) {
          ctx.fillStyle = '#003322'
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff'
        } else {
          ctx.fillStyle = '#00ff88'
        }

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="matrix-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
