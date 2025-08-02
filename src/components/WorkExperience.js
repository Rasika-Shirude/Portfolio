import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Infosys Ltd, Pune",
      position: "Senior Systems Engineer - HDFC Bank",
      duration: "2023 – Present",
      details: [
        "Designed and implemented responsive UI/UX improvements using React.js and CSS3.",
        "Managed scalable application deployments with Kubernetes pods and containers.",
        "Led CI/CD pipelines and version control with Git/GitHub."
      ],
    },
    {
      position: "Systems Engineer - Axis Bank",
      duration: "2021 - 2023",
      details: [
        "Upgraded Finacle WMS for Axis Bank (10.2.16 → 11.11) by developing custom menus and integrating REST APIs.",
        "Enhanced HDFC Bank applications, implemented CI/CD pipelines with Docker & Kubernetes.",
        "Collaborated with cross-functional teams to deliver scalable and responsive UI using React.js, Redux, and modern CSS."
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Work Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <h3>{exp.company}</h3>
            <h4>{exp.position}</h4>
            <span className="duration">{exp.duration}</span>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
