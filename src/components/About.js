import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">

        <div className="about-content">
          <p>
            Hi, I'm <strong>Rasika Shirude</strong>, a passionate Frontend Developer
            with 3+ years of experience building pixel-perfect, scalable, and
            high-performing web applications. I enjoy creating clean UI designs,
            writing maintainable code, and collaborating with teams to deliver
            impactful solutions.
          </p>
          <p>
            My expertise includes <strong>React.js</strong>, <strong>Redux</strong>,
            <strong> JavaScript (ES6+)</strong>, <strong>CSS3</strong>, and
            <strong> Docker/Kubernetes</strong>. I'm always eager to learn
            emerging technologies and contribute to projects that challenge me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
