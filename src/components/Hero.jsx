function Hero({ darkMode }) {
  return (
    <section id="home" className={`min-h-screen flex flex-col justify-center px-6 md:px-24 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}>
      <p className="text-blue-500 font-semibold text-base md:text-lg mb-3">Welcome to my portfolio</p>
      <h1 className={`text-4xl md:text-7xl font-bold mb-5 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Hi, I'm Andrew 👋
      </h1>
      <h2 className={`text-xl md:text-3xl font-light mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        Frontend Developer in Training
      </h2>
      <p className={`text-base md:text-lg max-w-xl mb-10 ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
        I build clean, modern web experiences using React.
        Passionate about learning and creating things that live on the internet.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
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
      </div>
    </section>
  )
}

export default Hero