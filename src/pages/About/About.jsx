import React from 'react';
import './About.css';
import santaCruzImg from './assets/images/sc-redwoods.jpg';
import profileImg from '../../../public/assets/images/portfolioProfile.png'

const About = () => {
  return (
    <main className="about-container">
      <article className="about-article">
        <header className="about-header">
          <img src={profileImg} alt="Alex Strehlke" className="profile-image" />
          <h1>Alex Strehlke</h1>
          <p className="subtitle">Data Engineer & Full-Stack Developer</p>
        </header>


        <section className="about-section">
          <figure className="image-right">
            <img src={santaCruzImg} alt="Santa Cruz redwoods" />
            <figcaption>Santa Cruz, California</figcaption>
          </figure>
          {/* <h2>Origins</h2> */}
          <p>
            I'm originally from Santa Cruz, California, and studied at the University of Oregon before landing in New York City, where I currently reside.
          </p>

          {/* <figure className="image-left">
            <img src={uoregonImg} alt="University of Oregon campus" />
            <figcaption>Eugene, Oregon</figcaption>
          </figure> */}
          {/* <h2>Professional Evolution</h2> */}
          <p>
            My interest in data began with my college thesis, which examined the rise in domestic crimes following school shutdowns. Using public datasets—including cell phone location data to measure school closures and the NIBRS archive of reported crimes—we built a compelling picture of the impact. That project sparked my desire to pursue a career in data.
          </p>
          <p>
            Since then, I’ve worked across data engineering, analytics, and machine learning. At Kubrick Group, I supported both internal teams and clients by building data pipelines, dashboards, and software solutions. Currently, I’m embedded at Nomura via Kubrick, working on the Middle Office Transformation team to streamline operations, reduce risk, and deliver cross-functional improvements.
          </p>
          {/* <figure className="image-right">
            <img src={fortisImg} alt="Fortis workout app" />
            <figcaption>Fortis workout app</figcaption>
          </figure> */}
          {/* <h2>Building Fortis</h2> */}
          <p>
            Outside of work, I’ve been into the gym since I was 16. That passion led me to create Fortis, a workout app built to address frustrations I had with existing tools. I designed and developed it myself—learning React, React Native, and API development along the way. Today, Fortis is live on both iOS and Android and has grown to 500+ users.
          </p>
          <p>
            Thanks for visiting—feel free to reach out via email or connect with me on LinkedIn!
          </p>
        </section>

        <footer className="about-footer">
          <p><a href="mailto:strehlkea@gmail.com">strehlkea@gmail.com</a></p>
          <p>New York, NY</p>
        </footer>
      </article>
    </main>
  );
};

export default About;