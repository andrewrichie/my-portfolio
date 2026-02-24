import { useState } from "react"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSumbmit = (e) => {
        e.preventDefault()
        alert(`Thanks ${formData.name}! I'll get back to you shortly.`)
        console.log(formData)
    }

    return (
        <section id="contact" className="min-h-screen bg-gray-800 flex flex-col justify-center px-10 md:px-24">
            <p className="text-blue-400 font-semibold text-lg mb-3">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Contact Me</h2>

            <div className="max-w-xl">
                <div className="flex flex-col gap-2 mb-5">
                    <label className="text-gray-400 text-sm">Your Name</label>
                    <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Andrew"
                    className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-2 mb-5">
                    <label className="text-gray-400 text-sm">Email Address</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="andrew@outlook.com"
                        className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-2 mb-8">
                    <label className="text-gray-400 text-sm">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="I'd love to work with you..."
                        rows={5}
                        className="bg-gray-500 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                </div>

                <button 
                    onClick={handleSumbmit}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg"
                >
                    Send Message
                </button>
            </div>
        </section>
    )
}

export default Contact