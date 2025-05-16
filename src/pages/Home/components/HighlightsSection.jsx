// HighlightsSection.js
import React from 'react';
import '../styles/HighlightsSection.css';
import fortisImg from '../../../../public/assets/images/fortis image.png';
import workExperienceImg from '../../../../public/assets/images/work exp 3.png';
import projectsImg from '../../../../public/assets/images/iso img.png';

function HighlightsSection() {

  return (
    <section id="highlights">
      <div className="section-header">
        <h2>Highlights</h2>
        <div className="divider"></div>
      </div>
      <div className="card-grid">
        <div className="card">
          <div className="card-image-container">
            <img src={workExperienceImg} alt="Work Experience" className="card-image" />
          </div>
          <div className="card-content">
            <h3>Experience</h3>
            <p>A quick tour of my roles and experience in data.</p>
            <a href="experience.html">Learn More</a>
          </div>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={fortisImg} alt="Fortis App" className="card-image" />
          </div>
          <div className="card-content">
            <h3>Fortis</h3>
            <p>A social workout app I built with React Native, Django, and AWS.</p>
            <a href="fortis.html">Learn More</a>
          </div>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={projectsImg} alt="Other Projects" className="card-image" />
          </div>
          <div className="card-content">
            <h3>Projects</h3>
            <p>Side projects, open-source contributions, and tangents.</p>
            <a href="projects.html">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;