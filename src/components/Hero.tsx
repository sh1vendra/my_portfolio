import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        'Full-Stack Developer',
        'Intel Ambassador',
        'Computer Science @ Texas State University',
      ],
      typeSpeed: 40,
      backSpeed: 28,
      backDelay: 2200,
      loop: true,
      smartBackspace: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gray-50 dark:bg-navy-950 overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-light dark:dot-grid pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 dark:bg-gold-500/8 blur-3xl pointer-events-none" />

      <div className="section-container w-full relative z-10 pt-24 pb-20">
        <div className="flex items-center justify-between gap-16">
          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-xl"
          >
            <motion.p
              variants={item}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-white/35 mb-3"
            >
              Hello, I'm
            </motion.p>

            <motion.h1 variants={item} className="font-extrabold leading-[1.05] mb-5">
              <span className="text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-white dark:to-gold-400 bg-clip-text text-transparent">
                Shivendra
              </span>
              <br />
              <span className="text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-white dark:to-gold-400 bg-clip-text text-transparent">
                Bhagat
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="text-xl md:text-2xl font-bold text-gold-600 dark:text-gold-500 mb-6 min-h-[1.8em]"
            >
              <span ref={typedRef} />
            </motion.div>

            <motion.p variants={item} className="text-base text-gray-500 dark:text-white/45 mb-1.5">
              B.S. Computer Science &nbsp;&middot;&nbsp; Minor: Applied Mathematics
            </motion.p>
            <motion.p variants={item} className="text-base font-semibold text-gray-700 dark:text-white/75 mb-3">
              GPA: 3.92
            </motion.p>

            <motion.p
              variants={item}
              className="text-base italic text-gray-400 dark:text-white/30"
            >
              Building software that solves real problems.
            </motion.p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:block flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-2xl scale-110" />
              {/* Outer ring */}
              <div className="absolute -inset-1.5 rounded-full border-2 border-gold-500/30" />
              <img
                src="/assets/headshot.jpg"
                alt="Shivendra Bhagat"
                className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover object-top border-2 border-gold-500/50 relative shadow-2xl shadow-black/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
