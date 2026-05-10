import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showVolume, setShowVolume] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create audio element with a free romantic instrumental
    const audio = new Audio()
    // Using a royalty-free romantic piano music placeholder
    // Replace this URL with your preferred music file
    audio.src = 'https://cdn.pixabay.com/audio/2024/11/28/audio_3e1728df62.mp3'
    audio.loop = true
    audio.volume = volume
    audio.preload = 'none'
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        // Fade out
        const fadeOut = setInterval(() => {
          if (audio.volume > 0.05) {
            audio.volume = Math.max(0, audio.volume - 0.05)
          } else {
            clearInterval(fadeOut)
            audio.pause()
            audio.volume = volume
          }
        }, 50)
        setIsPlaying(false)
      } else {
        audio.volume = 0
        await audio.play()
        // Fade in
        const fadeIn = setInterval(() => {
          if (audio.volume < volume - 0.05) {
            audio.volume = Math.min(volume, audio.volume + 0.05)
          } else {
            audio.volume = volume
            clearInterval(fadeIn)
          }
        }, 50)
        setIsPlaying(true)
      }
    } catch (err) {
      console.log('Audio play failed:', err)
    }
  }

  return (
    <div className="music-player">
      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{
              background: 'rgba(26,10,46,0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(183,110,121,0.2)',
              borderRadius: '12px',
              padding: '12px',
              marginBottom: '8px',
            }}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              style={{
                width: '80px',
                accentColor: 'var(--rose-gold)',
                cursor: 'pointer',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        onContextMenu={e => { e.preventDefault(); setShowVolume(!showVolume) }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? '🎵' : '🎶'}
      </motion.button>

      <motion.button
        onClick={() => setShowVolume(!showVolume)}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '1px solid rgba(183,110,121,0.2)',
          background: 'rgba(26,10,46,0.6)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.5)',
          transition: 'all 0.3s ease',
        }}
        whileHover={{ scale: 1.1 }}
      >
        🔊
      </motion.button>
    </div>
  )
}
