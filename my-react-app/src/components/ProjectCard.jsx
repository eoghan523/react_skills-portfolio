const ProjectCard = ({ name, url }) => {
    return (
      <div className="project-card">
        <h3>{name}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    );
  };
  
  export default ProjectCard;
  