import './Home.css'
function Home() {
  return (
    <section id="home" className="hero" aria-label="Home">
      <div className="hero-bg" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Hello, I’m</p>
          <h1 className="headline">
            Shodhan A K
            <span className="headline-accent"> — Software Developer</span>
          </h1>

          <p className="subhead">
            I craft clean, scalable web apps and solve real-world problems with code.
            Focused on modern UX, performance, and reliability.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
            <a className="btn btn-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
          </div>

          <div className="hero-social" role="navigation" aria-label="Social links">
            <a href="https://github.com/your-username" aria-label="GitHub">
              {/* GitHub icon */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.09 1.86 2.86 1.32 3.56 1.01.11-.8.43-1.32.78-1.62-2.66-.3-5.46-1.33-5.46-5.91 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.59-2.8 5.6-5.47 5.9.44.38.83 1.12.83 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/your-id" aria-label="LinkedIn">
              {/* LinkedIn icon */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5Zm-.75 6.5H8v10H4.23V10ZM10 10h3.63v1.37h.05c.51-.97 1.77-1.99 3.65-1.99 3.9 0 4.62 2.57 4.62 5.9V20H18.3v-4.45c0-1.06-.02-2.43-1.48-2.43-1.49 0-1.72 1.16-1.72 2.35V20H10V10Z"/>
              </svg>
            </a>
            <a href="mailto:you@email.com" aria-label="Email">
              {/* Mail icon */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
              </svg>
            </a>
          </div>

          <div className="hero-stats" aria-label="Highlights">
            <div className="stat">
              <span className="stat-num">9.07</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat">
              <span className="stat-num">Merck</span>
              <span className="stat-label">Intern</span>
            </div>
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            {/* Replace image URL or insert <img /> inside if you prefer */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
