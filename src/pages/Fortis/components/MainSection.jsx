import React from 'react';
// import profileImg from '../assets/images/profile.png';
// import exploreImg from '../assets/images/explore.png';
// import feedImg from '../assets/images/feed.png';
// import loggingImg from '../assets/images/logging.png';
// import e1rmImg from '../assets/images/e1rm.png';
import initialImg from '../assets/images/initial-fortis.png'

const MainSection = (props) => {
  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-text">
          <h1>Fortis</h1>
          <h2>Strength training, simplified</h2>
          <p className="subtitle">
            Independently built workout app for logging, tracking, and social engagement.
            Launched on iOS & Android with 450+ users.
          </p>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">450+</div>
              <div className="stat-label">Users</div>
            </div>
            <div className="stat">
              <div className="stat-number">1,000+</div>
              <div className="stat-label">Workouts Logged</div>
            </div>
            <div className="stat">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Stars</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={initialImg} alt="Fortis app interface" />
        </div>
      </section>
    </main>
  );
};

export default MainSection;