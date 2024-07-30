import React from 'react';
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ name, description, image, link, github }) => {
  return (
    <div className="project-card">
      <div className="card-content">
        <img src={image} alt={name} className="project-image" />
        <div className="name-and-link">
          <h3>{name}</h3>
          <div class="name-and-link-icons">
                {link && (
                    <a href={link} target="_blank" className="view-link" aria-label={`View ${name} project`}>
                        <HiArrowTopRightOnSquare />
                    </a>
                )}
                {github && (
                    <a href={github} target="_blank" className="view-link" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                )}
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div className="hover-line"></div>
    </div>
  );
};

export default ProjectCard;