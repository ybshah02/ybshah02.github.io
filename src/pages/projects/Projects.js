import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const softwareProjects = [
    {
      name: "Skora AI",
      description: "Built an OpenAI-based sports agent that conversationally collected aspiring soccer players' information to generate industry-standard cover letters, successfully pitching the product at Qatar Web Summit 2024.",
      image: "/assets/skora.png",
      link: "https://skora.ai",
      github: "https://github.com/ybshah02/skora-ai"
    },
    {
      name: "The Data Grid",
      description: "An open source service for users to define no-code custom defined databases for storage and indexing of arbitrary data.",
      image: "/assets/tdg.png",
      link: "https://thedatagrid.org/",
      github: "https://github.com/The-Data-Grid/The-Data-Grid"
    },
    {
        name: "UCLA Coursework",
        description: "Collection of all the projects and homeworks I completed during my undergraduate degree at UCLA.",
        image: "/assets/uclap2.png",
        link: "",
        github: "https://github.com/ybshah02/ucla-courses"
    }
  ];

  const consultingProjects = [
      {
        name: "Draper Associates",
        description: "Led 6 analysts in conducting a market deep-dive into decentralized governances and DAOs. Presented to Tim Draper.",
        image: "/assets/draper.svg",
        link: "https://www.draper.vc/",
        github: ""
      },
      {
        name: "Salesforce Ventures",
        description: "Led 8 analysts in conducting a market deep dive into Cybersecurity and sourced 60 companies. Presented to entire investment board.",
        image: "/assets/salesforce.svg",
        link: "https://salesforceventures.com/",
        github: ""
      },
      {
        name: "HP Tech Ventures",
        description: "Led 9 analysts in conducting a deep dive into generative AI applications and sourced 80 companies. Presented to head of AI investments.",
        image: "/assets/hp.png",
        link: "https://hptechventures.com/",
        github: ""
      },
      {
        name: "The Fintech Fund",
        description: "Led 5 analysts in scoping out landscape of LPs and founders in the United States on a team of analysts.",
        image: "/assets/fintechfund.png",
        link: "https://www.thefintechfund.com/community",
        github: ""
      }
  ];

  return (
    <section className="projects">
      <h2>Software Projects</h2>
      <div className="project-grid">
        {softwareProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className='divider2'></div>
      <h2 className="projects-header">Consulting Projects</h2>
      <div className="project-grid">
        {consultingProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;