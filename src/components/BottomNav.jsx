import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', icon: '🏠', label: 'Home' },
  { id: 'baby', icon: '👶', label: 'Baby' },
  { id: 'gallery', icon: '📸', label: 'Gallery' },
  { id: 'countdown', icon: '⏳', label: 'Timer' },
  { id: 'message', icon: '💌', label: 'Letter' },
  { id: 'finale', icon: '🎉', label: 'Celebrate' },
]

export default function BottomNav({ activeSection }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bottom-nav">
      <div className="bottom-nav-items">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`bottom-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            <motion.span
              className="nav-icon"
              animate={activeSection === item.id ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.span>
            <span>{item.label}</span>
            {activeSection === item.id && (
              <motion.div
                layoutId="activeIndicator"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '2px',
                  borderRadius: '2px',
                  background: 'var(--rose-gold)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
