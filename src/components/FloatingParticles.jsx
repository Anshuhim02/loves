import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function FloatingParticles() {
  const particles = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10,
    opacity: Math.random() * 0.12 + 0.04,
    color: ['var(--rose-gold)', 'var(--warm-gold-light)', 'var(--lavender-glow)', 'var(--neon-pink)', 'var(--baby-blue)', 'var(--baby-pink)'][Math.floor(Math.random() * 6)],
  })), [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden',
    }}>
      {particles.map(p => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            bottom: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(p.id) * 50, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
