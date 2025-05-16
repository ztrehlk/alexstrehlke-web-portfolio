import React from 'react';
// import profileImg from '../assets/images/profile.png';
// import exploreImg from '../assets/images/explore.png';
// import feedImg from '../assets/images/feed.png';
// import loggingImg from '../assets/images/logging.png';
// import e1rmImg from '../assets/images/e1rm.png';
import initialImg from '../assets/images/initial-fortis.png'

const MainSection = ({ activeSection, blogPosts, features }) => {
  return (
    <main className="main-content">
      {activeSection === 'overview' && (
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
      )}

      {activeSection === 'features' && (
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-image">
                  <img src={feature.img} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeSection !== 'overview' && activeSection !== 'features' && (
        <section className="blog-section">
          <h2>{blogPosts.find(post => post.id === activeSection)?.title}</h2>
          <div className="blog-content">
            <p>This is where your blog post about "{blogPosts.find(post => post.id === activeSection)?.title}" would appear.</p>
            <p>You can write about your experiences, challenges, and insights from developing Fortis.</p>
            <p>For example, you might discuss:</p>
            <ul>
              <li>The technical challenges you faced</li>
              <li>User feedback you received</li>
              <li>Metrics and analytics</li>
              <li>Lessons learned</li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
};

export default MainSection;