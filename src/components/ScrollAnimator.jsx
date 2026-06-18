import { useEffect, useState } from 'react'

export default function ScrollAnimator() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const raw = maxScroll > 0 ? window.scrollY / maxScroll : 0
      setScroll(Math.min(Math.max(raw, 0), 1))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const glow1Style = {
    transform: `translate3d(${(-10 + scroll * 30).toFixed(2)}%, ${(-5 - scroll * 18).toFixed(2)}%, 0)`,
    opacity: 0.08 + scroll * 0.12,
  }
  const glow2Style = {
    transform: `translate3d(${(15 - scroll * 25).toFixed(2)}%, ${(20 - scroll * 15).toFixed(2)}%, 0)`,
    opacity: 0.08 + scroll * 0.14,
  }
  const lineOpacity = 0.08 + scroll * 0.18

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div
        style={glow1Style}
        className="absolute top-0 left-0 w-[28rem] h-[28rem] sm:w-[34rem] sm:h-[34rem] md:w-[42rem] md:h-[42rem] rounded-full bg-[radial-gradient(circle,_rgba(124,58,237,0.28),_transparent_20%)] blur-3xl"
      />
      <div
        style={glow2Style}
        className="absolute bottom-0 right-0 w-[24rem] h-[24rem] sm:w-[30rem] sm:h-[30rem] md:w-[36rem] md:h-[36rem] rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.24),_transparent_25%)] blur-3xl"
      />
      <div
        style={{ opacity: lineOpacity }}
        className="absolute inset-x-0 top-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary-500/40 to-transparent blur-sm"
      />
      <div
        style={{ opacity: lineOpacity }}
        className="absolute inset-x-0 bottom-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary-600/40 to-transparent blur-sm"
      />
    </div>
  )
}
