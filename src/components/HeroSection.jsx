import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const touch = e.touches ? e.touches[0] : e
      setMousePos({
        x: (touch.clientX / window.innerWidth - 0.5) * 20,
        y: (touch.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('touchmove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
    }
  }, [])

  const sparkles = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  })), [])

  const floatingEmojis = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
    id: i,
    emoji: ['💕', '💖', '✨', '💗', '🌸', '💝', '💞', '🤍', '👶', '🎀'][i],
    x: Math.random() * 90 + 5,
    size: Math.random() * 16 + 14,
    delay: Math.random() * 5,
    duration: Math.random() * 7 + 7,
  })), [])

  return (
    <div
      style={{
        minHeight: '100vh',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
      }}
      className="gradient-bg"
    >
      {/* Cinematic gradient orbs */}
      <motion.div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(183,110,121,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '5%',
          left: '-15%',
        }}
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,216,234,0.07) 0%, transparent 70%)',
          filter: 'blur(70px)',
          bottom: '5%',
          right: '-10%',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Sparkles */}
      {sparkles.map(s => (
        <motion.div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: '50%',
            background: s.id % 3 === 0 ? 'var(--baby-blue-light)' : 'var(--warm-gold-light)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating emojis */}
      {floatingEmojis.map(h => (
        <motion.div
          key={h.id}
          style={{
            position: 'absolute',
            left: `${h.x}%`,
            fontSize: `${h.size}px`,
            opacity: 0.35,
            pointerEvents: 'none',
          }}
          animate={{
            y: [window.innerHeight + 50, -100],
            x: [0, Math.sin(h.id) * 40],
            rotate: [0, h.id % 2 === 0 ? 180 : -180],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {h.emoji}
        </motion.div>
      ))}

      {/* Main content with parallax */}
      <motion.div
        style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Chapter label */}
        <motion.div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(183,110,121,0.25)',
            background: 'rgba(183,110,121,0.08)',
            marginBottom: '24px',
          }}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.65rem, 2vw, 0.8rem)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 500,
          }}>
            ✨ Celebrating 1 Year of Love ✨
          </span>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          style={{
            width: '80px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--rose-gold-light), transparent)',
            margin: '0 auto 20px',
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />

        {/* Main heading */}
        <motion.h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 10vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '12px',
            background: 'linear-gradient(135deg, #fff, var(--rose-gold-light), var(--warm-gold-light), #fff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
          }}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            opacity: { delay: 0.9, duration: 1 },
            y: { delay: 0.9, duration: 1, ease: [0.23, 1, 0.32, 1] },
            scale: { delay: 0.9, duration: 1 },
            backgroundPosition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="glow-text"
        >
          Happy Anniversary
        </motion.h1>

        {/* Names with heart */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 7vw, 3.5rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, var(--rose-gold-light), var(--warm-gold-light))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Deepak
          </span>
          <motion.span
            style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)' }}
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ❤️
          </motion.span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 7vw, 3.5rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, var(--lavender-glow), var(--rose-gold-light))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Shraddha
          </span>
        </motion.div>

        {/* Theme tagline */}
        <motion.p
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1.1rem, 4vw, 1.6rem)',
            color: 'rgba(168, 216, 234, 0.8)',
            maxWidth: '600px',
            margin: '0 auto 8px',
            fontWeight: 500,
            lineHeight: 1.5,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          1 year of love ❤️ & a tiny miracle on the way 👶✨
        </motion.p>

        {/* Subtitle */}
        <motion.p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '450px',
            margin: '0 auto 12px',
            fontWeight: 300,
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        >
          A love story that's now becoming a family story.
        </motion.p>

        {/* Made by line */}
        <motion.p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.65rem, 2vw, 0.8rem)',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '36px',
            fontWeight: 400,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          With all my love — Himanshu 💕
        </motion.p>

        {/* Buttons */}
        <motion.div
          style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <a href="#baby" className="btn-premium" style={{ textDecoration: 'none' }}>
            👶 The Big News
          </a>
          <a href="#gallery" className="btn-outline" style={{ textDecoration: 'none' }}>
            📸 Memories
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Scroll to Explore
        </span>
        <motion.div
          style={{
            width: '22px',
            height: '36px',
            borderRadius: '11px',
            border: '2px solid rgba(255,255,255,0.15)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            style={{
              width: '3px',
              height: '8px',
              borderRadius: '3px',
              background: 'var(--rose-gold-light)',
            }}
            animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
