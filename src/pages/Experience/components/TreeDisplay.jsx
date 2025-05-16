import React from 'react';
import '../styles/TreeDisplay.css';

const TreeDisplay = ({ experiences }) => {
  return (
    <div className="tree-container">
      <div className="tree-line"></div>
      
      {experiences.map((exp, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className={`tree-node ${isEven ? 'left' : 'right'}`}>
            <div className="node-content">
              <div className="node-header">
                <h3 className="node-title">{exp.title}</h3>
                <span className="node-date">{exp.date}</span>
              </div>
              {exp.image && (
                <div className="node-image-container">
                  <img src={exp.image} alt={exp.title} className="node-image" />
                </div>
              )}
              <p className="node-description">{exp.description}</p>
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
            <div className="node-circle"></div>
          </div>
        );
      })}
    </div>
  );
};

export default TreeDisplay;