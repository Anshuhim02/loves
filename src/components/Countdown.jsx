import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Countdown() {
  // Anniversary date: May 2026 (adjust to exact date)
  const anniversaryDate = new Date(2025, 4, 8) // May 11, 2025 — wedding date
  
  // Baby arrival estimate — adjust as needed (example: October 2026)
  const babyDueDate = new Date(2026, 8, 5) // October 15, 2026

  const [sinceWedding, setSinceWedding] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [untilBaby, setUntilBaby] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateTimers = () => {
      const now = new Date()

      // Time since wedding
      const weddingDiff = now - anniversaryDate
      if (weddingDiff > 0) {
        setSinceWedding({
          days: Math.floor(weddingDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((weddingDiff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((weddingDiff / (1000 * 60)) % 60),
          seconds: Math.floor((weddingDiff / 1000) % 60),
        })
      }

      // Time until baby
      const babyDiff = babyDueDate - now
      if (babyDiff > 0) {
        setUntilBaby({
          days: Math.floor(babyDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((babyDiff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((babyDiff / (1000 * 60)) % 60),
          seconds: Math.floor((babyDiff / 1000) % 60),
        })
      } else {
        setUntilBaby({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimers()
    const interval = setInterval(updateTimers, 1000)
    return () => clearInterval(interval)
  }, [])

  const weddingCards = [
    { value: sinceWedding.days, label: 'Days' },
    { value: sinceWedding.hours, label: 'Hours' },
    { value: sinceWedding.minutes, label: 'Minutes' },
    { value: sinceWedding.seconds, label: 'Seconds' },
  ]

  const babyCards = [
    { value: untilBaby.days, label: 'Days' },
    { value: untilBaby.hours, label: 'Hours' },
    { value: untilBaby.minutes, label: 'Minutes' },
    { value: untilBaby.seconds, label: 'Seconds' },
  ]

  return (
    <div className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(183,110,121,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* MARRIAGE COUNTDOWN - Time Together */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <motion.div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '50px',
            border: '1px solid rgba(183,110,121,0.2)',
            background: 'rgba(183,110,121,0.05)',
            marginBottom: '20px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}>
            ⏳ Time Together
          </span>
        </motion.div>
        <h2 className="section-title">
          Married for This Many Moments ❤️
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '0' }}>
          Every second has been a blessing
        </p>
      </motion.div>

      {/* Wedding countdown cards */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(12px, 3vw, 24px)',
        flexWrap: 'wrap',
        maxWidth: '600px',
        margin: '0 auto 80px',
      }}>
        {weddingCards.map((card, i) => (
          <motion.div
            key={card.label}
            className="countdown-card glow-border"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            style={{ flex: '1 1 auto', minWidth: '70px', maxWidth: '120px' }}
          >
            <motion.div
              className="countdown-number"
              key={card.value}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {String(card.value).padStart(2, '0')}
            </motion.div>
            <div className="countdown-label">{card.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '60px',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(168,216,234,0.3))' }} />
        <motion.span
          style={{ fontSize: '2rem', display: 'inline-block' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          👶
        </motion.span>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, rgba(255,183,197,0.3), transparent)' }} />
      </motion.div>

      {/* BABY COUNTDOWN */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '12px',
          background: 'linear-gradient(135deg, var(--baby-blue-light), var(--baby-pink), var(--warm-gold-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Counting Down to the Little One 🍼
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '0', color: 'rgba(168,216,234,0.6)' }}>
          {untilBaby.days === 0 && untilBaby.hours === 0 
            ? "🎊 The little one might be here any moment! 🎊"
            : "The most exciting countdown of your lives"
          }
        </p>
      </motion.div>

      {/* Baby countdown cards */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(12px, 3vw, 24px)',
        flexWrap: 'wrap',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
        {babyCards.map((card, i) => (
          <motion.div
            key={`baby-${card.label}`}
            className="countdown-card"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            style={{
              flex: '1 1 auto',
              minWidth: '70px',
              maxWidth: '120px',
              borderColor: 'rgba(168,216,234,0.2)',
              boxShadow: '0 0 15px rgba(168,216,234,0.1), inset 0 0 15px rgba(168,216,234,0.03)',
            }}
          >
            <motion.div
              key={card.value}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--baby-blue-light), var(--baby-pink))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.2,
              }}
            >
              {String(card.value).padStart(2, '0')}
            </motion.div>
            <div className="countdown-label" style={{ color: 'rgba(168,216,234,0.5)' }}>
              {card.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom emojis */}
      <motion.div
        style={{ textAlign: 'center', marginTop: '40px' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '1.5rem' }}
        >
          {['💝', '👶', '🎀'].map((emoji, i) => (
            <motion.span
              key={i}
              style={{ display: 'inline-block' }}
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
