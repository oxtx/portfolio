import React from "react";
import "./../styles/Projects.css";

function Projects() {
  const projects = [
    { name: "CookBot", link: "#", description: "A recipe management app." },
    { name: "Travel Planner", link: "#", description: "Plan your trips efficiently." },
    { name: "CryptoSpot", link: "#", description: "Track cryptocurrency prices." },
    { name: "Interview Question Generator", link: "#", description: "Prepare for interviews." },
    { name: "Task Board App", link: "#", description: "Organize your tasks." },
    { name: "Weather Forecast App", link: "#", description: "Check weather forecasts." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
