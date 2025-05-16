import React from 'react';

function HighlightsSection() {
  return (
    <section id="highlights">
      <h2>Highlights</h2>
      <div className="card-grid">
        <div className="card">
          <h3>Work Experience</h3>
          <p>A quick tour of roles in finance, consulting, and analytics.</p>
          <a href="experience.html">Learn More</a>
        </div>
        <div className="card">
          <h3>Fortis</h3>
          <p>A fitness app I built with React Native, Django, and AWS.</p>
          <a href="fortis.html">Learn More</a>
        </div>
        <div className="card">
          <h3>Other Projects</h3>
          <p>Side projects, open-source contributions, and tangents.</p>
          <a href="projects.html">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;