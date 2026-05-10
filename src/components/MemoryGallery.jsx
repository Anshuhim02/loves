import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'

const images = [
  { src: '/gallery1.png', label: 'Where It All Began', caption: 'The start of something beautiful', span: 'featured' },
  { src: '/gallery2.png', label: 'Wedding Celebrations', caption: 'A day of pure magic', span: 'tall' },
  { src: '/gallery3.png', label: 'Together Forever', caption: 'Two souls, one heart', span: 'normal' },
  { src: '/gallery4.png', label: 'Beautiful Moments', caption: 'Every moment is a treasure', span: 'wide' },
  { src: '/gallery5.png', label: 'Joy & Laughter', caption: 'The best kind of happiness', span: 'normal' },
  { src: '/gallery6.png', label: 'Family Love', caption: 'Blessed beyond measure', span: 'tall' },
  { src: '/gallery7.png', label: 'Sweet Memories', caption: 'Memories that last forever', span: 'normal' },
  { src: '/gallery8.png', label: 'Golden Moments', caption: 'Precious as gold', span: 'wide' },
  { src: '/gallery9.png', label: 'Love Story', caption: 'A love for the ages', span: 'featured' },
]

export default function MemoryGallery() {
  const [lightbox, setLightbox] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = useCallback((img, index) => {
    setLightbox(img)
    setLightboxIndex(index)
  }, [])

  const navigate = useCallback((direction) => {
    const newIndex = (lightboxIndex + direction + images.length) % images.length
    setLightboxIndex(newIndex)
    setLightbox(images[newIndex])
  }, [lightboxIndex])

  const getHeight = (span) => {
    switch(span) {
      case 'featured': return 'clamp(280px, 40vw, 420px)'
      case 'tall': return 'clamp(300px, 45vw, 400px)'
      case 'wide': return 'clamp(220px, 30vw, 300px)'
      default: return 'clamp(240px, 35vw, 320px)'
    }
  }

  return (
    <div className="section-container">
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
            📸 Cherished Moments
          </span>
        </motion.div>
        <h2 className="section-title">A Gallery of Beautiful Memories</h2>
        <p className="section-subtitle" style={{ marginBottom: '0' }}>
          Every photo tells a story, every smile captures a feeling ✨
        </p>
      </motion.div>

      {/* Masonry grid - uses all 9 images */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
        gap: '16px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="gallery-item"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            style={{
              height: getHeight(img.span),
              gridColumn: img.span === 'wide' || img.span === 'featured' ? 'span 1' : 'span 1',
              borderRadius: '16px',
              border: '1px solid rgba(183,110,121,0.12)',
            }}
            onClick={() => openLightbox(img, i)}
            whileHover={{ y: -6 }}
          >
            <img
              src={img.src}
              alt={img.label}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px',
              }}
            />
            <div className="gallery-overlay">
              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--rose-gold-light)',
                  marginBottom: '4px',
                }}>
                  {img.label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                }}>
                  {img.caption}
                </p>
              </div>
            </div>

            {/* Image number badge */}
            <motion.div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(26,10,46,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(183,110,121,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
                fontWeight: 600,
                color: 'var(--rose-gold-light)',
                fontFamily: 'var(--font-body)',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
            >
              {i + 1}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Gallery count */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          textAlign: 'center',
          marginTop: '28px',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
        }}
      >
        {images.length} beautiful memories and counting... 💕
      </motion.p>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox.src}
              src={lightbox.src}
              alt={lightbox.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close button */}
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              ✕
            </button>

            {/* Navigation arrows */}
            <button
              className="lightbox-nav prev"
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            >
              ‹
            </button>
            <button
              className="lightbox-nav next"
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
            >
              ›
            </button>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--rose-gold-light)',
                fontWeight: 600,
              }}>
                {lightbox.label}
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.4)',
                fontStyle: 'italic',
                marginTop: '4px',
              }}>
                {lightboxIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
