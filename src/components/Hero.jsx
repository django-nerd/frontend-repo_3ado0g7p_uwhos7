import { useEffect, useState, useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero({ theme = 'dark' }) {
  const [loaded, setLoaded] = useState(false)
  const isDark = theme === 'dark'
  const { scrollYProgress } = useScroll()

  // Scroll-driven transforms for narrative
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.2, 0.6, 0.9, 0.6, 0.3])
  const mergeProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1])
  const blurAmount = useTransform(scrollYProgress, [0, 0.7, 1], [0, 2, 6])

  const gradientOverlay = useMemo(() => (
    isDark
      ? 'from-[#0B1020]/60 via-[#060810]/40 to-[#000000]/60'
      : 'from-white/30 via-white/10 to-white/30'
  ), [isDark])

  return (
    <section className={`relative min-h-[120vh] w-full ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} onLoad={() => setLoaded(true)} />
      </div>

      {/* Premium gradient and vignette overlays */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${gradientOverlay}`}></div>
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 40% at 50% 30%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)' }}></div>

      {/* Narrative UI Layer */}
      <div className="relative z-20 pt-32 sm:pt-36 md:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_2px_rgba(250,204,21,0.7)]"></span>
              <span className="opacity-80">Human intuition</span>
              <span className="mx-2 opacity-30">×</span>
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.6)]"></span>
              <span className="opacity-80">AI precision</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Command Symbiosis
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl">
              Two powerful intelligences come together to create knowledge neither could achieve alone. A platform for leaders who design the future with purpose.
            </p>
          </motion.div>

          {/* Fusion indicator */}
          <motion.div style={{ opacity: glowOpacity, filter: blurAmount.to(v => `blur(${v}px)`) }} className="mt-10 flex items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-yellow-400/70 via-white/50 to-sky-400/70 shadow-[0_0_40px_4px_rgba(255,255,255,0.15)]" />
          </motion.div>

          {/* Storytelling checkpoints */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[{
              title: 'Human',
              desc: 'Warm judgement. Strategic taste. Context across decades.',
              color: 'from-yellow-400/20 to-yellow-300/0'
            }, {
              title: 'AI',
              desc: 'Relentless precision. Pattern detection. Infinite patience.',
              color: 'from-sky-400/20 to-sky-300/0'
            }, {
              title: 'Fusion',
              desc: 'A higher intelligence emerges — measured, calm, unstoppable.',
              color: 'from-indigo-400/20 to-indigo-300/0'
            }].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl overflow-hidden"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${card.color}`} />
                <div className="relative z-10">
                  <div className="text-sm uppercase tracking-wide text-white/70">{card.title}</div>
                  <div className="mt-2 text-sm text-white/70">{card.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div id="request" className="mt-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
            >
              <div>
                <div className="text-sm font-medium">Private alpha access</div>
                <div className="text-xs text-white/60">For global leaders shaping AI policy and P&L</div>
              </div>
              <a href="#" className="ml-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100">Request Invite</a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle merge beams left/right to center */}
      <motion.div
        aria-hidden
        style={{ opacity: mergeProgress }}
        className="pointer-events-none absolute inset-x-0 top-1/3 h-20"
      >
        <div className="relative h-full">
          <div className="absolute left-0 top-1/2 h-[2px] w-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400/0 via-yellow-300/60 to-yellow-300/0 blur-[1px]" />
          <div className="absolute right-0 top-1/2 h-[2px] w-1/2 -translate-y-1/2 bg-gradient-to-l from-sky-400/0 via-sky-300/60 to-sky-300/0 blur-[1px]" />
        </div>
      </motion.div>
    </section>
  )
}
