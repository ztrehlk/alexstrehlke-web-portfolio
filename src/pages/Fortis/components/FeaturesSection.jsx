import React from 'react';
import '../styles/Features.css';
import profileImg from '../assets/images/profile.png';
import exploreImg from '../assets/images/explore.png';
import feedImg from '../assets/images/feed.png';
import loggingImg from '../assets/images/logging.png';
import e1rmImg from '../assets/images/e1rm.png';

const FeaturesSection = () => {
  const features = [
    { 
      img: loggingImg, 
      title: 'Workout Logging', 
      desc: 'Precision tracking for every rep and set with our intuitive logging interface. Designed for lifters who care about the details.',
      details: 'Record exercises, weights, reps, and rest periods with ease. Categorize by muscle groups and save favorite routines.'
    },
    { 
      img: e1rmImg, 
      title: 'Strength Analytics', 
      desc: 'Data-driven insights to visualize your strength progress over time.',
      details: 'Automated e1RM calculations, progress charts, and performance trends help you understand your true strength potential.'
    },
    { 
      img: feedImg, 
      title: 'Social Feed', 
      desc: 'Connect with a community of dedicated lifters and share your journey.',
      details: 'Post workouts, celebrate PRs, and get inspired by others. Built-in support system to keep you motivated.'
    },
    { 
      img: exploreImg, 
      title: 'Exercise Explorer', 
      desc: 'Expand your training repertoire with our comprehensive exercise library.',
      details: 'Discover 500+ exercises with proper form videos, muscle targeting, and variations to keep your training fresh.'
    },
    { 
      img: profileImg, 
      title: 'Progress Tracking', 
      desc: 'Visual documentation of your transformation journey.',
      details: 'Body metrics tracking, before/after comparisons, and milestone celebrations to recognize your hard work.'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h2 className="features-headline">Designed for Lifters</h2>
        <p className="features-subhead">Tools that match your dedication to progress</p>
      </div>
      
      <div className="features-vertical">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <div className="feature-details">
                <p>{feature.details}</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img 
                src={feature.img} 
                alt={feature.title} 
                className="feature-image"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;