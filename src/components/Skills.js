import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "React.js",
    "Redux",
    "Context API",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Kubernetes",
    "Docker",
    "Git",
    "SQL",
    "Unix",
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-row">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
