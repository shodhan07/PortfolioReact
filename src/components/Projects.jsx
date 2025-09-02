import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "RoomExpense Tracker",
    description: "Room Expense Tracker helps users log daily expenses, split costs, and view clear summaries for easy and transparent money management.",
    link: ""
  },
  {
    title: "XWeather",
    description: "XWeather is an automated weather update app that fetches real-time weather data for a given location using a weather API and posts daily updates on X (Twitter) via the X API.",
    link: ""
  },
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and achievements, built with a clean design to highlight my work in web development and problem-solving.",
    link: ""
  },
  {
    title: "Hospital Management System",
    description: "Full-stack system to manage patients, doctors, and records.",
    link: ""
  }
];

const Project = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="project-title">
        <span>My</span> Projects
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner">
              {/* Front side */}
              <div className="card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Button for mobile (hidden on desktop via CSS) */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn mobile-btn"
                >
                  🔗 View Project
                </a>
              </div>

              {/* Back side (desktop only) */}
              <div className="card-back">
                <h3>{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
