import React from "react";
import "./skills.css";

const skills = [
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "MS SQL",
    logo: "https://img.icons8.com/color/96/microsoft-sql-server.png",
  },
  {
    name: "Nintex K2 Automation",
    logo: "https://seeklogo.com/images/N/nintex-k2-logo-43F5678C2D-seeklogo.com.png",
  },
  {
    name: "ServiceNow",
    logo: "https://cdn.worldvectorlogo.com/logos/servicenow-1.svg",
  },
  {
    name: "ReactJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">⚡ My Skills</h2>
      <div className="skills-timeline">
        <div className="timeline-line"></div>
        {skills.map((skill, index) => (
          <div className="timeline-skill" key={index}>
            <div className="timeline-node">
              <img
                src={skill.logo}
                alt={skill.name}
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                }}
              />
            </div>
            <div className="timeline-label">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;