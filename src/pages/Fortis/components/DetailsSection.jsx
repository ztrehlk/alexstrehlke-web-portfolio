import React from 'react';

const DetailsSection = ({ activeSection, features, blogPosts }) => {
  return (
    <>
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
    </>
  );
};

export default DetailsSection;