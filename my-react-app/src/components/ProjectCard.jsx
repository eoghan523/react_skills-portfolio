import React from 'react';

const ProjectCard = ({ name, url, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`Avatar for project ${name}`} className="project-image" />
      <h3>{name}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
