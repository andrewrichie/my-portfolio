import { useState } from 'react'

function Navbar({ name, darkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`sticky top-0 z-50 border-b ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
      <div className="flex justify-between items-center px-6 py-4 md:px-16">
        <h2 className={`font-bold text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
          {name}'s Portfolio
        </h2>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          <li><a href="#home" className={`hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Home</a></li>
          <li><a href="#about" className={`hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>About</a></li>
          <li><a href="#projects" className={`hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Projects</a></li>
          <li><a href="#contact" className={`hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Contact</a></li>

          {/* Theme toggle button */}
          <li>
            <button
              onClick={toggleTheme}
              className="text-xl cursor-pointer bg-transparent border-none"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-xl">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className={`text-3xl focus:outline-none ${darkMode ? "text-white" : "text-gray-900"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className={`md:hidden border-t px-6 py-4 ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
          <ul className="flex flex-col gap-4 list-none">
            <li><a href="#home" onClick={() => setIsOpen(false)} className={`text-lg hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className={`text-lg hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className={`text-lg hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className={`text-lg hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar