import React from "react";
import "./Skills.css";
import CoLogo from "../components/CoLogo.svg";

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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt57eDHWkbWnQXyatrBc45QcUuXkorPxphml_igX7La87EK11SrUZH7a8dLzFy7IrbegE&usqp=CAU",
  },
  {
    name: "ServiceNow",
    logo: "https://cdn-public.softwarereviews.com/production/favicons/offerings/4749/original/ServiceNow_fav.png",
  },
  {
    name: "ReactJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "Copilot Studio",
    logo: CoLogo,
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  }
  , {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  }
  , {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">
        <span>My</span> Skills
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-glow"></div>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
