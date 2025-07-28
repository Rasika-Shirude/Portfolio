import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
       

        {/* About Content */}
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm <strong>Rasika Shirude</strong>, a Frontend Developer with 3+ years of experience 
            building scalable and pixel-perfect web applications. I specialize in 
            <strong> React.js, Redux, JavaScript, Kubernetes, and CI/CD pipelines</strong>.
          </p>
          <p>
            I thrive in agile environments, enjoy solving real-world challenges, 
            and love creating intuitive user interfaces that make a difference.
          </p>
          <p>
            Outside of coding, I enjoy learning new tech stacks and contributing 
            to projects that enhance user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
