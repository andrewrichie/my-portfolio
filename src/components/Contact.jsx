import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert(`Thanks ${formData.name}! I'll get back to you soon.`)
  }

  return (
    <section id="contact" className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-blue-400 font-semibold text-base md:text-lg mb-3"
      >
        Get in touch
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-5xl font-bold mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <div className="flex flex-col gap-2 mb-5">
          <label className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Andrew"
            className={`px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="andrew@email.com"
            className={`px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
          />
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <label className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="I'd love to work with you..."
            rows={5}
            className={`px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg"
        >
          Send Message
        </button>
      </motion.div>
    </section>
  )
}

export default Contact