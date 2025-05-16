import React from 'react';
import '../styles/ContactSection.css'; 

function ContactSection() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:strehlkea@gmail.com" className="contact-btn">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/alex-s-a09452133/"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactSection;