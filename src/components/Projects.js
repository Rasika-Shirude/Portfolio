import React from "react";
import "./Projects.css";
import taskImg from "../assets/taskmanager.png";
import interiorImg from "../assets/interior.png";

const Projects = () => {
  const projectData = [
    {
      title: "Task Management App",
      description:
        "Full-stack role-based task management system with Firebase Authentication, real-time CRUD, data visualization using Chart.js, and responsive dashboards.",
      tech: "React, Router, CSS3, Firebase, Chart.js, GitHub",
      image: taskImg,
      demo: "https://rasika-shirude.github.io/TaskManager/",
      code: "https://github.com/Rasika-Shirude/TaskManager",
    },
    {
      title: "Interior Design Website",
      description:
        "Modern, mobile-responsive website with React Hooks, Router navigation, and reusable components for scalability.",
      tech: "React, CSS3, Router, GitHub",
      image: interiorImg,
      demo: "https://rasika-shirude.github.io/InteriorWebsite/",
      code: "https://github.com/Rasika-Shirude/InteriorWebsite",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="description">{project.description}</p>
            <div className="project-buttons">
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">Live Demo</a>
              <a href={project.code} target="_blank" rel="noreferrer" className="btn-secondary">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
