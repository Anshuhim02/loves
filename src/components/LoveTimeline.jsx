import { motion } from 'framer-motion'

const events = [
  {
    icon: '❤️',
    title: 'When It All Began',
    date: 'The Beginning',
    description: 'Two hearts found each other — a connection so pure, it felt like destiny had been writing your story long before you even met.',
    color: '#ff6b9d',
  },
  {
    icon: '💍',
    title: 'The Promise',
    date: 'Engagement',
    description: 'A ring, a promise, a forever. The day you both said "yes" to a lifetime of love, laughter, and growing old together.',
    color: '#c471f5',
  },
  {
    icon: '👰',
    title: 'The Wedding Day',
    date: 'May 2025',
    description: 'The most magical day — when families united, pheras were taken, and two souls became one under the blessings of everyone who loves you.',
    color: '#f0d4a8',
  },
  {
    icon: '🏡',
    title: 'Building a Life Together',
    date: 'Year One',
    description: 'From small inside jokes to late-night conversations, from cooking disasters to the coziest Sunday mornings — every day became a memory worth keeping.',
    color: '#e8c4c8',
  },
  {
    icon: '🤰',
    title: 'The Greatest Surprise',
    date: 'A New Chapter',
    description: 'And then came the most beautiful news — a tiny heartbeat, a new life on the way. The family is growing, and so is all the love!',
    color: '#a8d8ea',
  },
  {
    icon: '🎉',
    title: '1st Anniversary!',
    date: 'May 2026',
    description: 'One year of being married, and already the most incredible journey. Here\'s to a million more moments of love, growth, and togetherness.',
    color: '#ff6b9d',
  },
]

export default function LoveTimeline() {
  return (
    <div
      className="section-container"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(183,110,121,0.02), transparent)',
      }}
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
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
            📖 Your Love Story
          </span>
        </motion.div>
        <h2 className="section-title">A Journey Written in the Stars</h2>
        <p className="section-subtitle" style={{ marginBottom: '0' }}>
          Every chapter of your story makes my heart swell with pride ✨
        </p>
      </motion.div>

      {/* Timeline */}
      <div style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px',
      }}>
        {/* Glowing timeline line */}
        <div className="timeline-line" />

        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              marginBottom: i < events.length - 1 ? '50px' : '0',
              flexDirection: 'row',
              paddingLeft: '0',
            }}
          >
            {/* Icon dot */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
              position: 'relative',
              zIndex: 2,
            }}>
              <motion.div
                className="timeline-dot"
                whileHover={{ scale: 1.2 }}
                style={{
                  boxShadow: `0 0 20px ${event.color}40`,
                  background: `linear-gradient(135deg, ${event.color}, ${event.color}dd)`,
                }}
              >
                {event.icon}
              </motion.div>
            </div>

            {/* Content card */}
            <motion.div
              className="glass-card"
              whileHover={{ scale: 1.02, y: -4 }}
              style={{
                padding: 'clamp(20px, 4vw, 28px)',
                flex: 1,
                borderLeft: `3px solid ${event.color}40`,
              }}
            >
              {/* Date badge */}
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: event.color,
                opacity: 0.8,
                fontWeight: 600,
              }}>
                {event.date}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '8px',
                marginTop: '4px',
              }}>
                {event.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.82rem, 2.5vw, 0.92rem)',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                fontWeight: 300,
              }}>
                {event.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
