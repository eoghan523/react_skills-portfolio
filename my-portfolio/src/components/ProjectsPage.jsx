// src/components/ProjectsPage.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { title: "Project 1", description: "An expense tracker app written in Python", url: "https://github.com/eoghan523/expense_tracker.git" },
  { title: "Project 2", description: "A Modular calcucator written in Javascript", url: "https://github.com/eoghan523/modularized_calculator-.git" },
  { title: "Project 3", description: "A python To-Do list app to get organised", url: "https://github.com/eoghan523/python_todo-list.git" },
  { title: "Project 4", description: "An E-commerce app using Django framework", url: "https://github.com/eoghan523/ecommerce.git" },
  { title: "Project 5", description: "A Movie Showcase website shared group project", url: "https://github.com/eoghan523/movie_showcase.git" }
];

const ProjectsPage = () => (
  <section>
    <h1>My Projects</h1>
    <div className="project-gallery">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectsPage;
