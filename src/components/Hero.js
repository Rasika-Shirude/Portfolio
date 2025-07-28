import React from "react";
import "./Hero.css";
import profilePic from "../assets/Photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={profilePic} alt="Rasika Shirude" />
        </div>

        <div className="hero-content">
          <p className="intro">Hi, my name is</p>
          <h1 className="name">Rasika Shirude</h1>
          <h2 className="title">Frontend Developer</h2>
          <p className="tagline">
            I build pixel-perfect, scalable, and high-performing web applications using React.js and modern technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
<a
  href={`${process.env.PUBLIC_URL}/RasikaS_FrontendDeveloper.pdf`}
  download="RasikaS_FrontendDeveloper.pdf"
  className="btn-secondary"
>
  Download Resume
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
