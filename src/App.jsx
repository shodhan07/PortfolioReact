import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ new state

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".Menu a");

    const handleScroll = () => {
      let current = "";

      // section highlighting
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });

      // header scroll background toggle
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Navigation */}
      <header className={`HeaderforP ${scrolled ? "scrolled" : ""}`}>
        <h1 className="Header-title">
          Shodhan A K <span>Portfolio</span>
        </h1>

        {/* ✅ Hamburger button (only shows in mobile via CSS) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* ✅ Nav menu */}
        <nav className={`Menu ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
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
      <section id="achievements" className="section">
        <Achievements />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
      <section id="footer" className="section">
        <Footer />
      </section>
    </>
  );
}

export default App;
