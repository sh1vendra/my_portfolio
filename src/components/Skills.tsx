import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-navy-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
          <div className="w-10 h-0.5 bg-gold-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card px-6 py-4 flex items-center gap-6 hover:border-gold-500/20 transition-colors duration-300"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-600 dark:text-gold-500 w-28 flex-shrink-0">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] text-gray-600 dark:text-white/65 hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gold-500/5 transition-all duration-200 cursor-default"
                  >
                    <i className={`${skill.icon} text-[13px]`} />
                    {skill.label}
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
