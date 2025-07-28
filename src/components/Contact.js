import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-text">
        I'm always open to new opportunities and collaborations. Whether you have a question, 
        a project idea, or just want to say hi, my inbox is always open!
      </p>

      {/* Contact Buttons */}
      <div className="contact-buttons">
<a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rasika.shirude@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn-primary"
>
  Email Me
</a>
        <a href="https://www.linkedin.com/in/rasika-shirude/" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
        <a href="https://github.com/Rasika-Shirude" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
