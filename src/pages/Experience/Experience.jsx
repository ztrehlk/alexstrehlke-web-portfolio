import React from 'react';
import TreeDisplay from './components/TreeDisplay';
import './styles/Experience.css'; 
import nomuraLogo from './assets/images/nomura.png';
import kubrickLogo from './assets/images/kubrick.png';
import oregonLogo from './assets/images/oregon.png';
import fortisLogo from './assets/images/fortis.png';
import covidPdf from './assets/files/The Effect of COVID-19 on Domestic Crime.pdf';
import healthInsurancePdf from './assets/files/Observing the Impact of Individual Characteristics on access to Employer Sponsored Health Insurance.pdf';

const experiences = [
  {
    organization: "Fortis Workout LLC",
    title: "Founder / Developer",
    date: "2024 - Present",
    description: "Designed and launched a cross-platform fitness app for workout tracking and social engagement. Responsible for full-stack development, user growth, and ongoing feature expansion.",
    image: fortisLogo,
    // skills: ["React Native", "Django", "AWS", "UI/UX Design"]
    features: [
      "Workout tracking and progress visualization",
      "Social features for community engagement",
      "Cross-platform compatibility (iOS and Android)",
    ]
  },
  {
    organization: "Nomura Holdings",
    title: "Data Engineer",
    date: "2023 - Present",
    description: "Focused on building automation workflows and streamlining reporting processes within the Middle Office Transformation team. Delivered analytical solutions through data pipelines, dashboards, and workflow optimization.",
    image: nomuraLogo,
    // skills: ["Python", "SQL", "ETL", "Data Pipelines", "Spark"]
  },
  {
    organization: "Kubrick Group",
    title: "Data Consultant",
    date: "2022 - 2023",
    description: "Consulted on data engineering and analytics projects across industries, supporting both client and internal initiatives. Delivered solutions involving ETL pipelines, ML models, and dashboarding tools.",
    image: kubrickLogo,
    // skills: ["Data Strategy", "Team Leadership", "Client Consulting"]
  },
  {
    organization: "University of Oregon",
    title: "B.Sc. Economics",
    date: "2019 - 2022",
    description: "Minors in Math and History, with a focus on microeconomic theory and econometrics.",
    image: oregonLogo,
    // skills: ["Economics", "Data Analysis", "Machine Learning"],
    projects: [
      {
        title: "The Effect of COVID-19 on Domestic Crime: An Analysis of School Closure and Mitigating Effects",
        pdf: covidPdf
      },
      {
        title: "Observing the Impact of Individual Characteristics on access to Employer Sponsored Health Insurance",
        pdf: healthInsurancePdf
      }
    ]
  }
];

const Experience = () => {
    return (
        <main className="experience-page">
            <div className="experience-container">
                <h1>Experience</h1>
                <p className="subtitle">A timeline of my professional journey</p>
                <TreeDisplay experiences={experiences} />
            </div>
        </main>
    );
};

export default Experience;