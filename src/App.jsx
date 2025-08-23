import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/skills'
import Contact from './components/contact'
import Projects from './components/projects'
import Achievements from './components/achievements'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".Menu a");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Navigation */}
      <header className="HeaderforP">
        <h1 className='Header-title'>Shodhan A K <span>Portfolio</span></h1>
        <nav className="Menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achivements</a>
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

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="achivements" className="section">
        <Achievements />
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
