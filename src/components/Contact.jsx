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
    // Later: replace with real fetch/email logic (Formspree, EmailJS, etc.)
  }

  // You can replace these emoji with real SVG / react-icons later


  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Main grid - 1 column on mobile, 2 columns on md+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN - Text + Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <p className="text-blue-500 font-medium text-lg md:text-xl mb-4">
              Let's create something great together
            </p>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Get in Touch
            </h2>

            <p className={`text-lg md:text-xl max-w-lg mb-10 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              I'm currently open to <span className="font-semibold text-blue-500">freelance projects</span>, interesting collaborations, 
              and full-time opportunities in frontend / React development.
            </p>

            <p className={`text-base md:text-lg mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Drop me a message — I usually reply within 24 hours.
            </p>

           

            {/* Optional extra contact info */}
            <div className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
              Or email me directly at <span className="font-medium text-blue-500">hello@yourdomain.com</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto lg:mx-0 w-full"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Andrew"
                  className={`w-full px-5 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? "bg-gray-800/70 text-white border border-gray-700" : "bg-gray-50 text-gray-900 border border-gray-200"}`}
                />
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="andrew@example.com"
                  className={`w-full px-5 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? "bg-gray-800/70 text-white border border-gray-700" : "bg-gray-50 text-gray-900 border border-gray-200"}`}
                />
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className={`w-full px-5 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${darkMode ? "bg-gray-800/70 text-white border border-gray-700" : "bg-gray-50 text-gray-900 border border-gray-200"}`}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact