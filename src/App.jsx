import './App.css'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/skills'
import Contact from './components/contact'

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
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
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

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>Coming soon...</p>
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      <section id="resume" className="section">
        <h2>Resume</h2>
        <p>
          Download my resume <a href="/resume.pdf" target="_blank" rel="noreferrer">here</a>.
        </p>
      </section>
    </>
  )
}

export default App
