import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import taskImg from "../assets/taskmanager.png";
import interiorImg from "../assets/interior.png";

const Projects = () => {
  const projectData = [
    {
      title: "Task Management App",
      description:
        "Role-based task management system with Firebase Authentication, real-time CRUD, and Chart.js analytics.",
      tech: "React, Firebase, Firestore, Chart.js",
      image: taskImg,
      demo: "https://rasika-shirude.github.io/TaskManager/",
      code: "https://github.com/Rasika-Shirude/TaskManager",
    },
    {
      title: "Interior Design Website",
      description:
        "Mobile-responsive website built with React Hooks, Router navigation, and reusable UI components.",
      tech: "React, CSS3, Router",
      image: interiorImg,
      demo: "https://rasika-shirude.github.io/InteriorWebsite/",
      code: "https://github.com/Rasika-Shirude/InteriorWebsite",
    },
  ];

  return (
    <section id="projects" className="projects">
<h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="description">{project.description}</p>
            <div className="project-buttons">
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
