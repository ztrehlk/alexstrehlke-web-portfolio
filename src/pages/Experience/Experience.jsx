// Experience.js
import React from 'react';
import TreeDisplay from './components/TreeDisplay';
import './styles/Experience.css'; 
import nomuraLogo from './assets/images/nomura.png';
import kubrickLogo from './assets/images/kubrick.png';
import oregonLogo from './assets/images/oregon.png';

const experiences = [
  {
    title: "Data Engineer at Nomura",
    date: "2023 - Present",
    description: "Developed and maintained data pipelines processing millions of records daily. Optimized ETL processes reducing runtime by 40%.",
    image: nomuraLogo,
    // projects: [
    //   "Real-time trade monitoring system",
    //   "Data warehouse migration to Snowflake",
    //   "Automated data quality framework"
    // ]
  },
  {
    title: "Data Consultant at Kubrick",
    date: "2022 - Present",
    description: "Consulted for Fortune 500 clients on data strategy and implementation. Led a team of 5 junior consultants.",
    image: kubrickLogo,
  },
  {
    title: "B.Sc. Computer Science, University of Oregon",
    date: "2019 - 2022",
    description: "Graduated with honors. Specialized in data systems and machine learning.",
        image: oregonLogo,
    projects: [
      "Thesis on distributed database optimization",
      "Student government data analysis project"
    ]
  }
];

const Experience = () => {
    return (
        <main className="experience-page">
            <div className="experience-container">
                <h1>Experience</h1>
                <p>A visualization of my experience</p>
                <TreeDisplay experiences={experiences} />
            </div>
        </main>
    );
};

export default Experience;