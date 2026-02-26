import { motion } from 'framer-motion'

function Stats({ darkMode }) {
  const stats = [
    { id: 1, number: "17+", label: "Projects Completed" },
    { id: 2, number: "6+", label: "Live Websites" },
    { id: 3, number: "3,000+", label: "Hours Coded" },
    { id: 4, number: "2+", label: "Years Experience" },
  ]

  return (
    <section className={`py-20 px-6 md:px-24 ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center p-6 rounded-xl text-center ${darkMode ? "bg-gray-900" : "bg-white shadow-md"}`}
          >
            <span className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
              {stat.number}
            </span>
            <span className={`text-sm md:text-base ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats