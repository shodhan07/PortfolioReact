import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Resume Builder",
    description: "A web-based tool to create and download resumes.",
    link: "https://github.com/shodhan07/resume-builder"
  },
  {
    title: "Music Player",
    description: "A sleek music player built with web technologies.",
    link: "https://github.com/shodhan07/music-player"
  },
  {
    title: "To-Do List",
    description: "Simple task management app using HTML, CSS & JS.",
    link: "https://github.com/shodhan07/todo-list"
  },
  {
    title: "Hospital Management System",
    description: "Full-stack system to manage patients, doctors, and records.",
    link: "https://github.com/shodhan07/hospital-management"
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
