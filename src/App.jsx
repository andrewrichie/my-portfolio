
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/footer'

function App() {

  return (
    <div>
      <Navbar name="Andrew" />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App