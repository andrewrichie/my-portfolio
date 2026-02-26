import { motion } from 'framer-motion'
import Typist from 'react-typist-component'

function Hero({ darkMode }) {
  return (
    <section id="home" className={`min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}>

      {/* Left side — Text */}
      <div className="flex-1 flex flex-col justify-center py-20 md:py-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold text-base md:text-lg mb-3"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-4xl md:text-7xl font-bold mb-5 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Hi, I'm Andrew 👋
        </motion.h1>

        {/* Typing animation */}
      {/* Typing animation */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-12 md:h-14 mb-6"
            >
            <h2 className={`text-xl md:text-3xl font-light ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <Typist loop>
                <span>Frontend Developer</span>
                <Typist.Backspace count={20} />
                <Typist.Delay ms={500} />
                <span>React Developer</span>
                <Typist.Backspace count={16} />
                <Typist.Delay ms={500} />
                <span>Copywriter</span>
                <Typist.Backspace count={10} />
                <Typist.Delay ms={500} />
                </Typist>
            </h2>
            </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`text-base md:text-lg max-w-xl mb-10 ${darkMode ? "text-gray-500" : "text-gray-600"}`}
        >
          I build clean, modern web experiences using React.
          Passionate about crafting digital solutions that make an impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <a href="#projects">
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              View My Work
            </button>
          </a>
          <a href="#contact">
            <button className={`w-full md:w-auto border px-8 py-3 rounded-lg font-semibold ${darkMode ? "border-gray-600 hover:border-white text-gray-400 hover:text-white" : "border-gray-400 hover:border-gray-900 text-gray-600 hover:text-gray-900"}`}>
              Contact Me
            </button>
          </a>
        </motion.div>
      </div>

      {/* Right side — Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex-1 flex justify-center items-center py-10 md:py-0"
      >
        <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center text-8xl shadow-2xl ${darkMode ? "bg-gradient-to-br from-blue-600 to-purple-700" : "bg-gradient-to-br from-blue-400 to-purple-500"}`}>
          👨‍💻
        </div>
      </motion.div>

    </section>
  )
}

export default Hero