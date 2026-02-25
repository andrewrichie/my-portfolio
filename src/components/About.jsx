import { motion } from 'framer-motion'

function About({ darkMode }) {
  const info = {
    name: "Andrew",
    age: "20",
    location: "Nigeria",
    experience: "Beginner",
    goal: "To become a professional Frontend Developer"
  }

  const { name, age, location, experience, goal } = info
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"]

  return (
    <section id="about" className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      
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
        className={`text-3xl md:text-5xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className={`text-base md:text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Hi! I'm {name}, a passionate developer based in {location}.
            I started my coding journey and I'm fully committed to
            growing into a professional frontend developer.
          </p>
          <p className={`text-base md:text-lg leading-relaxed mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            My goal is {goal}.
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
          <div className={`rounded-lg p-4 md:p-5 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
            <p className="text-gray-500 text-sm">Age</p>
            <p className={`font-semibold text-base md:text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>{age}</p>
          </div>
          <div className={`rounded-lg p-4 md:p-5 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
            <p className="text-gray-500 text-sm">Location</p>
            <p className={`font-semibold text-base md:text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>{location}</p>
          </div>
          <div className={`rounded-lg p-4 md:p-5 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
            <p className="text-gray-500 text-sm">Experience Level</p>
            <p className={`font-semibold text-base md:text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>{experience}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About