import React from 'react';
import './styles/FortisPage.css';
import phoneWithApp from './assets/images/initial-fortis.png';
import fortisBanner from './assets/images/fortis-banner.png';

// Feature data
const features = [
  { 
    title: 'Workout Logging', 
    desc: 'Precision tracking for every rep and set with our intuitive logging interface. Designed for lifters who care about the details.',
  },
  { 
    title: 'Strength Analytics', 
    desc: 'Data-driven insights to visualize your strength progress over time.',
  },
  { 
    title: 'Social Feed', 
    desc: 'Connect with a community of dedicated lifters and share your journey.',
  },
];

// Blog posts data
const blogPosts = [
  {
    title: 'Putting Together The First Pitch Deck',
    date: 'March 15, 2024',
    excerpt: 'How I distilled the essence of Fortis into a compelling investor presentation...',
  },
  {
    title: 'Why Are Users Downloading the App But Not Making an Account',
    date: 'April 2, 2024',
    excerpt: 'Analyzing the onboarding funnel and identifying key drop-off points...',
  },
  {
    title: 'So... Do People Actually Use It?',
    date: 'May 10, 2024',
    excerpt: 'Early retention metrics and user engagement patterns after launch...',
  },
];

const Fortis = () => {
  return (
    <div className="fortis-container">
      <header className="fortis-header">
        <div className="header-content">
            <img src={fortisBanner} alt="Fortis Logo" className="logo" />
          {/* <h1>Fortis</h1> */}
          <p className="subtitle">Social Workout Log & Tracker</p>
          <p className="header-description">
            I could never find a workout app that truly worked for me—I always ended up using my notes app to track workouts. So I built <strong>Fortis</strong> independently to solve my own problem and to feel more connected with friends and family across the country through fitness.
          </p>
          <a href="https://fortisworkout.com" className="app-link" target="_blank" rel="noopener noreferrer">
            Visit Fortis
          </a>
        </div>
        <div className="header-image">
          <img src={phoneWithApp} alt="Fortis app on iPhone" />
        </div>
      </header>

      <section className="project-overview">
        <h2>Project Overview</h2>
        <div className="overview-content">
          <div className="overview-text">
            <p>
              Fortis is a cross-platform mobile app (iOS & Android) designed for fitness enthusiasts who want to 
              track their workouts, analyze progress, and connect with a community of like-minded individuals.
            </p>
            <p>
              As the sole founder and developer, I handled everything from concept to launch, including design, 
              development, deployment, and user acquisition.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">450+</span>
                <span className="stat-label">Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Platforms</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1,000+</span>
                <span className="stat-label">Workouts Logged</span>
              </div>
            </div>
          </div>
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <ul>
              <li>React Native (Expo)</li>
              <li>Django REST Framework</li>
              <li>PostgreSQL</li>
              <li>AWS (EC2, RDS, S3)</li>
              <li>Google/Apple SSO</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="key-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <a href="#" className="read-more">Learn more →</a>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <a href="#" className="view-all">View All Features</a>
        </div>
      </section>

      <section className="development-blog">
        <h2>Development Journey</h2>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <div className="post-date">{post.date}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more">Continue reading →</a>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <a href="#" className="view-all">View All Posts</a>
        </div>
      </section>
    </div>
  );
};

export default Fortis;