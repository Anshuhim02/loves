import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const fullMessage = `Dear Bhaiya & Bhabhi,

It's hard to believe it's already been a year since that magical wedding day. Watching you both grow together, support each other, and build such a beautiful life fills me with so much pride and happiness.

Bhaiya, you have always been my biggest inspiration — the way you care, protect, and love is something I look up to every single day. And Bhabhi, since you became part of our family, you've brought so much warmth, laughter, and love into all our lives.

And now... a tiny miracle is on the way! I still can't believe I'm going to be a Chachu/Mama soon! 😭💕 I already know your little one is going to be the most loved, most spoiled baby ever — because look at the amazing parents they'll have.

This past year was just the beginning. Your love story is now becoming a family story, and it's the most beautiful thing I've ever seen.

I pray that your bond only gets stronger, your smiles never fade, and your family is forever blessed with health, happiness, and unconditional love.

Happy 1st Anniversary to the most incredible couple I know ❤️

Thank you for being the best Bhaiya & Bhabhi anyone could ever ask for.`

export default function LoveMessage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)
      let index = 0
      const interval = setInterval(() => {
        if (index < fullMessage.length) {
          setDisplayedText(fullMessage.slice(0, index + 1))
          index++
        } else {
          setComplete(true)
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [isInView, started])

  return (
    <div className="section-container" ref={ref} style={{
      background: 'linear-gradient(180deg, transparent, rgba(183,110,121,0.02), transparent)',
    }}>
      {/* Section heading */}
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
            💌 From the Heart
          </span>
        </motion.div>
        <h2 className="section-title">A Letter from Himanshu ❤️</h2>
        <p className="section-subtitle" style={{ marginBottom: '0' }}>
          Words I always wanted to say...
        </p>
        <div style={{
          width: '80px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--rose-gold), transparent)',
          margin: '20px auto 0',
        }} />
      </motion.div>

      {/* Message card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-strong glow-border"
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          padding: 'clamp(28px, 5vw, 52px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative corner elements */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          width: '30px',
          height: '30px',
          borderTop: '2px solid rgba(183,110,121,0.3)',
          borderLeft: '2px solid rgba(183,110,121,0.3)',
          borderRadius: '4px 0 0 0',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          width: '30px',
          height: '30px',
          borderBottom: '2px solid rgba(183,110,121,0.3)',
          borderRight: '2px solid rgba(183,110,121,0.3)',
          borderRadius: '0 0 4px 0',
        }} />

        {/* Glow orbs */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(183,110,121,0.06) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,216,234,0.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }} />

        {/* Message text */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.88rem, 2.8vw, 1.02rem)',
          lineHeight: 2,
          color: 'rgba(255,255,255,0.8)',
          whiteSpace: 'pre-line',
          position: 'relative',
          fontWeight: 300,
          letterSpacing: '0.2px',
        }}>
          {displayedText}
          {!complete && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              style={{ display: 'inline-block', width: '2px', height: '1.1em', background: 'var(--rose-gold-light)', marginLeft: '2px', verticalAlign: 'text-bottom' }}
            />
          )}
        </p>

        {/* Signature */}
        {complete && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ textAlign: 'right', marginTop: '28px' }}
          >
            <div style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--rose-gold))',
              margin: '0 0 12px auto',
            }} />
            <p style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.4rem',
              color: 'var(--rose-gold-light)',
            }}>
              With all my love,
            </p>
            <p style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.8rem',
              color: 'var(--warm-gold-light)',
              marginTop: '4px',
            }}>
              Himanshu 💝
            </p>
          </motion.div>
        )}

        {/* Floating decorations */}
        {['💕', '🌸', '✨', '👶'].map((emoji, i) => (
          <motion.span
            key={i}
            style={{
              position: 'absolute',
              fontSize: '14px',
              opacity: 0.2,
              right: `${15 + i * 20}%`,
              bottom: `${8 + i * 12}%`,
              pointerEvents: 'none',
            }}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + i,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
