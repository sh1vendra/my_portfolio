import { motion } from 'framer-motion'
import { about } from '../data'

const cards = [
  {
    icon: 'fas fa-book-open',
    title: 'Courseworks Taken & Grades Earned',
    items: about.coursework,
    scrollable: true,
  },
  {
    icon: 'fas fa-trophy',
    title: 'Achievements',
    items: about.achievements,
  },
  {
    icon: 'fas fa-users',
    title: 'Involvement',
    items: about.involvement,
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-navy-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="w-10 h-0.5 bg-gold-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 hover:border-gold-500/30 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <i className={`${card.icon} text-gold-600 dark:text-gold-500 text-sm`} />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{card.title}</h3>
              </div>
              <div className={`flex flex-wrap gap-2 ${card.scrollable ? 'max-h-[260px] overflow-y-auto pr-1' : ''}`}>
                {card.items.map((pill) => (
                  <span
                    key={pill}
                    className="text-xs px-3 py-1.5 rounded-full bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] text-gray-600 dark:text-white/70 font-medium"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
