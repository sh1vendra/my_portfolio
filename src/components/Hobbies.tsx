import { motion } from 'framer-motion'
import { hobbies } from '../data'

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 bg-gray-50 dark:bg-navy-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Hobbies</h2>
          <div className="w-10 h-0.5 bg-gold-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {hobbies.map((hobby, i) => (
            <motion.span
              key={hobby.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] text-gray-600 dark:text-white/65 hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gold-500/5 transition-all duration-200 cursor-default"
            >
              <span className="text-[13px]">{hobby.emoji}</span>
              {hobby.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
