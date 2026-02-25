import { useState } from 'react'

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

  const inputClass = `w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`

  return (
    <section id="contact" className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <p className="text-blue-500 font-semibold text-base md:text-lg mb-3">Get in touch</p>
      <h2 className={`text-3xl md:text-5xl font-bold mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact Me</h2>

      <div className="max-w-xl w-full">
        <div className="flex flex-col gap-2 mb-5">
          <label className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Andrew" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="andrew@email.com" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <label className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="I'd love to work with you..." rows={5} className={`${inputClass} resize-none`} />
        </div>
        <button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg">
          Send Message
        </button>
      </div>
    </section>
  )
}

export default Contact