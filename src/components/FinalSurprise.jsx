import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useMemo } from 'react'
import confetti from 'canvas-confetti'

export default function FinalSurprise() {
  const [showPopup, setShowPopup] = useState(false)
  const [celebrated, setCelebrated] = useState(false)

  const triggerCelebration = useCallback(() => {
    setCelebrated(true)
    const colors = ['#b76e79','#ff6b9d','#f0d4a8','#c471f5','#e8c4c8','#ffd700','#a8d8ea','#ffb7c5']
    confetti({ particleCount: 150, spread: 120, origin: { y: 0.6 }, colors, ticks: 200 })
    const end = Date.now() + 5000
    const frame = () => {
      confetti({ particleCount: 4, angle: 60, spread: 80, origin: { x: 0, y: 0.7 }, colors })
      confetti({ particleCount: 4, angle: 120, spread: 80, origin: { x: 1, y: 0.7 }, colors })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 100, origin: { y: 0.5, x: 0.3 }, colors })
      confetti({ particleCount: 80, spread: 100, origin: { y: 0.5, x: 0.7 }, colors })
    }, 1500)
    setTimeout(() => setShowPopup(true), 800)
  }, [])

  const particles = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: i, x: Math.random()*100, y: Math.random()*100, size: Math.random()*4+1,
    delay: Math.random()*5, duration: Math.random()*5+3,
    color: ['#b76e79','#ff6b9d','#f0d4a8','#c471f5','#ffd700','#a8d8ea'][Math.floor(Math.random()*6)],
  })), [])

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', padding:'40px 20px', background:'linear-gradient(180deg, var(--deep-purple), #0d0520, #0a0318)' }}>
      {particles.map(p => (
        <motion.div key={p.id} style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`, width:`${p.size}px`, height:`${p.size}px`, borderRadius:'50%', background:p.color, pointerEvents:'none' }}
          animate={{ opacity:[0,0.8,0], scale:[0,1.5,0], y:[0,-60,0] }}
          transition={{ duration:p.duration, delay:p.delay, repeat:Infinity, ease:'easeInOut' }} />
      ))}

      <motion.div style={{ position:'absolute', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(183,110,121,0.08) 0%, transparent 70%)', filter:'blur(80px)', top:'20%', left:'30%', pointerEvents:'none' }}
        animate={{ scale:[1,1.3,1], opacity:[0.3,0.5,0.3] }} transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }} />

      <motion.div style={{ textAlign:'center', position:'relative', zIndex:10, maxWidth:'650px' }}
        initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1 }}>
        
        <motion.div style={{ fontSize:'3.5rem', marginBottom:'16px' }}
          animate={{ rotate:[0,10,-10,0], scale:[1,1.1,1] }} transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}>🎊</motion.div>

        <motion.h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,8vw,4rem)', fontWeight:700, lineHeight:1.15, marginBottom:'16px', background:'linear-gradient(135deg, #fff, var(--rose-gold-light), var(--warm-gold-light), #fff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', backgroundSize:'200% 200%' }}
          className="glow-text" animate={{ backgroundPosition:['0% 0%','100% 100%','0% 0%'] }}
          transition={{ backgroundPosition:{ duration:6, repeat:Infinity, ease:'easeInOut' } }}>
          Happy Anniversary<br/>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'10px', flexWrap:'wrap', justifyContent:'center' }}>
            Bhaiya <motion.span style={{ display:'inline-block', fontSize:'clamp(1.5rem,5vw,2.5rem)' }} animate={{ scale:[1,1.3,1] }} transition={{ duration:1.5, repeat:Infinity }}>❤️</motion.span> Bhabhi
          </span>
        </motion.h2>

        <motion.p style={{ fontFamily:'var(--font-script)', fontSize:'clamp(1rem,3.5vw,1.4rem)', color:'rgba(168,216,234,0.7)', fontWeight:500, marginBottom:'28px', lineHeight:1.6 }}
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.3, duration:0.8 }}>
          1 year of love, and a lifetime of beautiful moments ahead 👶✨
        </motion.p>

        <motion.div className="glass-card" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.5, duration:0.8 }}
          style={{ padding:'clamp(24px,5vw,40px)', marginBottom:'36px', textAlign:'center', borderColor:'rgba(183,110,121,0.2)' }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'clamp(0.85rem,2.5vw,1rem)', color:'rgba(255,255,255,0.7)', lineHeight:1.9, fontWeight:300 }}>
            Thank you for showing our entire family what true love looks like.<br/>
            Your journey from two hearts to a growing family is nothing short of magical.<br/>
            May every year bring you closer, stronger, and happier.
          </p>
          <div style={{ width:'50px', height:'1px', background:'linear-gradient(90deg, transparent, var(--rose-gold), transparent)', margin:'20px auto' }} />
          <p style={{ fontFamily:'var(--font-script)', fontSize:'clamp(1.1rem,3vw,1.4rem)', color:'var(--rose-gold-light)' }}>Your proudest younger brother,</p>
          <p style={{ fontFamily:'var(--font-script)', fontSize:'clamp(1.3rem,4vw,1.7rem)', color:'var(--warm-gold-light)', marginTop:'4px' }}>Himanshu ❤️</p>
        </motion.div>

        <motion.button className="btn-premium" onClick={triggerCelebration} whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.7, duration:0.6 }}
          style={{ fontSize:'1.05rem', padding:'16px 44px', background: celebrated ? 'linear-gradient(135deg, var(--warm-gold), var(--rose-gold))' : 'linear-gradient(135deg, var(--rose-gold), var(--neon-pink), var(--neon-purple))', backgroundSize:'200% 200%', animation:'gradientShift 4s ease infinite' }}>
          {celebrated ? '🎊 Celebrate Again!' : '🎉 Celebrate Forever!'}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.8 }}
            transition={{ type:'spring', damping:20 }}
            style={{ position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:99999, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(12px)', padding:'20px' }}
            onClick={() => setShowPopup(false)}>
            <motion.div className="glass-strong glow-neon" style={{ padding:'clamp(32px,6vw,52px)', textAlign:'center', maxWidth:'420px', width:'100%' }}
              initial={{ y:30 }} animate={{ y:0 }} onClick={e => e.stopPropagation()}>
              <motion.div style={{ fontSize:'3.5rem', marginBottom:'16px' }} animate={{ scale:[1,1.2,1], rotate:[0,10,-10,0] }} transition={{ duration:2, repeat:Infinity }}>🎊</motion.div>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,4vw,1.8rem)', fontWeight:700, marginBottom:'8px', background:'linear-gradient(135deg, var(--rose-gold-light), var(--warm-gold-light))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Happy 1st Anniversary!</h3>
              <p style={{ fontFamily:'var(--font-script)', fontSize:'clamp(1rem,3vw,1.3rem)', color:'rgba(168,216,234,0.8)', marginBottom:'12px' }}>Bhaiya & Bhabhi ❤️</p>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.88rem', color:'rgba(255,255,255,0.6)', fontWeight:300, lineHeight:1.7 }}>
                May your love story keep getting more beautiful with every passing day. And may the little one bring you a world of happiness! 👶💕</p>
              <div style={{ display:'flex', justifyContent:'center', gap:'12px', marginTop:'20px', fontSize:'1.5rem' }}>
                {['❤️','👶','✨','🎉','💕'].map((e,i) => (
                  <motion.span key={i} animate={{ y:[0,-6,0] }} transition={{ duration:1.5, delay:i*0.15, repeat:Infinity }}>{e}</motion.span>
                ))}
              </div>
              <motion.button className="btn-outline" style={{ marginTop:'24px', fontSize:'0.85rem' }}
                onClick={() => setShowPopup(false)} whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}>Close with Love 💝</motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
