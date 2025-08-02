import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";  // Correct import
import "./Hero.css";
import profilePic from "../assets/Photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Profile Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profilePic} alt="Rasika Shirude" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="intro">Hi, my name is</p>
          <h1 className="name">Rasika Shirude</h1>

          {/* Typing Animation with Blinking Cursor */}
          <motion.h2
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <ReactTyped
              strings={[
                "Frontend Developer",
                "React.js Specialist",
                "UI/UX Enthusiast",
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              loop
              showCursor={true}
              cursorChar="|"
            />
          </motion.h2>

          <p className="tagline">
            I build pixel-perfect, scalable, and high-performing web applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn-primary">
              View Projects
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/RasikaS_FrontendDeveloper.pdf`}
              download="RasikaS_FrontendDeveloper.pdf"
              className="hero-btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
