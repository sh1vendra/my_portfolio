import { motion } from 'framer-motion'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-navy-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
          <div className="w-10 h-0.5 bg-gold-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-200 dark:bg-white/[0.07] md:left-4" />

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-5 w-7 h-7 rounded-full border-2 border-gold-500 bg-gray-50 dark:bg-navy-950 flex items-center justify-center md:left-0.5">
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                </div>

                {/* Card */}
                <div className="card p-6 hover:border-gold-500/25 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">
                        {job.role}
                      </h3>
                      <p className="text-gold-600 dark:text-gold-500 font-semibold text-sm mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-gray-400 dark:text-white/35 bg-gray-100 dark:bg-white/[0.05] px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-500 dark:text-white/55 leading-relaxed">
                        <span className="text-gold-500 mt-1.5 flex-shrink-0 text-[8px]">●</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
