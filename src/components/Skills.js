import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "React.js", years: "3.8 Years", certLink: "/certificates/react.pdf" },
    { name: "Redux", years: "3.8 Years", certLink: "/certificates/redux.pdf" },
    { name: "Context API", years: "3.8 Years", certLink: "/certificates/context.pdf" },
    { name: "JavaScript (ES6+)", years: "3.8 Years", certLink: "/certificates/javascript.pdf" },
    { name: "HTML5", years: "3.8 Years", certLink: "/certificates/html5.pdf" },
    { name: "CSS3", years: "3.8 Years", certLink: "/certificates/css3.pdf" },
    { name: "Bootstrap", years: "3.8 Years", certLink: "/certificates/bootstrap.pdf" },
    { name: "Kubernetes", years: "2 Years", certLink: "/certificates/kubernetes.pdf" },
    { name: "Docker", years: "2 Years", certLink: "/certificates/docker.pdf" },
    { name: "Git", years: "2 Years", certLink: "/certificates/git.pdf" },
    { name: "SQL", years: "3.8 Years", certLink: "/certificates/sql.pdf" },
    { name: "Unix", years: "3.8 Years", certLink: "/certificates/unix.pdf" },
  ];

  const [flipped, setFlipped] = useState(null);

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skills-card ${flipped === index ? "flipped" : ""}`}
            onClick={() => setFlipped(flipped === index ? null : index)}
          >
            {/* Front */}
            <div className="skills-front">{skill.name}</div>

            {/* Back */}
            <div className="skills-back">
              <p>{skill.years}</p>
              <a
                href={skill.certLink}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-text"
                onClick={(e) => e.stopPropagation()} // Stops flipping on click
              >
                Certification
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
