import { motion } from 'framer-motion'

const links = [
  {
    label: 'LinkedIn',
    icon: 'fab fa-linkedin',
    href: 'https://www.linkedin.com/in/shivendrabhagat/',
    color: 'hover:text-blue-500 dark:hover:text-blue-400',
  },
  {
    label: 'GitHub',
    icon: 'fab fa-github',
    href: 'https://github.com/sh1vendra',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    label: 'Email',
    icon: 'fas fa-envelope',
    href: 'mailto:shivendra@txstate.edu',
    color: 'hover:text-gold-600 dark:hover:text-gold-500',
  },
  {
    label: 'X',
    icon: 'fab fa-x-twitter',
    href: 'https://x.com/Shiv_endra_007',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-navy-900">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
          <div className="w-10 h-0.5 bg-gold-500 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-400 dark:text-white/40 mt-6 mb-12">
            Open to collaborations, internships, and full-time opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-10"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`flex flex-col items-center gap-3 text-gray-400 dark:text-white/35 ${link.color} transition-all duration-200 hover:-translate-y-1 group`}
            >
              <div className="w-14 h-14 rounded-2xl card flex items-center justify-center group-hover:border-current/20 group-hover:shadow-md transition-all duration-200">
                <i className={`${link.icon} text-2xl`} />
              </div>
              <span className="text-xs font-semibold">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
