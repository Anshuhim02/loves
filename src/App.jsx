import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import HeroSection from './components/HeroSection'
import BabyAnnouncement from './components/BabyAnnouncement'
import LoveTimeline from './components/LoveTimeline'
import MemoryGallery from './components/MemoryGallery'
import Countdown from './components/Countdown'
import LoveMessage from './components/LoveMessage'
import FinalSurprise from './components/FinalSurprise'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import BottomNav from './components/BottomNav'
import FloatingParticles from './components/FloatingParticles'

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  // Track active section for bottom nav
  const handleScroll = useCallback(() => {
    const sections = ['home', 'baby', 'timeline', 'gallery', 'countdown', 'message', 'finale']
    const scrollPos = window.scrollY + window.innerHeight / 3

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(sections[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="page-transition">
          <ScrollProgress />
          <Navbar />
          <FloatingParticles />
          
          <main>
            <section id="home">
              <HeroSection />
            </section>
            
            <section id="baby">
              <BabyAnnouncement />
            </section>

            <section id="timeline">
              <LoveTimeline />
            </section>
            
            <section id="gallery">
              <MemoryGallery />
            </section>
            
            <section id="countdown">
              <Countdown />
            </section>
            
            <section id="message">
              <LoveMessage />
            </section>
            
            <section id="finale">
              <FinalSurprise />
            </section>
          </main>

          <Footer />
          <MusicPlayer />
          <BottomNav activeSection={activeSection} />
        </div>
      )}
    </>
  )
}

export default App
