import React from "react";
import "./../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <h1>Tom Nishi</h1>
      <h2>Full Stack Web Developer</h2>
      <p>
        Hi! I'm Tom, a passionate Full Stack Web Developer based in Chicago, USA.
        I thrive in creating meaningful user experiences and solving complex problems.
        Let's build something amazing together!
      </p>
      <img src="profile-picture.jpg" alt="Tom Nishi" className="profile-pic" />
    </section>
  );
}

export default About;
