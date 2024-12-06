import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('https://api.github.com/users/eoghan523/repos');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      {projects.length > 0 ? (
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} name={project.name} url={project.html_url} />
          ))}
        </div>
      ) : (
        <p>Loading projects...</p>
      )}
    </div>
  );
};

export default Projects;
