import { useState, useEffect, useRef } from 'react'

interface NavbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const lockRef = useRef(false)
  const lockTimer = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (lockRef.current) return
      const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
      if (!sections.length) return

      const center = window.scrollY + window.innerHeight / 2
      let bestId = sections[0].id
      let bestDist = Infinity
      for (const s of sections) {
        const sCenter = s.offsetTop + s.offsetHeight / 2
        const dist = Math.abs(center - sCenter)
        if (dist < bestDist) {
          bestDist = dist
          bestId = s.id
        }
      }
      setActive(`#${bestId}`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const lockActive = (href: string) => {
    setActive(href)
    lockRef.current = true
    if (lockTimer.current) window.clearTimeout(lockTimer.current)
    lockTimer.current = window.setTimeout(() => {
      lockRef.current = false
    }, 900)
  }

  const closeMobile = () => setMobileOpen(false)

  const onSectionClick = (href: string) => {
    lockActive(href)
    closeMobile()
  }

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', window.location.pathname)
    lockActive('#hero')
    closeMobile()
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06] shadow-sm dark:shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center gap-6">
        <a
          href="https://shivendrabhagat.com"
          className="font-extrabold text-4xl text-gray-900 dark:text-white mr-auto hover:text-gold-600 dark:hover:text-gold-500 transition-colors"
          style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
        >
          Shivendra Bhagat
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={link.href === '#hero' ? goHome : () => onSectionClick(link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? 'text-gold-600 dark:text-gold-500 bg-gold-500/10'
                    : 'text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 dark:text-white/40 hover:text-gold-600 dark:hover:text-gold-500 hover:bg-gold-500/10 border border-black/[0.08] dark:border-white/[0.08] transition-all duration-200 text-sm"
        >
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06] px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.href === '#hero' ? goHome : () => onSectionClick(link.href)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active === link.href
                  ? 'text-gold-600 dark:text-gold-500 bg-gold-500/10'
                  : 'text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
