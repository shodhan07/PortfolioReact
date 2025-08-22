import './App.css'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/skills'
import Contact from './components/contact'
import Projects from './components/projects'
import Achivements from './components/achivements'
function App() {
  return (
    <>
      {/* Header Navigation */}
      <header className="HeaderforP">
        <h1>My Portfolio</h1>
        <nav className="Menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#achivements">Achivements</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Sections */}
      <section id="home" className="section">
        <Home />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      {/* Placeholder sections until you create components */}
      <section id="skills" className="section">
        <Skills/>
      </section>

      <section id="achivements" className="section">
        <Achivements />  
      </section>
      
      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

    </>
  )
}

export default App
