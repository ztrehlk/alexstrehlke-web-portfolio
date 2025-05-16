import React, { useRef } from 'react';
import DataOrbit from './DataOrbit';
import '../../styles/HeaderSection.css'; 

function HeaderSection() {
  const profileImgRef = useRef(null);

  return (
    <section id="home">
      <header>
        <div className="profile-image-container">
          <div className="orbit-wrapper">
            <DataOrbit targetElement={profileImgRef} />
            <img
              ref={profileImgRef}
              src="/assets/images/Portfolio - Profile Image.png"
              alt="Alex Strehlke"
              className="profile-image"
            />
          </div>
        </div>
        <h1>Alex Strehlke</h1>
        <p>
          Welcome! This space showcases my work across data, tech, and software
          development—along with a few side projects and experiments I'm excited
          about.
        </p>
      </header>
    </section>
  );
}

export default HeaderSection;