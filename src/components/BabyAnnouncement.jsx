import { motion, useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'

export default function BabyAnnouncement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const floatingItems = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    emoji: ['👶', '🍼', '🧸', '🎀', '⭐', '🌙', '💫', '🤍', '🌸', '✨'][i % 10],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 18 + 10,
    delay: Math.random() * 6,
    duration: Math.random() * 8 + 6,
  })), [])

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 20px',
        background: 'linear-gradient(180deg, var(--deep-purple), #1e0f35 40%, #0d1a2e 70%, var(--deep-purple))',
      }}
    >
      {/* Soft glow orbs - baby themed */}
      <div className="baby-glow-orb" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(168,216,234,0.08) 0%, transparent 70%)',
        top: '10%', left: '-5%',
      }} />
      <div className="baby-glow-orb" style={{
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(255,183,197,0.08) 0%, transparent 70%)',
        bottom: '10%', right: '-5%',
        animationDelay: '3s',
      }} />
      <div className="baby-glow-orb" style={{
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(240,212,168,0.06) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        animationDelay: '5s',
      }} />

      {/* Floating baby-themed emojis */}
      {floatingItems.map(item => (
        <motion.div
          key={item.id}
          style={{
            position: 'absolute',
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            opacity: 0.2,
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(item.id * 0.5) * 20, 0],
            rotate: [0, item.id % 2 === 0 ? 15 : -15, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
          maxWidth: '700px',
        }}
      >
        {/* Tiny label */}
        <motion.div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '50px',
            border: '1px solid rgba(168,216,234,0.25)',
            background: 'rgba(168,216,234,0.06)',
            marginBottom: '28px',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(168,216,234,0.8)',
            fontWeight: 500,
          }}>
            A New Chapter Begins
          </span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            ✨
          </motion.span>
        </motion.div>

        {/* Baby emoji with glow */}
        <motion.div
          style={{ 
            fontSize: 'clamp(4rem, 15vw, 7rem)', 
            marginBottom: '20px',
            filter: 'drop-shadow(0 0 30px rgba(168,216,234,0.3))',
          }}
          initial={{ scale: 0, opacity: 0, rotate: -20 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.5 }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            👶
          </motion.span>
        </motion.div>

        {/* Main announcement heading */}
        <motion.h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 7vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, var(--baby-blue-light), var(--baby-pink), var(--warm-gold-light), var(--baby-blue-light))',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5 },
            y: { duration: 0.8, delay: 0.5 },
            backgroundPosition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          A Tiny Miracle
          <br />
          Is on the Way!
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
            color: 'rgba(255,183,197,0.8)',
            marginBottom: '28px',
            fontWeight: 500,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          From two hearts to three... the most beautiful chapter yet 💕
        </motion.p>

        {/* Glass card message */}
        <motion.div
          className="glass-card glow-baby"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            padding: 'clamp(28px, 5vw, 44px)',
            maxWidth: '550px',
            margin: '0 auto',
            borderColor: 'rgba(168,216,234,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner decorations */}
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            width: '24px', height: '24px',
            borderTop: '2px solid rgba(168,216,234,0.25)',
            borderLeft: '2px solid rgba(168,216,234,0.25)',
            borderRadius: '3px 0 0 0',
          }} />
          <div style={{
            position: 'absolute', bottom: '14px', right: '14px',
            width: '24px', height: '24px',
            borderBottom: '2px solid rgba(255,183,197,0.25)',
            borderRight: '2px solid rgba(255,183,197,0.25)',
            borderRadius: '0 0 3px 0',
          }} />

          <motion.p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: '16px',
            }}
          >
            This anniversary isn't just about celebrating 1 beautiful year of togetherness —
            it's about welcoming a new life, a new heartbeat, a new reason to smile every single day.
          </motion.p>

          <motion.p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: '20px',
            }}
          >
            Bhaiya, Bhabhi — your family is growing, and so is all the love around you. 
            I can already imagine how amazing parents you both will be! 🤍
          </motion.p>

          {/* Decorative divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ width: '30px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(168,216,234,0.4))' }} />
            <motion.span
              style={{ fontSize: '1.3rem' }}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              🧸
            </motion.span>
            <div style={{ width: '30px', height: '1px', background: 'linear-gradient(90deg, rgba(255,183,197,0.4), transparent)' }} />
          </div>

          {/* Little prayer */}
          <motion.p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
              fontStyle: 'italic',
              color: 'var(--baby-blue-light)',
              lineHeight: 1.7,
            }}
          >
            May your little one bring you infinite joy,
            <br />
            sleepless nights full of love, and a
            <br />
            forever kind of happiness 👶💕
          </motion.p>
        </motion.div>

        {/* Bottom decorative emojis */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '36px',
            fontSize: '1.8rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {['🍼', '👣', '🧸', '🌟', '🎀'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -8, 0],
                rotate: [0, i % 2 === 0 ? 10 : -10, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ display: 'inline-block', opacity: 0.6 }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
