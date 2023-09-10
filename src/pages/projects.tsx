import React from 'react';

const ProjectsPage: React.FC = () => {
  // Replace this with code to fetch and display your projects
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2' },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {/* Add links to project detail pages or demos */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;