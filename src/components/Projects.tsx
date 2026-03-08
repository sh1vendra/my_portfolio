import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-navy-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <div className="w-10 h-0.5 bg-gold-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="card overflow-hidden group hover:border-gold-500/25 hover:shadow-xl hover:shadow-black/8 dark:hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Browser chrome */}
              <div className="bg-gray-100 dark:bg-navy-800 px-3 pt-2.5 pb-0 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 h-4 mx-2 rounded bg-gray-200 dark:bg-navy-700" />
              </div>

              {/* Screenshot */}
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-navy-800">
                <img
                  src={project.screenshot}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-base text-gray-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-white/50 border border-gray-200 dark:border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-600 dark:text-gold-500 border border-gold-500/40 hover:border-gold-500 hover:bg-gold-500/8 rounded-full px-4 py-2 transition-all duration-200"
                >
                  <i className="fab fa-github text-sm" />
                  View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
