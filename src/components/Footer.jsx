import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      padding: '60px 20px 100px',
      textAlign: 'center',
      position: 'relative',
      background: 'linear-gradient(180deg, transparent, rgba(13,5,32,0.8))',
    }}>
      {/* Decorative line */}
      <div style={{
        width: '80px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--rose-gold), transparent)',
        margin: '0 auto 32px',
      }} />

      {/* Animated heart */}
      <motion.div
        style={{ fontSize: '2rem', marginBottom: '16px' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        💝
      </motion.div>

      {/* Footer heading */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
        fontWeight: 700,
        background: 'linear-gradient(135deg, var(--rose-gold-light), var(--warm-gold-light))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '8px',
      }}>
        Forever Together ❤️
      </h3>

      <p style={{
        fontFamily: 'var(--font-script)',
        fontSize: '1.1rem',
        color: 'rgba(168,216,234,0.5)',
        marginBottom: '8px',
      }}>
        Two hearts, one love, soon three 👶
      </p>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.35)',
        fontWeight: 300,
        marginBottom: '24px',
      }}>
        Handcrafted with love by Himanshu
      </p>

      {/* Decorative emojis */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {['💕', '👶', '🌹'].map((emoji, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, y: -4 }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(183,110,121,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1rem',
              background: 'rgba(255,255,255,0.03)',
              transition: 'all 0.3s ease',
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Copyright */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.7rem',
        color: 'rgba(255,255,255,0.2)',
        letterSpacing: '1px',
      }}>
        Made with 💝 for the most amazing Bhaiya & Bhabhi
      </p>

      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '100px',
        background: 'radial-gradient(ellipse, rgba(183,110,121,0.08) 0%, transparent 70%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
      }} />
    </footer>
  )
}
