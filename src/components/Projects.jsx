import { motion } from 'framer-motion'
import levyImg from '../assets/levy.png'
import gbImg from '../assets/gb.png'
import portfolioImg from '../assets/portfolio.png'

function Projects({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: "Levy Analytics",
      description: "A professional analytics platform built for real world business data tracking and visualization.",
      tech: ["React", "JavaScript", "CSS"],
      status: "Live",
      liveLink: "https://levyanalytics.com",
      githubLink: null,
      image: levyImg
    },
    {
      id: 2,
      title: "GB Portfolio",
      description: "A clean modern portfolio website designed and built for a client showcasing their work and skills.",
      tech: ["React", "Tailwind", "JavaScript"],
      status: "Live",
      liveLink: "https://gb-viz.com",
      githubLink: null,
      image: gbImg
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "My personal portfolio built with React, Tailwind CSS and Framer Motion animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
      status: "Live",
      liveLink: "#home",
      githubLink: "https://github.com/andrewrichie/my-portfolio",
      image: portfolioImg
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
            className={`rounded-xl overflow-hidden flex flex-col transition ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100 shadow-md"}`}
          >
            {/* Project Image */}
            <div className="overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`font-bold text-lg md:text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {project.title}
                  </h3>
                  <span className="text-green-400 text-xs border border-green-400 px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className={`text-xs px-3 py-1 rounded-full ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg font-semibold"
                  >
                    🌐 Live Site
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center text-sm py-2 rounded-lg font-semibold border ${darkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900"}`}
                  >
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects