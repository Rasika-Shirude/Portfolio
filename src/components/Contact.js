import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-text">
        I'm always open to new opportunities and collaborations. Whether you have a
        question, a project idea, or just want to say hi, my inbox is always open!
      </p>
      <div className="contact-buttons">
        {/* Email Me (Gmail link) */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rasika.shirude@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Email Me
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/rasika-shirude/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-btn"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/Rasika-Shirude" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-btn"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
