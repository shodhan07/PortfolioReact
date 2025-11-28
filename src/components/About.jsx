import "./About.css";

function About() {
  const education = [
    {
      year: "2021 - 2025",
      title: "New Horizon College of Engineering",
      description: "B.E in Information Science, CGPA: 9.07",
    },
    {
      year: "2020",
      title: "Alvas Education Foundation, Moodbidri",
      description: "12th Grade, 98.33%",
    },
    {
      year: "2018",
      title: "Poorna Prajna Education Centre",
      description: "10th Grade, 93.92%",
    },
  ];

  const experience = [
    {
      year: "2025 - Present",
      title: "Associate Analyst Merck",
      details: [
        "Worked on Agent creation in Copilot Studio",
        "Developed ServiceNow catalog items and scripts",
        "Worked with REST APIs, JavaScript, HTML, CSS",
      ],
    },
    {
      year: "2024 - 2025",
      title: "Internship at Merck (Intern)",
      details: [
        "Worked on K2 workflows & automation",
        "Developed ServiceNow catalog items and scripts",
        "Worked with REST APIs, JavaScript, HTML, CSS",
      ],
    },
    {
      year: "2024",
      title: "Internship at Coding Raja Technologies",
      details: [
        "Built Resume Builder & Music Player projects",
        "Worked with HTML, CSS, JS",
        "Learned real-world project workflows",
      ],
    },
  ];

  return (
    <section className="about" id="about">
      <h2 className="about-title">
        About <span>Me</span>
      </h2>

      {/* Intro */}
      <div className="about-intro">
        <p>
          Hi, I’m <span className="highlight">Shodhan A K</span>, an aspiring
          <span className="highlight"> Software Developer & Problem Solver</span>.
          I’m passionate about building modern web applications, crafting
          seamless user experiences, and solving real-world problems with code 🚀
        </p>
        <p>
          With strong foundations in <span className="highlight">C++, SQL, JavaScript</span>,
          and frameworks like <span className="highlight">React</span>,
          I thrive at the intersection of logic and creativity.
        </p>
      </div>

      {/* Timeline style split */}
      <div className="about-timeline">
        {/* Education Column */}
        <div className="timeline-column">
          <h3 className="column-title">🎓 Education</h3>
          <div className="timeline">
            {education.map((item, idx) => (
              <div
                key={idx}
                className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-content">
                  <span className="year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="timeline-column">
          <h3 className="column-title">💼 Experience</h3>
          <div className="timeline">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-content">
                  <span className="year">{item.year}</span>
                  <h4>{item.title}</h4>

                  {/* Detail box with arrow */}
                  <div className="details-box">
                    {item.details.map((detail, i) => (
                      <p key={i}>• {detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
