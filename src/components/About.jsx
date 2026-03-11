import { motion } from 'framer-motion'

function About({ darkMode }) {
  const info = {
    name: "Andrew",
    focus: "Frontend Developer",
    passion: "Building clean & fast user interfaces",
    goal: "Creating digital products people love",
  }

  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Framer Motion"]

  const highlights = [
    { label: "Focus", value: info.focus },
    { label: "Passion", value: info.passion },
    { label: "Goal", value: info.goal },
  ]

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      {/* Tighter + centered container */}
      <div className="max-w-5xl mx-auto w-full">

        {/* Both tagline and heading now share the same alignment logic */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-400 font-semibold text-base md:text-lg mb-3"
          >
            Get to know me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            About Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className={`text-base md:text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Hi! I'm {info.name}, a frontend developer.
              Over the past 2 years I've designed and built 17+ projects — from analytics platforms to client portfolios — delivering clean, fast and user-focused web experiences.
            </p>
            <p className={`text-base md:text-lg leading-relaxed mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              My goal is {info.goal}.
            </p>

            <div className="mt-8">
              <h3 className={`font-bold text-lg md:text-xl mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className={`rounded-lg p-4 md:p-5 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
              >
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className={`font-semibold text-base md:text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


123123