import React from 'react';
import '../styles/TreeDisplay.css';

const TreeDisplay = ({ experiences }) => {
  return (
    <div className="tree-container">
      <div className="tree-line"></div>
      
      {experiences.map((exp, index) => (
        <div key={index} className={`tree-node ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="node-content">
            <div className="node-header">
              <div className="header-text">
                <h3 className="node-organization">{exp.organization}</h3>
                <h4 className="node-title">{exp.title}</h4>
              </div>
              <div className="node-image-container">
                <img src={exp.image} alt={exp.organization} className="node-image" />
              </div>
            </div>
            
            <p className="node-description">{exp.description}</p>
            
            {exp.skills && (
              <div className="node-skills">
                <div className="skills-container">
                  {exp.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            )}

            {exp.features && (
              <div className="node-projects">
                <h4 className="projects-title">Key Features</h4>
                <ul className="projects-list">
                  {exp.features.map((feature, fIndex) => (
                    <li key={fIndex} className="project-item">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.projects && (
              <div className="node-projects">
                <h4 className="projects-title">Key Projects</h4>
                <ul className="projects-list">
                  {exp.projects.map((project, pIndex) => (
                    <li key={pIndex} className="project-item">{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="node-circle">
            <div className="node-circle-inner"></div>
          </div>
          <span className="node-date">{exp.date}</span>
        </div>
      ))}
    </div>
  );
};

export default TreeDisplay;