import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

const loadingMessages = [
  "Unwrapping a surprise...",
  "Gathering all the love...",
  "Sprinkling some magic...",
  "Almost ready..."
]

const floatingEmojis = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  emoji: ['💕', '👶', '✨', '💗', '🌸', '💝', '🍼', '🤍', '💞', '🎀', '⭐', '🌙', '💫', '🧸', '🌹', '🪷'][i],
  size: Math.random() * 20 + 12,
  x: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 5 + 5,
}))

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + Math.random() * 6 + 1.5
      })
    }, 130)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(prev => (prev + 1) % loadingMessages.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Floating emojis background */}
      {floatingEmojis.map(h => (
        <motion.div
          key={h.id}
          style={{
            position: 'absolute',
            left: `${h.x}%`,
            bottom: '-30px',
            fontSize: `${h.size}px`,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            rotate: [0, h.id % 2 === 0 ? 360 : -360],
            opacity: [0.25, 0.5, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          {h.emoji}
        </motion.div>
      ))}

      {/* Central glow orb */}
      <motion.div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(183,110,121,0.12) 0%, rgba(168,216,234,0.06) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Ring animation */}
      <motion.div
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(183,110,121,0.15)',
        }}
        animate={{
          scale: [0.5, 2, 0.5],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Heart + Baby combo icon */}
      <motion.div
        style={{ fontSize: '3.5rem', marginBottom: '20px', position: 'relative' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
      >
        <motion.span
          style={{ display: 'inline-block' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          💝
        </motion.span>
        <motion.span
          style={{ position: 'absolute', bottom: '-8px', right: '-14px', fontSize: '1.6rem' }}
          animate={{ y: [0, -4, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          👶
        </motion.span>
      </motion.div>

      {/* Loading text */}
      <motion.p
        className="loading-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Preparing something beautiful for
      </motion.p>
      <motion.p
        className="loading-text"
        style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', marginTop: '8px', fontWeight: 700 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Bhaiya & Bhabhi ❤️
      </motion.p>

      {/* Sub line */}
      <motion.p
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(1rem, 3vw, 1.3rem)',
          color: 'rgba(168, 216, 234, 0.7)',
          marginTop: '8px',
          fontWeight: 400,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        1 year of love & a tiny miracle on the way ✨
      </motion.p>

      {/* Progress bar */}
      <div className="loading-bar-container" style={{ marginTop: '40px' }}>
        <motion.div
          className="loading-bar"
          initial={{ width: '0%' }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Dynamic loading message */}
      <motion.p
        key={msgIndex}
        style={{
          marginTop: '14px',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-body)',
        }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4 }}
      >
        {loadingMessages[msgIndex]}
      </motion.p>

      {/* Made by credit */}
      <motion.p
        style={{
          position: 'absolute',
          bottom: '30px',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.2)',
          fontFamily: 'var(--font-body)',
          letterSpacing: '1px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Crafted with love by Himanshu 💕
      </motion.p>
    </motion.div>
  )
}
