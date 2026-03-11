import { motion } from 'framer-motion'
import Typist from 'react-typist-component'

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-start md:justify-center items-center px-6 md:px-12 lg:px-24 xl:px-32 pt-16 md:pt-0 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 xl:gap-24 py-8 md:py-0">
          
          {/* Left side — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex flex-col text-center md:text-left max-w-2xl lg:max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 font-semibold text-base md:text-lg mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Hi, I'm Andrew 👋
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-10 md:h-14 mb-5 md:mb-6"
            >
              <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <Typist loop>
                  <span>Frontend Developer</span>
                  <Typist.Backspace count={20} />
                  <Typist.Delay ms={600} />
                  <span>React Developer</span>
                  <Typist.Backspace count={16} />
                  <Typist.Delay ms={600} />
                  <span>Copywriter</span>
                  <Typist.Backspace count={10} />
                  <Typist.Delay ms={600} />
                </Typist>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className={`text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 md:mb-10 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              I build fast, modern and responsive web experiences using React.
              With 2+ years of experience delivering real client projects,
              I turn ideas into polished digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="#projects">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View My Work
                </button>
              </a>
              <a href="#contact">
                <button className={`w-full sm:w-auto border px-8 py-3 rounded-lg font-semibold transition-colors ${darkMode ? "border-gray-600 hover:border-gray-300 text-gray-300 hover:text-white" : "border-gray-400 hover:border-gray-800 text-gray-700 hover:text-gray-900"}`}>
                  Contact Me
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side — Avatar (smaller on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex justify-center items-center py-6 md:py-0 flex-1"
          >
            <div className={`w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] shadow-2xl ${darkMode ? "bg-gradient-to-br from-blue-600 to-purple-700" : "bg-gradient-to-br from-blue-400 to-purple-500"}`}>
              👨‍💻
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

12323