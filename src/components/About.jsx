import './About.css'

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        {/* Left Side - Text */}
        <div className="about-text">
          <p>
            Hi, I’m <span className="highlight">Shodhan A K</span>, an aspiring 
            <span className="highlight"> Web Developer & Problem Solver</span>.  
            I’m passionate about building modern web applications, crafting 
            seamless user experiences, and solving real-world problems with code. 🚀
          </p>

          <p>
            Currently pursuing my <span className="highlight">B.E in Information Science</span>, 
            I have worked on projects ranging from 
            <span className="highlight"> full-stack apps</span> to 
            <span className="highlight"> automation workflows</span>.  
            With a strong foundation in <span className="highlight">C++, SQL, JavaScript</span>, 
            and frameworks like <span className="highlight">React & NestJS</span>, 
            I thrive at the intersection of logic and creativity.
          </p>

          <p>
            Beyond coding, I enjoy <span className="highlight">tech innovations</span>, 
            exploring <span className="highlight">startups</span>, and 
            working on ideas that create real impact. 🌟
          </p>
        </div>

        {/* Right Side - Quick Info Cards */}
        <div className="about-cards">
          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>New Horizon College of Engineering, Bengaluru</p>
            <p><strong>CGPA:</strong> 9.02</p>
          </div>

          <div className="about-card">
            <h3>💼 Experience</h3>
            <p>K2 Developer Intern @ Merck</p>
            <p>Worked on workflows, automation & SQL</p>
          </div>

          <div className="about-card">
            <h3>⚡ Interests</h3>
            <p>Web Development, AI, Problem Solving, Startups</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
