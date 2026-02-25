import { motion } from 'framer-motion'

function Projects({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "My personal portfolio built with React and Tailwind CSS",
      tech: ["React", "Tailwind", "Vite"],
      status: "In Progress"
    },
    {
      id: 2,
      title: "Weather App",
      description: "A weather application that shows real time weather data",
      tech: ["React", "API", "CSS"],
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Todo App",
      description: "A task management app with full create and delete functionality",
      tech: ["React", "useState", "CSS"],
      status: "Coming Soon"
    },
  ]

  return (
    <section id="projects" className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-blue-400 font-semibold text-base md:text-lg mb-3"
      >
        What I've built
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-5xl font-bold mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className={`rounded-xl p-6 transition ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100 shadow-md"}`}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className={`font-bold text-lg md:text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                {project.title}
              </h3>
              <span className="text-blue-400 text-xs border border-blue-400 px-2 py-1 rounded-full">
                {project.status}
              </span>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span key={t} className={`text-xs px-3 py-1 rounded-full ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects