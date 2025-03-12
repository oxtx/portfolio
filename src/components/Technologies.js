import React from "react";
import "./../styles/Technologies.css";

function Technologies() {
  const techList = [
    "HTML5", "CSS3", "JavaScript", "React", "Node.js",
    "Express.js", "MongoDB", "GraphQL", "Git", "Redux",
    "Bootstrap", "Material UI", "Figma", "SQL"
  ];

  return (
    <section id="technologies" className="technologies">
      <h2>Technologies I Use</h2>
      <div className="tech-grid">
        {techList.map((tech, index) => (
          <div key={index} className="tech-item">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
