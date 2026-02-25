import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => setDarkMode(!darkMode)

  return (
    <div className={darkMode ? "bg-gray-950" : "bg-gray-50"}>
      <Navbar name="Andrew" darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App