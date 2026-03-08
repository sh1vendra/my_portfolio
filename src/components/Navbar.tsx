import { useState, useEffect } from 'react'

interface NavbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMobile = () => setMobileOpen(false)

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
          href="#hero"
          className="font-extrabold text-xl text-gray-900 dark:text-white mr-auto hover:text-gold-600 dark:hover:text-gold-500 transition-colors"
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
              onClick={closeMobile}
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
